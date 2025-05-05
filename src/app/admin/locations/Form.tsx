'use client'

import { useState } from 'react'

const NuevaUbicacionModal = ({ onSubmit }: {
	onSubmit: (data: any) => void
}) => {
	const [formData, setFormData] = useState({
		nombre: '',
		direccion: '',
		telefono: '',
		tiposDeApoyo: '',
		horario: '',
	})

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		const nuevaUbicacion = {
			...formData,
			telefono: formData.telefono.split(',').map(t => t.trim()),
			tiposDeApoyo: formData.tiposDeApoyo.split(',').map(a => a.trim()),
		}

		onSubmit(nuevaUbicacion)
		setFormData({
			nombre: '',
			direccion: '',
			telefono: '',
			tiposDeApoyo: '',
			horario: '',
		})
	}

	return (
		<form onSubmit={handleSubmit} className='space-y-4 p-4 bg-white rounded '>
			<h2 className='text-lg font-semibold'>Nueva ubicación</h2>

			<input
				type='text'
				name='nombre'
				placeholder='Nombre'
				value={formData.nombre}
				onChange={handleChange}
				required
				className='w-full border border-gray-300 rounded px-3 py-2'
			/>
			<input
				type='text'
				name='direccion'
				placeholder='Dirección'
				value={formData.direccion}
				onChange={handleChange}
				required
				className='w-full border border-gray-300 rounded px-3 py-2'
			/>
			<input
				type='text'
				name='telefono'
				placeholder='Teléfonos (separados por coma)'
				value={formData.telefono}
				onChange={handleChange}
				className='w-full border border-gray-300 rounded px-3 py-2'
			/>
			<textarea
				name='tiposDeApoyo'
				placeholder='Tipos de apoyo (separados por coma)'
				value={formData.tiposDeApoyo}
				onChange={handleChange}
				className='w-full border border-gray-300 rounded px-3 py-2'
			/>
			<input
				type='text'
				name='horario'
				placeholder='Horario'
				value={formData.horario}
				onChange={handleChange}
				className='w-full border border-gray-300 rounded px-3 py-2'
			/>

			<div className='flex justify-end'>
				<button
					type='submit'
					className='bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700'
				>
					Guardar
				</button>
			</div>
		</form>
	)
}

export default NuevaUbicacionModal