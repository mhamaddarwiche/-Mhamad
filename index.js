fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        let users = document.getElementById('users');
        json.forEach(element => {
            let user = document.createElement('option');
            user.innerHTML = element.name;
            users.appendChild(user);
        });
    })