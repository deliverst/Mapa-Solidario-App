import React, { FC } from 'react'

interface IEmailProps {
	fill?: string
	width?: string
	height?: string
}

const IEmail: FC<IEmailProps> = ({
	fill = 'white',
	width = '24px',
	height = '24px'
}) => {
	return (
		<>
			<svg fill={fill} viewBox="0 0 551.82 408.33" width={width} height={height}>
				<path fill={fill} d="M243.56,215.19c21.95,13.83,49.88,13.88,71.89.15l236.07-147.33C548.27,30.28,516.62.65,478.04.65H73.78C37.12.65,6.73,27.39.99,62.42l242.57,152.78Z"/>
				<path fill={fill} d="M315.35,266.17c-22.01,13.74-49.94,13.68-71.89-.15L0,112.68v221.87c0,40.75,33.03,73.78,73.78,73.78h404.26c40.75,0,73.78-33.03,73.78-73.78V118.59l-236.46,147.57Z"/>
			</svg>
		</>
	)
}

export default IEmail
