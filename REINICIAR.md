# 🔁 REINICIAR.md

## 📍 Ponto exato onde o projeto foi pausado

- ✅ Tela `fornecedores-visualizacao.html` concluída e mockada:
  - Filtros por nome, tipo de serviço e status
  - Cards com dados simulados e ações de avaliação, edição e suspensão
  - Layout responsivo adaptado para mobile
- ✅ HTML salvo em: `public/mock-screens/fornecedores-visualizacao.html`
- ✅ Próxima tela sugerida: `agenda-servicos.html` ou `painel-manutencao.html`

---

## 🤝 Dinâmica de desenvolvimento com Copilot

Este projeto está sendo desenvolvido em colaboração com o assistente **Microsoft Copilot**, por meio de uma abordagem visual e incremental:

### Como trabalhamos juntos:

- Willian define a próxima tela ou funcionalidade
- Copilot gera o HTML completo, estilizado e responsivo
- O layout é testado no Live Server local
- Após aprovação, é salvo em `public/mock-screens/`
- O ciclo se repete até completar todas as interfaces planejadas

📎 Copilot **não visualiza imagens (`.png`)**, então os arquivos `.html` são tratados como **referência visual oficial** para cada tela mockada.

---

## 📐 Metodologia técnica e visual adotada

### Estrutura dos mockups:
- Cada tela possui:
  - `.html` → layout navegável
  - `.png` → imagem complementar (opcional)
- Local de armazenamento: `public/mock-screens/`

### Documentação utilizada:
- `README.md` → estrutura técnica e avisos
- `ROADMAP.md` → funcionalidades por perfil e telas geradas
- `REINICIAR.md` → ponto de retomada visual do projeto

---

## 📝 Telas mockadas até agora

| Perfil            | Tela                           | Arquivo HTML                       |
|-------------------|----------------------------------|------------------------------------|
| Condômino         | Login                          | `login.html`                       |
| Condômino         | Perfil                         | `perfil-condomino.html`            |
| Condômino         | Boletos pessoais               | `boletos-condomino.html`           |
| Condômino         | Reservas por dia               | `reservas-condomino-dia.html`      |
| Condômino         | Eventos                        | `eventos-condominio.html`          |
| Condômino         | Ocorrências                    | `ocorrencias.html`                 |
| Condômino         | Meus boletos                   | `meus-boletos.html`                |
| Síndico           | Dashboard                      | `dashboard-sindico.html`           |
| Síndico           | Config. de pagamento           | `config-pagamento-condominio.html` |
| Síndico           | Relatórios financeiros         | `relatorios-financeiros.html`      |
| Síndico           | Ocorrências                    | `ocorrencias.html`                 |
| Síndico           | Eventos                        | `eventos-condominio.html`          |
| Síndico           | Boletos do condomínio          | `boletos-sindico.html`             |
| Gerente           | Cadastro de usuários           | `gerente-cadastro.html`            |
| Gerente           | Solicitações (condôminos)      | `gerente-solicitacoes.html`        |
| Gerente           | Relatórios financeiros         | `relatorios-financeiros.html`      |
| Gerente           | Prestadores de serviço         | `prestadores-servico.html`         |
| Gerente           | Solicitações avançadas         | `solicitacoes-gerente.html` ✅      |
| Admin Global      | Dashboard                      | `dashboard-admin.html`             |
| Admin Global      | Gerenciador de condomínios     | `condominios-gerenciador.html`     |
| Admin Global      | Cadastro de condomínio         | `cadastro-condominio.html`         |
| Admin Global      | Cadastro de apartamentos       | `cadastro-apartamentos.html`       |
| Gerente/Admin     | Financeiro do condomínio       | `financeiro-condominio.html` ✅     |
| Gerente/Admin     | Cadastro de fornecedores       | `cadastro-fornecedores.html` ✅     |
| Gerente/Admin     | Visualização de fornecedores   | `fornecedores-visualizacao.html` ✅ |

---

## ✅ Últimos arquivos atualizados

- `financeiro-condominio.html`
- `cadastro-fornecedores.html`
- `fornecedores-visualizacao.html`
- `README.md`, `ROADMAP.md` e este `REINICIAR.md`

---

## 🛠️ Como retomar o projeto

1. Abrir este `REINICIAR.md`
2. Localizar a última tela gerada: `fornecedores-visualizacao.html`
3. Validar em Live Server local
4. Solicitar a próxima tela ao Copilot ou seguir fluxo do `ROADMAP.md`

---

📎 Repositório oficial:  
[github.com/willianfruttero/condominium](https://github.com/willianfruttero/condominium)
