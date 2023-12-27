const width_threshold = 1038;
function flex_main() {
  $('#main').css(
    'flex-direction',
    $( window ).width() < width_threshold ?
      'column' : 'row'
  );

  $("#members").css({
    'width': $( window ).width() < width_threshold ? '100%' : '50%',
    'height': $( window ).width() < width_threshold ? '50%' : '100%'
  });

  $("#updates").css({
    'width': $( window ).width() < width_threshold ? '100%' : '50%',
    'height': $( window ).width() < width_threshold ? '50%' : '100%'
  });
}

$( window ).resize( function() {
  flex_main();

  var popup = document.getElementById("popup");
  if( popup ) {
    popup.setAttribute( "style",
      "top: " + $("#members_table").position().top + "px;" +
      "left: " + $("#members_table").position().left + "px;" +
      "width: " + $("#members_table").width() + "px;" +
      "height: " + $("#members_table").height() + "px;"
    );
  }

  var blogup = document.getElementById("blogup");
  if( blogup ) {
    blogup.setAttribute( "style",
      "top: " + $("#updates_list").position().top + "px;" +
      "left: " + $("#updates_list").position().left + "px;" +
      "width: " + $("#updates_list").width() + "px;" +
      "height: " + $("#updates_list").height() + "px;"
    );
  }
});

$( document ).ready( function() {
  flex_main();

  var fade = function() {
    $('#jap').fadeTo( 1000, .3 ).fadeTo( 1000, .8, fade );
  };

  fade();
});

$("#members_table").on("click", "td", function(e) {
  if( document.getElementById("popup") )
    document.getElementById("popup").remove();

  const members = document.getElementById("members");
  var id = $(this).attr('id');

  var popup = document.createElement("div");
  popup.setAttribute("id", "popup");

  popup.setAttribute( "style",
    "top: " + $("#members_table").position().top + "px;" +
    "left: " + $("#members_table").position().left + "px;" +
    "width: " + $("#members_table").width() + "px;" +
    "height: " + $("#members_table").height() + "px;"
  );

  var close = document.createElement("div");
  close.innerHTML = '<i class="fa-regular fa-circle-left"></i>';
  close.setAttribute( "id", "close" );
  close.setAttribute( "style",
    "top: 10px;" +
    "right: 10px;"
  );
  close.setAttribute( "onclick", "document.getElementById('popup').remove();" );
  popup.appendChild( close );

  var title = document.createElement("p");
  title.innerHTML = id;

  var content = document.createElement("div");
  content.setAttribute( "style",
    "top: 10%;" +
    "left: 10%;" +
    "width: 80%;" +
    "display: flex;" +
    "position: relative;" +
    "flex-direction: column;"
  );

  

  switch( id ) {
    case "players": {
      content.innerHTML = '' +
        '<div class="member">akio<div class="member_links"><img src="./img/akiopfp.webp"><a href="https://www.instagram.com/h6116w66n/" target="_blank"><img src="./img/app_insta.webp"></a><a href="https://payhip.com/akio" target="_blank"><img src="./img/app_payhip.webp"></a><a href="https://steamcommunity.com/profiles/76561198884485931" target="_blank"><img src="./img/app_steam.webp"></a><a href="https://twitter.com/meltededen" target="_blank"><img src="./img/app_twit.webp"></a><a href="https://www.youtube.com/channel/UCzJIiyufvkc3faqDDkOD2HQ" target="_blank"><img src="./img/app_yt.webp"></a></div></div><br>' +
        '<div class="member">akullz<div class="member_links"><img src="./img/akullzpfp.webp"><a href="https://open.spotify.com/playlist/0ejDP1SpkFXhz5nm401vyk?si=62eb17fe57ea48d8&nd=1" target="_blank"><img src="./img/app_spotify.webp"></a><a href="http://steamcommunity.com/profiles/76561199075611081" target="_blank"><img src="./img/app_steam.webp"></a><a href="https://www.youtube.com/channel/UCChylFP5UCYbpkV2p_7tQhg" target="_blank"><img src="./img/app_yt.webp"></a></div></div><br>' +
        '<div class="member">anti<div class="member_links"><img src="./img/antipfp.webp"><a href="https://steamcommunity.com/profiles/76561198162518373" target="_blank"><img src="./img/app_steam.webp"></a><a href="https://www.youtube.com/channel/UCT6zgIyemKPqRZJGPe3nLCQ" target="_blank"><img src="./img/app_yt.webp"></a><a href="https://www.youtube.com/channel/UCRIvV9WeSy65YZetbcGK8eg" target="_blank"><img src="./img/app_yt.webp"></a></div></div><br>' +
        '<div class="member">ayika<div class="member_links"><img src="./img/ayikapfp.webp"><a href="https://soundcloud.com/w7u" target="_blank"><img src="./img/app_sc.webp"></a><a href="http://steamcommunity.com/profiles/76561198836464549" target="_blank"><img src="./img/app_steam.webp"></a><a href="https://twitter.com/halfmac_" target="_blank"><img src="./img/app_twit.webp"></a><a href="https://www.youtube.com/channel/UCx6_sI5jqt8qLJUh-rl0uKQ" target="_blank"><img src="./img/app_yt.webp"></a></div></div><br>' +
        '<div class="member">awhu<div class="member_links"><img src="./img/awhupfp.webp"><a href="https://steamcommunity.com/profiles/76561199139835825" target="_blank"><img src="./img/app_steam.webp"></a><a href="https://www.youtube.com/channel/UC03QqoP4T7nShlf_WGEMpcg" target="_blank"><img src="./img/app_yt.webp"></a></div></div><br>' +
        '<div class="member">cool dino<div class="member_links"><img src="./img/cooldinopfp.webp"><a href="https://steamcommunity.com/profiles/76561202255233023" target="_blank"><img src="./img/app_steam.webp"></a><a href="https://www.youtube.com/channel/UCGrORyLemI6bG0_cpwZqt0A" target="_blank"><img src="./img/app_yt.webp"></a></div></div><br>' +
        '<div class="member">day<div class="member_links"><img src="./img/daypfp.webp"><a href="https://kuso.day" target="_blank"><img src="./img/app_kusoday.ico"></a><a href="https://steamcommunity.com/profiles/76561198278746913" target="_blank"><img src="./img/app_steam.webp"></a><a href="https://www.youtube.com/channel/UCVcRuqOKisnTGI9MrLtTKLQ" target="_blank"><img src="./img/app_yt.webp"></a></div></div><br>' +
        '<div class="member">izayah<div class="member_links"><img src="./img/izayahpfp.webp"><a href="http://steamcommunity.com/profiles/76561198372882183" target="_blank"><img src="./img/app_steam.webp"></a><a href="https://www.youtube.com/channel/UCdMB0gPgDbJhn-nF2aaedgw" target="_blank"><img src="./img/app_yt.webp"></a><a href="https://www.youtube.com/channel/UCjJ_Sl7cecgwenbh_L42fgQ" target="_blank"><img src="./img/app_yt.webp"></a><a href="https://www.youtube.com/channel/UCYJf_3cDjYF9TikWeMMBX4g" target="_blank"><img src="./img/app_yt.webp"></a></div></div><br>';
    } break;
    case "artists": {
      content.innerHTML = '' +
        '<div class="member">akidra<div class="member_links"><img src="./img/akidrapfp.webp"><a href="https://soundcloud.com/asxcluzive" target="_blank"><img src="./img/app_sc.webp"></a><a href="https://steamcommunity.com/profiles/76561198873629095" target="_blank"><img src="./img/app_steam.webp"></a><a href="https://youtube.com/channel/UCTWtVfm8ttKLcRZP5qYKTMg/" target="_blank"><img src="./img/app_yt.webp"></a><a href="https://youtube.com/channel/UCAiymfIPkG8oVMhSOFWAY5w" target="_blank"><img src="./img/app_yt.webp"></a></div></div><br>' +
        '<div class="member">hayaku<div class="member_links"><img src="./img/hayakupfp.webp"><a href="https://instagram.com/kuso.tru" target="_blank"><img src="./img/app_insta.webp"></a><a href="https://soundcloud.com/kusoclan" target="_blank"><img src="./img/app_sc.webp"></a></div></div><br>' +
        '<div class="member">joe<div class="member_links"><img src="./img/joepfp.webp"><a href="https://linktr.ee/JoeCorinth" target="_blank"><img src="./img/app_linktree.webp"></a></div></div><br>' +
        '<div class="member">oya<div class="member_links"><img src="./img/oyapfp.webp"><a href="https://www.instagram.com/zayzayb/" target="_blank"><img src="./img/app_insta.webp"></a><a href="https://soundcloud.com/kusoclan" target="_blank"><img src="./img/app_sc.webp"></a><a href="https://www.youtube.com/channel/UCesMEd834DuHBjSD4CAnQ7A" target="_blank"><img src="./img/app_yt.webp"></a></div></div><br>' +
        '<div class="member">tofu<div class="member_links"><img src="./img/tofupfp.webp"><a href="https://www.instagram.com/the.anon.og/" target="_blank"><img src="./img/app_insta.webp"></a><a href="https://www.instagram.com/citybombingmonsters/" target="_blank"><img src="./img/app_insta.webp"></a><a href="https://youtube.com/channel/UCn-0WaMSGaKrWRS4kF86Qlg" target="_blank"><img src="./img/app_yt.webp"></a></div></div><br>';
    } break;
    case "cars": {
      content.innerHTML = '' +
        '<div class="member">day<div class="member_links">2003 Lexus IS300</div></div><br>' +
        '<div class="member">oya<div class="member_links">1994 Lexus LS400</div></div><br>';
    } break;
    case "management": {
      content.innerHTML = '' +
        '<div class="member">anti<div class="member_links"><img src="./img/antipfp.webp"><a href="https://steamcommunity.com/profiles/76561198162518373" target="_blank"><img src="./img/app_steam.webp"></a><a href="https://www.youtube.com/channel/UCT6zgIyemKPqRZJGPe3nLCQ" target="_blank"><img src="./img/app_yt.webp"></a><a href="https://www.youtube.com/channel/UCRIvV9WeSy65YZetbcGK8eg" target="_blank"><img src="./img/app_yt.webp"></a></div></div><br>' +
        '<div class="member">awhu<div class="member_links"><img src="./img/awhupfp.webp"><a href="https://steamcommunity.com/profiles/76561199139835825" target="_blank"><img src="./img/app_steam.webp"></a><a href="https://www.youtube.com/channel/UC03QqoP4T7nShlf_WGEMpcg" target="_blank"><img src="./img/app_yt.webp"></a></div></div><br>' +
        '<div class="member">day<div class="member_links"><img src="./img/daypfp.webp"><a href="https://kuso.day" target="_blank"><img src="./img/app_kusoday.ico"></a><a href="https://steamcommunity.com/profiles/76561198278746913" target="_blank"><img src="./img/app_steam.webp"></a><a href="https://www.youtube.com/channel/UCVcRuqOKisnTGI9MrLtTKLQ" target="_blank"><img src="./img/app_yt.webp"></a></div></div><br>' +
        '<div class="member">oya<div class="member_links"><img src="./img/oyapfp.webp"><a href="https://www.instagram.com/zayzayb/" target="_blank"><img src="./img/app_insta.webp"></a><a href="https://soundcloud.com/kusoclan" target="_blank"><img src="./img/app_sc.webp"></a><a href="https://www.youtube.com/channel/UCesMEd834DuHBjSD4CAnQ7A" target="_blank"><img src="./img/app_yt.webp"></a></div></div><br>' +
        '<div class="member">solo<div class="member_links"><img src="./img/solopfp.webp"></div></div><br>';
    } break;
    default:
      return;
  }

  popup.appendChild( title );
  members.appendChild( popup );

  $( content ).appendTo( popup ).children().hide().each( function( i ) {
    $( this ).delay( 33 * i ).fadeIn( 250 );
  });
});

$("#updates_list").on("click", "a", function(e) {
  if( document.getElementById("blogup") )
    document.getElementById("blogup").remove();

  const updates = document.getElementById("updates");
  var id = $(this).attr('id');

  var blogup = document.createElement("div");
  blogup.setAttribute("id", "blogup");

  blogup.setAttribute( "style",
    "top: " + $("#updates_list").position().top + "px;" +
    "left: " + $("#updates_list").position().left + "px;" +
    "width: " + $("#updates_list").width() + "px;" +
    "height: " + $("#updates_list").height() + "px;"
  );

  var close = document.createElement("div");
  close.innerHTML = '<i class="fa-regular fa-circle-left"></i>';
  close.setAttribute( "id", "close" );
  close.setAttribute( "style",
    "top: 10px;" +
    "right: 10px;"
  );
  close.setAttribute( "onclick", "document.getElementById('blogup').remove();" );

  var title = document.createElement("p");
  var content = document.createElement("div");
  content.setAttribute( "id", "content" );
  content.setAttribute( "style",
    "top: 10%;" +
    "left: 10%;" +
    "width: 80%;" +
    "color: #66666;" +
    "display: flex;" +
    "position: relative;" +
    "flex-direction: column;"
  );

  if( id !== "blog_0" ) {
    content.setAttribute( "style",
      "top: 10%;" +
      "left: 10%;" +
      "width: 80%;" +
      "color: #66666;" +
      "display: flex;" +
      "position: relative;" +
      "text-align: center;" +
      "flex-direction: column;"
    );
  }

  switch( id ) {
  case "blog_0": {
    title.innerText = "our links";
    content.innerHTML = '' + // fix this formatting
      '<a href="https://cs.kus.ooo"><div class="member">servers<div class="member_links"><img src="./img/app_csgo.webp"></div></div></a>' +
      '<a href="https://instagram.com/kusoclan" target="_blank"><div class="member">instagram<div class="member_links"><img src="./img/app_insta.webp"></div></div></a>' +
      '<a href="https://soundcloud.com/kusoclan" target="_blank"><div class="member">soundcloud<div class="member_links"><img src="./img/app_sc.webp"></div></div></a>' +
      '<a href="https://steamcommunity.com/groups/kusoclan" target="_blank"><div class="member">private group<div class="member_links"><img src="./img/app_steam.webp"></div></div></a>' +
      '<a href="https://steamcommunity.com/groups/kusoclanpublic" target="_blank"><div class="member">public group<div class="member_links"><img src="./img/app_steam.webp"></div></div></a>' +
      '<a href="https://tiktok.com/@kuso_clan" target="_blank"><div class="member">tiktok<div class="member_links"><img src="./img/app_tiktok.webp"></div></div></a>' +
      '<a href="https://youtube.com/@kusoclan" target="_blank"><div class="member">youtube<div class="member_links"><img src="./img/app_yt.webp"></div></div></a>';
  } break;
  case "blog_1": {
    title.innerText = "csgo servers under development!";
    content.innerHTML = '' +
      'as of late november, we have started development of our csgo servers in collaboration with networkheaven.net<br><br>' +
      'hosted in central US, we will be starting with a 128 tick GOKZ server, and a 64 tick matchmaking server. each with their own plugins for official matchmaking ranks, votes and other miscellaneous plugins for customization, equality, and fun.';
  } break;
  case "blog_2": {
    title.innerText = "kus.ooo v2 released";
    content.innerHTML = '' +
      'with the past year of working in the dark on various things, we decided it was time to refresh the design of our website.<br><br>' +
      'overnight, we have completely redesigned our website, preparing it for the many future ventures we have planned.<br>';
  } break;
  case "blog_3": {
    title.innerText = "csgo gokz server released";
    content.innerHTML = '' +
      'our gokz server with 100+ maps, jumpstats, and all the rest of that good stuff is officially live in collaboration with <a style="display: contents;" href="https://networkheaven.net">networkheaven.net</a><br>' +
      'now accessible via the top nav links at "servers", or directly at <a style="display: contents;" href="https://cs.kus.ooo">cs.kus.ooo</a><br>' +
      'if you find any bugs, report them in the public group, also accessible via the top nav links. or again, directly at <a style="display: contents;" href="https://steamcommunity.com/groups/kusoclanpublic">groups/kusoclanpublic</a><br>';
  } break;
  case "blog_4": {
    title.innerText = "css kz server released";
    content.innerHTML = '' +
      'our css kz server is now also released, still a WIP as we have to port the maps, add timers & positions, and do all of the testing ourselves, but it is still officially open to the public.<br>' +
      'like the rest, you can find it through the top nav links or directly at <a style="display: contents;" href="https://cs.kus.ooo">cs.kus.ooo</a><br>' +
      'once again, if you find bugs, report them in the public group, via the top nav links, or directly at <a style="display: contents;" href="https://steamcommunity.com/groups/kusoclanpublic">groups/kusoclanpublic</a><br>';
  } break;
  default: {
    console.log( "no blog found" );
    return;
  } break;
  }
  
  blogup.appendChild( title );
  blogup.appendChild( close );
  updates.appendChild( blogup );

  if( id === "blog_0" ){  
    $( content ).appendTo( blogup ).children().hide().each( function( i ) {
      $( this ).delay( 33 * i ).fadeIn( 250 );
    });
  } else
    blogup.appendChild( content );
});