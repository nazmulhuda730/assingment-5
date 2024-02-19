const allSeats = document.getElementsByClassName('seat-name');

let count = 0;
let availableSeat = document.getElementById('available-seat').innerText;

for (const seat of allSeats) {
    seat.addEventListener('click', function (event) {
        count = count + 1;
        availableSeat = availableSeat - 1;
        if (count <= 4) {
            seat.style.backgroundColor = "lightGreen";
            setInnerText('seat-count', count)
            setInnerText("available-seat", availableSeat);

            const seatName = event.target.innerText;
            const ticketPrice = document.getElementById("ticket-price").innerText;
            const createTextNode = document.createTextNode("Economy");

            const selectedSeat = document.getElementById("selected-seat")
            const li = document.createElement('li');
            const p = document.createElement('p');
            p.innerText = seatName;
            const p2 = document.createElement('p');
            p2.appendChild(createTextNode);
            const p3 = document.createElement('p');
            p3.innerText = ticketPrice;
            li.appendChild(p);
            li.appendChild(p2);
            li.appendChild(p3);
            selectedSeat.appendChild(li);

            setTotalPrice("total-price", parseInt(ticketPrice));
            grandTotalCost("grand-total", parseInt(ticketPrice));

            const hide = document.getElementById('coupon');
            hide.classList.remove('hidden');
        }
        else {
            alert('You can not by more then 4 tickets');
        }

    })
}

// seat total price
function setTotalPrice(id, cost) {
    const totalPrice = document.getElementById(id).innerText;
    const convertedTotalCost = parseInt(totalPrice);
    const sum = convertedTotalCost + parseInt(cost);
    setInnerText(id, sum);
}


// grand total cost
function grandTotalCost(id, cost) {
    const totalPrice = document.getElementById(id).innerText;
    const convertedTotalCost = parseInt(totalPrice);
    const sum = convertedTotalCost + parseInt(cost);
    setInnerText(id, sum);
}


// apply coupon 
document.getElementById('coupon').addEventListener('click', function () {
    let count = document.getElementById('seat-count').innerText;
    const inputCoupon = document.getElementById("input-coupon").value;
    const coupon = inputCoupon;
    const coupon1 = document.getElementById("NEW15").innerText;
    const coupon2 = document.getElementById("couple20").innerText;
    if (coupon === coupon1 && count > 3) {
        const grandTotal = document.getElementById('grand-total').innerText;
        const total = parseInt(grandTotal);
        const discount = total * 15 / 100;
        const discountPrice = total - discount;
        document.getElementById('grand-total').innerText = Math.round(discountPrice);
        const disable = document.getElementById('disable')
        disable.style.display = 'none';
    }
    else if (coupon === coupon2 && count > 3) {
        const grandTotal = document.getElementById('grand-total').innerText;
        const total = parseInt(grandTotal);
        const discount = total * 20 / 100;
        const discountPrice = total - discount;
        document.getElementById('grand-total').innerText = Math.round(discountPrice);
        const disable = document.getElementById('disable')
        disable.style.display = 'none';
    }
    else {
        alert('input valid coupon and booking 4 seat for get discount')
    }
})

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}

// input section
document.getElementById('numbers').addEventListener('keyup', function (event) {
    let count = document.getElementById('seat-count').innerText;
    const numbers = event.target.value;
    const next = document.getElementById('next');
    if (numbers.length === 11 && count > 0) {
        next.removeAttribute('disabled');
    } else if (numbers.length !== 11) {
        next.setAttribute('disabled', true);
    }
});




function next() {
    const seatSection = document.getElementById("seat-section");
    seatSection.classList.add('hidden');

    const screen = document.getElementById('screen');
    screen.classList.remove('hidden');
}
function hide() {
    const screen = document.getElementById('screen');
    screen.classList.add('hidden');

    const seatSection = document.getElementById("seat-section");
    seatSection.classList.remove('hidden');
}