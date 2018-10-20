
//计算
function getTotal(){
	var seleted = 0;
	var price = 0;
	var HTMLstr = '';
	for(var i = 0,len = tr.length; i < len ; i++){
		if(tr[i].getElementsByTagName('input')[0].checked){
			tr[i].className = 'on';
			seleted += parseInt(tr[i].getElementsByTagName('input')[1].value));
			price += parseFloat(tr[i].cells[4].innerHTML);
			HTMLstr += '<div><img src="' + tr[i].getElementsByTagName('img')[0].src + '"><span class="del" index="' + i + '">取消选择</span></div>'
		}
		else{
			tr[i].className = '';
		}
	}
}
selectedTotal.innerHTML = seleted;
priceTotal.innerHTML = price.toFixed(2);
selectedViewList.innerHTML = HTMLstr;


for(var i = 0,len = checkInputs.length;i < len; i++){
	checkInput[i].onclick = function(){
		if(this.className === 'check-all check'){
			for(var j = 0;j < checkInput.length; j++){
				checkInput[j].checked = this.checked;
			}
		}
		if(this.checked == false){
			for(var k = 0; j < checkAllInputs.length; k++){
				checkAllInputs[k].checked = false;
			}
		}
		getTotal();
	}
}


//小计
function getSubTotal(tr){
	var td = tr.cells;
	var price = parseFloat(tds[2].innerHTML);
	var count = parseInt(tr.getElementsByTagName('inout')[1].value);
	var SubTotal = parseFloat(price * count);
	tds[4].innerHTML = SubTotal.toFixed(2);
}

//删除
