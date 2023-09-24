# Plano de Testes de Software

Os requisitos para realização dos testes de software são:
- Site publicado na Internet **ADICIONAR O LINK FINAL DO APP**
- Navegador da Internet - Chrome, Firefox ou Edge 
- Conectividade de Internet para acesso às plataformas (APISs) 


## Testes de Navegabilidade
Automatizado:

Tem por objetivo verificar se todos os links são navegáveis, estão corretos e levam o usuário a uma outra tela existente na aplicação.

Foram feitos testes automatizados e testes manuais, como seguem os resultados abaixo.

Os Testes automatizados foram realizados através de: https://datayze.com/site-navigability-analyzer

Resultado: 
**IMAGEM ILUSTRATIVA - DEVE SER ATUALIZADA PARA A IMAGEM DO RESULTADO DO TESTE QUANDO O APP ESTIVER DISPONÍVEL**
![Datayze](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g3-comandas/blob/2de36aa10a863c6d45574db658e1a67c5264f5fa/docs/img/Teste_Data_Analyzer_01.png)

Também foi feito teste de forma manual navegando pela aplicação somente para exemplificar o procedimento manual, visto que, os testes automatizados foram positivos e não apresentaram problemas de navegabilidade na aplicação.

## Testes de Navegabilidade
Manual:

### Tela Inicial / Homepage:
Na tela de Inicio existem os seguintes links para outras telas desta aplicação

**Exemplo de teste manual de navegabilidade - quando a aplicação estiver finalizada este modelo de teste também será renovado.**

- No cabeçalho, à esquerda, existem os links: "Logomarca" e “Inicio”, que ligam a página á homepage; “Restaurantes” que liga a aplicação à área de busca e resultados de busca de Restaurantes e Tipos de Comida cadastradas na aplicação; “Buscar” que liga a aplicação à área de busca e resultados de busca de conteúdos de Restaurantes disponíveis cadastrados na aplicação;
- No cabeçalho à direita, existe área para a foto do usuário logado com seu nome. Ao clicar sobre a foto é aberto menu de navegação com as opções: “Perfil” ou “Sair”. Ao clicar em sair é direcionado à tela inicial de login. Ao clicar em “Perfil” é direcionado à tela de perfil de usuário;
- Logo abaixo do cabeçalho existe a área central da aplicação com publicidade da empresa Comandas e informações sobre a área de atuaçao da empresa e informações da mesma com o intuito de esclarecer aos potenciais novos usuários os campos de atuação da aplicação.
- No rodapé existem informações de Copyright da aplicação e link para a Politica de Privacidade de dados da empresa Comandas, este link liga ao texto Legal expandido; 

Resultado: 
Todos os links levam à área ou tela esperada.


## Teste de Responsividade

Os testes de responsividade foram automatizados por Google: Teste de compatibilidade com dispositivos móveis
https://search.google.com/test/mobile-friendly?hl=pt

Link para os resultados: 
**ADICIONAR O LINK FINAL DO DO TESTE REALIZADO COM O APP**

**IMAGEM ILUSTRATIVA - DEVE SER ATUALIZADA PARA A IMAGEM DO RESULTADO DO TESTE QUANDO O APP ESTIVER DISPONÍVEL**
![Google](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e2-proj-int-t4-g1-greenpath/blob/855517a66609bf4424711da0607326660ae29d87/docs/img/Responsividade_Test.png)




## Teste de Funcionalidades

Os testes funcionais a serem realizados no aplicativo são descritos a seguir.

| Caso de Teste      | CT-001 -      Teste de Login de Usuarios (Cliente ou Restaurante)                                                                                                                                                 |
|--------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisitos Associados  | RF-003; RF-004 -  O app deve permitir o login de usuários (cliente) e/ou restaurantes (empresas).                                    |
| Objetivo do Teste      | Verificar se o login de Cliente e Restaurante ja cadastrados no Banco de Dados é realizado com sucesso.                                                                                   |
| Passos                 | 1) Acessar o app  <br>2) Realizar o Login se ja houver o cadastro existente.  <br>3) Verificar a validação das informações <br>4) Permitir o acesso e verificar dados no Banco de Dados.    |
| Critérios de Êxito     |    Acesso ao painel de Usuario <br> Comunicação correta entre o Banco de Dados e aplicação.  |
| Dados de entrada   |                                                                                                                                                                                                             | 
| Resultado Obtido   |                                                                                                                                                                                                           | 
 
| Caso de Teste      | CT-002 -      Registro de Novo Usuario - Restaurante (empresa)                                                                                                                                                 |
|--------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisitos Associados  | RF-001 -  O app deve permitir que o usuário Restaurante (empresa) crie o seu perfil; RF-015 - O sistema deve permitir que os restaurantes definam horários de funcionamento.                                    |
| Objetivo do Teste      | Verificar se todos os campos de entrada de dados do Perfíl de usuario Restaurante (empresa) estão funcionando corretamente e alimentando o Banco de Dados. |
| Passos                 | 1) Acessar o app  <br>2) Fazer o cadastro (Novo Usuario) e Cadastrar todas as demais informações do Perfíl de usuário Restaurante (empresa). O sistema deve permitir que os restaurantes definam horários de funcionamento. <br>3) Verificar a validação das informações <br>4) Permitir o acesso e verificar dados no Banco de Dados.    |
| Critérios de Êxito     |    Acesso ao painel de Perfil de Usuario Cliente e Restaurante (empresa) <br> Comunicação correta entre o Banco de Dados e aplicação.  |
| Dados de entrada   |                                                                                                                                                                                                             | 
| Resultado Obtido   |                                                                                                                                                                                                           |  


| Caso de Teste      | CT-003 -      Registro de Novo Usuario - Cliente                                    |
|--------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisitos Associados  |  RF-002 -  O app deve permitir que o usuário Cliente crie o seu perfil.  |
| Objetivo do Teste      | Verificar se todos os campos de entrada de dados do Perfíl de usuario Cliente estão funcionando corretamente e alimentando o Banco de Dados.   |
| Passos                 | 1) Acessar o app  <br>2) Fazer o cadastro (Novo Usuario) e Cadastrar todas as demais informações do Perfíl de usuário Cliente.  <br>3) Verificar a validação das informações <br>4) Permitir o acesso e verificar dados no Banco de Dados.    |
| Critérios de Êxito     |    Acesso ao painel de Perfil de Usuario - Empresa (Usuário Pessoa Jurídica) <br> Comunicação correta entre o Banco de Dados e aplicação.  |
| Dados de entrada   |                                                                                                                                                                                                             | 
| Resultado Obtido   |                                                                                                                                                                                                           | 
 
| Caso de Teste      | CT-004 – Teste de funcionalidade de Edição dos dados das contas de usuários Cliente               |
|--------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisitos Associados  | RF-005 - O sistema deve permitir a edição dos dados das contas de Clientes.  |
| Objetivo do Teste      | Verificar se o app permite que usuários Clientes possam acessar, editar e salvar as informações de perfíl (cadastro).                                                               |
| Passos                 | 1) Acessar o app. <br>2) Fazer login de usuário Cliente. <br>3) Acessar o botão "Editar Perfil".  <br>4) Preencher novos dados em todos os campos de perfíl de Cliente que são editáveis. <br>5) Acessar o botão "Salvar". <br>6) Verificar se a perfil do usuário Cliente foi atualizado com sucesso. <br> 7) Fazer logout de usuário Cliente. <br>8) Fazer login de usuário Cliente. <br>9) Verificar se a perfil do usuário Cliente foi atualizado com sucesso.                                            |
| Critérios de Êxito     |   Todos os campos editáveis do perfíl de um usuário Cliente devem poder ser editados e salvos.                                                       |                                      
| Dados de entrada   |                                                                                                                                                                                                             | 
| Resultado Obtido   |                                                                                             |                             


| Caso de Teste      | CT-005 – Teste de funcionalidade de Edição dos dados das contas de usuários Restaurantes (empresas)               |
|--------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisitos Associados  | RF-005 - O sistema deve permitir a edição dos dados das contas de Restaurantes (empresas). RF-015 - O sistema deve permitir que os restaurantes definam horários de funcionamento. & RF-020 - O sistema deve permitir que os restaurantes definam um limite máximo de pedidos por dia ou hora.|
| Objetivo do Teste      | Verificar se o app permite que usuários Restaurantes (empresas) possam acessar, editar e salvar as informações de perfíl (cadastro).                                                               |
| Passos                 | 1) Acessar o app. <br>2) Fazer login de usuário Restaurante (empresa). <br>3) Acessar o botão "Editar Perfil".  <br>4) Preencher novos dados em todos os campos de perfíl de Restaurante (empresa) que são editáveis. <br>5) Acessar o botão "Salvar". <br>6) Verificar se a perfil do usuário Restaurante (empresa) foi atualizado com sucesso. <br>7) Fazer logout de usuário Restaurante (empresa). <br>8) Fazer login de usuário Restaurante (empresa). <br>9) Verificar se a perfil do usuário Restaurante (empresa) foi atualizado com sucesso.                                            |
| Critérios de Êxito     |   Todos os campos editáveis do perfíl de um usuário Cliente devem poder ser editados e salvos.                                                       |                                      
| Dados de entrada   |                                                                                                                                                                                                             | 
| Resultado Obtido   |                                                                                             |                             


| Caso de Teste      | CT-006 – Teste de funcionalidade de Registro de Produtos - para Restaurantes (empresas)                  |
|--------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisitos Associados  | RF-006 - O sistema deve permitir que os restaurantes registrem seus produtos; RF-007 - O sistema deve permitir a edição de produtos; & RF-018 - O sistema deve permitir que os restaurantes ofereçam promoções ou descontos em produtos específicos.  |
| Objetivo do Teste      | Verificar se o app permite o registro de um produto, a alteração de características de um produto já cadastrado, a aplicação de preço e disponibilidade. Verificar se o produto é salvo no banco de dados e se as alterações no produto também são salvas. Verificar se é possível incluir ou retirar um produto cadastrado de uma promoção.                                                              |
| Passos                 | 1) Acessar o app. <br>2) Fazer login de uma empresa. <br>3) Acessar o campo "Publicar Produto".  <br>4) Preencher os campos: nome do produto, descrição, incluir imagem, valor, disponibilidade, seletor de promoção <br>5) Publicar o Produto. <br>6) Verificar se foi publicado com sucesso.                                              |
| Critérios de Êxito     |   O produto deve ser publicada com sucesso apresentando todos os campos preenchidos na área do Menu do restaurante no App.                                                       |                                      
| Dados de entrada   |                                                                                                                                                                                                             | 
| Resultado Obtido   |                                                                                             |                             


| Caso de Teste      | CT-007 – Teste de funcionalidade de Processo de Compra - para Usuários Clientes                  |
|--------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisitos Associados  | RF-008 - O sistema deve permitir que os usuários visualizem produtos dos restaurantes.; RF-009 - O sistema deve permitir que o usuário use a câmera para escanear QR-codes de restaurantes parceiros; RF-010 - O sistema deve permitir que usuário adicione produtos ao seu carrinho de compra; RF-011 - O sistema deve permitir que o usuário finalize um pedido com um ou mais produtos; RF-016 - O sistema deve permitir que os usuários avaliem e comentem sobre os restaurantes e produtos; RF-021 - O sistema deve permitir que os usuários marquem restaurantes como favoritos para acesso rápido. ;& RF-018 - O sistema deve permitir que os restaurantes ofereçam promoções ou descontos em produtos específicos.  |
| Objetivo do Teste      | Verificar se o app permite todo o processo de compra proposto pelo projeto. Desde o cliente escanear o QR code na mesa para acessar o app e menu do restaurante, visulizar os produtos, inserir o pedido e finalizar a compra. Podendo no final do processo favoritar o restaurante e avaliá-lo no app.                                                              |
| Passos                 | 1) Acessar o app através da leitura do QR code. <br>2) Fazer login de cliente. <br>3) Acessar um produto no Menu do restaurante e verificar todas as informações.  <br>4) Incluir o produto no pedido e finalizar o processo de compra. <br>5) Favoritar o restaurante e verificar a lista de favoritos no perfíl do usuário. <br>6) Escrever uma avaliação do restaurante e visualizar o perfíl do restaurante com a publicação.                                              |
| Critérios de Êxito     |   Todos os passos devem ser realizados com sucesso incluindo a verificação do pedido de compra no App Shop do restaurante.                                                       |                                      
| Dados de entrada   |                                                                                                                                                                                                             | 
| Resultado Obtido   |                                                                                             |                             


| Caso de Teste      | CT-008 – Teste de funcionalidade de Processo de Compra - para Usuários Clientes                  |
|--------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisitos Associados  | RF-012 - O sistema deve permitir que os comércios recebam os pedidos em ordem cronológica  |
| Objetivo do Teste      | Verificar se o app permite a geração de ID em ordem cronológica para os pedidos de compra realizados com sucesso.                                                              |
| Passos                 | 1) Acessar o app. <br>2) Fazer login de cliente. <br>3) Acessar um produto no Menu do restaurante.  <br>4) Incluir o produto no pedido e finalizar o processo de compra. <br>4) Verificar o pedido de compra no App Shop do restaurante. <br>5) Repetir este processo várias vezes e verificar a ordem dos pedidos no App shop do restaurante.                                            |
| Critérios de Êxito     |   Todos os passos devem ser realizados com sucesso incluindo a verificação do pedido de compra no App Shop do restaurante.                                                       |                                      
| Dados de entrada   |                                                                                                                                                                                                             | 
| Resultado Obtido   |                                                                                             |                            


| Caso de Teste      | CT-009 – Teste de funcionalidade de geolocalização   |
|--------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisitos Associados  |      RF-13 - O sistema deve identificar geograficamente o local onde o usuário está e sugerir o restaurante para o usuário. RF-019 - O sistema deve permitir a busca de restaurantes por nome, localização ou tipo de cozinha. RF-014 - O sistema deve sugerir comércios com base no usuário. |
| Objetivo do Teste      | Verificar se a aplicação está respondendo corretamente a mudanças na localização do usuário..                                                                                                                               |
| Passos                     | 1) Acessar o app.  <br>2) Fazer login de usuário Cliente. <br>3) Acessar a área de mapas / localização. <br>4) Verificar se aparecem restaurantes (empresas) proximos à localização atual. <br>5) Usar o filtro de resultados para tipo de comida e verificar os resultados apresentados no mapa. <br>6) Usar o filtro de resultados pela distância e verificar os resultados apresentados no mapa.                                                                                                    |
| Critérios de Êxito     |   Exibição das Restaurantes (empresas) mais proximas da localização desejada do usuario e de acordo com as filtragens selecionadas.                                                                                                                                                      |
| Dados de entrada   |                                                                                                                                                                                                             | 
| Resultado Obtido   |                                                                                                                                                                                                           | 




| Caso de Teste      | CT-010 -   Teste de Segurança                                       |
|--------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisitos Associados  |  RF-001; RF-002; RF-003; RF-004; RF-005; RF-006; RF-010; RF-011; RF-012; RF-015; RF-017; RF-018; RF-020; RF-022 - Criptografia: Garantir que as informações dos usuários, como senhas e dados pessoais, estejam criptografadas e protegidas de possíveis invasões.                                    |
| Objetivo do Teste      |  Verificar todas as brechas de possiveis ataques contra o site visando roubar informações dos usuarios.                                                                                  |
| Passos                     | 1) Analisar o codigo fonte <br> 2) Verificar qual tipo de criptografia esta sendo utilizado no site <br> 3) Realizar testes de penetração <br> 4) Corrigir todas as brechas encontradas   |
| Critérios de Êxito     |   Plena segurança dos dados pessoais dos usuarios.                  |
| Dados de entrada   |                                                                                                                                                                                                             | 
| Resultado Obtido   |                                                                                                  | 




