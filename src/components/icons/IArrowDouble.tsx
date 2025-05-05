interface IArrowDoubleProps {
    direction: 'left' | 'right'
    size?: number
    className?: string
    fill?: string
}

const IArrowDouble: React.FC<IArrowDoubleProps> = ({
    direction,
    size = 15,
    className,
    fill = '#fff'
}) => {
    return direction === 'left' ? (
        <svg
            className={`${className} transform transition-transform duration-300 hover:scale-110 hover:cursor-pointer`}
            viewBox="0 0 612 612"
            width={size}
            height={size}
        >
            <path
                d="M338.07,610.93c-7.94,0-15.88-3.03-21.94-9.09L42.21,327.92c-12.12-12.12-12.12-31.76,0-43.88L316.09,10.16c12.12-12.12,31.76-12.12,43.88,0,12.12,12.12,12.12,31.76,0,43.88l-251.94,251.94,251.98,251.98c12.12,12.12,12.12,31.76,0,43.88-6.06,6.06-14,9.09-21.94,9.09Z"
                fill={fill}
                strokeWidth="0px"
            />
            <path
                d="M547.85,610.93c-7.94,0-15.88-3.03-21.94-9.09L251.99,327.92c-12.12-12.12-12.12-31.76,0-43.88L525.87,10.16c12.12-12.12,31.76-12.12,43.88,0,12.12,12.12,12.12,31.76,0,43.88l-251.94,251.94,251.98,251.98c12.12,12.12,12.12,31.76,0,43.88-6.06,6.06-14,9.09-21.94,9.09Z"
                fill={fill}
                strokeWidth="0px"
            />
        </svg>
    ) : (
        <svg
            className={`${className} transform transition-transform duration-300 hover:scale-110 hover:cursor-pointer`}
            viewBox="0 0 612 612"
            width={size}
            height={size}
        >
            <path
                d="M273.93,1.07c7.94,0,15.88,3.03,21.94,9.09l273.92,273.93c12.12,12.12,12.12,31.76,0,43.88l-273.88,273.88c-12.12,12.12-31.76,12.12-43.88,0-12.12-12.12-12.12-31.76,0-43.88l251.94-251.94L251.99,54.04c-12.12-12.12-12.12-31.76,0-43.88,6.06-6.06,14-9.09,21.94-9.09Z"
                fill={fill}
                strokeWidth="0px"
            />
            <path
                d="M64.15,1.07c7.94,0,15.88,3.03,21.94,9.09l273.92,273.93c12.12,12.12,12.12,31.76,0,43.88L86.13,601.84c-12.12,12.12-31.76,12.12-43.88,0-12.12-12.12-12.12-31.76,0-43.88l251.94-251.94L42.21,54.04c-12.12-12.12-12.12-31.76,0-43.88,6.06-6.06,14-9.09,21.94-9.09Z"
                fill={fill}
                strokeWidth="0px"
            />
        </svg>
    )
}

export default IArrowDouble
