const addButton = document.getElementById("add");
const submitButton = document.getElementById("submitButton")
let participants = 1
const participantsField = document.querySelector(".participants")


addButton.addEventListener("click", function() {
    console.log(participants);
    participants++;
    console.log(participants);

    const ParticipantData = document.querySelector(".participant1");
    const newParticipant = ParticipantData.cloneNode(true);

    const participantNumber = newParticipant.querySelector("p");
    participantNumber.textContent = `Participant ${participants}`; // Update the participant number in the <p> element

    // Reset all input values in the new participant form
    const inputs = newParticipant.querySelectorAll("input, select");
    inputs.forEach(input => {
        input.value = ''; // Reset the value of the input field
    });

    // Fix label 'for' attributes
    const inputsWithLabels = newParticipant.querySelectorAll("input, select");
    inputsWithLabels.forEach(input => {
        const currentId = input.id;
        input.id = currentId.split('-')[0] + '-' + participants;

        // Update the for attribute on the label
        const label = newParticipant.querySelector(`label[for="${currentId}"]`);
        if (label) {
            label.setAttribute('for', input.id);
        }
    });

    participantsField.insertBefore(newParticipant, addButton);

    if (participants === 2) {
        participantsField.style.display = "grid"; // Show the grid
    }

    // Ensure each participant takes one column
    newParticipant.style.gridColumn = "span 1"; // This applies to the new participant
    ParticipantData.style.gridColumn = "span 1";
});

function submitForm(event) {
    event.preventDefault();

    const total = totalFees();

    const adultName = document.querySelector('#adult_name').value;

    const numberOfParticipants = participants;

    const successMessage = successTemplate({
        adultName: adultName,
        participants: numberOfParticipants,
        total: total
    });

    const summaryElement = document.querySelector('#summary');

    const formElement = document.querySelector('form');

    formElement.style.display = 'none';

    summaryElement.style.display = 'block';

    summaryElement.innerHTML = successMessage;
}

function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");  // Grab all inputs with IDs starting with 'fee'
    feeElements = [...feeElements];  // Convert NodeList to Array

    // Sum up all the fee values
    const total = feeElements.reduce((sum, feeElement) => {
        return sum + parseFloat(feeElement.value) || 0;  // Add the value of each fee input
    }, 0);

    return total;
}

function successTemplate(info) {
    return `Thank you for registering, ${info.adultName}. You have registered ${info.participants} participants and owe $${info.total.toFixed(2)} in fees.`;
}

const form = document.querySelector('form');
form.addEventListener('submit', submitForm);
