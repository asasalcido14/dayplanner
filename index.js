// use jquery to start function
$(document).ready(function() {
// identify button to save sBtn
$(".sBtn").on("click", function() {
// use prompt and slot variable to provide parameters for local storage
const prompt = $(this).siblings(".tasks").val();
const slot = $(this).parent().attr("timestamp");

// tasks the user wants to save should be stored in local storage 
localStorage.setItem(slot, prompt);

});
// how to include moment w/ the app? 


}
