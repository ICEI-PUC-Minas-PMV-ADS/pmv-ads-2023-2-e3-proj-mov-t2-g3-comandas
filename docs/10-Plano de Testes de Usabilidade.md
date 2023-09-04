# Plano de Testes de Usabilidade

O teste de usabilidade permite avaliar a qualidade da interface com o usuário final da aplicação interativa. O Plano de Testes de Software é gerado a partir da especificação do sistema e consiste em casos de testes que deverão ser executados quando a implementação estiver parcial ou totalmente pronta.

_Para mensurar os testes será aplicada a **Escala de Likert** que é um tipo de escala de resposta psicométrica usada habitualmente em questionários, e é a escala mais usada em pesquisas de opinião. Ao responderem a um questionário baseado nesta escala, os perguntados especificam seu nível de concordância com uma afirmação. Esta escala tem seu nome devido à publicação de um relatório explicando seu uso por Rensis Likert.[1]_

O formato típico de um item Likert é:

   1. Discordo totalmente
   2. Discordo parcialmente
   3. Indiferente
   4. Concordo parcialmente
   5. Concordo totalmente

<br>

Na aplicação dos testes de usabilidade será utilizada a versão à seguir análoga à escala de Likert:


| Nota      | Descrição                                                                                        |
|--------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|  5  |   Intuitivo e rápido.                                                              |
|  4  |   Intuitivo mas poderia ser mais rápido                                            |
|  3  |   Não-intuitivo mas a tarefa pode ser executada como esperado                      |
|  2  |   Não intuitivo e necessitou ajuda para finalizar a tarefa                         |
|  1  |   A tarefa não pode ser realizada                                                  | 
 
<br>
<br>

## Plano de Testes de Usabilidade - usuário: Cliente


<br>

 - Ler QR code e ser direcionado para a página de download do App / Ver o Menu do restaurante em que esta no momento

 - Criar cadastro de novo usuário Cliente

 - Login

 - Navegação pelo Menu do Restaurante (empresa) e visualizar detalhes dos produtos à disposição

 - Processo de compra: inserir itens desejados no processo de compra e finalizar o pedido de compra

 - Acessar a área de cliente e verificar o status do pedido de compra

 - Receber aviso que o pedido esta pronto, disponível para retirada ou na etapa em que será servido à mesa

 - Navegar pelo mapa e encontrar estabelecimentos próximos

 - Filtrar estabelecimentos por tipo de comida, tipo de produtos

 - Avaliar um estabelecimento e publicar um comentário

 - Favoritar um estabelecimento e verificar a lista de favoritos na área do cliente

 - Editar informações de cadastro de Cliente, alterar, salvar e verificar as alterações realizadas

 - Logout


 ![Foto representativa](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g3-comandas/blob/f3c78a28803b2f8cda159fb0bdb56a156992ca3c/docs/img/Forms_Clientes_V01.1_pg01.jpg)
  ![Foto representativa](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g3-comandas/blob/4dccaf560d59a2f66eeea4edb994ec74ef9239d2/docs/img/Forms_Clientes_V01.1_pg02.jpg)
   ![Foto representativa](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g3-comandas/blob/4dccaf560d59a2f66eeea4edb994ec74ef9239d2/docs/img/Forms_Clientes_V01.1_pg03.jpg)
    ![Foto representativa](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g3-comandas/blob/4dccaf560d59a2f66eeea4edb994ec74ef9239d2/docs/img/Forms_Clientes_V01.1_pg04.jpg)
     ![Foto representativa](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g3-comandas/blob/4dccaf560d59a2f66eeea4edb994ec74ef9239d2/docs/img/Forms_Clientes_V01.1_pg05.jpg)
<br>
Versão para Edição do Formulário do CTU-01 para usuários Clientes de Restaurantes:
<br>https://docs.google.com/forms/d/1NiKeW2AgWGGnz6WhSMv3O8QsAt7OSN0j32v0zYGL5fI/edit
<br>
Versão para Aplicar o Teste de Usabilidade CTU-01 em usuários Clientes de Restaurantes:
<br>https://docs.google.com/forms/d/e/1FAIpQLScTkUcdmD2Q8eejNsaLpBKhgPyUNLsFCegkV_8CqGTaeAt9MQ/viewform
<br>
<br>

## Plano de Testes de Usabilidade - usuário: Restaurante (empresa)

 - Criar cadastro de novo usuário Restaurante

 - Anexar QR code na planilha de cadastro do Restaurante

 - Definir horário de funcionamento do Restaurante

 - Login

 - Criar Menu e sub-Menus (bebidas, sobremesas, entradas, etc..)

 - Cadastrar produto com todas as características disponíveis na área de cadastro de produto vinculando a um dos sub-Menus

 - Definir e alterar quantidade máxima de um produto e/ou disponibilidade

 - Criar e Validar descontos em um produto ou na combinação entre produtos

 - Definir um limite máximo de pedidos por dia ou hora.

 - Visualiza a fila em ordem cronológica de pedidos realizados pelos Clientes
(Algoritmo: O App deve inserir na fila o pedido realizado com sucesso pelo Cliente criando uma chave (pk ou fk) referente ao horário; o restaurante deve ter interface para alterar o status do pedido de compra (Recebido, Em espera, Em preparo, Preparativos Finais, Pronto/Aguardando Serviço, Será Servido em breve, Finalizado (já foi servido); O pedido deve ser movido para a lista de estatística, saindo da fila.

 - Alterar todos os níveis de status de um pedido de compra e verificar as alterações na fila de pedidos de compra

 - Acessar a área exclusiva de administrador do Restaurante para visualizar informações de estatísticas sobre vendas, produtos mais populares, avaliações recebidas pelos usuários e a quantidade de usuários que favoritaram o Restaurante.

 - Editar informações de cadastro de Cliente, alterar, salvar e verificar as alterações realizadas

 - Verificar no mapa a marcação do Restaurante pelo endereço / posição georeferenciada

 - Navegar pelo mapa e encontrar estabelecimentos próximos e anexar em uma lista de favoritos para poder dar indicações de estabelecimentos próximos para os Clientes

 - Logout




<br>
<br>
<br>




**Referências:**
<br> [Wikipedia - https://pt.wikipedia.org/wiki/Escala_Likert#cite_note-1](https://pt.wikipedia.org/wiki/Escala_Likert)
<br> [1] Likert, Rensis (1932), «A Technique for the Measurement of Attitudes», Archives of Psychology, 140: 1-55
