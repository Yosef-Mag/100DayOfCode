$(function() {
    const select = $(".typeOfCoffe");
    const mug = $(".mug");
    const straw = $(".straw");
    
    const drinks = [
      ["coffe name", "espresso", "chocolate", "water", "milk", "foam"],
      ["please choose a type", 0, 0, 0, 0, 0],
      ["espresso", 20, 0, 0, 0, 0],
      ["macchiato", 40, 0, 0, 0, 15],
      ["americano", 20, 0, 80, 0, 0],
      ["cappucino", 40, 0, 0, 40, 20],
      ["latte", 40, 0, 0, 60, 10],
      ["flat white", 40, 0, 0, 60, 0],
      ["mocha", 30, 10, 0, 60, 0]
    ];
    
    for (var i = 1; i < drinks.length; i++) {
      const addOptions = $("<option>" + drinks[i][0] + "</option>").appendTo(
        select
      );
    }
    
    select.on("change", function () {
      let selectedOption = $("option:selected").text();
    
      for (var i = 1; i < drinks.length; i++) {
        if (selectedOption == drinks[i][0])
          for (var j = 1; j < drinks[0].length; j++)
            $("." + drinks[0][j])
              .css("height", drinks[i][j] + "%")
              .css("opacity", 1);
    
        if (selectedOption == "latte") mug.addClass("mug--latte");
        else mug.removeClass("mug--latte");
      }
    });
})

