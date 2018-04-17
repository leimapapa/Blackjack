//blackjack

function getRandom(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min; 
	//The maximum is inclusive and the minimum is inclusive 
	}


function blackjack(card){

	var randomNumber = getRandom(1,52);

	switch(randomNumber) {
		case 1:
		document.getElementById(card).innerHTML = "<img class='cardStyle' src='cards/hearts1.png'/>";
		break;
		case 2:
		document.getElementById(card).innerHTML = "<img class='cardStyle' src='cards/hearts2.png'/>";
		break;
		case 3:
		document.getElementById(card).innerHTML = "<img class='cardStyle' src='cards/hearts3.png'/>";
		break;
		case 4:
		document.getElementById(card).innerHTML = "<img class='cardStyle' src='cards/hearts4.png'/>";
		break;
		case 5:
		document.getElementById(card).innerHTML = "<img class='cardStyle' src='cards/hearts5.png'/>";
		break;
		case 6:
		document.getElementById(card).innerHTML = "<img class='cardStyle' src='cards/hearts6.png'/>";
		break;
		case 7:
		document.getElementById(card).innerHTML = "<img class='cardStyle' src='cards/hearts7.png'/>";
		break;
		case 8:
		document.getElementById(card).innerHTML = "<img class='cardStyle' src='cards/hearts8.png'/>";
		break;
		case 9:
		document.getElementById(card).innerHTML = "<img class='cardStyle' src='cards/hearts9.png'/>";
		break;
		case 10:
		document.getElementById(card).innerHTML = "<img class='cardStyle' src='cards/hearts10.png'/>";
		break;
		case 11:
		document.getElementById(card).innerHTML = "<img class='cardStyle' src='cards/hearts11.png'/>";
		break;
		case 12:
		document.getElementById(card).innerHTML = "<img class='cardStyle' src='cards/hearts12.png'/>";
		break;
		case 13:
		document.getElementById(card).innerHTML = "<img class='cardStyle' src='cards/hearts13.png'/>";
		break;
		case 14:
		document.getElementById(card).innerHTML = "<img class='cardStyle' src='cards/diamonds1.png'/>";
		break;
		case 15:
		document.getElementById(card).innerHTML = "<img class='cardStyle' src='cards/diamonds2.png'/>";
		break;
		case 16:
		document.getElementById(card).innerHTML = "<img class='cardStyle' src='cards/diamonds3.png'/>";
		break;
		case 17:
		document.getElementById(card).innerHTML = "<img class='cardStyle' src='cards/diamonds4.png'/>";
		break;
		case 18:
		document.getElementById(card).innerHTML = "<img class='cardStyle' src='cards/diamonds5.png'/>";
		break;
		case 19:
		document.getElementById(card).innerHTML = "<img class='cardStyle' src='cards/diamonds6.png'/>";
		break;
		case 20:
		document.getElementById(card).innerHTML = "<img class='cardStyle' src='cards/diamonds7.png'/>";
		break;
		case 21:
		document.getElementById(card).innerHTML = "<img class='cardStyle' src='cards/diamonds8.png'/>";
		break;
		case 22:
		document.getElementById(card).innerHTML = "<img class='cardStyle' src='cards/diamonds9.png'/>";
		break;
		case 23:
		document.getElementById(card).innerHTML = "<img class='cardStyle' src='cards/diamonds10.png'/>";
		break;
		case 24:
		document.getElementById(card).innerHTML = "<img class='cardStyle' src='cards/diamonds11.png'/>";
		break;
		case 25:
		document.getElementById(card).innerHTML = "<img class='cardStyle' src='cards/diamonds12.png'/>";
		break;
		case 26:
		document.getElementById(card).innerHTML = "<img class='cardStyle' src='cards/diamonds13.png'/>";
		break;
		case 27:
		document.getElementById(card).innerHTML = "<img class='cardStyle' src='cards/spades1.png'/>";
		break;
		case 28:
		document.getElementById(card).innerHTML = "<img class='cardStyle' src='cards/spades2.png'/>";
		break;
		case 29:
		document.getElementById(card).innerHTML = "<img class='cardStyle' src='cards/spades3.png'/>";
		break;
		case 30:
		document.getElementById(card).innerHTML = "<img class='cardStyle' src='cards/spades4.png'/>";
		break;
		case 31:
		document.getElementById(card).innerHTML = "<img class='cardStyle' src='cards/spades5.png'/>";
		break;
		case 32:
		document.getElementById(card).innerHTML = "<img class='cardStyle' src='cards/spades6.png'/>";
		break;
		case 33:
		document.getElementById(card).innerHTML = "<img class='cardStyle' src='cards/spades7.png'/>";
		break;
		case 34:
		document.getElementById(card).innerHTML = "<img class='cardStyle' src='cards/spades8.png'/>";
		break;
		case 35:
		document.getElementById(card).innerHTML = "<img class='cardStyle' src='cards/spades9.png'/>";
		break;
		case 36:
		document.getElementById(card).innerHTML = "<img class='cardStyle' src='cards/spades10.png'/>";
		break;
		case 37:
		document.getElementById(card).innerHTML = "<img class='cardStyle' src='cards/spades11.png'/>";
		break;
		case 38:
		document.getElementById(card).innerHTML = "<img class='cardStyle' src='cards/spades12.png'/>";
		break;
		case 39:
		document.getElementById(card).innerHTML = "<img class='cardStyle' src='cards/spades13.png'/>";
		break;
		case 40:
		document.getElementById(card).innerHTML = "<img class='cardStyle' src='cards/clubs1.png'/>";
		break;
		case 41:
		document.getElementById(card).innerHTML = "<img class='cardStyle' src='cards/clubs2.png'/>";
		break;
		case 42:
		document.getElementById(card).innerHTML = "<img class='cardStyle' src='cards/clubs3.png'/>";
		break;
		case 43:
		document.getElementById(card).innerHTML = "<img class='cardStyle' src='cards/clubs4.png'/>";
		break;
		case 44:
		document.getElementById(card).innerHTML = "<img class='cardStyle' src='cards/clubs5.png'/>";
		break;
		case 45:
		document.getElementById(card).innerHTML = "<img class='cardStyle' src='cards/clubs6.png'/>";
		break;
		case 46:
		document.getElementById(card).innerHTML = "<img class='cardStyle' src='cards/clubs7.png'/>";
		break;
		case 47:
		document.getElementById(card).innerHTML = "<img class='cardStyle' src='cards/clubs8.png'/>";
		break;
		case 48:
		document.getElementById(card).innerHTML = "<img class='cardStyle' src='cards/clubs9.png'/>";
		break;
		case 49:
		document.getElementById(card).innerHTML = "<img class='cardStyle' src='cards/clubs10.png'/>";
		break;
		case 50:
		document.getElementById(card).innerHTML = "<img class='cardStyle' src='cards/clubs11.png'/>";
		break;
		case 51:
		document.getElementById(card).innerHTML = "<img class='cardStyle' src='cards/clubs12.png'/>";
		break;
		case 52:
		document.getElementById(card).innerHTML = "<img class='cardStyle' src='cards/clubs13.png'/>";
		break;
	}
}


function blackjackDeal(){
	
	var resetBlackjackBoard = document.getElementById("blackjackBoard");
	resetBlackjackBoard.innerHTML = '';
	resetBlackjackBoard.innerHTML = '<div id="playerCards" class="col-xs-6"><div id="playerCard1" class="col-xs-2"><div id="card1" class="bigger"><i class="glyphicon glyphicon-adjust" title="card"></i></div></div><div id="playerCard2" class="col-xs-2"><div id="card2" class="bigger"><i class="glyphicon glyphicon-adjust" title="card"></i></div></div><div id="afterPlayerCard" class="col-xs-1"></div><div id="playerCard3" class="col-xs-2" style="display:none"><div id="card3" class="bigger"><i class="glyphicon glyphicon-adjust" title="card"></i></div></div><div id="playerCard4" class="col-xs-2" style="display:none"><div id="card4" class="bigger"><i class="glyphicon glyphicon-adjust" title="card"></i></div></div><div id="playerCard5" class="col-xs-2" style="display:none"><div id="card5" class="bigger"><i class="glyphicon glyphicon-adjust" title="card"></i></div></div><div id="playerCard6" class="col-xs-2" style="display:none"><div id="card6" class="bigger"><i class="glyphicon glyphicon-adjust" title="card"></i></div></div></div><div id="dealerCards" class="col-xs-6"><div id="beforeDealerCard" class="col-xs-4"></div><div id="dealerCard1" class="col-xs-4"><div id="cardD1" class="bigger"><i class="glyphicon glyphicon-adjust" title="card"></i></div></div><div id="dealerCard2" class="col-xs-4"><div id="cardD2" class="bigger"><i class="glyphicon glyphicon-adjust" title="card"></i></div></div></div>';
	
	var resetBlackjackBtn = document.getElementById("btnArea");
	resetBlackjackBtn.innerHTML = '';
	resetBlackjackBtn.innerHTML = '<br/><button id="shuffler" class="btn btn-success btn-lg btn-block" onclick="blackjackDeal()" title="Shuffle Up and Deal">Shuffle Up and Deal<br/><i class="glyphicon glyphicon-repeat"></i></button><br/><div class="btn-block btn-group-justified"><a id="changeBet" class="btn btn-danger btn-lg" onclick="changeBet()" title="Change Bet">Change Bet<br/><i class="glyphicon glyphicon-transfer"></i></a><a id="stand" class="btn btn-warning btn-lg" onclick="stand()" title="Stand">Stand<br/><i class="glyphicon glyphicon-ok"></i></a><a id="hitMe" class="btn btn-primary btn-lg" onclick="hitMe()" title="Hit Me">Hit Me<br/><i class="glyphicon glyphicon-plus"></i></a><a style="display:none" id="hitMe2" class="btn btn-primary btn-lg" onclick="hitMe2()" title="Hit Me">Hit Me Again!<br/><i class="glyphicon glyphicon-plus"></i></a><a style="display:none" id="hitMe3" class="btn btn-primary btn-lg" onclick="hitMe3()" title="Hit Me">Hit Me Yet Again!<br/><i class="glyphicon glyphicon-plus"></i></a><a style="display:none" id="hitMe4" class="btn btn-primary btn-lg" onclick="hitMe4()" title="Hit Me" disabled>Hit Me again! I hate money!<br/><i class="glyphicon glyphicon-plus"></i></a></div>';
	
	blackjack("playerCard1");
	blackjack("playerCard2");
	blackjack("dealerCard1");
	
	var dealerCard2 = document.getElementById("dealerCard2");
	dealerCard2.innerHTML = "<img class='cardStyle' src='cards/blankCard.png'/>";

}


function stand(){
	blackjack("dealerCard2");
}

function hitMe(){
	$("#hitMe").hide();
	$("#hitMe2").show();
	$("#playerCard3").show();
	blackjack("playerCard3");
	
}
function hitMe2(){
	$("#hitMe2").hide();
	$("#hitMe3").show();
	$("#playerCard4").show();
	blackjack("playerCard4");
}
function hitMe3(){
	$("#hitMe3").hide();
	$("#hitMe4").show();
	$("#playerCard5").show();
	blackjack("playerCard5");
}
function hitMe4(){
	$("#hitMe4").hide();
	$("#hitMe5").show();
	$("#playerCard6").show();
	blackjack("playerCard6");
}
//********************
