let leaderPage=true;

function animateSwitch() {
    if (leaderPage) {
        gsap.to("#leaderimage", {opacity: 0.5, duration: 1});
        gsap.to("#memberimage", {opacity: 1, duration: 1});
    } else {
        gsap.to("#leaderimage", {opacity: 1, duration: 1});
        gsap.to("#memberimage", {opacity: 0.5, duration: 1});
    }
}

document.getElementById("leaderimage").addEventListener("click", function() {
    document.getElementById("leaderimage").src = "../img/register/teamleaderactive.svg";
    document.getElementById("memberimage").src = "../img/register/teammemberinactive.svg";
    const teamdetailslabel = document.getElementById("teamdetailslabel");
    teamdetailslabel.innerHTML = "Team Name";
    const joinbtn = document.getElementById("joinbtn");
    joinbtn.src = "../img/register/registerteamleader.svg";

    animateSwitch();
    leaderPage = true;

});

document.getElementById("memberimage").addEventListener("click", function() {
    document.getElementById("leaderimage").src = "../img/register/teamleaderinactive.svg";
    document.getElementById("memberimage").src = "../img/register/teammemberactive.svg";
    const teamdetailslabel = document.getElementById("teamdetailslabel");
    teamdetailslabel.innerHTML = "Team Referral Code";
    const joinbtn = document.getElementById("joinbtn");
    joinbtn.src = "../img/register/jointeam.svg";

    animateSwitch();
    leaderPage = false;
}
);

