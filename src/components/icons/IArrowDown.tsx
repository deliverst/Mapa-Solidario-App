import React from 'react'

interface IArrowDownProps {
	width?: number
	height?: number
	fill?: string
	styles?: object
	className?: string
}

const IArrowDown: React.FC<IArrowDownProps> = ({
	width = 26,
	height = 26,
	fill = 'gray',
	className=''
}) => {
	return (
		<svg className={className} fill={fill} height={height} width={width} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 330 330'>
			<path d='M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z' />
		</svg>
	)
}

export default IArrowDown
