# 🧾 Roadmap de Desenvolvimento - Condominium

Plataforma inteligente para gestão de condomínios.

## ✅ Status Atual

- Homepage institucional finalizada com layout UX/UI responsivo
- Logotipo profissional em SVG aplicado e visível
- Formulário de login funcional com roteamento para `/login`
- Componentes integrados:
  - `Footer.tsx` (rodapé institucional)
  - `LgpdConsentModal.tsx` (consentimento LGPD)
- Projeto conectado ao GitHub  
  🔗 Repositório: https://github.com/willianfruttero/condominium  
  Último commit: "Home com login feito"

---

## 🧠 Stack do Projeto

| Camada        | Tecnologia                        |
|---------------|------------------------------------|
| Frontend      | Next.js + TypeScript + Tailwind    |
| Backend       | **Spring Boot (Java)**             |
| Boleto        | Integração com **Banco Inter API** |
| Alternativas  | Gerencianet, Asaas, Pagar.me       |
| Deploy        | Vercel (Frontend) + Heroku/AWS (Backend) |

---

## 📅 Próximas Etapas (Dia seguinte de trabalho)

| Horário | Tarefa | Objetivo |
|--------|--------|----------|
| 09:00  | Revisar estrutura de pastas (`src/app`, `components`, etc.) | Garantir organização para escalabilidade |
| 10:30  | Criar autenticação funcional | Validação de usuários e sessão segura |
| 13:00  | Desenvolver dashboard do síndico | Cards de gestão e acesso protegido |
| 15:00  | Criar CRUD de condomínios/unidades | Começar parte funcional da gestão |
| 16:30  | Montar design-system de componentes | Padronização visual e reutilização |
| 18:00  | Configurar deploy com Vercel | Preparar ambiente de produção |

---

## 🎯 Metas Futuras

- 🌙 Modo escuro opcional
- 🔔 Notificações internas e painel de mensagens
- 🔐 Controle de acesso por perfil (síndico, morador, admin)
- 📄 Uploads/documentos para moradores
- 🧾 Geração de boletos via Banco Inter (Spring Boot)
- 🔌 Alternativas de boleto via Gerencianet, Asaas, etc.
- 📊 Relatórios e gráficos de gestão
- 🕵️ Logs e auditoria de ações administrativas
