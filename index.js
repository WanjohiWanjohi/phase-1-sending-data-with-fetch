const init = () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const userObject = {
            name: event.target.userName.value,
            email: event.target.userEmail.value
        }
        submitData(userObject.name, userObject.email)
    });
}


function submitData(name, email) {
    const destinationURL = 'http://localhost:3000/users'

    fetch(destinationURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',

        },
        body: JSON.stringify({ name: name, email: email })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            console.log(data.id)
            let li = document.createElement("li");
            document.querySelector("#AddedIds").appendChild(li);
            li.appendChild(document.createTextNode(`AddedIds: ${data.id}`));            
        }).catch(function (error)  {
            
            document.body.innerHTML = error.message
                  });
}
document.addEventListener('DOMContentLoaded', init);
