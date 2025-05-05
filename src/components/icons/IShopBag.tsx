import React, { FC } from 'react'

interface IShopBagProps {
    width?: number
    height?: number
    fill?: string
}

const IShopBag: FC<IShopBagProps> = ({
    width = 26,
    height = 26,
    fill = 'white'
}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 26 26" fill="none">
            <path
                d="M22.1486 8.12891H3.13867L1 25.0002H24.0495L22.1486 8.12891Z"
                stroke={fill}
            ></path>
            <path
                d="M8.76188 10.508C8.76188 10.508 7.41274 1.20239 12.6022 1.00303C17.7916 0.803672 16.3657 10.508 16.3657 10.508"
                stroke={fill}
            ></path>
            <circle cx="8.84156" cy="10.7428" r="1.18812" fill={fill}></circle>
            <circle cx="16.4454" cy="10.7428" r="1.18812" fill={fill}></circle>
        </svg>
    )
}

export default IShopBag
