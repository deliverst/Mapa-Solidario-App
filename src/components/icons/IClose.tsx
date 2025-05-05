import React, { FC } from 'react'

interface ICloseProps {
	width?: number
	height?: number
}

const IClose: FC<ICloseProps> = ({ width = 26, height = 26 }) => {
	return (
		<svg fill='none' width={width} height={height} viewBox='0 0 24 24' className='hover:bg-gray-200 rounded-md transition duration-300 ease-in-out'>
			<rect id='Rectangle' fillRule='nonzero' x='0' y='0' width='24' height='24' />
			<line x1='16.9999' y1='7' x2='7.00001' y2='16.9999' id='Path' stroke='gray' strokeWidth='2' strokeLinecap='round' />
			<line x1='7.00006' y1='7' x2='17' y2='16.9999' id='Path' stroke='gray' strokeWidth='2' strokeLinecap='round' />
		</svg>

	)
}

export default IClose
