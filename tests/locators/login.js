class LoginLocators {

    constructor(page){
        this.page = page
    }

    async elements() {

    var elements = {
        "user_name" : this.page.getLabel('Email'),
        "password": this.page.getLabel('Password'),
        "sign_in": this.page.getByRole('button' , {name: "Sign in"})
    }

    }

}