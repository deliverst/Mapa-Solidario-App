'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

const LoginPage = () => {
	const router = useRouter()

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	})

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		// Podrías agregar validaciones aquí en el futuro

		router.push('/admin')
	}

	return (
		<div className='min-h-screen flex items-center justify-center bg-gray-100 px-4'>
			<div className='max-w-md w-full bg-white p-8 shadow-md rounded-2xl'>
				<div className='text-center flex justify-center items-center'>
					<Link href='/'>
						<Image width={300} height={300} src='/logo.png' alt='Logo' />
					</Link>
				</div>

				<h2 className='text-2xl font-bold mb-6 text-center text-purple-600'>Iniciar Sesión</h2>

				<form onSubmit={handleSubmit} className='space-y-5'>
					<div>
						<label className='block text-sm font-medium text-gray-700'>Correo electrónico</label>
						<input
							type='email'
							name='email'
							value={formData.email}
							onChange={handleChange}
							required
							className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500'
						/>
					</div>

					<div>
						<label className='block text-sm font-medium text-gray-700'>Contraseña</label>
						<input
							type='password'
							name='password'
							value={formData.password}
							onChange={handleChange}
							required
							className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500'
						/>
					</div>

					<button
						type='submit'
						className='w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md transition'
					>
						Iniciar sesión
					</button>

					<p className='text-center text-sm text-gray-600 mt-4'>
						¿No tienes cuenta?{' '}
						<Link href='/register' className='text-purple-600 hover:underline font-medium'>
							Regístrate
						</Link>
					</p>
				</form>
			</div>
		</div>
	)
}

export default LoginPage