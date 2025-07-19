# 🗂️ ROADMAP.md

## 🔁 Versões do Condominium

| Versão     | Código     | Descrição                                      |
|------------|------------|-------------------------------------------------|
| 🥉 Prata    | `SILVER`   | Essencial para prédios pequenos e gestão básica |
| 🥈 Gold     | `GOLD`     | Gerencial para síndicos e controle financeiro   |
| 🥇 Platinum | `PLATINUM` | Corporativa para administradoras completas      |

---

## 📊 painel-financeiro.html

📌 Status: ✅ Finalizada  
📄 Caminho: `public/mock-screens/painel-financeiro.html`  
🔀 Versões aplicáveis: `SILVER`, `GOLD`, `PLATINUM`

### 🔧 Componentes
- Filtros por período: semanal, mensal, anual
- Filtros por datas: intervalo customizado
- Cards: receita total, despesas, saldo atual
- Gráfico financeiro com Chart.js
- Eventos financeiros recentes
- Botões de acesso rápido (perfil, histórico, solicitação)

### 👥 Perfis envolvidos
- ✅ Admin: vê tudo com relatórios e gráficos
- ✅ Síndico: vê dados e ações, sem integração externa
- ✅ Condômino: acesso visual restrito (versão GOLD/PLATINUM)

### 🔗 Integrações futuras
- [PLATINUM] API REST com filtros avançados por data
- [GOLD] Relatórios simples e KPIs mensais
- [SILVER] Visualização fixa do mês atual
