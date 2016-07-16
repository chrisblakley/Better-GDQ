"use strict";function retrieveGameTitleList(){$("tr:not(.day-split):not(.second-row) td:nth-child(2)").each(function(){gameArray.push($(this).text())}),$("tr:not(.day-split):not(.second-row) td:nth-child(3)").each(function(){runnerArray.push($(this).text())})}function loadHighlightStorage(){null==localStorage.getItem("scheduleHighlights")?(localStorage.setItem("scheduleHighlights",JSON.stringify({})),storageObj=JSON.parse(localStorage.getItem("scheduleHighlights"))):(storageObj=JSON.parse(localStorage.getItem("scheduleHighlights")),chrome.storage.sync.set({scheduleHighlights:storageObj},function(){console.log("Schedule highlights saved to sync storage")}))}function addHighlights(){$(".text-gdq-black.well").after('<h4 class="text-gdq-black well" id="star-highlight-notice">Clicking the <i class="fa fa-star-o"></i> beside the run will highlight it!<br >Use this to keep track of runs you want to watch.</h4>'),$("tr:not(.day-split):not(.second-row) td:nth-child(1)").each(function(e){$(this).html('<input type="checkbox" class="highlight-run" name="checkbox" id="theater-mode'+e+'"> <label for="theater-mode'+e+'">'+$(this).text()+"</label>");var t=$(this);$("#theater-mode"+e).change(function(){if($(this).is(":checked")){t.parent().css("background-color","#F0E68C"),t.parent().next(".second-row").css("background-color","#F0E68C");var e=getGameTitleString(t.next("td").text());storageObj[e]=!0,chrome.storage.sync.set({scheduleHighlights:storageObj},function(e){console.log("Schedule highlights updated and saved to sync storage")}),localStorage.setItem("scheduleHighlights",JSON.stringify(storageObj)),console.log("Starred and highlighted "+e+" on the schedule")}else{t.parent().css("background-color","#FFFFFF"),t.parent().next(".second-row").css("background-color","#FFFFFF");var e=getGameTitleString(t.next("td").text());storageObj[e]=!1,localStorage.setItem("scheduleHighlights",JSON.stringify(storageObj)),chrome.storage.sync.set({scheduleHighlights:storageObj},function(){console.log("Schedule highlights updated")}),console.log("Removed the star and highlight for "+e+" on the schedule")}}),1==storageObj[t.next("td").text()]&&$("#theater-mode"+e).prop("checked",!0).change()})}function addBidWars(){console.log("Starting to add bid war indications"),$("#star-highlight-notice").before('<h4 class="text-gdq-black well"><a href="https://gamesdonequick.com/tracker/bids/sgdq2016">Donation Incentives Bid War Tracker</a></h4>')}function addMarioMakerLink(){console.log("Adding Super Mario Maker Link"),$("#star-highlight-notice").before('<h4 class="text-gdq-black well" id="gdq-mario-maker-levels"><a href="https://makersofmario.com/worlds/view/547">SGDQ Super Mario Maker Levels!</a></h4>')}function addRunnerLinks(){console.log("Adding Runners"),$.getJSON(chrome.extension.getURL("/json/sgdq_runners.json")).done(function(e){console.log(e);var t=e;$.each(runnerArray,function(e,n){$("tr:not(.day-split):not(.second-row) td:nth-child(3):contains("+n+")").each(function(e,o){var a=n.split(", "),r={};console.log(n),$.each(a,function(e,n){r[n]=t[n]}),$(this).html(generateFormattedRunnerString(r,"table"))})})})}function generateFormattedRunnerString(e,t){var n=_.keys(e),o="by ";if("table"==t&&(o=""),n.length>2){var a=n.pop(),r=n.pop();$.each(n,function(n,a){o+=generateRunnerElement(e,a,t)+", "}),o+=generateRunnerElement(e,r,t)+" ",o+="and ",o+=generateRunnerElement(e,a,t)}else if(2==n.length){var a=n.pop(),r=n.pop();o+=generateRunnerElement(e,r,t),o+=" and ",o+=generateRunnerElement(e,a,t)}else if(1==n.length){n[0];o+=generateRunnerElement(e,n[0],t)}else console.log("Error no runners."),o="";return o}function generateRunnerElement(e,t,n){return"table"==n?null==e[t].logo?'<a href="'+e[t].link+'" onclick="window.open(this.href); return false;">'+t+"</a>":'<a href="'+e[t].link+'" onclick="window.open(this.href); return false;">'+t+"</a>":null==e[t].logo?'<a href="'+e[t].link+'" onclick="window.open(this.href); return false;">'+t+"</a>":'<a href="'+e[t].link+'" onclick="window.open(this.href); return false;"><img class="runner-logo" src="'+e[t].logo+'" />'+t+"</a>"}function addVodLinks(){console.log("Starting to add links"),$("td:contains(Super Mario World):first").text("Super Mario World Race"),$("td:contains(The Legend of Zelda: Ocarina of Time)").eq(1).text("The Legend of Zelda: Ocarina of Time Glitch Exhibition"),$.getJSON("https://gist.githubusercontent.com/theoriginalcamper/30bddc447895b64988412671cfc12898/raw/sgdq2016-vod.json").done(function(e){console.log(e);var t=_.keys(e);console.log(t),$.each(t,function(t,n){var o=generateVodString(n,e);$("tr:not(.day-split):not(.second-row) td:nth-child(2)").filter(function(e){return $(this).text()==n}).html(o)}),console.log("Done")})}function generateVodString(e,t){var n="https://www.twitch.tv/gamesdonequick/v/"+t[e]["video-link"]+"?t="+t[e].time;if("undefined"!=typeof t[e].youtube){var o=t[e].youtube;return e+' - <i class="fa fa-check"></i> COMPLETED <a href="'+n+'" class="vod-link"><i class="fa fa-twitch"></i></a> <a href="'+o+'" class="vod-link"><i class="fa fa-youtube"></i></a>'}return'<a href="'+n+'" class="vod-link">'+e+' - <i class="fa fa-check"></i> COMPLETED <i class="fa fa-twitch"></i> Twitch Only</a>'}function getGameTitleString(e){if(e.includes("COMPLETED"))var t=e.split(" - ")[0];else var t=e;return t}var gameArray=[],runnerArray=[],storageObj=null;$(document).ready(function(){retrieveGameTitleList(),loadHighlightStorage(),addHighlights(),addRunnerLinks(),addVodLinks(),addBidWars(),addMarioMakerLink()});
//# sourceMappingURL=vod-contentscript.js.map