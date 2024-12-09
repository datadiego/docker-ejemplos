# Usar una imagen base de Ubuntu
FROM ubuntu:latest

# Actualizar el sistema e instalar OpenSSH y sudo
RUN apt-get update && apt-get install -y openssh-server sudo

# Crear directorio necesario para SSH
RUN mkdir /var/run/sshd

# Crear usuarios con contraseñas personalizadas
RUN useradd -m -s /bin/bash user1 && echo "user1:iloveyou" | chpasswd && usermod -aG sudo user1
RUN echo "la bandera es {onlygreatideas}" > /flag.txt
RUN useradd -m -s /bin/bash user2 && echo "user2:123456789" | chpasswd
RUN useradd -m -s /bin/bash user3 && echo "user3:fuckyou2" | chpasswd
RUN useradd -m -s /bin/bash user4 && echo "user4:darkangel" | chpasswd
RUN useradd -m -s /bin/bash user5 && echo "user5:chiquita" | chpasswd
RUN useradd -m -s /bin/bash user6 && echo "user6:jesucristo" | chpasswd
RUN useradd -m -s /bin/bash user7 && echo "user7:princesita" | chpasswd
RUN useradd -m -s /bin/bash user8 && echo "user8:pussycat" | chpasswd
RUN useradd -m -s /bin/bash user9 && echo "user9:mihardcore" | chpasswd

# Permitir la autenticación por contraseña
RUN sed -i 's/#PasswordAuthentication yes/PasswordAuthentication yes/' /etc/ssh/sshd_config
RUN sed -i 's/PasswordAuthentication no/PasswordAuthentication yes/' /etc/ssh/sshd_config

# Exponer el puerto 22
EXPOSE 22


# Comando para iniciar el servicio SSH
CMD ["/usr/sbin/sshd", "-D"]

# run with docker run -d -p 2222:22 ssh_lab
