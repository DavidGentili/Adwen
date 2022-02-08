const eventClose = (element, timeOut) => {
    return (e) => {
        if(timeOut)
            clearTimeout(timeOut);
        element.style.opacity = '0';
        setTimeout(function(){
            element.remove();
        },700);
    }
}

const addNewMessage = (message,type) => {
    const elementMessage = createNewMessage(message,type);
    document.getElementById('msg-panel').appendChild(elementMessage);   
}

const createNewMessage = (message, type) => {
    const elementMessage = document.createElement('div');
    const textMessage = document.createElement('p');
    const button = document.createElement('button');
    const timeOut = setTimeout(eventClose(elementMessage),10000);
    
    elementMessage.classList = `msg msg-${type}`;
    textMessage.textContent = message;
    button.textContent = 'X';
    button.addEventListener('click', eventClose(elementMessage,timeOut));

    elementMessage.appendChild(textMessage);
    elementMessage.appendChild(button);
    
    return elementMessage;
}

export {addNewMessage};