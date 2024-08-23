ativos = []

quantidadeAtivos = int(input())

for i in range(quantidadeAtivos):
    codigoAtivo = str(input())
    ativos.append(codigoAtivo)

ativos.sort()
print(ativos[0])
print(ativos[1])
print(ativos[3])

