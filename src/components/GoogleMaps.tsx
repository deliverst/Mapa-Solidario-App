'use client'
import { useEffect, useRef } from 'react'

declare global {
	interface Window {
		google: typeof google
	}
}

interface MarkerData {
	lat: number
	lng: number
	title?: string
}

interface GoogleMapProps {
	markers: MarkerData[]
}

const GoogleMap: React.FC<GoogleMapProps> = ({ markers }) => {
	const mapRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		let scriptLoaded = false

		const initMap = () => {
			if (!mapRef.current || scriptLoaded) return
			scriptLoaded = true

			const map = new window.google.maps.Map(mapRef.current, {
				center: { lat: markers[0]?.lat || 0, lng: markers[0]?.lng || 0 },
				zoom: 13,
			})

			markers.forEach(({ lat, lng, title }) => {
				new window.google.maps.Marker({
					position: { lat, lng },
					map,
					title: title ?? '',
				})
			})
		}

		if (!window.google || !window.google.maps) {
			const existingScript = document.querySelector(`script[src^="https://maps.googleapis.com/maps/api/js"]`)
			if (!existingScript) {
				const script = document.createElement('script')
				script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDhz82Fe6ckIXeoWHThkS0PJcQC7Umjq4I`
				script.async = true
				script.onload = initMap
				document.head.appendChild(script)
			} else {
				existingScript.addEventListener('load', initMap)
			}
		} else {
			initMap()
		}
	}, [markers])

	return <div
		ref={mapRef}
		style={{ width: '100%', height: '95vh' }}
	/>
}

export default GoogleMap