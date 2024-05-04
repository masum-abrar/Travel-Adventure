import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';
import pic3 from '../assets/pic3.jpg';
import pic4 from '../assets/pic4.jpg';
import pic5 from '../assets/pic5.jpg';
import pic6 from '../assets/pic6.jpg';
import pic7 from '../assets/pic7.jpg';
import { Navbar } from './Navbar';

export const Banner = () => {
    
  return (
    <>
   
   <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
  <img src={pic7} className="w-full h-[600px]  bg-cover bg-contain bg-no-repeat opacity-100 " />
  <Navbar></Navbar>
    <h1 className='absolute text-white font-bold left-[50%] top-[30%] lg:text-4xl lg:left-[37%] lg:top-[40%] animate__bounce'>TRAVEL ADVENTURE</h1>
    <p className='absolute top-[40%] left-[20%] lg:left-[29%] lg:top-[50%] text-white'>Discover Your Dream Home with Us - Where Every Door Opens to a New Beginning.</p>
    <button  className='btn btn-ghost bg-rose-600 absolute px-8 text-white top-[70%] left-[30%]   lg:left-[42%] lg:top-[60%]'>FIND NOW</button>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
    
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
     <img  src={pic6} className="w-full h-[500px] bg-cover opacity-85" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <img  src={pic7} className="w-full h-[500px] bg-cover opacity-85" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
  <img  src={pic6} className="w-full h-[500px] bg-cover opacity-85" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

  </>
  )
}
