## PARA COMEÇAMOS COM O TYPESCRIP EM NOSSO PROJETO
yarn add -D typescript

## PARA INICIAR UM SERVIDOR EM NODE USAMOS UMA LIB CHAMADA EXPRESS E PRECISAMOS TABEM BAIXAR AS TIPAGENS EXPRESS QUE NAO VEM POR PADRÃO
yarn add express --save / yarn add @types/expresss -D


## PARA RODAR UM ARQUIVO TS TYPESCRIPT
yarn tsc
yarn tsc src/server.ts PARA CONVERTE NOSSO ARQUIVO TYPESCRIP PARA JAVASCRIPT

## AGORA PRA CRIAR UM ARQUIVO DE CONFIGURAÇÃO TYPESCRIPT
yarn tsc --init

## CONFIGURAÇÇÃO IMPORTANTES NO NOSSO TSC
 (outDir) => cara responsalve por onde vai fica o codigo compilado de nossa aplicação configuramos assim   "outDir": "./dist",  para noo projeto criar
 uma pasta dist com o codigo traspilado para js


### CONFIGURANDO NOSSA APLICAÇÃO PARA RODA ARQUIVO TYPESCRIP EM TEMPO DE DESENVOLVIMENTO SEM VOCE PRECISA TA CONVERTENDO SEU TYPESCRIP 
### PARA O FAMOSO JAVASCRIPT
node-dev (1)
Node-dev é uma ferramenta de desenvolvimento para Node.js que reinicia automaticamente o processo do nó quando um arquivo é modificado
yarn add ts-node-dev --dev


flags
ts-node-dev --respawn --transpile-only => que nao quero verifica se meu codigo typeScript esta certo so quero converter para jasvscrip o propio  vscode nos fala 
//se o codigo esta de maneira correta e passomos qual arquivo=> "dev:server": "ts-node-dev --respawn --transpile-only src/server.ts"  
