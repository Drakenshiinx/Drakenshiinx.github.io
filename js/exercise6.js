 var ad = document.getElementById("banner");
 
 var firstText = document.getElementById("text1");
 
 var secondText = document.getElementById("text2");
 
 var pic  = document.getElementById("image");
		
 var tl = new TimelineLite();
 
	  tl.to(ad,1, {opacity:1 })
      .from(firstText, 1, {scale:0,ease:Back.easeOut },"-=0.5")
      .to(firstText, 1, {delay:1.5, scale:10, opacity:0 },"-=0.5")
      .from(secondText, 1, {x:-900, ease:Back.easeOut },"-=0.7") 
      .to(secondText, 0.5, {delay:1, x:-100,ease:Circ.easeOut})
      .from(pic,  1, {x: -200, rotation: 200, right: 400, opacity: 0, ease:Back.easeOut },"-=0.5")	