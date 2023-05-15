# Introdução ao Projeto:

Olá, aqui é o dev Nerdola que fez este projeto full stack, e ponha "full stack" nisso,
pois também sou o cliente que forneceu todos os desenhos e conteúdos presentes;

Este projeto tem como objetivo divulgar meus trabalhos artísticos e mais que isso aplicar 
meu conhecimento como desevolvedor web em um projeto que se seja mais próximo da realidade;

O site está em constante evolução visto que o seu ritmo de desenvolvimento está diretamente ligado 
aos meus estudos e o meu "amadurecimento" como programador. Comecei este projeto em agosto de 2022, quando decidi estudar desenvolvimento web. A primeria versão se tratava de arquivos Html separados, cada um sendo uma página da aplicação ( plenamente eu chamava isso de rotas ), com seus respectivos arquivos css. Na época não havia javaScript, o site era estático, cumpria apenas o propósito de mostrar os meus desenhos. 

Hoje, o projeto está bem próximo de como imaginei inicialmente, com muito estudo venho construindo e melhorando
constantemente cada trecho de códico, ainda está em produção, mas com um nível de entrega minimamente aceitável.

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)
# Tecnologias Usadas no front-end:
<ul>
    <li>React 18.2.0</li>
     <li>Styled Component 5.3.10</li>
      <li>Javascript</li>
</ul>

# Estrutura do Projeto

- `assets`: onde ficam os elementos 100% estáticos da aplicação, como elementos visuais.
- `components`: Aqui estão todos os componentes que são usados por toda aplicação como o header, footer,
Botões, títulos etc.
- `context` : espaço onde crio os contextosque englobaram toda ou parte da aplicação.
- `pages` : pages ou rotes representam as páginas que compõem o site, é o arquivo principal onde os 
demais componentes estarão. No caso estão as páginas: Home, ilustrações e sobre o dev, onde dedico uma pasta para cada uma. Essencialmente cada pasta é composta por um arquivos index.jsx e um arquivo de estilo, onde venho utilizando mais stylesComponents. Os demais componentes que só aparecerão e uma página específica, serão criados dentro da pasta da respectiva pasta.

# Funcionamento
Os dados presentes estão vindo de requisições de uma API que desenvolvi para este trabalho:

    https://apirepositoriocriativo.onrender.com

<h3>Funcionalidades</h3>

A princípio a aplicação permite que usuários façam o registro e login dentro do site para poder acessar funcionalidades privadas, porém <strong>não precisam estar logados para ver os desenhos</strong> 

- Curtir e descurtir qualquer desenho;
- Fazer comentários em qualquer desenho com uma quantidade de caracteres e de comentários ainda não definidos pra cada usuário, o mesmo também pode excluir os comentários feitos anteriormente por ele;
- Realizar o registro no site, sendo necessário apenas um nome de usuário, email e senha;
- Login com informações passadas no registro: nome de usuário e senha;

<h3>Contexto de Autenticação</h3>
No arquivo raiz do projeto estão a parte do roteamento da aplicação, onde é possível inserir contextos que
englobam todas as rotas provendo dados para todos os componentes.
Um deles é o authProvider que monitora os status de autenticação, se há um usuário logado ou não: 

```
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <React.StrictMode>
      <BrowserRouter>
      <GlobalStyles/>
      <AuthProvider>
          <Header/>
            <Routes>
              <Route path = "/" element = {<Home />} />
              <Route path = "/Ilustracoes" element = {
                <DrawProvider>
                  <Ilustracoes/>
                </DrawProvider>
              } />
              <Route path = "/Sobremim" element = {<Sobremim />} />
              <Route path = "/Login" element = {<LoginPage />} />
              <Route path = "/Cadastro" element = { <Cadastro/> } />
            </Routes>
            
          <Footer/>
        </AuthProvider>
      </BrowserRouter>
    </React.StrictMode>
);
```
O authProovider possui variáveis de estado sobre as permissões de usuário, na qual estão disponíveis em qualquer parte da aplicação.

Também possui algumas funcões como a de login, na qual dado um formulário preenchido pelo usuário, é feita uma requisição com esses dados para validação:

```
    fetch(`${_default.urlApi}/login`, {
            method: 'POST', 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userName: name,
                userPass: pass
            })
        })
```

Caso a requisição seja bem sucedida será retornado uma resposta em json com o seguinte formato: 
````
    {
        isSucess: true,
        message: <mensagem da requisição>,
        token: <hash complexa>
    }
````

Token: Quando o usuário é validado pela API, a mesma retorna um token JWT único para o usuário, assinado com uma secret única que somado aos dados do paylaod e header garantem um token único para cada usuário. Assim que os dados chegam, o token é salvo no localStorage até que o usuário decida sair da sua conta.

Com o uso do Hook <strong>useEffect</strong> uma função é executada toda vez que qualquer página da aplicação é carregada, esta função
faz uma busca no localStorage do navegador, procurando pela existência de um token:

````
    useEffect(()=>{
        const token = localStorage.getItem('token');
        const tokenP = JSON.parse(token)

        if(token){
            fetch( `${_default.urlApi}/auth`,{
                method: "GET",
                headers: {
                    'Authorization': 'Bearer ' + tokenP
                }
            }).then(res => res.json()).then(res => {
                setAuthenticated(true);
                setUserLog(res.authData);
            });
        }
        setLoading(false);
    }, [])
````

Caso exista um token, uma requisição é feita para validar este token como uma camada de segurança, afim de verficar se este token foi devidamente construído com a secret da Api. No retorno se bem sucedida o usuário se mantém logado no site.













                                              











