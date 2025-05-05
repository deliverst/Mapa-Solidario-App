import React, { FC } from 'react'

interface ICheckProps {
	width?: number
	height?: number
	fill?: string
}

const ICheck: FC<ICheckProps> = ({
	width = 26,
	height = 26,
	fill = '#63c178',
}) => {
	return (
		<svg viewBox='0 0 612 612' width={`${width}px`} height={`${height}px`}>
			<ellipse fill={fill} cx='306' cy='306' rx='306' ry='306.62' />
			<path fill=' #fefefe' d='M444.48,178.68c6.98-.8,13.79.94,19.35,5.2,12.3,13.99,29.18,26.74,40.89,40.92,7.25,8.78,8.16,21.11,2.4,30.9-78.9,80.79-159.55,160.07-239.09,240.31-10.57,8.82-25.69,8.37-35.6-1.15l-135.01-135.26c-9.61-9.71-11.1-25.1-2.27-35.88,13.78-12.07,26.25-28.72,40.18-40.26,10.27-8.51,24.55-8.62,34.66.21,18.47,18.14,36.46,36.83,54.63,55.23,8.65,8.76,17.37,17.64,26.35,25.95l180.06-180.33c3.71-3.12,8.63-5.29,13.45-5.84Z' />
		</svg>
	)
}

export default ICheck
