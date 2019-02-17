//item for the banner
 var banner = document.getElementById("banner");
//item for first line of text
 var firstText = document.getElementById("text1");
//item for second line of text
 var secondText = document.getElementById("text2");
//variable for picture
 var pic  = document.getElementById("image");
//variable for timelinelite		
 var tl = new TimelineLite();
 
 TweenLite.from(firstText, 1, {delay: 1, x: -700, ease: Back.easeOut}, "-=0.75")
 TweenLite.to(firstText, 1, {delay:2.75, scale:10, opacity:0}, "-=0.75")
      
 tl.to(banner, 1, {opacity:1})
 tl.from(secondText, 1, {delay: 3, x:-900, ease: Back.easeOut}, "-=0.75") 
 tl.to(secondText, 1, {delay: 1, x:-100,ease: Circ.easeOut})
 tl.from(pic, 1, {x: -200, rotation: 200, right: 400, opacity: 0, ease: Back.easeOut}, "-=0.5")	