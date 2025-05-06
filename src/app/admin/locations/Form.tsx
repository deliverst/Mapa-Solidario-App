'use client'

import { useEffect, useState } from 'react'
import { useLocationStore } from '@/store/useLocationStore'
import { Location } from '@/types/Location'

interface Props {
	location?: Location | null
	onClose: () => void
}

const NewLocationModal = ({ location, onClose }: Props) => {
	const { create, update } = useLocationStore()

	const [formData, setFormData] = useState({
		name: '',
		address: '',
		phone: '',
		supportTypes: '',
		schedule: '',
		lat: '',
		lng: '',
	})

	useEffect(() => {
		if (location) {
			setFormData({
				name: location.name,
				address: location.address,
				phone: location.phone.join(', '),
				supportTypes: location.supportTypes.join(', '),
				schedule: location.schedule,
				lat: location.lat.toString(),
				lng: location.lng.toString(),
			})
		}
	}, [location])

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		const parsedData: Location = {
			name: formData.name,
			address: formData.address,
			phone: formData.phone.split(',').map(p => p.trim()),
			supportTypes: formData.supportTypes.split(',').map(s => s.trim()),
			schedule: formData.schedule,
			lat: parseFloat(formData.lat),
			lng: parseFloat(formData.lng),
		}

		if (location) {
			update(parsedData)
		} else {
			create(parsedData)
		}

		onClose()
	}

	return (
		<form onSubmit={handleSubmit} className='space-y-4 p-4 bg-white rounded'>
			<h2 className='text-lg font-semibold'>
				{location ? 'Editar ubicación' : 'Nueva ubicación'}
			</h2>

			<input
				type='text'
				name='name'
				placeholder='Nombre'
				value={formData.name}
				onChange={handleChange}
				required
				className='w-full border border-gray-300 rounded px-3 py-2'
				disabled={!!location}
			/>

			<input
				type='text'
				name='address'
				placeholder='Dirección'
				value={formData.address}
				onChange={handleChange}
				required
				className='w-full border border-gray-300 rounded px-3 py-2'
			/>

			<input
				type='text'
				name='phone'
				placeholder='Teléfonos (separados por coma)'
				value={formData.phone}
				onChange={handleChange}
				className='w-full border border-gray-300 rounded px-3 py-2'
			/>

			<textarea
				name='supportTypes'
				placeholder='Tipos de apoyo (separados por coma)'
				value={formData.supportTypes}
				onChange={handleChange}
				className='w-full border border-gray-300 rounded px-3 py-2'
			/>

			<input
				type='text'
				name='schedule'
				placeholder='Horario de atención'
				value={formData.schedule}
				onChange={handleChange}
				className='w-full border border-gray-300 rounded px-3 py-2'
			/>

			<input
				type='text'
				name='lat'
				placeholder='Latitud'
				value={formData.lat}
				onChange={handleChange}
				required
				className='w-full border border-gray-300 rounded px-3 py-2'
			/>

			<input
				type='text'
				name='lng'
				placeholder='Longitud'
				value={formData.lng}
				onChange={handleChange}
				required
				className='w-full border border-gray-300 rounded px-3 py-2'
			/>

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
					{location ? 'Actualizar' : 'Guardar'}
				</button>
			</div>
		</form>
	)
}

export default NewLocationModal