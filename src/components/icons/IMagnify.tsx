import React, { FC } from 'react'

interface IMagnifyProps {
    width?: number
    height?: number
    fill?: string
}

const IMagnify: FC<IMagnifyProps> = ({
    width = 26,
    height = 26,
    fill = 'white'
}) => {
    return (
        <svg
            fill={fill}
            stroke="currentColor"
            viewBox="0 0 800 800"
            width={width}
            height={height}
        >
            <path
                fill={fill}
                d="M497.5,3.3c165.3,0,299.2,134,299.2,299.2s-134,299.2-299.2,299.2-109.5-15.7-155.6-42.1l-216,216c-28,28-73.5,28-101.6,0-28-28-28-73.5,0-101.6l217-217c-27.3-45.1-43-98.1-43-154.7C198.3,137.2,332.2,3.3,497.5,3.3ZM497.5,99c-112.4,0-203.5,91.1-203.5,203.5s91.1,203.5,203.5,203.5,203.5-91.1,203.5-203.5-91.1-203.5-203.5-203.5Z"
            />
        </svg>
    )
}

export default IMagnify
