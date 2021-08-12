/// <reference types="Cypress" />

import { login } from "../pageObjectModel/login.js";
const data = require("../fixtures/data.json");

describe("Gradebook", () => {
    before(() => {
        cy.visit('');
    })
    it("Login with valid credentials", () => {
        cy.visit("/login");
        cy.url().should('contains', 'login')
        cy.get("h4").should("contain", "Please Login.");
        cy.intercept("POST", "https://gradebook-api.vivifyideas.com/api/login").as("successfulLogin");
        login.loginClick();
        login.emailInput.should("not.exist");
    })
})

