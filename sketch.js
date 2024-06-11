

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("white");
  fill ("purple");
  textSize(55);
  textAlign (CENTER,CENTER);
  textFont('courier new');


 let maximo= width;
 let minimo=0;

 console.log("Apaixonada".length);
 let palavra="Apaixonada";
  let quantidade=map(mouseX, 0 ,width,1,palavra.length);
  let parcial=palavra.substring(0,quantidade);
  text(parcial,200,200)
}

