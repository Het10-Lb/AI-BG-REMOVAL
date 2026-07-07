import React from 'react'

import {assets} from '../assets/assets'
import { Link } from 'react-router-dom'
// import { useClerk } from '@clerk/clerk-react' 
import { useClerk } from '@clerk/react' 
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'

const Navbar = () => {

  const {openSignIn} = useClerk()
  const {isSignedIn , user} = useClerk()

  return (
    <div className = "flex justify-between items-center py-3 mx-4 lg:mx-44 ">
        <Link to="/">
            <img className="w-32 sm:w-44" src={assets.logo} alt="Logo" />
        </Link>
       {
        isSignedIn ? <div> 
          <UserButton />
          </div> :
       
            <button onClick={() => openSignIn() } className="flex items-center gap-4 px-4 py-2 sm:px-8 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors duration-300 rounded-full  ">
                Get Started <img className='w-3 sm:w-4' src={assets.arrow_icon} alt="" /> 
            </button>
        }
        
    </div>
  )

}

export default Navbar