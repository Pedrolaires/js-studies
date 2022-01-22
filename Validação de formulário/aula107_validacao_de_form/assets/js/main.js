class formValidate{
    constructor(){
        this.form = document.querySelector('.formulario');
        this.events();
    }

    events(){
        this.form.addEventListener('submit', e =>{
            this.handleSubmit(e);
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const validFields = this.fieldIsValid();
        const validPasswords = this.passwordIsValid();

        if(validFields && validPasswords){
            alert('Form enviado!');
            this.form.submit();
        }
    }

    passwordIsValid(){
        let valid = true;
        const password = this.form.querySelector('.senha');
        const confirmPassword = this.form.querySelector('.repetir-senha');

        if(password.value !== confirmPassword.value){
            valid = false;
            this.createError(password, 'Campos senha e repertir senha precisa ser iguais!');
            this.createError(confirmPassword, 'Campos senha e repertir senha precisa ser iguais!');
        }if(password.value.length < 6){
            valid = false;
            this.createError(password, 'A senha deve conter no mínimo 6 caracteres!');
        }
        return valid;
    }

    fieldIsValid(){
        let valid = true;

        for(let errorText of this.form.querySelectorAll('.error-text')){
            errorText.remove();
        }
        for (let field of this.form.querySelectorAll('.validar')){
            if(!field.value){
                const label = field.previousElementSibling.innerText;
                this.createError(field, `O campo '<b>${label}</b>' não pode ficar em branco!`);
                valid = false;
            }
            if(field.classList.contains('cpf')){
                if(!this.cpfValidate(field)) valid = false;
            }
            if(field.classList.contains('usuario')){
                if(!this.userValidate(field)) valid = false;
            }
        }    
        return valid;
    }

    userValidate(field){
        const user = field.value;
        let valid = true;
        if(user.length < 3 || user.length > 12){
            this.createError(field, 'Seu nome de usuário deve conter entre 3 e 12 caracteres!')
            valid = false;
        }
        if(!user.match(/^[a-zA-Z0-9]+$/g) && user.length > 0){
            this.createError(field, 'O nome de usuário só pode conter letras/números!');
            valid = false;
        }
        return valid;
    }

    cpfValidate(field){
        const cpf = new ValidaCPF(field.value);
        if(!cpf.valida()){
           this.createError(field, 'CPF inválido');
        }
        return true;
    }

    createError(field, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        field.insertAdjacentElement('afterend', div);
    }
}

const valida = new formValidate();
