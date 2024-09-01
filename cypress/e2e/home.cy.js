describe('Amega Finance - Sign In and navigate to Deposit, Withdraw, Transfer and History', () => {

  const email = 'krasniqi.eron7@gmail.com';
  const password = 'rh-K,6an>\\5£ub\\H-E46';
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.viewport(1920, 1080);
    cy.visit('https://www.amega.finance/');
  });
  it('should navigate to the website, sign in, and click the Deposit button', () => {

    cy.login(email,password)
    cy.xpath("//section[@id='section-home-trigger']")
    .should('be.visible');

    cy.xpath("(//section[@id='section-home-trigger']//span)[1]")
      .should('be.visible')
      .click();

    cy.url().should('include', '/deposit');
  });

  it('should navigate to the website, sign in, and click the Withdraw button', () => {

    cy.login(email,password)
    cy.xpath("//section[@id='section-home-trigger']")
    .should('be.visible');

    cy.xpath("(//section[@id='section-home-trigger']//span)[2]")
      .should('be.visible')
      .click();

    cy.url().should('include', '/withdrawal');
  });

  it('should navigate to the website, sign in, and click the Transfer button', () => {

    cy.login(email,password)
    cy.xpath("//section[@id='section-home-trigger']")
    .should('be.visible');

    cy.xpath("(//section[@id='section-home-trigger']//span)[3]")
      .should('be.visible')
      .click();

    cy.url().should('include', '/transfer');
  });

  it('should navigate to the website, sign in, and click the History button', () => {

    cy.login(email,password)
    cy.xpath("//section[@id='section-home-trigger']")
    .should('be.visible');

    cy.xpath("(//section[@id='section-home-trigger']//span)[4]")
      .should('be.visible')
      .click();

    cy.url().should('include', '/transaction-history');
  });

  it('should signout', () => {
    cy.login(email, password);
    cy.get('#button-hub')
      .should('be.visible')
      .click();
    cy.wait(4000);
    cy.xpath("//*[@id='section-hub-logout']//button")
    .should('be.visible')
    .click();
    
  });
});
