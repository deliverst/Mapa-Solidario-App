'use client'

import Link from 'next/link'
import GoogleMap from '@/components/GoogleMaps'
import { useLocationStore } from '@/store/useLocationStore'
import { useEffect, useState } from 'react'

export default function LandingPage() {
    const [hydrated, setHydrated] = useState(false)
    const [forceUpdate, setForceUpdate] = useState(0) // para forzar re-render

    const locations = useLocationStore((state) => state.locations)

    useEffect(() => {
        setHydrated(true)

        const channel = new BroadcastChannel('locations')
        channel.onmessage = () => {
            setForceUpdate(prev => prev + 1) // Forzar rerender
        }

        return () => channel.close()
    }, [])

    if (!hydrated) {
        return <div className="p-8 text-center text-gray-500">Cargando mapa...</div>
    }

    const markers = locations.map(location => ({
        lat: location.lat,
        lng: location.lng,
        title: location.name,
    }))


    return (
        <div className="min-h-screen bg-white flex flex-col">
            <header className="bg-purple-700 text-white py-6 px-8">
                <h1 className="text-3xl font-bold">Mapa Solidario</h1>
                <p className="text-sm">Tu ayuda, más cerca de quien la necesita</p>
            </header>

            <main className="flex-1 p-8 space-y-10 max-w-5xl mx-auto">
                <section className="text-center space-y-4">
                    <h2 className="text-2xl font-semibold">Encuentra centros de donación cercanos</h2>
                    <p className="text-gray-600">
						Descubre dónde puedes entregar tu ayuda de forma fácil y rápida.
					</p>
                </section>

                <section className="w-full h-[500px] rounded overflow-hidden shadow">
                    <GoogleMap markers={markers} />
                </section>

                <section className="text-center space-y-6">
                    <h3 className="text-xl font-semibold">¿Cómo funciona?</h3>
                    <ol className="list-decimal list-inside space-y-2 text-left max-w-md mx-auto text-gray-700">
                        <li>Explora el mapa y elige un centro de donación.</li>
                        <li>Regístrate como donador.</li>
                        <li>Agrega los artículos que vas a donar.</li>
                        <li>Entrega físicamente en el centro.</li>
                        <li>Recibe una confirmación cuando sea recibido.</li>
                    </ol>
                </section>

                <section className="flex justify-center gap-6">
                    <Link href="/login">
						<span className="bg-purple-700 text-white px-6 py-3 rounded hover:bg-purple-800 transition">
							Iniciar Sesión
						</span>
                    </Link>
                    <Link href="/register">
						<span className="border border-purple-700 text-purple-700 px-6 py-3 rounded hover:bg-purple-50 transition">
							Registrarse
						</span>
                    </Link>
                </section>
            </main>

            <footer className="bg-gray-100 text-center py-4 text-sm text-gray-600">
                © 2025 Mapa Solidario — Hecho con ❤️ en México
            </footer>
        </div>
    )
}