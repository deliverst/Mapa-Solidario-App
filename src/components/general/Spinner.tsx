import React from 'react'

interface SpinnerProps {
    className?: string
    styles?: string
    size?: number
    color?: string
    width?: number
    fullScreen?: boolean
}

const Spinner: React.FC<SpinnerProps> = ({
    fullScreen = true,
    className,
    //styles,
    size = '56px',
    color = '#474bff',
    width = 6
}) => {
    const defaultStyle = {
        width: size,
        height: size,
        borderRadius: '50%',
        background: `conic-gradient(#0000 10%, ${color})`,
        WebkitMask: `radial-gradient(farthest-side, #0000 calc(100% - ${width}px), #000 0)`
    }

    // Merge default styles with the provided styles
    const spinnerStyle = { ...defaultStyle }

    return (
        <div
            className={`${
                fullScreen ? 'h-screen' : ''
            }  flex items-center justify-center ${className}`}
        >
            <div className="spinner" style={spinnerStyle} />
        </div>
    )
}

export default Spinner
