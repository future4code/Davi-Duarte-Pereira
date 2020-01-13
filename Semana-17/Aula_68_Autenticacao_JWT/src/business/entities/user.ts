export class User {
    constructor(
        private email: string,
        private password: string
    ){}

    private validatePassword(newPassword?: string){
        if (newPassword) {
            if (newPassword.length <= 6) {
                throw new Error (`Your password should have at least 7 characters.`);
            }
        } else {
            if (this.password.length <= 6) {
                throw new Error (`Your password should have at least 7 characters.`);
            }
        }
    }

    public signUp(){
        this.validatePassword();
    }

    public signIn(email: string, password: string){
        if (email === this.email && password === this.password) {
            console.log("signed in")
        }
    }

    public getInfo(){}

    public changePassword(newPassword: string){
        this.validatePassword(newPassword);
    }
}