game.js

<script type="text/javascript">
    $(document).ready(function() {
      // CREATE THE MISSING CODE HERE. Your code should add content to the random-number div.
    
  $("#random-button").on("click", function() {
  var lottoNumber = "";
  var random = Math.floor(Math.random() * 10);
  $("#random-number").text(random);

  for (var i = 0; i < 9; i++) {
    var random = (Math.floor(Math.random() * 10);
      lottoNumber = random + lottoNumber;
    }
    
    var newDiv = $("<div>");
    newDiv.text = (lottoNumber);
    $("random-number").prepend(newDiv);

      })  

      } 
    
    });
  </script>