# 🏢 Condominium

Plataforma inteligente e escalável para gestão de condomínios.

## 🚀 Visão Geral

O sistema oferece:

- 👑 Controle completo por **Administrador Global**
- 🏙️ Gerenciamento de condomínios, unidades, moradores e reservas
- 🔐 Acesso segmentado por perfil (Admin, Síndico, Condômino, Gerente)
- 💸 Emissão de boletos via Banco Inter, Gerencianet, Pix e outros
- 📆 Reservas por dia com taxa opcional
- 📄 Uploads de documentos por unidade
- 🕵️ Logs administrativos e auditoria de ações

## 🛠️ Stack Tecnológica

| Camada     | Tecnologia                              |
|------------|------------------------------------------|
| Frontend   | Next.js + TypeScript + Tailwind CSS      |
| Backend    | Spring Boot (Java)                       |
| Pagamento  | Banco Inter API + Pix + Alternativas     |
| Deploy     | Vercel (frontend), Heroku/AWS (backend)  |

## 👥 Perfis e Acessos

| Perfil                | Funções Principais                                                                 |
|-----------------------|------------------------------------------------------------------------------------|
| **Administrador Global** | Gerencia condomínios, receita da plataforma, custos operacionais e acessos |
| Síndico               | Gerencia seu condomínio, moradores, boletos e reservas                            |
| Condômino             | Acessa boletos, faz reservas e edita seus dados pessoais                          |
| Gerente               | Atua sob supervisão do administrador global com funções específicas               |

## 📁 Estrutura de Pastas

src/ ├── app/ # Páginas principais ├── components/ # Componentes visuais reutilizáveis ├── mocks/ # Dados simulados para frontend ├── services/ # APIs e integrações public/ └── mock-screens/ # Imagens e HTMLs das telas mockadas


## 🖼️ Telas Mockadas Visuais

Localizadas em `public/mock-screens/` ou `src/screens/`:

- `login.html`
- `dashboard-admin.html`
- `dashboard-admin-global.html` ✅
- `cadastro-condominio.html`
- `boletos-sindico.html`
- `reservas-condomino-dia.html`
- `perfil-condomino.html`
- `gerente-cadastro.html`
- `gerente-solicitacoes.html`
- `config-pagamento-condominio.html`

> Todas as telas são mockups em **HTML + CSS puro**, com estilo embutido para testes via Live Server.

## 📊 Tela `dashboard-admin-global.html`

Painel estratégico do **administrador global da plataforma Condominium**:

- Resumo financeiro mensal (receita, custos e lucro líquido)
- Tabela de condomínios cadastrados com status, plano e último pagamento
- Custos operacionais categorizados (infraestrutura, equipe, serviços externos)
- Gráfico mockado de evolução da receita

⚠️ Por segurança, **ações críticas** como habilitar/desabilitar condomínios **não estão presentes** na tela principal — serão gerenciadas em uma tela separada, com confirmação.

## 🧪 Execução Local

Frontend:

```bash
npm install
npm run dev
➡ http://localhost:3000
Backend:

bash
mvn spring-boot:run
➡ Configure o application.properties com a API de boletos/Pix
Live Server (mock HTML):

bash
➡ Abra os arquivos HTML em `mock-screens/` com extensão .html
➡ Use o Live Server no VS Code para visualizar no navegador
📌 ROADMAP
Confira o progresso completo das funcionalidades e telas mockadas em ROADMAP.md