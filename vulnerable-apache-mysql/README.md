Podemos inyectar codigo SQL desde la propia query:

```plaintext
http://localhost:8080/url-injection.php?nombre=x' OR '1'='1
```

Quizá debes escapar los caracteres como comillas o espacios:

```plaintext
http://localhost:8080/url-injection.php?nombre=x%27%20OR%20%271%27%3D%271
```