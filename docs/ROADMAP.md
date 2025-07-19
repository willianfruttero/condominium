## 🧭 ROADMAP.md

### Telas concluídas — escopo PLATINUM

#### `painel-inadimplencia.html`
- Filtros: nome, CPF, apto, bloco, rua/setor, período, status
- Tabela com cabeçalho fixo e rolagem vertical
- Quantidade exibida por página: 10 / 25 / 50 / todos
- Ações: notificar, gerar acordo, ver histórico
- Exibição de usuário logado padronizada

#### `agenda-comunicados.html`
- Filtros: tipo, período, CPF, bloco, apartamento
- Cards com destaque para urgência (.urgente)
- Área rolável + seletor de quantidade por vez
- Evoluções futuras: leitura, presença, agendamento

#### `cadastro-comunicados.html`
- Criação com campos: título, descrição, tipo, agendamento
- Público alvo por checkbox: blocos, aptos, CPF ou todos
- Validações e layout responsivo

#### `visao-geral-comunicados.html`
- Filtros: tipo, urgência, período, CPF, bloco, apartamento
- Cards com status e ações administrativas (editar, detalhes)
- Área rolável + controle de quantidade: 10 / 25 / 50
- UI responsiva e leve

---

### Telas concluídas — escopo GOLD

#### `cadastro-unidade.html`
- Campos: bloco, apartamento, tipo, CPF/responsável
- Seleção por checkbox + validações
- UI leve com exibição em grid
- Exibição do perfil logado no topo

#### `painel-financeiro.html`
- Filtros: tipo de receita, período, origem
- Exibição por colunas com status (pago/em aberto)
- Resumo contábil por faixa de tempo

#### `historico-financeiro.html`
- Lançamentos filtrados por perfil do morador
- Cards ou tabela simples
- Ordenação por data ou valor

#### `perfil-financeiro.html`
- Painel do morador logado
- Comparativos e status individual de cobranças
- UI com exibição personalizada

#### `documentos-condominio.html`
- Filtros: tipo de documento, bloco, data
- Cards informativos com nome, tipo, data e ações
- Ações: download e visualização
- Exibição do perfil logado no topo da tela
- Layout responsivo e leve (cards em grid)

---

### Telas concluídas — escopo SILVER

#### `notificacoes-sistema.html`
- Painel de alertas universais
- Tipos: sucesso, atenção, erro
- Visibilidade global

#### `visao-geral-condominio.html`
- Dados públicos sobre o condomínio
- Nome, CNPJ, endereço, gestão atual
- Layout institucional

---
