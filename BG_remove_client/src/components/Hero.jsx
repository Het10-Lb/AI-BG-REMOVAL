import React , {useContext} from 'react'
import {assets} from '../assets/assets'
// import AppContextProvider from '../context/AppContext'
import {AppContext} from '../context/AppContext'
    
const Hero = () => {
  const { removeBg } = useContext(AppContext);
  return (
    <div className="flex item-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-8   lg:flex-row lg:gap-x-10 lg:px-44 sm:mt-20">
        {/* Left side  */}
        <div className="pt-10 max-w-lg">
            <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight">
                Remove the <br className="max-md:hidden"/> <span className = 'bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text '>Background</span> from <br  className='max-md:hidden'/> Images for free.</h1>
            <p className="text-[15px] my-6 text-gray-500">Upload your image Here <br  className='max-sm:hidden'/>and our AI will automatically remove the background for you.</p>
            <div> 
                <input onChange={(e) => removeBg(e.target.files[0])} type="file" accept="image/*" name="" id="upload1" hidden/>
                <label htmlFor="upload1" className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 m-auto hover:scale-105 transition-all duration-700'>
                    <img width = {20} src = {assets.upload_btn_icon} alt="" /> 
                    <p className="text-white font-medium">Upload your image</p>
                </label>
            </div>
        </div>
        {/* Right side  */}

        <div className="w-full max-w-md">   
            <img src={assets.header_img} alt="Hero" />
        </div>


    </div>
  )
}

export default Hero