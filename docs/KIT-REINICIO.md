# 🧰 KIT-REINICIO.md

Este arquivo contém os 3 documentos essenciais para retomar o projeto com todos os padrões e escopos aplicados, mesmo após reiniciar o navegador.

---

## 🔁 REINICIAR.md

### 📍 Ponto exato onde paramos

- ✅ `agenda-comunicados.html` finalizada
  - Filtros: tipo, período, CPF, bloco, apartamento
  - Cards com destaque visual por urgência
  - Barra de rolagem + seletor de quantidade por vez
  - Exibição de usuário logado padronizada
  - Classificação: **PLATINUM**

- ✅ `painel-inadimplencia.html` finalizada
  - Filtros: nome, CPF, bloco, apartamento, rua/setor, período, status
  - Tabela com rolagem vertical e cabeçalho fixo
  - Controle visual de quantidade por página
  - Exibição de usuário logado padronizada
  - Classificação: **PLATINUM**

- ✅ Documentação técnica atualizada:
  - `README.planos.md`
  - `ROADMAP.md`
  - `REINICIAR.md`

- ✅ HTMLs salvos em: `public/mock-screens/`

---

### 🔜 Próxima tela sugerida

- `cadastro-comunicados.html` → Criação de comunicados
  - Campos: título, descrição, tipo, agendamento, público alvo
  - Escopo sugerido: **PLATINUM**

---

## 🧭 ROADMAP.md

### `painel-inadimplencia.html` (PLATINUM)

- Filtros: nome, CPF, apartamento, bloco, rua/setor, período, status
- Tabela com rolagem e cabeçalho fixo
- Quantidade de exibição por página: 10 / 25 / 50 / todos
- Ações: notificar, gerar acordo, ver histórico
- Exibição de usuário logado aplicada

### `agenda-comunicados.html` (PLATINUM)

- Filtros: tipo de comunicado, período, CPF, bloco, apartamento
- Cards categorizados com destaque para urgência (.urgente)
- Área rolável para comunicados
- Controle de exibição por quantidade
- Exibição do usuário logado aplicada
- Evolução futura: botão de confirmação, presença e leitura

---

### Padrões visuais e funcionais mantidos

- 👤 Exibir usuário logado em todas as telas
- 🎨 Layout responsivo com CSS embutido
- 📦 Escopo por plano aplicado em todas as funcionalidades

---

## 📦 README.planos.md

### Escopo por Plano

| Tela / Funcionalidade           | Plano      | Observações                                                   |
|--------------------------------|------------|---------------------------------------------------------------|
| notificacoes-sistema.html      | SILVER     | Alertas básicos e visibilidade universal                      |
| visao-geral-condominio.html    | SILVER     | Exibição institucional e dados públicos                       |
| cadastro-unidade.html          | GOLD       | Cadastro e gestão de unidades (administração)                 |
| painel-financeiro.html         | GOLD       | Visão geral com filtros contábeis                             |
| historico-financeiro.html      | GOLD       | Transparência por perfil, extratos e históricos               |
| perfil-financeiro.html         | GOLD       | Painel pessoal do morador logado                              |
| painel-inadimplencia.html      | PLATINUM   | Filtros avançados, rolagem, ações estratégicas                |
| agenda-comunicados.html        | PLATINUM   | Filtros por CPF/bloco/apto, rolagem, controle de exibição     |

⚠️ Funcionalidades interativas (leitura, presença, notificações) elevam o escopo para PLATINUM.
