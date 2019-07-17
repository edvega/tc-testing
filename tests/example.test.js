import { Selector } from 'testcafe';

fixture`Getting started with testcafe`
    .page`https://devexpress.github.io/testcafe/example`
    .before(async t => {
        // Test setup
    })
    .beforeEach(async t => {
        //Runs before each test
    })
    .after(async t => {
        //clean up code here
    })
    .afterEach(async t => {
        //runs after each test
    });

test('First test', async t => {
    const developerName = Selector("#developer-name");
    const submitButton = Selector("#submit-button");
    const articleHeader = Selector("#article-header").innerText;

    await t.setTestSpeed(1);
    await t.typeText(developerName, "John");
    await t.takeScreenshot();
    await t.takeElementScreenshot(submitButton);
    await t.click(submitButton);
    await t.expect(articleHeader).contains("John");

    //Click, DoubleClick and RightClick
    await t.click("id", { options });
    await t.doubleClick("id", { options });
    await t.rightClick("id", { options });

    //TypeText
    await t.typeText("id", "text", { options });
    await t.typeText("id", "text", { replace: true, paste: true});

    //Hover
    await t.hover("id", { options });

    // Keyboard press
    await t.pressKey("enter");
    await t.pressKey("shift+down");

    //Navigate to specific URL
    await t.navigateTo("url");

    //Window resize
    await t.resizeWindow(800, 600);
    await t.maximizeWindow();
});