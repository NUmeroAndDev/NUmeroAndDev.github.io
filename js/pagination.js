currentPage = 1;
articleCount = 2;

function onClickPrevPage(){
  if ($('#prev-button').is(':disabled')) {
    return;
  }
  currentPage += 1;
  if (currentPage == articleCount) {
    //fix me prop is not work
    $('#prev-button').attr('disabled', '');
  }
  $('#next-button').removeAttr('disabled');
  $('#news_list').load('news_article/page' + currentPage + '.html');
  $('html,body').animate({
    scrollTop:0
  }, 'fast') ;
  return;
}

function onClickNextPage(){
  if ($('#next-button').is(':disabled')) {
    return;
  }
  currentPage -= 1;
  if (currentPage == 1) {
    // fix me prop is not work
    $('#next-button').attr('disabled', '');
  }
  $('#prev-button').removeAttr('disabled');
  $('#news_list').load('news_article/page' + currentPage + '.html');
  $('html,body').animate({
    scrollTop:0
  }, 'fast') ;
  return;
}

$(function(){
   $("#news_list").load("news_article/page1.html");
})
