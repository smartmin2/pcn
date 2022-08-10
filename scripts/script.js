$("ul.gnb li").on("click",function(){
  var idx = $(this).index();
  if (idx > 0)
    $(this).addClass('active').siblings().removeClass('active');
  
  switch (idx) {
    case 1:
      
      break;
    case 2:
      
      break;
    case 3:
      
      break;
    default:
      break;
  }
})

$("ul.tab-box li").on("click",function(){  
  $(this).addClass('active').siblings().removeClass('active');
})
//------------------ Modal --------------------------
$(".modal-open").on('click',function(){
  // $("#modal-background").fadeIn(300);
  $(".modal-con").css("display", "flex").hide().fadeIn();
  $("body").css("overflow", "hidden");
});

$("#modal-background, .close").on('click',function(){
  if ($("#modal-background2").css("display") == "block") return;
  if ($(this).hasClass("close") || !$(this).next().hasClass('modal-progress'))
  {
    $("#modal-background").fadeOut(300);
    $(".modal-con").fadeOut(300);  
    $('body').css('overflow', 'overlay');
  }
});
$("#modal-background2, .close").on('click',function(){
  if ($(this).hasClass("close"))
  {
    $("#modal-background2").fadeOut(300); 
    $(".modal-con2").fadeOut(300);     
  }
});

function loadLeft(sName){
  $('#left-area .left-area-box').load(sName+'.html .modal-'+sName,function(){
    $('#left-area').show();
    // $("#modal-background").fadeIn(100);   
    $('.modal-'+sName).show();
    $("body").css("overflow", "hidden");   

    $(".close").on("click",function(){            
      // if ($("#modal-background2").css("display") == "block") return;            
      // $("#modal-background").fadeOut(300);
      $(".modal-con").fadeOut(300);  
      $('body').css('overflow', 'overlay');   
      $('#left-area').hide();         
    })

    loadEvent();
  });      
  return false;          
}

// modal Event
function loadEvent() {
  // modal-search
  $("ul.tab-box li").on("click",function(){  
    $(this).addClass('active').siblings().removeClass('active');

    var idx = $(this).index();
    
    $('.modal-search ul.result-list li').each(function (index, item) {
      if (idx == 0) $(this).css('display','flex');
      else if (idx-1 == (index%4)) $(this).css('display','flex');
      else  $(this).css('display','none');
    });	
  })

  $(".modal-search .btn-search").on("click",function(){
    $(".modal-search .result-box").css("display","block");
    $(".modal-search .no-data").removeClass("active");
  })

  $(".ic-bookmark").on("click",function(){
    $(this).toggleClass("on");
  })
}

function loadRight(sName){
  $('#right-wrap').load('../'+sName+'.html .modal-'+sName,function(){
    $('#right-wrap').show();
    // $("#modal-background").fadeIn(100);   
    $('.modal-'+sName).show();
    $("body").css("overflow", "hidden");   

    $(".close").on("click",function(){            
      // if ($("#modal-background2").css("display") == "block") return;            
      // $("#modal-background").fadeOut(300);
      $(".modal-con").fadeOut(300);  
      $('body').css('overflow', 'overlay');   
      $('#right-wrap').hide();         
    })
  });      
  return false;          
}

function ModalPopup2(sName){
  $('#modalDlg2').load('../modals/'+sName+'.html .modal-'+sName,function(){
    $('#modalDlg2').show();
    $("#modal-background2").fadeIn(100);   
    $('.modal-'+sName).show();    

    $(".close").on("click",function(){            
      $("#modal-background2").fadeOut(300); 
      $(".modal-con2").fadeOut(300);             
    })
  });      
  return false;          
}


// 장애정보 Rolling 
function ticker() {
  timer = setTimeout(function(){
    $('#ticker li:first').animate( {marginTop: '-40px'}, 1000, function()
    {
      $(this).detach().appendTo('ul#ticker').removeAttr('style');
    });
    ticker();
  }, 2000);         
};           

function tickerover() {
  $('#ticker').mouseover(function(){
    clearTimeout(timer);
  });
  $('#ticker').mouseout(function(){
    ticker();
  });  
};


//--------------------------------------------------------