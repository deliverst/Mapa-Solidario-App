'use client'

const Page = () => {
	const ultimosDonadores = [
		{ nombre: 'Juan Pérez', fecha: '2025-05-03', producto: 'Detergente', localidad: 'Col. Centro' },
		{ nombre: 'Ana López', fecha: '2025-05-02', producto: 'Cobijas', localidad: 'Col. Industrial' },
		{ nombre: 'Luis Rodríguez', fecha: '2025-05-01', producto: 'Despensa básica', localidad: 'Col. Campesina' },
	]

	const ultimaDonacion = ultimosDonadores[0]
	const totalUsuarios = 128
	const localidadesRecientes = ['Col. Centro', 'Col. Industrial', 'Col. Campesina']

	return (
		<div className="p-6 space-y-6  min-h-screen">
			<h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>

			{/* Tarjetas */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				<div className="bg-white rounded-lg p-4 shadow-sm border border-gray-300">
					<h2 className="text-sm font-semibold text-gray-500">Última donación</h2>
					<p className="text-lg text-gray-800 mt-1">{ultimaDonacion.nombre}</p>
					<p className="text-sm text-gray-600">Producto: {ultimaDonacion.producto}</p>
					<p className="text-xs text-gray-400">Fecha: {ultimaDonacion.fecha}</p>
				</div>

				<div className="bg-white rounded-lg p-4 shadow-sm border border-gray-300">
					<h2 className="text-sm font-semibold text-gray-500">Usuarios registrados</h2>
					<p className="text-3xl font-bold text-purple-600">{totalUsuarios}</p>
				</div>

				<div className="bg-white rounded-lg p-4 shadow-sm border border-gray-300">
					<h2 className="text-sm font-semibold text-gray-500">Últimas localidades</h2>
					<ul className="mt-2 text-sm text-gray-700 list-disc list-inside">
						{localidadesRecientes.map((loc, idx) => (
							<li key={idx}>{loc}</li>
						))}
					</ul>
				</div>
			</div>

			{/* Tabla de donaciones */}
			<div className="bg-white rounded-lg shadow-sm border border-gray-300 p-4">
				<h2 className="text-lg font-semibold text-gray-800 mb-4">Donaciones recientes</h2>
				<div className="overflow-x-auto">
					<table className="min-w-full divide-y divide-gray-200">
						<thead className="bg-gray-100">
						<tr>
							<th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Usuario</th>
							<th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Producto</th>
							<th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Localidad</th>
							<th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Fecha</th>
						</tr>
						</thead>
						<tbody className="divide-y divide-gray-100">
						{ultimosDonadores.map((don, idx) => (
							<tr key={idx} className="hover:bg-gray-50">
								<td className="px-4 py-2 text-sm text-gray-700">{don.nombre}</td>
								<td className="px-4 py-2 text-sm text-gray-700">{don.producto}</td>
								<td className="px-4 py-2 text-sm text-gray-700">{don.localidad}</td>
								<td className="px-4 py-2 text-sm text-gray-500">{don.fecha}</td>
							</tr>
						))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

export default Page