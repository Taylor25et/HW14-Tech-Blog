async function newPost(event) {
    event.preventDefault();

    const title = document.querySelector('#new-post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();

    const response = await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to add. Check dashboard.js');
      }
}
document.querySelector("#newPost button").addEventListener("click", newPost);

// async function newFormHandler(event) {
//   event.preventDefault(); 
// }