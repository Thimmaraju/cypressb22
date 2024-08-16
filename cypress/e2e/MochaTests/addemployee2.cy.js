import dasboard from "../pages/dashboard.po"

import logindata from "../fixtures/logindata.json"

describe("test suite name ", ()=>{


    it("test case name ", ()=>{

       cy.login(logindata.username, logindata.password)

        cy.addEmployee("girish", "xyz")


    })
})