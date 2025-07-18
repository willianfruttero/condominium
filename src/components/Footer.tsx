export default function Footer() {
    return (
        <footer className="w-full bg-gradient-to-r from-blue-100 to-blue-50 border-t border-blue-200">
            <div className="max-w-4xl mx-auto px-6 py-8 text-center text-sm text-gray-800 space-y-3">
                <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-6 space-y-2 sm:space-y-0">
                    <p>
                        📱 WhatsApp:{' '}
                        <a
                            href="https://wa.me/5511912345678"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline"
                        >
                            (11) 91234-5678
                        </a>
                    </p>

                    <p>
                        ✉️ Email:{' '}
                        <a
                            href="mailto:suporte@condominium.com.br"
                            className="text-blue-600 underline"
                        >
                            suporte@condominium.com.br
                        </a>
                    </p>

                    <p>
                        🔒{' '}
                        <a
                            href="/privacidade"
                            className="text-blue-600 underline"
                        >
                            Política de Privacidade
                        </a>
                    </p>
                </div>

                <p className="text-xs text-gray-500 mt-3">
                    &copy; {new Date().getFullYear()} Condominium. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    )
}
