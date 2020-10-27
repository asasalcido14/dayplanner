// use jquery to start function
$(document).ready(function () {
        // identify button to save sBtn
        $(".sBtn").on("click", function () {
            // use prompt and slot variable to provide parameters for local storage
            const prompt = $(this).siblings(".tasks").val();
            const slot = $(this).parent().attr("timestamp");

            // tasks the user wants to save should be stored in local storage 
            localStorage.setItem(slot, prompt);

        });
        // how to include moment w/ the app? 
        // function next

        function inputTime() {
            // each input slot or created task box
            $(".input-group").each(function () {
                // create variable and use parseInt (string to integer) number has id value
                const inputHour = parseInt($(this).attr("id").split("-")[1]);

                if (inputHour < outputHour) {
                    $(this).addClass("past");
                } else if (inputHour === outputHour) {
                    $(this).removeClass("past");
                    $(this).addClass("present");
                } else {
                    $(this).removeClass("past");
                    $(this).removeClass("present");
                    $(this).addClass("future");
                }
            });
        }
        inputTime();

        $("#sixam .tasks").val(localStorage.getItem("sixam"));
        $("#eightam .tasks").val(localStorage.getItem("eightam"));
        $("#tenam .tasks").val(localStorage.getItem("tenam"));
        $("twelve .tasks").val(localStorage.getItem("twelve"));
        $("#two .tasks").val(localStorage.getItem("two"));
        $("#four .tasks").val(localStorage.getItem("four"));
        $("#six .tasks").val(localStorage.getItem("six"));
        $("#eight .tasks").val(localStorage.getItem("eight"));
        $("#ten .tasks").val(localStorage.getItem("ten"));

        $("#updatedDay").text(moment().format("ddd, hA"));



    });

