
document.getElementById("sprite").style.left = 300;
document.getElementById("sprite").style.top = 240;

var movement = 20



function left()
{
	
	var n = document.getElementById("sprite").style.left
	
	if(n==="0px")
	{
		document.getElementById("lb").disabled = true;
	}

	var v = parseInt(n,10)-movement;
	document.getElementById("sprite").style.left = v;
	
}

function right()
{
	var n = document.getElementById("sprite").style.left
	if(n==="580px")
	{
		document.getElementById("rb").disabled = true;
	}
	var v = parseInt(n,10)+movement;
	document.getElementById("sprite").style.left = v;
}
function up()
{
	
	var n = document.getElementById("sprite").style.top
	if(n==="20px")
	{
		document.getElementById("ub").disabled = true;
	}
	var v = parseInt(n,10)-movement;
	document.getElementById("sprite").style.top = v;
}

function down()
{
	var n = document.getElementById("sprite").style.top
	if(n==="460px")
	{
		document.getElementById("db").disabled = true;
	}
	var v = parseInt(n,10)+movement;
	document.getElementById("sprite").style.top = v;
}


function enemy()
{
	roll = Math.floor(Math.random() * 10);
	if (roll >= 5)
	{
		document.getElementById("enemy").style.display = "block";
		document.getElementById("ub").disabled = true;
		document.getElementById("lb").disabled = true;
		document.getElementById("db").disabled = true;
		document.getElementById("rb").disabled = true;
	
		
		if (roll = 6)
	{
		document.getElementById("poring").style.display = "block";

	}
	}

	console.log(roll);
}

function run()
{
	document.getElementById("enemy").style.display = "none";
	document.getElementById("ub").disabled = false;
		document.getElementById("lb").disabled = false;
		document.getElementById("db").disabled = false;
		document.getElementById("rb").disabled = false;
}

function fight()
{
	document.getElementById("fight").style.display = "block";
	document.getElementById("enemy").style.display = "none";
	
}




function attack()
{
	var hp = parseInt(document.getElementById("e-hp").value,10);
	damage = Math.floor(Math.random() * 11);
	hp = hp-damage;
	document.getElementById("e-hp").value = hp;
	console.log(hp)

	if(hp<=0)
	{
	alert("you win")
	document.getElementById("e-hp").value = 100
	document.getElementById("fight").style.display = "none";
	document.getElementById("ub").disabled = false;
	document.getElementById("lb").disabled = false;
	document.getElementById("db").disabled = false;
	document.getElementById("rb").disabled = false;
	document.getElementById("enemy").style.display = "none";
	}
}