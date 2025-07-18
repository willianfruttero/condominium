# 🏢 Condominium — Painel Web Administrativo

Sistema web visual para gestão de condomínios. Este projeto foca em reproduzir as interfaces por meio de **mockups HTML estáticos**, como referência visual para posterior desenvolvimento backend e integrações reais.

---

## 👨‍💻 Como rodar localmente

1. Clonar o repositório:
```bash
git clone https://github.com/willianfruttero/condominium.git
Abrir o arquivo desejado na pasta:

public/mock-screens/
Usar Live Server (VSCode) para visualizar cada tela simulada

🧱 Estrutura de pastas
📦 condominium
├── README.md
├── ROADMAP.md
├── REINICIAR.md
└── public
    └── mock-screens
        ├── login.html
        ├── meus-boletos.html
        ├── prestadores-servico.html
        ├── solicitacoes-gerente.html
        ├── cadastro-fornecedores.html
        ├── fornecedores-visualizacao.html
        ├── financeiro-condominio.html
        └── demais mockups...
🔁 Fluxo visual com Copilot
O projeto é desenvolvido junto ao Microsoft Copilot, por meio de:

Geração de HTML estilizado para cada tela

Teste visual via Live Server

Versionamento de mockups em .html como base visual oficial

Documentação que define funcionalidades, perfis e telas

📎 Copilot não visualiza imagens .png, então os .html são usados como referência primária para validação visual.

📋 Documentos internos
ROADMAP.md → funcionalidades por perfil e telas mockadas

REINICIAR.md → ponto de parada atual e fluxo colaborativo

README.md → instruções técnicas e estrutura do projeto

🧩 Telas mockadas concluídas
👤 Condômino
login.html

perfil-condomino.html

boletos-condomino.html

reservas-condomino-dia.html

eventos-condominio.html

ocorrencias.html

meus-boletos.html

🧑‍💼 Síndico
dashboard-sindico.html

config-pagamento-condominio.html

relatorios-financeiros.html

boletos-sindico.html

eventos-condominio.html

ocorrencias.html

👨‍🔧 Gerente
gerente-cadastro.html

gerente-solicitacoes.html

relatorios-financeiros.html

prestadores-servico.html

solicitacoes-gerente.html

👨‍💼 Admin Global
dashboard-admin.html

condominios-gerenciador.html

cadastro-condominio.html

cadastro-apartamentos.html

🧰 Gerente / Admin
financeiro-condominio.html

cadastro-fornecedores.html

fornecedores-visualizacao.html

📍 Ponto atual
Última tela mockada: fornecedores-visualizacao.html → lista com filtros, status e ações simuladas para fornecedores cadastrados.

Próxima tela sugerida: agenda-servicos.html ou painel-manutencao.html