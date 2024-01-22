// Add new player
let PlayerList = [];

function add_player(event){

    event.preventDefault();

    const playerList = document.getElementById("player-list");

    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const country = document.getElementById("country").value;
    const score = document.getElementById("score").value;

    const liEl = document.createElement("li");
    const nameContent = document.createElement("span");
    const countryContent = document.createElement("span");
    const scoreContent = document.createElement("span");

    const playerData = {
        name: firstName + " " + lastName,
        country: country,
        score: Number(score)
    }

    PlayerList.push(playerData);
    PlayerList.sort((player1, player2) => parseInt(player2.score) - parseInt(player1.score))

    playerList.innerHTML = "";

    for (let index = 0; index < PlayerList.length; index++) {
        const player = PlayerList[index];

        const liEl = document.createElement("li");
        const nameContent = document.createElement("span");
        const countryContent = document.createElement("span");
        const scoreContent = document.createElement("span");

        const increaseScore = document.createElement("plus-btn");
        const decreaseScore = document.createElement("min-btn");
        const del = document.createElement("del-btn");

        increaseScore.innerText = "+5";
        decreaseScore.innerText = "-5";
        del.innerText = "🗑";

        increaseScore.setAttribute("onclick", `increaseScoreHandler(${index})`);
        decreaseScore.setAttribute("onclick", `decreaseScoreHandler(${index})`);
        del.setAttribute("onclick",`del(${index})`);

        // del.addEventListener("click", function(){
        //     let remove = document.querySelector("remove");
        //     liEl.remove();
        // });
        

        nameContent.innerText = player.name;
        countryContent.innerText = player.country;
        scoreContent.innerText = player.score;
    
        liEl.append(nameContent, countryContent, scoreContent, increaseScore, decreaseScore, del);
        playerList.append(liEl);
    }

}

// Update PlayerList

function refreshList(){

    const playerList = document.getElementById("player-list");

    PlayerList.sort((player1, player2) => parseInt(player2.score) - parseInt(player1.score));

    playerList.innerHTML = "";

    for (let index = 0; index < PlayerList.length; index++) {
        const player = PlayerList[index];

        const liEl = document.createElement("li");
        const nameContent = document.createElement("span");
        const countryContent = document.createElement("span");
        const scoreContent = document.createElement("span");

        const increaseScore = document.createElement("plus-btn");
        const decreaseScore = document.createElement("min-btn");
        const del = document.createElement("del-btn");
        

        increaseScore.innerText = "+5";
        decreaseScore.innerText = "-5";
        del.innerText = "🗑";
        

        increaseScore.setAttribute("onclick", `increaseScoreHandler(${index})`);
        decreaseScore.setAttribute("onclick", `decreaseScoreHandler(${index})`);
        del.setAttribute("onclick",`del(${index})`);
        
      

        nameContent.innerText = player.name;
        countryContent.innerText = player.country;
        scoreContent.innerText = player.score;
    
        liEl.append(nameContent, countryContent, scoreContent, increaseScore, decreaseScore, del);
        playerList.append(liEl);
    }
}

function increaseScoreHandler(index){
    PlayerList[index].score += 5;
    refreshList();
}

function decreaseScoreHandler(index){
    PlayerList[index].score -= 5;
    refreshList();
}

function del (index){
    // let remove = document.querySelector("remove");
    // liEl.remove();
    PlayerList.splice(index, 1);
    refreshList();

    console.log(PlayerList);
};
