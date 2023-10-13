import Image from 'next/image'
import Sedan_image from '@/assets/images/icon-sedans.svg'
import Suv_image from '@/assets/images/icon-suvs.svg'
import Luxury_image from '@/assets/images/icon-luxury.svg'
import Footer from 'components/Footer'

export default function Home() {
  return (
    <main className='bg-Very-light-gray'>
        <div className='min-h-screen container mx-auto flex flex-col justify-center p-5'>        
            <div className='mx-auto flex lg:flex-row flex-col rounded-lg overflow-hidden'>
                <div className='bg-Bright-orange p-12 flex flex-col max-w-[335px]'>
                    <div className='flex flex-col gap-8'>
                        <Image src={Sedan_image} alt='Sedan Image' />
                        <div className='mt-3 font-big-shoulders-display text-5xl font-semibold text-white'>SEDANS</div>
                        <div className='text-Transparent-white leading-[30px]'>
                            Choose a sedan for its affordability and excellent fuel economy. 
                            Ideal for cruising in the city or on your next road trip.
                        </div>
                    </div>
                    <button className='w-fit mt-6 px-8 py-3 bg-white rounded-full text-Bright-orange'>Learn More</button>
                </div> 
                <div className='bg-Dark-cyan p-12 flex flex-col max-w-[335px]'>
                    <div className='flex flex-col gap-8'>
                        <Image src={Suv_image} alt='Suv Image' />
                        <div className='mt-3 font-big-shoulders-display text-5xl font-semibold text-white'>SUVs</div>
                        <div className='text-Transparent-white leading-[30px]'>
                            Take an SUV for its spacious interior, power, and versatility. 
                            Perfect for your next family vacation and off-road adventures.
                        </div>
                    </div>
                    <button className='w-fit mt-6 px-8 py-3 bg-white rounded-full text-Dark-cyan'>Learn More</button>
                </div>
                <div className='bg-Very-dark-cyan p-12 flex flex-col max-w-[335px]'>
                    <div className='flex flex-col gap-8'>
                        <Image src={Luxury_image} alt='Suv Image' />
                        <div className='mt-3 font-big-shoulders-display text-5xl font-semibold text-white'>Luxury</div>
                        <div className='text-Transparent-white leading-[30px]'>
                        Cruise in the best car brands without the bloated prices. 
                        Enjoy the enhanced comfort of a luxury rental and arrive in style.
                        </div>
                    </div>
                    <button className='w-fit mt-6 px-8 py-3 bg-white rounded-full text-Very-dark-cyan'>Learn More</button>
                </div>
            </div>
        </div>
        <Footer />
    </main>
  )
}
