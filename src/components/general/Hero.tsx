'use client'
import clsx from 'clsx';
import Image from 'next/image'
import React, { useRef, useEffect, useState, ReactNode } from 'react'

type ImageContent = {
	title?: string;
	subtitle?: string;
	type: 'image';
	src: string;
	alt?: string;
};

type VideoContent = {
	title?: string;
	subtitle?: string;
	type: 'video';
	src: string;
	controls?: boolean;
};

interface ComponentContent<T extends React.ComponentType<any>> {
	title?: string;
	subtitle?: string;
	type: 'component';
	component: T;
	props?: React.ComponentProps<T>;
}

export type CarouselItem = ImageContent | VideoContent | ComponentContent<any>;

type HeroProps = {
	content: readonly CarouselItem[];
	interval?: number;
	children?: ReactNode;
	className?: string;
};

const Hero = ({ content, interval = 5000, children, className }: HeroProps) => {

	const baseHeroClasses = "relative w-full overflow-hidden"
	const heroClasses = clsx(className, baseHeroClasses);

	const carouselRef = useRef<HTMLDivElement>(null)
	const [currentIndex, setCurrentIndex] = useState(0)
	const [itemWidth, setItemWidth] = useState(0)

	useEffect(() => {
		if (content.length <= 1) return

		const scrollInterval = setInterval(() => {
			if (carouselRef.current) {
				const container = carouselRef.current
				const currentItemWidth = container.clientWidth
				const nextIndex = (currentIndex + 1) % content.length
				const scrollToPosition = nextIndex * currentItemWidth

				container.scrollTo({
					left: scrollToPosition,
					behavior: 'smooth',
				})

				setCurrentIndex(nextIndex)
			}
		}, interval)

		return () => clearInterval(scrollInterval)
	}, [currentIndex, interval, content.length])

	useEffect(() => {
		const container = carouselRef.current
		if (!container) return

		setItemWidth(container.clientWidth)

		const resizeObserver = new ResizeObserver((entries) => {
			for (let entry of entries) {
				if (entry.target === container) {
					const newWidth = entry.contentRect.width
					setItemWidth(newWidth)

					const scrollToPosition = currentIndex * newWidth
					container.scrollTo({
						left: scrollToPosition,
						behavior: 'instant',
					})
				}
			}
		})

		resizeObserver.observe(container)

		return () => {
			resizeObserver.unobserve(container)
		}
	}, [currentIndex])

	const currentItem = content[currentIndex]


	return (
		<div className={heroClasses}>

			<div ref={carouselRef} className='absolute inset-0 flex overflow-x-hidden'>
				{content.map((item, index) => (
					<div key={index} className='flex-shrink-0 w-full h-full'>
						{item.type === 'image' && (
							<Image
								width={2000}
								height={1000}
								src={item.src}
								alt={item.alt ?? ''}
								className='object-cover object-center w-full h-full'
								sizes='100vw'
								priority
							/>
						)}
						{item.type === 'video' && (
							<video
								src={item.src}
								controls={item.controls ?? false}
								className='object-cover object-center w-full h-full'
								autoPlay
								loop
								muted
								playsInline
							>
								Tu navegador no soporta videos HTML5.
							</video>
						)}
						{item.type === 'component' && (
							<div className='w-full h-full'>
								{React.createElement(item.component, item.props)}
							</div>
						)}
					</div>
				))}
			</div>

			<div className='absolute inset-0 bg-black/50 z-10' />

			<div className='relative z-20 flex flex-col items-center justify-center h-full text-center pointer-events-none px-4'>
				{currentItem?.title && (
					<h1 className='text-[2rem] md:max-w-[80%] sm:text-[2.5rem] md:text-[4.5rem] font-bold text-white drop-shadow-lg leading-tight' style={{ fontFamily: 'var(--font-geist-sans)' }}>
						{currentItem.title}
					</h1>
				)}
				{currentItem?.subtitle && (
					<h2 className='mt-3 text-[1rem] md:max-w-[50%] sm:text-[1rem] md:text-[1.4rem] font-normal text-white uppercase tracking-widest drop-shadow-md' style={{ fontFamily: 'var(--font-geist-sans)' }}>
						{currentItem.subtitle}
					</h2>
				)}
				<div className='mt-6 pointer-events-auto'>
					{children}
				</div>
			</div>

		</div>
	)
}

export default Hero