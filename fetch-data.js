async function fetchUserData () {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const users = await response.json();
        dataContainer.innerHTML ='';
        const userList = document.createElement("ul"); // Step 1: Create <ul>
        users.forEach(function(user) {
        const li = document.createElement("li");     // Step 2: Create <li>
        li.textContent = user.name;                       // Step 3: Set text content
        userList.appendChild(li);                    // Step 4: Append <li> to <ul>
   });
   dataContainer.appendChild(userList); 
    } catch (error) {
        console.error('Fetch error:', error);
        dataContainer.innerHTML = "Failed to load user data";
    } 
}
document.addEventListener("DOMContentLoaded", fetchUserData);