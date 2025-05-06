'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

const RegisterPage = () => {
	const router = useRouter()

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	})
	const [error, setError] = useState('')

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		if (formData.password !== formData.confirmPassword) {
			setError('Las contraseñas no coinciden')
			return
		}

		// Simular navegación después de registro
		router.push('/login')
	}

	return (
		<div className='min-h-screen flex items-center justify-center bg-gray-100 px-4'>
			<div className='max-w-md w-full bg-white p-8 rounded-2xl shadow-md'>

				<div className='text-center flex justify-center items-center'>
					<Link href='/'>
						<Image width={300} height={300} src={'/logo.png'} alt='Logo' />
					</Link>
				</div>
				<h2 className='text-2xl font-bold mb-6 text-center text-purple-600'>Crear cuenta</h2>
				{error && <p className='text-red-500 mb-4 text-sm text-center'>{error}</p>}

				<form onSubmit={handleSubmit} className='space-y-5'>
					<div>
						<label className='block text-sm font-medium text-gray-700'>Nombre completo</label>
						<input
							type='text'
							name='name'
							value={formData.name}
							onChange={handleChange}
							required
							className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500'
						/>
					</div>

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

					<div>
						<label className='block text-sm font-medium text-gray-700'>Confirmar contraseña</label>
						<input
							type='password'
							name='confirmPassword'
							value={formData.confirmPassword}
							onChange={handleChange}
							required
							className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500'
						/>
					</div>

					<button type='submit' className='w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md transition'>
						Registrarse
					</button>

					<p className='text-center text-sm text-gray-600 mt-4'>
							¿Ya tienes una cuenta?{' '}
							<span onClick={() => router.push('/login')} className='text-purple-600 hover:underline cursor-pointer font-medium'>
								Ingresa aquí
							</span>
					</p>
				</form>
			</div>
		</div>
	)
}

export default RegisterPage