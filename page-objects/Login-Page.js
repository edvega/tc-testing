import { Selector, t } from "testcafe";

class LoginPage {

    constructor() {
        this.form = Selector("#login_form");
        this.userName = Selector("#user_login");
        this.userPassword = Selector("#user_password")
        this.errorMessage = Selector(".alert-error");
        this.linkToPasswords = Selector("a").withText("Forgot your password ?");
    }

    async login(username, password) {
        await t.typeText(this.userName, username)
            .typeText(this.userPassword, password)
            .pressKey("enter");
    }

    async goToForgottenPassword() {
        await t.click(this.linkToPasswords);
    }
}

export default LoginPage;