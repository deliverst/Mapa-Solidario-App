import * as React from 'react'

interface ILogoutProps {
    width?: number | string
    height?: number | string
    fill?: string
    stroke?: string
    strokeWidth?: number
}

const ILogout: React.FC<ILogoutProps> = ({
    width = 24,
    height = 24,
    fill = 'white',
    stroke = 'white',
    strokeWidth = 1
}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24">
            <path
                d="M3 5c0-1.1.9-2 2-2h8v2H5v14h8v2H5c-1.1 0-2-.9-2-2V5zm14.176 6L14.64 8.464l1.414-1.414 4.95 4.95-4.95 4.95-1.414-1.414L17.176 13H10.59v-2h6.586z"
                fill={fill}
                stroke={stroke}
                strokeWidth={strokeWidth}
                fillRule="evenodd"
            />
        </svg>
    )
}

export default ILogout
