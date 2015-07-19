toastjs[![Build Status](https://travis-ci.org/devWayne/toast.js.svg?branch=master)](https://travis-ci.org/devWayne/toast.js)
============
> Zepto/jQuery Plugin for toast

##Quick use

```javascript  
$.toast("Your Tips");
```
##API

###Single Line Toast
```javascript  
$.toast(
"Your Tips",
{
	time:2000,
	width:300,
	height:100,
	padding:15,
	font_size: 14
},function(){
	console.log('i m callback');
});
``` 

###Double Lines Toast
```javascript  
$.toast(
{
	title:'Title',
	content:'Here is content'
});
```


###Close Toast
```javascript 
$.toast.close();
```


###Default Config
```javascript  
$.toast.defaults={
	time:2000,
	width:300,
	height:100,
	padding:15,
	font_size: 14
}
```
 - if time=0,the toast will never disappear

###Center Show
```javascript 
$.toast.centershow('<div class="popbox">mybox</div>');
```

###Close Center Show
```javascript 
$.toast.centershow.close();
```




