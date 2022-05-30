// to add a comment

async function comment(event) {
    event.preventDefault();

    const postId = document.querySelector('#post-title').dataset.id;
    const newComment = document.querySelector('#new-comment').value.trim();
    const authMessage = document.querySelector('.auth');
    const userImg = document.querySelector('#user-img').dataset.id;
    
    const response = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({ newComment, postId, userId, userImg }),
        headers: { "Content-Type": "application/json" }
    });
    
    console.log(response);

    if (response.ok) {
        document.location.reload();
      } else if 
      (response.status == 403) {
        authMessage.style.display = "block";
      } else {
        alert('Failed to add. Check comment.js');
      }
}

document.getElementById('comment-form').addEventListener('submit', comment);