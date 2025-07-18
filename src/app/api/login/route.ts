'use client'

import { useState } from 'react'

export default function CadastroCondominios() {
  // Estados dos campos
  const [nome, setNome] = useState('')
  const [endereco, setEndereco] = useState('')
  const [responsavel, setResponsavel] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [lgpd, setLgpd] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Simulação de envio para backend
    console.log('Novo condomínio:', {
      nome,
      endereco,
      responsavel,
      email,
      telefone,
      lgpd
    })

    // Limpar formulário após envio
    setNome('')
    setEndereco('')
    setResponsavel('')
    setEmail('')
    setTelefone('')
    setLgpd(false)
  }

  return (
    <main className="min-h-screen px-6 py-12 font-sans bg-gray-50 flex items-center justify-center">
      <div className="max-w-xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-blue-800 mb-6">Cadastro de Condomínio</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Campo: Nome do condomínio */}
          <input
            type="text"
            placeholder="Nome do condomínio"
            className="w-full p-2 border border-gray-300 rounded"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />

          {/* Campo: Endereço */}
          <input
            type="text"
            placeholder="Endereço completo"
            className="w-full p-2 border border-gray-300 rounded"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            required
          />

          {/* Campo: Nome do responsável */}
          <input
            type="text"
            placeholder="Síndico ou administrador"
            className="w-full p-2 border border-gray-300 rounded"
            value={responsavel}
            onChange={(e) => setResponsavel(e.target.value)}
            required
          />

          {/* Campo: Email de acesso */}
          <input
            type="email"
            placeholder="Email de acesso"
            className="w-full p-2 border border-gray-300 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Campo: Telefone (opcional) */}
          <input
            type="tel"
            placeholder="Telefone (opcional)"
            className="w-full p-2 border border-gray-300 rounded"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />

          {/* Checkbox LGPD */}
          <label className="flex items-center space-x-2 text-sm text-gray-700">
            <input
              type="checkbox"
              checked={lgpd}
              onChange={() => setLgpd(!lgpd)}
              required
            />
            <span>Confirmo que este condomínio está ciente da LGPD</span>
          </label>

          {/* Botão de envio */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
          >
            Cadastrar condomínio
          </button>
        </form>
      </div>
    </main>
  )
}
