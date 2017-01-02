"use strict";var runners_paragraph=document.createElement("div"),game_link_container=document.createElement("div"),game_link_a=document.createElement("a");runners_paragraph.id="gdq-runners-information",game_link_container.id="gdq-link-container",game_link_a.id="gdq-speedrun-link",game_link_a.className="speedrun-link",$(document).ready(function(){function t(){$(".account").after('<div id="twitch-switch"><label for="twitch-player-display" id="twitch-player-display-label">Twitch Player Embed</label></div>'),$("#twitch-switch").append('<input type="checkbox" data-size="mini" name="twitch-player-display">'),$("[name='twitch-player-display']").bootstrapSwitch()}function e(){$(".app").before('\n\t\t\t\t\t\t\t<header id="gdq-header" style="width: '+($(".title-wrap").width()-$(".header-toolbar").width()+10)+"px; height: "+($(".title-wrap").outerHeight()-1)+"px; overflow: hidden; min-height: 48px; position: fixed; top: 0px; left: "+($(".guilds-wrapper").width()+$(".channels-wrap").width())+'px;">\n\t\t\t\t\t\t\t\t<div class="extension-container">\n\t\t\t\t\t\t\t\t\t<div id="options" style="transform: translateY(50%);">\n\t\t\t\t\t\t\t\t\t\t<i class="fa fa-calendar collapsed" data-toggle="collapse" data-target="#collapseCalendar" aria-expanded="false"></i>\n\t\t\t\t\t\t\t\t\t\t<i class="fa fa-refresh" id="settings-icon"></i>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class="game-information">\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div style="clear:both;"></div>\n\t\t\t\t\t\t\t\t\t<div class="collapse" id="collapseCalendar" style="padding-top: 10px; height: 0px;">\n\t\t\t\t\t\t\t\t\t\t<!-- Schedule -->\n\t\t\t\t\t\t\t\t\t\t<p><i class="fa fa-calendar" style="margin-right: 10px;"></i> Next Runs</p>\n\t\t\t\t\t\t\t\t\t\t<table class="table" id="schedule-table" style="border-collapse: collapse;">\n\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</header>\n\t\t\t'),u=$("#gdq-header").css("height"),console.log("Width: "+$("#gdq-header").width()),$(".header-toolbar").css("margin-left","0px"),$(".game-information").append(game_link_container),$("#gdq-link-container").html("<b>Current Game: </b>"),$("#gdq-link-container").append(game_link_a),$(".game-information").append(runners_paragraph),$("#collapseCalendar").on("show.bs.collapse",function(){$("#gdq-header").css("height","auto")}),$("#collapseCalendar").on("hide.bs.collapse",function(){$("#gdq-header").css("height",u)}),b.postMessage({message:"refresh"})}function n(t){"add"==t?(console.log("Switch is on. Adding Twitch iframe and modifying UI."),$(".header-toolbar button:nth-child(3)").hasClass("active")?(g=!0,$(".header-toolbar button:nth-child(3)").click()):g=!1,$("button.active").click(),p=!0,l("add"),$(".app").before('<div id="twitch-container" style="width: '+($(document).width()-$(".guilds-wrapper").width()-$(".messages-wrapper").width())+"px; height: "+($(document).height()-$(".title-wrap").outerHeight()-$("#twitch-switch").outerHeight())+"px; position: fixed; z-index:100; top: "+$(".title-wrap").outerHeight()+"px; left: "+$(".guilds-wrapper").width()+'px;"><iframe id="twitch-embed" src="https://player.twitch.tv/?channel=gamesdonequick" width="100%" height="100%" frameborder="0" scrolling="no" allowFullscreen="true" class="center-block"></iframe></div>')):"remove"==t&&(console.log("Switch is off. Removing Twitch iframe and UI changes."),$("#twitch-container").remove(),p=!1,l("remove"),1==g&&$(".header-toolbar button:nth-child(3)").click())}function a(t){"add"==t?$("#gdq-header").css("display",""):"remove"==t&&$("#gdq-header").css("display","none")}function l(t){console.log("TwitchActive: "+p),"add"==t?(console.log("Rearranging Discord UI"),$(".messages-wrapper").parent().css("align-items","flex-end"),$(".messages-wrapper").css("width","48%"),$(".messages-wrapper").next("form").css({width:"46%","margin-right":"2%","margin-left":"0px"})):"remove"==t&&(console.log("Discord UI returned to normal"),$(".messages-wrapper").parent().removeAttr("style"),$(".messages-wrapper").removeAttr("style"),$(".messages-wrapper").next("form").removeAttr("style"))}function s(t){$("#gdq-runners-information").html(i(t.runner,"header")),$("#gdq-speedrun-link").attr("href",t.link),null!=t.category?$("#gdq-speedrun-link").html(t.game+" ("+t.category+")"):$("#gdq-speedrun-link").html(""+t.game)}function r(t){if(console.log("Calendar updating..."),console.log(t),null!=t){console.log("Calendar not null."),$("#schedule-table tbody").empty();var e="";_.each(t.order,function(n,a){e+=c(t.schedule[n],t.highlights,a+1),console.log(e)}),$("#schedule-table tbody").html(e),console.log("Calendar updated.")}}function i(t,e){var n=_.keys(t),a="by ";if(n.length>2){"table"!=e&&(a="<b>Current Runners: </b>");var l=n.pop(),s=n.pop();$.each(n,function(e,n){a+=o(t,n)+", "}),a+=o(t,s)+" ",a+="and ",a+=o(t,l)}else if(2==n.length){"table"!=e&&(a="<b>Current Runners: </b>");var l=n.pop(),s=n.pop();a+=o(t,s),a+=" and ",a+=o(t,l)}else if(1==n.length){"table"!=e&&(a="<b>Current Runner: </b>");n[0];a+=o(t,n[0])}else console.log("Error no runners."),a="";return a}function o(t,e){return null==t[e].logo?'<a href="https://www.'+t[e].link+'" onclick="window.open(this.href); return false;">'+e+"</a>":'<a href="https://www.'+t[e].link+'" onclick="window.open(this.href); return false;"><img class="runner-logo" src="'+t[e].logo+'" style="width: 14px;"/>'+e+"</a>"}function c(t,e,n){console.log(t),console.log(e);var a=i(t.runner,"table");if(null!=t.category)var l=t.title+" ("+t.category+")";else var l=t.title;if("undefined"==typeof e[t.title]||0==e[t.title])var s="";else{var s="background-color:#555555;";l='<i class="fa fa-star"></i> '+l}var r="<tr style="+s+'>\n\t                                <th scope="row" style="text-align: center;">'+n+'</th>\n\t                                <td>\n\t                                    <a class="speedrun-link" id="next-game-title" href="'+t.link+'" onclick="window.open(this.href); return false;"> '+l+'</a>\n\t                                    <p class="runners-links" id="next-runners-information">'+a+'</p>\n\t                                </td>\n\t                                <td style="text-align: center;">\n\t                                    <p class="text-right"><i class="fa fa-clock-o" aria-hidden="true"></i> '+t.estimate+"</p>\n\t                                </td>\n\t                              </tr>";return r}function d(){b.postMessage({message:"request"})}function h(){b.postMessage({message:"refresh"})}console.log("Hello Discord!"),console.log($(".messages-wrapper"));var g=null,p=!1,u=null,f=document.createElement("style");f.type="text/css",f.textContent="@font-face { font-family: FontAwesome; src: url("+chrome.extension.getURL("/fonts/fontawesome-webfont.woff")+");}",document.head.appendChild(f);var m=document.createElement("link");m.type="text/css",m.href="http://yui.yahooapis.com/pure/0.6.0/pure-min.css",document.head.appendChild(m);var w=setInterval(function(){$(".account").length>0&&($(".guild.selected").has('a[href^="/channels/140605087511740416/"]').length>0||$(".guild.selected").has('a[href^="/channels/85369684286767104/"]').length>0)&&(console.log("Add Switch to Links Panel"),t(),e(),clearInterval(w),$('input[name="twitch-player-display"]').on("switchChange.bootstrapSwitch",function(t,e){console.log("Clicked Twitch Switch."),console.log($("[name='twitch-player-display']").bootstrapSwitch("state")),n($('input[name="twitch-player-display"]').bootstrapSwitch("state")?"add":"remove")}))},1e3),v=setInterval(function(){$(".fa-refresh").length>0&&($(".fa.fa-refresh").click(function(){this.className="fa fa-refresh fa-spin",console.log("Refreshing..."),h();var t=this;console.log(t),setTimeout(function(){t.className="fa fa-refresh",console.log("Refresh complete.")},2e3)}),clearInterval(v))},1e3),y=setInterval(function(){$(".selected").length>0&&($(".guild").on("click",function(){if(p)if($(this).has('a[href^="/channels/140605087511740416/"]').length>0||$(this).has('a[href^="/channels/85369684286767104"]').length>0){$("#twitch-container").css("display","");var t=setInterval(function(){$(".guild-header").length>0&&("GamesDoneQuick"==$(".guild-header header span").text()||"ESA16"==$(".guild-header header span").text())&&(l("add"),clearInterval(t))},500)}else $("#twitch-container").css("display","none"),l("remove");a($(this).has('a[href^="/channels/140605087511740416/"]').length>0||$(this).has('a[href^="/channels/85369684286767104"]').length>0?"add":"remove")}),$(".dms").on("click",function(){a("remove"),p&&($("#twitch-container").css("display","none"),l("remove"))}),clearInterval(y))},1e3),b=chrome.runtime.connect({name:"gdq"});b.postMessage({message:"request"}),b.onMessage.addListener(function(t){"changed"==t.status?(console.log(t),console.log("The Current Game is: "+t.game),$("#gdq-header").length>0&&(s(t),r(t.calendar))):"unchanged"==t.status?console.log("Current game has not changed since last request"):"reload"==t.status&&(console.log("Reload has occurred"),console.log(t),console.log("The Current Game is: "+t.game),$("#gdq-header").length>0&&(s(t),r(t.calendar)))}),setInterval(d,3e5)});
//# sourceMappingURL=discord-contentscript.js.map
