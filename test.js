function scrollText() {
    setInterval(function() {
            scrollAppend($("#vs"));
        }, 1500);
  };
 
  function scrollAppend(obj) {
     var $self = $(".vs-container");
     var lineHeight = $self.find(".vs-content:first-child").height();
    
     $(".vs-content:first-child").addClass("active");
    
      $self.animate({
          "marginTop": -lineHeight + "px"
      }, 300, function() {
          $self.css({
              marginTop: 0
          }).find(".present .active:first-child").appendTo($self);
      })
 }
 
 scrollText();