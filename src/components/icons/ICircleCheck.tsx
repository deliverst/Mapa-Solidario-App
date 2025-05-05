import React, { FC } from 'react'

interface ICircleCheckProps {
    width?: number
    height?: number
    fill?: string
}

const ICircleCheck: FC<ICircleCheckProps> = ({
    width = 26,
    height = 26,
    fill = 'white'
}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 26 26" fill="none">
            <path
                d="M8.18237 11.1961L10.9 13.9138L19.053 5.21729"
                stroke={fill}
                strokeOpacity="0.96"
                strokeWidth="2"
            ></path>
            <path
                d="M18.5107 11.4678V17.4466"
                stroke={fill}
                strokeOpacity="0.96"
                strokeWidth="2"
            ></path>
            <path
                d="M15.2495 14.457H21.5001"
                stroke={fill}
                strokeOpacity="0.96"
                strokeWidth="2"
            ></path>
            <path
                d="M12.3994 22.9287C6.34396 22.9287 1.43506 18.0198 1.43506 11.9643C1.43506 5.90891 6.34396 1 12.3994 1"
                stroke={fill}
                strokeWidth="2"
            ></path>
        </svg>
    )
}

export default ICircleCheck
