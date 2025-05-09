import React, { FC } from 'react'

interface IHeartProps {
    width?: number | string
    height?: number | string
    fill?: string
    stroke?: boolean
}

const IPlay: FC<IHeartProps> = ({
    width = 26,
    //height = 26,
    fill = 'white'
    //stroke = false
}) => {
    return (
        <>
            <svg
                style={{ width: width, height: 'auto' }}
                viewBox="0 0 459 459"
                fill="none"
            >
                <path
                    d="M229.5,0C102.751,0,0,102.751,0,229.5S102.751,459,229.5,459S459,356.249,459,229.5S356.249,0,229.5,0z M310.292,239.651 l-111.764,76.084c-3.761,2.56-8.63,2.831-12.652,0.704c-4.022-2.128-6.538-6.305-6.538-10.855V153.416 c0-4.55,2.516-8.727,6.538-10.855c4.022-2.127,8.891-1.857,12.652,0.704l111.764,76.084c3.359,2.287,5.37,6.087,5.37,10.151 C315.662,233.564,313.652,237.364,310.292,239.651z"
                    fill={fill}
                />
            </svg>
        </>
    )
}

export default IPlay
