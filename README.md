# 🏢 Projeto: Condominium – Interface de Gestão Condominial

Este repositório contém os mockups visuais navegáveis do sistema de gestão condominial, desenvolvido em colaboração com o assistente **Microsoft Copilot**, por meio de uma abordagem visual, incremental e documentada.

---

## 🤖 Dinâmica com Copilot

A cada nova funcionalidade ou tela:

1. Willian define o escopo da interface ou requisito desejado
2. Copilot gera um HTML completo, responsivo e estilizado
3. O layout é testado localmente via Live Server
4. Após validação, o arquivo é salvo em `public/mock-screens/`
5. A lógica funcional é registrada em `ROADMAP.md`
6. O ponto de retomada do projeto é anotado em `REINICIAR.md`

📌 Nenhum conteúdo é salvo automaticamente por Copilot, então todas as decisões são mantidas nesses arquivos `.md` como fonte única de verdade.  
📎 Sempre que o projeto for retomado, basta colar os trechos atualizados desses arquivos para que Copilot saiba **exatamente** onde estamos — com lógica, dinâmica, regras e cada pensamento preservado.

---

## 🧰 Stack de Tecnologias

### 🖥️ Frontend

- **Next.js** → Framework React para renderização SSR e SPA
- **TypeScript** → Tipagem estática para maior segurança
- **CSS Modules / PostCSS** → Estilização modular e otimizada
- **Bootstrap 5** → Responsividade rápida nos mockups
- **ESLint + Prettier** → Padronização de código
- **next/font** → Otimização automática de fontes (Geist)

### ⚙️ Backend (planejado)

- **Spring Boot** → Framework Java para APIs REST
- **Spring Security** → Autenticação e controle de acesso por perfil
- **JPA / Hibernate** → Persistência de dados
- **PostgreSQL** → Banco de dados relacional
- **JWT** → Autenticação baseada em token
- **OpenAPI / Swagger** → Documentação de endpoints

### 🧪 Testes (planejado)

- **Jest + React Testing Library** → Testes de componentes
- **JUnit** → Testes unitários no backend
- **MockMVC** → Testes de controladores Spring

### 🚀 Deploy (planejado)

- **Vercel** → Deploy automático do frontend
- **Docker** → Containerização do backend
- **GitHub Actions** → CI/CD para testes e builds

---

## 📚 Organização dos arquivos

- `README.md` → Documento técnico, metodologia e visão geral
- `REINICIAR.md` → Ponto exato de retomada e ritmo visual do projeto
- `ROADMAP.md` → Lógica funcional por tela e perfil
- `TECNOLOGIAS.md` → Stack completa e atualizada
- `public/mock-screens/` → Telas geradas (.html e imagens)

---

## 👥 Perfis contemplados

- **Condômino**
- **Síndico**
- **Gerente**
- **Admin Global**
- **Gerente/Admin**

Cada mockup respeita regras de visibilidade, acesso e funcionalidades por tipo de perfil.  
As telas são adaptadas dinamicamente conforme o perfil logado.

---

## 🧩 Metodologia visual e lógica

- Cada tela é gerada com foco em contexto real de uso
- A lógica de cada funcionalidade é documentada no `ROADMAP.md`
- O backend será desenvolvido **após** a finalização dos mockups
- As decisões visuais definem o comportamento futuro da API REST
- Nenhuma funcionalidade é criada sem lógica clara e documentada

---

## 🔔 Tela exemplo: `notificacoes-sistema.html`

- Filtros por status, tipo, categoria, prioridade, bloco, apto e perfil
- Cards com ações específicas: responder multa, visualizar evidência, editar evento
- Conteúdo adaptado por tipo de usuário logado
- Permissões visuais e operacionais organizadas
- Lógica completa registrada em `ROADMAP.md`
- Pronta para integração com backend em Spring Boot

---

## 🚀 Como contribuir ou continuar o projeto

- Consulte `REINICIAR.md` para saber o ponto exato onde o projeto foi pausado
- Verifique a estrutura lógica no `ROADMAP.md`
- Utilize o diretório `public/mock-screens/` para validar telas
- Todo novo HTML gerado por Copilot segue o padrão visual e técnico deste repositório

---

📎 Repositório oficial:  
[github.com/willianfruttero/condominium](https://github.com/willianfruttero/condominium)

🧠 Todas as decisões visuais e funcionais são documentadas para que a lógica futura siga **exatamente** o que foi planejado — linha por linha, pensamento por pensamento, vírgula por vírgula.
