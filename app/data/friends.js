var friendsArray = [
    {
        name: "John", 
        picture: 'askjdaskdjaskdjn', 
        score: [
            3,
            3,
            2,
            5,
            1,
            4,
            5,
            1,
            3,
            5
        ]
    },
    {
        name: "Zack", 
        picture: 'askjdaskdjaskdjn', 
        score: [
            2,
            3,
            2,
            5,
            1,
            4,
            5,
            1,
            3,
            5
        ]
    },
    {
        name: "Matt", 
        picture: 'askjdaskdjaskdjn', 
        score: [
            4,
            3,
            2,
            5,
            1,
            4,
            5,
            1,
            3,
            5
        ]
    },
    {
        name: "Perfect Match", 
        picture: 'blake-lively.jpg', 
        score: [
           5,
           5,
           5,
           5,
           5,
           5,
           5,
           5,
           5,
           5
        ]
    }
];

module.exports = friendsArray;

// var user = friendsArray[friendsArray.length-1];

// var array = [2, 2, 1, 4, 5, 6];
// var min = Math.min(...array);
// console.log(min);

// var allComparisons = [];
// function findMatch(user){
//     for(let i=0; i < friendsArray.length-1; i++){
//         let difference = 0;
//         console.log(friendsArray[i].score);

//         for (let j=0; j<friendsArray[i].score.length; j++){
//              difference += user.score[j] - friendsArray[i].score[j];
//         }

//         friendsArray[i].matchScore = difference;
//     }

//     var match = friendsArray[0];
//     for(let i=1; i<friendsArray.length-1; i++){
//         if(friendsArray[i].matchScore < match.matchScore){
//             match = friendsArray[i];
//         }
//     }
//     console.log(match);
//     }

// findMatch(user);