# 🧭 ROADMAP.md

## Lógica por Tela

---

### `painel-inadimplencia.html` (PLATINUM)
- Filtros: nome, CPF, apartamento, bloco, rua/setor, período, status
- Tabela com rolagem e cabeçalho fixo (`sticky`)
- Controle visual de linhas por página (10/25/50/todos)
- Ações: notificar, gerar acordo, ver histórico
- Exibição do usuário logado
- Pronto para evoluir com notificações e acordos dinâmicos

---

### `agenda-comunicados.html` (PLATINUM)
- Filtros: período, tipo de comunicado, CPF, bloco, apartamento
- Cards informativos categorizados (Reunião, Manutenção, Aviso Geral)
- Destaque visual para urgência via classe `.urgente`
- Área de comunicados com rolagem vertical
- Controle visual de quantidade por vez
- Exibição de usuário logado no cabeçalho
- Sugestões futuras: confirmação de leitura, presença, agendamento de envio

---

## Padrões mantidos

- 👤 Usuário logado visível em todas as telas no `<header>`
- 🎨 Layout com CSS embutido e responsividade nativa
- 📦 Escopo por plano granularizado em SILVER, GOLD e PLATINUM
- 📁 Registro lógico de cada funcionalidade aplicada
