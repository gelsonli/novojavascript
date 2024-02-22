//criação de conta
class conta{
    id: string;
    titularidade: string;
    tipoConta: string;
    saldo: number;
    extrato: Array<string>;
    constructor(id: string, titularidade: string, tipoConta: string, saldo: number, extrato: Array<string>,){
        this.id = id
        this.titularidade = titularidade
        this.tipoConta = tipoConta
        this.saldo = saldo
        this.extrato = extrato
    }
    mostrarDados(){
        console.log('-------------dados da conta---------------')
        console.log(`id--------------: ${this.id}`)
        console.log(`titularidade----: ${this.titularidade}`)
        console.log(`tipo de conta---: ${this.tipoConta}`)
        console.log(`saldo-----------: ${this.saldo}`)
        console.log(`extrato---------: ${this.extrato}`)
    }
}

//despesas e receitas
class receitas{
    cliente: conta;
    despesas: Array<number>;
    receitaCliente: [string, number];
    constructor(cliente: conta, despesas: Array<number>, receitaCliente: [string, number]){
        this.cliente = cliente
        this.despesas = despesas
        this.receitaCliente = receitaCliente
    }
    mostrarDados(){
        console.log('-------------dados da receitas---------------')
        console.log(`cliente--------: ${this.cliente}`)
        console.log(`despesas-------: ${this.despesas}`)
        console.log(`receitas-------: ${this.receitaCliente}`)
    }
}

//metas financeiras
class planejamento{
    usuario: conta;
    receita: receitas;
    metas: Array<string>;
    saldo: number;
    progresso: Array<string>;
    constructor(usuario: conta , receita: receitas, metas: Array<string>, saldo: number, progresso: Array<string>){
        this.usuario = usuario
        this.receita = receita
        this.metas = metas
        this.saldo = saldo
        this.progresso = progresso 
    }
    mostrarDados(){
        console.log('-------------dados de planejamento---------------')
        console.log(`usuario------: ${this.usuario}`)
        console.log(`receita------: ${this.receita}`)
        console.log(`metas--------: ${this.metas}`)
        console.log(`saldo--------: ${this.saldo}`)
        console.log(`progresso----: ${this.progresso}`)
    }
}

const conta = new conta()
const receitas = new receitas()
const planejamento = new planejamento()