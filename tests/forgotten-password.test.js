import { Selector } from "testcafe";
//import { link } from "fs";
import NavbarPage from "../page-objects/Navbar-Page";
import LoginPage from "../page-objects/Login-Page";
import ForgottenPasswordPage from "../page-objects/ForgottenPassword-Page";

const navbarPage = new NavbarPage();
const loginPage = new LoginPage();
const passwordPage = new ForgottenPasswordPage();

fixture `Send forgotten password test`
    .page `http://zero.webappsecurity.com/index.html`;

test("Should send new password", async t => {
    
    navbarPage.clickSignInButton();
    loginPage.goToForgottenPassword();
    passwordPage.submitEmail("email@gmail.com");

    await t.expect(passwordPage.message.innerText)
        .contains("Your password will be sent to the following email");
    await t.expect(passwordPage.userEmail.exists).notOk();
});