import React, { FC } from 'react'

interface BurgerProps {
    width?: number
    height?: number
    fill?: string
}

const IBurger: FC<BurgerProps> = ({ fill = 'white' }) => {
    return (
        <>
            <svg fill={fill} viewBox='0 0 16 16' className='w-5 h-5' width={16} height={16}>
                <path fillRule='evenodd' d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z' />
            </svg>
        </>
    )
}

export default IBurger
