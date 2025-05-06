import Label from './Label'
import { WheelEvent } from 'react'
import * as React from 'react'

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	name: string
	label?: string;
	error?: boolean | undefined
}

const NoLabelContainer = ({ children }: { children: React.ReactNode }) => (
	<div className='flex flex-col w-full text-black text-sm font-medium'>
		{children}
	</div>
)

const Input = React.forwardRef<HTMLInputElement, InputProps>(({
		error = false,
		className = '',
		type,
		label,
		name,
		placeholder,
		...props
	}, ref) => {

		const preventWheelEvent = (e: WheelEvent<HTMLDivElement>): void => {
			const ev = e.target as HTMLInputElement
			ev.blur()
			e.stopPropagation()
			setTimeout(() => ev.focus(), 0)
		}

		const WrapperComponent = label ? Label : NoLabelContainer

		return (
			<WrapperComponent text={label || ''}>
				<input
					placeholder={placeholder}
					data-1p-ignore={true}
					type={type}
					className={`h-10 py-2 mb-1 block rounded-md border px-3 text-base bg-white text-gray-500 ${error ? 'border-red-500' : 'border-gray-200'} ${className ?? ''}`}
					name={name}
					ref={ref}
					onWheel={preventWheelEvent}
					{...props}
				/>
			</WrapperComponent>
		)
	},
)
Input.displayName = 'Input'

export default Input
