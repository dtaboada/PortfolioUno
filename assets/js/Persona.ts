interface Persona {
    nombre: string;
    apellido: string;
    direccion: string;
    provincia: string;
    titulo: string;
    edad: number;
    nacimiento: Date;
    telefono: string;
    acercade: string;  
}


let portfolio:Persona={
    nombre:"Diego",
    apellido:"Taboada",
    direccion:"Calle 15 Nro.: 311",
    provincia: "Buenos Aires",
    titulo: "Analista de Sistemas & Full Stack Developer",
    edad: 37,
    nacimiento : new Date("1982/11/12"),
    telefono: "11-5980-3008",
    acercade: "Hola!!! Gracias por visitar mi portfolio. Te cuento un poco sobre mi, soy organizado, me gusta trabajar en en equipo y el buen clima interpersonal en el ambito laboral. Disfruto de transmitir mis conocimientos y experiencias para aportar al crecimiento grupal. Me gusta capacitarme para la incorporación de nuevas herramientas y los nuevos desafios",  
}



function SetNombre( ):void{
      const demoClasses = document.getElementsByName("nombre");
     // Change the text of multiple elements with a loop
     demoClasses.forEach(element => {
     element.innerHTML = portfolio.nombre;
});
}

function SetApellido( ):void{
    const demoClasses = document.getElementsByName("apellido");
    // Change the text of multiple elements with a loop
    demoClasses.forEach(element => {
    element.innerHTML = portfolio.apellido;
    });
}

function SetDireccion():void{
    const demoClasses = document.getElementsByName("direccion");
    // Change the text of multiple elements with a loop
    demoClasses.forEach(element => {
    element.innerHTML = portfolio.direccion;
    });
}

function SetProvincia():void{
    const demoClasses = document.getElementsByName("provincia");
    // Change the text of multiple elements with a loop
    demoClasses.forEach(element => {
    element.innerHTML = portfolio.provincia;
    });
}

function SetTitulo():void{
    const demoClasses = document.getElementsByName("titulo");
    // Change the text of multiple elements with a loop
    demoClasses.forEach(element => {
    element.innerHTML = portfolio.titulo;
    });
}

/* function SetEdad():void{
    const demoClasses = document.getElementsByName("edad");
    // Change the text of multiple elements with a loop
    demoClasses.forEach(element => {
    element.innerHTML = portfolio.edad;
    });
}
 */

function SetAcercaDe():void{
    const demoClasses = document.getElementsByName("acercade");
    // Change the text of multiple elements with a loop
    demoClasses.forEach(element => {
    element.innerHTML = portfolio.acercade;
    });
}

function SetTelefono():void{
    const demoClasses = document.getElementsByName("telefono");
    // Change the text of multiple elements with a loop
    demoClasses.forEach(element => {
    element.innerHTML = portfolio.telefono;
    });
}

function calcularEdad():void {
    var hoy = new Date();
    var cumpleanos = portfolio.nacimiento;
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    
    var edadstr= edad+"";
    
    const demoClasses = document.getElementsByName("edad");
    // Change the text of multiple elements with a loop
    demoClasses.forEach(element => {
    element.innerHTML = edadstr;
    });
      
    alert(edadstr);
}


SetNombre();
SetApellido();
SetDireccion();
SetProvincia();
SetTitulo();
SetTelefono();
SetAcercaDe();
calcularEdad();
