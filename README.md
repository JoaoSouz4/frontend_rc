# Introdução ao Projeto:

Olá, aqui é o dev Nerdola que fez este projeto full stack, e ponha "full stack" nisso,
pois também sou o cliente que forneceu todos os desenhos e conteúdos presentes;

Este projeto tem como objetivo divulgar meus trabalhos artísticos e mais que isso aplicar 
meu conhecimento como desevolvedor web em um projeto que se seja mais próximo da realidade;

O site está em constante evolução visto que o seu ritmo de desenvolvimento está diretamente ligado 
aos meus estudos e o meu "amadurecimento" como programador. Comecei este projeto em agosto de 2022, quando decidi estudar desenvolvimento web. A primeria versão se tratava de arquivos Html separados, cada um sendo uma página da aplicação ( plenamente eu chamava isso de rotas ), com seus respectivos arquivos css. Na época não havia javaScript, o site era estático, cumpria apenas o propósito de mostrar os meus desenhos. 

Hoje, o projeto está bem próximo de como imaginei inicialmente, com muito estudo venho construindo e melhorando
constantemente cada trecho de códico, ainda está em produção, mas com um nível de entrega minimamente aceitável.


# Tecnologias Usadas no front-end:
<ul>
    <li>React</li>
      <li>Javascript</li>
       <li>Styled Component</li>
</ul>

# Estrutura do Projeto
<ul>
    <li>React</li>
      <li>Javascript</li>
       <li>Styled Component</li>
</ul>






------*Serviços da API*----------------------------------------------------------------------------------------------------------

url: 
Esta aplicação está consumindo uma API dedicada para este projeto provendo dados direto das collections em meu cluster mongoDB, com ela é possível:

    *Obter dados completos de todas as ilustrações;
    *Dados seletivos a partir de parâmetros na url para retornar desenhos de uma seção específca;


Lista de rotas da API: 
    */getdraws* => irá retornar todos os desenhos
    */getdraws/:section* => Irá retornar todos os desenhos de uma determinada sessão, sendo elas:
        -The Last Of Us
        -One Piece
        -Hero
        -Manga
                                                    *É preciso inserir algum desses dados acima




*Como os dados da requisição são retornados*:
    {
        message: "<mensagem vinda do servidor>"
        isSucess: true || false 
    }

----*CONTEXT API*---------------------------------------------------------------------------------------------------------------
        Todas as rotas estão dentro de um contexto, que através de um *estado* está atualizando o status de autenticação,
        se há a existência de um usuário ou não. O sistema se comporta de maneira diferente quando um usuário está logado e
        devidamente autenticado, a cada login ele recebe um token jwt, na qual cada usuário tem o seu salvo no localStorage do navegador, então uma vez logado caso o token não expire um não haja a remoção do mesmo, o usuário permanece logado. 

        Funcionalidades privadas são disponibilizadas para usuários: 
            -Até 3 comentários em posts;
            -Excluir Comentários;
            -Curtir/Descurtir posts;

----*Styled-Components*----------------------------------------------------------------------------------------------------------
    Crio os componentes através desta lib, onde os que são constantemente utlizados ficam na pasta
    "Components". Caso haja necessidade de um componente em um rota específica, é colocado juntamente na pasta
    "pages", na respectiva pasta onde é necessário usar este componente. Além disso estes componentes são reutilizávels, dado
    que podemos inserir parâmetros nas props css;


----*React-Router-Dom*-----------------------------------------------------------------------------------------------------------
    Estou utilizando a versão 6, seguindo exatamente o padrão de utilização mostrada na documentação;
    Direcionando o usuário com o Navigate();








BreakPoints: 
    max-width(320px);




