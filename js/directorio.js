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
            <button class="eliminar" style="background-color: red;"><input type="hidden" value="${contacto.telefono}"/>Eliminar</button>`;
            lista.appendChild(amigo)
        })
        let botones=document.getElementsByClassName("muestraDetalles"); //mostrar detalles
        for (let i = 0; i < botones.length; i++){
            const element = botones[i];
            element.addEventListener("click",()=>{
                showDetalles(element.children[0].value);
            })
        }
        let eliminar=document.getElementsByClassName("eliminar");
        eliminar.addEventListener("click", (event) =>{
            detalles.classList.remove(contacto);
            event.preventDefault();
        })
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
    if(formulario[0].value == "" ){
        alert("Completa el campo Nombre");
        event.preventDefault();
    }
    else if(formulario[1].value  == "" ){
        alert("Completa el campo Teléfono");
        event.preventDefault();
    }  
    else if(formulario[2].value  == "" ){
        alert("Completa el campo Correo");
        event.preventDefault();
    }   
        else if(formulario[3].value  == "" ){
            alert("Completa el campo Foto"); 
            event.preventDefault();   
    }else if(formulario[0,1,2,3].value !== ""){//Si los campos tiene un valor agregarlo

    let contacto={
        nombre:formulario["nombre"].value,
        telefono:formulario["telefono"].value,
        correo:formulario["correo"].value,
        foto:formulario["foto"].value
    };
    amigos.push(contacto);
    limpiar();
    pintar();
    event.preventDefault();
}
})
