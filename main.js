function addUser(){
    player_one_name=document.getElementById("player_one_name_input").value;
    player_two_name=document.getElementById("player_two_name_input").value;

    localStorage.setItem("player_one_name",player_one_name);
    localStorage.setItem("player_two_name",player_two_name);
    window.location="game_page.html";
 }