$(document).ready(function(){
  //Ao clicar em um link da paginação será executada essa rotina
  $("#ajaxPagination li a").on("click",function(){

    //recupera a url do link clicado
    var URL_pagina = $(this).attr('href');

    $.ajax({
      //define o método da requisição
      method: 'GET',
      //define a url da requisição
      url: URL_pagina,
      //define o tipo de retorno
      dataType: 'html',
      //em caso de sucesso da requisição à url, executa a rotina
      success:function(response){
        //se retornou algum conteúdo, então exibe dentro da div cujo ID é
        //RegistrosPagina, caso contrário exibe o texto informando que não
        //foram localizados os registros
        if(response){
          $('#RegistrosPagina').html(response);
        }else{
          $('#RegistrosPagina').html('<p class="alert alert-info">Nenhum registro localizado.</p>', function() {});
        }
      },
      //em caso de erro, diz que a página não existe
      error: function(){
        $('#RegistrosPagina').html('<p class="alert alert-info">Página inexistente</p>');
      }
    });

    //bloqueia a abertura da url definida no atributo href do link
    return false;
  });
});