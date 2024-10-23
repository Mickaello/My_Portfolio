// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');



window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // active navbar
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);


    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}


// PDF

document.getElementById('download-cv').addEventListener('click', function() {
    var element = document.body;
    html2pdf(element, {
        margin:       0.1,
        filename:     'resume.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 3, useCORS: true },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    });
});

//MAIL

const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail(){

    const bodyMessage = `
  Full Name: ${fullName.value}<br> 
  Email: ${email.value}<br> 
  Phone Number: ${phone.value}<br> 
  Message: ${mess.value}
`;


    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "mick4ello@gmail.com",
        Password : "79623B6EC7529023850E66C5A7C5E1B1DDB1",
        To : 'mick4ello@gmail.com',
        From : "mick4ello@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
        message => {
            if (message == "OK"){
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                  });
            }
        }
    
    
    );
}

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    sendEmail();

    form.reset();
    return false;

});