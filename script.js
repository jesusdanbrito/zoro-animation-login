const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const link = document.querySelector('.btnLogin');
const closetab = document.querySelector('.icon-close');


registerLink.addEventListener('click', () => {
wrapper.classList.add('active');    
} );
loginLink.addEventListener('click',  () => {
wrapper.classList.remove('active');    
});
 
link.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
})

closetab.addEventListener('click',  () => {
    wrapper.classList.remove('active-popup');    
    });


