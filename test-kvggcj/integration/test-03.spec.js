export function checkIfEleExists(ele) {
    return new Promise((resolve, reject) => {
        cy.get("body").then($body => {
            const elements = $body.find(ele);
            if (elements.length > 0) {   //evaluates as true
                resolve(elements);
            } else {
                reject();
            }
        });
    })
}

describe('1. Feladat', () => {
    let spyErrorLog;
    before(() => {
        Cypress.on("window:before:load", (win) => {
            cy.stub(win.console, 'log').as('consoleLog');
            cy.stub(win.console, 'error').as('consoleError');
            // spyErrorLog = cy.spy(win.console, "log");  // can be: warn, error
        });
    });


    it('Az első gombra kattintva a console-on meg kell jelennie a gomb szövegének.', () => {

        cy.visit('');

        cy.get("body button").then($buttons => {
            $buttons.eq(0).click();
            cy.get('@consoleLog').should('be.calledWith', 'Első');
        });


    });
    
    it('A második gombra kattintva a console-on meg kell jelennie a gomb szövegének.', () => {

        cy.visit('');

        cy.get("body button").then($buttons => {
            $buttons.eq(1).click();
            cy.get('@consoleLog').should('be.calledWith', 'Második');
        });


    });
    
    it('A harmadik gombra kattintva a console-on meg kell jelennie a gomb szövegének.', () => {

        cy.visit('');

        cy.get("body button").then($buttons => {
            $buttons.eq(2).click();
            cy.get('@consoleLog').should('be.calledWith', 'Harmadik');
        });


    });
    
})
