document.getElementById('generate-btn').addEventListener('click', fetchRandomUser);

function fetchRandomUser() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            document.getElementById('name').textContent = `${user.name.first}` `${user,name.last}`;
            document.getElementById('email').textContent = user.email;
            document.getElementById('password').textContent = user.login.password;
            document.getElementById('birthday').textContent = new Date(user.dob.date).toLocaleDateString();
            document.getElementById('phone').textContent = user.phone;
            document.getElementById('address').textContent = `${user.location.street.number}` `${user.location.street.name}`, `${user.location.city}`, `${user.location.state}`, `${user.location.country}`;
        });
}