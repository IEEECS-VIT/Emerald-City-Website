let leaderpage=true;

document.getElementById("leaderimage").addEventListener("click", function() {
    document.getElementById("leaderimage").src = "../img/register/teamleaderactive.svg";
    document.getElementById("memberimage").src = "../img/register/teammemberinactive.svg";
    console.log("leader");
    const teamdetailslabel = document.getElementById("teamdetailslabel");
    teamdetailslabel.innerHTML = "Team Name";
    const joinbtn = document.getElementById("joinbtn");
    joinbtn.src = "../img/register/registerteamleader.svg";
});

document.getElementById("memberimage").addEventListener("click", function() {
    document.getElementById("leaderimage").src = "../img/register/teamleaderinactive.svg";
    document.getElementById("memberimage").src = "../img/register/teammemberactive.svg";
    console.log("member");
    const teamdetailslabel = document.getElementById("teamdetailslabel");
    teamdetailslabel.innerHTML = "Team Referral Code";
    const joinbtn = document.getElementById("joinbtn");
    joinbtn.src = "../img/register/jointeam.svg";
});