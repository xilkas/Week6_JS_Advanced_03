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
  
  // // Example: Update the img src for the logo
    let logo = document.getElementById("logo-img");
    logo.setAttribute('src', siteContent["nav"]["img-src"])

     
    const firstElement = document.querySelector("nav")
    firstElement.textContent = siteContent["nav"]["nav-item-1"]
    // const cta = document.querySelectorO("cta")
    // cta.textContent = siteContent["cta"]["h1"]
    
    // const secondElement = document.querySelector("nav")
    // secondElement.textContent = siteContent["nav"]["nav-item-2"]

    // const thirdElement = document.querySelector("nav")
    // thirdElement.textContent = siteContent["nav"]["nav-item-3"]

    // const fourthElement = document.querySelector("nav")
    // fourthElement.textContent = siteContent["nav"]["nav-item-4"]

    // const fifthElement = document.querySelector("nav")
    // fifthElement.textContent = siteContent["nav"]["nav-item-5"]

    // const lastElement = document.querySelector("nav")
    // lastElement.textContent = siteContent["nav"]["nav-item-6"]


     const img = document.querySelector("#cta-img" )
     img.setAttribute("src",siteContent["cta"]["img-src"])

     const button = document.querySelector(".cta-text, button" )
     button.textContent = siteContent["cta"].button
     const startButton = document.querySelector(".cta-text")
     startButton.textContent = siteContent["cta"].button

     const centerImg = document.querySelector(" .middle-img")
      centerImg.setAttribute("src", siteContent["main-content"]["middle-img-src"])


      const topContent = document.querySelectorAll(".top-content")
        topContent.textContent = siteContent["main-content"]["features-h4"]["features-content"]


        const aboutContent = document.querySelector(".text-content")
        aboutContent.textContent = siteContent["main-content"]["about-content"]


        
      

       const productContent = document.querySelector(".bottom-content ")
       productContent.textContent = siteContent["main-content"]["product-content"]


    const domText = document.querySelector(".cta-text, h1")
     domText.textContent = siteContent["cta"].h1




  