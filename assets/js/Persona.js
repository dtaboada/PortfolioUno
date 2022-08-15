var portfolio = {
    nombre: "Diego",
    apellido: "Taboada",
    direccion: "Calle 15 Nro.: 311",
    provincia: "Buenos Aires",
    titulo: "Analista de Sistemas & Full Stack Developer",
    edad: 37,
    nacimiento: new Date("1982/11/12"),
    telefono: "11-5980-3008",
    acercade: "Hola!!! Gracias por visitar mi portfolio. Te cuento un poco sobre mi, soy organizado, me gusta trabajar en en equipo y el buen clima interpersonal en el ambito laboral. Disfruto de transmitir mis conocimientos y experiencias para aportar al crecimiento grupal. Me gusta capacitarme para la incorporación de nuevas herramientas y los nuevos desafios"
};
function SetNombre() {
    var demoClasses = document.getElementsByName("nombre");
    // Change the text of multiple elements with a loop
    demoClasses.forEach(function (element) {
        element.innerHTML = portfolio.nombre;
    });
}
function SetApellido() {
    var demoClasses = document.getElementsByName("apellido");
    // Change the text of multiple elements with a loop
    demoClasses.forEach(function (element) {
        element.innerHTML = portfolio.apellido;
    });
}
function SetDireccion() {
    var demoClasses = document.getElementsByName("direccion");
    // Change the text of multiple elements with a loop
    demoClasses.forEach(function (element) {
        element.innerHTML = portfolio.direccion;
    });
}
function SetProvincia() {
    var demoClasses = document.getElementsByName("provincia");
    // Change the text of multiple elements with a loop
    demoClasses.forEach(function (element) {
        element.innerHTML = portfolio.provincia;
    });
}
function SetTitulo() {
    var demoClasses = document.getElementsByName("titulo");
    // Change the text of multiple elements with a loop
    demoClasses.forEach(function (element) {
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
function SetAcercaDe() {
    var demoClasses = document.getElementsByName("acercade");
    // Change the text of multiple elements with a loop
    demoClasses.forEach(function (element) {
        element.innerHTML = portfolio.acercade;
    });
}
function SetTelefono() {
    var demoClasses = document.getElementsByName("telefono");
    // Change the text of multiple elements with a loop
    demoClasses.forEach(function (element) {
        element.innerHTML = portfolio.telefono;
    });
}
function calcularEdad() {
    var hoy = new Date();
    var cumpleanos = portfolio.nacimiento;
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    var edadstr = edad + "";
    var demoClasses = document.getElementsByName("edad");
    // Change the text of multiple elements with a loop
    demoClasses.forEach(function (element) {
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
