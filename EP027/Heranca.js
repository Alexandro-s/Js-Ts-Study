
function Mago (nome, magia, dmg) {
    this.nome = nome;
    this.magia = magia;
    this.dmg = dmg;
}

 Mago.prototype.ataqueNormal = function (qtdDano) {
    this.dmg += qtdDano;  
 };

 Mago.prototype.ataqueMagico = function (qtdDano) {
   return  this.magia +=  qtdDano;
 };
 Mago.prototype.defesaMagica = function(qtdDanoRecebido) {
    return this.magia = this.magia - (this.magia * (qtdDanoRecebido / 100 ));
 }

 function MagoNegro(nome, magia, dmg, magiaNegra) {
    Mago.call(this, nome, magia, dmg);
    this.magiaNegra =  magiaNegra;
 };
 MagoNegro.prototype = Object.create(Mago.prototype);
 MagoNegro.prototype.constructor = MagoNegro;

 function MagoVermelho (nome, magia, dmg, magiaFogo) {
     Mago.call(this, nome, magia,dmg);
     this.magiaFogo = magiaFogo;
     
  
 };


 MagoVermelho.prototype = Object.create(Mago.prototype);
 MagoVermelho.prototype.constructor = MagoVermelho;


 MagoVermelho.prototype.ataqueDeFogo = function() {
    const danoDeFogo = this.dmg + this.magiaFogo;
    return (`${this.nome} usou ataque de fogo causando ${danoDeFogo} de dano!`);
  
 }
 

//  const mago = new Mago ('Salem', 5 , 3 );
 const magoVermelho = new MagoVermelho ('Enza', 20, 10, 5);
 console.log(magoVermelho.ataqueDeFogo()); 
//  const magoNegro = new MagoNegro('GMane', 20, 10, 5 );

//  console.log(mago);
//  console.log(magoNegro);


 