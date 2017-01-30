/**
 * @author Dhiresh Bhoir
<<<<<<< HEAD
 * @type {Array}ipl_data - All teams data
 * @type {Object}team_data - team data
 * @type {Object}dbRef - Firebase object to fetch data from firebase
 */


var ipl_data = [];
var team_data;
var dbRef = new Firebase("https://ipl-single-page-app.firebaseio.com/");
/*Fetching data from firebase */
dbRef.on("value", function (snapshot) {
    ipl_data = snapshot.val();
    console.log(ipl_data);
    generateAllteamsHTML(ipl_data);//calling generateAllteamsHTML function

});

/**
 * @function generateAllteamsHTML - shows all teams
 * @param {object} data - All teams data
 */
function generateAllteamsHTML(data) {
    /** */
    var list = $('.teams-list');

    var theTemplateScript = $("#teams-template").html();
    //Compile the template​
    var theTemplate = Handlebars.compile(theTemplateScript);
    // list.addClass('visible');
    list.append(theTemplate(data));
=======
 *
 * @type {Array}ipl_data - All teams data
 */
var ipl_data=[];
var team_data;
var dbRef = new Firebase("https://ipl-single-page-app.firebaseio.com/");

dbRef.on("value", function(snapshot) {
    ipl_data=snapshot.val();
    console.log(ipl_data);
    generateAllteamsHTML(ipl_data);

});
/**
 * @function generateAllProductsHTML
 * @param {object} data - All teams data
 */
function generateAllteamsHTML(data){
    /** */
    var list = $('.products-list');

    var theTemplateScript = $("#products-template").html();
    //Compile the template​
    var theTemplate = Handlebars.compile (theTemplateScript);
   // list.addClass('visible');
    list.append (theTemplate(data));
>>>>>>> b5690db790abd458ed2b538a5ff97e78e2550eb8
    $('.main-content .page').addClass('visible');

    list.find('li').on('click', function (e) {
        e.preventDefault();

        var teamIndex = $(this).data('index');
        console.log(teamIndex);

<<<<<<< HEAD
        teamRef = dbRef.child(teamIndex);
        teamRef.on("value", function (snapshot) {
            team_data = snapshot.val();
            $("span").replaceWith("<span></span>");

            /*passing data to modal header*/
            $(".modal-header").find("span").append('<button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title" align="center">' + team_data.team_name + '</h4><hr>\
            <p><div class="col-sm-6"><b>Team Coach : </b>' + team_data.team_coach + '</div><div class="col-sm-6"><b>Team Captain : </b>\
            ' + team_data.team_captain + '</div><div class="col-sm-6"><b>Home Venue : </b>\
            ' + team_data.team_home_venue + '</div><div class="col-sm-6"><b>Team Owner : </b>\
            ' + team_data.team_owner + '</div>');
        });

        teamPlayersRef = teamRef.child('team_players');//contains players data
        teamPlayersRef.on("value", function (snapshot) {
            players_data = snapshot.val();
            console.log(players_data);

            generateAllTeamMembersHTML(players_data);//calling generateAllTeamMembersHTML function
        });
=======
        teamRef=dbRef.child(teamIndex);
        teamRef.on("value", function(snapshot) {
            team_data=snapshot.val();
            $("span").replaceWith("<span></span>");
            $(".modal-header").find("span").append('<button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title" align="center">'+team_data.team_name+'</h4><hr>\
            <p><div class="col-sm-6"><b>Team Coach : </b>'+team_data.team_coach+'</div><div class="col-sm-6"><b>Team Captain : </b>\
            '+team_data.team_captain+'</div><div class="col-sm-6"><b>Home Venue : </b>\
            '+team_data.team_home_venue+'</div><div class="col-sm-6"><b>Team Owner : </b>\
            '+team_data.team_owner+'</div>');
        });

            teamPlayersRef= teamRef.child('team_players');
        teamPlayersRef.on("value", function(snapshot) {
                 players_data=snapshot.val();
             console.log(players_data);
                // $('.modal-body').empty();
             generateAllTeamMembersHTML(players_data);
                // $('#myModal').show();
             });
>>>>>>> b5690db790abd458ed2b538a5ff97e78e2550eb8
    });

}

/**
<<<<<<< HEAD
 *@function generateAllTeamMembersHTML- shows all team players
 * @param data - team players data
 */
function generateAllTeamMembersHTML(data) {

    var list = $('.row');
    var theTemplateScript = $("#players-template").html();
    //Compile the template​
    var theTemplate = Handlebars.compile(theTemplateScript);
    list.append(theTemplate(data));
=======
 *@function generateAllTeamMembersHTML
 * @param data - team players data
 */
function generateAllTeamMembersHTML(data){

    var list = $('.row');
    var theTemplateScript = $("#teams-template").html();
    //Compile the template​
    var theTemplate = Handlebars.compile (theTemplateScript);
    list.append (theTemplate(data));

>>>>>>> b5690db790abd458ed2b538a5ff97e78e2550eb8
}





