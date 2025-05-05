import React, { FC } from 'react'

interface ILabelProps {
    width?: number
    height?: number
    fill?: string
}

const ILabel: FC<ILabelProps> = ({
    width = 24,
    height = 24,
    fill = 'white'
}) => {
    return (
        <>
            <svg
                width={width}
                height={height}
                viewBox="0 0 26 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1.78064 2V12.4407L13.7128 24L23.7806 13.5593L12.2213 2H1.78064Z"
                    stroke={fill}
                    strokeOpacity="0.96"
                    strokeWidth="2"
                ></path>
                <path
                    d="M7.3738 6.10188C7.3738 6.92562 6.70602 7.5934 5.88227 7.5934C5.05853 7.5934 4.39075 6.92562 4.39075 6.10188C4.39075 5.27813 5.05853 4.61035 5.88227 4.61035C6.70602 4.61035 7.3738 5.27813 7.3738 6.10188Z"
                    fill={fill}
                ></path>
            </svg>
        </>
    )
}

export default ILabel
