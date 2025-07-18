# 🏢 Condominium

Plataforma inteligente e escalável para gestão de condomínios.

---

## 🚀 Visão Geral

O sistema oferece:

- 👑 Controle total por Admin Global  
- 🏘️ Gerenciamento de condomínios, unidades, moradores e reservas  
- 🔐 Acesso segmentado por perfil: Admin, Síndico, Condômino, Gerente  
- 🧾 Emissão de boletos via Banco Inter, Gerencianet, Pix e outros  
- 💳 Cobrança mensal automatizada por condomínio  
- 📆 Reservas de espaços comuns por dia com taxa opcional  
- 📄 Uploads de documentos por unidade  
- 🕵️ Logs administrativos e auditoria de ações  

---

## 💻 Stack Tecnológica

| Camada     | Tecnologia                            |
|------------|----------------------------------------|
| Frontend   | Next.js + TypeScript + Tailwind CSS    |
| Backend    | Spring Boot (Java)                     |
| Pagamento  | Banco Inter API + Pix + Alternativas   |
| Deploy     | Vercel (frontend), Heroku/AWS (backend)|

---

## 👤 Perfis e Acessos

| Perfil         | Funções Principais                                         |
|----------------|------------------------------------------------------------|
| Admin Global   | Cadastra condomínios, síndicos, gerentes e gerencia cobrança |
| Gerente        | Atua sob supervisão do Admin, com funções específicas       |
| Síndico        | Gerencia o condomínio, moradores, boletos e reservas        |
| Condômino      | Acessa boletos, faz reservas e edita seus dados pessoais    |

---

## 📂 Estrutura de Pastas

```bash
src/
├── app/              # Páginas principais
├── components/       # Componentes visuais reutilizáveis
├── mocks/            # Dados simulados para frontend
├── services/         # APIs e integrações
├── middleware.ts     # Proteção de rotas privadas
public/
└── mock-screens/     # Imagens das telas mockadas
📸 Telas Mockadas
Localizadas em public/mock-screens/:

login.png

dashboard-admin.png

cadastro-condominio.png

dashboard-sindico.png

cadastro-apartamentos.png

boletos-sindico.png

boletos-condomino.png

reservas-condomino-dia.png

perfil-condomino.png

gerente-cadastro.png

gerente-solicitacoes.png

config-pagamento-condominio.png

📦 Como Executar Localmente
Frontend
bash
npm install
npm run dev
➡ http://localhost:3000
Backend
bash
mvn spring-boot:run
➡ Configure o application.properties com a API escolhida para boletos/Pix
📄 Roadmap do Projeto
Confira o progresso completo das funcionalidades e telas mockadas no arquivo ROADMAP.md


---

## 🧾 `ROADMAP.md` — Versão atualizada

> ✅ Repleto de perfis, funcionalidades detalhadas, metas, cronograma e mockups já definidos.

Se quiser revisar antes de colar, posso te mostrar o conteúdo em seguida — ou te entregar direto com tudo pronto para subir. Me confirma e já envio! 😄📂📘
