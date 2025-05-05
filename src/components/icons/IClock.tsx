import React, { FC } from 'react'

interface IClockProps {
    fill?: string
    width?: string
    height?: string
}

const IClock: FC<IClockProps> = ({
    fill = 'black',
    width = '24px',
    height = '24px'
}) => {
    return (
        <>
            <svg
                width={width}
                height={height}
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clipPath="url(#clip0_235_13)">
                    <path
                        d="M6 0C2.68631 0 0 2.68631 0 6C0 9.31387 2.68631 12 6 12C9.31387 12 12 9.31387 12 6C12 2.68631 9.31387 0 6 0ZM6 11.2618C3.10519 11.2618 0.75 8.89481 0.75 5.99998C0.75 3.10516 3.10519 0.749977 6 0.749977C8.89481 0.749977 11.25 3.10518 11.25 5.99998C11.25 8.89478 8.89481 11.2618 6 11.2618ZM6.375 5.84775V2.25002C6.375 2.04302 6.207 1.87502 6 1.87502C5.793 1.87502 5.625 2.04302 5.625 2.25002V6.00002C5.625 6.10615 5.66944 6.20159 5.7405 6.26964C5.7467 6.27695 5.75175 6.28482 5.75851 6.29175L7.61457 8.148C7.76101 8.29426 7.99839 8.29426 8.14482 8.148C8.29126 8.00156 8.29126 7.764 8.14482 7.61756L6.375 5.84775Z"
                        fill={fill}
                    />
                </g>
                <defs>
                    <clipPath id="clip0_235_13">
                        <rect width={width} height={height} fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </>
    )
}

export default IClock
