import React, { FC } from 'react'

interface IInfoProps {
    width?: number
    height?: number
    fill?: string
    stroke?: string
}

const IInfo: FC<IInfoProps> = ({ width = 26, height = 26, fill = 'transparent', stroke = 'black' }) => {
    return (
        <svg
            fill={fill}
            stroke="currentColor"
            viewBox="0 0 24 24"
            width={width}
            height={height}
        >
            <path
                d="M12 11V16M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21ZM12.0498 8V8.1L11.9502 8.1002V8H12.0498Z"
                stroke={stroke}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill={fill}
            />
        </svg>
    )
}

export default IInfo
