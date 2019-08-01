import { Selector, t } from "testcafe";

class FeedbackPage {

    form_name: Selector =  Selector("#name");
    form_email: Selector = Selector("#email");
    form_subject: Selector = Selector("#subject");
    form_comment: Selector = Selector("#comment");
    form_submitButton = Selector("input").withAttribute("value", "Send Message");

    async submitFeedback(t: TestController) {
        await t.typeText(this.form_name, "name")
            .typeText(this.form_email, "email")
            .typeText(this.form_subject, "subject")
            .typeText(this.form_comment, "comment")
            .click(this.form_submitButton);
    }
}

export default FeedbackPage;