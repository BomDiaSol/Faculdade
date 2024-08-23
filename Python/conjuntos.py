conjunto_A = {1, 2, 3, 4}
conjunto_B = {5, 6, 7, 8}

conjunto_C = conjunto_A.union(conjunto_B)
print(conjunto_C)

conjunto_A = {1, 3, 5, 7}
conjunto_B = {5, 7, 9, 11}

conjunto_C = conjunto_A.intersection(conjunto_B)
print(conjunto_C)

conjunto_A = {1, 2, 4, 6, 8, 10}
conjunto_B = {4, 6, 8, 10, 12 ,14}

conjunto_C = conjunto_A.difference(conjunto_B)
conjunto_D = conjunto_B.difference(conjunto_A)
conjunto_E = conjunto_A.symmetric_difference(conjunto_B)
print(conjunto_C)
print(conjunto_D)
print(conjunto_E)

conjunto_A = {1, 4, 8, 10}
conjunto_B = {1, 2, 4, 6, 8, 10}

conjunto_C = conjunto_A.issubset(conjunto_B)
conjunto_D = conjunto_B.issubset(conjunto_A)
print(conjunto_C)
print(conjunto_D)

conjunto_E = conjunto_A.issuperset(conjunto_B)
conjunto_F = conjunto_B.issuperset(conjunto_A)
print(conjunto_E)
print(conjunto_F)

conjunto_A = {1, 2, 3, 4, 5}
conjunto_B = {6, 7, 8, 9}
conjunto_C = {1, 0}

conjunto_D = conjunto_A.isdisjoint(conjunto_B)
conjunto_E = conjunto_A.isdisjoint(conjunto_C)
print(conjunto_D)
print(conjunto_E)

sorteio = {1}

sorteio.add(30)
sorteio.clear()

sorteio.add(4)
sorteio.add(99)
sorteio.add(30)
sorteio.add(40)
sorteio.add(55)
sorteio.copy()
sorteio.discard(99) #Se eu passar um valor que não existe no conjunto, ele não vai dar erro
sorteio.pop() #Descarta o primeiro valor do conjunto
sorteio.remove(55) #Se eu passar um valor que não exste no conjunto, ele vai dar erro

print(len(sorteio)) #Mostra o tamanho do conjunto, descartando duplicados
print(sorteio)
print(1 in sorteio)
print(40 in sorteio)

