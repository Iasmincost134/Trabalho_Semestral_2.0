const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const seePassword = document.getElementById('password');
const password3 = document.getElementById('password3');
const password2 = document.getElementById('password2');
const password1 = document.querySelector('.password1');
const usuario = document.getElementById('usuario');
const email = document.getElementById('email');
const email2 = document.getElementById('email2');
const icon = document.getElementById('icon');
const form = document.getElementById('form');
const form2 = document.getElementById('form2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
  });
form2.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
  });
  
  function checkInputs() {
	const emailValue = email.value.trim();
	const usuarioValue = usuario.value.trim();
	const email2Value = email.value.trim();
	const password3Value = password3.value.trim();
	const password2Value = password2.value.trim();
	const password1Value = password1.value.trim();

	
	if(usuarioValue === '') {
		setErrorFor(usuario, 'Campo de senha vazio');
	  } else {
		setSuccessFor(usuario);
	  }
	if(emailValue === '') {
	  setErrorFor(email, 'Email não preenchido');
	} else if (!isEmail(emailValue)) {
	  setErrorFor(email, 'Email não válido');
	} else {
	  setSuccessFor(email);
	}
	if(email2Value === '') {
	  setErrorFor(email2, 'Campo de email vazio');
	} else if (!isEmail(email2Value)) {
	  setErrorFor(email2, 'Email não válido');
	} else {
	  setSuccessFor(email);
	}
	if(password1Value === '') {
		setErrorFor(password1, 'Campo de senha vazio');
	  } else {
		setSuccessFor(password1);
	  }
	if(password2Value === '') {
		setErrorFor(password2, 'Campo de senha vazio');
	  } else if(password1Value !== password2Value) {
		setErrorFor(password2, 'Ops! Senhas não correspondem');
	  } else{
		setSuccessFor(password2);
	  }
	if(password3Value === '') {
	  setErrorFor(password3, 'Campo de senha vazio');
	} else {
	  setSuccessFor(password3);
	}
	if (emailValue !== '' && isEmail(emailValue) && password3Value !== '') {
		setTimeout(() => {
			window.location.href = 'index.html';
		  }, 2000);
	  }
	if (password1Value !== ''  && password2Value !== ''  && email2Value !== '' && usuarioValue !== '') {
		setTimeout(() => {
			window.location.href = 'index.html';
		  }, 2000);
	  }
	function setErrorFor(input, message) {
		const caseInputBackgroundMode = input.parentElement;
		const small = caseInputBackgroundMode.querySelector('small');
		caseInputBackgroundMode.className = 'case_input_background_mode error';
		small.innerText = message;
	  }
	  function setSuccessFor(input) {
		const caseInputBackgroundMode = input.parentElement;
		caseInputBackgroundMode.className = 'case_input_background_mode success';
	  }
		
	  function isEmail(email) {
		return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
	  }
  }

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

//gerador de tokens
//Eventos
const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");

//Funções
const getLetterLowerCase = () => {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97); //floor para não gerar números quebrados
};

const getLetterUpperCase = () => {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

 const getNumber = () => {
	return Math.floor(Math.random()*10).toString();
 };

 const getSymbol = () => {
	const symbols = "(){}[]=<>/.,!@#$%*&+-";
	return symbols[Math.floor(Math.random() * symbols.length)];
 };

 const generatePassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) => {

	let password = ""
	const passwordLength = 10

	const generators = [
		getLetterLowerCase,
		getLetterUpperCase,
		getNumber,
		getSymbol
	]

	for (i = 0; i < passwordLength; i = i + 4) {
		generators.forEach(() => {
			const randomValue = 
            generators[Math.floor(Math.random() * generators.length)]();

			password += randomValue;
		});
	}
	password = password.slice(0, passwordLength);

	generatedPasswordElement.style.display = "block"
	generatedPasswordElement.querySelector("h4").innerText = password;
 }

//Eventos
generatePasswordButton.addEventListener("click", () => {
	generatePassword(
		getLetterLowerCase,
		getLetterUpperCase,
		getNumber,
		getSymbol
	);
});

function showHide(){
	if (seePassword.type === 'password') {
		seePassword.setAttribute('type','text');
		icon.classList.add('hide')
	}
	else{
		seePassword.setAttribute('type','text');
		icon.classList.add('hide')
	}
}
