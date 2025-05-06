import React, { forwardRef } from 'react'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
	label?: string;
	error?: string;
	dontSort?: boolean;
	options?: Record<string, string | number>;
	optionsArray?: (string | { code: string | number; name: string })[];
	placeholder: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(({
	label = '',
	options = {},
	optionsArray = [],
	placeholder = 'Select an option',
	className = '',
	error,
	dontSort = false,
	...rest
}, ref) => {

	const isStringArray = optionsArray.length > 0 && typeof optionsArray[0] === 'string'

	const normalizedOptions = isStringArray
		? (optionsArray as string[]).map((item) => ({
			code: item,
			name: item
				.split('_')
				.map(word => word.charAt(0).toUpperCase() + word.slice(1))
				.join(' '),
		}))
		: (optionsArray as { code: string | number; name: string }[])

	const fallbackOptions = Object.keys(options).map(key => ({
		code: options[key],
		name: key,
	}))

	const optionsToRender = optionsArray.length > 0 ? normalizedOptions : fallbackOptions

	const sortedOptions = dontSort
		? optionsToRender
		: optionsToRender.sort((a, b) => a.name.localeCompare(b.name))

	return (
		<div className='flex w-full flex-col'>
			{label && <p className='pt-1'>{label}</p>}
			<select
				className={`rounded-lg border px-3 py-2 shadow-sm focus:border-blue-300 focus:outline-none focus:ring ${error ? 'border-red-500' : ''} ${className || ''}`}
				ref={ref}
				{...rest}
			>
				<option hidden value=''>
					{placeholder}
				</option>
				{sortedOptions.map((option, index) => (
					<option key={`option_${index}_${option.code}`} value={option.code}>
						{option.name}
					</option>
				))}
			</select>
			{error && <small className='text-red-500 text-xs mt-1'>{error}</small>}
		</div>
	)
})

Select.displayName = 'Select'
export default Select