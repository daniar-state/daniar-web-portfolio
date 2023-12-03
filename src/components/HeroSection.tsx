import Image from 'next/image'
import { CustomLink } from './CustomLink'

export function HeroSection() {
	return (
		<section id='home' className='grid md:grid-cols-2 items-center h-[calc(100vh-70px)] max-h-[678px] scroll-mt-28'>
			<div>
				<p className='text-lg mb-l'>Привет, Я</p>
				<h1 className='font-title tracking-wider text-3xl sm:text-6xl -ml-0.5'>
					Fullstack MERN Разработчик
				</h1>
				<p className='text-zinc-300 mt-2'>
					Я разрабатываю полноценные веб-приложения с использованием React и
					Node.js с нуля. Я также работаю с базами данных, такими как MongoDB и
					SQL. Я использую Git для управления версиями и GitHub для хранения
					кода.
				</p>
				<CustomLink href='#project' className='mt-4'>
					Мои работы
				</CustomLink>
			</div>
			<div className='hidden md:flex w-full h-full relative overflow-hidden'>
				<Image
					src='/vercel.svg'
					alt='profile image'
					width={600}
					height={600}
                    className="object-cover object-top w-full h-full self-end"
				/>
                <div className='absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-zinc-900 to-transparent'></div>
			</div>
		</section>
	)
}
