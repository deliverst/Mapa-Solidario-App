'use client'
import Link from 'next/link'
import { Post } from '@/types/Post'
import Button from '@/components/general/Button'
import Image from 'next/image'
import { usePost } from '@/hooks/usePost'

interface BlogProps {
	limit?: number;
}

export default function Blog({ limit }: BlogProps) {
	const { posts } = usePost()
	const items = limit ? posts.slice(0, limit) : posts

	const cleanAndTruncate = (html: string, maxLength: number) => {
		const text = html.replace(/<[^>]*>?/gm, '')
		return text.slice(0, maxLength) + (text.length > maxLength ? '...' : '')
	}

	return (
		<div className='container mx-auto max-w-4xl px-6 sm:px-8'>
			<h1 className='text-3xl text-[#e9a465] font-bold mb-6'>Blog</h1>
			{items.map(post => (
				<div key={post.slug} className='block border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 bg-white mb-10'>
					<Image
						src={post.image}
						alt={post.title}
						className='w-full h-60 object-cover sm:h-72'
						width={300}
						height={192}
					/>
					<div className='p-6 '>
						<h3 className='text-xl text-[#e9a465] font-bold mb-3 border-t-1 border-gray-200 pt-1'>{post.title}</h3>
						<p className='text-base text-stone-600 leading-relaxed line-clamp-3'>
							{cleanAndTruncate(post.content, 300)}
						</p>
						<div className='mt-4 flex justify-end'>
							<Link href={`/blog/${post.slug}`}>
								<Button color='primary'>Leer más</Button>
							</Link>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}