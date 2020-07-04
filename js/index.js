const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// ## Task 1: Create selectors to point your data into elements

// * [X] Create selectors by using any of the DOM element's methods
// * [X] Note that IDs have been used on all images.  Use the IDs to update src path content


// NAV -- create variables for each link
const link1 = document.querySelector('nav a:nth-child(1)')
const link2 = document.querySelector('nav a:nth-child(2)')
const link3 = document.querySelector('nav a:nth-child(3)')
const link4 = document.querySelector('nav a:nth-child(4)')
const link5 = document.querySelector('nav a:nth-child(5)')
const link6 = document.querySelector('nav a:nth-child(6)')

// CTA -- create variable for each part
const heading = document.querySelector('.cta-text h1')
const ctaBtn = document.querySelector('.cta-text button')
const ctaImg = document.querySelector('#cta-img')


// .MAIN-CONTENT .top-content
const featuresH4 = document.querySelector('.top-content .text-content h4')
const featuresP = document.querySelector('.top-content .text-content p')
const aboutH4 = document.querySelector('.top-content .text-content:nth-child(2) h4')
const aboutP = document.querySelector('.top-content .text-content:nth-child(2) p')

// .MAIN-CONTENT middle image
const middleImg = document.getElementById('middle-img')

// .MAIN-CONTENT .bottom-content
const servicesH4 = document.querySelector('.bottom-content .text-content h4')
const servicesP = document.querySelector('.bottom-content .text-content p')
const productH4 = document.querySelector('.bottom-content .text-content:nth-child(2) h4')
const productP = document.querySelector('.bottom-content .text-content:nth-child(2) p')
const visionH4 = document.querySelector('.bottom-content .text-content:nth-child(3) h4')
const visionP = document.querySelector('.bottom-content .text-content:nth-child(3) p')


// CONTACT
const contactH4 = document.querySelector('.contact h4')
const address = document.querySelector('.contact p')
const phone = document.querySelector('.contact p:nth-child(3)') 
const email = document.querySelector('.contact p:nth-child(4)')

// FOOTER 
const footerP = document.querySelector('footer p')

// ## Task 2: Update the HTML with the JSON data

// * [ ] Remember, NO direct updating of the HTML source is allowed.
// * [ ] Using your selectors, update the content to match the example file.
// * [ ] Remember to update the src attributes on images

// ## Task 3: Add new content

//Check your work by looking at the [original html](original.html) in the browser

// ## Stretch Goals

// * [ ] Update styles throughout the page as you see fit.  Study what happens when you updated the DOM using style in JavaScript.  
// * [ ] Study tomorrow's lesson on events and try to integrate a button that can update content on the site with a click of a button.  You could build a similar data object with new values to help you test the click event.

// ## Stretch Project: Digital Timer

// This project is heavier on logic but employs some DOM manipulation to achieve its goals.  Go check it out here: [stretch assignment](stretch-assignment) and see how far you can get.
