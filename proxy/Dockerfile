FROM alpine
RUN apk update && apk add nginx
COPY nginx.conf /etc/nginx/
CMD ["nginx", "-g", "daemon off;"]