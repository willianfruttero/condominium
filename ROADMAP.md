# 🧭 ROADMAP.md

## 🧠 Stack do projeto

- **Frontend:** Next.js + TypeScript + Bootstrap 5
- **Backend:** Spring Boot + PostgreSQL + JWT (desenvolvimento após finalização dos mockups)
- **Documentação:** README.md, REINICIAR.md, TECNOLOGIAS.md
- **Organização dos mockups:** `public/mock-screens/`

---

## 🤝 Dinâmica de desenvolvimento com Copilot

- Willian define a próxima tela ou funcionalidade
- Copilot gera o HTML completo, responsivo e estilizado
- O layout é testado no Live Server local
- Após aprovação, é salvo em `public/mock-screens/`
- Copilot documenta cada tela gerada neste `ROADMAP.md`
- O backend será desenvolvido em Spring Boot após finalização dos mockups
- Toda lógica, regra, dinâmica e decisão são registradas aqui para garantir continuidade mesmo após reinício do navegador

---

## 📦 Telas mockadas e documentadas

### 🔔 notificacoes-sistema.html

**Status:** Finalizado e responsivo  
**Local:** `public/mock-screens/notificacoes-sistema.html`

**Objetivo:** Centralizar notificações do sistema com conteúdo adaptado ao perfil logado e ações interativas

**Perfis suportados:**
- Condômino: vê apenas suas notificações pessoais
- Síndico: vê notificações do bloco gerenciado, com filtros e ações administrativas
- Gerente/Admin: acesso total com filtros avançados

**Funcionalidades:**
- Filtros por status, tipo, categoria, prioridade, bloco, apartamento, perfil e período
- Cards com ações específicas: contestar multa, visualizar evidência, editar evento, reenviar boleto
- Conteúdo adaptado por tipo de usuário logado
- Permissões visuais e operacionais organizadas

**Integração futura com backend:**
- Endpoint REST para listar notificações por perfil logado
- Filtros por bloco, apto, tipo, status e prioridade
- Ações como contestar multa, editar evento, reenviar boleto

**Pendências futuras:**
- Filtragem real com JavaScript ou backend
- Paginação ou scroll infinito
- Envio real de respostas via API
- Histórico cronológico de notificações

---

## 📌 Telas anteriores mockadas (resumo)

| Perfil            | Tela                           | Arquivo HTML                          |
|-------------------|----------------------------------|---------------------------------------|
| Condômino         | Login                          | `login.html`                          |
| Condômino         | Perfil                         | `perfil-condomino.html`               |
| Condômino         | Boletos pessoais               | `boletos-condomino.html`              |
| Condômino         | Reservas por dia               | `reservas-condomino-dia.html`         |
| Condômino         | Eventos                        | `eventos-condominio.html`             |
| Condômino         | Ocorrências                    | `ocorrencias.html`                    |
| Condômino         | Meus boletos                   | `meus-boletos.html`                   |
| Condômino         | Solicitações de documentos     | `solicitacoes-documentos.html`        |
| Síndico           | Dashboard                      | `dashboard-sindico.html`              |
| Síndico           | Config. de pagamento           | `config-pagamento-condominio.html`    |
| Síndico           | Relatórios financeiros         | `relatorios-financeiros.html`         |
| Síndico           | Ocorrências                    | `ocorrencias.html`                    |
| Síndico           | Eventos                        | `eventos-condominio.html`             |
| Síndico           | Boletos do condomínio          | `boletos-sindico.html`                |
| Síndico           | Indicadores do condomínio      | `indicadores-condominio.html`         |
| Gerente           | Cadastro de usuários           | `gerente-cadastro.html`               |
| Gerente           | Solicitações (condôminos)      | `gerente-solicitacoes.html`           |
| Gerente           | Relatórios financeiros         | `relatorios-financeiros.html`         |
| Gerente           | Prestadores de serviço         | `prestadores-servico.html`            |
| Gerente           | Solicitações avançadas         | `solicitacoes-gerente.html`           |
| Gerente           | Cadastro de fornecedores       | `cadastro-fornecedores.html`          |
| Gerente           | Visualização de fornecedores   | `fornecedores-visualizacao.html`      |
| Gerente           | Agenda de serviços             | `agenda-servicos.html`                |
| Gerente           | Painel de manutenção           | `painel-manutencao.html`              |
| Gerente           | Protocolo de solicitações      | `protocolo-solicitacoes.html`         |
| Gerente           | Documentos do condomínio       | `documentos-condominio.html`          |
| Admin Global      | Dashboard                      | `dashboard-admin.html`                |
| Admin Global      | Gerenciador de condomínios     | `condominios-gerenciador.html`        |
| Admin Global      | Cadastro de condomínio         | `cadastro-condominio.html`            |
| Admin Global      | Cadastro de apartamentos       | `cadastro-apartamentos.html`          |
| Gerente/Admin     | Financeiro do condomínio       | `financeiro-condominio.html`          |

---

📌 Toda nova tela será documentada com este mesmo padrão.  
📎 Para retomar o projeto, abra o `REINICIAR.md` e siga o fluxo visual.

