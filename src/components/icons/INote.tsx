interface INoteProps {
    width?: number
    height?: number
    fill?: string
    styles?: object
}

const INote: React.FC<INoteProps> = ({
    width = 26,
    height = 26,
    fill = 'black'
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke={fill}
            fill="transparent"
        >
            <path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z" />
            <path d="M15 3v4a2 2 0 0 0 2 2h4" />
        </svg>
    )
}

export default INote
