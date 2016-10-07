function onClickPage(page){

  if (!$('#page' + page).hasClass('active')) {
    $('#news_list').load('news_article/page' + page + '.html');
    $('#page' + page).addClass('active');
    $('html,body').animate({
      scrollTop:0
    }, 'fast') ;
  }

  for (var i = 1; i <= 2; i++) {
    if (i == page) {
      continue;
    }
    if ($('#page' + i).hasClass('active')) {
      $('#page' + i).removeClass('active');
    }
  }
}

$(function(){
   $("#news_list").load("news_article/page1.html");
})
