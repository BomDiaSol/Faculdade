frutas = ["banana", "laranja", "uva"]
print(frutas)
print(frutas[0])
print(frutas[1])
print(frutas[2])

letras = list("Python")
print(letras)
print(letras[0])
print(letras[2:])
print(letras[:2])
print(letras[:: -1])

numeros = list(range(10))
pares1 = []
pares2 = [i for i in numeros if i % 2 == 0]

quadrado1 =[]
quadrado2 =[i ** 2 for i in numeros]

print(numeros)

for i in numeros:
    if i % 2 == 0:
        pares1.append(i)

print(pares1)
print(pares2)

for i in numeros:
    quadrado1.append(i ** 2)

print(quadrado1)
print(quadrado2)

carro = ["Ferrari", 2020, "F8"]
print(carro)

matriz = [
    [1, 5, 9],
    [8, 6, 10],
    ["j", "i", "o"]
]
print(matriz[1][0])
print(matriz[2][2])