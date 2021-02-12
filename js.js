/*scroll*/
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 4) {
        $('.ulka').addClass('navbar-active');
        }
        if ($(window).scrollTop() < 4) {
            $('.ulka').removeClass('navbar-active');
        }
    });
});

/*slider*/
$('#rightButoon').click(function(){
	index++;
	$('.pict').attr("src",mas[index]);
	if(index>=4){
		index=4;
	}
	console.log(index);
})
let index=0;
$('.pict').click(function ola(){
        // Change src attribute of image
        $(this).attr("src", mas[index]);
    });    
$('#leftButton').click(function(){
	index--;
	$('.pict').attr("src",mas[index]);
	if(index<=0){
		index=0;
	}	console.log(index);
})

let mas=['img/derevya-pejzazh-25.jpg',"img/pejzazh-polya-trava-37.jpg",'img/pejzazh-voda-40.jpg',"img/nebo-pejzazh-priroda-voda-49.jpg","img/pejzazh-polya-trava-24.jpg"]
let i=1;
/*button personalOffice*/
$('#personalOffice').click(function(){
	
	$('.wrapLoginFOrmat').toggleClass('wrapLoginFOrmatactive');	
	$('.wrapRegistrForm').toggleClass('wrapRegistrFormactive');
	i++;
	if(i%2==0){
		login();
	}else{
		ofice();
	}
	if(i==100){
		i=2;
	}
	
	});
function ofice(){
$('#personalOffice').html('регістрація');


}
function login(){
	$('#personalOffice').html('особистий кабінет');
	
	
}
let btnchex =document.querySelector('#chekpassword');
let FirstInputchex=document.querySelector('.cheket1');
let SecondtInputchex=document.querySelector('.cheket2');


btnchex.addEventListener('click',onShowText);

function	onShowText(){
	if(FirstInputchex.type==="password"){
		FirstInputchex.type="text";
		SecondtInputchex.type="text";
		btnchex.innerHTML="сховати пароль";

	}else{
		FirstInputchex.type ='password';
		SecondtInputchex.type ='password';
		btnchex.innerHTML="показати пароль";
	}
}


let ButtonResistration=document.querySelector('#registration');
function chexPaswordRegistration(){
	if(FirstInputchex.value===SecondtInputchex.value){
		console.log('good')
	}else{
		alert('пароль повинен бути одинаковий');
		FirstInputchex.value='';
		SecondtInputchex.value='';
	}
}
ButtonResistration.addEventListener('click',chexPaswordRegistration)
let j=1;


$('#btnTextInfo').click(function(){
	j++;
	console.log(j);
	if(j%2==0){
		scrooll();
	}else{
		oFFscroLL();
	}if(j==100){
		j=2;
	}

})


function scrooll(){
	$('.thewwrap').css({
		'overflowY': 'scroll'
	})
}
function oFFscroLL(){
	$('.thewwrap').css({
		'overflow': 'hidden'
	})
}

$('.JobBlog').mousemove(function(){
	$('.buttonEndText').css({
		'display': 'flex'
	})
})



/*paralax img*/





document.querySelector('.div').addEventListener('mousemove',paralaxEvent);


function paralaxEvent(event){

	$('.layer').css("transform", `translateX(${(event.clientX-1200)/8}px)`);

}
/*function paralaxEvent1(event){

	$('.layer1').css("transform", `translateY(${(event.clientY-800)/5}px)`);

}
*/