function successTemplate(info) {
    return `Thank you for registering, ${info.adultName}. You have registered ${info.participants} participants and owe $${info.total.toFixed(2)} in fees.`;
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

export function submitForm(event) {
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
