function getFormvalue(event) {
	event.preventDefault();
    //Write your code here
	alert(`${event.target[0].value} ${event.target[1].value}`)
}
