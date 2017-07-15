 $(document).ready(function() {
	     //game object

	     var ringMatch = {

	         picked: "",
	         selectionMade: false,

	         charSelected: function() {
	             $("li").on("click", ".btn", function() {
	                     //var picked = $(this).attr("id");
	                     picked = this.id;
	                     //console.log(picked);
	                     selectionMade = true;
	                     var colMd3 = "col-md-3 col-sm-3 col-xs-3";
	                     var colMd4 = "col-md-4 col-sm-4 col-xs-4";



	                     if (selectionMade === true) {
	                         $(".btn, .card-text").remove();
	                         $("p, .charDescript").remove();
	                         console.log(picked);
	                         var selectedID = "";
	                         var notSelectedIDs = [""];

	                         $(charInstructions).text("Choose an Opponent");



	                         if (picked === "trump") {
	                             selectedID = "#1";
	                             $(selectedID).remove();
	                             notSelectedIDs = ["#2", "#3", "#4"];
	                             $(notSelectedIDs).toggleClass(colMd4);
	                             $("#you").attr("src", "https://media.giphy.com/media/CrcVLCRcwXJmg/giphy.gif");
