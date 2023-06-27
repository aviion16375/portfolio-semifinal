const menu_btn = document.querySelector('.hamburger');
	const mobile_menu = document.querySelector('.mobile-nav');

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('active');
		mobile_menu.classList.toggle('is-active');
  

	});

  const navLink = document.querySelectorAll('.nav__link')

  function linkAction(){
    
      mobile_menu.classList.remove('is-active');
      menu_btn.classList.remove('active');
  }
  
  navLink.forEach(n => n.addEventListener('click', linkAction))



function sendMail(){
  var templateParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  }
  const YOUR_SERVICE_ID = "service_sqqvowl";
const YOUR_TEMPLATE_ID = "template_1dlt6sg";

emailjs.send(YOUR_SERVICE_ID,YOUR_TEMPLATE_ID, templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
}

