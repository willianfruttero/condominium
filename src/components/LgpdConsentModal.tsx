'use client'

import { useEffect, useState } from 'react'

export default function LgpdConsentModal() {
    const [visivel, setVisivel] = useState(false)

    useEffect(() => {
        const aceito = localStorage.getItem('lgpd_consentido')
        if (!aceito) setVisivel(true)
    }, [])

    const aceitar = () => {
        localStorage.setItem('lgpd_consentido', 'true')
        setVisivel(false)
    }

    if (!visivel) return null

    return (
        <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center px-4">
            <div className="bg-white w-full max-w-sm rounded-md shadow-lg p-4 text-gray-700 text-sm">
                <p className="mb-3">
                    Este site utiliza cookies e coleta dados de navegação conforme nossa{' '}
                    <a href="/privacidade" target="_blank" className="text-blue-600 underline">
                        Política de Privacidade
                    </a>. Ao continuar, você concorda com isso.
                </p>
                <button
                    onClick={aceitar}
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                    Concordo e continuar
                </button>
            </div>
        </div>
    )
}
