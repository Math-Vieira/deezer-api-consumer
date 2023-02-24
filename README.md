<h1>:blue_car: Deezer api consumer</h1> 

<div style="display: inline_block">
<img src="https://img.shields.io/badge/JavaScript-brightgreen"/>
<img src="https://img.shields.io/badge/Node.js-brightgreen"/>
<img src="https://img.shields.io/badge/Express-brightgreen"/>
</div>

<h2>:bookmark_tabs: Descrição</h2>
<p>Este projeto é uma API que utiliza a API do Deezer para oferecer funcionalidades de busca e chart (músicas mais atuais) aos usuários. A API permite que os usuários pesquisem suas músicas, álbuns e artistas favoritos usando a rota de busca e também oferece uma rota de chart que permite que os usuários acessem as músicas mais atuais.</p>

<h2>:grinning: Como utilizar</h2>

<h3>1. Clone o repositório:</h3>
<pre>
  <code>
    git clone https://github.com/Math-Vieira/deezer-api-consumer
  </code>
</pre>

<h3>2. Instale as dependências:</h3>
<pre>
  <code>
    npm install
  </code>
</pre>

<h3>3. Inicie o projeto: </h3>
<pre>
  <code>
    npm start
  </code>
</pre>

<p>Se tudo estiver funcionando corretamente, o projeto estará rodando na porta 8080 do seu computador. Agora é só realizar as requisições nas seguintes rotas:</p>

<h3>Rota de busca:</h3>
<pre>
  <code>
    // /search/:query/:type/:limit/:index
    // Exemplo de requisição abaixo
    fetch('http://localhost:8080/search/eminem/tracks/10/0')
    .then(r => r.json())
    .then(r => console.log(r))
    .catch(err => console.error(err))
  </code>
</pre>

<h3>Rota de chart (músicas do momento)</h3>
<pre>
  <code>
    // /chart/:type/:limit/:index
    // Exemplo de requisição abaixo
    fetch('http://localhost:8080/chart/tracks/10/0')
    .then(r => r.json())
    .then(r => console.log(r))
    .catch(err => console.error(err))
  </code>
</pre>

<p>Note que nas requisições acima, é necessário substituir os parâmetros :query, :type, :limit e :index pelos valores desejados.</p>

<h2>:hammer: Créditos</h2>
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Math-Vieira">
        <img src="https://cdn.discordapp.com/attachments/908101448112431115/964905499613077504/me.png" width="100px;" alt="Foto do Matheus Vieira"/><br>
        <sub>
          <b>Matheus Vieira</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

<h2>:dollar: Licença</h2>
<b>Este projeto está sob a licença MIT</b>
