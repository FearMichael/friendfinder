const routes = require("express").Router();
const friendsData = require("../data/friendsData")

    routes.post("/api/results", function(req, res) {
    //receive the data from the payload and push to the array
    // console.log(req);
    console.log(req.body);
    var match = {
        name: "",
        pic: "",
        friendDifference: 1000,
    }
    
    friendsData.friendsArr.forEach(function(elem) {
        let currentDiff = 0; //difference to compare to friendDifference to find best match

        console.log("ROUND ONE" + elem.name)
        for (i=0; i<elem.questions.length; i++) {
            diff = Math.abs(Math.abs(parseInt(elem.questions[i]) - parseInt(req.body.questions[i])));
            currentDiff += diff;
        }
        // req.body.questions.forEach(function(elem2) { //loop over each question from the users form
            // console.log("First diff " + currentDiff)
            // elem.questions.forEach(function(elem3) { //get questions from the current item being iterated over
                // console.log(`elem3 ${elem3}`)
                // console.log(typeof elem2);
                // console.log(`elem2 ${elem2}`)
                // let diff = Math.abs(elem2 - elem3); //get absolute difference between the current comparison person and the users form
                // console.log(Math.abs(parseInt(elem2) - parseInt(elem3)));
                // currentDiff += Math.abs(parseInt(elem2) - parseInt(elem3));
                // console.log(`Current diff in func: ${currentDiff}`);
                // console.log("Second diff " + currentDiff)
            // });
            // console.log(`Current diff 1: ${currentDiff}`);
            if (currentDiff < match.friendDifference) {
                console.log("Third diff " + currentDiff)
                // console.log(currentDiff);
                match = {
                    name: elem.name,
                    pic: elem.photoLink,
                    friendDifference: currentDiff
                 }
            } 

        });

    friendsData.friendsArr.push(req.body);
    res.json(match);
    }),

    
    routes.get("/api/results", function(req, res) {
    //determine which friend is a match from the array and update the page
        res.json(friendsData.friendsArr)
        console.log(friendsData.friendsArr)
    });


    // function fine_a_match(comparePerson, arrayOfPeople){
    //         let indexmatch = 0; //The index of the array element that has the most matches
    //         let matchcount = 0;
    //         for(i=0; i<arrayOfPeople.length; i++){
    //             let count = 0 ;
    //             if(arrayOfPeople[i]!=comparePerson)
    //     //         loop through each attribute 
    //                     {
    //                 if(arrayOfPeople[i]->attribute == comparePerson->attribute){
    //                     count++
    //                 }
    //             }
    //             if(count>matchcount){
    //                 indexmatch=i;
    //                 matchcount=count;
    //             }
    //         }
    //         return arrayOfPeople[indexmatch];
    //     }

module.exports = routes;