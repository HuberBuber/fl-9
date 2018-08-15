let a, b, pwd, save;
a = +prompt('Please enter amount of money:', '');
b = +prompt('Please enter discount:', '');
pwd = a * b/100;
save = a - pwd;
if (a < 0) {
  console.log('Invalid data');
} else if (Number.isInteger(pwd) && Number.isInteger(save)) {
	console.log('For input data ' + a + '(price) and ' + b + '(discount):\nPrice without discount: ' + a
								+ '\nDiscount: ' + b + '%' + '\nPrice with discount: ' + save + '\nSaved: ' + pwd );
} else {
	pwd = pwd.toFixed(2);
	save = save.toFixed(2);
	console.log('For input data ' + a + '(price) and ' + b + '(discount):\nPrice without discount: ' + a 
							+ '\nDiscount: ' + b + '%' + '\nPrice with discount: ' + save + '\nSaved: ' + pwd );
}
		

	


	
