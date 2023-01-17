Feature("login");

Scenario("test something", async ({ I }) => {
  I.amOnPage("http://todomvc.com/examples/react/");
  const allure = codeceptjs.container.plugins("allure");

  allure.addAttachment(
    "Screenshot",
    await I.saveScreenshot("gg.png", true),
    "image/png"
  );
});
