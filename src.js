var i = 0; 
var pass = 0; 
var page = 1; 

var content = function (){
	var tmp1, tmp2; 
	tmp1 = document.getElementsByClassName("popup_main_prize")[0].innerText; 
	if(tmp1=="序號不足，請等待官方補充序號，謝謝!!"){
		tmp2 = ""; 
		pass++;
		i--; 
	} 
	else{
		tmp2 = document.getElementsByClassName("popup_main_prize_num")[0].innerText; 
		console.log(tmp1 + "\t" + tmp2);
	}	 
	document.getElementsByClassName("popup_close")[0].click()
	i++; 
	setTimeout(doLoop, 1500); 
}

var doLoop = function (){
	if($('.prize_radio').length <= 0){
		console.log("總共領取了 " + i + " 個序號"); 
		return; 
	}
	//console.log("i = " + i + ", pass = " + pass + ", page = " + page + "; "); 
	if(pass%10 == 0 && pass!=0){
		console.log("下一頁"); 
		GetUnexchangeItems(page+1);
		page++;  
	}
    $('.prize_radio')[0+pass].checked = true; 
	Exchange(); 
	setTimeout(content, 1500); 
}

doLoop(); 
