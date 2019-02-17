 //item for the banner
 var ad = document.getElementById("banner");
 
 var firstText = document.getElementById("text1");
 
 var secondText = document.getElementById("text2");
 
 var pic  = document.getElementById("image");
		
 var tl = new TimelineLite();
 
 TweenLite.from(firstText, 1, {x: -700, ease:Back.easeOut },"-=0.75")
 TweenLite.to(firstText, 1, {delay:2.75, scale:10, opacity:0 },"-=0.75")
      
 tl.to(ad,1, {opacity:1 })
 .from(secondText, 1, {delay: 3, x:-900, ease:Back.easeOut },"-=0.75") 
 .to(secondText, 1, {delay:1, x:-100,ease:Circ.easeOut})
 .from(pic,  1, {x: -200, rotation: 200, right: 400, opacity: 0, ease:Back.easeOut },"-=0.5")	