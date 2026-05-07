export function novos(nome, email, ...infos) {
    console.log(nome);
    console.log(email);
    console.log(infos);
}


export class teste  {
    #nome;
    #cep;
    #email;
    #telefone;
    #nascimento;
    constructor(nome,cep, email, telefone, nascimento ) {
        this.#nome = nome;
        this.#cep = cep;
        this.#email = email;
        this.#telefone = telefone;
        this.#nascimento = nascimento;
    }
    //uso de getters
    get nome() {
        return this.#nome;
    }
    get cep() {
        return this.#cep;
    }
    get email() {
        return this.#email;
    }
    get telefone() {
        return this.#telefone;
    }
    get nascimento() {
        return this.#nascimento;
    }
}





