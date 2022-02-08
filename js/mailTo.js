import {addNewMessage} from './message.js'

const userID = 'user_kA6ZUHog46ymKfazw90gu';
const templateID = 'template_xxgedb2';
const serviceID = 'service_w8x3l7a'

const correctName = (name) => {
    const clearName = name.trim();
    return clearName.length > 0;
}

const correctEmail = (email) => {
    const re = /^([\da-zA-Z_\.-]+)@([\da-zA-Z\.-]+)\.([a-zA-Z\.]{2,6})$/;
    return (email && re.exec(email)) ? true : false;
}

const correctMessage = (message) => {
    const clearMessage = message.trim();
    return clearMessage.length > 10
}

const evaluateValue = (callback) => {
    return (e) => {
        e.target.classList =  (callback(e.target.value)) ? '' : 'incorrectInput';
    }
}

const getData = () => {
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('contactMessage').value;

    return correctName(name) && correctEmail(email) && correctMessage(message) ? {name, email, message} : undefined;
}



const eventSendMail = (e) => {
    e.preventDefault()
    const data = getData();
    if(data)
        sendMail(data,e.target[3]);

}

const sendMail = (params, button) => {
    button.disabled = true;
    emailjs.send(serviceID,templateID,params,userID)
    .then((res) => {
        if(res.status === 200)
            addNewMessage('El mensaje se envio con exito', 'successful');
        else
            addNewMessage('Hubo un error al enviar el mensaje, por favor intenelo nuevamente', 'error');
        button.disabled.false
    })
    .catch((e) => {
        addNewMessage('Hubo un error al enviar el mensaje, por favor intenelo nuevamente', 'error');
        button.disabled.false
    })
}




document.getElementById('contactForm').addEventListener('submit',eventSendMail);
const name = document.getElementById('contactName').addEventListener('blur', evaluateValue(correctName));
const email = document.getElementById('contactEmail').addEventListener('blur', evaluateValue(correctEmail));
const message = document.getElementById('contactMessage').addEventListener('blur', evaluateValue(correctMessage));
