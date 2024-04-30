// import video from '../assets/vid.mp4';
import video from '../assets/vid1.mp4';
export const Video = () => {
  return (
    <div>
            <h2>Video Section</h2>
            <video controls>
                <source src={video} type="video/mp4" />
               
            </video>
            
        </div>
  )
}
