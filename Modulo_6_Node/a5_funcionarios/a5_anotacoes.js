/*
    npm init : Cria um indice para você definir como será o seu arquivo.json
    npm init - y: Cria o arquivo sem precisar peencher.

    Quando rodar o comando 'npm i' pra instalar uma dependência, ele cria uma pasta node_modules dentro
    da pasta.

    'npm i -- save' além de instalar a dependência, vai salvar dentro do arquivo .json.

     "dependencies": {
    "axios": "^0.23.0"
    }

    major.minor.fixed
      0  .  23 .  0

    O '^' significa que a versão pode ser atualizada mas não poderá ir pra versão anterior.
    Já o '~' só permite pegar versões com o fixed diferente.
    Se não tiver nenhum símbolo na frente, signifca que arquela versão será a única a ser usada.

    npm i --save-dev axios@0.23.0 -E (Instala essa versão exata)

    -dev (só é necessária em desenvolvimento)

    Quando criar o arquivo package.json também irá criar o arquivo package-lock.json

    package-lock.json ajuda a definir qual foi a versão que você baixou quando desenvolveu.

    o axios é um client http, ele faz requisições para obter informações de algo que está remoto.

    'start' e 'test' são comandos padrões do node, por isso podem ser acionados apenas com o comando
    'npm start' ou 'npm test. Para comandos criados como 'dev' é necessário executar como 'npm run dev'
*/

// Código interligado (Aula 5 - notes 1)