 $(document).ready(function() {

        $("button").click(function(){})
         
        $("h1").animate({
          fontSize: "6em"
        }, 1000, function() {
        
          $("h1").css("color", "orange",) 
          $("h1").animate({
            fontSize: "3em", color: "black"
          }, 1000);
        });
      
      });
