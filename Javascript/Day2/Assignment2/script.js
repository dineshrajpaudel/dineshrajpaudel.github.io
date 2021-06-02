const Page_Wrapper = document.createElement('div');
document.body.appendChild(Page_Wrapper);
const My_Input = document.createElement('input');
Page_Wrapper.appendChild(My_Input);
const My_Button = document.createElement('button');
Page_Wrapper.appendChild(My_Button);
My_Button.innerHTML = "PRINT";
const ul = document.createElement('ul');
Page_Wrapper.appendChild(ul);




let number = 0;
const My_Object = {};

My_Button.addEventListener('click', print);

function print(event) {
    number++;
    const Input = document.querySelector('input');
    const ul = document.querySelector('ul');
    const li = document.createElement('li');

    li.innerHTML = Input.value;
    ul.appendChild(li);
    My_Object[number] = { value: Input.value, name: "Dinesh Raj Paudel" };
    console.log(My_Object);;

}