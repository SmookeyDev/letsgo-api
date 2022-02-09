<p align="center">
  <a href="https://www.denox.com.br/" rel="noopener">
 <svg xmlns="http://www.w3.org/2000/svg" width="320" height="100" viewBox="0 0 73 35"><g><g><g><path d="M27.021 17.345c0 .506-.183 1.7-.413 2.481h-6.981c.69-3.858 2.021-5.558 4.363-5.558 1.928 0 3.031 1.103 3.031 3.077zm5.007 6.523zm0 0c.597-2.067.964-4.226.964-6.016 0-4.961-2.663-8.222-8.543-8.222-6.016 0-10.425 3.49-11.895 12.217a20.86 20.86 0 0 0-.276 3.26c0 6.11 3.307 9.417 9.828 9.417 2.16 0 5.88-.46 8.13-1.425 0-1.929-.183-4.225-.459-5.924-1.607.826-4.455 1.515-6.568 1.515-3.399 0-4.547-.918-4.547-3.307 0-.321.092-1.01.23-1.515z"></path></g><g><path d="M46.885 15.509h-2.73l-1.883 10.792c-.045.276-.045.507-.045.736 0 1.377.826 1.791 2.618 1.791 1.147 0 2.755-.367 3.582-.735.046.643.092 1.379.092 2.159 0 1.148-.092 2.342-.184 3.307-1.424.643-4.133.965-5.466.965-4.776 0-6.98-2.343-6.98-6.293 0-.735.092-1.47.229-2.296l1.837-10.426h-2.71l.965-5.42h2.71l.873-4.96c2.02-.552 4.5-.919 6.384-1.01l-1.057 5.97h4.584c0 1.688-1.13 4.173-2.82 5.42z"></path></g><g><path d="M71.867 15.876c-1.608-.505-4.363-.918-6.338-.918-1.791 0-2.71.551-2.71 2.112 0 3.032 8.864 1.792 8.864 9.048 0 5.099-3.858 8.406-10.38 8.406-2.71 0-5.603-.69-7.394-1.746.368-1.929 1.194-4.317 1.883-5.557 1.7 1.01 4.547 1.699 6.843 1.699 1.791 0 2.571-.689 2.571-2.112 0-2.986-8.909-1.654-8.909-8.82 0-4.546 3.537-8.358 10.702-8.358 1.607 0 4.317.23 6.108.735-.23 1.515-.69 3.766-1.24 5.51z"></path></g><g><path id="virgula" fill="#dc313c" d="M57.843 7.419c0 5.4-4.987 8.692-5.76 9.103-.566.308-1.08.514-1.44.514-.308 0-.513-.155-.513-.412 0-.258.257-.565.513-.771.72-.515 2.726-3.189 2.726-5.71 0-.668-.36-1.286-.771-1.49-.463-.258-2.624-.722-2.624-3.448 0-1.593 1.286-2.982 3.087-2.982 2.366 0 4.782 1.8 4.782 5.196z" style="--darkreader-inline-fill: #df434d;" data-darkreader-inline-fill=""></path></g><g><path d="M6.208 1.9L.52 34.064H6.72L12.641.436z"></path></g></g></g></svg></a>
</p>

<div align="center">

[![Status](https://img.shields.io/badge/status-ativo-success.svg)]()
[![LinkedIn](https://img.shields.io/badge/platform-linkedin-blue.svg)](https://www.linkedin.com/in/icaroparanhos/)
</div>

---

## 📝 Tabela de conteúdos

- [Sobre](#about)
- [Requisitos para rodar o projeto](#developmentrequirements)
- [Instalação](#installation)
- [Rotas da API](#routesapi)
- [Observações](#comments)

## 🧐 Sobre <a name="about"></a>

Projeto desenvolvido como parte de um processo seletivo da empresa [Let's](https://www.letscomunica.com.br/). Nesse projeto foi desenvolvido uma API usando Express, onde tem a função de criar um JWT com o endpoint [/api/createtoken]() e adicionar um contato com o endpoint [/api/insertcontact]().

## 📝 Requisitos para rodar o projeto <a name="developmentrequirements"></a>

- Node.Js
- Yarn
- Docker
- Docker Compose

## 💭 Instalação <a name="installation"></a>

1.Instale o Docker seguindo o tutorial a seguir:
https://docs.docker.com/engine/install/ubuntu/

2.Instale o Docker Compose seguindo o tutorial a seguir: https://docs.docker.com/compose/install/

3.Clone este repositório usando o seguinte comando:
```terminal
$ git clone git@github.com:smookeydev/letsgo-api.git
```
4.Acesse a pasta do projeto em seu terminal:
```terminal
$ cd letsgo-api
```
5.Rode o comando de instalação das bibliotecas utilizada no projeto.
```terminal
$ yarn
```

6.Copie o arquivo de configuração de exemplo para um arquivo de configuração real:
```terminal
$ cp .env.example .env
```
7.Troque os valores existentes no arquivo de configuração, os valores são:
  * **SECRET_KEY**: Chave secreta a ser utilizada o JWT. (Obrigátorio)
  * **DB_HOST**: Endereço IPV4 a ser utilizado para conexão do banco de dados. (Opcional)
  * **DB_PORT**: Porta que será usada para o banco de dados. (Opcional)
  * **DB_NAME**: Nome do banco de dados. (Opcional)
  * **DB_USER**: Usuário do banco de dados. (Obrigatório)
  * **DB_PASS**: Senha do usuário do banco de dados. (Obrigatório)

8.Inicie o banco de dados rodando o seguinte comando:
```terminal
$ make up
```
9.Inicie a API rodando o seguinte comando:
```terminal
$ yarn dev
```

## 📲 Rotas da API <a name="routesapi"></a>

| Método  | Rota | Body | Headers |
| ------------- | ------------- | ------------- | ------------- |
| POST | /api/createtoken  |  { "username": "", "commerce": "" }  |
| POST | /api/insertcontact | { "name": "", "telephone": "" } | { "Authorization": "" }  |

---

## 🔰 Observações <a name="comments"></a>

- Nesse repositorio existe um arquivo chamado letsgo-api.json, que é um documento exportado do [Insomnia](https://insomnia.rest/download) com as rotas da API e dados de exemplo.