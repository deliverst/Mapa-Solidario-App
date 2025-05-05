import React, { FC } from 'react'

interface IStarProps {
    width?: number
    height?: number
    fill?: string
    design: number
}

const IStar: FC<IStarProps> = ({
    width = 26,
    height = 26,
    fill = 'white',
    design = 1
}) => {
    return design ? (
        <svg
            fill={fill}
            stroke="currentColor"
            viewBox="0 0 24 24"
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11.5 4L9.16667 11.7647H3.5L8.5 15.2941L6.5 22L11.5 17.7647L16.8333 22L14.8333 15.2941L19.5 11.7647H13.8333L11.5 4Z"
                stroke={fill}
                strokeOpacity="0.96"
            ></path>
        </svg>
    ) : (
        <svg
            fill={fill}
            width={width}
            height={height}
            viewBox="0 0 14 13"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M13.1831 5.40894L10.2633 8.32308L10.9528 12.439C10.9828 12.6189 10.9106 12.8008 10.7663 12.9083C10.6847 12.9693 10.5877 13 10.4906 13C10.4161 13 10.3411 12.9818 10.2727 12.9448L6.66237 11.0016L3.05252 12.9443C2.89502 13.0298 2.7033 13.0158 2.55893 12.9079C2.41455 12.8003 2.34237 12.6185 2.37237 12.4385L3.0619 8.3226L0.141585 5.40894C0.0140848 5.28128 -0.0323215 5.09026 0.022991 4.91701C0.0783035 4.74375 0.225022 4.61657 0.401741 4.59018L4.43721 3.99026L6.2419 0.245844C6.39987 -0.0819482 6.92487 -0.0819482 7.08283 0.245844L8.88752 3.99026L12.923 4.59018C13.0997 4.61657 13.2464 4.74327 13.3017 4.91701C13.3571 5.09074 13.3106 5.2808 13.1831 5.40894Z"
                fill={fill}
            />
        </svg>
    )
}

export default IStar
