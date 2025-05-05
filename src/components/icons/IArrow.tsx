interface IArrowProps {
    direction: 'left' | 'right'
    size?: number
    className?: string
    fill?: string
}

const IArrow: React.FC<IArrowProps> = ({
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
            {/*<path d="M150,299.09C67.79,299.09.91,232.21.91,150S67.79.91,150,.91s149.09,66.88,149.09,149.09-66.88,149.09-149.09,149.09ZM150,10.86C73.28,10.86,10.86,73.28,10.86,150s62.42,139.14,139.14,139.14,139.14-62.42,139.14-139.14S226.72,10.86,150,10.86Z" fill={fill} strokeWidth='0px' />*/}
            <path
                d="M442.96,610.93c-7.94,0-15.88-3.03-21.94-9.09L147.1,327.92c-12.12-12.12-12.12-31.76,0-43.88L420.98,10.16c12.12-12.12,31.76-12.12,43.88,0,12.12,12.12,12.12,31.76,0,43.88l-251.94,251.94,251.98,251.98c12.12,12.12,12.12,31.76,0,43.88-6.06,6.06-14,9.09-21.94,9.09Z"
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
                d="M169.04,1.07c7.94,0,15.88,3.03,21.94,9.09l273.92,273.93c12.12,12.12,12.12,31.76,0,43.88l-273.88,273.88c-12.12,12.12-31.76,12.12-43.88,0-12.12-12.12-12.12-31.76,0-43.88l251.94-251.94L147.1,54.04c-12.12-12.12-12.12-31.76,0-43.88,6.06-6.06,14-9.09,21.94-9.09Z"
                fill={fill}
                strokeWidth="0px"
            />
        </svg>
    )
}

export default IArrow
