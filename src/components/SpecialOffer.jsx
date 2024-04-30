import pic8 from '../assets/pic8.jpg';
import pic9 from '../assets/pic9.jpg';
import pic10 from '../assets/pic10.jpg';
import pic11 from '../assets/pic11.jpg';
// import video from '../assets/vid.mp4';
import video from '../assets/vid1.mp4';

export const SpecialOffer = () => {
  return (
   <div>
     <div className='max-w-[1120px] mx-auto'>
        <h1 className='font-bold text-3xl text-center mt-8'>SpecialOffer</h1>
        <div className='mt-8 lg:flex gap-5 '>
            <div className='flex-grow'>
            <img className='w-96 h-60 rounded-lg flex-grow' src={pic8} alt="" />
            <div className='relative bottom-44 left-8'>
            <h1 className='font-bold text-xl text-white'>
                Weekly <br /> Flash Deals
            </h1>
            <p className='font-bold'>up to 30%</p>
            <button className='btn btn mt-2'> View Details</button>
            </div>
            </div>
            <div className='flex-grow'> 
            <img className='w-96 h-60 rounded-lg flex-grow' src={pic11} alt="" />
            <div className='relative bottom-44 left-8'>
            <h1 className='font-bold text-xl text-white'>
                Summer <br /> Flash Escapes
            </h1>
            <p className='font-bold'>Plan your next trip</p>
            <button className='btn btn mt-2 bg-'> Learn More</button>
            </div>
            </div>
            <div className='flex-grow'>
            <img className='w-96 rounded-lg flex-grow h-60' src={pic10} alt="" />
            <div className='relative bottom-44 left-8'>
            <h1 className='font-bold text-xl text-white'>
                Exclusive <br />  Deals
            </h1>
            <p className='font-bold'>Want to save upto 50%</p>
            <button className='btn btn mt-2'> Subscribe Us</button>
            </div>
            </div>
        </div>
        
        
        </div>
        {/* <h2>Video Section</h2>
        <video controls className='h-20'>
            <source src={video} className='h-20' type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <p>This is a video section demonstrating some content.</p> */}
   </div>
  )
}
