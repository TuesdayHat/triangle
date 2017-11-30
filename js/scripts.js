$(document).ready(function(){
  $("form#sides").submit(function(event){
    event.preventDefault();

    var sideA = parseInt($("#sideA"));
    var sideB = parseInt($("#sideB"));
    var sideC = parseInt($("#sideC"));

    if ((sideA+sideB<sideC || sideA+sideC<sideB || sideC+sideB<sideA){
      $("#output").text("Not A Triangle")
    } else if (sideA === sideB === sideC) {
      $("#output").text("Equilateral")
    } else if (sideA===sideB || sideA===sideC || sideC===sideB ) {
      $("#output").text("Isoscelese")
    } else if (sideA !== sideB !== sideC) {
      $("#output").text("Scalene")
    } else {
      console.log("broken input");
    }
  });
});
