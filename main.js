const maleNames = [
  "Abdi", "Ahmed", "Osman", "Mohamed", "Ali", "Ismail", "Hassan", "Yusuf", "Omar", "Abdullahi",
  "Mahir", "Farhan", "Nur", "Aden", "Abdirahman", "Mustafa", "Yasin", "Ibrahim", "Abdulahi", "Musa",
  "Rashid", "Abshir", "Abdiqani", "Bashir", "Zakariya", "Abshir", "Hamza", "Liban", "Jamal", "Ayanle",
  "Ilyas", "Fuad", "Mohammed", "Qasim", "Abdirizak", "Abdiwahab", "Zubair", "Abdihakim", "Nuux", "Jibril",
  "Aweis", "Abdulqadir", "Adan", "Liban", "Cabdalle", "Abdinasir", "Hussein", "Faisal", "Sharif", "Abdishakur"
];

const femaleNames = [
  "Amira", "Yasmin", "Halima", "Zahra", "Hana", "Samira", "Leila", "Khadija",
  "Ayan", "Nasra", "Faduma", "Sumaya", "Muna", "Safiya", "Naima", "Amina", "Mariam",
  "Ilhan", "Hodan", "Hawa", "Anisa", "Deeqa", "Sadiya", "Shukri", "Hamdi", "Nasteho", "Sahra",
  "Fowsia", "Ruqia", "Aaliyah", "Isra", "Suad", "Ubah", "Ayaan", "Fathiya", "Asma",
  "Ruqayyah", "Samsam", "Afnan", "Farhia", "Nimco", "Hafsa", "Filsan"
];

const fathersNames = [
  "Abdul", "Mohamud", "Ismahan", "Yusuf", "Omar", "Abdullahi", "Mahir", "Farhan", "Nur", "Aden",
  "Abdirahman", "Mustafa", "Yasin", "Ibrahim", "Abdulahi", "Musa", "Rashid", "Abshir", "Abdiqani", "Bashir",
  "Zakariya", "Abshir", "Hamza", "Liban", "Jamal", "Ayanle", "Ilyas", "Fuad", "Mohammed", "Qasim",
  "Abdirizak", "Abdiwahab", "Zubair", "Abdihakim", "Nuux", "Jibril", "Aweis", "Abdulqadir", "Adan", "Liban",
  "Cabdalle", "Abdinasir", "Hussein", "Faisal", "Sharif", "Abdishakur", "Abdul", "Mohamud", "Ismahan", "Yusuf"
];

const lastNames = [
  "Abdikadir", "Abdirahman", "Adan", "Ahmed", "Ali", "Daud", "Hassan", "Hussein", "Ismail", "Mahir",
  "Mohamed", "Mustafa", "Nur", "Omar", "Osman", "Rashid", "Said", "Salim", "Yusuf", "Zakaria",
  "Abdullahi", "Cabdulle", "Faisal", "Farah", "Fuad", "Ilyas", "Jibril", "Liban", "Musa", "Nuur",
  "Qasim", "Ridwan", "Shafie", "Sharif", "Tahir", "Ubah", "Xasan", "Yasin", "Zakariye", "Abdulqadir",
  "Adnan", "Aweis", "Bashir", "Cali", "Dahir", "Haji", "Hirsi", "Jama", "Khalid", "Laban"
];

const medicalJobs = ["Physician", "Surgeon", "Nurse", /* ... */ ];

function generateRandomNames() {
    const numberOfNames = document.getElementById('numberOfNames').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const namesList = document.getElementById('result');
    namesList.innerHTML = ""; // Clear previous results

    for (let i = 1; i <= numberOfNames; i++) {
        let firstName, lastName;
        if (gender === "male") {
            firstName = maleNames[Math.floor(Math.random() * maleNames.length)];
        } else {
            firstName = femaleNames[Math.floor(Math.random() * femaleNames.length)];
        }

        const surname = fathersNames[Math.floor(Math.random() * fathersNames.length)];
        lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        const numbers = i;
        const medicalJob = medicalJobs[Math.floor(Math.random() * medicalJobs.length)];

        const fullName = ` ${firstName} ${surname} ${lastName} `;

        // Create and append list item to the result
        const listItem = document.createElement('li');
        listItem.textContent = fullName;
        namesList.appendChild(listItem);
    }
}

function copyNames() {
    const namesList = document.getElementById('result');
    const textArea = document.createElement('textarea');
    textArea.value = Array.from(namesList.childNodes).map(node => node.textContent).join('\n');
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    // alert('Names copied to clipboard!');
}
function clearResult() {
  const namesList = document.getElementById('result');
  namesList.innerHTML = ""; // Clear the result
}
