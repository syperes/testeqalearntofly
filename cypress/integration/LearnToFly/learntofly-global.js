describe('Desafio QA LearnToFly', () => {
    //Array com as mensagens para verificação do processo de Cadastro
    const arrayRetornoCadastro = [
        'Enviamos um link de acesso para seu e-mail.',
        'Ops! Esse usuário já tem um cadastro.'
    ]
    const validaCadastro = new RegExp(`${arrayRetornoCadastro.join('|')}`, 'g')

    //Array com as mensagens para verificação do processo de Login
    const arrayRetornoLogin = [
        'Seu e-mail não foi confirmado', 
        'Ops! Esse usuário já tem um cadastro.', 
        'Usuário ou senha inválido', 
        Cypress.env('name')
    ]
    const validaLogin = new RegExp(`${arrayRetornoLogin.join('|')}`, 'g')

    //Acessar o site e realizar o cadastro
    it('Realizar Cadastro', () => {
        cy.visit('https://learntofly.global')
            cy.url().then(($url) => {
                if($url.includes('/pt/')) {
                    cy.contains('Preços e planos').click().url().should('include', '/plans')
                    cy.contains('Faça sua inscrição').click().url().should('include', '/login')
                } else if ($url.includes('/en/')){
                    cy.contains('Prices and plans').click().url().should('include', '/plans')
                    cy.contains('Sign up').click().url().should('include', '/login')
                  }
            })
        cy.get('input[formcontrolname="name"]').type(Cypress.env('name'))
        cy.get('input[formcontrolname="email"]').type(Cypress.env('email'))
        cy.get('input[formcontrolname="password"]').type(Cypress.env('password'))
        cy.get('input[formcontrolname="confirmPassword"]').type(Cypress.env('password'))
        cy.get('mat-checkbox[id="mat-checkbox-1"]').click()
        cy.get('button[type="submit"]').click()
        cy.contains(validaCadastro)

    })
    //Acessar o site e realizar o login
    it('Realizar Login', () => {
        cy.visit('https://learntofly.global')
        cy.url().then(($url) => {
            if($url.includes('/pt/')) {
                cy.contains('Entrar').click()
            } else if ($url.includes('/en/')){
                cy.contains('Log in').click()
              }
        })        
        cy.get('input[formcontrolname="email"]').type(Cypress.env('email'))
        cy.get('input[formcontrolname="password"]').type(Cypress.env('password'))
        cy.get('button[type="submit"]').click()
        cy.contains(validaLogin)        
    })
    it('Realizar POST', () => {
        cy.request('POST', 'https://fakerestapi.azurewebsites.net/api/v1/Books', { 
            "id": Cypress.env('id'),
            "title": Cypress.env('title'),
            "description": Cypress.env('description'),
            "pageCount": Cypress.env('pageCount'),
            "excerpt": Cypress.env('excerpt'),
            "publishDate": "2020-09-10T13:00:00.549505+00:00"
        })
            .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('id', Cypress.env('id'))
            expect(response.body).to.have.property('title', Cypress.env('title'))
            expect(response.body).to.have.property('description', Cypress.env('description'))
            expect(response.body).to.have.property('pageCount', Cypress.env('pageCount'))
            expect(response.body).to.have.property('excerpt', Cypress.env('excerpt'))
            expect(response.body).to.have.property('publishDate', Cypress.env('publishDate'))
        })
    })
    it('Realizar GET', () => {
        cy.request('GET', 'https://fakerestapi.azurewebsites.net/api/v1/Books/' + Cypress.env('id'))
            .then((response) => {
            expect(response.status).to.eq(200)    
            expect(response.body).to.have.property('id', Cypress.env('id'))
            expect(response.body).to.have.property('title', Cypress.env('title'))
            expect(response.body).to.have.property('description', Cypress.env('description'))
            expect(response.body).to.have.property('pageCount', Cypress.env('pageCount'))
            expect(response.body).to.have.property('excerpt', Cypress.env('excerpt'))
            expect(response.body).to.have.property('publishDate', Cypress.env('publishDate'))
            })
    })
})