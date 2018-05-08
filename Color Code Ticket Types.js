// ==UserScript==
// @name         Color Code Ticket Types
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Color code the tickets based on types in the queue
// @author       Luke Miletta
// @match        https://oregonstate.teamdynamix.com/TDNext/Home/Desktop/*
// @grant        none
// ==/UserScript==

window.setTimeout(items, 1500);
var open_box;
var button1;

function items(){
    var boxes = document.getElementsByClassName("report-module");
    for (var i = 0; i < boxes.length; i++) {
        if((((boxes[i].childNodes)[0]).childNodes)[0].textContent == 'SD - open, unassigned (Incidents, Service Requests)'){
            open_box = boxes[i];
        }
    }
    var iii =(((open_box.childNodes)[0]).childNodes)[1];
    console.log(iii);

    // 1. Create the button
    button1 = document.createElement("i");
    button1.innerHTML = "Toggle Color";
    button1.setAttribute("class", "fa fa-lg gutter-left-xs");
    button1.setAttribute("title", "Toggle Color");
    button1.setAttribute("id", "toggle-button");
    button1.setAttribute("style", "border-style: solid; padding: 5px; border-width: 1px; border-radius: 5px;");

    // 2. Append somewhere
    iii.appendChild(button1);
    iii.insertBefore(button1, iii.firstChild);
    
    // 3. Add event handler
    button1.addEventListener ("click", click_form_button);

    // Function that handles click of form button
    function click_form_button(){
       var tickets = ((((((open_box.childNodes)[1]).childNodes)[1]).childNodes)[3]);
       tickets = tickets.children;
       if(button1.getAttribute("style") == "border-style: solid; padding: 5px; border-width: 1px; border-radius: 5px;"){
           button1.setAttribute("style", "border-style: solid; padding: 5px; border-width: 1px; border-radius: 5px; background-color: #2b2b2b; color: #f5f5f5;");
            for(i = 0; i < tickets.length; i++){
                if(((tickets[i].children)[4].innerHTML) == "Open"){
                    tickets[i].setAttribute("style", "background-color: grey;");
                }
                else if(((tickets[i].children)[4].innerHTML) == "In Process"){
                    tickets[i].setAttribute("style", "background-color: blue;");
                }
                else if(((tickets[i].children)[4].innerHTML) == "New"){
                    tickets[i].setAttribute("style", "background-color: red;");
                }
                else if(((tickets[i].children)[4].innerHTML) == "Escalated - Internal"){
                    tickets[i].setAttribute("style", "background-color: black;");
                }
            }
       }
       else{
           button1.setAttribute("style", "border-style: solid; padding: 5px; border-width: 1px; border-radius: 5px;");
            for(i = 0; i < tickets.length; i++){
                if(((tickets[i].children)[4].innerHTML) == "Open"){
                    tickets[i].setAttribute("style", "");
                }
                else if(((tickets[i].children)[4].innerHTML) == "In Process"){
                    tickets[i].setAttribute("style", "");
                }
                else if(((tickets[i].children)[4].innerHTML) == "New"){
                    tickets[i].setAttribute("style", "");
                }
                else if(((tickets[i].children)[4].innerHTML) == "Escalated - Internal"){
                    tickets[i].setAttribute("style", "");
                }
            }
       }
    }

    // Listens for click of next page buttons
    var next_page = document.getElementsByClassName("pager-link");
    for(i = 0; i < next_page.length; i++){
        next_page[i].addEventListener ("click", click_page_button);
    }
}

function click_page_button(){
    // Listens for click of next page buttons
    window.setTimeout(reee, 750);
    function reee(){
        var next_page = document.getElementsByClassName("pager-link");
        for(var i = 0; i < next_page.length; i++){
            next_page[i].addEventListener ("click", click_page_button);
        }


        var tickets = ((((((open_box.childNodes)[1]).childNodes)[1]).childNodes)[3]);
        tickets = tickets.children;
        if(button1.getAttribute("style") === "border-style: solid; padding: 5px; border-width: 1px; border-radius: 5px;"){
            for(i = 0; i < tickets.length; i++){
                if(((tickets[i].children)[4].innerHTML) == "Open"){
                    tickets[i].setAttribute("style", "");
                }
                else if(((tickets[i].children)[4].innerHTML) == "In Process"){
                    tickets[i].setAttribute("style", "");
                }
                else if(((tickets[i].children)[4].innerHTML) == "New"){
                    tickets[i].setAttribute("style", "");
                }
                else if(((tickets[i].children)[4].innerHTML) == "Escalated - Internal"){
                    tickets[i].setAttribute("style", "");
                }
            }
        }
        else{
            for(i = 0; i < tickets.length; i++){
                if(((tickets[i].children)[4].innerHTML) == "Open"){
                    tickets[i].setAttribute("style", "background-color: grey;");
                }
                else if(((tickets[i].children)[4].innerHTML) == "In Process"){
                    tickets[i].setAttribute("style", "background-color: blue;");
                }
                else if(((tickets[i].children)[4].innerHTML) == "New"){
                    tickets[i].setAttribute("style", "background-color: red;");
                }
                else if(((tickets[i].children)[4].innerHTML) == "Escalated - Internal"){
                    tickets[i].setAttribute("style", "background-color: black;");
                }
            }
        }
    }
}