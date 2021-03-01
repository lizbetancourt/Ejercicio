


const botonRegistrarPaciente= document.querySelector('#RegistrarPaciente');
const nombrePacienteText= document.querySelector('#nombrePacienteText');
const numeroHistoria=  document.querySelector('#HistoriaText');
const edadPacienteText= document.querySelector('#edadPacienteText');
const formulario= document.querySelector('#atenciones');
const padre = document.querySelector("#caja");

let PesoText ;
let EstaturaText ;
let TiempoFumaText ;
let FumaSelect;
let DietaSelect;
let listaPacientes= [];
let rangoEdad="";
let SalaEspera= [];
let SalaPendientes= [];
let ConsultasActuales= [];
let Consultas= [];
let historialConsultas= [];


formulario.addEventListener('submit', RegistrarPaciente);
edadPacienteText.addEventListener('change', ValidarEdad);
//FumaSelect.addEventListener('click', ValidarFuma);


function ValidarFuma(e){
  e.preventDefault();
  console.log("ingreso");
  if(FumaSelect.value=='1'){
     var labelTiempoFuma= document.createElement('LABEL');

     labelTiempoFuma.innerHTML="¿Hace cuanto?";
     padre.appendChild(labelTiempoFuma);
     labelTiempoFuma.id='labelTiempoFuma';
     var textTiempoFuma= document.createElement('INPUT');
     textTiempoFuma.type="text";
     textTiempoFuma.id="TiempoFumaTexbox";
     textTiempoFuma.className += "form-control round";
     textTiempoFuma.placeholder="Años";
     padre.appendChild(textTiempoFuma);
     TiempoFumaText = document.querySelector("#TiempoFumaTexbox");
}
}

function LimpiarElement(e){
  e.preventDefault();
  if(rangoEdad=='nino'){
    console.log('limpiando nino');
    padre.removeChild(document.querySelector('#labelEstatura'));
     padre.removeChild(EstaturaText);
      padre.removeChild(document.querySelector('#labelPeso'));
    padre.removeChild(PesoText);

  }
   else if(rangoEdad=='joven') {
     console.log('limpiando jovennnn');
     padre.removeChild(document.querySelector('#labelFuma'));
     padre.removeChild(FumaSelect);
     if(FumaSelect.value=='1'){
     padre.removeChild(document.querySelector('#labelTiempoFuma'));
    padre.removeChild(TiempoFumaText);}
  }
   else{
      console.log('limpiando anciano');
     padre.removeChild(document.querySelector('#labelDieta'));
     padre.removeChild(DietaSelect);


  }
}

function ValidarEdad(e){
   e.preventDefault();
   console.log(rangoEdad);
   if(rangoEdad!="")
     LimpiarElement(e);
   console.log("edad");

   if(edadPacienteText.value < 16){
      console.log("niño");
      rangoEdad="nino";

     var labelEstatura= document.createElement('LABEL');
     labelEstatura.innerHTML="Estatura";
     labelEstatura.id='labelEstatura';
     padre.appendChild(labelEstatura);

     var textEstatura= document.createElement('INPUT');
     textEstatura.type="text";
     textEstatura.id="estaturaTexbox";
     textEstatura.className += "form-control round";
     textEstatura.placeholder="Cm";
     padre.appendChild(textEstatura);

      var labelPeso= document.createElement('LABEL');
      labelPeso.innerHTML="Peso";
      labelEstatura.id='labelPeso';
      padre.appendChild(labelPeso);

      var textPeso= document.createElement('INPUT');
      textPeso.type="text";
      textPeso.id="pesoTexbox";
      textPeso.className += "form-control round";
      textPeso.placeholder="Kg";
      padre.appendChild(textPeso);

      PesoText = document.querySelector("#pesoTexbox");
      EstaturaText= document.querySelector("#estaturaTexbox");

     }
     else if (edadPacienteText.value > 40){
        console.log("anciano");
        rangoEdad="anciano";

          var labelDieta= document.createElement('LABEL');
         labelDieta.innerHTML="¿Tiene dieta?";
         labelDieta.id='labelDieta';
         padre.appendChild(labelDieta);

        var selectDieta = document.createElement("select");
         selectDieta.id = "selectDieta";
         selectDieta.className='form-control round';


          var option1 = document.createElement("option");
          option1.value ='0';
          option1.text = 'Seleccione..';
          selectDieta.appendChild(option1);

          var option2 = document.createElement("option");
          option2.value ='1';
          option2.text = 'Si';
          selectDieta.appendChild(option2);

          var option3 = document.createElement("option");
          option3.value ='2';
          option3.text = 'No';
          selectDieta.appendChild(option3);
           padre.appendChild(selectDieta);
          DietaSelect = document.querySelector("#selectDieta");


     }
     else{
          console.log("joven");
          rangoEdad="joven";

         //agregar caja de fuma y cuantos años
         var labelFumador= document.createElement('LABEL');
         labelFumador.innerHTML="¿Fuma?";
         labelFumador.id='labelFuma';
         padre.appendChild(labelFumador);

         var selectFuma = document.createElement("select");
         selectFuma.id = "selectFumar";
         selectFuma.className='form-control round';


          var option1 = document.createElement("option");
          option1.value ='0';
          option1.text = 'Seleccione..';
          selectFuma.appendChild(option1);

          var option2 = document.createElement("option");
          option2.value ='1';
          option2.text = 'Si';
          selectFuma.appendChild(option2);

          var option3 = document.createElement("option");
          option3.value ='2';
          option3.text = 'No';
          selectFuma.appendChild(option3);

          padre.appendChild(selectFuma);
          FumaSelect = document.querySelector("#selectFumar");
          FumaSelect.addEventListener('change', ValidarFuma);
       }
}


function RegistrarPaciente(e){
  e.preventDefault();


    const paciente={
      nombre:nombrePacienteText.value,
      edad:edadPacienteText.value,
      numeroHistoria:numeroHistoria.value,
      prioridad:"",
      riesgo:"",
      peso:"",
      estatura:"",
      fuma:"",
      Tiempofuma:"",
      TieneDieta:""

    }

    if(rangoEdad==="nino"){
      console.log(1+ rangoEdad);
      if(edadPacienteText.value<6)
         prioridad=PesoText.value - EstaturaText.value +3;
      else if(edadPacienteText.value<13)
         paciente.prioridad=PesoText.value - EstaturaText.value +2;
      else
         paciente.prioridad=PesoText.value - EstaturaText.value +1;
      paciente.riesgo=(edadPacienteText.value * prioridad)/100;
      paciente.peso= PesoText.value;
      paciente.estatura=EstaturaText.value;

    }
    else if(rangoEdad==="joven"){
      console.log(2+ rangoEdad);
      if(FumaSelect.value=='1'){//fumador
        paciente.prioridad=14/4+2;
        paciente.Tiempofuma=TiempoFumaText.value;
       }
      else
        paciente.prioridad=2;
      paciente.riesgo=(edadPacienteText.value * prioridad)/100;
      paciente.prioridad=prioridad;
      paciente.fuma=FumaSelect.value;

    }
    else{
      console.log(3+ rangoEdad);
      if(DietaSelect.value=='1' && edadPacienteText.value > 59 && edadPacienteText.value<101){
        paciente.prioridad=edadPacienteText.value/20 +4;
        paciente.TieneDieta=DietaSelect.value;
      }
      else
        paciente.prioridad=edadPacienteText.value/30 +3;
    paciente.riesgo=(edadPacienteText.value * prioridad)/100 + 5.3;

    }

    listaPacientes= [...listaPacientes, paciente];
    console.log(listaPacientes);

    formulario.reset();


 /* $.ajax({
    url: '/pythonCode/',
    type: 'POST',
    dateType: 'JSON',
    contentType: 'application/json',
    data:JSON.stringify(paciente),
    success: function(rs){
      if(rs.status==1)
      	console.log("Guardado exitosamente");
      else
        console.log("Error almacenando la informacion");
    },

   error: function(){
      console.log("Error almacenando la informacion");
   }
  });*/
}

function ListarPacienteMayorRiesgo(numeroHistoria){

  const riesgoPaciente=listaPacientes.filter(paciente => paciente.numeroHistoria == numeroHistoria);
  const result = listaPacientes.filter(paciente => paciente.riesgo > riesgoPaciente);
  console.log(riesgoPaciente);
  console.log(result);
  return result;
}

function AtenderPAciente(){}

function liberarConsultas(){}

function listarPacientesFumadoresUrgentes(){

  return listaPacientes.filter(paciente => paciente.fuma == 1);
}

function listaMasPacientesAtendidos(){}

function PacienteMasAncianoSala(){}

function OptimizarPaciente(){}

