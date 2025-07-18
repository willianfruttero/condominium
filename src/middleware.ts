import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'

const SECRET = 'segredo-super-seguro'

export function middleware(request: NextRequest) {
    const token = request.cookies.get('authToken')?.value

    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    try {
        const payload = jwt.verify(token, SECRET) as any

        // Verifica se URL corresponde ao condominioId do usuário
        const url = new URL(request.url)
        const pathId = url.pathname.split('/')[2] // '/condominio/[id]/...'

        if (pathId && pathId !== payload.condominioId) {
            return NextResponse.redirect(new URL('/acesso-negado', request.url))
        }

        return NextResponse.next()
    } catch (err) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
}

export const config = {
    matcher: ['/condominio/:id/:path*']
}
