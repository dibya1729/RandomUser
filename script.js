document.addEventListener("DOMContentLoaded", () => {

    const userimg = document.getElementById("user-img");
    const username = document.getElementById("user-name");
    const useremail = document.getElementById("user-email");
    const userbirthday = document.getElementById("user-birthday");
    const useraddress = document.getElementById("user-address");
    const userphone = document.getElementById("user-phone");
    const userpassword = document.getElementById("user-password");

    function fetchUserData() {
        fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(data => {
                const user = data.results[0];
                userimg.src = user.picture.large;
                username.textContent = `${user.name.first} ${user.name.last}`;
                useremail.textContent = user.email;
                useraddress.textContent = `${user.location.city}, ${user.location.country}`;
                userbirthday.textContent = new Date(user.dob.date).toLocaleDateString();
                useraddress.textContent = `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.country}`;
                userphone.textContent = user.phone;
                userpassword.textContent = user.login.password;
            })
            .catch(error => console.error('Error fetching user data:', error));
    }

    fetchUserData();

});
