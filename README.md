# 🏢 **Condominium**  
> Plataforma inteligente para gestão de condomínios

[![Made with Next.js](https://img.shields.io/badge/Next.js-13+-blue?logo=next.js)](https://nextjs.org)  
[![Spring Boot](https://img.shields.io/badge/SpringBoot-Java-brightgreen?logo=spring)](https://spring.io/projects/spring-boot)  
[![Tailwind](https://img.shields.io/badge/TailwindCSS-Styled-blue?logo=tailwindcss)](https://tailwindcss.com)  
[![MIT License](https://img.shields.io/badge/license-MIT-yellow)](./LICENSE)

---

## 🚀 Visão Geral

O *Condominium* é um sistema completo para administração de condomínios com foco em:

- 🏘️ Gerenciamento de moradores, visitantes e unidades  
- 🧾 Emissão de boletos via API do Banco Inter  
- 🎨 Layout institucional com design moderno e responsivo  
- 🔐 Painel administrativo com login e controle de acesso

---

## 🔧 Stack Tecnológica

| Camada     | Tecnologia                          |
|------------|--------------------------------------|
| Frontend   | Next.js, TypeScript, Tailwind CSS    |
| Backend    | Spring Boot (Java)                   |
| Boleto     | Banco Inter API + futuras opções     |
| Deploy     | Vercel (frontend), Heroku/AWS (backend) |

---

## 📁 Estrutura de Pastas

```txt
src/
├── app/              # Páginas principais
├── components/       # Componentes visuais
├── middleware.ts     # Proteção de rotas
public/images/        # Logotipo e assets SVG
🧪 Como Executar Localmente
Pré-requisitos
Node.js 18+

Java 17+

Banco PostgreSQL local ou via Docker

Rodar frontend:
bash
npm install
npm run dev
➡ Acesse: http://localhost:3000

Rodar backend:
bash
mvn spring-boot:run
🔑 Configure application.properties com os dados da API do Banco Inter

📌 Roadmap e Progresso
Veja o planejamento do projeto no ROADMAP.md

🤝 Contribuições
Contribuições são bem-vindas! Use o Issues para sugestões e melhorias.

👨‍💼 Autor
Willian Fruttero 🔗 GitHub