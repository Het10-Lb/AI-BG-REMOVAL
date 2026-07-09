// API CONTTOLLER FUNCTION TO MANAGE CLERK USER WITH DATABASE

// http://localhost:3000/api/user/webhooks
import { Webhook } from "svix";
import userModel from "../models/user.model.js";
import Razorpay from 'razorpay'
import transactionModel from "../models/transaction.model.js";

const clerkWebhooks = async (req, res) => {
	try {
		// Create a svix instance with clerk webhook secret
		const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

		await whook.verify(JSON.stringify(req.body), {
			"svix-id": req.headers["svix-id"],
			"svix-timestamp": req.headers["svix-timestamp"],
			"svix-signature": req.headers["svix-signature"],
		});

		const { data, type } = req.body;

		switch (type) {
			case "user.created": {
				const userData = {
					clerkId: data.id,
					email: data.email_addresses[0].email_address,
					firstName: data.first_name,
					lastName: data.last_name,
					photo: data.image_url,
				};

				// console.log("User Created", userData);
				await userModel.create(userData);
				res.json({ success: true, message: "User Created" });

				break;
			}
			case "user.updated": {
				const userData = {
					email: data.email_addresses[0].email_address,
					firstName: data.first_name,
					lastName: data.last_name,
					photo: data.image_url,
				};

				// console.log("User Updated", userData);
				await userModel.findOneAndUpdate({ clerkId: data.id }, userData);
				res.json({});
				break;
			}
			case "user.deleted": {
				await userModel.findOneAndDelete({ clerkId: data.id });
				res.json({});
				break;
			}

			default:
				break;
		}
	} catch (error) {
		console.log(error);
		res.json({ success: false, message: error.message });
	}
};

// API controller function to get user available credits data
const userCredits = async (req, res) => {
	try {
		const { clerkId } = req;
		const userData = await userModel.findOne({ clerkId });

		res.json({ success: true, credits: userData.creditBalance });
	} catch (error) {
		console.log(error);
		res.json({ success: false, message: error.message });
	}
};


const razorpayInstance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const paymentRazorpay = async (req, res) => {
    try {
        console.log('Request body:', req.body);
        const { clerkId } = req;
        const { planId } = req.body;

        // Check if user exists
        const userData = await userModel.findOne({ clerkId });
        // console.log('User data:', userData);

        if (!userData || !planId) {
            console.log('Missing user data or planId');
            return res.status(400).json({ success: false, message: 'Invalid Credentials' });
        }

        let credits, plan, amount;

        // console.log('Processing plan...');
        switch (planId) {
            case 'Basic': {
                plan = 'Basic';
                credits = 10;
                amount = 100;
                break;
            }
            case 'Advanced': {
                plan = 'Advanced';
                credits = 50;
                amount = 500;
                break;
            }
            case 'Business': {
                plan = 'Business';
                credits = 500;
                amount = 2500;
                break;
            }
            default: {
                console.log('Invalid planId provided');
                return res.status(400).json({ success: false, message: 'Invalid planId' });
            }
        }

        const date = Date.now();

        // Create transaction
        const transactionData = {
            clerkId,
            plan,
            amount,
            credits,
            date,
        };

        // console.log('Creating new transaction...');
        const newTransaction = await transactionModel.create(transactionData);

        // Create Razorpay order
        const options = {
            amount: amount * 100, // Convert to smallest currency unit
            currency: process.env.CURRENCY || 'INR',
            receipt: String(newTransaction._id), 
        };

        // console.log('Creating Razorpay order...');
        const order = await razorpayInstance.orders.create(options);

        // Send response
        res.json({ success: true, order });
    } catch (error) {
        console.error('Error occurred:', error.message || error);
        res.status(500).json({ success: false, message: 'An internal server error occurred', error: error.message });
    }
};







// API Controller function to verify razorpay function 




const verifyRazorpay = async(req,res) => {
    try {
        const {razorpay_order_id} = req.body 

        const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id)
        if(orderInfo.status === 'paid'){
            const transactionData = await transactionModel.findById(orderInfo.receipt)
            if(transactionData.payment){
                return res.json({success:false, message:"Payment Failed!"})
            }

            // adding credits in user data
            const userData = await userModel.findOne({clerkId:transactionData.clerkId})
            const creditBalance = userData.creditBalance + transactionData.credits

            await userModel.findByIdAndUpdate(userData._id,{creditBalance})

            // making the payment paid 
            await transactionModel.findByIdAndUpdate(transactionData._id,{payment:true})

            res.json({success:true,message:"Credits Added!"})
        }


    } catch (error) {
        console.log(error);
		res.json({ success: false, message: "error on razorpay" });
    }
}

export { clerkWebhooks, userCredits, paymentRazorpay, verifyRazorpay };



