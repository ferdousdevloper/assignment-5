/*
let selectedSeats = 0;
let totalAmount = 0;
*/
/*
const seatContainer = document.getElementById('seat-container');
        const countOutput = document.getElementById('count-output');
        const remainingOutput = document.getElementById('remaining-output');
        const priceSummary = document.getElementById('price-summary');
        const totalPriceSpan = document.getElementById('total-price');
        const grandTotalSpan = document.getElementById('grand-total');
        const selectedSeatsOutput = document.getElementById('selected-seats-output');

        let selectedSeats = 0;
        let remainingSeats = 40;
        let totalPrice = 0;

        function updateSummary() {
            countOutput.textContent = `Selected Seats: ${selectedSeats}`;
            remainingOutput.textContent = `Remaining Seats: ${remainingSeats}`;
            totalPriceSpan.textContent = totalPrice;
            grandTotalSpan.textContent = totalPrice;
        }

        function selectSeat(seatButton) {
            seatButton.classList.toggle('selected');

            if (seatButton.classList.contains('selected')) {
                selectedSeats++;
                remainingSeats--;
                totalPrice += 550;
            } else {
                selectedSeats--;
                remainingSeats++;
                totalPrice -= 550;
            }

            if (selectedSeats > 4) {
                alert("You can only select up to 4 seats.");
                seatButton.classList.remove('selected');
                selectedSeats--;
                remainingSeats++;
                totalPrice -= 550;
            }

            updateSummary();

            // Display selected seats
            const selectedSeatsArray = Array.from(document.getElementsByClassName('selected'));
            const selectedSeatsText = selectedSeatsArray.map(seat => seat.innerText);
            selectedSeatsOutput.textContent = `Selected Seats: ${selectedSeatsText.join(', ')}`;

            // Change button color using JavaScript
            seatButton.style.backgroundColor = seatButton.classList.contains('selected') ? 'green' : 'white';
            seatButton.style.color = seatButton.classList.contains('selected') ? 'white' : 'green';
        }



/*
let selectedSeats = 0;
let totalAmount = 0;
let count = 0;

//seat select function



function selectedSeat(button) {
    if (!button.classList.contains('selected') && selectedSeats < 4) {




        button.style.backgroundColor = "#1DD100"; //change background color
        button.style.color = "#FFFFF";  //change text color

        button.classList.add('selected');  // Apply selected style
        selectedSeats++;
        totalAmount += 550;
        // Display selected seats count
        document.getElementById('selected-count').innerHTML = selectedSeats;

        document.getElementById('remaining-count').innerHTML = 40 - selectedSeats;
        // Update total amount span
        document.getElementById('total-amount').innerHTML = totalAmount;


        //-------------------------------------------------






    }
}

function handleButtonClick(seat) {

    const buttonText = seat.target.innerText;

    console.log(buttonText)


    const p = document.createElement('p');
    p.innerText = buttonText;

    console.log(p)
    document.getElementById('seat-details').appendChild(p);


}

const buttons = document.querySelectorAll('.seats');

buttons.forEach(button =>  {
    button.addEventListener('click', handleButtonClick, { once: true });
});

//----------------------------------------------------------------------------------
*/


/*
function handleButtonClick(seat) {
            
        
    const seatDetails = document.getElementById('seat-details');

    const buttonText = seat.target.innerText;

    console.log(buttonText)


    const p = document.createElement('p');
    p.innerText = buttonText;

    const seatClass = document.createElement('p');
    const seatPrice = document.createElement('p');

    seatClass.textContent = "Economy";
    seatPrice.textContent = "550 TK";


    // document.getElementById('seat-details').appendChild(p);
     
    seatDetails.append(p, seatClass, seatPrice);

    const buttons = document.querySelectorAll('.seats');
        
        buttons.forEach(button => {
            button.addEventListener('click', handleButtonClick, { once: true });
        });


}

*/

