'use client'
import Link from 'next/link'
import React, {
	ReactNode,
	startTransition,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react'
import { usePathname } from 'next/navigation'
import {  IGoogle, } from '@/components/icons'
import Image from 'next/image'
import IDashboard from '@/components/icons/IDashboard'
import ISettings from '@/components/icons/ISettings'
import IAccountCircle from '@/components/icons/IAccountCircle'
import { useRouter } from 'next/navigation'
import IBag from '@/components/icons/IBag'
import IBurger from '@/components/icons/IBurger'
import IArrow from '@/components/icons/IArrow'

type Label = {
	url: string
	label: string
	icon: ReactNode
}

const labels: Label[] = [
	{ url: '/admin/dashboard', label: 'Dashboard', icon: <IDashboard fill='gray' /> },
	{ url: '/admin/users', label: 'Usuarios', icon: < IAccountCircle fill='gray'/>  },
	{ url: '/admin/locations', label: 'Locaciones', icon: <IGoogle /> },
	{ url: '/admin/configurations', label: 'Configuraciones', icon: <ISettings fill='gray' /> },
	{ url: '/admin/maps', label: 'Mapa', icon: <ISettings fill='gray' /> },
]

const Sidebar = ({ isMinimizeds = false }: { isMinimizeds: boolean }) => {
	const router = useRouter()
	const [isOpenSideBar, setIsOpenSideBar] = useState(true)
	const sidebarRef = useRef<HTMLDivElement>(null!)
	const [hasScrolled, setHasScrolled] = useState(false)
	const pathname = usePathname()

	const [isMinimized, setIsMinimized] = useState(isMinimizeds)
	const handleToggle = () => {
		startTransition(async () => {
			// const newIsMinimized = await toggleSidebarMinimize() // Call server action
			setIsMinimized(true) // Update local state after server update
		})
	}

	const handleSideBar = () => setIsOpenSideBar(!isOpenSideBar)
	const isMobile = () => window.innerWidth < 1024

	const handleClickOutside = useCallback(
		(event: MouseEvent) => {
			if (
				isMobile() &&
				sidebarRef.current &&
				!sidebarRef.current.contains(event.target as Node) &&
				isOpenSideBar
			) {
				setIsOpenSideBar(false)
			}
		},
		[isOpenSideBar],
	)

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [isOpenSideBar, handleClickOutside])

	useEffect(() => {
		const handleResize = () => {
			if (isMobile()) {
				setIsOpenSideBar(false)
			} else {
				setIsOpenSideBar(true)
			}
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const handleLinkClick = () => {
		if (isMobile()) {
			setIsOpenSideBar(false)
		}
	}

	useEffect(() => {
		const handleScroll = () => {
			setHasScrolled(window.scrollY > 0)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])


	return (
		<>
			<aside ref={sidebarRef} id='default-sidebar' className={`fixed top-0 left-0 z-[11] h-screen transition-all duration-300 ease-in-out bg-white ${isMinimized
				? 'w-[61px]' : 'w-64'} ${isOpenSideBar ? 'translate-x-0' : '-translate-x-full'}`}>
				<div className='h-full px-3 py-4 overflow-y-auto flex flex-col justify-between border border-gray-300'>
					<ul className='space-y-2 font-medium'>
						<div className='flex items-center justify-center relative h-[50px] w-full'>
							<Link href='/'>
								<div className='relative h-[50px] flex items-center justify-center'>
									<div
										className={`absolute transition-opacity duration-300 ease-in-out ${
											isMinimized ? 'opacity-100' : 'opacity-0 pointer-events-none'
										}`}
									>
										<div className='flex items-center justify-center rounded-full border border-gray-100 p-1 transition-all duration-300 ease-in-out hover:shadow-md hover:scale-105 hover:border-gray-100'>
											<Image width={100} height={100} src={'/logo.png'} alt='as' />
										</div>
									</div>
									<div className={`transition-opacity duration-300 ease-in-out ${isMinimized ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
										<Image src={'/logo.png'} alt='image' width={70} height={70} />
									</div>
								</div>
							</Link>
						</div>
						<div className={`flex ${isMinimized ? 'justify-start' : 'justify-start'}`}>
							<button onClick={handleToggle} className={`mt-4 p-3 border  rounded-lg focus:outline-none w-full flex justify-center border-gray-300`}>
								{isMinimized ? <IArrow fill='gray' direction='left'/> : <IArrow fill='gray' direction='left'/>}
							</button>
						</div>
						{labels.map(({ label, url, icon }) => (
							<Link
								className={`transform transition-transform duration-500 flex items-center ${pathname.includes(url) ? 'rounded-md bg-gray-200 text-sm text-slate-700 hover:bg-gray-200' : 'rounded-md text-sm text-slate-700 hover:bg-gray-200'}`}
								key={url}
								onClick={() => handleLinkClick()}
								href={url}
							>
								<div className={`flex items-center`}>
									<li className='cursor-pointer py-1 pl-1'>{icon}</li>
								</div>

								<div className={`whitespace-nowrap pl-2 text-sm transition-opacity duration-500 ease-in-out${isMinimized ? 'pointer-events-none  opacity-0' : 'pointer-events-auto  opacity-100'}`}>
									{label}
								</div>
							</Link>
						))}
					</ul>

					<div
						className={`whitespace-nowrap text-sm transition-opacity duration-500 ease-in-out ${
							isMinimized
								? 'pointer-events-none  opacity-0'
								: 'pointer-events-auto  opacity-100'
						}`}
					>

						<div className='text-center flex flex-col items-center mt-4'>
							<button
								onClick={() => router.push('/login')}
								className='bg-red-400 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-200 text-sm cursor-pointer font-bold'
							>
								Cerrar sesión
							</button>
						</div>
					</div>
				</div>
			</aside>

			<nav className={`sticky z-10 top-0 w-full rounded-none border border-gray-300 bg-white px-4 py-3 sm:items-center sm:justify-between lg:hidden ${hasScrolled ? 'shadow-lg' : ''}`}>
				<div className='grid grid-cols-3 items-center'>
					<div className='flex justify-start'>
						<button
							onClick={handleSideBar}
							type='button'
							className='hs-collapse-toggle inline-flex items-center justify-center gap-2 rounded-lg border p-2 align-middle text-sm font-medium text-white shadow-sm transition-all hover:bg-white/[.15] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-600'
						>
							<IBurger fill='gray' />
						</button>
					</div>

					<Link href='/'>
						<div className='flex justify-center'>
							<Image width={100} height={100} src={'/logo.png'} alt='as' />
						</div>
					</Link>

					<div className='flex justify-end' />
				</div>
			</nav>
		</>
	)
}

export default Sidebar
