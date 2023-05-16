function validateForm() {
    var password = document.getElementById("password").value;
    var repeatPassword = document.getElementById("repeat-password").value;
  
    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return false;
    }
  
    if (!/\d/.test(password)) {
      alert("Password must contain at least one digit.");
      return false;
    }
  
    if (!/[a-z]/.test(password)) {
      alert("Password must contain at least one lowercase alphabet.");
      return false;
    }
  
    if (!/[A-Z]/.test(password)) {
      alert("Password must contain at least one uppercase alphabet.");
      return false;
    }
  
    if (password !== repeatPassword) {
      alert("Passwords do not match.");
      return false;
    }
  
    return true;
  }
  