# Para usar los Dockerfiles

1. Situate en la carpeta del Dockerfile que quieras usar

2. Ejecuta el siguiente comando para construir la imagen:

```bash
docker build -t <nombre_imagen> .
```

3. Ejecuta el siguiente comando para correr el contenedor:

```bash
docker run -d --rm -p x:y <nombre_imagen>
```

4. Tag de la imagen:

```bash
docker tag <nombre_imagen> <nombre_usuario>/<nombre_imagen>:<tag>
```

5. Subir la imagen a Docker Hub:

```bash
docker push <nombre_usuario>/<nombre_imagen>:<tag>
```