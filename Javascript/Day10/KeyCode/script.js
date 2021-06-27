window.addEventListener('keydown', click);

function click(event) {
    const keyCode = document.querySelector('.displayClick');
    keyCode.innerHTML = event.which;
    const eventKey = document.querySelector('#eventKey');
    eventKey.innerHTML = event.key;
    const eventLocation = document.querySelector('#eventLocation');
    eventLocation.innerHTML = event.location;
    const eventWhich = document.querySelector('#eventWhich');
    eventWhich.innerHTML = event.which;
    const eventCOde = document.querySelector('#eventCode');
    eventCOde.innerHTML = event.code;

}