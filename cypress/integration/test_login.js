describe("login_page", () => {
  it("validate that the error message ‘Incorrect email or password’ shows", () => {
    cy.visit("http://localhost:3000/login");

    cy.get("#email")
      .type("fake@email.com")
      .should("have.value", "fake@email.com");

    cy.get("#password").type("12345678A").should("have.value", "12345678A");
    cy.get(".main-button").click();
    cy.contains("Incorrect email or password");
  });

  it("validate that the error message ‘Incorrect email or password’ shows with incorrect password", () => {
    cy.visit("http://localhost:3000/login");

    cy.get("#email")
      .type("mohamed@instabug.com")
      .should("have.value", "mohamed@instabug.com");

    cy.get("#password").type("12345678B").should("have.value", "12345678B");
    cy.get(".main-button").click();
    cy.contains("Incorrect email or password");
  });

  it("validate that the browser will redirect upon a successful login ", () => {
    cy.visit("http://localhost:3000/login");

    cy.get("#email")
      .type("mohamed@instabug.com")
      .should("have.value", "mohamed@instabug.com");

    cy.get("#password").type("12345678A").should("have.value", "12345678A");
    cy.get(".main-button").click();

    cy.url().should("eq", "http://localhost:3000/");
  });

  it("validate invalid email message", () => {
    cy.visit("http://localhost:3000/login");

    cy.get("#email").type("dddd").should("have.value", "dddd").blur();
    cy.contains("Enter a valid email address.");
  });
});
