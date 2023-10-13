import Image from 'next/image'
import Sedan_image from '@/assets/images/icon-sedans.svg'

export default function Home() {
  return (
    <main>
        <div className='h-screen container mx-auto flex flex-col justify-center'>        
            <div className='flex lg:flex-row flex-col rounded-lg overflow-hidden'>
                <div className='bg-Bright-orange p-12 flex flex-col'>
                    <div className='flex flex-col gap-6'>
                        <Image src={Sedan_image} alt='Sedan Image' />
                        <div className='font-big-shoulders-display'>Sedans</div>
                        <div className='text-Transparent-white'>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</div>
                    </div>
                    <button className='w-fit px-8 py-3 bg-white rounded-full text-Bright-orange'>Learn More</button>
                </div> 
                <div className='bg-Dark-cyan p-12'>
                    <div>
                        <div>SUVs</div>
                        <div>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.</div>
                    </div>
                    <button>Learn More</button>
                </div>  
                  
                {/* 
                <div>
                    <div>Luxury</div>
                    <div>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.</div>
                </div> */}
            </div>
        </div>
    </main>
  )
}
