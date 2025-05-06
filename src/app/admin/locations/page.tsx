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

	const locationRows = locations.map((location) => ({
		...location,
		options: (
			<div className='flex gap-2'>
				<button
					onClick={() => handleEdit(location)}
					className='text-blue-600 hover:underline text-sm'
				>
					Edit
				</button>
				<button
					onClick={() => handleDelete(location)}
					className='text-red-600 hover:underline text-sm'
				>
					Delete
				</button>
			</div>
		),
	}))

	return (
		<>
			<GenericTable
				title='Donation Locations'
				data={locationRows}
				extraButtons={[
					<button
						key='create'
						onClick={handleNewLocation}
						className='bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 text-sm'
					>
						Create New Location
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