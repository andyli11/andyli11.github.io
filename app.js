document.getElementById("email").onmouseover = function() {mouseOverEmail()};
document.getElementById("email").onmouseout = function() {mouseOutEmail()};
document.getElementById("linkedin").onmouseover = function() {mouseOverLinkedIn()};
document.getElementById("linkedin").onmouseout = function() {mouseOutLinkedIn()};
document.getElementById("github").onmouseover = function() {mouseOverGithub()};
document.getElementById("github").onmouseout = function() {mouseOutGithub()};

function mouseOverEmail() {
  document.getElementById("email").setAttribute('src','images/email_1.svg');
}

function mouseOutEmail() {
   document.getElementById("email").setAttribute('src','images/email_2.svg');
}

function mouseOverLinkedIn() {
   document.getElementById("linkedin").setAttribute('src','images/linkedin_1.svg');
 }
 
 function mouseOutLinkedIn() {
    document.getElementById("linkedin").setAttribute('src','images/linkedin_2.svg');
 }

 function mouseOverGithub() {
   document.getElementById("github").setAttribute('src','images/github_1.svg');
 }
 
 function mouseOutGithub() {
    document.getElementById("github").setAttribute('src','images/github_2.svg');
 }
