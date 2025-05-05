import React from 'react'

interface ILogoAgatesCircleProps {
	width?: number
	height?: number
	styles?: object
}

const ILogoAgatesCircle: React.FC<ILogoAgatesCircleProps> = ({
	width = 26,
	height = 26,
}) => {
	return (
		<svg width={width} height={height} viewBox='0 0 240.58 240.58'>
			<circle cx='120.29' cy='120.29' r='117.19' />
			<path fill='#fff' d='M43.06,196L103.39,44.58h33.42l60.72,151.42h-34.29l-10.88-28.3h-64.12l-10.88,28.3h-34.29ZM120.29,85.02l-20.69,53.64h41.38l-20.69-53.64Z' />
		</svg>
	)
}

export default ILogoAgatesCircle
