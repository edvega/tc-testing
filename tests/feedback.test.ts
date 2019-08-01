import { Selector } from "testcafe";
import FeedbackPage from "../page-objects/Feedback-Page";

const feedbackPage = new FeedbackPage();

fixture `Send forgotten password test`
    .page `http://zero.webappsecurity.com/index.html`;

test("Should submit feeback form", async t => {

    //Get selectors
    const linkToFeedback = Selector("#feedback");
    const message = Selector("div");

    //Actions
    await t.click(linkToFeedback);
    feedbackPage.submitFeedback(t);

    //Assertions
    await t.expect(message.innerText).contains("Thank you for your comments");    
});