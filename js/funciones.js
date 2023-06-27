var fechaInput = document.getElementById('fechana');
var fechaActual = new Date().toISOString().split('T')[0];
fechaInput.setAttribute('max', fechaActual);

var fechaInput1 = document.getElementById('fechaing');
var fechaActual1 = new Date().toISOString().split('T')[0];
fechaInput1.setAttribute('max', fechaActual1);

class Persona{
    constructor(Nombre, Apellido, Sexo, FechaNac, FechaIngr, Salario, Email, Telefono, Direccion, Ciudad) {
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
    alert(Edad)
}

function calcular_tiempo() {
    let Edad = p.calcularTiempo();
    alert(Edad)
}
function calcular_prestaciones() {
     let tiempo= p.calcularTiempo()
     let salario= p.toStringSalario()
     let prestacion =(tiempo*salario)/12
      alert(prestacion.toFixed(2));
    
  }
function mostrar_datos() {
    document.getElementById("nomMos").innerHTML = p.toStringNombre();
    document.getElementById("apeMos").innerHTML = p.toStringApellido();
    document.getElementById("sex").innerHTML = p.toStringSexo();
    document.getElementById("fechana1").innerHTML = p.toStringFechaNac();
    document.getElementById("fechaing1").innerHTML = p.toStringFechaIng();
    document.getElementById("sal").innerHTML = p.toStringSalario();
    document.getElementById("email").innerHTML = p.toStringEmail();
    document.getElementById("tel").innerHTML = p.toStringTelefono();
    document.getElementById("dir").innerHTML = p.toStringDireccion();
    document.getElementById("ciu").innerHTML = p.toStringCiudad();
       
}