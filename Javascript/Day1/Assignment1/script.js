const page_wrapper = document.createElement('div');
document.body.appendChild(page_wrapper);


const My_Input = document.createElement('input');
page_wrapper.appendChild(My_Input);
const My_Button = document.createElement('button');
page_wrapper.appendChild(My_Button);
My_Button.innerHTML = "PRINT";
My_Button.addEventListener('click', print);




function print() {

    const My_Input = document.querySelector('input');
    document.write("." + My_Input.value);

}