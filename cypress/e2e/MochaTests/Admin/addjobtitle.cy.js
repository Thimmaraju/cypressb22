import data from "../../fixtures/logindata.json"
import dasboard from "../../pages/dashboard.po"


import jobtitledata from "../../fixtures/Admin/jobtitledata.json"
describe('Verify Add Job title', function () {

    const menuitems ={

        menu1 : "Admin",
        menu2 : "PIM",
        menu3: "Leave",
        menu4: "Time",
        menu5 : "Recruitment",
        menu6: "My Info",
        menu7 : "Performance",
        menu8 : "Dashboard",
        menu9: "Buzz",
        menu10: "Claim",
        menu11: "Maintenance",
        menu12: "Directory"
    }

    const creds = {

        username: "Admin",
        password: "admin123"
    }

    it('Verify adding job title with only mandotory fields', function () {

        cy.visit("/web/index.php/auth/login")

        cy.xpath(dasboard.usernameInput()).type(creds.username)

        cy.xpath(dasboard.passwordInput()).type(creds['password'])

        cy.get(dasboard.loginBtn()).click()

        for (let item in menuitems){

            cy.contains(menuitems[item]).should("be.visible")
        }
      
        cy.contains('Admin').click()
        cy.contains('Job').click()
        cy.contains('Job Titles').click()
        let r = (Math.random() + 1).toString(36).substring(7);
        cy.log(r)
      
        createjobtitle(jobtitledata.jobtitle+r, jobtitledata.jobdescription )
    })


  })

  function createjobtitle(value1, value2){

    cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
    cy.get('input[class="oxd-input oxd-input--active"]').last().type(value1)
    cy.get("textarea[placeholder='Type description here']").type(value2)
    cy.get("button[type='submit']").click()
    cy.contains('Successfully Saved').should("be.visible")
  }