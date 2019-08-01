import { Selector } from "testcafe";
import NavbarPage from "../page-objects/Navbar-Page";
import SearchResultsPage from "../page-objects/SearchResults-Page";

const navbarPage = new NavbarPage();
const searchResultsPage = new SearchResultsPage();

fixture `Send forgotten password test`
    .page `http://zero.webappsecurity.com/index.html`;

test("Search box should work", async t => {
    
    navbarPage.search("online bank");

    await t.expect(searchResultsPage.title.exists).ok();
    await t.expect(searchResultsPage.message.innerText)
        .contains("Zero - Free Access to Online Banking");
});