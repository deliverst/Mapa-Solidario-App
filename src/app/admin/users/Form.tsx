'use client'

import { useState } from 'react'

const NuevoUsuarioModal = () => {
	const [formData, setFormData] = useState({
		nombre: '',
		correo: '',
		rol: '',
		estatus: '',
	})

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		console.log('Nuevo usuario:', formData)
		// Aquí puedes enviar al backend o manejar el estado
		alert('Usuario creado exitosamente')
	}

	return (
		<form onSubmit={handleSubmit} className='space-y-4 p-4 bg-white rounded'>
			<h2 className='text-lg font-semibold'>Nuevo usuario</h2>

			<input
				type='text'
				name='nombre'
				placeholder='Nombre completo'
				value={formData.nombre}
				onChange={handleChange}
				required
				className='w-full border border-gray-300 rounded px-3 py-2'
			/>

			<input
				type='email'
				name='correo'
				placeholder='Correo electrónico'
				value={formData.correo}
				onChange={handleChange}
				required
				className='w-full border border-gray-300 rounded px-3 py-2'
			/>

			<select
				name='rol'
				value={formData.rol}
				onChange={handleChange}
				required
				className='w-full border border-gray-300 rounded px-3 py-2'
			>
				<option value=''>Selecciona un rol</option>
				<option value='Administrador'>Administrador</option>
				<option value='Voluntario'>Voluntario</option>
				<option value='Coordinador'>Coordinador</option>
				<option value='Supervisor'>Supervisor</option>
			</select>

			<select
				name='estatus'
				value={formData.estatus}
				onChange={handleChange}
				required
				className='w-full border border-gray-300 rounded px-3 py-2'
			>
				<option value=''>Selecciona un estatus</option>
				<option value='Activo'>Activo</option>
				<option value='Inactivo'>Inactivo</option>
			</select>

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

export default NuevoUsuarioModal