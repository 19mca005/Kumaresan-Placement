function registerForm(){
  const fn = document.getElementById("fn").value;
  const ln = document.getElementById("ln").value;
  const email = document.getElementById("email").value;
  const reEnterEmail = document.getElementById("ree").value;
  const password = document.getElementById("password").value;
  var radios = document.getElementsByName(selectedRadio.name);
 
  const errFn = document.getElementById("errfn");
  const err2Fn = document.getElementById("err2fn");
  const errLn = document.getElementById("errln");
  const errEm = document.getElementById("errem");
  const errRem = document.getElementById("errrem");
  const errPw = document.getElementById("errpw");
  


  let regex = /^\d/;
  var uppercaseRegex = /[A-Z]/;
  var numberRegex = /[0-9]/;
  var symbolRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

  var containsUppercase = uppercaseRegex.test(password);
  var containsNumber = numberRegex.test(password);
  var containsSymbol = symbolRegex.test(password);
 
  var isValid=true;
  errFn.textContent='';
  errLn.textContent='';
  errEm.textContent='';
  errRem.textContent='';
  errPw.textContent='';
  
  if(fn.length > 25){
      errFn.textContent= 'Firstname must be less than or equal to 25';
      errFn.style.color ='red';   
      isValid=false;
  }
  if(regex.test(fn)){
      err2Fn.textContent= 'Name Starts With Alphabets Only';
      err2Fn.style.color ='red';   
      isValid=false;
  }
  if(ln.length > 25){
      errLn.textContent= 'Lastname must be less than or equal to 25';
      errLn.style.color ='red';   
      isValid=false;  
  }
  if (!email.includes('@')) {
      errEm.textContent= 'Email must contain @';
      errEm.style.color ='red';   
      isValid = false;
  }
  if(email !== reEnterEmail){
      errRem.textContent= 'Emails do not match!';
      errRem.style.color ='red';   
      isValid = false;
  }
  if(!(containsUppercase && containsNumber && containsSymbol)){
      errPw.textContent= 'Password must contain at least one uppercase letter, one number, and one symbol';
      errPw.style.color ='red';   
      isValid = false;
  }
  
  for (var i = 0; i < radios.length; i++) {
      radios[i].checked = false;
  }
  selectedRadio.checked = true;
}
  return isValid;
}
