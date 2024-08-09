document.addEventListener("DOMContentLoaded", generateUser);

function generateUser() {
    fetch("https://randomuser.me/api/")
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            const userData = {
                name: `${user.name.first} ${user.name.last}`,
                email: user.email,
                location: `${user.location.city}, ${user.location.country}`,
                birthday: new Date(user.dob.date).toLocaleDateString(),
                phone: user.phone,
                password: user.login.password
            };

            document.getElementById("user-img").src = user.picture.large;
            document.getElementById("name").innerText = userData.name;

            document.getElementById("user-data").innerHTML = `
                <p>Email: ${userData.email}</p>
                <p>Location: ${userData.location}</p>
                <p>Birthday: ${userData.birthday}</p>
                <p>Phone: ${userData.phone}</p>
                <p>Password: ${userData.password}</p>
            `;

            const icons = document.querySelectorAll('.icon');
            const userDataEl = document.getElementById('user-data');

            icons.forEach(icon => {
                icon.addEventListener('mouseover', () => {
                    switch (icon.id) {
                        case 'icon-name':
                            userDataEl.innerHTML = `<p>Name: ${userData.name}</p>`;
                            break;
                        case 'icon-email':
                            userDataEl.innerHTML = `<p>Email: ${userData.email}</p>`;
                            break;
                        case 'icon-location':
                            userDataEl.innerHTML = `<p>Location: ${userData.location}</p>`;
                            break;
                        case 'icon-birthday':
                            userDataEl.innerHTML = `<p>Birthday: ${userData.birthday}</p>`;
                            break;
                        case 'icon-phone':
                            userDataEl.innerHTML = `<p>Phone: ${userData.phone}</p>`;
                            break;
                        case 'icon-password':
                            userDataEl.innerHTML = `<p>Password: ${userData.password}</p>`;
                            break;
                    }
                });
            });
        })
        .catch((error) => {
            console.error("Error fetching user:", error);
        });
}
