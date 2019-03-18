
const formButton = $(".formButton");
M.AutoInit();

formButton.click(function() {
    event.preventDefault();
    if ($("form select").val() == "") {
        M.toast({html: "Please select an answer for each question"});
    } else if ($("form select").val() != "") {
        let formData = {
            name: $("#name").val().trim(),
            photoLink: $("#photo").val().trim(),
            questions: [
            parseInt($("#question1").val().trim()),
            parseInt($("#question2").val().trim()),
            parseInt($("#question3").val().trim()),
            parseInt($("#question4").val().trim()),
            parseInt($("#question5").val().trim()), 
            parseInt($("#question6").val().trim()), 
            parseInt($("#question7").val().trim()), 
            parseInt($("#question8").val().trim()), 
            parseInt($("#question9").val().trim()), 
            parseInt($("#question10").val().trim())
            ]
        };

        $.post("/api/results", formData, function(data) {
            console.log("Hi there data!");
            console.log(data);
            $("#matchHeader").text(data.name);
            $("#matchDiff").text(data.friendDifference)
            $("#matchPic").attr("src", data.pic);
            $('.modal').modal("open");
        })
        // console.log(formData);
        // $.ajax({
        //     url: "/api/results",
        //     type: "post",
        //     data: formData,
        //     headers: {formInfo: "formInfo"},
        //     dataType: 'json'
        // }, function(data) {
        //     console.log("Hi there data!")
        //     console.log(data)
        //     $("#matchHeader") = data.name;
        //     $("#matchDiff") = data.friendDifference;
        //     $("#matchPic").attr("src", data.pic);
        //     $('#modal').openModal();
        // })
    };
});