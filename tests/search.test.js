import { Selector } from "testcafe";
import NavbarPage from "../page-objects/Navbar-Page";

const navbarPage = new NavbarPage();

fixture `Send forgotten password test`
    .page `http://zero.webappsecurity.com/index.html`;

test("Search box should work", async t => {
    
    // Get selectors
    const searchBox = Selector("#searchTerm");
    const resultsTitle = Selector("h2");
    const message = Selector("div");
    
    // Actions
    // await t.typeText(searchBox, "online bank");
    // await t.pressKey("enter");
    navbarPage.search("online bank");

    // Assertions
    await t.expect(resultsTitle.exists).ok();
    await t.expect(message.innerText).contains("Zero - Free Access to Online Banking");
});