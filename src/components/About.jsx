import React from 'react'

function About() {
  return (
    <div className='text-gray text-sm bg-white p-4 rounded-md font-normal'>
        <h2 className='text-black text-xl font-medium mb-4'>About Bitcoin</h2>
        <h4 className='text-black text-lg font-medium my-2'>What is Bitcoin?</h4>
        <p className='mb-3'>Bitcoin's price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.</p>
        <hr />
        <h5 className='text-black text-lg font-medium my-2'>Lorem ipsum dolor sit amet</h5>
        <p className='my-3'>Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.</p>
        <p className='my-3'>Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.</p>
        <p className='my-3'>Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui</p>
        <hr />
        <h2 className='text-black text-lg font-medium my-4'>Already Holding Bitcoin?</h2>
        <div className='flex flex-col md:flex-row justify-center items-center space-y-4 md:space-x-5'>
          <div className="bg-gradient-to-r from-[hsla(136,82%,72%,1)] to-[hsla(205,84%,36%,1)] rounded-md p-3 md:w-[50%] w-[95%] flex space-x-4 items-center ">
            <img src="./profitsImg.jpg" alt="image" className='rounded-md w-[120px] h-[120px] object-cover'/>
            <div>
              <h6 className='text-white text-lg font-medium md:my-3 my-1'>Calculate your Profits</h6>
              <button className='bg-white text-black rounded-md px-4 py-1 md:my-3 my-1 font-medium'>Check now <i class="fa-solid fa-arrow-right"></i></button>
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#ff9068] to-[#ff4b1f] rounded-md p-3  md:w-[50%] w-[95%] flex space-x-4  items-center">
            <img src="./liabilityImg.jpg" alt="image"  className='rounded-md w-[120px] h-[120px] object-cover'/>
            <div>
              <h6 className='text-white text-lg  font-medium md:my-3 my-1'>Calculate your tax liability</h6>
              <button  className='bg-white text-black rounded-md px-4 md:my-3 my-1 py-1 font-medium'>Check now <i class="fa-solid fa-arrow-right"></i></button>
            </div>
          </div>
        </div>
        <hr className='my-3 font-bold'/>
        <p className='my-3'>Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus Fermentum potenti iaculis lacinia conque insum fames amet dui. Purus ultrices tincidunt</p>
    </div>
  )
}

export default About