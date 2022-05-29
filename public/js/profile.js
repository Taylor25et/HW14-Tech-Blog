// adding a new post
async function newPost(event) {
    event.preventDefault();

    const title = document.querySelector('#new-post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();

    const response = await fetch('/api/profile', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { "Content-Type": "application/json" }
    });

    if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to add. Check post.js');
      }
}
document.querySelector("#newPost button").addEventListener("submit", newPost);

// updating
// async function updatePost(event) {
//   event.preventDefault();

//   const title = document.querySelector('#new-post-title').value.trim();
//   const content = document.querySelector('#post-content').value.trim();

//   const response = await fetch('/api/profile', {
//       method: 'POST',
//       body: JSON.stringify({ title, content }),
//       headers: { "Content-Type": "application/json" }
//   });

//   if (response.ok) {
//       document.location.reload();
//     } else {
//       alert('Failed to add. Check post.js');
//     }
// }
// document.querySelector("#newPost button").addEventListener("submit", newPost);

// updating post
// async function newPost(event) {
//   event.preventDefault();

//   const title = document.querySelector('#new-post-title').value.trim();
//   const content = document.querySelector('#post-content').value.trim();

//   const response = await fetch('/api/profile', {
//       method: 'POST',
//       body: JSON.stringify({ title, content }),
//       headers: { "Content-Type": "application/json" }
//   });

//   if (response.ok) {
//       document.location.reload();
//     } else {
//       alert('Failed to add. Check post.js');
//     }
// }
// document.querySelector("#newPost button").addEventListener("submit", newPost);



