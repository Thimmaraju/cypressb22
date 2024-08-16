// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

require('@4tw/cypress-drag-drop')
import 'cypress-file-upload';
require('cypress-downloadfile/lib/downloadFileCommand')


Cypress.Commands.add('addEmployee', (value1, value2) => {

    cy.contains('PIM').click()

    cy.contains('Add Employee').click()

    cy.get('input[name="firstName"]').type(value1)

    cy.get('input[name="lastName"]').type(value2)

    cy.get('button[type="submit"]').click()

    cy.contains('Successfully Saved').should("be.visible")

})


Cypress.Commands.add('login', (username, password) => {
  cy.visit("/")
  cy.get('input[name="username"]').type(username)
  cy.get('input[name="password"]').type(password+"{enter}")
  cy.contains("Dashboard").should('be.visible')

})

Cypress.Commands.add("CheckandClick", (element)=>{

    cy.get('body').then(($body) => {
        if ($body.find(element).length > 0) {
      
            cy.get('[data-jsl10n="wikivoyage.name"]').click()
            cy.wait(3000)
            cy.origin('https://www.wikivoyage.org', () => {
                cy.title().should('eq', 'Wikivoyage')
           })
        
        }
        else {
            cy.get('[data-jsl10n="wiktionary.name"]').click()
            cy.wait(3000)
            cy.origin('https://www.wiktionary.org', () => {
                cy.title().should('eq', 'Wiktionary')
           })
            
        }
    })  

})