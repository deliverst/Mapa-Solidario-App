import React from 'react'
import { ReactNode } from 'react'
import SideBar from '@/components/SideBar'

type LayoutProps = {
	children: ReactNode
}

export default async function RootLayout({ children }: LayoutProps) {
	const isAuthenticated = true
	const isMinimizedSideBar = false // is an action to call status

	return (
		<div className='flex flex-col items-center justify-center '>
			<div id='modal' />
			{isAuthenticated &&
				<>
					<SideBar isMinimizeds={isMinimizedSideBar} />
					<div className={`w-full pt-3 px-2 sm:px-6 md:px-8 transition-all duration-300 ease-in-out ${isMinimizedSideBar ? 'lg:pl-24' : 'lg:pl-72'}`}>
						{children}
					</div>
				</>
			}
		</div>
	)
}
