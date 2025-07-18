# 🧾 ROADMAP DE DESENVOLVIMENTO — Condominium

Sistema inteligente e escalável para gestão de condomínios.

---

## ✅ STATUS ATUAL

- Homepage institucional finalizada com layout UX/UI responsivo
- Logotipo profissional em SVG aplicado
- Tela de login funcional com roteamento para `/login`
- Componentes integrados (`Footer.tsx`, `LgpdConsentModal.tsx`)
- Repositório conectado: [GitHub](https://github.com/willianfruttero/condominium)  
  Último commit: "Home com login feito"

---

## 🧠 STACK DO PROJETO

| Camada        | Tecnologia                        |
|---------------|------------------------------------|
| Frontend      | Next.js + TypeScript + Tailwind    |
| Backend       | Spring Boot (Java)                 |
| Pagamento     | Banco Inter API + Gerencianet + Pix |
| Deploy        | Vercel (Frontend) + Heroku/AWS     |

---

## 👤 PERFIS DO SISTEMA

| Perfil         | Funções principais                                      |
|----------------|---------------------------------------------------------|
| Admin Global   | Cadastra condomínios, gerencia cobrança e acessos       |
| Gerente        | Auxilia o Admin com permissões restritas (exclusão sob aprovação) |
| Síndico        | Gerencia moradores, boletos, unidades, reservas         |
| Condômino      | Visualiza boletos, faz reservas, edita seu perfil       |

---

## 🔧 FUNCIONALIDADES POR PERFIL

### 👑 ADMIN GLOBAL
- Dashboard com cards e condomínios listados
- Cadastro de novos condomínios com plano comercial
- Atribuição de síndicos
- Cadastro e gestão de gerentes
- Aprovação de solicitações de exclusão (condomínios/síndicos)
- Geração de cobranças mensais por condomínio
- Tela de faturas e integração com múltiplos provedores de pagamento
- Definição de plano de cobrança: valor fixo, por unidade, ou por recurso

### 🧑‍💼 GERENTE
- Visualização e edição parcial de condomínios e síndicos
- Cadastro de condomínios (com limitações)
- Solicitação de exclusão (apenas com aprovação do Admin)
- Acesso restrito às funcionalidades que o Admin delegar

### 🏢 SÍNDICO
- Dashboard com indicadores do condomínio
- Cadastro de apartamentos manual ou via `.zip`
- Gerenciamento de moradores
- Emissão de boletos por unidade
- Definição de taxa condominial
- Configuração de reserva de espaços por dia (com taxa opcional)
- Visualização de reservas no calendário
- Edição das regras do condomínio

### 👤 CONDÔMINO
- Acesso à unidade vinculada
- Visualização e download de boletos
  - Filtros por mês e status (aberto, atrasado, pago)
- Reserva de espaços por **dia**
  - Sistema bloqueia automaticamente o dia reservado
  - Taxa informada no momento da reserva (se aplicável)
- Edição dos próprios dados no perfil

---

## 🖼️ TELAS MOCKADAS EM `public/mock-screens/`

- `login.png`
- `dashboard-admin.png`
- `cadastro-condominio.png`
- `dashboard-sindico.png`
- `cadastro-apartamentos.png`
- `boletos-sindico.png`
- `boletos-condomino.png`
- `reservas-condomino-dia.png`
- `perfil-condomino.png`
- `gerente-cadastro.png`
- `gerente-solicitacoes.png`
- `config-pagamento-condominio.png`

---

## 📅 CRONOGRAMA DE DESENVOLVIMENTO PESSOAL

| Horário | Tarefa                          | Objetivo                                 |
|--------|----------------------------------|------------------------------------------|
| 09:00  | Revisar estrutura de pastas      | Organização para escalabilidade          |
| 10:30  | Implementar autenticação         | Validação de usuários                    |
| 13:00  | Criar dashboard do síndico       | Cards com gestão visual e funcional      |
| 15:00  | CRUD de condomínios/unidades     | Controle completo pelo síndico           |
| 16:30  | Design system de componentes     | Reutilização visual e consistência       |
| 18:00  | Configurar deploy com Vercel     | Preparar ambiente de produção            |

---

## 🎯 METAS FUTURAS

- 🌙 Modo escuro para todo o sistema
- 🔔 Notificações internas e painel de mensagens
- 📄 Upload de documentos para moradores/unidades
- 🔌 Integrações com múltiplos gateways de pagamento (Pix, Asaas, Pagar.me)
- 🔍 Logs e auditoria das ações administrativas
- 📊 Relatórios e gráficos gerenciais por condomínio
