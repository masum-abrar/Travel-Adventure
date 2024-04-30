import pic12 from '../assets/pic12.jpg';
import pic13 from '../assets/pic13.jpg';
import pic14 from '../assets/pic14.jpg';
import pic15 from '../assets/pic15.jpg';
import pic16 from '../assets/pic16.jpg';
import pic17 from '../assets/pic17.jpg';
export const Countries = () => {
  return (
    <div className='max-w-[1120px] mx-auto '>
       <h1 className='font-bold text-3xl text-center mt-20 mb-20'>Top Countries</h1>
      <div className='grid grid-cols-3 gap-5'>
      <div className=''>
            <img className='w-96 h-60 rounded-lg flex-grow' src={pic12} alt="" />
            <div className=''>
            <h1 className='relative bottom-36 ml-40 font-bold text-xl text-white'>
               SPAIN
            </h1>
          
            </div>
            </div>
            <div className=''>
            <img className='w-96 h-60 rounded-lg flex-grow' src={pic13} alt="" />
            <div className=''>
            <h1 className='relative bottom-36 ml-40 font-bold text-xl text-white'>
            ITALY
            </h1>
          
            </div>
            </div>
            <div className=''>
            <img className='w-96 h-60 rounded-lg flex-grow' src={pic14} alt="" />
            <div className=''>
            <h1 className='relative bottom-36 ml-40 font-bold text-xl text-white'>
              FRANCE
            </h1>
          
            </div>
            </div>
            <div className=''>
            <img className='w-96 h-60 rounded-lg flex-grow' src={pic15} alt="" />
            <div className=''>
            <h1 className='relative bottom-36 ml-40 font-bold text-xl text-white'>
            
                NETHERLANDS
            </h1>
          
            </div>
            </div>
            <div className=''>
            <img className='w-96 h-60 rounded-lg flex-grow' src={pic16} alt="" />
            <div className=''>
            <h1 className='relative bottom-36 ml-40 font-bold text-xl text-white'>
              SWITHZERLAND
            </h1>
          
            </div>
            </div>
            <div className=''>
            <img className='w-96 h-60 rounded-lg flex-grow' src={pic17} alt="" />
            <div className=''>
            <h1 className='relative bottom-36 ml-40 font-bold text-xl text-white'>
              ENGLAND
            </h1>
          
            </div>
            </div>
      </div>
            
        </div>
  )
}
