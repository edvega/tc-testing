import { Selector, t } from "testcafe";

class LoginPage {

    constructor() {
        this.loginForm = Selector("#login_form");
        this.userName = Selector("#user_login");
        this.userPassword = Selector("#user_password")
        this.errorMessageText = Selector(".alert-error");
    }

    async login(username, password) {
        await t.typeText(this.userName, username)
            .typeText(this.userPassword, password)
            .pressKey("enter");
    }
}

export default LoginPage;