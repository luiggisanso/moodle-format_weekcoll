var toggleBinaryGlobal="10000000000000000000000000000000000000000000000000000";var thesparezeros="00000000000000000000000000";var thewwwroot;var thecookiesubid;var yuicookie=YAHOO.util.Cookie;var numToggles;var currentWeek;function weekcoll_init(d,a,c){thewwwroot=d;thecookiesubid=a+c;var b=document.createElement("link");b.setAttribute("rel","stylesheet");b.setAttribute("type","text/css");b.setAttribute("href",""+thewwwroot+"/course/format/weekcoll/js-override-weekcoll.css");document.getElementsByTagName("head")[0].appendChild(b)}function set_number_of_toggles(a){numToggles=a}function set_current_week(a){currentWeek=a}function togglebinary(c,b){if((c>=1)&&(c<=52)){var e=toggleBinaryGlobal.substring(0,c);var a=toggleBinaryGlobal.substring(c+1);var d=e+b+a;toggleBinaryGlobal=d;save_toggles()}}function toggleexactweek(g,f,d,b){if((document.getElementById)&&((g!=null)&&(f!=null))){if(navigator.userAgent.indexOf("IE")!=-1){var a="block"}else{var a="table-row"}if(g.style.display==a){g.style.display="none";var c="hidden";f.style.backgroundImage="url("+thewwwroot+"/course/format/weekcoll/arrow_down.png)";if(b==false){togglebinary(d,"0")}}else{g.style.display=a;var c="visible";f.style.backgroundImage="url("+thewwwroot+"/course/format/weekcoll/arrow_up.png)";if(b==false){togglebinary(d,"1")}}if(navigator.userAgent.indexOf("IE")!=-1){var e=g.getElementsByTagName("embed");if(e[0]!=null){e[0].style.visibility=c}}}}function toggle_week(b,a){if(document.getElementById){imageSwitch=b;targetElement=b.parentNode.parentNode.nextSibling;if(targetElement.className==undefined){targetElement=b.parentNode.parentNode.nextSibling.nextSibling}toggleexactweek(targetElement,imageSwitch,a,false)}}function to2baseString(c){var e=parseInt(c.substring(0,6),36);var b=parseInt(c.substring(6,12),36);var d=e.toString(2);var a=b.toString(2);if(d.length<26){d=thesparezeros.substring(0,(26-d.length))+d}if(a.length<27){a=thesparezeros.substring(0,(27-a.length))+a}return d+a}function to36baseString(b){var e=parseInt(b.substring(0,26),2);var c=parseInt(b.substring(26,53),2);var d=e.toString(36);var a=c.toString(36);if(d.length<6){d=thesparezeros.substring(0,(6-d.length))+d}if(a.length<6){a=thesparezeros.substring(0,(6-a.length))+a}return d+a}function saveweekcollcookie(a){yuicookie.setSub("mdl_cf_weekcoll",thecookiesubid,a)}function restoreweekcollcookie(){return yuicookie.getSub("mdl_cf_weekcoll",thecookiesubid)}function reload_toggles(){var b=restoreweekcollcookie();if(b!=null){toggleBinaryGlobal=to2baseString(b)}for(var a=1;a<=numToggles;a++){if((a<=numToggles)&&((toggleBinaryGlobal.charAt(a)=="1")||(a==currentWeek))){toggleexactweek(document.getElementById("section-"+a),document.getElementById("sectionatag-"+a),a,true)}}}function show_week(a){toggleexactweek(document.getElementById("section-"+a),document.getElementById("sectionatag-"+a),a,true)}function save_toggles(){saveweekcollcookie(to36baseString(toggleBinaryGlobal))};