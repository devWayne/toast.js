toastjs
======

//快速使用   
$.toast("Your Tips");

/*
详细配置
可选择传入toast消失的时间，toast的宽度和文字的大小
*/
$.toast(
"Your Tips",
{
	time:2000,
	width:300,
	height:100,
	font_size: 14
}); 

//修改默认配置

$.toast.defaults={
        time:2000,
		width:300,
		height:100,
		font_size: 14
}

