import type { Metadata } from 'next'
import { Roboto, Bebas_Neue } from 'next/font/google'
import './globals.css'
import { cn } from '@/utils/helper'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/FooterSection'

const roboto = Roboto({
	weight: ['300', '400', '700'],
	subsets: ['latin'],
	variable: '--font-roboto',
})

const bebas = Bebas_Neue({
	weight: ['400'],
	subsets: ['latin'],
	variable: '--font-bebas',
})

export const metadata: Metadata = {
	title: 'Daniar.state',
	description: 'My web-portfolio website',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body
				className={cn(
					roboto.className,
					bebas.variable,
					'bg-[#121212] text-zinc-50'
				)}
			>
				<Navigation />

				<main className='max-w-7xl mx-auto px-4 md:px-8 space-y-28'>
					{children}
				</main>
				<Footer />
			</body>
		</html>
	)
}
