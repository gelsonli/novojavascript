//cadastro de projetos
class projetos{
    nome: string;
    dataCriação: Date;
    dataPrazo: Date;
    tipo: string;
    equipeResponsavel: string;
    progresso: [string, string, string, Date, Date];
    constructor(nome: string, dataCriação: Date, dataPrazo: Date, tipo: string, equipeResponsavel: string, progresso: [string, string, string, Date, Date]){
        this.nome = nome
        this.dataCriação = dataCriação
        this.dataPrazo = dataPrazo
        this.tipo = tipo
        this.equipeResponsavel = equipeResponsavel
        this.progresso = progresso
    }
    mostrarDados(){
        console.log('---------------dados de prjetos-----------------')
        console.log(`nome----------------: ${this.nome}`)
        console.log(`data de criação-----: ${this.dataCriação}`)
        console.log(`data de termino-----: ${this.dataPrazo}`)
        console.log(`tipo----------------: ${this.tipo}`)
        console.log(`equipe responsável--: ${this.equipeResponsavel}`)
        console.log(`progresso-----------: ${this.progresso}`)
    }
}

//organização de tarefas
class controle{
    tarefas: Array<string>;
    prazoConclusao: Date;
    responsavel: string;
    status: [string, string, Date];
    constructor(tarefas: Array<string>, prazoConclusao: Date, responsavel: string, status: [string, string, Date]){
        this.tarefas = tarefas
        this.prazoConclusao = prazoConclusao
        this.responsavel = responsavel
        this.status = status
    }
    mostrarDados(){
        console.log('-------------dados de controle---------------')
        console.log(`tarefas--------------: ${this.tarefas}`)
        console.log(`prazo de término----: ${this.prazoConclusao}`)
        console.log(`responsável---: ${this.responsavel}`)
        console.log(`status-----------: ${this.status}`)
    }
}

//comunicação
class comunicacao{
    pessoa: Array<string>;
    id: Array<string>;
    arquivos: Array<string>;
    registro1: controle;
    registro2: projetos;
    constructor(pessoa: Array<string>, id: Array<string>, arquivos: Array<string>, registro1: controle, registro2: projetos){
        this.pessoa = pessoa
        this.id = id
        this.arquivos = arquivos
        this.registro1 = registro1
        this.registro2 = registro2
    }
    mostrarDados(){
        console.log('---------------dados de comunicação-----------------')
        console.log(`id------------------------: ${this.id}`)
        console.log(`pessoa--------------------: ${this.pessoa}`)
        console.log(`arquivos------------------: ${this.arquivos}`)
        console.log(`registro de controle------: ${this.registro1}`)
        console.log(`registro de projetos------: ${this.registro2}`)
    }
}

const projetos = new projetos()
const controle = new controle()
const comunicacao = new comunicacao()