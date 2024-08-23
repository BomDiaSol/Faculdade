pessoa = {"nome": "Valéria", "idade": 25}

pessoa = dict(nome="Valéria", idade=25)

pessoa["telefone"] = "333-333"

print(pessoa["nome"])
print(pessoa["idade"])
print(pessoa["telefone"])

contatos = {
    "sexo1": {"nome": "Ana", "sobrenome": "Valéria"},
    "sexo2": {"nome": "Anal", "sobrenome": "valval"},
    "sexo3": {"nome": "au", "sobrenome": "auauau"},
}

print(contatos["sexo3"]["sobrenome"])

for i in contatos:
    print(i, contatos[i])

#.clear()
#.copy()
#.fromkeys()
#.get()
#.items()
#.keys()
#.pop()
#.popitem()
#.setdefault()
#.update()
#values()
#in
#del
