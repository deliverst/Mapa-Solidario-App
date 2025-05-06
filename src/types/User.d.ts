export interface OrderItem {
	item: string
	quantity: number
}

export interface Order {
	numberOrder: string
	items: OrderItem[]
}

export interface User {
	name: string
	email: string
	role: string
	status: string
	orders?: Order[]
	id: string
}