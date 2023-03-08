let menu = document.querySelector("#menuResponsive")
let nav = document.querySelector('.navbar')

menu.onclick = ()=>{
    
    nav.classList.toggle('active')
}
window.onscroll= () => {
    if(window.scrollY > 55){
        document.querySelector('#scrol' ).classList.add('active')
    }else{document.querySelector('#scrol').classList.remove('active')}

}