let amigos=[];

let btnGuardar=document.querySelector("#btnguardar");
let btnCancelar=document.querySelector("#btncancelar");
let btneliminar=document.getElementsByClassName("eliminar");

let lista=document.querySelector(".listaAmigos");
let formulario=document.querySelector("#formulario");

pintar();

function limpiar(){
    formulario[0].value="";
    formulario[1].value="";
    formulario[2].value="";
    formulario[3].value="";
}

function pintar(){
    if(amigos.length>0)
    {
        lista.innerHTML="";
        amigos.forEach((contacto)=>{
            let amigo=document.createElement("div");
            amigo.innerHTML=`<p>${contacto.nombre}</p><button class="muestraDetalles"><input type="hidden" value="${contacto.telefono}"/>Detalles</button>
            <button class="eliminarContacto" style="background-color: red;" ">Eliminar</button>`;
            lista.appendChild(amigo)
        })
        let botones=document.getElementsByClassName("muestraDetalles"); //mostrar detalles
        for (let i = 0; i < botones.length; i++){
            const element = botones[i];
            element.addEventListener("click",()=>{
                showDetalles(element.children[0].value);
            });
        }
        botones=document.getElementsByClassName("eliminarContacto");
        for (let i = 0; i < botones.length; i++){
            const element = botones[i];
            element.addEventListener("click",()=>{
                let siono=document.getElementById("pregunta");
                amigos.forEach((index)=>{
                    siono.innerHTML=`
                    <div class="pregunta">
                        <h4>¿Estas seguro que quieres eliminarlo?</h4>
                        <div>
                            <button class="si" ele="${index.nombre}">Si</button>
                            <button class="no" value="">No</button>
                        </div>
                    </div>`;
                    siono.classList.remove("oculto");
                })
                botones=document.getElementsByClassName("si");
                for (let i = 0; i < botones.length; i++){
                    const element = botones[i];
                    element.addEventListener("click",()=>{
                        amigos.splice(element.getAttribute("ele"),1);  
                        pintar(); 
                        siono.classList.add("oculto");
                        
                    });
                }
                botones=document.getElementsByClassName("no");
                for (let i = 0; i < botones.length; i++){
                    const element = botones[i];
                    element.addEventListener("click",()=>{
                        // amigos.splice(element.getAttribute("ele"),1);  
                        pintar(); 
                        siono.classList.add("oculto");
                        
                    });
                }
                // amigos.splice(element.getAttribute("ele"),1);  
                // pintar();     
             
            });
        }
    }
    else
    {
        lista.innerHTML="<h2 style='color:red;'>No tenemos amigos</h2>";
    }
}

function showDetalles(tel){ //mostrar detalles
    let detalles=document.getElementById("detallesAmigos");
    let amigo = amigos.find(a=>{
        if(a.telefono==tel)
        {
            return a;
        }
    });
    detalles.innerHTML=`        
    <img src="${amigo.foto}" alt="">
    <h3>${amigo.nombre}</h3>
    <p><span>Teléfono: </span>${amigo.telefono}</p>
    <p><span>Correo: </span>${amigo.correo}</p>
    <button id="cerrardetalles">Cancelar</button>`;
    detalles.classList.remove("oculto");
    cerrardetalles();
}

function cerrardetalles(){
    let cerrar=document.getElementById("detallesAmigos");
    cerrar.addEventListener("click", quitar =>{
        let detalles=document.getElementById("detallesAmigos");
        detalles.classList.add("oculto");
    })

}

// btnCancelar.addEventListener("click",(event)=>{
//     formulario[0].value="";
//     formulario[1].value="";
//     formulario[2].value="";
//     formulario[3].value="";
//     event.preventDefault();
// })

btnCancelar.addEventListener("click",(event)=>{
    limpiar();
    event.preventDefault();
})

btnGuardar.addEventListener("click",(event)=>{
    let error = document.getElementById("error");
    let error2 = document.getElementById("error2");
    let error3 = document.getElementById("error3");
    let error4 = document.getElementById("error4");
    if(formulario[0].value == "" ){
        // btnGuardar=document.getElementById("error");
        error.innerHTML=`
        <p class="texterror">Complete el campo Nombre</p>`;
        error.classList.remove("oculto");
        event.preventDefault();
    }
    else if(formulario[1].value  == "" ){
        // btnGuardar=document.getElementById("error2");
        error2.innerHTML=`
        <p class="texterror">Complete el campo Telefono</p>`;
        error2.classList.remove("oculto");
        event.preventDefault();
    }
    else if(formulario[2].value  == "" ){
        // btnGuardar=document.getElementById("error3");
        error3.innerHTML=`
        <p class="texterror">Complete el campo Correo</p>`;
        error3.classList.remove("oculto");
        event.preventDefault();
    }   
    else if(formulario[3].value  == "" ){
        // btnGuardar=document.getElementById("error4");
        error4.innerHTML=`
        <p class="texterror">Complete el campo Foto</p>`;
        error4.classList.remove("oculto");
        event.preventDefault(); 

    }else if(formulario[0,1,2,3].value !== ""){//Si los campos tiene un valor agregarlo


        error.classList.add("oculto");
        error2.classList.add("oculto");
        error3.classList.add("oculto");
        error4.classList.add("oculto");
        

        let contacto={
            nombre:formulario["nombre"].value,
            telefono:formulario["telefono"].value,
            correo:formulario["correo"].value,
            foto:formulario["foto"].value

        };
        // if(formulario[1].value == telefono){
        //     error2.innerHTML=`
        //     <p class="texterror">Teléfono repetido</p>`;
        //     error2.classList.remove("oculto");
        //     event.preventDefault();
        // }
        amigos.push(contacto);
        limpiar();
        pintar();
        event.preventDefault();
    }
})
