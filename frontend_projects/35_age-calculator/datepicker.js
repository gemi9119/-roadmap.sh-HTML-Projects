const DateTime = luxon.DateTime;
let selectedDate = null;

const picker = datepicker('#birthdate', {
  maxDate: new Date(),
  formatter: (input,date) =>{
    const day = String(date.getDate()).padStart(2,'0');
    const month = String(date.getMonth() + 1 ).padStart(2,'0');
    const year = date.getFullYear();
    input.value = `${day}/${month}/${year}`;
  },
  onSelect: (instance, date) => {
    selectedDate = date;
    clearError();
  }
})

const form = document.getElementById('age-form');
const errorMessage = document.getElementById('error-message');
const resultContainer = document.getElementById('result');

form.addEventListener('submit', e => {
  e.preventDefault();

  if(!selectedDate){
    showError('Please select your birth date.');
    return;
  }

  const birthDate = DateTime.fromJSDate(selectedDate);
  const now = DateTime.now();

  if(birthDate > now){
    showError('Birth date cannot be in the future');
    return;
  }

  const diff = now.diff(birthDate, ['years','months','days']).toObject();

  const years = Math.floor(diff.years || 0);
  const months = Math.floor(diff.months || 0);
  const days = Math.floor(diff.days || 0);

  displayResult(years,months,days);
})

function displayResult(years, months, days) {
  let resultHTML = `You are <strong>${years} ${years === 1 ? 'year' : 'years'} ${months} ${months === 1 ? 'month' : 'months'}</strong>`;
  
  if (days > 0) {
    resultHTML += ` <strong>${days} ${days === 1 ? 'day' : 'days'}</strong>`;
  }
  
  resultHTML += ` old`;

  resultContainer.innerHTML = `<p>${resultHTML}</p>`;
  resultContainer.classList.remove('hidden');
}

function showError(msg) {
  errorMessage.textContent = msg;
  resultContainer.classList.add('hidden');
}

function clearError() {
  errorMessage.textContent = '';
}