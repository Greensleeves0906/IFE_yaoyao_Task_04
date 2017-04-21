function getmatrix(a,b,c,d,e,f){  //将矩阵转换为角度
    var aa=Math.round(180*Math.asin(a)/ Math.PI);  
    var bb=Math.round(180*Math.acos(b)/ Math.PI);  
    var cc=Math.round(180*Math.asin(c)/ Math.PI);  
    var dd=Math.round(180*Math.acos(d)/ Math.PI);  
    var deg=0;  
    if(aa==bb||-aa==bb){  
        deg=dd;  
    }else if(-aa+bb==180){  
        deg=180+cc;  
    }else if(aa+bb==180){  
        deg=360-cc||360-dd;  
    }  
    return deg>=360?0:deg;    
}
function getDeg(){//得到角度值
	var deg = eval('get'+window.getComputedStyle(block, null).getPropertyValue("transform"));
	return deg;
}

function allCommand(){
	var command = document.getElementById('command').value;
	var block = document.getElementById('block');
	var y = block.offsetTop;
	var x = block.offsetLeft;
	if(command == "GO"){
		if (x > 350) {
			if(getDeg()==270){
				block.style.left =(x-54)+"px";
			}
		}
		if (x < 750) {
			if(getDeg() ==90){
				block.style.left =(x+54)+"px";
			}
		}
		if (y > 100) {
			if(getDeg()==0){
				block.style.top =(y-50)+"px";
			}
		}
		if (y < 500) {
			if(getDeg()==180){
				block.style.top=(y+50)+"px";
			}
		}
		}
	if(command == "TUN LEF"){
			block.style.transform = "rotate("+ eval(getDeg()-90) +"deg)";
			console.log(block.offsetTop);
		}
	if(command == "TUN RIG"){
			block.style.transform = "rotate("+ eval(getDeg()+90) +"deg)";
		}
	if(command == "TUN BAC"){
			block.style.transform = "rotate("+ eval(getDeg()+180) +"deg)";
	}

}
function init(){
	var doIt = document.getElementById('doIt');
	doIt.onclick = allCommand;
}
init();

