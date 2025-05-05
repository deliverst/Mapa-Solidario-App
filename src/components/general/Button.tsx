'use client';
import React from 'react'
import Link from 'next/link';
import { cn } from '@/lib/clsx'


const colorVariants = {
    default: 'bg-blue-500 hover:bg-blue-700 transition-colors duration-300 ease-in-out',
    primary: 'bg-[#fca158] font-bold border-gray border-2 hover:bg-[#61544b] hover:border-[#fca158] hover:text-[#fca158] transition-colors duration-300 ease-in-out',
    secondary: 'bg-[#f7f7f7] font-bold text-black border-2 border-[#666666] hover:bg-[#191a1c] hover:border-[#555a5e] hover:text-[#f7f7f7] transition-colors duration-300 ease-in-out',
  } as const;


type buttonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children? : React.ReactNode
    color? : keyof typeof colorVariants
    href? : string
    onClick? : React.MouseEventHandler<HTMLButtonElement>;
    target? : string
    className? : string
}

const isExternal = (href: string): boolean =>  /^https?:\/\//.test(href) || href.startsWith('http//') || href.startsWith('//');

const Button = ({children = "Click me", color='default', href, target, className, ...rest}: buttonProps) => {
    href ? href.startsWith('www.') ? href = `https://${href}` : href : href
    const baseClasses = "py-2 px-6 inline-flex text-center justify-center appearance-none whitespace-nowrap min-w-[150px] min-h-[40px] cursor-pointer rounded-lg"
    const btnColor = colorVariants[color] || colorVariants['default']
    const buttonStyle = cn(baseClasses, btnColor, className);


    return href ?  (

        isExternal(href) ? (
            <a href={href} target={target} rel="noopener noreferrer" className={buttonStyle} >
                {children}
             </a>
        ) : (

            <Link href={href} passHref legacyBehavior >
                <a className={buttonStyle} >
                    {children}
                </a>
             </Link>
        )
        ) : (
            <button type='button' className={buttonStyle} {...rest}>
                {children}
            </button>
        )

}

export default Button