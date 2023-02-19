const btn = document.querySelector('.switch button')
const body = document.querySelector('body')


btn.addEventListener('click',() => {
    const bodyClass =  body.classList.toggle('ligth')

    if(bodyClass){
        btn.style.transform = `translate3d(100%, -50%, 0)`
    }else{
        btn.style.transform = `translate3d(0%,-50%,0)`
    }
     
})

