function calculateAge() {
  let birthdate = new Date(document.getElementById('datepicker').value);
  let today = new Date();

  // Calculate age in years
  let ageYears = today.getFullYear() - birthdate.getFullYear();
  let monthDiff = today.getMonth() - birthdate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
    ageYears--;
  }

  // Calculate age in months
  let ageMonths = (today.getMonth() + 12 - birthdate.getMonth()) % 12;
  if (today.getDate() < birthdate.getDate()) {
    ageMonths--;
  }
  if (ageMonths < 0) {
    ageMonths += 12;
  }

  // Calculate age in days
  let ageDays = today.getDate() - birthdate.getDate();
  if (ageDays < 0) {
    let lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    ageDays += lastMonth.getDate();
    ageMonths--;
    if (ageMonths < 0) {
      ageMonths += 12;
      ageYears--;
    }
  }

  // Display age in years, months, and days
  let ageString = "";
  if (ageYears > 0) {
    ageString += ageYears + " year";
    if (ageYears > 1) {
      ageString += "s";
    }
  }
  if (ageMonths > 0) {
    if (ageString) {
      ageString += ", ";
    }
    ageString += ageMonths + " month";
    if (ageMonths > 1) {
      ageString += "s";
    }
  }
  if (ageDays > 0) {
    if (ageString) {
      ageString += ", ";
    }
    ageString += ageDays + " day";
    if (ageDays > 1) {
      ageString += "s";
    }
  }

  document.getElementById('age').value = ageString;
}
  