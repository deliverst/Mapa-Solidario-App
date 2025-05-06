'use client'

import GoogleMap from '@/components/GoogleMaps'
import { useLocationStore } from '@/store/useLocationStore'

const Page = () => {
	const locations = useLocationStore((state) => state.locations)

	const markers = locations.map(location => ({
		lat: location.lat,
		lng: location.lng,
		title: location.name,
	}))

	return <GoogleMap markers={markers} />
}

export default Page