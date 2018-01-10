var operacion="";
var anterior=0;
var resultado=0;
var nuevo="";
var indi=false;
var teclas=document.getElementsByClassName("tecla");
var pantalla=document.getElementById("display");
for(i=0;i<teclas.length;i++){
  teclas[i].addEventListener("click",function(event){
      id=event.target.getAttribute('id');
      alto=event.target.style.width;
      ancho=event.target.style.height;
      event.target.style.width="20%";
      event.target.style.height="55px";
      function cambio(){
                event.target.style.width=alto;
                event.target.style.height=ancho;
        };
            setTimeout (cambio, 150);
      switch(id){
          case "on":
              pantalla.innerHTML="0";
              anterior=0;
              nuevo="";
              indi=false;
              break;
          case "mas":
              if(resultado!==0){
                  anterior=parseFloat(resultado);
              }
              else{
                  anterior=parseFloat(nuevo);
              }
              nuevo="";
              pantalla.innerHTML=nuevo;
              operacion="mas";
              break;
          case "menos":
              if(resultado!==0){
                  anterior=parseFloat(resultado);
              }
              else{
                  anterior=parseFloat(nuevo);
              }
              nuevo="";
              pantalla.innerHTML=nuevo;
              operacion="menos";
              break;
          case "por":
              if(resultado!==0){
                  anterior=parseFloat(resultado);
              }
              else{
                  anterior=parseFloat(nuevo);
              }
              nuevo="";
              pantalla.innerHTML=nuevo;
              operacion="por";
              break;
          case "dividido":
              if(resultado!==0){
                  anterior=parseFloat(resultado);
              }
              else{
                  anterior=parseFloat(nuevo);
              }
              nuevo="";
              pantalla.innerHTML=nuevo;
              operacion="dividido";
              break;
          case "igual":
              if(indi===true){
                  if(operacion==="mas"){
                resultado=parseFloat(nuevo)+parseFloat(anterior);
                }
                if(operacion==="menos"){
                    resultado=parseFloat(nuevo)-parseFloat(anterior);
                }
                if(operacion==="por"){
                    resultado=parseFloat(nuevo)*parseFloat(anterior);
                }
                if(operacion==="dividido"){
                    resultado=parseFloat(nuevo)/parseFloat(anterior);
                }
                nuevo=resultado;
              }
              else{
                anterior=nuevo;
                nuevo=resultado;
                indi=true;
                }
                resultado=resultado.toString();
                if(resultado.length>7){
                    resultado=parseFloat(resultado);
                    resultado=resultado.toExponential(2);
                    pantalla.innerHTML=resultado;
                }
                else{
                    pantalla.innerHTML=resultado;
                }
              break;
          case "sign":
              if(pantalla.innerHTML!=="0"||pantalla.innerHTML!==""){
                  if(nuevo!==""){
                  nuevo=parseFloat(nuevo);
                  nuevo=-nuevo;
                  pantalla.innerHTML=nuevo;
                  }
              }
              break;
          case "punto":
              id=".";
              for(i=0;i<nuevo.length;i++){
                  if(nuevo[i]==="."){
                      id="";
                  }
              }
              if(pantalla.innerHTML!=="0"){
              nuevo=nuevo+id;
              pantalla.innerHTML=nuevo;};
              break;
        default:
            indi=false;
            nuevo=nuevo.toString();
            if(nuevo.length<=7){
                if(pantalla.innerHTML==="0" && id==="0"){}
                else{
                nuevo=nuevo+id;
                pantalla.innerHTML=nuevo;}
            }

            if(operacion==="mas"){
                resultado=anterior+parseFloat(nuevo);
              }
              if(operacion==="menos"){
                  resultado=anterior-parseFloat(nuevo);
              }
              if(operacion==="por"){
                  resultado=anterior*parseFloat(nuevo);
              }
              if(operacion==="dividido"){
                  resultado=anterior/parseFloat(nuevo);
              }
            break;
      }
  });
};
