

$(document).ready(function() {

    $(".team-x").hide();
    $("#resp-team").show();

    $(".change-team").click(function() {

        $(this).addClass("active-team");
        $(".change-team").removeClass("active-team");

        $(".team-x").hide();
        switch ($(this).data("id-show")) {
            case 'resp': $("#resp-team").show(); break;
            case 'aa':  $("#a-team").show(); break;
            case 'p': $("#p-team").show(); break;
            case 's': $("#s-team").show(); break;
        }
    })

    // TEAM MEMBERS
    let team_members = [
        ["Luca", ["Team Leader", "Team Leader"], "Images/placeholder.jpg", ["#resp-team"]],
        ["Pasquale", ["Lead Designer", "Responsabile Design"], "Images/placeholder.jpg", ["#resp-team"]],
        ["Matteo", ["Lead 2D Artist", "Responsabile Artistico"], "Images/placeholder.jpg", ["#resp-team", "#a-team"]],
        ["Amerigo", ["Lead Programmer", "Responsabile Programmazione"], "Images/placeholder.jpg", ["#resp-team", "#p-team"]],
        ["Matteo", ["Lead Programmer", "Responsabile Programmazione"], "Images/placeholder.jpg", ["#resp-team", "#p-team"]],
        ["Marco", ["Lead Sound & Music Designer", "Responsabile Suono & Musica"], "Images/placeholder.jpg", ["#resp-team", "#s-team"]],
        ["Riccardo", ["Team Member", "Team Member"], "Images/placeholder.jpg", ["#a-team"]],
        ["Juan", ["Team Member", "Team Member"], "Images/placeholder.jpg", ["#a-team"]],
        ["Sara", ["Team Member", "Team Member"], "Images/placeholder.jpg", ["#a-team"]],
        ["Simone", ["Team Member", "Team Member"], "Images/placeholder.jpg", ["#a-team"]],
        ["Samuele", ["Team Member", "Team Member"], "Images/placeholder.jpg", ["#s-team"]],
    ];

    for (let i = 0; i < team_members.length; i++) {
        let member_div = '<div class="team-member">\n' +
                            '<img src="' + team_members[i][2] + '" alt="team-member">\n' +
                            '<h1>' + team_members[i][0] + '</h1>\n' +
                            '<h2 class="en">' + team_members[i][1][0] + '</h2>\n'  +
                            '<h2 class="it">' + team_members[i][1][1] + '</h2>\n' +
                         '</div>';
        for (let j = 0; j < team_members[i][3].length; j++) {
            $(team_members[i][3][j]).append(member_div);
        }

        const urlParams = new URLSearchParams(window.location.search);
        const language = urlParams.get('lang');
        switch (language) {
            case "en":
                changeLanguage(language);
                break;
            case "it":
                changeLanguage(language);
                break;
            default:
                changeLanguage("en");
                break;
        }
    }
});