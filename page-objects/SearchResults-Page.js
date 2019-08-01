import { Selector, t } from "testcafe";

class SearchResultsPage {
    constructor() {
        this.title = Selector("h2");
        this.message = Selector("div");
    }
}

export default SearchResultsPage;