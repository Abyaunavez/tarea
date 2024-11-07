function getFormvalue(event) {
    event.preventDefault();
    const fname = document.querySelector('input[name="fname"]').value;
    const lname = document.querySelector('input[name="lname"]').value;
console.log (`First name: ${fname}, Last name: ${lname}`);
}