'use client'

import { useState } from 'react'
import GenericTable from '@/components/general/GenericTable'
import Modal from '@/components/general/Modal'
import NuevoUsuarioModal from '@/app/admin/users/Form'

export default function Page() {
	const [isOpen, setIsOpen] = useState(false)

	const usuarios = [
		{
			nombre: 'Juan Pérez',
			correo: 'juan.perez@gmailf.com',
			rol: 'Administrador',
			estatus: 'Activo',
		},
		{
			nombre: 'María García',
			correo: 'maria.garcia@gmail.com',
			rol: 'Voluntario',
			estatus: 'Inactivo',
		},
		{
			nombre: 'Carlos López',
			correo: 'carlos.lopez@gmail.com',
			rol: 'Coordinador',
			estatus: 'Activo',
		},
		{
			nombre: 'Ana Torres',
			correo: 'ana.torres@gmail.com',
			rol: 'Supervisor',
			estatus: 'Activo',
		}
	].map((user, index) => ({
		...user,
		options: (
			<div className='flex gap-2'>
				<button
					onClick={() => alert(`Editar usuario: ${user.nombre}`)}
					className='text-blue-600 hover:underline text-sm'
				>
					Editar
				</button>
				<button
					onClick={() => alert(`Eliminar usuario: ${user.nombre}`)}
					className='text-red-600 hover:underline text-sm'
				>
					Eliminar
				</button>
			</div>
		)
	}))

	return (
		<>
			<GenericTable
				title='Lista de Usuarios'
				data={usuarios}
				extraButtons={[
					<button
						key='crear'
						onClick={() => setIsOpen(true)}
						className='bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 text-sm'
					>
						Crear nuevo usuario
					</button>,
				]}
			/>
			<Modal isOpen={isOpen} handleStatusModal={setIsOpen}>
				<NuevoUsuarioModal />
			</Modal>
		</>
	)
}