import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { User } from '@/types/User'

export interface Location {
	name: string
	address: string
	phone: string[]
	supportTypes: string[]
	schedule: string
	lat: number
	lng: number
}

interface LocationState {
	locations: Location[]
	create: (loc: Location) => void
	update: (loc: Location) => void
	remove: (name: string) => void
	setAll: (locs: Location[]) => void

	users: User[]
	setUsers: (users: User[]) => void
	createUser: (user: User) => void
	updateUser: (user: User) => void
	removeUser: (email: string) => void

	// 👇 Agrega esto:
	hydrated: boolean
	setHydrated: () => void
}

export const useLocationStore = create<LocationState>()(
	persist(
		(set) => ({
			locations: [],
			create: (loc) =>
				set((state) => ({
					locations: [...state.locations, loc],
				})),
			update: (updatedLoc) =>
				set((state) => ({
					locations: state.locations.map((loc) =>
						loc.name === updatedLoc.name ? updatedLoc : loc,
					),
				})),
			remove: (name) =>
				set((state) => ({
					locations: state.locations.filter((loc) => loc.name !== name),
				})),
			setAll: (locs) => set(() => ({ locations: locs })),

			users: [],
			setUsers: (users) => set(() => ({ users })),
			createUser: (user) =>
				set((state) => ({
					users: [...state.users, user],
				})),
			updateUser: (updatedUser) =>
				set((state) => ({
					users: state.users.map((user) =>
						user.email === updatedUser.email ? updatedUser : user,
					),
				})),
			removeUser: (email) =>
				set((state) => ({
					users: state.users.filter((user) => user.email !== email),
				})),
			hydrated: false,
			setHydrated: () => set({ hydrated: true }),
		}),
		{
			name: 'mapa-solidario-store', // Clave para localStorage
		},
	),
)