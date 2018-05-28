# Previsão do Tempo

Solução proposta para o desafio front-end da 1STi. 
Live demo build: https://jamesdasilva.github.io/demo-build/weather-forecast/ 

## Getting Started

Para utilizar este projeto, é necessário clonar o repositório:
```
git clone https://github.com/jamesdasilva/desafio-frontend.git
```
Entrar no diretório do projeto:
```
cd desafio-frontend
```
Instalar as dependências: 
```
npm install
```
Iniciar o servidor:
```
npm run server
```
e acessar http://localhost:8080/public/.

### Inventário de componentes
Executar o comando:
```
npm run storybook
```
e acessar http://localhost:6006.

### Fazendo Build

Para fazer o build do produto, deve utilizar o comando:
```
npm run build
```
Modo escuta: 
```
npm run build:watch
```
Versão para produção (arquivo minificado):
```
npm run build:prod
```

## Authors

* **James Oliveira da Silva** - *Initial work* - [jamesodas](https://github.com/jamesodas)




# Desafio-Frontend

![alt tag](https://s3-us-west-1.amazonaws.com/1sti/1sti-transformacao.png)

## Bem-vindo

A 1STi é uma consultoria em tecnologias digitais emergentes que tem a missão de aproximar a tecnologia das reais necessidades sociais. Nós enxergamos a tecnologia como um presente à humanidade dado pela expressão de nosso próprio intelecto, realizando uma síntese entre arte, humanidade e ciência.

Nosso modelo de negócios combina projetos de valor compartilhado com consultoria nas tecnologias mais avançadas. Esse desafio é uma oportunidade para fazer parte do nosso time em uma jornada de aprendizado e desenvolvimento de interfaces web!

## Aprendizado e desenvolvimento

Você pode esperar um trabalho intenso em projetos HTML5/CSS3 com o framework React, do facebook, e boas práticas em Redux, um mecanismo de gerenciamento de estado de aplicações, além de diversos componentes javascript. 

O aprendizado se dá através de projetos reais, na construção de sites e aplicações que ajudem causas sociais de impacto. Conforme a evolução, serão feitas transições para projetos de consultoria em ambientes de negócio complexos. Temos o suporte de vídeo aulas em inglês para apoiar os estudos e montamos um plano individual em conjunto.

O trabalho é home office, com carga horária de 6 horas por dia e comunicação intensa via slack e sala de vídeo no appear. Espere uma equipe engajada e ideológica, mas muito mão na massa e com sólidos princípios de arquitetura de aplicações web.

O valor da bolsa de estágio por 01 ano é de R$ 1.000,00/mês.
Serão dois selecionados e apos o desafio técnico teremos conversas por skype, mas fique à vontade para já ir nos conhecendo no slack.

## Como participar

* Crie um novo fork e branch com seu nome-sobrenome e faça um pull request quando estiver pronto. Iremos fazer code review.
* Envie um email para ola@1sti.com.br para te adicionarmos ao time slack do desafio.

## O desafio

Vamos dar uma olhada na previsão do tempo? A meta é criarmos uma página simples, que consuma a API do Yahoo de previsão do tempo (https://developer.yahoo.com/weather/). O layout final deverá ficar o mais próximo possível da versão abaixo (sim, vamos ter a versão responsiva mobile e a versão desktop):

Web:

![alt tag](https://s3-us-west-1.amazonaws.com/1sti/desafio-desktop1.png)

![alt tag](https://s3-us-west-1.amazonaws.com/1sti/desafio-desktop2.png)

Mobile responsivo:

![alt tag](https://s3-us-west-1.amazonaws.com/1sti/desafio-mobile1.png)

![alt tag](https://s3-us-west-1.amazonaws.com/1sti/desafio-mobile2.png)

## Dicas

* Tudo bem, até pode usar jquery. Se você não quiser usar (bônus), uma sugestão: Axios para a comunicação com a API.
* HTML o mais semântico possível.
* Branches com readme e instruções de implantação serão bem vindos.
* Pré-processadores CSS como Stylus ou LESS também.
* Que tal utilizar BEM nos identificadores css? http://getbem.com/naming/ 
