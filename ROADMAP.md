Se quiser que eu gere novamente o conteúdo de ROADMAP.md, REINICIAR.md e TECNOLOGIAS.md, posso mandar aqui em blocos separados também.# 🧭 ROADMAP.md

## 🧠 Stack do projeto

- Frontend: Next.js + TypeScript + Bootstrap 5  
- Backend: Spring Boot + PostgreSQL + JWT  
- Documentação: README.md, REINICIAR.md, TECNOLOGIAS.md  
- Diretório de telas: `public/mock-screens/`

## 🤝 Dinâmica com Copilot

- Mockups visuais antes da lógica backend  
- Copilot entrega o HTML e documenta cada decisão  
- Willian define ritmo e conteúdo  
- Nada é salvo automaticamente → arquivos `.md` preservam tudo

## 🔔 notificacoes-sistema.html

**Status:** Finalizado  
**Local:** `public/mock-screens/notificacoes-sistema.html`

### Objetivo
Centralizar notificações adaptadas por perfil logado, com ações interativas e filtros avançados.

### Perfis
- Condômino → vê apenas suas notificações  
- Síndico → vê notificações do bloco com ações administrativas  
- Gerente/Admin → acesso total e filtros avançados

### Funcionalidades
- Filtros: status, tipo, categoria, prioridade, bloco, apto, perfil, período  
- Cards com ações: contestar multa, evidência, editar evento  
- Permissões visuais e operacionais por perfil  
- Layout responsivo, preparado para API REST

### Integração futura com backend
- Spring Boot REST endpoints  
- Regras por perfil logado  
- Contestação de multa e interação via banco

### Pendências
- Filtragem JS ou backend  
- Scroll infinito  
- Respostas via API  
- Histórico cronológico
