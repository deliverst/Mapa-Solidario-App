'use client'

import { useEffect } from 'react'
import { donationCentersChihuahua } from '@/mocks/locations'
import { users as mockUsers } from '@/mocks/users'
import { useLocationStore } from '@/store/useLocationStore'

export const InitLocations = () => {
	const setAll = useLocationStore((state) => state.setAll)
	const setUsers = useLocationStore((state) => state.setUsers)
	const locations = useLocationStore((state) => state.locations)
	const users = useLocationStore((state) => state.users)
	const hydrated = useLocationStore((state) => state.hydrated)

	useEffect(() => {
		if (!hydrated) return // evita correr antes de que se hidrate Zustand

		if (locations.length === 0) {
			setAll(donationCentersChihuahua)
		}
		if (users.length === 0) {
			setUsers(mockUsers)
		}
	}, [hydrated, locations.length, users.length, setAll, setUsers])

	return null
}