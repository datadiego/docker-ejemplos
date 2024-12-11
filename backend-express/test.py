import requests

r = requests.get('http://localhost:3000/metodos')
print(r.text)

r = requests.post('http://localhost:3000/metodos?test=holamundo')
print(r.text)

r = requests.delete('http://localhost:3000/metodos')
print(r.text)