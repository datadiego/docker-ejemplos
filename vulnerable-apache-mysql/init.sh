docker compose down
docker volume rm $(docker volume ls -q)
docker rm -f $(docker ps -a -q)
docker rmi -f $(docker images -q)
docker compose up -d