#!/bin/bash

# Generar las claves RSA para user1 y user2
echo "Generando claves para user1..."
ssh-keygen -t rsa -b 4096 -f ./user1_rsa -N "" # No password para las claves
cat ./user1_rsa.pub > ./authorized_keys_user1

echo "Generando claves para user2..."
ssh-keygen -t rsa -b 4096 -f ./user2_rsa -N "" # No password para las claves
cat ./user2_rsa.pub > ./authorized_keys_user2


