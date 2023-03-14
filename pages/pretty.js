import Image from 'next/image'
import garden from '../public/assets/japanese-garden.JPG'

const Pretty = () => {
  return (
    <div>        
      <div style={{position:"relative"}} className='flex h-screen'>
        <Image src={garden} alt='vibrant japanese garden in georgia' fill style={{objectFit:"cover"}}/>
      </div>
  </div>
  )
}

export default Pretty