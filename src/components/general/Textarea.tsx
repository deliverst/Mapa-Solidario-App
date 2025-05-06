import { forwardRef } from 'react'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	label?: string;
	error?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({
	label,
	error = false,
	className,
	...rest
}, ref) => {
	return (
		<div>
			{label && <div className='block font-medium text-white-900'>{label}</div>}
			<textarea
				className={`${className} w-full block rounded-md border px-3 py-2 text-base focus:border-blue-500 focus:ring-blue-500 ${error ? 'border-red-200' : 'border-gray-200'}`}
				ref={ref}
				{...rest}
			></textarea>
		</div>
	)
})

Textarea.displayName = 'Textarea';
export default Textarea
