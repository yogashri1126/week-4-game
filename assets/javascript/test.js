//Star-Wars players
$(document).ready(function(){

            var playerSelect = false;
            var enemySelect = false;
            var player;
            var activeplayer;
            var fight;
            var activefight;
            var enemy;
            var second;
            var counter = 0;
            var CharHealth=0;
            var AttackerHealth=0;
            var attack;
            var reset;
            var assign;
            var kills=0;
            var RealHealth=0;

            var anakin =

                {
                    Name: "Anakin Skywalker",
                    CounterAttack: 100,
                    Attack: 60,
                    Health: 300,
                    id: "AnakinSkywalker"
                        //"src": "../images/Anakin_Skywalker.png"

                };

            var obiwan =

                {
                    Name: "Obi Wan",
                    CounterAttack: 100,
                    Attack: 20,
                    Health: 300,
                    id: "ObiWanKenobi"
                        //"src": "../images/Obiwan_Kenobi.png"
                };

            var princessleia =

                {
                    Name: "Princess Leia",
                    CounterAttack: 100,
                    Attack: 100,
                    Health: 300,
                    id: "PrincessLeia"
                        //"src": "../images/princess_leia.jpg"
                };

            var yoda =

                {
                    Name: "Yoda",
                    CounterAttack: 100,
                    Attack: 200,
                    Health: 300,
                    id: "Yoda"
                        //"src": "../images/Yoda.png"
                };

            playerset = [anakin, obiwan, princessleia, yoda]
                //$("#AnakinSkywalker").data("omg",anakin)
                //$("#ObiwanKenobi").data("omg", obiwan)
                //$("#PrincessLeia").data("omg", princessleia)
                //$("#Yoda").data("omg", yoda)

            //Step 1: Choose a player
            //need a box for the objects
            //click on a player and then will move to a second div that says pick an enemy, all of these enemies turn red
            //need a button for attacking, that will reduce the player's attacking points
            //need a button for choosing a player, on click for the player
            //need a reset button, to restart the game-you're resetting all the player's stats like they were before
            

            $(".character").on("click", function() {
                if (playerSelect === false) {

                    playerSelect = true
                    console.log(playerSelect)
                    if (playerSelect === true) {
                        player = ($(this)).attr("id")
                        for (i = 0; i < playerset.length; i++) {
                            console.log(playerset[i].id, player, playerset[i].id == player, "look")
                            if (playerset[i].id === player) {
                                activeplayer = playerset[i];
                                
                            }
                        	}
                        console.log(activeplayer.Attack, " player object")

                        console.log(player)
                        $(this).addClass("player")
                            //counter= $(this).data("omg").Attack //I know this is wrong, I'm trying to get the attack value of the chosen object
                        counter += activeplayer.Attack
                        console.log(this)
                        enemy = $("#enemy")
                        enemy.toggleClass("active")
                        enemy.append($(this).siblings("*")) //I know I initially associated the objects with the div, so I want to use this to go back to the associated div and capture siblings. this.id did not work here. I want to append all the html content of the siblings into this target div
                        console.log($(this).siblings("*")) //this is working well, but the boxes are not moving
                        var content = ($(this)).siblings()
                        enemy.prepend("<h2>Choose Your Opponent</h2>")
                    }
                }


                //I know this is wrong syntax as well
                else if (enemySelect === false) {
                    enemySelect = true
                    second = ($(this))
                    second.addClass("left")
                    console.log(second)

                    if (enemySelect === true) {
                        defender = $("#defender") //defender div
                        defender.toggleClass("active")
                        fight = ($(this)).attr("id")
                        
                        for (i = 0; i < playerset.length; i++) {
                        	
                            console.log(playerset[i].id, player, playerset[i].id == fight, "look")
                            if (playerset[i].id === fight) {
                                
                     			activefight = playerset[i]
                                console.log(activefight)
                                $("activefight").addClass("attacker")
                                break;
       
                            }

                            
                        }
                            console.log(playerset[i])
                            console.log(activefight)
                            console.log(activefight.Attack + "attacker object")

                             //adding a class to the attacker the player clicked
                            defender.append($(this)) //appending the attacker to the defender area
                      		
                      		if (defender.text().indexOf("Defender") === -1) {
  								defender.prepend("<h2>Defender</h2>")
								}//Not repeating the h2 everytime we pick a new player

                      		
                      		
                      		$("#attack").css({"display": "block"})
                      		
                      		defender.append(attack)
                        


					}
						

                        $("#attack").on("click", function() {
                            CharHealth = activeplayer.Health - activefight.CounterAttack //Health goes down for character each click
                            activeplayer.Health=CharHealth
                            AttackerHealth = activefight.Health - counter //Defender's health will decrease by the level of attack the attacker has
                            counter += activeplayer.Attack //attack increases each time one clicks for the character chosen
                            //the player's attack value will change each time
                            //defender.append("<br>")
                            //defender.append(activefight.Name + "used " + activefight.CounterAttack + " on you") //I know this syntax is totally wrong
                            //defender.append("<br>")
                            //defender.append("you used "+ " " +counter + " "+ "attack on" +" " + activefight.Name)
                           	$("#scoreboard").html("you used "+ " " +counter + " "+ "attack on" +" " + activefight.Name + "<br>" + activefight.Name + "used " + activefight.CounterAttack + " on you")
                           	$("#stats").html(activeplayer.Name+" "+ "HP"+":" +" "+CharHealth+ "<br>" + activefight.Name + " "+"HP"+":"+ " "+ AttackerHealth)
                           if (CharHealth <= 0) {
								defender.text("You lost the game!")

								$("#reset").css({"display":"block"})
                                $("#reset").on("click", function() {
                                  location.reload()

                               })

                           }

                           if (AttackerHealth <= 0) {
                               alert("You WON! Pick another enemy!")
                               defender.empty()//removes dead enemy
                               counter = 0;
            					
            					AttackerHealth=0;
            					kills++;
                               enemySelect = false;
                                
                               
                          		
                            }

                           if (kills===3) //If you went through all three players
                           	{

                             alert("You won the whole game!")
                             
                      			$("#reset").css({"display":"block"})
                      			
                             defender.append(reset)

                              $("#reset").on("click", function() {
                                   location.reload()

                                })

                           		}



                       })

                   }

                } )
            
       })







        //everyone else becomes enemies
        //Enemy: on the click, the selected player moves to defender area 
        //Player: on the click, moves to attacker area
        //should be a conditional statement that whenever the points are negative, this player loses and they lost the game!
        //Make another conditional statement that if the HP is 0, the enemy is moved and player chooses another opponent

        //$("obiwan").on("click", function()
        //{
        //var defender= $("#Defender_Area")

        //defender.append()


        //})
        //$("princessleia").on("click", function()
        //{
        //var defender= $("#Defender_Area")

        //defender.append(obiwan, princessleia ,yoda)
        //
        //$("yoda").on("click", function()
        //{
        //var defender= $("#Defender_Area")

        //defender.append(obiwan, princessleia ,yoda)

        //})





        /* Read 

        https://css-tricks.com/use-button-element/
        */