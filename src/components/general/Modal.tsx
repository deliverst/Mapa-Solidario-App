'use client'
import { createPortal } from 'react-dom'
import { useEffect, useRef, useCallback, useState, FC, Dispatch, SetStateAction, ReactNode } from 'react'
import IClose from '@/components/icons/IClose'

interface typeProps {
	title?: string
	children: ReactNode
	isOpen: boolean
	handleStatusModal: Dispatch<SetStateAction<boolean>>
	confirmBeforeClose?: boolean
	className?: string
}

const Modal: FC<typeProps> = ({
	children,
	isOpen,
	handleStatusModal,
	title,
	confirmBeforeClose = false,
	className = '',
}) => {
	const modalContentRef = useRef<HTMLDivElement>(null)
	const [isRendered, setIsRendered] = useState(false)
	const [isAnimating, setIsAnimating] = useState(false)


	useEffect(() => {
		if (isOpen) {
			setIsRendered(true)
			setTimeout(() => setIsAnimating(true), 50)
		} else {
			setIsAnimating(false)
			const timer = setTimeout(() => setIsRendered(false), 300)
			return () => clearTimeout(timer)
		}
	}, [isOpen])

	useEffect(() => {
		if (isOpen) {
			document.body.classList.add('overflow-hidden')
			setIsRendered(true)
			setTimeout(() => setIsAnimating(true), 50)
		} else {
			document.body.classList.remove('overflow-hidden')
			setIsAnimating(false)
			const timer = setTimeout(() => setIsRendered(false), 300)
			return () => {
				clearTimeout(timer)
				document.body.classList.remove('overflow-hidden')
			}
		}
	}, [isOpen])


	const handleClickOutside = (event: React.MouseEvent) => {
		if (
			modalContentRef.current &&
			!modalContentRef.current.contains(event.target as Node)
		) {
			handleCloseModal()
		}
	}


	const handleClick = () => {
		handleCloseModal()
	}

	const handleKeyDown = useCallback(
		(event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				handleCloseModal()
			}
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[confirmBeforeClose],
	)

	useEffect(() => {
		if (isOpen) {
			document.addEventListener('keydown', handleKeyDown)
		} else {
			document.removeEventListener('keydown', handleKeyDown)
		}

		return () => document.removeEventListener('keydown', handleKeyDown)
	}, [isOpen, handleKeyDown])


	const handleCloseModal = () => {
		if (confirmBeforeClose) {
			const userConfirmed = window.confirm('Are you sure you want to close the modal?')
			if (userConfirmed) {
				handleStatusModal(false)
			}
		} else {
			handleStatusModal(false)
		}
	}

	return (
		<>
			{isRendered &&
				createPortal(
					<div
						onClick={handleClickOutside}
						className={`fixed left-0 top-0 z-[100] flex h-full w-full items-center justify-center bg-black/50 transition-opacity duration-300 ease-in-out ${isAnimating ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
					>

						<div
							className={`overflow-y-auto rounded-lg bg-white p-10 transform transition-transform duration-300 ease-in-out border border-gray-400 
							${className ? className : 'max-h-[800px] max-w-[1000px] w-screen'} 
							${isAnimating ? 'translate-y-0' : 'translate-y-full'}`}
							ref={modalContentRef}
							onClick={e => e.stopPropagation()}
						>
							<div className='flex items-center justify-between pb-5'>
								<h1 className='text-extrabold text-2xl'>
									{title}
								</h1>
								<button className='cursor-pointer' color='white' onClick={handleClick}>
									<IClose />
								</button>
							</div>
							{children}
						</div>
					</div>,
					document.getElementById('modal') as HTMLElement,
				)}
		</>)
}

export default Modal
