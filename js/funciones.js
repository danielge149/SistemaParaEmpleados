var fechaInput = document.getElementById('fechana');
var fechaActual = new Date().toISOString().split('T')[0];
fechaInput.setAttribute('max', fechaActual);

var fechaInput1 = document.getElementById('fechaing');
var fechaActual1 = new Date().toISOString().split('T')[0];
fechaInput1.setAttribute('max', fechaActual1);

class Persona{
    constructor(Nombre, Nombre2, Apellido, Sexo, FechaNac, FechaIngr, Salario, Email, Telefono, Direccion, Ciudad) {
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.Sexo = Sexo;
        this.FechaNac = FechaNac;
        this.FechaIngr = FechaIngr;
        this.Salario = Salario;
        this.Email = Email;
        this.Telefono = Telefono;
        this.Direccion = Direccion;
        this.Ciudad = Ciudad;
        this.Nombre2 = Nombre2;
    }
    toStringNombre() {
        return (this.Nombre = document.getElementById("nombre").value);
    }
    toStringApellido() {
        return (this.Apellido = document.getElementById("apellido").value);
    }
    toStringSexo() {
        const selectElement = document.getElementById("sexo");
        const selectedOption = selectElement.options[selectElement.selectedIndex];

        if (selectedOption) {
            this.Sexo = selectedOption.value;
            return this.Sexo;
        } else {
            return null;
        }
    }
    toStringFechaNac() {
        return (this.FechaNac = document.getElementById("fechana").value);
    }
      toStringFechaIng() {
        return (this.FechaIngr = document.getElementById("fechaing").value);
    }
      toStringSalario() {
        return (this.Salario = parseFloat(
          document.getElementById("salario").value
        ));
    }
    toStringEmail() {
        return (this.Nombre = document.getElementById("email").value);
    }
    toStringTelefono() {
        return (this.Nombre = document.getElementById("telefono").value);
    }
    toStringDireccion() {
        return (this.Nombre = document.getElementById("direccion").value);
    }
    toStringCiudad() {
        return (this.Nombre = document.getElementById("ciudad").value);
    }
    toStringNombre2(){
        return (this.Nombre2 = document.getElementById("nombre2").value);
    }

    calcularEdad() {
        let fechaNacimiento = document.getElementById("fechana").value;
        let partesFecha = fechaNacimiento.split("-");
        let dia = parseInt(partesFecha[2], 10);
        let mes = parseInt(partesFecha[1], 10);
        let anio = parseInt(partesFecha[0], 10);
        
        let fechaActual = new Date();
        let anioActual = fechaActual.getFullYear();
        let mesActual = fechaActual.getMonth() + 1;
        let diaActual = fechaActual.getDate();
        
        let edad = anioActual - anio;
        
        if (mesActual < mes || (mesActual === mes && diaActual < dia)) {
            edad--;
        }
        
        return edad;
    }
    calcularTiempo() {
        let fechaIngreso= document.getElementById("fechaing").value;
        let partesFecha = fechaIngreso.split("-");
        let dia = parseInt(partesFecha[2], 10);
        let mes = parseInt(partesFecha[1], 10);
        let anio = parseInt(partesFecha[0], 10);
        
        let fechaActual = new Date();
        let anioActual = fechaActual.getFullYear();
        let mesActual = fechaActual.getMonth() + 1;
        let diaActual = fechaActual.getDate();
        
        let edad = anioActual - anio;
        
        if (mesActual < mes || (mesActual === mes && diaActual < dia)) {
            edad--;
        }
        return edad;
      }
}
let p = new Persona();
function modificar(){
    let salario = prompt("Ingrese el nuevo salario");
    p.toStringSalario(salario);
    if (salario <= 0 || salario.length == 0) {
        alert("Salario invalido");
    } else {
        document.getElementById('salario').value = salario;
    }
    
}

function calcular_edad() {
    let Edad = p.calcularEdad();
   
    if(!Edad){
    alert("NO HA INGRESADO NINGUN VALOR O EL VALOR INGRESADO  NO ES VALIDO")
    }
    else{
        alert("Su edad es " + Edad + " años")
    }
}

function calcular_tiempo() {
    let Edad = p.calcularTiempo();
    if(!Edad){
        alert("NO HA INGRESADO NINGUN VALOR O EL VALOR INGRESADO  NO ES VALIDO")
        }
        else{
            alert("Su tiempo es " + Edad + " años")
        }

}
function calcular_prestaciones() {
     let tiempo= p.calcularTiempo()
     let salario= p.toStringSalario()
     
      
    if(!tiempo || !salario || salario<0){
        alert("NO HA INGRESADO NINGUN VALOR O EL VALOR INGRESADO  NO ES VALIDO")
    }
    else{
        let prestacion =(tiempo*salario)/12
        alert("El valor de sus prestaciones es :" + prestacion.toFixed(2));
    }

    
  }
function mostrar_datos() {
    document.getElementById("nom").innerHTML = p.toStringNombre();
    document.getElementById("ape").innerHTML = p.toStringApellido();
    document.getElementById("sex").innerHTML = p.toStringSexo();
    document.getElementById("fechana1").innerHTML = p.toStringFechaNac();
    document.getElementById("fechaing1").innerHTML = p.toStringFechaIng();
    document.getElementById("sal").innerHTML = p.toStringSalario();
    document.getElementById("emal").innerHTML = p.toStringEmail();
    document.getElementById("tel").innerHTML = p.toStringTelefono();
    document.getElementById("dir").innerHTML = p.toStringDireccion();
    document.getElementById("ciu").innerHTML = p.toStringCiudad();
       
}

var arreglo = [];

function guardar_arreglo(){
    
  var dato1 = p.toStringNombre();
  var dato2 = p.toStringApellido();
  var dato3 = p.toStringSexo();
  var dato4 = p.toStringFechaNac();
  var dato5 = p.toStringFechaIng();
  var dato6 = p.toStringSalario();
  var dato7 = p.toStringEmail();
  var dato8 = p.toStringTelefono();
  var dato9 = p.toStringDireccion();
  var dato10 = p.toStringCiudad();
  
  arreglo.push(dato1, dato2, dato3, dato4, dato5, dato6, dato7, dato8, dato9, dato10);

  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("sexo").value = "";
  document.getElementById("fechana").value = "";
  document.getElementById("fechaing").value = "";
  document.getElementById("salario").value = "";
  document.getElementById("email").value = "";
  document.getElementById("telefono").value = "";
  document.getElementById("direccion").value = "";
  document.getElementById("ciudad").value = "";


  if(dato1=="" || dato2=="" || dato3=="" || dato4=="" || dato5=="" || !dato6
  || dato7=="" || dato8=="" || dato9=="" || dato10==""){
    alert("ALGUN CAMPO VACIOS")
  }
  else{
    alert("Los datos son: [" + arreglo.join(", ") + "]");
  }
  arreglo = [];
}

var seleccionarImagen = document.getElementById("seleccionarImagen");
var imagenPreview = document.getElementById("imagenPreview");

seleccionarImagen.addEventListener("click", function() {
  var input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";
  
  input.addEventListener("change", function(event) {
    var archivo = event.target.files[0];
    var lector = new FileReader();

    lector.onload = function(e) {
      imagenPreview.src = e.target.result;
    };

    lector.readAsDataURL(archivo);
  });

  input.click();
});


let numeroaleatorio;
let contador = 0;


function generarnumeroaleatorio(){
    // Generar un número aleatorio entre 1 y 10
    numeroaleatorio = Math.floor(Math.random() * 10) + 1;
}

function reiniciarjuego(){
    generarnumeroaleatorio();
    contador = 0;
}

function adivinarNumero() {
    document.getElementById("nom2").innerHTML = p.toStringNombre2();

    // Obtener el número ingresado por el usuario
    let numero = parseInt(document.getElementById("numero").value);


    // Comparar el número ingresado con el número aleatorio
    if (numero === numeroaleatorio) {
      document.getElementById("resultado").innerHTML = "¡Adivinaste! El número era " + numeroaleatorio + ".";
      alert('Lo lograste en ---> '+ contador + ' <--- intentos ')
      
    } 
    else if (numero > numeroaleatorio){
      document.getElementById("resultado").innerHTML = "Intenta con un numero mas bajo ";
      contador ++;
    }

    else if (numero < numeroaleatorio){
        document.getElementById("resultado").innerHTML = "Intenta con un numero mas alto ";
        contador ++;
    }
    
  } 

  function jugar(){

    generarnumeroaleatorio();
    adivinarNumero();
    reiniciarjuego();

  }
    


  