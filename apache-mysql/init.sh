docker build -t apache-mysql .
docker run -d -p 8080:80 -p 3306:3306 apache-mysql