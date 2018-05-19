var i = 0; 

var content = function (){
	var tmp1, tmp2; 
	tmp1 = document.getElementsByClassName("popup_main_prize")[0].innerText; 
	tmp2 = document.getElementsByClassName("popup_main_prize_num")[0].innerText; 
	console.log(tmp1 + " - " + tmp2); 
	document.getElementsByClassName("popup_close")[0].click()
	i++; 
	setTimeout(doLoop, 1000); 
}

var doLoop = function (){
	if($('.prize_radio').length <= 0){
		console.log("總共領取了 " + i + " 個序號"); 
		return; 
	}
    $('.prize_radio')[0].checked = true; 
	Exchange(); 
	setTimeout(content, 1000); 
}

doLoop(); 
