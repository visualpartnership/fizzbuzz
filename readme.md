# Linter

1. Instalar dependencias:

> npm install eslint --save-dev  
> npm install dotenv --save  
> npm install jest --save-dev  
> npm install eslint --save-dev  
> npm install express --save  
> npm install node-telegram-bot-api --save  

2. Modificar package.json, agregar en scripts: 

> "test": "node ./node_modules/.bin/jest",  
> "linter": "node ./node_modules/eslint/bin/eslint.js",  
> "linter-fix": "node ./node_modules/eslint/bin/eslint.js . --fix",  
> "server": "node ./lib/server.js",  
> "bot": "node ./lib/bot.js"  

3. Crear configuración en archivo .eslintrc (si se versiona)

> npm init @eslint/config

Rules: https://eslint.org/docs/rules/
Airbnb Code Style: https://github.com/airbnb/javascript
