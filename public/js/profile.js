//user creates new post
async function newPost(event) {
    event.preventDefault();

    const title = document.querySelector('#new-post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();
   

    if (title && content) {
      const response = await fetch('/api/profile', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { "Content-Type": "application/json" }
    });

    if (response.ok) {
        document.location.replace("/profile");
      } else {
        alert('Sorry but your post could not be created. Please try again later');
      }
    }
}
document.querySelector("#new-post-form button").addEventListener("submit", newPost);

//update a user's previous post
async function updatePost(event) {
  event.preventDefault();

  const postId = event.target.dataset.id;
  const content = document.getElementById(postId).textContent();
  
  if (postId && content){
  const response = await fetch(`/api/profile/${postId}`, {
      method: 'PUT',
      body: JSON.stringify({ postId, content }),
      headers: { "Content-Type": "application/json" }
  });

  if (response.ok) {
      document.location.reload("/profile");
    } else {
      alert('Sorry but your post could not be updated. Please try again later');
    }
  }
}
document.querySelectorAll(".post-update button").addEventListener("click", updatePost);

//deletes a user's post
async function deletePost(event) {
  if (event.target.hasAttribute('data-id')) {
    const postId = event.target.hasAttribute('data-id');

    const response = await fetch(`/api/profile/${postId}`, {
      method: 'DELETE',
    });

  if (response.ok) {
      document.location.reload("/profile");
    } else {
      alert('Sorry but your post could not be deleted. Please try again later');
    }
  }
}

document.querySelectorAll(".post-delete button").addEventListener("click", deletePost);



