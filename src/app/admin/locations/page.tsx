'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import GenericTable from '@/components/general/GenericTable'
import Modal from '@/components/general/Modal'
import NewLocationModal from '@/app/admin/locations/Form'
import { useLocationStore } from '@/store/useLocationStore'

export default function Page() {
	const router = useRouter()

	const locations = useLocationStore((state) => state.locations)
	const create = useLocationStore((state) => state.create)
	const update = useLocationStore((state) => state.update)
	const remove = useLocationStore((state) => state.remove)

	const [isOpen, setIsOpen] = useState(false)
	const [selectedLocation, setSelectedLocation] = useState<any>(null)

	const handleNewLocation = () => {
		setSelectedLocation(null)
		setIsOpen(true)
	}

	const handleEdit = (location: any) => {
		setSelectedLocation(location)
		setIsOpen(true)
	}

	const handleDelete = (location: any) => {
		if (confirm(`Delete location: ${location.name}?`)) {
			remove(location.name)
		}
	}

	const locationRows = locations.map(({ lat, lng, ...rest }) => ({
		...rest,
		options: (
			<div className='flex gap-2'>
				<button
					onClick={() => handleEdit({ ...rest, lat, lng })}
					className='text-blue-600 hover:underline text-sm'
				>
					Edit
				</button>
				<button
					onClick={() => handleDelete({ ...rest, lat, lng })}
					className='text-red-600 hover:underline text-sm'
				>
					Delete
				</button>
				<a
					href={`https://www.google.com/maps?q=${lat},${lng}`}
					target='_blank'
					rel='noopener noreferrer'
					className='text-green-600 hover:underline text-sm'
				>
					Ver en mapa
				</a>
			</div>
		),
	}))

	return (
		<>
			<GenericTable
				title='Locaciones de Donaciones'
				data={locationRows}
				extraButtons={[
					<button
						key='create'
						onClick={handleNewLocation}
						className='bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 text-sm'
					>
						Crear nueva locación
					</button>,
				]}
			/>
			<Modal isOpen={isOpen} handleStatusModal={setIsOpen}>
				<NewLocationModal
					location={selectedLocation}
					onClose={() => setIsOpen(false)}
				/>
			</Modal>
		</>
	)
}