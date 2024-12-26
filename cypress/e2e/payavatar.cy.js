describe('Покупка аватара', function () {                                
    
    it('Покупка нового аватара у тренера Ларик', function () {   
         cy.visit('https://pokemonbattle.ru/');                          
         cy.get('input[type="email"]').type('USER_LOGIN');                
         cy.get('input[type="password"]').type('USER_PASSWORD');               
         cy.get('button[type="submit"]').click();                        
         cy.wait(2000);
         cy.get('.header__container > .header__id').click({ force: true }); 
         cy.get('[href="/shop"]').click();                               
         cy.get('.available > button').first().click({ force: true });   
         cy.get('.credit').type('4111111111111111');                     
         cy.get('.k_input_ccv').type('125');                             
         cy.get('.k_input_date').type('1230');                           
         cy.get('.k_input_name').type('LarisaIvanova');                           
         cy.get('.pay-btn').click();                                     
         cy.get('#cardnumber').type('56456');                            
         cy.get('.payment__submit-button').click();                      
         cy.contains('Покупка прошла успешно').should('be.visible');
         cy.get('.payment__adv').click()     
     });
 });