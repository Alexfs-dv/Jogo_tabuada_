$('document').ready(function(){

    
    $('.learn__options__button').bind('click', function(){
        
        let imprimeTabuada = "";
        let tabuada = parseInt($(this).val());
        
        for(let i = 1; i <= 10; i++){
            imprimeTabuada += `${tabuada} x ${i} = ${(tabuada*i)}<br>`;
            
            $('#output-learn').html(imprimeTabuada);
        }
    })
    
    $('#learn-button').bind('click', function(){
        $('#options').css('display','none');
    })

    $('#play-button').bind('click', function(){
        $('#options').css('display','none');
        $('#learn').css('display','none');
    })

    $('.back-icon').bind('click', function(){
        $('#options').css('display','flex')
        $('#learn').css('display','flex')
        $('#output-learn').html("");
    })

    /*function changeScreen(){
        $('header a').bind('click', function(){
            valor = $(this).text();
            
            if(valor === "Aprender"){
                $('#options').css('display','none');
            }
            else{
                console.log(valor);
            }
            
        })
    }
    changeScreen();*/
})