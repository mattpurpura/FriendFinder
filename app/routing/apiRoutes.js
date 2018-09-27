var friendData = require("../data/friends.js");

module.exports = function(app){

    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    })

    app.post("/api/friends", function(req, res) {
        friendData.push(req.body);
        var user = req.body;

        for(let i=0; i < friendData.length-1; i++){
            let difference = 0;
            console.log(friendData[i].score);
    
            for (let j=0; j<friendData[i].score.length; j++){
                    difference += user.score[j] - friendData[i].score[j];
            }
    
            friendData[i].matchScore = difference;
        }
        
        var match = friendData[0];
        for(let i=1; i<friendData.length-1; i++){
            if(friendData[i].matchScore < match.matchScore){
                match = friendData[i];
            }
        }

        console.log(match);
        res.json(match);
    })
}