class loginPage {

    orageHRMLogo() {

        return 'img[alt="company-branding"]'
    }

    usernameInput() {

        return '//input[@name="username"]'
    }

    passwordInput() {

        return '//input[@name="password"]'
    }

    entercreds(field){
 
         return 'input[name="'+field+'"]'

    }

    loginBtn() {

        return 'button[type="submit"]'

    }

   loginerrormessage = 'Invalid credentials'

   loginwithcreds(username, password ){

    cy.get(this.orageHRMLogo()).should("be.visible")

    cy.get(this.entercreds("username")).type(username)

    cy.get(this.entercreds("password")).type(password)

    cy.get(this.loginBtn()).click()
  
     
   }


}

export default loginPage