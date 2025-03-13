# Fase de build (Node.js)
FROM node:18-alpine AS build

# Definimos o diretório de trabalho dentro do container
WORKDIR /app

# Copiamos os arquivos package.json e package-lock.json para o container
COPY package*.json ./

# Instalamos as dependências
RUN npm install

# Copiamos o restante dos arquivos do projeto para dentro do container
COPY . .

# Compilamos o projeto para produção
RUN npm run build

# Fase de produção (Nginx)
FROM nginx:alpine

# Copiamos os arquivos compilados da fase de build para a pasta de hospedagem do Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expomos a porta 80 para acesso ao frontend
EXPOSE 80

# Iniciamos o Nginx
CMD ["nginx", "-g", "daemon off;"]
