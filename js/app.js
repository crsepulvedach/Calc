
var calculadora = {
  sumando1:0,
  sumando2:0,
  total:0,
  punto:false,

  sumar:  function(){
    var result= this.sumando1 + this.sumando2;
    return result;
  },

  restar: function(){
    var result= this.sumando1 - this.sumando2;;
    return result;
  },

  multiplicar: function(){
    var result=this.sumando1 * this.sumando2;;
    return result;
  },

  dividir: function(){
    var result = this.sumando1 / this.sumando2;;
    return result;
  }
};


function PreLoad(){
  pantalla= document.getElementById('display')
   for(let i=0;i<document.getElementsByClassName("tecla").length;i++){
             document.getElementsByClassName("tecla")[i].addEventListener("mousedown",function(){
             document.getElementsByClassName("tecla")[i].style = "transform:scale(0.95,0.95)"
         });
         document.getElementsByClassName("tecla")[i].addEventListener("mouseup",function(){
             document.getElementsByClassName("tecla")[i].style = "transform:scale(1,1)"
         });
         document.getElementsByClassName("tecla")[i].onclick=eventoOnFocus;
   }
};


function eventoOnFocus(event){
  var paso=0;
  var seleccion=event.currentTarget.id;

  if (seleccion.length==1) {
    anota(seleccion);//Opcion solo para digitos.
  }
  else {
      switch (seleccion){ //Opcion solo para operaciones
        case "on":
            calculadora.total=0;
            calculadora.sumando1=0;
            calculadora.sumando2=0;
            calculadora.punto=false;
            pantalla.innerText="0";
            break
        case "sign":
            paso=Number(pantalla.innerText) * -1
            pantalla.innerText=paso.toString()
            break
        case "mas":
            calculadora.sumando1=Number(pantalla.innerText)
            pantalla.innerText=0
            calculadora.operacion="+"
            break
        case "menos":
            calculadora.sumando1=Number(pantalla.innerText)
            pantalla.innerText=0
            calculadora.operacion="-"
            break
        case "por":
            calculadora.sumando1=Number(pantalla.innerText)
            pantalla.innerText=0
            calculadora.operacion="*"
            break
        case "dividido":
            calculadora.sumando1=Number(pantalla.innerText)
            pantalla.innerText=0
            calculadora.operacion="/"
            break
        case "punto":
            anota(".")
            break
        case "igual":
            calculadora.sumando2=Number(pantalla.innerText)
            switch (calculadora.operacion) {
              case "+":
                calculadora.total=calculadora.sumar();
                break;
              case "-":
                calculadora.total=calculadora.restar();
                break;
              case "*":
                calculadora.total=calculadora.multiplicar();
               break;
              case "/":
                calculadora.total=calculadora.dividir();
                break;
              default:
            }
            pasotxt=String(calculadora.total)
            pantalla.innerText=pasotxt.substr(0,8)
            calculadora.operacion=""
            calculadora.sumando1=0
            calculadora.sumando2=0
            calculadora.total=0
            calculadora.punto=false
            break
        default:

      }  //Fin Switch
    } //Fin Else
} //Fin de funcion eventoOnFocus



//Se encarga de transferir los dígitos a la pantalla
//Para formar un número
function anota(dato){
  if (pantalla.innerText.length <8){
    if (pantalla.innerText == "0"){
      if (dato != "0") {
        if (dato !=".") {
          pantalla.innerText=dato
        }
      }
    }
    else {
      if (dato=="."){
        if (!calculadora.punto){
          pantalla.innerText=pantalla.innerText+dato
          calculadora.punto=true
        }
      }
      else {
        pantalla.innerText=pantalla.innerText+dato
      }
    } //Fin Else
  }//Fin if <8
}//Fin funcion Anota



PreLoad();
