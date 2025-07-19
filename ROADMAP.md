# 🗂️ ROADMAP.md

## 🔁 Versões do Condominium

| Versão     | Código     | Descrição                                      |
|------------|------------|-------------------------------------------------|
| 🥉 Prata    | `SILVER`   | Essencial para prédios pequenos e gestão básica |
| 🥈 Gold     | `GOLD`     | Gerencial para síndicos e controle financeiro   |
| 🥇 Platinum | `PLATINUM` | Corporativa para administradoras completas      |

---

## 🔔 notificacoes-sistema.html

📌 Status: ✅ Finalizada  
📄 Caminho: `public/mock-screens/notificacoes-sistema.html`  
🔀 Versões aplicáveis: `SILVER`, `GOLD`, `PLATINUM`

### 🔧 Funcionalidades
- Filtros: status, tipo, categoria, prioridade, bloco, apto, perfil, período
- Perfis:
  - Condômino → vê apenas suas notificações
  - Síndico → vê notificações gerenciais
  - Admin → vê todas
- Ações:
  - Marcar como lida
  - Contestar multa
  - Visualizar evidência
  - Editar/cancelar evento
  - Reenviar boleto

### 🔗 Integrações futuras
- [PLATINUM] API REST com autenticação por perfil
- [GOLD] Controle por JWT e logs de ação
- [SILVER] Apenas leitura e visualização simples

---

## 🏢 visao-geral-condominio.html

📌 Status: ✅ Finalizada  
📄 Caminho: `public/mock-screens/visao-geral-condominio.html`  
🔀 Versões aplicáveis: `SILVER`, `GOLD`, `PLATINUM`

### 🔧 Componentes
- Cards com resumo de notificações
- Painel financeiro com gráfico e balanço
- Lista de eventos próximos
- Botões de acesso rápido: perfil, histórico, solicitação
- Adaptação visual conforme perfil logado

### 🔗 Integrações futuras
- [GOLD/PLATINUM] Chart.js para gráficos
- [PLATINUM] KPIs avançados, multi-condomínio

---

## 🔩 Estrutura técnica recomendada

📁 Pastas por versão:
src/ ├── modules/ │ ├── silver/ │ ├── gold/ │ └── platinum/


⚙️ Flags TypeScript (`config.ts`):
```ts
export const VERSION = "gold";
export const IS_GOLD = VERSION === "gold";
export const IS_PLATINUM = VERSION === "platinum";
export const IS_SILVER = VERSION === "silver";
🔃 Exemplo de uso:

ts
if (IS_GOLD) renderFinancialDashboard();
if (IS_PLATINUM) activateMultiCondoModule();
📚 Documentação habilitada
Documento	SILVER	GOLD	PLATINUM
README.md	✅	✅	✅
ROADMAP.md	✅	✅	✅
TECNOLOGIAS.md	❌	✅	✅
README.planos.md	✅	✅	✅
Swagger/OpenAPI	❌	❌	✅
🧭 Próxima tela sugerida
📄 cadastro-unidade.html 🔀 Versões:

[SILVER] Dados básicos (nome, apto)

[GOLD] Bloco, proprietário, contato

[PLATINUM] Histórico de ocupação, integração com ERP

📌 Observação: Sempre que uma tela nova for validada, adicionar aqui com:

Caminho do arquivo

Lógica por versão

Perfis envolvidos

Funções e integrações planejadas


## 🏘️ cadastro-unidade.html

📌 Status: ✅ Finalizada  
📄 Caminho: `public/mock-screens/cadastro-unidade.html`  
🔀 Versões aplicáveis: `SILVER`, `GOLD`, `PLATINUM`

### 🔧 Finalidade
Tela usada para cadastro ou edição de unidades residenciais, vinculando moradores a apartamentos e registrando dados internos por perfil e versão.

### 🔧 Componentes por versão

| Campo                   | SILVER | GOLD | PLATINUM |
|------------------------|--------|------|----------|
| Nome do morador        | ✅     | ✅   | ✅       |
| Apartamento            | ✅     | ✅   | ✅       |
| Bloco                  | ❌     | ✅   | ✅       |
| Telefone/Celular       | ❌     | ✅   | ✅       |
| Histórico de ocupação  | ❌     | ❌   | ✅       |
| Código ERP             | ❌     | ❌   | ✅       |

### 👥 Perfis envolvidos
- ✅ Admin: acesso completo a todos os campos
- ✅ Síndico: acesso intermediário (sem ERP/histórico)
- ✅ Condômino: acesso restrito (visualização ou edição básica)

### 🔗 Integrações futuras
- [PLATINUM] Persistência via API externa para ERPs
- [GOLD] Validação por bloco e histórico de movimentações
- [SILVER] Cadastro interno local sem integrações

---

📌 Observação: A tela adapta dinamicamente os campos exibidos conforme a versão ativa, definida em `config.ts`. Recomenda-se o uso de lógica condicional para renderização visual e validação dos dados.

