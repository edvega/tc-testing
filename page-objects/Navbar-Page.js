import { Selector , t } from "testcafe";

class NavbarPage {
    constructor() {
        this.searchBox = Selector("#searchTerm");
        this.signInButton = Selector("#signin_button");
    }

    async search(text) {
        await t.typeText(this.searchBox, text, { paste: true, replace: true})
            .pressKey("enter");
    }

    async clickSignInButton() {
        await t.click(this.signInButton);
    }
}

export default NavbarPage;