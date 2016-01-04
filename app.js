/**
 * Created by prs on 1/4/16.
 */

$(document).ready(getData);

function getData(){
    var person;
    var pString;

    $.ajax("data.json").then(function (response) {
        for (var i = 0; i < response.length; i++) {
            person = response[i];

            pString = "<p id='" + person.id + "'>Name: " + person.first_name + " " + person.last_name;
            pString += "<br>Gender: " + person.gender;
            if (person.hasOwnProperty('email')) pString += "<br>Email: " + person.email + "</p>";

            $('.content').append(pString);
        }
    });
}