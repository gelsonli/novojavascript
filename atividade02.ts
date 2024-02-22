//cadastras os livros da biblioteca
class livros{
    titulo: string;
    autor: string;
    editora: string;
    categoria: string;
    copiasDisponiveis: number;
    constructor(titulo: string, autor: string, editora: string, categoria: string, copiasDisponiveis: number){
        this.autor = autor
        this.categoria = categoria
        this.copiasDisponiveis = copiasDisponiveis
        this.editora = editora
        this.titulo = titulo
    }
    mostrarDados(){
        console.log('--------------dados dos livros----------------')
        console.log(`título--------------: ${this.titulo}`)
        console.log(`autor---------------: ${this.autor}`)
        console.log(`editora-------------: ${this.editora}`)
        console.log(`categoria-----------: ${this.categoria}`)
        console.log(`copias disponiveis--: ${this.copiasDisponiveis}`)
    }
}

//cadastrar usuarios da biblioteca
class usuario{
    nome: string;
    endereco: string;
    telefone: string;
    cpf: string;
    historico: Array<string>;
    constructor(nome: string, endereco: string, telefone: string, cpf: string, historico: Array<string>,){
        this.cpf = cpf
        this.endereco = endereco
        this.historico = historico
        this.nome = nome
        this.telefone = telefone
    }   
    mostrarDados(){
        console.log('-----------dados do usuario-------------')
        console.log(`nome--------------: ${this.nome}`)
        console.log(`endereço----------: ${this.endereco}`)
        console.log(`telefone----------: ${this.telefone}`)
        console.log(`cpf---------------: ${this.cpf}`)
        console.log(`histórico---------: ${this.historico}`)
    }
}

//cadastrar os emprestimos feitos na biblioteca
class emprestimos{
    registro: Array<string>;
    dataEmprestimo: Date;
    dataDevolucao: Date;
    info: usuario;
    livros: livros;
    constructor(registro: Array<string>, dataEmprestimo: Date, dataDevolucao: Date, info: usuario, livros : livros){
        this.dataDevolucao = dataDevolucao
        this.dataEmprestimo = dataEmprestimo
        this.info = info
        this.livros = livros
        this.registro = registro
    }
    mostrarDados(){
        console.log('-------------dados de empréstimos---------------')
        console.log(`registro--------------: ${this.registro}`)
        console.log(`data de emprestimo----: ${this.dataEmprestimo}`)
        console.log(`date de devolução-----: ${this.dataDevolucao}`)
        console.log(`informações-----------: ${this.info}`)
        console.log(`livros----------------: ${this.livros}`)
    }
}

const livro1 = new livros('orion','eren','casa','aventura',23)
console.log(livro1)
//const usuario = new usuario()
//const emprestimos = new emprestimos()