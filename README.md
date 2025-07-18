# Projeto: Condominium

## Sobre o projeto

Sistema web de gestão condominial com perfis de acesso diferenciados e funcionalidades específicas por usuário.

## Execução

Rodar localmente via servidor estático:
```bash
npm run dev
Estrutura de pastas
src/ → componentes, páginas, serviços

public/mock-screens/ → imagens mockadas (.png) e arquivos HTML de referência visual (.html)

Telas mockadas
As seguintes telas foram criadas como mockups para ajudar no layout e estruturação visual do sistema. Cada imagem .png é acompanhada de um arquivo .html correspondente, permitindo que o assistente Copilot compreenda e colabore com base no layout das telas, já que não consegue visualizar imagens diretamente.

Telas salvas em public/mock-screens/:
login.png + login.html

dashboard-admin.png + dashboard-admin.html

cadastro-condominio.png + cadastro-condominio.html

dashboard-sindico.png + dashboard-sindico.html

cadastro-apartamentos.png + cadastro-apartamentos.html

boletos-sindico.png + boletos-sindico.html

boletos-condomino.png + boletos-condomino.html

reservas-condomino-dia.png + reservas-condomino-dia.html

perfil-condomino.png + perfil-condomino.html

gerente-cadastro.png + gerente-cadastro.html

gerente-solicitacoes.png + gerente-solicitacoes.html

config-pagamento-condominio.png + config-pagamento-condominio.html

condominios-gerenciador.png + condominios-gerenciador.html ← referência visual

Estratégia de desenvolvimento
O desenvolvimento seguirá com foco inicial nas interfaces front-end. Todas as telas serão mockadas em .html para servir como referência visual durante o processo. Posteriormente, será iniciado o desenvolvimento do back-end com Spring Boot, integrando cada interface aos dados reais e funcionalidades API.

💡 Observação técnica: os arquivos .html são essenciais como referências visuais no lugar das imagens, permitindo que o Copilot compreenda os layouts e colabore durante o desenvolvimento mesmo sem acessar diretamente os arquivos de imagem.


---

Se quiser, posso já preparar o próximo mockup em HTML, ou te ajudar a montar uma estrutura base do Spring Boot para conectar tudo depois. Só chamar! 😄🚀
