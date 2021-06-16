var pageWrapper = document.createElement('div')
document.body.appendChild(pageWrapper);
var myInput = document.createElement('input');
pageWrapper.appendChild(myInput);
var myButton = document.createElement('button');
pageWrapper.appendChild(myButton);
document.querySelector('button').innerHTML = "PRINT";
var ol = document.createElement('ol');
pageWrapper.appendChild(ol);

const print = (event) => {
    const Input = document.querySelector('input');
    const Ul = document.querySelector('ol');
    var li = document.createElement('li');
    li.innerHTML = Input.value;
    if (Input.value == 0) {
        alert('Please Insert Any ');
    } else {
        ol.appendChild(li);
    }

    Input.value = " ";


}
myButton.addEventListener('click', print);