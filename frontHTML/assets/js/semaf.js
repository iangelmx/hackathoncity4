$(document).ready(function(){
	var luz1 = 50;
	var bl1 = "v";
	var luz2 = 20;
	var luz3 = 50;
	var luz4 = 25;
	var luz5 = 25;
	var luz6 = 60;
	var bl2 = "v";
	var bl3 = "v";
	var bl4 = "v";
	var bl5 = "v";
	var bl6 = "v";


	var pausas=300;

	setInterval(function(){
		$("#ts1").html(luz1);
		$("#ts2").html(luz2);
		$("#ts3").html(luz3);
		$("#ts4").html(luz4);
		$("#ts5").html(luz5);
		$("#ts6").html(luz6);

		var verde = "<figure class='circle' style='display: block; background: lime; border-radius: 100%; height: 25px; width: 25px; margin: 0;'></figure>"
		var amarillo = "<figure class='circle' style='display: block; background: yellow; border-radius: 100%; height: 25px; width: 25px; margin: 0;'></figure>"
		var rojo = "<figure class='circle' style='display: block; background: red; border-radius: 100%; height: 25px; width: 25px; margin: 0;'></figure>"


		console.log(".-.");
		luz1=luz1-1;
		luz2=luz2-1;
		luz3=luz3-1;
		luz4=luz4-1;
		luz5=luz5-1;
		luz6=luz6-1;

		if(luz2 >= 1){
			switch(bl2){
				case "v":
					if(luz2==1){
						bl2="r"
						luz2=20;
					}
					$("#ls2").html(verde);
					break;
				case "r":
					$("#ls2").html(rojo);
					if(luz2==1){
						bl2="v";
						luz2=20;
					}
					break;
			}
		}
		if(luz3 >= 1){
			switch(bl3){
				case "v":
					if(luz3==1){
						bl3="r"
						luz3=50;
					}
					$("#ls3").html(verde);
					break;
				case "r":
					$("#ls3").html(rojo);
					if(luz3==1){
						bl3="v";
						luz3=50;
					}
					break;
			}
		}

		if(luz4 >= 1){
			switch(bl4){
				case "v":
					if(luz4==1){
						bl4="r"
						luz4=25;
					}
					$("#ls4").html(verde);
					break;
				case "r":
					$("#ls4").html(rojo);
					if(luz4==1){
						bl4="v";
						luz4=25;
					}
					break;
			}
		}
		
		if(luz5 >= 1){
			switch(bl5){
				case "v":
					if(luz5==1){
						bl5="r"
						luz5=25;
					}
					$("#ls5").html(verde);
					break;
				case "r":
					$("#ls5").html(rojo);
					if(luz5==1){
						bl5="v";
						luz5=25;
					}
					break;
			}
		}

		if(luz6 >= 1){
			switch(bl6){
				case "v":
					if(luz6==1){
						bl6="r"
						luz6=60;
					}
					$("#ls6").html(verde);
					break;
				case "r":
					$("#ls6").html(rojo);
					if(luz6==1){
						bl6="v";
						luz6=60;
					}
					break;
			}
		}
		
		if(luz1 >= 1){
			switch(bl1){
				case "v":
					if(luz1==1){
						bl1="r"
						luz1=50;
					}
					$("#ls1").html(verde);
					break;
				case "r":
					$("#ls1").html(rojo);
					if(luz1==1){
						bl1="v";
						luz1=50;
					}
					break;
			}
		}

	}, pausas);
});