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

    //Contains
    await t.expect("element or state or actual value").
        contains("expected value", "message", { timeout: 1000 });
    
    //Not contains
    await t.expect("actual").notContains("expected valie", "message", { options });

    //Deep Equal
    await t.expect("actual").eql("expected value", "message", { options });

    //Not deep equal
    await t.expect("actual").notEql("expected value", "message", { options });

    //check if exist
    await t.expect(Selector("#selector").exists).ok();

    //Check if not exists
    await t.expect(Selector("#selector").exists).notOk("error message if expect fails");

    //Greater than
    await t.expect("actual value").gt("expected value", "message", { options });

    //Less than
    await t.expect("Actual value").lt("expected value", "message", { options });

    //Within some range
    await t.expect("actual result").within("Start", "finish", "message", { options });
});