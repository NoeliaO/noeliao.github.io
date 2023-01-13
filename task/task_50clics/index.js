window.onload = function(){
    //boton
    let boton = document.getElementById('boton');
    let bdg = document.querySelector('#bdg');
    //número
    let num = 0;
    //listener del click
    boton.addEventListener('click', function(){
        num++;
        console.log(num);
        bdg.innerHTML = num; 
            let alerta = document.querySelector('#alerta');
    //si el número es
if(num == 50){
            alerta.style.display = 'contents';
            boton.disabled = true;
            let x = document.querySelector('#cerrar');
            x.addEventListener('click', function(){
                alerta.style.display = 'none';
                boton.disabled = false;
                num = 0;
                bdg.innerHTML = num;
            })
            }
        
})
}


