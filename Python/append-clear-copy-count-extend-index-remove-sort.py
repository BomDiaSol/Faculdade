lista = []

lista.append(1)
lista.append("Python")
lista.append([20, 30 ,40])

print(lista)

l2 = lista.copy()

print(id(lista), id(l2))
l2[1] = "JavaScript"

print(lista, l2)

cores = ["vermelho", "rosa", "vermelho", "vermelho", "azul", "verde"]
c1 = cores.count("vermelho")
c2 = cores.count("rosa")
c3 = cores.count("azul")
c4 = cores.count("verde")
c5 = cores.count("preto")

print(c1, c2, c3, c4, c5)

linguagens = ["JavaScript", "Python"]
print(linguagens)

linguagens.extend(["Java", "C", "C#", "C++", "Ruby", "Flutter"])
print(linguagens)

l1 = linguagens.index("Java")
print(l1)

linguagens.pop(1)
linguagens.pop(-1)
linguagens.pop()
print(linguagens)

l1 = linguagens.index("Java")
print(l1)

linguagens.remove("C")
print(linguagens)

linguagens.reverse()
print(linguagens)

linguagens.sort()
print(linguagens)


