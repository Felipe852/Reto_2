let modalimagen=document.getElementById("cambiar_img");
let menu1=document.querySelector(".contenido_restante");
let modaltitulo = document.getElementById("titulo_cambiar");
let modaldescrip = document.getElementById("descrip_cambiar");
let modalmini=document.getElementById("miniatura_cambiar");
let todasimg = document.querySelectorAll(".imgcambiar");
let todasspan = document.querySelectorAll(".spantexto"); 
let modal =document.querySelector(".modal");
let botones = document.querySelectorAll(".btns");
let miniimg= document.querySelectorAll(".images");
let formulalugar = document.getElementById("agend_lugar");
let formulacontinent = document.getElementById("agend_continent");

let section = document.querySelector("header");


let posi;

import {lugares} from "./listas.js";

const [,,,,america] = lugares;





let aux=0;
let guardarsitio="";
let guardarconti="";


botones.forEach(e =>{
    e.addEventListener("click",e =>{

        section.style.display="none";
        modal.style.display="flex";

        for(let i=0;i<6;i++){
            if(e.target==botones[i]){

                modalimagen.setAttribute("src",aux[i].imagen);
                modaltitulo.textContent=aux[i].lugar;
                modaldescrip.textContent=aux[i].descripcion;
                modalmini.setAttribute("src", miniimg[posi].src );
                formulalugar.setAttribute("placeholder", aux[i].lugar);
                formulacontinent.setAttribute("placeholder", miniimg[posi].alt );
                guardarsitio=aux[i].lugar;
                guardarconti=miniimg[posi].alt;
            }
        }
    })
});

let closemodal = document.querySelector(".modal-close").addEventListener("click",e=>{
    
    section.style.display="block";
    modal.style.display="none";

});

document.addEventListener("click", ({target})=>{

    
    if(target.classList.contains("images")){


        switch (target.id) {
            case "imgafrica":
                posi = 0;
                menu1.style.display="grid";
                const lug = lugares.find(p => p[posi].id == target.id);
                for(let i=0;i<6;i++){
                todasimg[i].setAttribute("src", lug[i].imagen);
                todasspan[i].textContent = lug[i].lugar;

            }
            aux=lugares[posi];
            break;

            case "imgasia":
                posi = 1;
                menu1.style.display="grid";
                const lug2 = lugares.find(p => p[posi].id == target.id);
                for(let i=0;i<6;i++){
                    todasimg[i].setAttribute("src", lug2[i].imagen);
                    todasspan[i].textContent = lug2[i].lugar;
                }
                aux=lugares[posi];
            break;

            case "imgeuropa":
                posi = 2;
                    menu1.style.display="grid";
                    const lug3 = lugares.find(p => p[posi].id == target.id);
                    for(let i=0;i<6;i++){
                        todasimg[i].setAttribute("src", lug3[i].imagen);
                        todasspan[i].textContent = lug3[i].lugar;
                    }
                    aux=lugares[posi];
            break;

            case "imgoceania":
                posi = 3;
                menu1.style.display="grid";
                const lug4 = lugares.find(p => p[posi].id == target.id);
                for(let i=0;i<6;i++){
                    todasimg[i].setAttribute("src", lug4[i].imagen);
                    todasspan[i].textContent = lug4[i].lugar;
                }
                aux=lugares[posi];
            break;

            case "imgamerica":
                posi = 4;
                menu1.style.display="grid";
                
                for(let i=0;i<6;i++){
                   
                    todasimg[i].setAttribute("src", america[i].imagen);
                    todasspan[i].textContent = america[i].lugar;
                }
                alert("America es todo el continente, no solo Estados unidos y mexico!!!");
                aux=lugares[posi];
            break;
        }

        /* Lo mismo pero con ifelse */
        /* if(target.id == "imgafrica"){
            posi = 0;
            menu1.style.display="grid";
            const lug = lugares.find(p => p[posi].id == target.id);
            for(let i=0;i<6;i++){
                todasimg[i].setAttribute("src", lug[i].imagen);
                todasspan[i].textContent = lug[i].lugar;

            }
            aux=lugares[posi];
        }else{
            if(target.id=="imgasia"){
                posi = 1;
                menu1.style.display="grid";
                const lug = lugares.find(p => p[posi].id == target.id);
                for(let i=0;i<6;i++){
                    todasimg[i].setAttribute("src", lug[i].imagen);
                    todasspan[i].textContent = lug[i].lugar;
                }
                aux=lugares[posi];
                    
                
            }else{
                if(target.id =="imgeuropa"){
                    posi = 2;
                    menu1.style.display="grid";
                    const lug = lugares.find(p => p[posi].id == target.id);
                    for(let i=0;i<6;i++){
                        todasimg[i].setAttribute("src", lug[i].imagen);
                        todasspan[i].textContent = lug[i].lugar;
                    }
                    aux=lugares[posi];
                }else{
                    if(target.id=="imgoceania"){
                        posi = 3;
                        menu1.style.display="grid";
                        const lug = lugares.find(p => p[posi].id == target.id);
                        for(let i=0;i<6;i++){
                            todasimg[i].setAttribute("src", lug[i].imagen);
                            todasspan[i].textContent = lug[i].lugar;
                        }
                        aux=lugares[posi];
                    }else{
                        if(target.id == "imgamerica"){
                            posi = 4;
                            menu1.style.display="grid";
                            
                            for(let i=0;i<6;i++){
                               
                                todasimg[i].setAttribute("src", america[i].imagen);
                                todasspan[i].textContent = america[i].lugar;
                            }
                            alert("America es todo el continente, no solo Estados unidos y mexico!!!");
                            aux=lugares[posi];

                        }
                    }
                }
            }
        }  */

    }

});

let ocupado = JSON.parse(localStorage.getItem("Ocupado"));





let formulario=document.querySelector("#formulario");



formulario.addEventListener("submit", function(e){
    
    let cliente=[];
    let formfechaP="";
    let formfechaR="";
    let formcomentario="";
    
    formfechaP= document.querySelector("#fecha_salida").value;
    formfechaR = document.querySelector("#fecha_retorno").value;
    formcomentario = document.querySelector("#comentarios").value;
    e.preventDefault();
    let alerta;

    for(let i=0;i<ocupado.length;i++){
        if(formfechaP == ocupado[i].fechaP && aux == ocupado[i].lugar){
            alerta=0;
            
        }else{
            alerta=1; 
        }
        
    }
    
    if(alerta==0){
        alert(`No hay tickets para: ${aux} en la fecha: ${formfechaP}`);
        cliente=[]; 
    }else{


        cliente.push(guardarsitio,guardarconti,formfechaP,formfechaR,formcomentario);
        ocupado.push(cliente);
        sessionStorage.setItem("nuevos", JSON.stringify(ocupado));
        
        mostraralerta(formfechaP,formfechaR,formcomentario);
        
        
        const nuevocliente = JSON.parse(sessionStorage.getItem("nuevos"));
        
        const peo = nuevocliente.filter(n =>{
            n.fechaP == formfechaP;
        });

        console.log(peo);
    }

    
    formulario.reset();
});






function mostraralerta(fechaP,fechaR,comen){


    if(fechaP != "" || fechaR != "" || comen != ""){
        Swal.fire(
            'Bien',
            'Tu cita a sido agendada, pronto uno de nuestros asesores se comunicara contigo ',
            'success'
        )
    }else{
        
        Swal.fire(
            'Ups',
            'Asegurate que todos los campos esten correctamente diligenciados',
            'error'
        )
        
    }
    
}

/* document.addEventListener("DOMContentLoaded", ()=>{
    let session = {
        lugar:"Lago Nakuru, Kenia",
        continente:"africa",
        fechaP: "2022-06-17",
        fechaR: "2022-06-20",
        comentarios:"Me da igual donde este la verdad..."
    };
    sessionStorage.setItem("nuevos",JSON.stringify(session));
}); */