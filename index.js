function element(){
    var url ='https://jsonplaceholder.typicode.com/users';
fetch(url)
    .then(response => response.json())
    .then(data => {
        var _users = document.getElementById('users');
        data.forEach(user => {
            let _option = document.createElement('option');
            _option.innerHTML = user.name;
            _users.appendChild(_option);
        });
    })
}
