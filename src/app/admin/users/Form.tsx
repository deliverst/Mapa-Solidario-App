'use client'

import { useEffect, useState } from 'react'
import { User } from '@/types/User'

interface Props {
	user: User | null
	onClose: () => void
	onCreate: (user: User) => void
	onUpdate: (user: User) => void
}

const UserFormModal = ({ user, onClose, onCreate, onUpdate }: Props) => {
	const [formData, setFormData] = useState<User>({
		id: '',
		name: '',
		email: '',
		role: '',
		status: '',
		orders: [],
	})

	useEffect(() => {
		if (user) {
			setFormData(user)
		} else {
			setFormData({
				id: '',
				name: '',
				email: '',
				role: '',
				status: '',
				orders: [],
			})
		}
	}, [user])

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		if (!formData.name || !formData.email || !formData.role || !formData.status) {
			alert('Por favor, completa todos los campos.')
			return
		}

		if (user) {
			onUpdate(formData)
			alert('Usuario actualizado exitosamente')
		} else {
			const newUser = {
				...formData,
				id: crypto.randomUUID(),
			}
			onCreate(newUser)
			alert('Usuario creado exitosamente')
		}

		onClose()
	}

	return (
		<form onSubmit={handleSubmit} className='space-y-4 p-4 bg-white rounded'>
			<h2 className='text-lg font-semibold'>
				{user ? 'Editar Usuario' : 'Nuevo Usuario'}
			</h2>

			<input
				type='text'
				name='name'
				placeholder='Nombre Completo'
				value={formData.name}
				onChange={handleChange}
				required
				className='w-full border border-gray-300 rounded px-3 py-2'
			/>

			<input
				type='email'
				name='email'
				placeholder='Correo Electrónico'
				value={formData.email}
				onChange={handleChange}
				required
				disabled={!!user} // prevent editing email if user already exists
				className='w-full border border-gray-300 rounded px-3 py-2'
			/>

			<select
				name='role'
				value={formData.role}
				onChange={handleChange}
				required
				className='w-full border border-gray-300 rounded px-3 py-2'
			>
				<option value=''>Selecciona un Rol</option>
				<option value='Administrator'>Administrador</option>
				<option value='Volunteer'>Voluntario</option>
				<option value='Coordinator'>Coordinador</option>
				<option value='Supervisor'>Supervisor</option>
			</select>

			<select
				name='status'
				value={formData.status}
				onChange={handleChange}
				required
				className='w-full border border-gray-300 rounded px-3 py-2'
			>
				<option value=''>Selecciona Estado</option>
				<option value='Active'>Activo</option>
				<option value='Inactive'>Inactivo</option>
			</select>

			<div className='flex justify-end gap-2'>
				<button
					type='button'
					onClick={onClose}
					className='bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400'
				>
					Cancelar
				</button>
				<button
					type='submit'
					className='bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700'
				>
					{user ? 'Actualizar' : 'Guardar'}
				</button>
			</div>
		</form>
	)
}

export default UserFormModal