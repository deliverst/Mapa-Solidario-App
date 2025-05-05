'use client'
import Button from './Button'
import Select from '@/components/general/Select'
import Input from './Input'
import Textarea from './Textarea'
import { ChangeEvent, FormEvent, useState } from 'react'

const options = ['Ventas', 'Soporte', 'Recursos Humanos']

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		department: '',
		message: '',
	})

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { name, value } = e.target
		setFormData(π => ({
			...π,
			[name]: value,
		}))
	}

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		console.log(formData)
	}

	return (
		<div className='flex flex-col items-left p-6 rounded-lg max-w-md mx-auto '>
			<h1 className='text-4xl font-semibold mb-4 text-white'>Contacto</h1>

			<p className='text-lg sm:text-xl text-left mb-6 text-white'>
				¿Tienes dudas, comentarios o deseas ponerte en contacto con nuestro equipo?
				Llena el formulario y te responderemos a la brevedad.
			</p>

			<form className='flex flex-col w-full space-y-4 text-white' onSubmit={handleSubmit}>
				<Input
					label='Your name'
					name='name'
					placeholder='John Doe'
					required
					value={formData.name}
					onChange={handleChange}
				/>

				<Input
					label='Tu email'
					name='email'
					type='email'
					placeholder='roberto@email.com'
					required
					value={formData.email}
					onChange={handleChange}
				/>

				<Select
					label='Select department'
					name='department'
					className='bg-white text-gray-500'
					optionsArray={options}
					placeholder='-- Select a department --'
					value={formData.department}
					onChange={handleChange}
				/>

				<Textarea
					label='Your message'
					name='message'
					placeholder='Type your question or comment here'
					rows={4}
					cols={30}
					required
					className='text-gray-800 bg-white'
					value={formData.message}
					onChange={handleChange}
				/>
				<Button color='primary' type='submit'>Enviar</Button>
			</form>
		</div>
	)
}

export default ContactForm