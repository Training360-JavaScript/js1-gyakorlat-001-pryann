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
            spyErrorLog = cy.spy(win.console, "log");  // can be: warn, error
        });
    });


    it('Kellene lennie három gombnak button osztállyal és a megadott szöveggel.', () => {

        cy.visit('');

        cy.get("body button").then($buttons => {
            expect($buttons.length).equal(3);
            expect($buttons.eq(0).text()).to.match(/első/i);
            expect($buttons.eq(1).text()).to.match(/második/i);
            expect($buttons.eq(2).text()).to.match(/harmadik/i);
        });

    });

    it('Be kellene linkelni a js/main.js fájlt az oldalba.', () => {

        cy.visit('');

        cy.get('script[src$="main.js"]').then($script => {
            expect($script.length).equal(1);
        });

    });
})