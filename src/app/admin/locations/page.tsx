'use client'
import GenericTable from '@/components/general/GenericTable'
import { useRouter } from 'next/navigation'
import Modal from '@/components/general/Modal'
import { useState } from 'react'
import NuevaUbicacionModal from '@/app/admin/locations/Form'

export default function Page() {
	const router = useRouter()
	const [isOpen, setIsOpen] = useState(false)

	const puntosDeDonacionChihuahua = [
		{
			nombre: 'Banco de Alimentos de Chihuahua',
			direccion: 'C. José María Morelos 405, Zona Centro, 31000 Chihuahua, Chih.',
			telefono: ['+52 614 415 3990', '+52 614 435 2759'],
			tiposDeApoyo: ['Alimentos no perecederos', 'Despensas'],
			horario: 'Lunes a viernes, 9:00 AM – 4:00 PM',
		},
		{
			nombre: 'Cáritas de Chihuahua I.B.P.',
			direccion: 'C. 37a #1612, Col. Obrera, 31000 Chihuahua, Chih.',
			telefono: ['+52 614 410 8400'],
			tiposDeApoyo: ['Ropa en buen estado', 'Cobijas', 'Artículos de higiene personal'],
			horario: 'Lunes a viernes, 8:00 AM – 3:00 PM',
		},
		{
			nombre: 'DIF Estatal Chihuahua – Atención Ciudadana',
			direccion: 'Cristóbal Colón S/N, Col. de las Madres, 33700 Chihuahua, Chih.',
			telefono: ['+52 648 462 3510'],
			tiposDeApoyo: ['Alimentos', 'Ropa', 'Apoyo escolar'],
			horario: 'Lunes a viernes, 8:00 AM – 4:00 PM',
		},
		{
			nombre: 'Fundación Grupo Bafar',
			direccion: 'Blvd. J. Fuentes Mares 1303, Divisón del Norte, 31064 Chihuahua, Chih.',
			telefono: ['+52 614 414 0995'],
			tiposDeApoyo: ['Alimentos', 'Ropa', 'Útiles escolares'],
			horario: 'Lunes a viernes, 9:00 AM – 5:00 PM',
		},
	].map((item, index) => ({
		...item,
		options: (
			<div className='flex gap-2'>
				<button
					onClick={() => alert(`Editar fila ${index}`)}
					className='text-blue-600 hover:underline text-sm'
				>
					Editar
				</button>
				<button
					onClick={() => alert(`Eliminar fila ${index}`)}
					className='text-red-600 hover:underline text-sm'
				>
					Eliminar
				</button>
			</div>
		),
	}))

	return (
		<>
			<GenericTable
				title='Lista de Puntos'
				data={puntosDeDonacionChihuahua}
				extraButtons={[
					<button
						key='crear'
						onClick={() => setIsOpen(true)}
						className='bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 text-sm'
					>
						Crear nueva ubicación
					</button>,
				]}
			/>
			<Modal isOpen={isOpen} handleStatusModal={setIsOpen}>
				<NuevaUbicacionModal/>
			</Modal>
		</>
	)
}