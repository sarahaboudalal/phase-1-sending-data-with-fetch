// Add your code here
function submitData(userName, userEmail){
  return fetch("http://localhost:3000/users", {
    method :"POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    },
    body: JSON.stringify({
        name: 'Steve',
        email: 'steve@steve.com',
    })
})
.then(resp => resp.json())
.then(data => document.body.innerHTML = data["id"])
.catch((err) => {
//  alert("Unauthorized Access");
 document.body.innerHTML = err.message} )
} 