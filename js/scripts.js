$(document).ready(function(){
  $("form#sides").submit(function(event){
    event.preventDefault();
    debugger;
    var sideA = parseInt($("#sideAA"));
    var sideB = parseInt($("#sideBB"));
    var sideC = parseInt($("#sideCC"));

    if ((sideA+sideB<sideC || sideA+sideC<sideB || sideC+sideB<sideA)){
      $("#output").text("Not A Triangle")
    } else if (sideA === sideB && sideA === sideC && sideB === sideC) {
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
