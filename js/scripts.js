$(document).ready(function() {
  $("img#cat").click(function() {
    $("ul#cat").prepend("<li>Meow!</li>");
    $("ul#dog").prepend("<li>bark back at you!</li>");
    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
    });
  });
  $("img#dog").click(function() {
    $("ul#cat").prepend("<li>Meow back at you!</li>");
    $("ul#dog").prepend("<li>bark! bark!</li>");
    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
    });
  });


})
