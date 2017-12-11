(function($){
  jQuery(function(){
    $('#main-text').keyup(function(e) {
      var letters = e.target.value;
      var tags = '';
      for (var x = 0; x < letters.length; x++) {
        var c = letters.charAt(x).toLowerCase();
        if (c == '!') {
          c = 'exclamation';
          tags += '<img src="/images/unowns/201-exclamation.png" alt="unown-exclamation">'
        } else if (c == '?') {
          c = 'question';
          tags += '<img src="/images/unowns/201-question.png" alt="unown question">'
        } else if (c >= 'a' && c <= 'z') {
          tags += '<img src="/images/unowns/201-' + c + '.png" alt="unown ' + c + '">'
        } else {
          tags += c
        }
      }
      $('#unowns').html(tags);
    })
  })
})(jQuery)
