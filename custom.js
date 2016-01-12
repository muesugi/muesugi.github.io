window.addEventListener('resize', function(event){
	landing_photo_resize();
});

function landing_photo_resize(){
  $(".landing").width(window.innerWidth - $("#photo").width()- 0.05*window.innerWidth);
  console.log($("#photo").width());	
}