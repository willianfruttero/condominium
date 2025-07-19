# 📦 Planos e Versões do Condominium

Este documento descreve as três versões do sistema Condominium, cada uma adaptada para necessidades específicas de gestão condominial.

---

## 🥉 Versão SILVER (`SILVER`)

**💡 Público-alvo:** Pequenos edifícios e condomínios residenciais com gestão básica.

**🔧 Funcionalidades incluídas:**
- Visualização de notificações
- Cadastro simples de moradores
- Filtros básicos por status e unidade
- Tela `visao-geral-condominio.html` simplificada

**🔒 Perfis ativos:**
- Condômino
- Síndico

**📂 Módulo técnico:** `src/modules/silver/`

---

## 🥈 Versão GOLD (`GOLD`)

**💡 Público-alvo:** Síndicos e condomínios com gestão intermediária e controle financeiro.

**🔧 Funcionalidades incluídas:**
- Cadastro com bloco e contato
- Painel financeiro com gráficos
- Eventos gerenciais
- Filtros por período, tipo e prioridade
- Integração parcial com backend (JWT + logs)

**🔒 Perfis ativos:**
- Condômino
- Síndico
- Gerente

**📂 Módulo técnico:** `src/modules/gold/`

---

## 🥇 Versão PLATINUM (`PLATINUM`)

**💡 Público-alvo:** Administradoras condominiais e sistemas corporativos multi-condomínio.

**🔧 Funcionalidades incluídas:**
- KPIs avançados
- Painel multi-condomínio
- Histórico de ocupação e código ERP
- Filtros customizados por data
- Integração total com ERPs via API

**🔒 Perfis ativos:**
- Condômino
- Síndico
- Gerente
- Admin global

**📂 Módulo técnico:** `src/modules/platinum/`

---

## 📌 Como ativar versão no sistema

No arquivo `config.ts`:

```ts
export const VERSION = "gold"; // ou "silver", "platinum"

export const IS_GOLD = VERSION === "gold";
export const IS_PLATINUM = VERSION === "platinum";
export const IS_SILVER = VERSION === "silver";
