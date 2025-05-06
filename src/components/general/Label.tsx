import { ReactNode } from 'react'

interface LabelProps {
	id?: string;
	text: string;
	name?: string;
	children?: ReactNode;
	className?: string;
}

const Label: React.FC<LabelProps> = ({ text, name, children, className, id }) => {
	return (
		<label htmlFor={id || name} className={`flex flex-col w-full font-medium text-white-900 ${className || ''}`}>
			{text}
			{children}
		</label>
	)
}

export default Label
