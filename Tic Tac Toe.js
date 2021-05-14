/* Function which executes when the page is fully loaded */
function set()
	{
		/* Sets the turn's value as "X's turn" */
		document.getElementById("turn").value = "X's turn";
		
		/* Sets scores to zero */
		document.getElementById("s1").value = 0;
		document.getElementById("s2").value = 0;
	}

/* Function which executes on every click on buttons which are on the gamepad */
function ttt(i)
	{
		var j, k = 0, m, n;
		var ox = document.getElementsByClassName("xo");
		
		/* Counts the number of empty cells/boxes */
		for(j=0;j<9;j++)
			{
				m = 2 * j;
				n = m + 1;
				if(ox[m].style.display == "none" && ox[n].style.display == "none")
					{
						k++;
					}
			}
		
		/* Plays a sound */
		if(document.getElementById("vol_up").style.display == "block")
			{
				var gamepad = new Audio('Sounds/Gamepad.ogg');
				gamepad.play();
			}
		
		m = 2 * i;
		n = m + 1;
		if(k % 2 == 0 && ox[m].style.display == "none")
			{
				/* If the number of empty cells/boxes is even, then it will display "O" in the cell */
				ox[n].style.display = "block";
				
				if(k > 1)
					{
						if(document.getElementById("p1").value == "")
							{
								/* If 1st player's name isn't given, then value of turn is "X's turn" */
								document.getElementById("turn").value = "X's turn";
							}
						else
							{
								/* If 1st player's name is given (let say 1st player's name is "Jack"), then value of turn is "Jack's (i.e. X's) turn" */
								document.getElementById("turn").value = document.getElementById("p1").value + "'s (i.e. X's) turn";
							}
					}
				else if(k <= 1)
					{
						/* If number empty boxes is less than OR equal to one, the turn's value is nothing/none */
						document.getElementById("turn").value = "";
					}
			}
		else if(k % 2 != 0 && ox[n].style.display == "none")
			{
				/* If the number of empty cells/boxes is odd, then it will display "X" in the cell */
				ox[m].style.display = "block";
				
				if(k > 1)
					{
						if(document.getElementById("p2").value == "")
							{
								/* If 2nd player's name isn't given, then value of turn is "O's turn" */
								document.getElementById("turn").value = "O's turn";
							}
						else
							{
								/* If 2nd player's name is given (let say 2nd player's name is "Lee"), then value of turn is "Lee's (i.e. O's) turn" */
								document.getElementById("turn").value = document.getElementById("p2").value + "'s (i.e. O's) turn";
							}
					}
				else if(k <= 1)
					{
						/* If number empty boxes is less than OR equal to one, the turn's value is nothing/none */
						document.getElementById("turn").value = "";
					}
			}
		
		/* Winning conditions for X */
		if((ox[0].style.display == "block" && ox[2].style.display == "block" && ox[4].style.display == "block") || (ox[6].style.display == "block" && ox[8].style.display == "block" && ox[10].style.display == "block") || (ox[12].style.display == "block" && ox[14].style.display == "block" && ox[16].style.display == "block") || (ox[0].style.display == "block" && ox[6].style.display == "block" && ox[12].style.display == "block") || (ox[2].style.display == "block" && ox[8].style.display == "block" && ox[14].style.display == "block") || (ox[4].style.display == "block" && ox[10].style.display == "block" && ox[16].style.display == "block") || (ox[0].style.display == "block" && ox[8].style.display == "block" && ox[16].style.display == "block") || (ox[4].style.display == "block" && ox[8].style.display == "block" && ox[12].style.display == "block"))
			{
				/* Calculations for the score of 1st player */
				var s1, s1_final;
				s1 = document.getElementById("s1").value;
				s1_final = parseInt(s1) + 1;
				/* Score of 1st player */
				document.getElementById("s1").value = s1_final;
				
				/* Setting turn's value to nothing/none */
				document.getElementById("turn").value = "";
				
				/* Plays a sound */
				if(document.getElementById("vol_up").style.display == "block")
					{
						var winnerx = new Audio('Sounds/Winner.ogg');
						winnerx.play();
					}
				
				/* Display various elements when X wons */
				document.getElementById("winner").style.display = "block";
				document.getElementById("winx").style.display = "block";
				document.getElementById("winbtn").style.display = "block";
				document.getElementById("go").style.display = "block";
				
				var j;
				for(j=0;j<9;j++)
					{
						/* Disables all the buttons which are on gamepad */
						document.getElementsByClassName("btn")[j].disabled = true;
					}
			}
		/* Winning conditions for O */
		else if((ox[1].style.display == "block" && ox[3].style.display == "block" && ox[5].style.display == "block") || (ox[7].style.display == "block" && ox[9].style.display == "block" && ox[11].style.display == "block") || (ox[13].style.display == "block" && ox[15].style.display == "block" && ox[17].style.display == "block") || (ox[1].style.display == "block" && ox[7].style.display == "block" && ox[13].style.display == "block") || (ox[3].style.display == "block" && ox[9].style.display == "block" && ox[15].style.display == "block") || (ox[5].style.display == "block" && ox[11].style.display == "block" && ox[17].style.display == "block") || (ox[1].style.display == "block" && ox[9].style.display == "block" && ox[17].style.display == "block") || (ox[5].style.display == "block" && ox[9].style.display == "block" && ox[13].style.display == "block"))
			{
				/* Calculations for the score of 2nd player */
				var s1, s1_final;
				s1 = document.getElementById("s2").value;
				s1_final = parseInt(s1) + 1;
				/* Score of 2nd player */
				document.getElementById("s2").value = s1_final;
				
				/* Setting turn's value to nothing/none */
				document.getElementById("turn").value = "";
				
				/* Plays a sound */
				if(document.getElementById("vol_up").style.display == "block")
					{
						var winnero = new Audio('Sounds/Winner.ogg');
						winnero.play();
					}
				
				/* Display various elements when O wons */
				document.getElementById("winner").style.display = "block";
				document.getElementById("wino").style.display = "block";
				document.getElementById("winbtn").style.display = "block";
				document.getElementById("go").style.display = "block";
				
				var j;
				for(j=0;j<9;j++)
					{
						/* Disables all the buttons which are on gamepad */
						document.getElementsByClassName("btn")[j].disabled = true;
					}
			}
		/* Conditions for game tie */
		else if(k == 1)
			{
				/* Setting turn's value to nothing/none */
				document.getElementById("turn").value = "";
				
				/* Plays a sound */
				if(document.getElementById("vol_up").style.display == "block")
					{
						var tied = new Audio('Sounds/Tied.ogg');
						tied.play();
					}
				
				/* Display various elements when game ties */
				document.getElementById("winner").style.display = "block";
				document.getElementById("tie").style.display = "block";
				document.getElementById("winbtn").style.display = "block";
				document.getElementById("go").style.display = "block";
				
				var j;
				for(j=0;j<9;j++)
					{
						/* Disables all the buttons which are on gamepad */
						document.getElementsByClassName("btn")[j].disabled = true;
					}
			}
	}

/* Function which will hide menu (if it is visible) and sets menu bars parallel (if they are in crossed position) when user will click anywhere on screen other than menu area and menu bars */
window.addEventListener('click',function(e)
	{
		if((!(document.getElementById("menu_bars").contains(e.target))) && (document.getElementById("menu").style.display == "block") && (!(document.getElementById("menu").contains(e.target))))
			{
				/* Sets menu bars in parallel position */
				document.getElementById("menu_bars").click();
				
				/* Hides the menu */
				document.getElementById("menu").style.display = "none";
				
				/* Plays a sound */
				if(document.getElementById("vol_up").style.display == "block")
					{
						var btn_cls = new Audio('Sounds/Close Buttons.ogg');
						btn_cls.play();
					}
			}
	});

/* Executes when user will click on menu bars */
function menu_button(x)
	{
		/* Changes menu bars from parallel position to crossed position and vice-versa */
		x.classList.toggle("change");
	}
function menu()
	{
		/* If menu is hidden */
		if(document.getElementById("menu").style.display == "none")
			{
				document.getElementById("menu").style.display = "block";
				
				if(document.getElementById("vol_up").style.display == "block")
					{
						var btn_clc = new Audio('Sounds/Button Click.ogg');
						btn_clc.play();
					}
			}
		/* If menu is visible */
		else
			{
				document.getElementById("menu").style.display = "none";
				
				if(document.getElementById("vol_up").style.display == "block")
					{
						var btn_cls = new Audio('Sounds/Close Buttons.ogg');
						btn_cls.play();
					}
			}
	}
/* Function for Dark and Light modes */
function mode()
	{
		/* Condition for dark mode */
		if(document.getElementById("lm").style.display == "none")
			{
				/* Switch on the CSS of body tag which is for dark mode */
				document.getElementsByClassName("bdy")[0].classList.remove('bdya');
				document.getElementsByClassName("bdy")[0].classList.add('bdyb');
				
				/* Switch on the CSS of gamepad class which is for dark mode */
				document.getElementsByClassName("gamepad")[0].classList.remove('gamepada');
				document.getElementsByClassName("gamepad")[0].classList.add('gamepadb');
				
				var i;
				for(i=0;i<9;i++)
					{
						/* Sets btn class's background colour to #8a8a8a from #fff */
						document.getElementsByClassName("btn")[i].style.backgroundColor = "#8a8a8a";
					}
				
				/* Sets winner class's background colour to #8a8a8a from #fff */
				document.getElementsByClassName("winner")[0].style.backgroundColor = "#8a8a8a";
				
				/* Sets winbtn class's background colour to #8a8a8a from #fff */
				document.getElementsByClassName("winbtn")[0].style.backgroundColor = "#8a8a8a";
				
				for(i=0;i<2;i++)
					{
						/* Sets winbtn_r class's box shadow to "0 0 20px #fff" from "0 0 20px #ccc" */
						document.getElementsByClassName("winbtn_r")[i].style.boxShadow = "0 0 20px #fff";
					}
				
				/* Sets opt class's background colour to #2b2b2b from #fff */
				document.getElementsByClassName("opt")[0].style.backgroundColor = "#2b2b2b";
				
				/* Sets menu class's background colour to #2b2b2b from #fff */
				document.getElementsByClassName("menu")[0].style.backgroundColor = "#2b2b2b";
				
				for(i=0;i<2;i++)
					{
						/* Shits on the CSS of r class which is for dark mode */
						document.getElementsByClassName("r")[i].classList.remove('ra');
						document.getElementsByClassName("r")[i].classList.add('rb');
					}
				
				for(i=0;i<3;i++)
					{
						/* Shits on the CSS of menu_a class which is for dark mode */
						document.getElementsByClassName("menu_a")[i].classList.remove('menu_aa');
						document.getElementsByClassName("menu_a")[i].classList.add('menu_ab');
					}
				
				/* Switch on the CSS of help class which is for dark mode */
				document.getElementsByClassName("help")[0].classList.remove('helpa');
				document.getElementsByClassName("help")[0].classList.add('helpb');
				
				/* Hides "Dark Mode" from options */
				document.getElementById("dm").style.display = "none";
				
				/* Shows "Light Mode" in options */
				document.getElementById("lm").style.display = "block";
				
				if(document.getElementById("vol_up").style.display == "block")
					{
						/* Plays a sound */
						var lm = new Audio('Sounds/Button Click.ogg');
						lm.play();
					}
			}
		/* Condition for light mode */
		else
			{
				/* Switch on the CSS of body tag which is for light mode */
				document.getElementsByClassName("bdy")[0].classList.remove('bdyb');
				document.getElementsByClassName("bdy")[0].classList.add('bdya');
				
				/* Switch on the CSS of gamepad class which is for light mode */
				document.getElementsByClassName("gamepad")[0].classList.remove('gamepadb');
				document.getElementsByClassName("gamepad")[0].classList.add('gamepada');
				
				var i;
				for(i=0;i<9;i++)
					{
						/* Sets btn class's background colour to #fff from #8a8a8a */
						document.getElementsByClassName("btn")[i].style.backgroundColor = "#fff";
					}
				
				/* Sets winner class's background colour to #fff from #8a8a8a */
				document.getElementsByClassName("winner")[0].style.backgroundColor = "#fff";
				
				/* Sets winbtn class's background colour to #fff from #8a8a8a */
				document.getElementsByClassName("winbtn")[0].style.backgroundColor = "#fff";
				
				for(i=0;i<2;i++)
					{
						/* Sets winbtn_r class's box shadow to "0 0 20px #ccc" from "0 0 20px #fff" */
						document.getElementsByClassName("winbtn_r")[i].style.boxShadow = "0 0 20px #ccc";
					}
				
				/* Sets opt class's background colour to #fff from #2b2b2b */
				document.getElementsByClassName("opt")[0].style.backgroundColor = "#fff";
				
				/* Sets menu class's background colour to #fff from #2b2b2b */
				document.getElementsByClassName("menu")[0].style.backgroundColor = "#fff";
				
				for(i=0;i<2;i++)
					{
						/* Switch on the CSS of r class which is for light mode */
						document.getElementsByClassName("r")[i].classList.remove('rb');
						document.getElementsByClassName("r")[i].classList.add('ra');
					}
				
				for(i=0;i<3;i++)
					{
						/* Switch on the CSS of menu_a class which is for light mode */
						document.getElementsByClassName("menu_a")[i].classList.remove('menu_ab');
						document.getElementsByClassName("menu_a")[i].classList.add('menu_aa');
					}
				
				/* Switch on the CSS of help class which is for light mode */
				document.getElementsByClassName("help")[0].classList.remove('helpb');
				document.getElementsByClassName("help")[0].classList.add('helpa');
				
				/* Hides "Light Mode" from options */
				document.getElementById("lm").style.display = "none";
				
				/* Shows "Dark Mode" in options */
				document.getElementById("dm").style.display = "block";
				
				if(document.getElementById("vol_up").style.display == "block")
					{
						/* Plays a sound */
						var dm = new Audio('Sounds/Button Click.ogg');
						dm.play();
					}
			}
	}
function sound()
	{
		/* Condition for muting of sounds */
		if(document.getElementById("vol_mute").style.display == "none")
			{
				document.getElementById("vol_up").style.display = "none";
				document.getElementById("vol_mute").style.display = "block";
			}
		/* Conditionfor unmuting of sounds */
		else
			{
				document.getElementById("vol_mute").style.display = "none";
				document.getElementById("vol_up").style.display = "block";
				
				/* Plays a sound */
				if(document.getElementById("vol_up").style.display == "block")
					{
						var vol = new Audio('Sounds/Button Click.ogg');
						vol.play();
					}
			}
	}
function help()
	{
		/* Condition for visibility of help window */
		if(document.getElementById("help").style.display == "none")
			{
				document.getElementById("help").style.display = "block";
				
				/* Plays a sound */
				if(document.getElementById("vol_up").style.display == "block")
					{
						var hlp_exp = new Audio('Sounds/Help Expand.ogg');
						hlp_exp.play();
					}
			}
		/* Condition to hide help window */
		else
			{
				document.getElementById("help").style.display = "none";
				
				/* Plays a sound */
				if(document.getElementById("vol_up").style.display == "block")
					{
						var btn_cls = new Audio('Sounds/Close Buttons.ogg');
						btn_cls.play();
					}
			}
	}

/* Hides the help window when user will click anywhere on the screen */
window.addEventListener('click',function(e)
	{
		if(!(document.getElementById("help").contains(e.target)) && (document.getElementById("help").style.display == "block") && (!(document.getElementById("hlp").contains(e.target))))
			{
				/* Hides the help window */
				document.getElementById("help").style.display = "none";
				
				/* Plays a sound */
				if(document.getElementById("vol_up").style.display == "block")
					{
						var btn_cls = new Audio('Sounds/Close Buttons.ogg');
						btn_cls.play();
					}
			}
	});

/* Below function will execute when user will click on Replay button */
function replay()
	{
		var j;
		var ox = document.getElementsByClassName("xo");
		for(j = 0;j < 18; j++)
			{
				/* Hide all Xs and Os from the gamepad */
				ox[j].style.display = "none"
			}
		
		if(document.getElementById("p1").value == "")
			{
				/* If 1st player's name isn't entered, then the value of turn is "X's turn" */
				document.getElementById("turn").value = "X's turn";
			}
		else
			{
				/* If 1st player's name is given (let say 1st player's name is "Jack"), then value of turn is "Jack's (i.e. X's) turn" */
				document.getElementById("turn").value = document.getElementById("p1").value + "'s (i.e. X's) turn";
			}

		/* Condition to hide menu */
		if(document.getElementById("menu").style.display == "block")
			{
				/* Sets the menu bars in parallel position */
				document.getElementById("menu_bars").click();
				
				/* Hides the menu */
				document.getElementById("menu").style.display = "none";
			}
		/* Hides the help window */
		document.getElementById("help").style.display = "none";
		
		/* Plays a sound */
		if(document.getElementById("vol_up").style.display == "block")
			{
				var rply = new Audio('Sounds/Replay.ogg');
				rply.play();
			}
		
		/* Hides all elements which are shown when a player wons the game OR when game ties */
		document.getElementById("winner").style.display = "none";
		document.getElementById("winx").style.display = "none";
		document.getElementById("wino").style.display = "none";
		document.getElementById("tie").style.display = "none";
		document.getElementById("winbtn").style.display = "none";
		document.getElementById("go").style.display = "none";
		
		var j;
		for(j=0;j<9;j++)
			{
				/* Enable all the buttons of gamepad */
				document.getElementsByClassName("btn")[j].disabled = false;
			}
	}

/* Below function will execute when user will click on Restart button */
function restart()
	{
		/* An animation executes when display of rst ID's is none */
		if(document.getElementById("rst").style.display == "none")
			{
				document.getElementById("rst").style.display = "block";
				
				/* Plays a sound */
				if(document.getElementById("vol_up").style.display == "block")
					{
						var rsrt = new Audio('Sounds/Restart.ogg');
						rsrt.play();
					}
				
				/* It calls this function once again and sets the value of display of rst ID's to "none" from "block" */
				setTimeout(restart,600);
			}
		/* Sets the rst ID's display value to "none" */
		else
			{
				document.getElementById("rst").style.display = "none";
			}
		
		var j;
		var ox = document.getElementsByClassName("xo");
		for(j = 0;j < 18; j++)
			{
				/* Hide all Xs and Os from the gamepad */
				ox[j].style.display = "none"
			}
		
		/* Sets the value of turn as "X's turn" */
		document.getElementById("turn").value = "X's turn";
		
		/* Sets the names of both the players as nothing/none */
		document.getElementById("p1").value = "";
		document.getElementById("p2").value = "";
		
		/* Sets the scores of both the players as zero */
		document.getElementById("s1").value = 0;
		document.getElementById("s2").value = 0;

		/* Condition to hide menu */
		if(document.getElementById("menu").style.display == "block")
			{
				/* Sets the menu bars in parallel position */
				document.getElementById("menu_bars").click();
				
				/* Hides the menu */
				document.getElementById("menu").style.display = "none";
			}
		/* Hides the help window */
		document.getElementById("help").style.display = "none";
		
		/* Hides all elements which are shown when a player wons the game OR when game ties */
		document.getElementById("winner").style.display = "none";
		document.getElementById("winx").style.display = "none";
		document.getElementById("wino").style.display = "none";
		document.getElementById("tie").style.display = "none";
		document.getElementById("winbtn").style.display = "none";
		document.getElementById("go").style.display = "none";
		
		var j;
		for(j=0;j<9;j++)
			{
				/* Enable all the buttons of gamepad */
				document.getElementsByClassName("btn")[j].disabled = false;
			}
	}