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
document.querySelector("#new-post-form").addEventListener("submit", newPost);

//update a user's previous post
async function updatePost(event) {
  event.preventDefault();

  const post_id = event.target.dataset.id;
  const content = document.getElementById(post_id).textContent();
  
  if (postId && content){
  const response = await fetch(`/api/profile/${post_id}`, {
      method: 'PUT',
      body: JSON.stringify({ post_id, content }),
      headers: { "Content-Type": "application/json" }
  });

  if (response.ok) {
      document.location.reload("/");
    } else {
      alert('Sorry but your post could not be updated. Please try again later');
    }
  }
}
document.querySelectorAll(".post-update button").addEventListener("click", updatePost);

//deletes a user's post
async function deletePost(event) {
  if (event.target.hasAttribute('data-id')) {
    const post_id = event.target.hasAttribute('data-id');

    const response = await fetch(`/api/profile/${post_id}`, {
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



