$(document).ready(function() {
  $("form#sides").submit(function(event) {
    event.preventDefault();
    //debugger;

    var sideA = parseInt($("input#sideAA").val());
    //console.log("sideA: " + sideA);
    var sideB = parseInt($("input#sideBB").val());
    var sideC = parseInt($("input#sideCC").val());

    if ((sideA + sideB <= sideC) || (sideA+sideC<=sideB) || (sideC+sideB<=sideA)){
      $("#output").text("Not A Triangle");
    } else if ((sideA === sideB) && (sideA === sideC) && (sideB === sideC)) {
      $("#output").text("Equilateral");
    } else if (sideA===sideB || sideA===sideC || sideC===sideB ) {
      $("#output").text("Isoscelese");
    } else if ((sideA !== sideB) && (sideA !== sideC) && (sideB!== sideC)) {
      $("#output").text("Scalene");
    } else {
      console.log("broken input");
    }
  });
});
