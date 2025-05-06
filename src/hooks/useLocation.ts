'use client'

import { useState } from 'react'

import { donationCentersChihuahua as locationsMock } from '@/mocks/locations'

export interface Location {
	name: string
	address: string
	phone: string[]
	supportTypes: string[]
	schedule: string
	lat: number
	lng: number
}

export const useLocations = () => {
	const [locations, setLocations] = useState<Location[]>(locationsMock)
	console.log({locations})
	const create = (newLocation: Location) => {
		setLocations(prev => [...prev, newLocation])
	}

	const update = (updatedLocation: Location) => {
		setLocations(prev =>
			prev.map(loc =>
				loc.name === updatedLocation.name ? updatedLocation : loc,
			),
		)
	}

	const remove = (name: string) => {
		setLocations(prev => prev.filter(loc => loc.name !== name))
	}

	return {
		locations,
		create,
		update,
		remove,
	}
}