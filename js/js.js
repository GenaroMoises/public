//console.log('hola mundo');
function btn(){
    document.getElementById('titulo').classList.add('text-primary');
    
}
function btn1(){
    document.getElementById('titulo').classList.add('text-success');
}
function btn2(){
    document.getElementById('titulo').classList.add('text-warning');
}



function botonNota(){
    let nota = document.getElementById('nota').value;
    nota=parseInt(nota);
    let respuesta= document.getElementById('res');
    respuesta.innerHTML ='';
    if(nota>=0 && nota<=10){
        respuesta.innerHTML ='desprobaste';
    }else if(nota>10 && nota<=13){
        respuesta.innerHTML ='casi pasas';
    }else if(nota>13 && nota<=16){
        respuesta.innerHTML ='raspando pasas';
    }else if(nota>16 && nota<=19){
        respuesta.innerHTML ='estas bien';
    }else if(nota==20){
        respuesta.innerHTML ='excelen';
    }else {
        respuesta.innerHTML ='inrese dato';
    }


}

/*function btn(){
    document.getElementById('boton').onclick;
    let titulo = document.getElementById('titulo');
    if(titulo){
        titulo: document.getElementById('titulo').classList.add('text-primary')
    }
}
function btn1(){
    document.getElementById('boton1');
    let titulo = document.getElementById('titulo');
    if(titulo){
        titulo: document.getElementById('titulo').classList.add('text-success')
    }
}
function btn2(){
    document.getElementById('boton2');
    let titulo = document.getElementById('titulo');
    if(titulo){
        titulo: document.getElementById('titulo').classList.add('text-warning')
    }
}*/
/*
const tabla = document.querySelector('#lista-usuarios tbody');

function cargarUsuarios(){
    fetch('dato.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('tr');
                row.innerHTML += `
                    <td>${usuario.titulo}</td>
                    <td>${usuario.artista}</td>

                    <td>${usuario.email}</td>
                    <td>${usuario.company.name}</td>
                `;
                tabla.appendChild(row);                
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarUsuarios();*/
/************************************************** */
/*var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if(this.readyState ==4 && this.status==200){

    }
}*/

/***************************** */

/*function cargarJson(){
    fetch('dato.json')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        let html ='';
        data.forEach(dato) {
            html +=`
                <li>${titulo} ${artista}</li>
            `;
        })
        document.getElementById('resultado').innerHTML = html:
    })*/

    /***https://www.youtube.com/watch?v=xqBvtvXh9Z4 */

    /**************https://www.w3schools.com/js/tryit.asp?filename=tryjs_events1 */

    var contenido = document.querySelector('#contenido')

        function traer() {
            fetch('datos.json')
                .then(res => res.json())
                .then(datos => {
                    //console.log(datos)
                    tabla(datos)
                })
        }

        function tabla(datos) {
            // console.log(datos)
            contenido.innerHTML = ''
            for(let valor of datos){
                // console.log(valor.nombre)
                contenido.innerHTML += `
                
                <tr>
                    <th scope="row">${ valor.id }</th>
                    <td>${ valor.titulo }</td>
                    <td>${ valor.artista }</td>
                    <td>${ valor.estado ? "Activo" : "Eliminado" }</td>
                </tr>
                
                `
            }
        }

        /***https://www.youtube.com/watch?v=M4LaQ3KUGOM */
        /**https://drive.google.com/drive/u/0/folders/10p-k0atMXl03jfIRbwpfKyF1lc9P9Eq5 */
