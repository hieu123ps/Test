function get() {
	let fullName = document.getElementById("fullname");
	let ID = document.getElementById("id");
	let dbt = document.getElementById("bdt");
	let address = document.getElementById('address');

	let gender = " ";
	if (document.getElementByIt('male').checked)
	{
		gender = document.getElementById("male").value;
	}
	else{gender = document.getElementById("female").value;}
	console.log(gender);
}