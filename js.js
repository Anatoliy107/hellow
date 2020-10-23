// акції

// 1
var znachen = document.getElementsByClassName('GC');
for (var i = 0; i < znachen.length; i++) {

};
// кнопка стерти
function deleteZnachen(){
	var year;
	var age1=prompt("скільки акцій хочете продати","0");
	znachen[0].value=znachen[0].value-age1;
	if (znachen[0].value<=0) {
		znachen[0].value=0;
		if (znachen[0].value==0) {
			znachen[1].value=0
		}
	};
};
// 2
var znachen2 = document.getElementsByClassName('GC1');
for (var i = 0; i < znachen2.length; i++) {

};
// кнопка стерти
function deleteZnachen1(){
	var year;
	var age1=prompt("скільки акцій хочете продати","0");
	znachen2[0].value=znachen2[0].value-age1;
	if (znachen2[0].value<=0) {
		znachen2[0].value=0;
		if (znachen2[0].value==0) {
			znachen2[1].value=0
		}
	};
};
// 3
var znachen3 = document.getElementsByClassName('GC2');
for (var i = 0; i < znachen3.length; i++) {

};
function deleteZnachen2(){
var year;
	var age1=prompt("скільки акцій хочете продати","0");
	znachen3[0].value=znachen3[0].value-age1;
	if (znachen3[0].value<=0) {
		znachen3[0].value=0;
		if (znachen3[0].value==0) {
			znachen3[1].value=0
		}
	};

};
// 4
var znachen4 = document.getElementsByClassName('GC3');
for (var i = 0; i < znachen4.length; i++) {

};
function deleteZnachen3(){
var year;
	var age1=prompt("скільки акцій хочете продати","0");
	znachen4[0].value=znachen4[0].value-age1;
	if (znachen4[0].value<=0) {
		znachen4[0].value=0;
		if (znachen4[0].value==0) {
			znachen4[1].value=0
		}
	};

};
// витягуємо бізнес
var smallB = document.getElementsByClassName('mlb');
for (var i = 0; i < smallB.length; i++) {
	
};
function plasSmallB(event){
	
	 
	 // вивести в строку малий бізнес
	
	 if (smallB[10].value>=1||smallB[11].value>=1||smallB[12].value>=1||smallB[13].value>=1||smallB[14].value>=1||smallB[15].value>=1||smallB[16].value>=1||smallB[17].value>=1) {
	 	smallB[0].value=0;
	 	smallB[1].value=0;
	 	smallB[2].value=0;
	 	smallB[3].value=0;
	 	smallB[4].value=0;
	 	smallB[5].value=0;
	 	smallB[6].value=0;
	 	smallB[7].value=0;
	 	smallB[8].value=0;
	 	smallB[9].value=0;
	 };
	 if (smallB[18].value>=1 ||smallB[19].value>=1||smallB[20].value>=1||smallB[21].value>=1||smallB[22].value>=1||smallB[23].value>=1) {
	 	smallB[0].value=0;
	 	smallB[1].value=0;
	 	smallB[2].value=0;
	 	smallB[3].value=0;
	 	smallB[4].value=0;
	 	smallB[5].value=0;
	 	smallB[6].value=0;
	 	smallB[7].value=0;
	 	smallB[8].value=0;
	 	smallB[9].value=0;
	 	smallB[10].value=0;
	 	smallB[11].value=0;
	 	smallB[12].value=0;
	 	smallB[13].value=0;
	 	smallB[14].value=0;
	 	smallB[15].value=0;
	 	smallB[16].value=0;
	 	smallB[17].value=0;
	 }
	  var sumSmallB =Number(smallB[0].value)+Number(smallB[1].value)+Number(smallB[2].value)+Number(smallB[3].value)+Number(smallB[4].value)+Number(smallB[5].value)+Number(smallB[6].value)+Number(smallB[7].value)+Number(smallB[8].value)+Number(smallB[9].value)+Number(smallB[10].value)+Number(smallB[11].value)+Number(smallB[12].value)+Number(smallB[13].value)+Number(smallB[14].value)+Number(smallB[15].value)+Number(smallB[16].value)+Number(smallB[17].value)+Number(smallB[18].value)+Number(smallB[19].value)+Number(smallB[20].value)+Number(smallB[21].value)+Number(smallB[22].value)+Number(smallB[23].value);
	 document.getElementById('pasiveDohid').value=sumSmallB;
	 razta();
	 zarplata();
	 activePlasPasive();
	 otrivatubabosiku();



}
//витрати
var vutratu = document.getElementsByClassName('rashodu');
for (var i = 0; i < vutratu.length; i++) {
	
};
function razta(event){
	

	 // апартаменти
	 var apartamentp,mnozeniaapartamentp;
	apartamentp=document.getElementById("apartament").value;
	mnozeniaapartamentp=apartamentp*300;
	// машина
	var carp,mnozeniacarp;
	carp=document.getElementById('car').value;
	mnozeniacarp=carp*600;
	// будинок
	var housp,mnozeniahousp;
	housp=document.getElementById('hous').value	;
	mnozeniahousp=housp*600;
	// яхта
	var yachtp,mnozeniayachtp;
	yachtp=document.getElementById('yacht').value;
	mnozeniayachtp=yachtp*1500;
	// літак
	var planep,mnozeniaplanep;
	planep=document.getElementById('plane').value;
	mnozeniaplanep=planep*5000;
	// діти
	var childrenp,mnozeniacholdrenp;
	childrenp=document.getElementById('children').value;
	mnozeniacholdrenp=childrenp*300;


	 var sumVutrat =Number(mnozeniacarp)+Number(mnozeniahousp)+Number(mnozeniayachtp)+Number(mnozeniaplanep)+Number(mnozeniacholdrenp)+Number(vutratu[0].value)+Number(vutratu[1].value)+Number(vutratu[2].value)+Number(vutratu[3].value)+Number(vutratu[4].value);
	 	 // вивести в строку великий бізнес
	 document.getElementById('zagalVutrat').value=sumVutrat;

};
// активний дохід
function zarplata(){
		var ZARPLATA;
ZARPLATA=document.getElementById('zarplata').value
 document.getElementById('activeDohid').value=ZARPLATA;
};
// актив + пасив
function activePlasPasive(){
	var activePasive,a,b;

 a=document.getElementById('zarplata').value;
 b=document.getElementById('pasiveDohid').value;
  activePasive=Number(a)+Number(b);
document.getElementById('zagalDohid').value=activePasive;
}
// отримати бабла
function otrivatubabosiku(){
	var a,b,c;
	 a=document.getElementById('zagalDohid').value;
	 b= document.getElementById('zagalVutrat').value;
	 c=Number(a)-Number(b);
document.getElementById('cashFlow').value=c;
};
// долги
var debt;
var debtInput = document.getElementById('debt');
 // debtInput.value = debt;
function myParseInt(value){
    value = parseInt(value);
    if(isNaN(value)){value = 0;}
    return value;
}
    function debtChange(message, action) {
        var debtChangeValue = myParseInt(prompt(message, ''));
        var debt = myParseInt(debtInput.value);
        switch (action){
            case 'increase':
                debt += debtChangeValue;
                break;
            case 'decrease':
                debt -= debtChangeValue;
                break;
            default:
                break;
        }
        debtInput.value = debt;
    }
    document.getElementById('debt-increase').addEventListener('click', function () {
        debtChange('Сколько Вы хотите взять в долг?', 'increase');
    });
    document.getElementById('debt-decrease').addEventListener('click', function () {
        debtChange('Сколько Вы хотите выплотить?', 'decrease');
    });
    function BezZarplatu(){

    	 // вивести в строку малий бізнес
	
	 if (smallB[10].value>=1||smallB[11].value>=1||smallB[12].value>=1||smallB[13].value>=1||smallB[14].value>=1||smallB[15].value>=1||smallB[16].value>=1||smallB[17].value>=1) {
	 	smallB[0].value=0;
	 	smallB[1].value=0;
	 	smallB[2].value=0;
	 	smallB[3].value=0;
	 	smallB[4].value=0;
	 	smallB[5].value=0;
	 	smallB[6].value=0;
	 	smallB[7].value=0;
	 	smallB[8].value=0;
	 	smallB[9].value=0;
	 };
	 if (smallB[18].value>=1 ||smallB[19].value>=1||smallB[20].value>=1||smallB[21].value>=1||smallB[22].value>=1||smallB[23].value>=1) {
	 	smallB[0].value=0;
	 	smallB[1].value=0;
	 	smallB[2].value=0;
	 	smallB[3].value=0;
	 	smallB[4].value=0;
	 	smallB[5].value=0;
	 	smallB[6].value=0;
	 	smallB[7].value=0;
	 	smallB[8].value=0;
	 	smallB[9].value=0;
	 	smallB[10].value=0;
	 	smallB[11].value=0;
	 	smallB[12].value=0;
	 	smallB[13].value=0;
	 	smallB[14].value=0;
	 	smallB[15].value=0;
	 	smallB[16].value=0;
	 	smallB[17].value=0;
	 }
	  var sumSmallB =Number(smallB[0].value)+Number(smallB[1].value)+Number(smallB[2].value)+Number(smallB[3].value)+Number(smallB[4].value)+Number(smallB[5].value)+Number(smallB[6].value)+Number(smallB[7].value)+Number(smallB[8].value)+Number(smallB[9].value)+Number(smallB[10].value)+Number(smallB[11].value)+Number(smallB[12].value)+Number(smallB[13].value)+Number(smallB[14].value)+Number(smallB[15].value)+Number(smallB[16].value)+Number(smallB[17].value)+Number(smallB[18].value)+Number(smallB[19].value)+Number(smallB[20].value)+Number(smallB[21].value)+Number(smallB[22].value)+Number(smallB[23].value);
	 document.getElementById('pasiveDohid').value=sumSmallB;
	  razta();
	  var activePasive,b;
	  b=document.getElementById('pasiveDohid').value;
  activePasive=Number(b);
document.getElementById('zagalDohid').value=activePasive;
otrivatubabosiku();
    }

function funyy1(){
var chbox;
chbox=document.getElementById('faire');
	if (chbox.checked) {
		BezZarplatu()
	}
	else {
		plasSmallB()
	}}


	 


