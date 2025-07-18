# ROADMAP - Projeto Condominium

## Perfis de usuários

- Síndico
- Morador (condômino)
- Administrador global
- Gerente (admin condomínio específico)

## Funcionalidades por perfil

- Condômino: boletos, reservas, perfil
- Síndico: gestão de moradores, cobranças, comunicação interna
- Gerente: cadastro, acompanhamento de solicitações
- Admin global: painel consolidado de condomínios, cadastro de novos, gestão geral

## Metas futuras

- Módulo preditivo de inadimplência
- Agendamento de ações
- Integração com WhatsApp e notificações internas
- Painel comparativo entre condomínios
- Cadastro guiado de empreendimentos
- Painel financeiro centralizado

## Telas mockadas futuras

Todas as telas mockadas serão salvas em `public/mock-screens/` com seus respectivos arquivos `.png` e `.html`.  
O arquivo `.html` de cada tela serve como **referência visual durante o desenvolvimento** e será utilizado pelo assistente Copilot para compreender o layout, já que ele não tem acesso direto às imagens.

📎 Exemplo de estrutura:
- `dashboard-admin.png` + `dashboard-admin.html`
- `perfil-condomino.png` + `perfil-condomino.html`
- `condominios-gerenciador.png` + `condominios-gerenciador.html`

## Estratégia de desenvolvimento

O projeto será conduzido com foco inicial na implementação das interfaces front-end.  
Cada tela será estruturada visualmente em `.html` antes do início da lógica funcional. Após finalização das interfaces, será iniciada a construção do back-end usando **Spring Boot**, com APIs integradas aos dados reais do sistema.
