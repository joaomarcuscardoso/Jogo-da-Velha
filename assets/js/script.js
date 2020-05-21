$(function() {

});

var gameOver = false;
var vitoriaPc = 0;
var vitoriaJogador = 0;
var velha = 0;

function clicou(id) {


    if($('#quadr_input_'+id).val() == "") {
        
        if($('#vez').val() == "computador") {
         
            $('#quadr_div_'+id ).append("X");
            $('#quadr_input_'+id).attr('value', 'X');
            $('#rodada').html("<input type='hidden' id='vez' value='jogador' />O");         
        } else {
           
            $('#quadr_div_'+id ).append("O");
            $('#quadr_input_'+id).attr('value', 'O');

            $('#rodada').html("<input type='hidden' id='vez' value='computador' />X");

        }

    }
    
    
    // Verificando Quem ganhou;
   
    setTimeout(function() {
        // Verificando quem Ganhou Linhas

        if($("#quadr_input_1").val() == $("#quadr_input_2").val() && $("#quadr_input_1").val() == $("#quadr_input_3").val() && $("#quadr_input_1").val() != "") {
            gameOver = true;
            if($("#quadr_input_1").val() == "X") {
                vitoriaPc++;
     
            } else {
              
                vitoriaJogador++;
            }
        }

        if($("#quadr_input_4").val() == $("#quadr_input_5").val() && $("#quadr_input_4").val() == $("#quadr_input_6").val() && $("#quadr_input_4").val() != "") {
            gameOver = true;
            if($("#quadr_input_4").val() == "X") {
                vitoriaPc++;
            } else {
                vitoriaJogador++;
            }


        }

        if($("#quadr_input_7").val() == $("#quadr_input_8").val() && $("#quadr_input_7").val() == $("#quadr_input_9").val() && $("#quadr_input_7").val() != "") {
            gameOver = true;
            if($("#quadr_input_7").val() == "X") {
                vitoriaPc++;
            } else {
                vitoriaJogador++;
            }
        }

        // Verificando quem Ganhou Colunas
        if($("#quadr_input_1").val() == $("#quadr_input_4").val() && $("#quadr_input_1").val() == $("#quadr_input_7").val() && $("#quadr_input_1").val() != "") {
            gameOver = true;
            if($("#quadr_input_1").val() == "X") {
                vitoriaPc++;
            } else {
                vitoriaJogador++;
            }
        }

        if($("#quadr_input_2").val() == $("#quadr_input_5").val() && $("#quadr_input_2").val() == $("#quadr_input_8").val() && $("#quadr_input_2").val() != "") {
            gameOver = true;
            if($("#quadr_input_2").val() == "X") {
                vitoriaPc++;
            } else {
                vitoriaJogador++;
            }
        }

        if($("#quadr_input_3").val() == $("#quadr_input_6").val() && $("#quadr_input_3").val() == $("#quadr_input_9").val() && $("#quadr_input_3").val() != "") {
            gameOver = true;
            if($("#quadr_input_3").val() == "X") {
                vitoriaPc++;
            } else {
                vitoriaJogador++;
            }
        }
        // Verificando quem Ganhou Diagonal
        if($("#quadr_input_1").val() == $("#quadr_input_5").val() && $("#quadr_input_1").val() == $("#quadr_input_9").val() && $("#quadr_input_1").val() != "") {
            gameOver = true;
            if($("#quadr_input_1").val() == "X") {
                vitoriaPc++;
            } else {
                vitoriaJogador++;
            }
        } 
        if($("#quadr_input_3").val() == $("#quadr_input_5").val() && $("#quadr_input_3").val() == $("#quadr_input_7").val() && $("#quadr_input_3").val() != "") {
            gameOver = true;
            
            if($("#quadr_input_3").val() == "X") {
                vitoriaPc++;
            } else {
                vitoriaJogador++;
            }     
        
        }else if($("#quadr_input_1").val() != "" && $("#quadr_input_2").val() != "" && $("#quadr_input_3").val() != "" && $("#quadr_input_4").val() != "" && $("#quadr_input_5").val() != "" && $("#quadr_input_6").val() != "" && $("#quadr_input_7").val() != "" && $("#quadr_input_8").val() != ""&& $("#quadr_input_9").val() != "" ) {
            velha++;
            gameOver = true;  
        }



        if(gameOver == true) {
            alert("Placar Atualizado...");
          
            if(vitoriaPc != $('#result_pc').html()) {
                alert("O computador ganhou!!!");
                $("#result_pc").html(vitoriaPc);
            } else if(vitoriaJogador != $('#result_jogador').html()) {
                alert("O jogador ganhou!!!");
                $("#result_jogador").html(vitoriaJogador);
            } else {
                alert("Deu velha!!!");
                $("#result_velha").html(velha);
            }
            gameOver = false;
            for(var r=1;r <= 9;r++) {
                
                $("#quadr_div_"+r).html("<input type='hidden' id='quadr_input_"+r+"' />");
                
            }

        } 



    }, 100);
}


