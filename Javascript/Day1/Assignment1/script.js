const Page_Wrapper = document.createElement('div');
document.body.appendChild(Page_Wrapper);
const My_Input = document.createElement('input');
Page_Wrapper.appendChild(My_Input);



const My_Button = document.createElement('button');
Page_Wrapper.appendChild(My_Button);
My_Button.innerHTML = "PRINT";
const ul = document.createElement('ul');
Page_Wrapper.appendChild(ul);



My_Button.addEventListener('click', print);

function print(event) {

    const Input = document.querySelector('input');
    const ul = document.querySelector('ul');
    const li = document.createElement('li');

    li.innerHTML = Input.value;
    ul.appendChild(li);

    console.log(li);;

}