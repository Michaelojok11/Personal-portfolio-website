
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
})
