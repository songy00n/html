$(document).ready(function(){
    var gnbdiv = $('.gnb > li > div');
    var bg = $('.bg_gnb');
    var li = $('gnb > li');

    li.on('mouseover focusIn', function(){});
    /*하위 메뉴 보이기 1. 각 메뉴에서 가장 높은 높이 구하기*/
    
    hig = 0;
    gnbdiv.each(function(){
        temp = parseInt($(this).outerHeight());
        if( hig < temp ) { hig = temp; }
    });

    gnbdiv.show().css('height', hig);
    bg.show().css('height', hig);
    });
    li.on('mouseleave', function(){});
    /*하위 메뉴 감추기 */
    hide_el();
    $('.lang, h1').on('focusIn', function(){});
    /*하위 메뉴 감추기 */
    hide_el();
    });

    /*하위 메뉴를 감추기 위한 함수 정의*/
    function hide_el(){
        gnbdiv.hide().removeAttr('style');
        bg.hide().removeAttr('style');
    }

  });