class heroi{
    constructor(nomeHeroi, idade, tipoHeroi ) {
        this.nomeHeroi = nomeHeroi;
        this.idade = idade;
        this.tipoHeroi = tipoHeroi;
    }

    atacar(){
        if(this.tipoHeroi === "Mago"){
        console.log(this.tipoHeroi + " atacou usando magia")
        } else if(this.tipoHeroi === "Guerreiro"){
            console.log(this.tipoHeroi + " atacou usando espada")
        } else if(this.tipoHeroi === "Monge"){
            console.log(this.tipoHeroi + " atacou usando artes marciais")
        } else if(this.tipoHeroi === "Ninja"){ 
            console.log(this.tipoHeroi + " atacou usando shuriken")
        }
    }
}

    let heroiUm = new heroi("Usopp", 25, "Ninja")
    let heroiDois = new heroi("Nami", 23, "Mago")
    let heroiTres = new heroi("Zoro", 22, "Monge")
    let heroiQuatro = new heroi("Luffy", 21, "Guerreiro")
    heroiUm.atacar()
    heroiDois.atacar()
    heroiTres.atacar()
    heroiQuatro.atacar()

