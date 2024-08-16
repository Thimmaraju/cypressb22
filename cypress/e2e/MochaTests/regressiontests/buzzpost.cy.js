import data from "../../fixtures/logindata.json"
import buzzdata from "../../fixtures/Buzz/buzzdata.json"

describe('Verify user can post some thing in the Buzz', () => {

    const creds = ["Admin", "admin123"]

    it('Text message post', () => {
    
       cy.login("Admin", "admin123")

        cy.contains('Buzz').click()

        cy.contains('Buzz Newsfeed').should("be.visible")

        cy.get(`textarea[placeholder="What's on your mind?"]`).type(buzzdata.post)

        cy.get('button[type="submit"]').click()

        cy.contains('Successfully Saved').should("be.visible")    

    })


  })