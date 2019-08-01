import { Selector } from "testcafe";
import NavbarPage from "../page-objects/Navbar-Page";
import LoginPage from "../page-objects/Login-Page";

const navbarPage = new NavbarPage();
const loginPage = new LoginPage();

fixture `Login Test`
    .page `http://zero.webappsecurity.com/index.html`;

test("Should try to login and get error message", async t => {
    
    navbarPage.clickSignInButton();
    loginPage.login("user", "password");

    await t.expect(loginPage.errorMessage.innerText)
        .contains("Login and/or password are wrong");
    await t.expect(loginPage.form.exists).ok();
});