// Navigation bar - toggle between adding and removing the "responsive" class to navbar when the user clicks on the icon
function toggleMenu(navElement) {
  if (navElement.classList.contains("responsive")) {
      navElement.classList.remove("responsive");
  } else {
      navElement.classList.add("responsive");
  }
}

// Collapsible sections on "Our Services" page
var coll = document.getElementsByClassName("collapsible-heading");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active-section");
    var collapsiblesection = this.nextElementSibling;
    if (collapsiblesection.style.maxHeight){
      collapsiblesection.style.maxHeight = null;
    } else {
      collapsiblesection.style.maxHeight = (collapsiblesection.scrollHeight + 100) + "px"; 
      // Manually adding extra pixels to maxHeight ensures that the section's contents are fully visible if the screen width is reduced by the appearance of the scroll bar; 100px is arbitrary
    }
  });
}

// Validate the contents of the contact form's fields when the user presses the "Send" button

function validateContactForm() {
  let formError = [];
  let emailFormat = new RegExp(/\S+@\S+\.\S+/);
  let fieldName = document.forms["contactForm"]["name"].value;
  let fieldEmail = document.forms["contactForm"]["email"].value;
  let fieldQuestion = document.forms["contactForm"]["question"].value;
  if (fieldName == "") {
    formError.push("* Name");
  }
  if (!emailFormat.test(fieldEmail)) {
    formError.push("* Email");
  }
  if (fieldQuestion == "") {
    formError.push("* Question");
  }
  if (formError == 0) {
    alert("Your message has been sent. Thank you!");
  } else {
    var formErrorString = formError.join('\n');  
    alert("Oops! It looks like there's a problem in the information you provided. Please double-check the following:\n\n" + formErrorString + "\n\nWhen you're ready, try again.");
  }
  return false;
}