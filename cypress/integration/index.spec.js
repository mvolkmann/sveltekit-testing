const baseurl = 'http://localhost:3000/';

describe('index', () => {
  it('should visit first page', () => {
    cy.visit(baseurl);
    cy.contains('Cypress Demo');
  });

  function type(label, text) {
    cy.contains(label).parent().children('input').type(text);
  }

  it('should greet', () => {
    cy.visit(baseurl);
    type('First Name', 'Mark');
    type('Last Name', 'Volkmann');
    cy.contains('Greet').click();
    cy.contains('Hello, Mark Volkmann!');
  });
});
