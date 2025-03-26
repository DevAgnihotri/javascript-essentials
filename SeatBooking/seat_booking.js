// JS for booking seats
const threatreSeats = [
    ['X', '0', 'X'],
    ['0', 'X', '0'],
    ['X', '0', 'X']
];

function bookSeat(row, col) {
    if (threatreSeats[row][col] === '0') {
        threatreSeats[row][col] = 'X';
        updateSeatStatus(row, col, 'booked');
        alert(`Seat ${String.fromCharCode(65 + row)}${col + 1} booked successfully`);
    } else {
        alert(`Seat ${String.fromCharCode(65 + row)}${col + 1} is already booked`);
    }
}

function updateSeatStatus(row, col, status) {
    const seats = document.getElementsByClassName('seat');
    const index = row * 3 + col;
    seats[index].classList.remove('available', 'booked');
    seats[index].classList.add(status);
}


