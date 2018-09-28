var friendsArray = [
    {
        name: "Zeke - could be worse right?", 
        picture: 'http://www.the-college-reporter.com/wp-content/uploads/2016/10/635476464634177906-871350363_Jimmy-tatro.png', 
        score: [
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3
        ]
    },
    {
        name: "Goofy Goober - we can't all be members of the In-Crowd", 
        picture: 'https://img.memecdn.com/im-a-goofy-goober_o_2868251.jpg', 
        score: [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ]
    },
    {
        name: "Blake Lively - you lucky dog", 
        picture: 'https://cdn-img.instyle.com/sites/default/files/styles/622x350/public/images/2016/08/081616-blake-lively-shallows-lead.jpg?itok=X8fTW9a8', 
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