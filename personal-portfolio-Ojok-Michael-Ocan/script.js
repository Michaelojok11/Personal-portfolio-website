
// Get the elements
const servicesButtons = document.querySelectorAll('.service_item');
const servicesDetails = document.querySelector('.services_right');

// function to get the service
const getService = (category) => {
    const details = servicesData.find(item => item.category === category);
    console.log(details);
}


// Add an event listener
servicesButtons.forEach(item => {
    item.addEventListener('click', () => {
        const serviceClass = item.classList[1];
        getService(serviceClass)        
    })
})
