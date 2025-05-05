import React, { FC } from 'react'

interface IParkingProps {
    fill?: string
    width?: string
    height?: string
}

const IParking: FC<IParkingProps> = ({
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
                <g clipPath="url(#clip0_235_19)">
                    <path
                        d="M10.125 0.75H1.875C1.25391 0.75 0.75 1.25391 0.75 1.875V10.125C0.75 10.7461 1.25391 11.25 1.875 11.25H10.125C10.7461 11.25 11.25 10.7461 11.25 10.125V1.875C11.25 1.25391 10.7461 0.75 10.125 0.75ZM6.375 7.5H5.25V8.625C5.25 8.83125 5.08125 9 4.875 9H4.125C3.91875 9 3.75 8.83125 3.75 8.625V3.375C3.75 3.16875 3.91875 3 4.125 3H6.375C7.61484 3 8.625 4.01016 8.625 5.25C8.625 6.48984 7.61484 7.5 6.375 7.5ZM6.375 4.5H5.25V6H6.375C6.7875 6 7.125 5.6625 7.125 5.25C7.125 4.8375 6.7875 4.5 6.375 4.5Z"
                        fill={fill}
                    />
                </g>
                <defs>
                    <clipPath id="clip0_235_19">
                        <rect width={width} height={height} fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </>
    )
}

export default IParking
