describe('API Testing for Authentication and Deposit', () => {

    let authToken;
  

    before(() => {
      cy.request({
        method: 'POST',
        url: 'https://api.amega.finance/authenticate',
        body: {
          email: 'krasniqi.eron7@gmail.com',
          password: 'rh-K,6an>\\5£ub\\H-E46'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('token');
        
        authToken = response.body.token;
      });
    });
  
    it('should perform a deposit request', () => {
      expect(authToken).to.not.be.undefined;
  

      cy.request({
        method: 'POST',
        url: 'https://api.amega.finance/deposit', 
        headers: {
          'Authorization': `Bearer ${authToken}`
        },
        body: {
          amount: 1000,
          currency: 'USD' 
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('success', true);
      });
    });
  
  });
  