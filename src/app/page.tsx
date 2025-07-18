'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import LgpdConsentModal from '@/components/LgpdConsentModal'
import Footer from '@/components/Footer'

export default function HomePage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login com:', email, senha)
    router.push('/login')
  }

  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center px-4 py-10 sm:py-16 font-sans">

        {/* LOGOTIPO */}
        <div className="w-full flex items-center justify-center mb-8 sm:mb-10">
          <img
            src="/images/logo-condominium.svg"
            alt="Condominium - Gestão de Condomínios"
            className="h-28 sm:h-32 md:h-36 lg:h-40 xl:h-44 w-auto drop-shadow-md max-w-[85%] sm:max-w-[500px]"
          />
        </div>




        {/* SLOGAN */}
        <div className="text-center mb-10 max-w-xl space-y-2">
          <h1 className="text-xl sm:text-2xl text-gray-800 font-semibold">
            Plataforma inteligente para gestão de condomínios
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Ideal para síndicos, moradores e administradoras.
          </p>
          <p className="text-gray-600 text-sm sm:text-base">
            Gestão segura, moderna e conectada.
          </p>
        </div>

        {/* LOGIN */}
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md bg-white rounded-lg shadow-md p-6 space-y-4"
        >
          <h2 className="text-lg sm:text-xl font-semibold text-blue-700 text-center">
            Acesso ao sistema
          </h2>

          {erro && <p className="text-red-600 text-sm text-center">{erro}</p>}

          <input
            type="email"
            placeholder="Seu email"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Sua senha"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 font-semibold rounded hover:bg-blue-700 transition-all"
          >
            Entrar
          </button>
        </form>
      </main>

      <Footer />
      <LgpdConsentModal />
    </>
  )
}
