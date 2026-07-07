//steps to remove background

import React from 'react'
import {assets} from '../assets/assets'

const Steps = () => {
  return (
    <div className='mx-4 lg:mx-44 py-20 xl:py-40'>
        <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 mb-6 font-semibold leading-tight bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>Steps to remove the background <br /> image in seconds</h1>

        <div className='flex items-start flex-wrap gap-4 mt-24 xl:mt-28 justify-center '>

          <div className='flex items-start gap-4 bg-white  drop-shadow-md p-7 pb-10 rounded hover:scale-105 tarnsition-all duration-500'>
              <img className = "max-w-9"  src={assets.upload_icon} alt="" />
                  <div>
                    <p className='text-xl font-medium'>Upload image</p>
                    <p className='text-sm text-neutral-500 mt-1'>This is a demo text, will replace it later.<br/> This is a demo..</p>
                  </div>
          </div>

          <div className='flex items-start gap-4  bg-white  drop-shadow-md p-7 pb-10 rounded hover:scale-105 tarnsition-all duration-500'>
              <img className = "max-w-9"  src={assets.remove_bg_icon} alt="" />
                  <div>
                    <p className='text-xl font-medium'>Remove BackGround</p>
                    <p className='text-sm text-neutral-500 mt-1'>This is a demo text, will replace it later.<br/> This is a demo..</p>
                  </div>
          </div>

          <div className='flex items-start gap-4 bg-white  drop-shadow-md p-7 pb-10 rounded hover:scale-105 tarnsition-all duration-500'>
              <img className = "max-w-9"  src={assets.download_icon} alt="" />
                  <div>
                    <p className='text-xl font-medium'>Download Result</p>
                    <p className='text-sm text-neutral-500 mt-1'>This is a demo text, will replace it later.<br/> This is a demo..</p>
                  </div>
          </div>
            
      </div>
    </div>
  )
}

export default Steps