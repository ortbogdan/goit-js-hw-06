
const formRef = document.querySelector('form.login-form');

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