

import data from "../../fixtures/logindata.json"
import dasboard from "../../pages/dashboard.po"
describe('Verify Login Functionality', () => {

    const ussername = "Admin"
    const password = "admin123"

    beforeEach("Launch url", ()=>{
            
        cy.log("Test Execution Started")

        cy.visit("/web/index.php/auth/login")

    })

    afterEach( ()=>{
        
        cy.log("Test Execution completed")

    })

    it("Verify login with Valid Credentials", () => {

        dasboard.loginwithcreds(ussername, data.password)
        cy.contains(dasboard.dashboardMenu()).should("be.visible")

        
    })

    it('Verify login with valid username and invalid password', () => {

        let invalidpassword = "ergnrek"
  
       dasboard.loginwithcreds(ussername, invalidpassword)
      
        cy.contains(dasboard.loginerrormessage).should("be.visible")
    })

    it.skip('Verify login with invalid username and valid password', () => {

         dasboard.loginwithcreds(data.wronmgusername, data.password)
        cy.contains('Invalid credentials').should("be.visible")
    })
 

    specify('Verify login with invalid username and invalid password', () => {

        //cy.viewport(375,667)

        cy.viewport("macbook-16")

        dasboard.loginwithcreds(data.wronmgusername, data.wrongpassword)
        cy.contains('Invalid credentials').should("be.visible")
    })


    it.skip("without entering username and password", ()=>{
      
        cy.get(dasboard.loginBtn()).click()
        cy.contains('Required').should("be.visible")

    })
  })