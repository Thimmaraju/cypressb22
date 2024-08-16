import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import dashboard from "../../pages/dashboard.po"
import data from "../../fixtures/pim/addemployee.json"

When("User clicks on PIM", ()=>{

    cy.contains(dashboard.PIMMenu()).click()
})

And("User clicks on Add Employee submenu", ()=>{

    cy.contains('Add Employee').click()
})

Then("User create Employee with firname as {string} and lastname as {string}", (firstname, lastname)=>{

    cy.addEmployee(firstname, lastname)
})

And("User enter firstname", ()=>{

    cy.get('input[name="firstName"]').type(data.firstname)
})

And("User enter lastname", ()=>{

    cy.get('input[name="lastName"]').type(data.lastname)
})

And("User clicks on save button", ()=>{

    cy.get('button[type="submit"]').click()
})

Then("user should get successfully saved message", ()=>{

    cy.contains('Successfully Saved').should("be.visible")
})


Then("user should get error messages for Mandotory fileds", ()=>{

    cy.get('span[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').first().should("be.visible")
    cy.get('span[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').last().should("be.visible")
})