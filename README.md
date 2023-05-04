Olá, aqui é o dev Nerdola que fez este projeto full stack, e ponha "full stack" nisso,
pois também sou o cliente que froneceu todos os desenhos e o conteúdo(ksksk);


Este projeto é para divulgar meus trabalhos artísticos e mais que isso aplicar 
meu conhecimento como desevolvedor web em um projeto que se assimile ao da realidade;

irei introduzir as tomadas de decisões, estrutura do projeto e tecnologias que utilizei.


------*Serviços da API*----------------------------------------------------------------------------------------------------------
Esta aplicação está consumindo minha API que prover dados direto do meu cluster mongoDB: 
    *Dados completos das ilustrações;
    *Dados seletivos a partir de parâmetros na url para retornar desenhos de uma seção especfíca;

Além disso a API conta com sistema de cadastro e login, com camadas de autênticação e debug com middlewares entre as rotas;

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




