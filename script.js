$(document).ready(function () {
    const chips = [
        { id: 'dashboard', text: 'Dashboard' },
        { id: 'myExam', text: 'My Exam' },
        { id: 'myProgressBar', text: 'My Progress Bar' },
        { id: 'viewProducts', text: 'View Products' },
        { id: 'changePreference', text: 'Change Preference' },
        { id: 'successStories', text: 'Success Stories' },
        { id: 'billingDetails', text: 'Billing Details' },
        { id: 'logout', text: "Logout"}
        
    ];

    chips.forEach(function (chip) {
        const chipElement = $('<div></div>')
            .addClass('chip')
            .attr('id', chip.id)
            .text(chip.text);

        $('.chip-container').append(chipElement); 
    });

    
});
