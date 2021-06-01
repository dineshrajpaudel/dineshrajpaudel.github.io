const Second_Input = document.createElement('input');
document.body.appendChild(Second_Input);
const Third_Button = document.createElement('button');
document.body.appendChild(Third_Button);
Third_Button.innerHTML = "BUTTON";
Second_Input.addEventListener('input', print);

function print(event) {
    console.log(event.target.value);
}