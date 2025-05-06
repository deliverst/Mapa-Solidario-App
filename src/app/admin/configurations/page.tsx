'use client'

import { useLocationStore } from '@/store/useLocationStore'
import { donationCentersChihuahua } from '@/mocks/locations'
import { users as mockUsers } from '@/mocks/users'

const Page = () => {
	const setAll = useLocationStore((state) => state.setAll)
	const setUsers = useLocationStore((state) => state.setUsers)

	const handleReset = () => {
		localStorage.removeItem('mapa-solidario-store') // Limpia persistencia
		setAll(donationCentersChihuahua) // Opcional: precargar sin recargar
		setUsers(mockUsers)
		location.reload() // Recarga para reiniciar estado completo
	}

	return (
		<div className="p-8 space-y-4">
			<h1 className="text-xl font-semibold">Configuración</h1>
			<button
				onClick={handleReset}
				className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
			>
				Restablecer datos de la aplicación
			</button>
		</div>
	)
}

export default Page