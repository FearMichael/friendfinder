M.AutoInit();

const formButton = $(".formButton");

const sendData = (payload) => {
    $.post("/survey/api/surveyresults", payload);
}

formButton.click(function() {
    event.preventDefault();
    if ($("form select").val() === "") {
        M.toast({html: "Please select an answer for each question"});
    } else if ($("form select").val() != "") {
        let formData = {
            name: $("#name").val().trim(),
            photoLink: $("#photo").val().trim(),
            question1: $("#question1").val().trim(),
            question2: $("#question2").val().trim(),
            question3: $("#question3").val().trim(),
            question4: $("#question4").val().trim(),
            question5: $("#question5").val().trim(),
            question6: $("#question6").val().trim(),
            question7: $("#question7").val().trim(),
            question8: $("#question8").val().trim(),
            questionb9: $("#question9").val().trim(),
            question10: $("#question10").val().trim()
        };
        console.log(formData);
    };
    // sendData(formData);
});

const compareArray = (array1, array2) => {
    
}