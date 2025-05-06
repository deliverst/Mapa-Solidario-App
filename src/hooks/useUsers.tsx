'use client'

import { useState } from 'react'
import { users as usersMock } from '@/mocks/users'

export interface User {
	name: string
	email: string
	role: string
	status: string
}

export const useUsers = () => {
	const [users, setUsers] = useState<User[]>(usersMock)

	const create = (newUser: User) => {
		setUsers(prev => [...prev, newUser])
	}

	const update = (updatedUser: User) => {
		setUsers(prev =>
			prev.map(user =>
				user.email === updatedUser.email ? updatedUser : user,
			),
		)
	}

	const remove = (email: string) => {
		setUsers(prev => prev.filter(user => user.email !== email))
	}

	return {
		users,
		create,
		update,
		remove,
	}
}