# Usar una imagen base de Ubuntu
FROM ubuntu:latest

# Actualizar el sistema e instalar OpenSSH y sudo
RUN apt-get update && apt-get install -y openssh-server sudo

# Crear usuarios user1 y user2
RUN useradd -m user1 && useradd -m user2

# Crear directorio necesario para SSH
RUN mkdir /var/run/sshd

# Crear los directorios .ssh para los usuarios
RUN mkdir -p /home/user1/.ssh /home/user2/.ssh \
    && chmod 700 /home/user1/.ssh /home/user2/.ssh \
    && chown -R user1:user1 /home/user1/.ssh \
    && chown -R user2:user2 /home/user2/.ssh

# Copiar el archivo de configuración de ssh
COPY sshd_config /etc/ssh/sshd_config

# Copiar las claves públicas autorizadas
COPY authorized_keys_user1 /home/user1/.ssh/authorized_keys
COPY authorized_keys_user2 /home/user2/.ssh/authorized_keys

# Ajustar permisos de las claves y propiedad
RUN chmod 600 /home/user1/.ssh/authorized_keys \
    && chmod 600 /home/user2/.ssh/authorized_keys \
    && chown user1:user1 /home/user1/.ssh/authorized_keys \
    && chown user2:user2 /home/user2/.ssh/authorized_keys

# Exponer el puerto 22
EXPOSE 22

# Comando para iniciar el servicio SSH
CMD ["/usr/sbin/sshd", "-D"]

# Construir la imagen
# docker build -t ssh-server .

# Crear un contenedor a partir de la imagen
# docker run -d -p 2222:22 ssh-server

# Conectar al contenedor
# ssh -i user1_rsa user1@localhost -p 2222
