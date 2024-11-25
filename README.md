# Atividade 7 - Praticando conceitos essenciais do ReactJS 

Este repositório faz parte das atividades do curso Dev Full Stack da MaisPraTi, neste projeto é possível colocar em prática as estruturas abordadas no módulo 04 do curso. 

## Estrutura do Projeto

A estrutura do projeto é desenvolvida em uma estrutura de pastas clara. Incluindo uma pasta components para armazenar os componentes criados em cada atividade, facilitando a navegação e a leitura do código.
Foi criado uma página principal como menu para acessar cada atividade individualmente. Dessa forma, cada atividade pode ser testada separadamente sem interferir nas demais.

## Estrutura de Pastas

```plaintext
atividade07/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ComponentesNavegaveis.jsx
│   │   ├── ContadorSimples.jsx
│   │   ├── FiltroDeLista.jsx
│   │   ├── FormularioDeRegistro.jsx
│   │   ├── FormularioDeRegistroMensagem.jsx
│   │   ├── GaleriaDeImagens.jsx
│   │   ├── RequisicaoDeDadosSimples.jsx
│   │   ├── Temporizador.jsx
│   │   ├── Timer.jsx
│   │   ├── ToDoList.jsx
│   │   └── TrocaCorDeFundo.js
│   ├── styles/
│   │   ├── App.css
│   │   ├── ComponentesNavegaveis.css
│   │   ├── ContadorSimples.css
│   │   ├── FiltroDeLista.css
│   │   ├── FormularioDeRegistro.css
│   │   ├── GaleriaDeImagens.css
│   │   ├── GaleriaDeImagensGallery.css
│   │   ├── index.css
│   │   ├── RequisicaoDeDadosSimples.css
│   │   ├── Temporizador.css
│   │   ├── Timer.css
│   │   ├── ToDoList.css
│   │   └── TrocaCorDeFundo.css
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── LICENSE.txt
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## Atividades desenvolvidas

  **1 - Contador Simples**: Componente de contador que exibe um número na tela e possui dois botões: “Incrementar” e “Decrementar”. Utilizando o hook useState para manter o valor do contador.
     Adicionado uma condição para não permitir que o valor seja menor que zero.
     
 ![image](https://github.com/user-attachments/assets/5f93c07d-ab32-4ba5-be35-e7e270509e56)
   
* Estado do Contador:
  useState(0) inicializa o estado do contador com o valor 0.
  count é a variável de estado que armazena o valor atual do contador.
  setCount é a função usada para atualizar o valor do contador.

* Função Incrementar:
   increment atualiza o estado para count + 1 quando o botão Incrementar é clicado.
  
* Função Decrementar:
   decrement diminui o valor do estado em 1 apenas se count for maior que 0, garantindo que o valor não fique negativo.
  
* Renderização:
   A função de retorno do componente exibe o valor do contador e dois botões: um para incrementar e outro para decrementar o valor.
  

 **2 -  Alteração de Cor de Fundo**: Componente onde o fundo da página muda de cor cada vez que o usuário clica em um botão.
      Usado useState para armazenar a cor atual e useEffect para atualizar o estilo do fundo com cada mudança, gerando cores aleatórias sempre que o botão for clicado.

  ![image](https://github.com/user-attachments/assets/b86e4bd2-6a53-4dab-aed4-fb77f02ff5b7)
    
 * Estado da Cor:
  Utilizamos useState para criar uma variável de estado color com valor inicial #ffffff (branco).

* Função para Gerar Cores Aleatórias:
  generateRandomColor cria uma nova cor hexadecimal aleatória toda vez que é chamada.

* Função de Atualização de Cor:
changeColor usa a função setColor para atualizar o estado color com uma nova cor gerada pela função generateRandomColor.

* Hook useEffect:
useEffect é usado para aplicar a cor atual do estado color como o estilo de fundo do body sempre que color for atualizado.

* Renderização:
A função de retorno do componente exibe um título e um botão. Ao clicar no botão, a função changeColor é acionada, atualizando a cor de fundo.


 
 **3 - Lista de Tarefas**: Aplicativo de lista de tarefas (to-do list) onde o usuário pode adicionar e remover tarefas. Utilizando useState para armazenar a lista de tarefas e renderizando cada tarefa como um item de lista. Permitindo que o usuário marque as tarefas como concluídas e filtre para ver apenas as tarefas pendentes.
 

 ![image](https://github.com/user-attachments/assets/c3b8ed1c-3ed2-4a22-9721-912ad99c7beb)


* tasks: Lista de tarefas, inicialmente vazia.

* newTask: Texto da nova tarefa a ser adicionada.

* showPending: Estado que indica se estamos exibindo apenas tarefas pendentes.

* addTask: Adiciona uma nova tarefa à lista.

* removeTask: Remove uma tarefa da lista pelo índice.

* toggleCompleteTask: Marca ou desmarca uma tarefa como concluída.

* toggleShowPending: Alterna a visualização entre todas as tarefas e apenas as pendentes.

* Renderização:
Renderiza um campo de entrada para novas tarefas e botões para adicionar e alternar entre exibição.
Renderiza uma lista de tarefas filtradas com botões para marcar como concluídas e remover tarefas.


**4 - Temporizador com useEffect**: Temporizador que conta o tempo em segundos e exibe na tela, com useEffect para iniciar o temporizador ao carregar o componente e useState para atualizar o tempo. Com botões para pausar e reiniciar o temporizador.


![image](https://github.com/user-attachments/assets/5a83bcac-5dbf-4039-9e36-7c113a21e262)


* time: Armazena o tempo em segundos, inicializado como 0.

* isRunning: Indica se o temporizador está em execução, inicializado como falso.

* Hook useEffect:
Inicia o temporizador usando setInterval se isRunning for verdadeiro. Pausa o temporizador usando clearInterval se isRunning for falso e time não for 0. Limpa o temporizador quando o componente é desmontado ou isRunning ou time mudam.

* toggleTimer: Inicia ou pausa o temporizador alternando o estado de isRunning.

* resetTimer: Pausa e reseta o tempo para 0.

* Renderização:
Exibe o tempo atual em segundos e dois botões: um para iniciar/pausar e outro para reiniciar o temporizador.



**5 - Filtro de Lista**: Componente que renderiza uma lista de nomes. Possuíndo um campo de entrada para filtrar os nomes com base no texto digitado. Utilizando useState para controlar o valor do filtro e map para exibir apenas os itens que correspondem ao filtro, ignorando as letras maiúsculas e minúsculas ao filtrar.

![image](https://github.com/user-attachments/assets/16de691d-dee7-4de4-8a77-5a5ac096c3ce)

* names: Lista de nomes, inicializada com alguns exemplos.

* filter: Valor do filtro, inicializado como string vazia.

* handleFilterChange: Atualiza o valor do filtro quando o usuário digita no campo de entrada.

* filteredNames: Filtra os nomes da lista names ignorando maiúsculas e minúsculas usando toLowerCase.

* Renderização:
Exibe um campo de entrada para o filtro e uma lista dos nomes filtrados


**6 - Formulário de Registro Simples**: Formulário com campos de nome, e-mail e senha que, ao enviar o formulário, exibe uma mensagem de boas-vindas usando as informações digitadas. Com useState para armazenar os valores dos campos e exibe a mensagem em um novo componente de boas-vindas. Contendo validações para garantir que todos os campos estejam preenchidos antes de enviar.

![image](https://github.com/user-attachments/assets/e51072cc-0550-49a7-8088-046713984c3a)

![image](https://github.com/user-attachments/assets/dc36182c-75d7-4fd6-9771-714ba7fa6dea)


* name, email, password: Armazena os valores dos campos do formulário.

* submitted: Indica se o formulário foi enviado.

* error: Armazena mensagens de erro de validação.

* handleSubmit: Lida com o envio do formulário, previne o comportamento padrão e verifica se todos os campos estão preenchidos. Se todos os campos estiverem preenchidos, marca o formulário como enviado (submitted), caso contrário, exibe uma mensagem de erro.

* Renderização:
Renderiza o formulário com campos de entrada para nome, e-mail e senha. Se o formulário for enviado com sucesso, renderiza o componente de mensagem de boas-vindas com o nome do usuário.


**7 - Aplicação de Requisição de Dados Simples**: Componente que exibe uma lista de posts obtidos de uma API pública (JSONPlaceholder). UseEffect faz a requisição ao carregar o componente e exibe os posts em uma lista. Com um botão que recarrega os dados e um indicador de carregamento enquanto a requisição está sendo feita.

![image](https://github.com/user-attachments/assets/348cef8d-a7cd-4ffa-981d-a5e9b5b97a2b)

* posts: Armazena a lista de posts, inicializado como uma matriz vazia.

* loading: Indica se os dados estão sendo carregados, inicializado como falso.

* fetchPosts: Função assíncrona que busca os posts da API JSONPlaceholder, atualiza o estado dos posts e do estado de carregamento.

* useEffect: Faz a requisição à API ao carregar o componente chamando fetchPosts.

* Renderização:
Exibe um botão para recarregar os dados, que é desativado enquanto os dados estão sendo carregados.
Exibe uma mensagem de carregamento enquanto os dados estão sendo buscados.
Renderiza a lista de posts quando os dados são carregados.


**8 - Galeria de Imagens com Visualização Detalhada**: Uma galeria simples com uma lista de imagens que, quando o usuário clica em uma imagem, exibe em uma visualização ampliada em um modal. Utilizando useState para armazenar a imagem selecionada e renderiza o modal condicionalmente. Com um botão de “Fechar” no modal e uma funcionalidade de navegação entre as imagens.

![image](https://github.com/user-attachments/assets/a04fa3a7-f023-4ddc-9d27-c87173161a13)

![image](https://github.com/user-attachments/assets/bbe26117-7bc6-4f92-9fcd-070a5aa47137)


* selectedImage: Armazena a URL da imagem selecionada.

* currentIndex: Armazena o índice da imagem selecionada na lista.

* openModal: Abre o modal e define a imagem selecionada.

* closeModal: Fecha o modal e reseta a imagem selecionada.

* nextImage: Navega para a próxima imagem na lista.

* prevImage: Navega para a imagem anterior na lista.

* Renderização:
Exibe a galeria de imagens com todas as imagens da lista.
Condicionalmente renderiza um modal com a imagem ampliada, incluindo botões para fechar o modal e navegar entre as imagens.


**9 - Timer com Intervalo e Alerta**: Timer onde o usuário define a quantidade de segundos para a contagem regressiva e, ao iniciar, o tempo é exibido e diminui a cada segundo. UseState armazena o tempo e useEffect inicia a contagem regressiva ao iniciar o timer. Ao chegar a zero, exibe um alerta informando que o tempo acabou, com botões para pausar e reiniciar o timer.

![image](https://github.com/user-attachments/assets/2e590ab8-ad0b-43ef-a50f-bee7ee1862de)


* timerRef é usado para armazenar a referência do intervalo do temporizador. Isso evita problemas de escopo com a limpeza do intervalo.

* startTimer agora define isRunning para verdadeiro apenas se o timer não estiver em execução e inputTime for maior que 0.

* pauseTimer e resetTimer continuam a pausar e reiniciar o temporizador corretamente.

* Hook useEffect:
Inicia o intervalo de contagem regressiva apenas se isRunning for verdadeiro e time for maior que 0.
Limpa o intervalo e exibe um alerta quando o tempo chega a zero.
Limpa o intervalo quando o componente é desmontado ou quando o intervalo é atualizado.

* Iniciar: Desativado enquanto o temporizador estiver em execução ou se inputTime for menor ou igual a 0.

* Pausar: Desativado se o temporizador não estiver em execução.

* Reiniciar: Desativado se o temporizador não estiver em execução e o tempo atual for igual ao inputTime.

**10 - Componentes com Tabs Navegáveis**: Interface de “tabs” (abas) onde cada aba exibe um conteúdo diferente ao ser clicada. Com useState para controlar qual aba está ativa e renderizando o conteúdo de acordo com a aba selecionada, utilizando um efeito visual que destaque a aba ativa.

![image](https://github.com/user-attachments/assets/bd495d06-8f22-4c3d-9a2a-49977324b541)

![image](https://github.com/user-attachments/assets/75f609e5-b561-4cdb-b504-d393761b1d0c)


* activeTab: Armazena a aba atualmente ativa, inicializada como 'sobre'.

* setActiveTab: Define a aba ativa quando um botão de aba é clicado.

* renderContent: Função que retorna o conteúdo apropriado com base na aba ativa.

* Renderização:
Renderiza botões de abas com classes dinâmicas que adicionam uma classe active à aba atualmente ativa.
Renderiza o conteúdo baseado na aba ativa.

* Estilo CSS:
As abas têm um estilo básico com uma transição suave na borda inferior para o efeito hover.
A aba ativa tem uma borda inferior colorida e uma cor de fundo diferente para destaque.


## Tecnologias Utilizadas

- HTML: Estrutura básica da interface.

- CSS: Utilizado para estilizar a aplicação.

- React JS: Lógica para controlar os inputs, modais e demais componentes da aplicação.


## Como Visualizar o Projeto Localmente

1.Clone este repositório:

```bash
https://github.com/Marcelors28/atividade_07.git
```
2.Navegue até o diretório do projeto::

```bash
cd atividade_07
```

2.Instale as dependências:

```bash
npm install
```

3.Inície o servidor:

```bash
npm run dev
```

4. Execute o projeto em:

```bash
http://localhost:5173/
```


## APIs Utilizadas
-  JSONPlaceholder

## Licença
Este projeto é licenciado sob a MIT License.

