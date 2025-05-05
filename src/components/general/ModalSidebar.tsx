'use client'
import React, { ReactNode, useEffect, useState } from 'react'
import IClose from './icons/IClose'
import { createPortal } from 'react-dom'

interface ModalSidebarProps {
    children: ReactNode
    isOpen?: boolean
    handleStatusModal: React.Dispatch<React.SetStateAction<boolean>>
    title?: string
    className?: string
}

const ModalSidebar = ({
    children,
    isOpen,
    handleStatusModal,
    title = '',
    className = 'min-w-[46vh] max-w-[800px]'
}: ModalSidebarProps) => {
    const handleClick = () => handleStatusModal(!isOpen)
    const [isClient, setIsClient] = useState(false)

    // Detectar si estamos en el cliente
    useEffect(() => {
        setIsClient(true)
    }, [])

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }

        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            handleStatusModal(false)
        }
    }

    useEffect(() => {
        if (isOpen) {
            const handleKeyDown = (e: KeyboardEvent) => {
                if (e.key === 'Escape') {
                    handleStatusModal(false)
                }
            }
            window.addEventListener('keydown', handleKeyDown)
            return () => window.removeEventListener('keydown', handleKeyDown)
        }
    }, [isOpen, handleStatusModal])

    if (!isClient) {
        return null
    }

    return createPortal(
        <div
            onClick={handleBackgroundClick}
            className={`fixed left-0 top-0 z-[100] flex h-full w-full justify-end bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        >
            <div className={`max-h-full transform overflow-y-auto rounded-l-lg bg-white px-4 sm:px-6 md:px-8 pb-10 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} w-full sm:w-full md:w-3/6 lg:w-1/4 xl:w-1/2 2xl:w-[40vw] ${className}`}>
                <div className="sticky top-0 z-10 mb-3 flex items-center justify-between border-b border-gray-300 bg-white pt-10 ">
                    <h1 className="text-2xl font-bold uppercase">
                        {title}
                    </h1>
                    <button
                        className="hover:bg-gray"
                        color="white"
                        onClick={handleClick}
                    >
                        <IClose />
                    </button>
                </div>
                {children}
            </div>
        </div>,
        document.getElementById('modal') as HTMLElement
    )
}

export default ModalSidebar
