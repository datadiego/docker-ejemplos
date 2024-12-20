FROM php:7.4-apache
RUN docker-php-ext-install mysqli
# copy all files on /apache folder to /var/www/html except the Dockerfile
COPY . /var/www/html


