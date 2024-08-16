import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import dashboard from "../../pages/dashboard.po"

Given("User Launch the Application", ()=>{

    cy.visit("/")

})

When("User enter username as {string} password as {string}", (username , password)=>{

    cy.xpath(dashboard.usernameInput()).type(username)

    cy.xpath(dashboard.passwordInput()).type(password)

})

And("User clicks on login Button", ()=>{

    cy.get(dashboard.loginBtn()).click()
})

Then("User should be navigated to Dashbaord page",()=>{

    cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    //or
    cy.url().should("include", "web/index.php/dashboard/index")
})

Then("User should get login error message", ()=>{

    cy.contains(dashboard.loginerrormessage).should("be.visible")
})