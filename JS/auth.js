let container = document.getElementById('container')

toggle = () => {
	container.classList.toggle('sign-in')
	container.classList.toggle('sign-up')
}

setTimeout(() => {
	container.classList.add('sign-in')
}, 200)






let form = document.getElementById('loginForm');

// Add event listener to capture the form submission
form.addEventListener('submit', function (event) {
	event.preventDefault(); // Prevent the default form submission

	// Get the input values
	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;

	// Retrieve the users array from localStorage
	let users = JSON.parse(localStorage.getItem('users')) || [];

	// Check for matching username and password
	let userFound = users.find(user => user.username === username && user.password === password);

	if (userFound) {
		// alert("Login successful");
		showModal("Success", "Login successful");
		sessionStorage.setItem("username", username); // Store username in sessionStorage
		window.location.href = "/index.html"; // Redirect to index.html
	} else {
		// alert("Invalid Username or Password");
		showModal("Fail", "Invalid Username or Password");
	}

	// Print the values to the console
	console.log('Username:', username);
	console.log('Password:', password);
});
let signUpForm = document.getElementById('signUpForm');

// Add event listener to capture the form submission
signUpForm.addEventListener('submit', function (event) {
	event.preventDefault(); // Prevent the default form submission

	const userSignUp = document.getElementById('userSignUp').value;
	const userSignupEmail = document.getElementById('userSignupEmail').value;
	const userSignUpPassword = document.getElementById('userSignUpPassword').value;
	const userSignUpPasswordConfirm = document.getElementById('userSignUpPasswordConfirm').value;

	// Check if passwords match
	if (userSignUpPassword !== userSignUpPasswordConfirm) {
		console.log('Passwords do not match!');
		// alert('Passwords do not match!');
		showModal("Fail", "Passwords do not match!");
	} else {
		// Get the existing users array from localStorage (if it exists)
		let users = JSON.parse(localStorage.getItem('users')) || [];

		// Create a new user object
		let newUser = {
			username: userSignUp,
			email: userSignupEmail,
			password: userSignUpPassword
		};

		// Check if the username or email already exists
		const existingUser = users.find(user => user.username === userSignUp || user.email === userSignupEmail);
		if (existingUser) {
			const chkUsername = users.find(user => user.username === userSignUp);
			if(chkUsername){
				showModal("Fail", "Username already exists!");
				return;
			}
			const chkEmail = users.find(user => user.email === userSignupEmail);
			if(chkEmail){
				showModal("Fail", "Email already exists!");
				return;
			}
			// alert('Username or email already exists!');
			showModal("Fail", "Username or email already exists!");
		} else {
			// Add the new user to the array
			users.push(newUser);

			// Save the updated array back to localStorage
			localStorage.setItem('users', JSON.stringify(users));

			console.log('Form submitted and data saved to localStorage successfully!');
			console.log('Stored User Data:', users);

			// Clear the form fields after successful signup
			document.getElementById('userSignUp').value = "";
			document.getElementById('userSignupEmail').value = "";
			document.getElementById('userSignUpPassword').value = "";
			document.getElementById('userSignUpPasswordConfirm').value = "";

			// Show a success message
			// alert('Sign-up successful and data saved!');
			showModal("Success", "Sign up Successful");
			toggle();
		}
	}
});





// Close modal when clicking the close button
document.getElementById('closeBtn').onclick = function () {
	document.getElementById('modalOverlay').style.display = 'none';
};

// Close modal when clicking the "Close" button in footer
document.getElementById('closeModal').onclick = function () {
	document.getElementById('modalOverlay').style.display = 'none';
};

// SHOW MODAL
function showModal(headerText, bodyText) {

	document.getElementById('modalHeader').innerHTML = headerText;
	document.getElementById('modalBODY').innerHTML = bodyText;
	document.getElementById('modalOverlay').style.display = 'flex';

}