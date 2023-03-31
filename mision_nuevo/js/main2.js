const atras=document.getElementById('btn_atras')
const enviar=document.getElementById('btn_enviar')
const nombre=document.getElementById('nombre')
// const apellido=document.getElementById('apellido')
const area=document.getElementById('area')
const usuario=document.getElementById('usuario')
const edad=document.getElementById('edad')
const email=document.getElementById('email')
let personas=[]

class Crear {
    constructor(area,nombre,usuario,email,edad){
        this.area=area
        this.nombre=nombre
        // this.apellido=apellido
        this.usuario=usuario
        this.email=email
        this.edad=edad
    }
    // nombre(){
    //     return `${this.nombre} ${this.apellido}`
    // }

}
enviar.addEventListener('click', ()=>{
    const info= new Crear(area.value,nombre.value,usuario.value,email.value,edad.value)
    personas.push(info)
    localStorage.setItem('personas',JSON.stringify(personas))

    

    location.href='../index.html'
})
