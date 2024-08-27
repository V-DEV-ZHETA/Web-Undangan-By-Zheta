function submitRSVP() {
    const nameInput = document.getElementById('name');
    const responseDiv = document.getElementById('response');

    if (nameInput.value.trim() === '') {
        responseDiv.textContent = 'Silakan masukkan nama Anda.';
        responseDiv.style.color = 'red';
    } else {
        responseDiv.textContent = `Terima kasih, ${nameInput.value}:p Kehadiran Anda telah dikonfirmasi.`;
        responseDiv.style.color = '#4CAF50';
        nameInput.value == ''; // Clear the input field after submission
    }


}

