async function newPost(event) {
    event.preventDefault();

    const title = document.querySelector('#new-post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();
   

    if (title && content) {
      const respond = await fetch('/api/profile', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { "Content-Type": "application/json" }
    });

    if (respond.ok) {
        document.location.replace("/profile");
      } else {
        alert('Failed to add. Check post.js');
      }
    }
}
document.querySelector("#new-post-form button").addEventListener("submit", newPost);


async function updatePost(event) {
  event.preventDefault();

  const postId = event.target.dataset.id;
  const content = document.getElementById(postId).textContent();
  

  const response = await fetch(`/api/profile/${postId}`, {
      method: 'PUT',
      body: JSON.stringify({ content }),
      headers: { "Content-Type": "application/json" }
  });

  if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to add. Check post.js');
    }
}

document.querySelectorAll(".post-update").forEach(function(btn) {btn.addEventListener("click", updatePost)});


async function deletePost(event) {
  event.preventDefault();

  const postId = event.target.dataset.id;

  const response = await fetch(`/api/profile/${postId}`, {
      method: 'DELETE',
  });

  if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to delete. Check post.js');
    }
}

document.querySelectorAll(".post-delete").forEach(function(btn) {btn.addEventListener("click", deletePost)});



