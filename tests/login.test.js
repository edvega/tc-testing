import { Selector } from "testcafe";
import NavbarPage from "../page-objects/Navbar-Page";

const navbarPage = new NavbarPage();

fixture `Login Test`
    .page `http://zero.webappsecurity.com/index.html`;

test("Should try to login and get error message", async t => {
    
    //Get selectors
    const signInButton = Selector("#signin_button");
    const loginForm = Selector("#login_form");
    const userName = Selector("#user_login");
    const userPassword = Selector("#user_password")
    const errorMessageText = Selector(".alert-error").innerText;

    //Actions
    await t.click(navbarPage.signInButton);
    await t.typeText(userName, "user-name", { paste: true });
    await t.typeText(userPassword, "user-password", { paste: true });
    await t.pressKey("enter");

    //Assertions
    await t.expect(errorMessageText).contains("Login and/or password are wrong");
    await t.expect(loginForm.exists).ok();
});