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
| Passos                 | 1) Acessar o app. <br> 2) Fazer login de usuário Cliente. <br>3) Acessar o botão "Editar Perfil".  <br>4) Preencher novos dados em todos os campos de perfíl de Cliente que são editáveis. <br>5) Acessar o botão "Salvar". <br>6) Verificar se a perfil do usuário Cliente foi atualizado com sucesso. <br> 7) Fazer logout de usuário Cliente. <br> 8) Fazer login de usuário Cliente. <br>9) Verificar se a perfil do usuário Cliente foi atualizado com sucesso.                                            |
| Critérios de Êxito     |   Todos os campos editáveis do perfíl de um usuário Cliente devem poder ser editados e salvos.                                                       |                                      
| Dados de entrada   |                                                                                                                                                                                                             | 
| Resultado Obtido   |                                                                                             |                             


| Caso de Teste      | CT-005 – Teste de funcionalidade de Edição dos dados das contas de usuários Restaurantes (empresas)               |
|--------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisitos Associados  | RF-005 - O sistema deve permitir a edição dos dados das contas de Restaurantes (empresas). RF-015 - O sistema deve permitir que os restaurantes definam horários de funcionamento. |
| Objetivo do Teste      | Verificar se o app permite que usuários Restaurantes (empresas) possam acessar, editar e salvar as informações de perfíl (cadastro).                                                               |
| Passos                 | 1) Acessar o app. <br> 2) Fazer login de usuário Restaurante (empresa). <br>3) Acessar o botão "Editar Perfil".  <br>4) Preencher novos dados em todos os campos de perfíl de Restaurante (empresa) que são editáveis. <br>5) Acessar o botão "Salvar". <br>6) Verificar se a perfil do usuário Restaurante (empresa) foi atualizado com sucesso. <br> 7) Fazer logout de usuário Restaurante (empresa). <br> 8) Fazer login de usuário Restaurante (empresa). <br>9) Verificar se a perfil do usuário Restaurante (empresa) foi atualizado com sucesso.                                            |
| Critérios de Êxito     |   Todos os campos editáveis do perfíl de um usuário Cliente devem poder ser editados e salvos.                                                       |                                      
| Dados de entrada   |                                                                                                                                                                                                             | 
| Resultado Obtido   |                                                                                             |                             


| Caso de Teste      | CT-006 – Teste de funcionalidade de Registro de Produtos - para Restaurantes (empresas)                  |
|--------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisitos Associados  | RF-006 - O sistema deve permitir que os restaurantes registrem seus produtos; RF-007 - O sistema deve permitir a edição de produtos;   |
| Objetivo do Teste      | Verificar se o aplicativo está dando o retorno esperado na barra de busca considerando as palavras chaves dos usuários. Garantir que a candidatura do usuário seja fácil e intuitiva, permitindo que os usuários tenham pelo acesso ao status da sua candidatura                                                               |
| Passos                 | 1) Acessar o site por um navegador. <br> 2) Fazer login de uma empresa. <br>3) Acessar o campo "Publicar Vaga".  <br>4) Preencher os campos: Cargo na Empresa; Salário Oferecido; Carga Horária; Área; Selecionar a data de fechamento da vaga; descrição e local. <br>5) Publicar a Vaga. <br>6) Verificar se a vaga foi publicada com sucesso.                                              |
| Critérios de Êxito     |   A Vaga deve ser publicada com sucesso apresentando todos os campos preenchidos na área de vagas do Site.                                                       |                                      
| Dados de entrada   |                                                                                                                                                                                                             | 
| Resultado Obtido   |                                                                                             |                             













| Caso de Teste      | CT-05 – Teste de funcionalidade de Vagas - Candidato (Usuário Pessoa Física)                  |
|--------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisitos Associados  | RF-011 - O site deve exibir vagas de trabalho disponíveis & RF-004 - O site deve permitir que o usuário demonstre interesse por uma vaga de trabalho publicada e se candidate para a mesma.  |
| Objetivo do Teste      | Verificar se o aplicativo está dando o retorno esperado na barra de busca considerando as palavras chaves dos usuários. Garantir que a candidatura do usuário seja fácil e intuitiva, permitindo que os usuários tenham pelo acesso ao status da sua candidatura                                                               |
| Passos                 | 1) Acessar o site por um navegador. <br> 2) Fazer login de usuário Candidato. <br> 4) Acessar a área Vagas. <br> 5) Inserir palavras chaves na barra de pesquisa do site <br>6) Avaliar os resultados da pesquisa <br> 7) Acessar "Ver mais+" para acessar detalhes da vaga. <br> 7) Cadastrar-se na vaga. <br> 8) Verificar se a vaga em questão aparece na lista de "Meus Processos"do usuário logado.                           |
| Critérios de Êxito     |   Deve apresentar resposta rápidas com uma flexibilidade ampla no sistema de pesquisa usando as palavras chaves de cada usuário.                                                       |                                      
| Dados de entrada   |                                                                                                                                                                                                             | 
| Resultado Obtido   |                                                                                             |              


| Caso de Teste      | CT-06 – Teste de funcionalidade de geolocalização   |
|--------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisitos Associados  |      RF-011; RF-012; RF-13 - Precisão da localização: é importante verificar se a aplicação está fornecendo informações precisas sobre a localização      do usuário e das vagas mais proximas.  |
| Objetivo do Teste      | Verificar se a aplicação está respondendo corretamente a mudanças na localização do usuário..                                                                                                                               |
| Passos                     | 1) Acessar o site por um navegador  <br> 2) Entrar na barra de filtragem <br>  3) selecionar o estado e a cidade desejado                                                                                                    |
| Critérios de Êxito     |   Exibição das vagas mais proximas da localização desejada do usuario.                                                                                                                                                      |
| Dados de entrada   |                                                                                                                                                                                                             | 
| Resultado Obtido   |                                                                                                                                                                                                           | 




| Caso de Teste      | CT-07 -   Teste de Segurança                                       |
|--------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisitos Associados  |  RF-01; RF-02; RF-03; RF-06; RF-015 - Criptografia: Garantir que as informações dos usuários, como senhas e dados pessoais, estejam criptografadas e protegidas de possíveis invasões.                                    |
| Objetivo do Teste      |  Verificar todas as brechas de possiveis ataques contra o site visando roubar informações dos usuarios.                                                                                  |
| Passos                     | 1) Analisar o codigo fonte <br> 2) Verificar qual tipo de criptografia esta sendo utilizado no site <br> 3) Realizar testes de penetração <br> 4) Corrigir todas as brechas encontradas   |
| Critérios de Êxito     |   Plena segurança dos dados pessoais dos usuarios.                  |
| Dados de entrada   |                                                                                                                                                                                                             | 
| Resultado Obtido   |                                                                                                  | 




