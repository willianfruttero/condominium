# 📘 README.md

## 🔍 Sobre o projeto

Sistema de gestão para condomínios, com interfaces dedicadas para diferentes perfis: condômino, síndico, gerente e administrador global. O foco está na criação de mockups navegáveis em HTML, facilitando a validação visual e funcional de cada tela antes da implementação real.

---

## 🧩 Estrutura do projeto

- `public/mock-screens/` → mockups HTML responsivos
- `README.md` → introdução e visão geral
- `ROADMAP.md` → funcionalidades por perfil
- `REINICIAR.md` → ponto de retomada visual
- `/assets` → imagens complementares (opcional)

---

## 👥 Perfis atendidos

- Condômino
- Síndico
- Gerente
- Admin Global

---

## 🖥️ Telas mockadas

| Tela                             | Arquivo HTML                          |
|----------------------------------|---------------------------------------|
| Login                            | `login.html`                          |
| Perfil do Condômino              | `perfil-condomino.html`               |
| Boletos pessoais                 | `boletos-condomino.html`              |
| Reservas por dia                 | `reservas-condomino-dia.html`         |
| Eventos                          | `eventos-condominio.html`             |
| Ocorrências                      | `ocorrencias.html`                    |
| Meus boletos                     | `meus-boletos.html`                   |
| Dashboard Síndico                | `dashboard-sindico.html`              |
| Configuração de pagamento        | `config-pagamento-condominio.html`    |
| Relatórios financeiros           | `relatorios-financeiros.html`         |
| Boletos do condomínio            | `boletos-sindico.html`                |
| Cadastro de usuários             | `gerente-cadastro.html`               |
| Solicitações (condôminos)        | `gerente-solicitacoes.html`           |
| Prestadores de serviço           | `prestadores-servico.html`            |
| Solicitações avançadas           | `solicitacoes-gerente.html`           |
| Dashboard Admin                  | `dashboard-admin.html`                |
| Gerenciador de condomínios       | `condominios-gerenciador.html`        |
| Cadastro de condomínio           | `cadastro-condominio.html`            |
| Cadastro de apartamentos         | `cadastro-apartamentos.html`          |
| Financeiro do condomínio         | `financeiro-condominio.html`          |
| Cadastro de fornecedores         | `cadastro-fornecedores.html`          |
| Visualização de fornecedores     | `fornecedores-visualizacao.html`      |
| Agenda de serviços               | `agenda-servicos.html`                |
| Painel de manutenção             | `painel-manutencao.html`              |
| Indicadores do condomínio        | `indicadores-condominio.html`         |
| Documentos do condomínio         | `documentos-condominio.html`          |
| Solicitações de documentos       | `solicitacoes-documentos.html`        |
| Protocolo de solicitações        | `protocolo-solicitacoes.html`         |

---

## 🤝 Colaboração com Copilot

As telas são desenvolvidas de forma incremental em parceria com o assistente Microsoft Copilot:

1. Willian define a próxima tela
2. Copilot gera o HTML completo e responsivo
3. O layout é validado visualmente no Live Server local
4. Após aprovação, é salvo em `public/mock-screens/`
5. O ciclo se repete até concluir o fluxo previsto

---

## 📎 Repositório oficial

🔗 [github.com/willianfruttero/condominium](https://github.com/willianfruttero/condominium)
