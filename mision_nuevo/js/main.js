const crear=document.getElementById('btn_crear')
const navegar=document.getElementById('navegacion')
const tabla=document.getElementById('tabla')
class Agregar{
    constructor(area,nombre,usuario,email,edad){
        this.area=area
        this.nombre=nombre
        this.usuario=usuario
        this.email=email
        this.edad=edad
    }
    // buscar(){
    //     if(navegar.value==this.usuario.value){

    //     }
    // }

}
crear.addEventListener('click', ()=>{
    location.href='./html/index2.html'
})

// cont=1



let informacion= JSON.parse(localStorage.getItem('personas'))

let fila=document.createElement('tr')

let area=document.createElement('td')

let nombre=document.createElement('td')
let usuario=document.createElement('td')
let email=document.createElement('td')
let edad=document.createElement('td')



area.innerText=informacion[0].area
nombre.innerText=informacion[0].nombre
usuario.innerText=informacion[0].usuario  
email.innerText=informacion[0].email
edad.innerText=informacion[0].edad


fila.append(area)
fila.append(nombre)
fila.append(usuario)
fila.append(email)
fila.append(edad)

tabla.append(fila)
