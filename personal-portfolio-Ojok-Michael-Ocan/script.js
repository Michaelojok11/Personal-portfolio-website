
// Get the elements
const servicesButtons = document.querySelectorAll('.service_item');
const servicesDetails = document.querySelector('.services_right');

// function to get the service
const getService = (category) => {
    const details = servicesData.find(item => item.category === category);
    servicesDetails.innerHTML = `
    <h3>${details.title}</h3>
    ${details.description.map(paragraph => "<p>" + paragraph + "</p>").join('')}`
}

const removeActiveClass = () =>  {
    servicesButtons.forEach(button => {
       button.classList.remove('active');
        })
    };


// Add an event listener
servicesButtons.forEach(item => {
    item.addEventListener('click', () => {
        removeActiveClass();
        const serviceClass = item.classList[1];
        getService(serviceClass);
        item.classList.add('active');        
    })
});

getService('frontend');

// End of services



// mixitup portfolio

const containerEl = document.querySelector('.projects_container');
var mixer = mixitup(containerEl, {
    // disable the animation
    animation: {
        enable:false
    }
});

mixer.filter('*');




//========== what people say / Swiper == testimonials==

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween:30,
    pagination: {
        el:".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        600:{
            slidesPerView:2,
        },
        1024: {
            slidesPerView:3,
        }
    }

  });

//   snipet code
document.addEventListener('DOMContentLoaded', function() {
    const showMoreButton = document.getElementById('showMoreButton');
    const projectContainer = document.getElementById('projectContainer');
    const allProjects = projectContainer.querySelectorAll('.project');
    const initialProjectCount = 6;

    // Show only the first 6 projects initially
    for (let i = 0; i < allProjects.length; i++) {
        if (i < initialProjectCount) {
            allProjects[i].style.display = 'block';
        } else {
            allProjects[i].style.display = 'none';
        }
    }

    // Show more projects when the "Show More" button is clicked
    showMoreButton.addEventListener('click', function() {
        allProjects.forEach(project => project.style.display = 'block');
        showMoreButton.style.display = 'none';
    });
});
