const seatContainer = document.getElementById('seat-container');
const countOutput = document.getElementById('count-output');
const remainingOutput = document.getElementById('remaining-output');
const totalPriceSpan = document.getElementById('total-price');
const grandTotalSpan = document.getElementById('grand-total');
const selectedSeatsOutput = document.getElementById('selected-seats-output');

let selectedSeats = 0;
let remainingSeats = 40;
let totalPrice = 0;

function updateSummary() {
    countOutput.textContent = selectedSeats;
    remainingOutput.textContent = remainingSeats;
    totalPriceSpan.textContent = totalPrice;
    grandTotalSpan.textContent = totalPrice;
}

function toggleSeat(seatId) {
    const seatButton = document.getElementById(seatId);

    if (selectedSeats >= 4 && !seatButton.classList.contains('selected')) {
        alert("You can only select up to 4 seats.");
        return;
    }

    seatButton.classList.toggle('selected');
    selectedSeats = document.getElementsByClassName('selected').length;
    remainingSeats = 40 - selectedSeats;
    totalPrice = selectedSeats * 550;

    updateSummary();

    const selectedSeatsArray = Array.from(document.getElementsByClassName('selected'));
    const selectedSeatsText = selectedSeatsArray.map(seat => seat.innerText);
    selectedSeatsOutput.textContent = selectedSeatsText.join(', ');

    
    seatButton.style.backgroundColor = seatButton.classList.contains('selected') ? 'green' : 'white';
    seatButton.style.color = seatButton.classList.contains('selected') ? 'white' : 'green';
}
//_______________________________________________________________________________________________________

const couponBtn = document.getElementById('coupon-btn');
const couponDiv = document.getElementById('coupon-Div');
couponBtn.addEventListener('click', function(){
    const couponElement = document.getElementById('coupon-element').value;
    console.log(couponElement);

    if(totalPrice >= 2200){
        if(couponElement === "NEW15"){
            const discountElement = document.getElementById('discount-price');
            const discountAmount = totalPrice * 0.15;
            discountElement.innerText =discountAmount.toFixed(2);
            couponDiv.classList.add('hidden');
            const grandTotal = document.getElementById('grand-total')
            grandTotal.innerText = totalPrice - discountAmount.toFixed(2);

        }
        if(couponElement === "Couple 20"){
            const discountElement = document.getElementById('discount-price');
            const discountAmount = totalPrice * 0.2;
            discountElement.innerText =discountAmount.toFixed(2);
            couponDiv.classList.add('hidden');
            const grandTotal = document.getElementById('grand-total')
            grandTotal.innerText = totalPrice - discountAmount.toFixed(2);
        }
    }
})
