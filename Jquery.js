$(document).ready(function(){
    $("#ShowTable").click(function(){
      $("#Table").load("TopSongs.html", function(responseTxt, statusTxt, xhr){
        /*
        if(statusTxt == "success")
          alert("External content loaded successfully!");
        if(statusTxt == "error")
          alert("Error: " + xhr.status + ": " + xhr.statusText);
          */
      });
    });
  
    $("#SortChart").click(function(){
      $("#Table").load("TopSongsChart.html", function(responseTxt, statusTxt, xhr){
        /*
        if(statusTxt == "success")
          alert("External content loaded successfully!");
        if(statusTxt == "error")
          alert("Error: " + xhr.status + ": " + xhr.statusText);
          */
      });
    });

    $("#SortYear").click(function(){
      $("#Table").load("TopSongsYear.html", function(responseTxt, statusTxt, xhr){
        /*
        if(statusTxt == "success")
          alert("External content loaded successfully!");
        if(statusTxt == "error")
          alert("Error: " + xhr.status + ": " + xhr.statusText);
          */
      });
    });

    $("#SortView").click(function(){
      $("#Table").load("TopSongsView.html", function(responseTxt, statusTxt, xhr){
        /*
        if(statusTxt == "success")
          alert("External content loaded successfully!");
        if(statusTxt == "error")
          alert("Error: " + xhr.status + ": " + xhr.statusText);
          */
      });
    });
});

$(document).ready(function(){
    $("#Remove").click(function(){
     $("#Table").empty();
   });
});


