'use client'

import { useParams } from 'next/navigation'
import { useLocationStore } from '@/store/useLocationStore'
import { useState } from 'react'
import Modal from '@/components/general/Modal'
import Link from 'next/link'
import { Order, User } from '@/types/User'

export default function UserDetailPage() {
	const { email } = useParams()
	const users = useLocationStore((state) => state.users)
	const updateUser = useLocationStore((state) => state.updateUser)

	const user = users.find(u => u.id === decodeURIComponent(email as string))

	const [isOpen, setIsOpen] = useState(false)
	const [item, setItem] = useState('')
	const [quantity, setQuantity] = useState(1)
	const [orderItems, setOrderItems] = useState<{ item: string, quantity: number }[]>([])
	const [editingOrder, setEditingOrder] = useState<{
		numberOrder: string
		items: { item: string; quantity: number }[]
	} | null>(null)

	if (!user) return <div className='p-4'>Usuario no encontrado</div>

	// Agregar nuevo item a la orden
	const handleAddItemToPreview = () => {
		if (!item || quantity <= 0) return

		if (editingOrder) {
			setEditingOrder({
				...editingOrder,
				items: [...editingOrder.items, { item, quantity }],
			})
		} else {
			setOrderItems(prev => [...prev, { item, quantity }])
		}

		setItem('')
		setQuantity(1)
	}

	const handleSaveOrder = () => {
		if (!user || orderItems.length === 0) return

		const newOrder = {
			numberOrder: crypto.randomUUID(),
			items: [...orderItems],
		}

		const updatedUser = {
			...user,
			orders: [...(user.orders ?? []), newOrder],
		}

		updateUser(updatedUser)
		setOrderItems([])
		setIsOpen(false)
	}

	const handleUpdateOrder: () => void = () => {
		if (!user || !editingOrder || !user.orders) return

		const updatedOrders: Order[] = user.orders.map((order) =>
			order.numberOrder === editingOrder.numberOrder ? editingOrder : order,
		)

		const updatedUser: User = {
			...user,
			orders: updatedOrders,
		}

		updateUser(updatedUser)

		setEditingOrder(null)
		setIsOpen(false)
	}

	const handleDeleteOrder = (numberOrder: string): void => {
		if (!user || !user.orders) return

		const updatedOrders: Order[] = user.orders.filter(
			(order) => order.numberOrder !== numberOrder,
		)

		const updatedUser: User = {
			...user,
			orders: updatedOrders,
		}

		updateUser(updatedUser)
	}

	return (
		<div className='p-4 space-y-4'>
			<h1 className='text-2xl font-semibold'>Detalles de {user.name}</h1>
			<p><strong>Email:</strong> {user.email}</p>
			<p><strong>Rol:</strong> {user.role}</p>
			<p><strong>Estado:</strong> {user.status}</p>

			<button
				onClick={() => {
					setEditingOrder(null)
					setOrderItems([])
					setItem('')
					setQuantity(1)
					setIsOpen(true)
				}}
				className='bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700'
			>
				Agregar orden
			</button>

			{user.orders?.length ? (
				<div className='mt-4 space-y-4'>
					<h2 className='text-xl font-semibold'>Órdenes</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
						{user.orders.map((order) => (
							<div
								key={order.numberOrder}
								className='border rounded-lg p-4 shadow-sm bg-white hover:shadow-md transition relative'
							>
								<p className='text-sm text-gray-500 mb-1'>
									<strong>Número de Orden:</strong> {order.numberOrder.split('-')[0]}
								</p>

								<ul className='list-disc pl-5 mb-2'>
									{Array.isArray(order.items) ? (
										order.items.map((it, idx) => (
											<li key={idx} className='text-sm text-gray-700'>
												{it.quantity} {it.item}
											</li>
										))
									) : (
										<li className='text-sm text-gray-500 italic'>Formato de orden inválido</li>
									)}
								</ul>

								<button
									onClick={() => handleDeleteOrder(order.numberOrder)}
									className='absolute top-2 right-2 text-xs text-red-500 hover:underline'
								>
									Eliminar
								</button>
								<button
									onClick={() => {
										setEditingOrder(order)
										setItem('')
										setQuantity(1)
										setIsOpen(true)
									}}
									className='absolute bottom-2 right-2 text-xs text-blue-600 hover:underline'
								>
									Editar
								</button>
							</div>
						))}
					</div>
				</div>
			) : (
				<p className='text-gray-500'>Sin órdenes registradas.</p>
			)}

			<Link href='/admin/users' className='inline-block mt-6 text-purple-600 hover:underline'>
				← Volver al listado de usuarios
			</Link>

			<Modal
				isOpen={isOpen}
				handleStatusModal={setIsOpen}
				title={editingOrder ? `Editar orden` : `Nueva orden para ${user.name}`}
			>
				<div className='flex flex-col md:flex-row gap-6'>
					{/* Vista previa */}
					<div className='md:w-1/2 space-y-2'>
						<h3 className='text-lg font-semibold'>Items en la orden</h3>
						{editingOrder ? (
							<ul className='list-disc pl-5 text-sm space-y-1'>
								{editingOrder.items.map((item, index) => (
									<li key={index} className='flex justify-between items-center'>
										<span>{item.quantity}</span> {item.item}
										<button
											onClick={() => {
												const updatedItems = editingOrder.items.filter((_, i) => i !== index)
												setEditingOrder({ ...editingOrder, items: updatedItems })
											}}
											className='text-red-500 text-xs ml-2 hover:underline'
										>
											✕
										</button>
									</li>
								))}
							</ul>
						) : orderItems.length > 0 ? (
							<ul className='list-disc pl-5 text-sm space-y-1'>
								{orderItems.map((item, index) => (
									<li key={index} className='flex justify-between items-center'>
										<span>{item.quantity}</span> {item.item}
										<button
											onClick={() => {
												const updated = orderItems.filter((_, i) => i !== index)
												setOrderItems(updated)
											}}
											className='text-red-500 text-xs ml-2 hover:underline'
										>
											✕
										</button>
									</li>
								))}
							</ul>
						) : (
							<p className='text-gray-500 text-sm'>No hay items agregados aún.</p>
						)}                    </div>

					{/* Formulario */}
					<div className='md:w-1/2 space-y-4'>
						<h3 className='text-lg font-semibold'>{editingOrder ? 'Agregar item a la orden' : 'Agregar nuevo item'}</h3>

						<input
							type='text'
							placeholder='Artículo'
							value={item}
							onChange={(e) => setItem(e.target.value)}
							className='w-full border px-3 py-2 rounded'
						/>

						<input
							type='number'
							placeholder='Cantidad'
							min={1}
							value={quantity}
							onChange={(e) => setQuantity(parseInt(e.target.value))}
							className='w-full border px-3 py-2 rounded'
						/>

						<button
							onClick={handleAddItemToPreview}
							className='bg-gray-200 text-sm px-4 py-1 rounded hover:bg-gray-300'
						>
							Agregar a la orden
						</button>

						<hr />

						{editingOrder ? (
							<button
								onClick={handleUpdateOrder}
								className='bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700'
							>
								Guardar cambios
							</button>
						) : (
							<button
								onClick={handleSaveOrder}
								disabled={orderItems.length === 0}
								className='bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 disabled:opacity-50'
							>
								Guardar orden completa
							</button>
						)}
					</div>
				</div>
			</Modal>
		</div>
	)
}