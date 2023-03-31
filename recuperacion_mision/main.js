const email=document.getElementById('email')
const usuario=document.getElementById('usuario')
const login=document.getElementById('login')

const main = async () =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data= await response.json()
    console.log(data);
    localStorage.setItem('data',JSON.stringify(data))

}
main()

login.addEventListener('click',()=>{
    const datos=JSON.parse(localStorage.getItem('data'))
    const verdadero= datos.find(element=>element.username==usuario.value && element.email==email.value)
    if(verdadero){
        location.href='./index2.html'
    }else{
        document.querySelector('.mensaje_error').style.display='block'
        setTimeout(()=>{
            document.querySelector('.mensaje_error').style.display='none'
        },'2000');
    }
} )