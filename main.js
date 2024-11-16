
let about_text_height = 0;

window.onload = function () {
about_text_height = about_text.getBoundingClientRect().top;
preloader = document.getElementById("preloader")

setTimeout(function () {
    preloader.style.opacity = 0;
    setTimeout(function () {
    preloader.style.display = "none";
    // setTimeout(function(){
    // }, 500);
    }, 500);
}, 1500);
}

const win_money = document.getElementById("win-money");
const join_the_race = document.getElementById("title-1");
const small_popout = document.getElementById("small-popout");
const large_popout = document.getElementById("large-popout");
const first_bet = document.getElementById("and-your-first-bet-s");
const waitingList = document.getElementById("input-button-container");
const available_soon = document.getElementById("available-soon");
const apple_store = document.getElementById("apple-store");
const google_store = document.getElementById("google-store");
const spikeLogo = document.getElementById("spikeLogo");
const about_text = document.getElementById("about-text");

window.addEventListener('scroll', function () {
const scrollPosition = window.scrollY;
const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;

if (window.innerWidth >= 1050) {

    win_money.style.transform = `translate(-50%, ${-scrollPosition * 1.15}px)`;
    join_the_race.style.transform = `translate(-50%, ${-scrollPosition * 1.025}px)`;
    small_popout.style.transform = `translate(-50%, ${-scrollPosition * 0.95}px)`;
    large_popout.style.transform = `translate(-50%, ${-scrollPosition * 1.075}px)`;
    first_bet.style.transform = `translate(-50%, ${-scrollPosition * 0.92}px)`;
    waitingList.style.transform = `translate(-50%, ${-scrollPosition * 0.89}px)`;
    available_soon.style.transform = `translate(-50%, ${-scrollPosition * 0.89}px)`;
    apple_store.style.transform = `translate(-50%, ${-scrollPosition * 0.89}px)`;
    google_store.style.transform = `translate(-50%, ${-scrollPosition * 0.89}px)`;
    spikeLogo.style.transform = `rotate(${(scrollPosition / scrollableHeight) * 360}deg)`;
}

about_text.style.transform = `translate(-50%, ${(-scrollPosition) * 0.5}px)`;

});

// Track current section to prevent triggering multiple scrolls
let currentSection = 'top';
const about = document.getElementById('about');
const contact = document.getElementById('contact');
// listening = true;
// window.addEventListener('scroll', function () {
//   if (window.innerWidth >= 1050) {
//     event.preventDefault();

//     const scrollPosition = window.scrollY;
//     const windowHeight = window.innerHeight;
    
//     // Set threshold values for sections
//     const threshold = 75;
//     console.log(scrollPosition);

//     if (listening) {

//       // Scrolling down from top to medium
//       if (currentSection === 'top' && scrollPosition > threshold) {
//         about.scrollIntoView({ behavior: 'smooth' });
//         currentSection = 'about';

//         listening = false;
//         setTimeout(function() {listening = true}, 1000);
//       }
//       // Scrolling down from medium to bottom
//       else if (currentSection === 'about' && scrollPosition > 1000 + threshold) {
//         contact.scrollIntoView({ behavior: 'smooth' });
//         currentSection = 'contact';

//         listening = false;
//         setTimeout(function() {listening = true}, 1000);
//       }
//       // Scrolling down from medium to bottom
//       else if (currentSection === 'about' && scrollPosition < 1000 - threshold) {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//         currentSection = 'top';

//         listening = false;
//         setTimeout(function() {listening = true}, 1000);
//       }
//       // Scrolling down from medium to bottom
//       else if (currentSection === 'contact' && scrollPosition < 2000 - threshold) {
//         about.scrollIntoView({ behavior: 'smooth' });
//         currentSection = 'about';

//         listening = false;
//         setTimeout(function() {listening = true}, 1000);
//       }
//     }
//   }
// });

waitingListInput = document.getElementById('waitingListInput');
submitWaitingList = document.getElementById('submitWaitingList');

document.getElementById('waitingList').addEventListener('submit', function (event) {
event.preventDefault();

var formData = new FormData(this);

fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLSfp_4zq6HWSrrjJVNQWdi3gwaKQ_EuvUkyzVWZblytbPvGUcw/formResponse', {
    method: 'POST',
    body: formData,
    mode: 'no-cors'
})
    .then(response => {
    console.log('Success:', response);
    waitingListInput.value = '';
    waitingListInput.placeholder = 'Thanks!';
    submitWaitingList.textContent = 'JOINED!';
    })
    .catch(error => {
    console.error('Error:', error.message);
    });
});

waitingListInput2 = document.getElementById('waitingListInput2');
submitWaitingList2 = document.getElementById('submitWaitingList2');

document.getElementById('waitingList2').addEventListener('submit', function (event) {
event.preventDefault();

var formData = new FormData(this);

fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLSfp_4zq6HWSrrjJVNQWdi3gwaKQ_EuvUkyzVWZblytbPvGUcw/formResponse', {
    method: 'POST',
    body: formData,
    mode: 'no-cors'
})
    .then(response => {
    console.log('Success:', response);
    waitingListInput2.value = '';
    waitingListInput2.placeholder = 'Thanks!';
    submitWaitingList2.textContent = 'JOINED!';
    })
    .catch(error => {
    console.error('Error:', error.message);
    });
});

personName = document.getElementById('personName');
email = document.getElementById('email');
subject = document.getElementById('subject');
message = document.getElementById('message');

submitContact = document.getElementById('contact-submit');

document.getElementById('contact-form').addEventListener('submit', function (event) {
event.preventDefault();

var formData = new FormData(this);

fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLSd5nOlfwVjJ87Ktid-Wp231i7AVHavJaf9qYvXS5Qa9cZF8qQ/formResponse', {
    method: 'POST',
    body: formData,
    mode: 'no-cors'
})
    .then(response => {
    console.log('Success:', response);
    personName.value = '';
    email.value = '';
    subject.value = '';
    message.value = '';
    message.placeholder = 'Thank you for contacting us!';
    submitContact.value = 'Sent!';
    })
    .catch(error => {
    console.error('Error:', error.message);
    });
});

