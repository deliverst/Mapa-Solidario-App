import React from 'react'

interface ILockProps {
	width?: number
	height?: number
	fill?: string
	styles?: object
	className?: string
}

const ILock: React.FC<ILockProps> = ({
	width = 26,
	height = 26,
	fill = 'black',
	className=''
}) => {
	return (
		<svg className={className} fill={fill} height={height} width={width} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 31'>
			< path d="M23.3065 11.4217H22.1967V7.61444C22.1967 3.41507 18.2146 0 13.318 0C8.42142 0 4.43934 3.41507 4.43934 7.61444V11.4217H3.3295C1.49458 11.4217 0 12.7021 0 14.2771V27.6023C0 29.1773 1.49458 30.4577 3.3295 30.4577H23.3065C25.1415 30.4577 26.636 29.1773 26.636 27.6023V14.2771C26.636 12.7021 25.1415 11.4217 23.3065 11.4217ZM7.3989 7.61444C7.3989 4.81486 10.0536 2.53815 13.318 2.53815C16.5824 2.53815 19.2371 4.81486 19.2371 7.61444V11.4217H7.3989V7.61444Z" fill="black" />
		</svg>
	)
}

export default ILock