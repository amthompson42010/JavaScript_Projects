var slaying = true;

//Calculation of odds of hitting the dragon.
var youHit = Math.floor(Math.random() * 2);
var dameageThisRound = Math.floor(Math.random()* 5 + 1);
var totalDamage = 0;

while(slaying){
	if(youHit){
		console.log("You hit the dragon and did " + dameageThisRound + " damage!");
		totalDamage += dameageThisRound;

		if(totalDamage >= 4){
			console.log("You did it! You slew the dragon!");
			slaying = false;
		}else{
			youHit = Math.floor(Math.random() * 2);
		}
	}else{
		console.log("The dragon burninates you! You're toast.");
		slaying = false;
	}
}