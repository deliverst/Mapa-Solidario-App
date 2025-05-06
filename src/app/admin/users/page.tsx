'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import GenericTable from '@/components/general/GenericTable'
import Modal from '@/components/general/Modal'
import UserFormModal from '@/app/admin/users/Form'
import { useUsers } from '@/hooks/useUsers'

export default function Page() {
	const router = useRouter()
	const { users, create, update, remove } = useUsers()
	const [isOpen, setIsOpen] = useState(false)
	const [selectedUser, setSelectedUser] = useState(null)

	const handleEditUser = (user) => {
		setSelectedUser(user)
		setIsOpen(true)
	}

	const handleNewUser = () => {
		setSelectedUser(null)
		setIsOpen(true)
	}


	const handleViewDetails = (user) => {
		router.push(`/admin/users/${encodeURIComponent(user.email)}`)
	}



	const userRows = users.map(user => {
		const { orders, ...rest } = user

		return {
			...rest,
			options: (
				<div className='flex gap-2'>
					<button
						onClick={() => handleEditUser(user)}
						className='text-blue-600 hover:underline text-sm'
					>
						Editar
					</button>
					<button
						onClick={() => handleViewDetails(user)}
						className='text-green-600 hover:underline text-sm'
					>
						Ver Detalles
					</button>
					<button
						onClick={() => {
							if (confirm(`¿Estás seguro de eliminar a ${user.name}?`)) {
								remove(user.email)
							}
						}}
						className='text-red-600 hover:underline text-sm'
					>
						Eliminar
					</button>
				</div>
			),
		}
	})

	return (
		<>
			<GenericTable
				title='User List'
				data={userRows}
				extraButtons={[
					<button
						key='create'
						onClick={handleNewUser}
						className='bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 text-sm'
					>
						Crear nuevo Usuario
					</button>,
				]}
			/>
			<Modal isOpen={isOpen} handleStatusModal={setIsOpen}>
				<UserFormModal
					user={selectedUser}
					onClose={() => setIsOpen(false)}
					onCreate={create}
					onUpdate={update}
				/>
			</Modal>
		</>
	)
}