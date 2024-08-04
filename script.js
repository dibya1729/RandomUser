
document.addEventListener("DOMContentLoaded", generateUser);

function generateUser() {
    fetch("https://randomuser.me/api/")
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            document.getElementById("user-img").src = user.picture.large;
            document.getElementById("name").innerText =` ${user.name.first} ${user.name.last}`;
            document.getElementById("email").innerText = user.email;
            document.getElementById("location").innerText = `${user.location.city}, ${user.location.country}`;
            document.getElementById("birthday").innerText = new Date(user.dob.date).toLocaleDateString();
            document.getElementById("phone").innerText = ` ${user.phone}`;

            document.getElementById("user-container").style.display = "block";
        })
        .catch((error) => {
            console.error("Error fetching user:", error);
        });
    const iconName = document.getElementById('icon-name');
    const iconEmail = document.getElementById('icon-email');
    const iconLocation = document.getElementById('icon-location');
    const iconBirthday = document.getElementById('icon-birthday');
    const iconPhone = document.getElementById('icon-phone');
    const iconPassword = document.getElementById('icon-password');
    const hoverData = document.getElementById('hover-data');   
    iconName.addEventListener('mouseover',()=>{
        hoverData.innerText=documnet.getElementById('name').innerText;
    });
    
    iconName.addEventListener('mouseover',()=>{
        hoverData.innerText=documnet.getElementById('email').innerText;
    });

    iconName.addEventListener('mouseover',()=>{
        hoverData.innerText=documnet.getElementById('location').innerText;
    });

    iconName.addEventListener('mouseover',()=>{
        hoverData.innerText=documnet.getElementById('birthday').innerText;
    });

    iconName.addEventListener('mouseover',()=>{
        hoverData.innerText=documnet.getElementById('password').innerText;
    });
}