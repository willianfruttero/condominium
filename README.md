# 🏢 Projeto: Condominium

Interface de Gestão Condominial visual, responsiva e documentada — criada com apoio de Microsoft Copilot.

---

## ⚙️ Stack

**Frontend**
- Next.js (com `next/font`)
- TypeScript
- Bootstrap 5
- CSS Modules / PostCSS
- ESLint + Prettier

**Backend (planejado)**
- Spring Boot + JWT
- PostgreSQL + Hibernate
- Swagger/OpenAPI

**Testes (futuros)**
- Jest + React Testing Library
- JUnit + MockMVC

**Deploy**
- Vercel (frontend)
- Docker (backend)
- GitHub Actions (CI/CD)

---

## 📚 Documentação

| Documento       | Descrição                          |
|----------------|-------------------------------------|
| README.md       | Visão geral e stack                 |
| ROADMAP.md      | Lógica por tela, versão e perfil    |
| REINICIAR.md    | Ponto de retomada do projeto        |
| TECNOLOGIAS.md  | Stack técnica detalhada             |

---

## 👤 Perfis

- Condômino
- Síndico
- Gerente/Admin

Cada tela respeita conteúdo adaptado por tipo de usuário logado.

---

## 💡 Dinâmica com Copilot

1. Willian define escopo
2. Copilot gera o HTML completo e responsivo
3. Teste local via Live Server
4. Tela salva em `public/mock-screens/`
5. Documentação registrada nos `.md`

---

## 📌 Exemplo de tela recente

**painel-financeiro.html**
- Cards resumo: receita, despesa, saldo
- Gráfico de barras (Chart.js)
- Filtros por período e por data customizada
- Integração futura com Spring Boot e KPIs avançados
