
const formRef = document.querySelector('form.login-form');
const emailRef = document.querySelector('input[type="email"]');
const passwordRef = document.querySelector('input[type="password"]');

const onTargetSendForm = event => {
    
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
    
    const formData = {
        email,
        password,
    }

    if (!password && !email) {
        alert('Введіть дані!')
    }
    else console.log(formData);
    formRef.reset();
   
}

formRef.addEventListener('submit', onTargetSendForm)