import express from 'express'
import authUser from '../middleware/auth.js'
import {clerkWebhooks , userCredits , paymentRazorpay , verifyRazorpay} from '../controllers/userController.js'

const userRouter = express.Router()

userRouter.post('/webhooks', clerkWebhooks)
userRouter.get('/credits',authUser,userCredits)
userRouter.post('/pay-razor',authUser,paymentRazorpay)
userRouter.post('/verify-razor',verifyRazorpay)

export default userRouter;