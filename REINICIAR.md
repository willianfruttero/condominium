# 🔁 REINICIAR.md

## 📍 Ponto exato onde o projeto foi pausado

- ✅ Tela `meus-boletos.html` concluída e mockada:
  - Filtros: mês, ano, status, tipo de cobrança
  - Coluna “Tipo” adicionada à tabela: Mensalidade, Multa, Extraordinária
  - Identidade do condômino logado exibida: nome e apartamento
  - Responsividade aplicada para mobile
- ✅ HTML salvo em: `public/mock-screens/meus-boletos.html`
- ✅ Próxima tela sugerida: `prestadores-servico.html` (perfil GERENTE)

---

## 🤝 Dinâmica de desenvolvimento com Copilot

Este projeto está sendo desenvolvido em colaboração com o assistente **Microsoft Copilot**, por meio de uma abordagem visual e incremental:

### 🧠 Como interagimos:

- O desenvolvedor (Willian) solicita a próxima tela ou funcionalidade
- O Copilot gera o HTML completo estilizado com:
  - Estrutura visual semântica
  - Layout limpo e moderno
  - Responsividade aplicada
  - Comportamentos visuais simulados (via CSS/JS simples)
- O HTML é testado via **Live Server**
- Após aprovação, o arquivo é salvo no repositório em `public/mock-screens`
- O processo se repete com a próxima interface até completar o fluxo por perfil

🛑 Importante:  
Como Copilot **não visualiza imagens** do repositório `.png`, os arquivos `.html` são usados como **base oficial de referência visual** no projeto.

---

## 📐 Metodologia técnica e visual adotada

### Estrutura dos mockups:

- Cada tela tem:
  - `tela.html` → mock visual navegável
  - `tela.png` → imagem complementar (opcional)
- Pastas utilizadas:
  - Mockups salvos em: `public/mock-screens/`
  - Documentação: raiz do projeto

### Documentos guia:

- `README.md` → descreve estrutura, execução e avisos técnicos
- `ROADMAP.md` → lista funcionalidades por perfil e metas visuais
- `REINICIAR.md` → registra andamento do projeto e ponto de retomada

---

## 📝 Telas mockadas até agora

| Tela                       | Arquivo HTML          |
|----------------------------|------------------------|
| login                      | `login.html`           |
| dashboard-admin            | `dashboard-admin.html` |
| dashboard-sindico          | `dashboard-sindico.html` |
| cadastro-condominio        | `cadastro-condominio.html` |
| cadastro-apartamentos      | `cadastro-apartamentos.html` |
| boletos-sindico            | `boletos-sindico.html` |
| boletos-condomino          | `boletos-condomino.html` |
| reservas-condomino-dia     | `reservas-condomino-dia.html` |
| perfil-condomino           | `perfil-condomino.html` |
| gerente-cadastro           | `gerente-cadastro.html` |
| gerente-solicitacoes       | `gerente-solicitacoes.html` |
| config-pagamento-condominio| `config-pagamento-condominio.html` |
| condominios-gerenciador    | `condominios-gerenciador.html` |
| relatorios-financeiros     | `relatorios-financeiros.html` |
| ocorrencias                | `ocorrencias.html` |
| eventos-condominio         | `eventos-condominio.html` |
| meus-boletos               | `meus-boletos.html` ✅ ← última tela gerada

---

## 🛠️ Para reiniciar o projeto:

1. Abrir este `REINICIAR.md`
2. Validar a última tela `meus-boletos.html`
3. Retomar o fluxo pelo perfil gerente com `prestadores-servico.html`  
   Ou continuar solicitando mockups ao Copilot seguindo o `ROADMAP.md`

---

📎 Repositório oficial:  
[https://github.com/willianfruttero/condominium](https://github.com/willianfruttero/condominium)
