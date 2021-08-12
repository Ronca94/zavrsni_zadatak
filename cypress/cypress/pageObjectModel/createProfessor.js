const data = require("../fixtures/data.json");

class addProfessor {
    get nameInput() {
        return cy.get('#input-default')
    }
    get lastNameInput() {
        return cy.get('#input-default1')
    }
    get addImage() {
        return cy.get('.btn-image')
    }
    get chooseProfessor() {
        return cy.get('#__BVID__61')
    }
    get submit () {
        return cy.get('.btn-secondary')
    }
    createProfessor(nameInput,lastNameInput,addImage){
        this.nameInput.type('mihajlo')
        this.lastNameInput.type('roncevic')
        this.addImage
        .type('https://lh3.googleusercontent.com/proxy/gIDW7RFz68Cu9G1v9aVAD4CXnej5Zh4i4Fu3yLGUpdWixVWN-MC2tUGPfj5Zb5yOI2QwxOKILUkC9Xod-A2VEfVLQ3pQ2sOLesAJYtlJXzi9Hw0xtrjuEngK0Jh3OixKKk4')
        this.chooseProfessor.type('mihajlo roncevic')
        this.submitGallery.click()
    }
}
export const create_Professor = new createProfessor();