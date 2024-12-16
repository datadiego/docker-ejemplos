docker build -t apache-hello .
docker run -d -p 8080:80 apache-hello