

import data from "../../fixtures/demoqadata.json"

describe("Verify Demo QA ",()=>{

    it("Verify text boxes", ()=>{

        cy.on('uncaught:exception', (err, runnable) => {

            return false

        })

        cy.visit('https://demoqa.com/text-box')
        cy.get('input[id="userName"]').type(data.fullname)
        cy.get("#userEmail").type(data.emailaddress)
        cy.get("#currentAddress").type(data.currentaddress)
        cy.get('#permanentAddress').type(data.Permanentaddress)
        cy.get('#submit').click()


    })
})