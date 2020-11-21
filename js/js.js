/*$(document).ready(function(){

    $("#btn1").click(function(){
        $("#ocultar").toggle('slow');

});

});
$(document).ready(function(){

    $("#btn2").click(function(){
        $("#ocultar1").toggle();

});

});*/


$(function(){
    $('#grande').hover(function(){
        $(this).width(1.25*$(this).width());
        $(this).height(1.25*$(this).height());
    },function(){
        $(this).width(0.8*$(this).width());
        $(this).height(0.8*$(this).height());

    })
})
$(function(){
    $('#grande1').hover(function(){
        $(this).width(1.25*$(this).width());
        $(this).height(1.25*$(this).height());
    },function(){
        $(this).width(0.8*$(this).width());
        $(this).height(0.8*$(this).height());

    })
})
$(function(){
    $('#grande2').hover(function(){
        $(this).width(1.25*$(this).width());
        $(this).height(1.25*$(this).height());
    },function(){
        $(this).width(0.8*$(this).width());
        $(this).height(0.8*$(this).height());

    })
})
$(function(){
    $('#grande3').hover(function(){
        $(this).width(1.25*$(this).width());
        $(this).height(1.25*$(this).height());
    },function(){
        $(this).width(0.8*$(this).width());
        $(this).height(0.8*$(this).height());

    })
})

$(document).ready(function(){
    $('#boton').click(function(){
      $('#titulo').toggleClass('text-primary');
    });
  });
  $(document).ready(function(){
    $('#boton1').click(function(){
      $('#titulo').toggleClass('text-success');
    });
  });
  $(document).ready(function(){
    $('#boton2').click(function(){
      $('#titulo').toggleClass('text-warning');
    });
  });

  $(document).ready(function(){
    $("#boton3").click(function(){
      $("#titulo").animate({
        height: 'toggle'
      });
    });
  });

/*function btn(){
    document.getElementById('titulo').classList.add('text-dark');
    
}
function btn1(){
    document.getElementById('titulo').classList.add('text-success');
}
function btn2(){
    document.getElementById('titulo').classList.add('text-warning');
}*/



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


