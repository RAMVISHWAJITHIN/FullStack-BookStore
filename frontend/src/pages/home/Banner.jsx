import React from 'react'
import bannerImg from "../../assets/banner.png"
const Banner = () => {
    return (
        <div className='flex flex-col md:flex-row-reverse py-16 justify-between items-center'>
             <div className='md:w-1/2 w-full flex items-center md:justify-end'>
                   <img src={bannerImg} alt="hero-section-img"/>
            </div>
            <div className='md:w-1/2 w-full'> 
                <h1 className='md:text-5xl text-2xl font-medium'>New Releases This Week</h1>
                <p className='mb-10'>It's time to update ypur reading list with some of the latest and greatest realeases in the literary wolrd.From heart-pumping thrillers to captivating memoirs,this week's new releases offer something for everyone</p>
                 <button className='btn-primary'>Subscribe</button>
            </div>
           
        </div>
    )
}

export default Banner