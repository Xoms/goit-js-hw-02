export default class T7 {
    logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

    constructor(){
        document.querySelector(".addLogin").addEventListener('click', this.clickHandle.bind(this));
        document.querySelector(".showLogins").addEventListener('click', this.showLogins.bind(this));
    }

    

    isLoginValid(login){
        console.log((login.length < 3) || (login.length > 15));
        return !((login.length < 3) || (login.length > 15) );
    }

    isLoinUnique(login) {
        return (this.logins.includes(login))
           
    }

    addLogin(login) {
        if (!this.isLoginValid(login)){
            return 'Ошибка! Логин должен быть от 4 до 16 символов';  
        }
        if (!this.isLoinUnique(login)) {
            return 'Такой логин уже используется!';            
        }
        this.logins.push(login);
        return 'Логин успешно добавлен!';
    }

    showLogins(){
        console.log(this.logins);
    }

    clickHandle(){
        const newLogin = document.querySelector('[name="newLogin"]').value;
        console.log ( this.addLogin(newLogin) );
        
    }
}