window.onload = function () {
    // Check if username exists in sessionStorage
    const username = sessionStorage.getItem("username");

    if (username) {
        console.log("Username found in session storage:", username);
        document.getElementById("sign-up").style.display="none";
        document.getElementById("sign-out").style.display="block";
        // Optionally, you can redirect or update the page content based on the presence of username
    } else {
        console.log("No username found in session storage");
        document.getElementById("sign-up").style.display="block";
        document.getElementById("sign-out").style.display="none";
        // Optionally, redirect to login page or show an alert
    }
};
function signOut() {
sessionStorage.removeItem("username");
window.location.href="/auth.html";
}