

describe("Suite name Here ", ()=>{


    afterEach(()=>{


        cy.log("After Each Test")

    })
    after(()=>{


        cy.log("After All Test")

    })

    before(()=>{


        cy.log("Before ALL Test")

    })
    beforeEach(()=>{


        cy.log("Before Each Test")

    })

    it("Test case 1 Name", ()=>{

        cy.log("Test 1")
    })

    it("Test case 2 Name", ()=>{

        cy.log("Test 2")
    })

    it("Test case 3 Name", ()=>{

        cy.log("Test 3")
    })

    it("Test case 4 Name", ()=>{

        cy.log("Test 4")
    })
})