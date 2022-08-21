
function submitData(name, email) {

    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name,
            email
        })
    })
        .then(res => res.json())
        .then(obj => {
            let p = document.createElement('p');
            p.textContent = obj.id;
            document.querySelector('body').appendChild(p);
        })
        .catch(error => {
            document.querySelector('script').textContent = error;
        })
}
