let funcionarios = [{id: "ABC", nome: "Frodo", salario: 1500},{id: "DEF", nome: "Aragorn", salario: 3200},{id: "GHI", nome: "Gandalf", salario: 7000},{id: "JKL", nome: "Legolas", salario: 5800}]

let novo = funcionarios.map(
    (funcionario) => {
        return funcionario.salario * 1.05
    })

console.log(novo)


let alunos = [
    {id: "01", nome: "Chaves", nota: 4.9},
    {id: "02", nome: "Chiquinha", nota: 7.0},
    {id: "03", nome: "Quico", nota: 10.0},
    {id: "04", nome: "Inhonho", nota: 6.5},
    {id: "05", nome: "Pops", nota: 8.1},
]

let aprovados = alunos.filter (
    (nota) => {
        return nota.nota >= 7.0 
    })

console.log(aprovados)



let clientes = [
    {id: "1", nome: "Jon", sobrenome: "Snow"},
    {id: "2", nome: "Tyrion", sobrenome: "Lannister"},
    {id: "3", nome: "Daenerys", sobrenome: "Targaryen"},
    {id: "4", nome: "Sansa", sobrenome: "Stark"}
]

let nomsobr = clientes.map(
    (cliente) => {
        return cliente.nome + cliente.sobrenome
    })

console.log(nomsobr)


let notas = [7.5, 8.1, 4.0, 5.3, 10.0, 9.7]

let soma = notas.reduce(
    (som, med) => {
        return som += med
    })

    let media = soma/notas.length

console.log(soma,media)


let bruxos = [
    {id: 1, nome: "Harry Potter", notas: [8.1, 7.4, 9.9]},
    {id: 2, nome: "Hermione Graneger", notas: [10.0, 9.8, 9.5]},
    {id: 3, nome: "Ronald Weasley", notas: [6.4, 8.7, 4.2]},
    {id: 4, nome: "Neville LongBotlom", notas: [7.7, 6.8, 5.6]}
]

