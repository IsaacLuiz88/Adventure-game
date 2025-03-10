FROM alpine
RUN apk update && apk add nginx
COPY nginx.conf /etc/nginx/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]