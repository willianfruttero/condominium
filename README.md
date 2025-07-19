# 🏢 Projeto: Condominium – Interface de Gestão Condominial

Este repositório contém os mockups visuais navegáveis do sistema de gestão condominial, desenvolvido com apoio do assistente Microsoft Copilot, por meio de uma abordagem visual, lógica e documentada.

---

## 🤖 Dinâmica com Copilot

A cada funcionalidade:

1. Willian define o escopo desejado
2. Copilot gera HTML completo, responsivo e contextualizado
3. Layout validado localmente via Live Server
4. Arquivo salvo em `public/mock-screens/`
5. Lógica registrada em `ROADMAP.md`
6. Ponto de retomada anotado em `REINICIAR.md`

📎 Nada é salvo automaticamente → este README + os arquivos `.md` garantem que o projeto nunca se perca, mesmo após reiniciar o navegador.

---

## 🧰 Stack do Projeto

### 🖥️ Frontend
- **Next.js** (com `next/font`)
- **TypeScript**
- **Bootstrap 5** (mockups visuais)
- **CSS Modules / PostCSS**
- **ESLint + Prettier**

### ⚙️ Backend (fase posterior)
- **Spring Boot**
- **JWT + Spring Security**
- **PostgreSQL + JPA/Hibernate**
- **Swagger/OpenAPI**

### 🧪 Testes (planejados)
- Jest + React Testing Library (frontend)
- JUnit + MockMVC (backend)

### 🚀 Deploy (planejado)
- **Vercel** (frontend)
- **Docker** (backend)
- **GitHub Actions** (CI/CD)

---

## 📚 Organização do Repositório

- `README.md` → este arquivo: visão técnica e estrutura geral
- `ROADMAP.md` → lógica funcional por tela e perfil
- `REINICIAR.md` → ponto exato de retomada visual
- `TECNOLOGIAS.md` → stack detalhada e atualizada
- `public/mock-screens/` → tela em HTML navegável por tipo

---

## 👥 Perfis contemplados

- Condômino  
- Síndico  
- Gerente  
- Admin Global  
- Gerente/Admin

Cada tela respeita permissões e conteúdo adaptado por tipo de usuário logado.

---

## 🔔 Exemplo de tela: `notificacoes-sistema.html`

- Filtros por status, tipo, categoria, prioridade, bloco, apto, perfil e período
- Cards com ações: contestar multa, visualizar evidência, editar evento, reenviar boleto
- Conteúdo e visibilidade adaptados por perfil
- Documentação registrada em `ROADMAP.md`
- Integração futura com backend em Spring Boot

---

## 🚀 Como contribuir ou continuar

- Consulte `REINICIAR.md` para saber exatamente onde paramos
- Verifique regras e lógica no `ROADMAP.md`
- Utilize mockups em `public/mock-screens/` para validar funcionalidades
