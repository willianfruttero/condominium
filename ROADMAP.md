# 📍 ROADMAP | Condominium

## ✅ Telas mockadas aprovadas

### `dashboard-admin.html`
Painel simples para administradores de condomínio (nível local), com métricas básicas como:
- Condomínios cadastrados
- Síndicos ativos
- Boletos emitidos
- Reservas confirmadas
- Gráfico mockado de fluxo financeiro
- Últimas solicitações registradas

### `dashboard-admin-global.html`
Painel executivo para o **administrador global da plataforma Condominium**, com:
- Resumo financeiro geral (receita mensal, gastos operacionais, lucro líquido)
- Tabela dos condomínios cadastrados com status (ativo/inativo), plano, último pagamento
- Custos operacionais categorizados (infraestrutura, equipe, serviços externos)
- Gráfico mockado de evolução da receita
- ⚠️ Ações críticas como habilitar/desabilitar condomínios **foram removidas** da tela principal — serão tratadas em tela própria com confirmação

## 🔒 Diretrizes de segurança visual

- Nenhuma ação crítica (ex: bloqueio de acesso, exclusão) deve ser executada diretamente em dashboards
- Toda ação sensível deve conter confirmação (ex: modal ou tela dedicada)
- Separar claramente visualização de controle administrativo

## 📁 Organização dos arquivos mockados

- HTMLs visuais salvos em `public/mock-screens/` ou `src/screens/`
- CSS puro embutido nos arquivos HTML para renderização via Live Server
- Nomenclatura clara e consistente para cada tela

## 🔜 Próximas telas a desenvolver

| Tela                        | Objetivo                                                        |
|----------------------------|------------------------------------------------------------------|
| `condominios-gerenciador.html` | Gerenciar acesso e status dos condomínios com segurança (modal) |
| `cadastro-condominio.html`     | Formulário completo de registro de condomínio                   |
| `boletos-sindico.html`         | Visualização e gestão de boletos do síndico                     |
| `relatorio-financeiro.html`    | Detalhamento completo de receita e despesas                     |
| `perfil-condomino.html`        | Informações e configurações individuais do usuário              |
| `config-pagamento-condominio.html` | Ajustes de método de pagamento por condomínio                  |

## 🎯 Status atual

- ✅ Telas visuais sendo aprovadas com layout e estilo consistente
- 📘 Documentação alinhada entre README e ROADMAP
- 🔧 Protótipos HTML rodando via Live Server para validação visual

---

📅 Última atualização: **18/07/2025**  
🛠️ Responsável: `willianfruttero`

