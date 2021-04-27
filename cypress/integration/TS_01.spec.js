
describe("Login", function(){
    it('should visit and login', () => {
        cy.visit("https://react-redux.realworld.io")
        cy.get("ul li").eq(1).contains("Sign in").click()
        cy.get("input[type='email']").type("iyobosajefferson2@gmail.com")
        cy.get("input[type='password']").type("w74xTNtTvBnyaSM")
        cy.get("button").contains("Sign in").click()
    })

    it('should create a new post', () => {
        cy.contains("New Post").click()
        cy.hash().should('include', "#/editor")
        cy.get("input[type='text'").eq(0).type("First testing script")
        cy.get("input[type='text'").eq(1).type("Cypress testing adventure")
        cy.get("textarea").type("Cypress is a next generation front end testing tool built for the modern web. We address the key pain points developers and QA engineers face when testing modern applications.")
        cy.get("input[type='text'").eq(2).type("Cypress, testing, adventure, 'javascript'")
        cy.get("button").contains("Publish Article").click()
        cy.url().should('include', 'article')
    });

    it('should leave a comment on created post', () => {
        cy.get('textarea').type("Such a nice write-up. Good job!")
        cy.get("button").contains("Post Comment").should('be.visible').click()
    })

    it('should navigate to profile', () => {
        cy.get("ul li:last").contains("frontend_io").click()
        cy.hash().should('include', "#/@frontend_io")
    });

    it('should favorite/unfavorite the first post', () => {
        cy.contains("My Articles")
        cy.get(".ion-heart").eq(0).click()
        cy.contains("Favorited Articles").click()
        cy.wait(500).contains("Favorited Articles").click()
        cy.get(".ion-heart").eq(0).click()
    });

    it('should sign me out', () => {
        cy.contains("Edit Profile Settings").click()
        cy.get("button").contains("Or click here to logout.").scrollIntoView().click()
    });
})