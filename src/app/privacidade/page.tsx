export default function PoliticaPrivacidade() {
  return (
    <main className="min-h-screen px-6 py-12 max-w-4xl mx-auto font-sans text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold mb-4 text-blue-800">Política de Privacidade</h1>

      <p className="mb-4">
        Esta plataforma respeita a LGPD (Lei nº 13.709/2018) e garante que seus dados pessoais sejam coletados, utilizados e protegidos de forma ética e transparente.
      </p>

      <section className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold text-blue-700 mb-1">1. Quais dados coletamos?</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Nome, email e telefone</li>
            <li>Informações condominiais (unidade, apartamento)</li>
            <li>Credenciais criptografadas de acesso</li>
            <li>Dados de uso e navegação</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-blue-700 mb-1">2. Como usamos seus dados?</h2>
          <p className="text-sm">
            Para autenticação, gestão de condomínios, envio de notificações internas e melhorias da plataforma.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-blue-700 mb-1">3. Seus direitos</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Acessar, corrigir ou excluir seus dados</li>
            <li>Revogar consentimentos</li>
            <li>Solicitar bloqueio ou anonimização</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-blue-700 mb-1">4. Contato</h2>
          <p className="text-sm">
            Em caso de dúvidas, envie para:{' '}
            <a href="mailto:suporte@condominium.com.br" className="text-blue-600 underline">
              suporte@condominium.com.br
            </a>{' '}
            ou{' '}
            <a href="https://wa.me/5511912345678" target="_blank" className="text-blue-600 underline">
              WhatsApp (11) 91234-5678
            </a>
          </p>
        </div>
      </section>

      <p className="mt-8 text-xs text-gray-500">
        Última atualização: {new Date().toLocaleDateString('pt-BR')}
      </p>
    </main>
  )
}
