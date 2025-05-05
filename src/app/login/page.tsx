'use client'; // Necesario para usar useState y otros hooks en el cliente
// @ts-ignore
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image'

const LoginPage = () => {
	const router = useRouter();

	const [formData, setFormData] = useState({
		email: '',
		password: ''
	});
	const [error, setError] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		router.push('/admin/locations');
		// try {
		// 	const response = await fetch('/api/login', {
		// 		method: 'POST',
		// 		headers: { 'Content-Type': 'application/json' },
		// 		body: JSON.stringify(formData),
		// 	});
		//
		// 	if (!response.ok) {
		// 		throw new Error('Credenciales inválidas');
		// 	}
		//
		// 	const data = await response.json();
		// 	localStorage.setItem('authToken', data.token);
		//
		//
		// 	// eslint-disable-next-line @typescript-eslint/no-unused-vars
		// } catch (e: any) {
		// 	setError('Credenciales inválidas. Intenta de nuevo.');
		// }
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
			<div className="max-w-md w-full bg-white p-8 rounded shadow-md">

				<div className='text-center flex justify-center items-center'>
					<Image width={300} height={300} src={'/logo.png'} alt='sa' />
				</div>
				<h2 className="text-2xl font-bold mb-6 text-center text-purple-600">Iniciar Sesión</h2>
				{error && <p className="text-red-500 mb-4 text-sm text-center">{error}</p>}

				<form onSubmit={handleSubmit} className="space-y-5">
					<div>
						<label className="block text-sm font-medium text-gray-700">Correo electrónico</label>
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							required
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
						/>
					</div>

					<div>
						<label className="block text-sm font-medium text-gray-700">Contraseña</label>
						<input
							type="password"
							name="password"
							value={formData.password}
							onChange={handleChange}
							required
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
						/>
					</div>

					<button
						type="submit"
						className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md transition"
					>
						Iniciar sesión
					</button>
				</form>
			</div>
		</div>
	);
};

export default LoginPage;