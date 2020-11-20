
function btn(){
    document.getElementById('titulo').classList.add('text-dark');
    
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
        respuesta.innerHTML ='DESAPROBASTES';
    }else if(nota>10 && nota<=13){
        respuesta.innerHTML ='CASI PASAS';
    }else if(nota>13 && nota<=16){
        respuesta.innerHTML ='PASAS RASPANDO';
    }else if(nota>16 && nota<=19){
        respuesta.innerHTML ='ESTAMOS BIEN';
    }else if(nota==20){
        respuesta.innerHTML ='EXCELENTE';
    }else {
        respuesta.innerHTML ='INGRESE TU NOTA';
    }


}


console.log('hola mundo');

//document.getElementById('button2'):
//addEventListener('click',loadjson);
function loadjson(){
    fetch('datos.json')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let html='';
        data.forEach(function(datos){
            html +=`
            <tr>
                <th scope="row">${datos.Id}</th>
                <td>${datos.Proyecto}</td>
                <td>${datos.Link}</td>
            </tr>
            `
        })
        document.getElementById('result').innerHTML = html;
    })
}


