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

###Center Show
```javascript 
$.toast.centershow('.popbox');
```
