const formData = {
    email: '',
    message: '',
}
const localStorageKey = 'feedback-form-state';

const formElem = document.querySelector('.feedback-form');

const emailArea = formElem.elements.email;
const messageArea = formElem.elements.message;
const userData = localStorage.getItem(localStorageKey);
if (userData !== null) {
    try {    
        const parsedUserData = JSON.parse(userData);
        emailArea.value = parsedUserData.email;
        messageArea.value = parsedUserData.message;
    } catch (error) {
        console.log(error);    
    }
} else {
    emailArea.value = '';
    messageArea.value = '';
}

formElem.addEventListener('input', handleFormElem);
function handleFormElem(evt) {           
    formData.email = evt.currentTarget.elements.email.value.trim();
    formData.message = evt.currentTarget.elements.message.value.trim();
    localStorage.setItem(localStorageKey, JSON.stringify(formData));    
}

formElem.addEventListener("submit", (evt) => {
    evt.preventDefault();
    if (formData.email !== '' && formData.message !== '') {
        console.log(formData);
        localStorage.removeItem(localStorageKey);
        formElem.reset();
        formData.email = '';
        formData.message = '';
    } else {
        alert('Fill please all fields');
    }   
});