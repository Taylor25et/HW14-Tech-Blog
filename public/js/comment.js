async function comment(event) {
    event.preventDefault();

    const postId = document.querySelector('#post-title').dataset.id;
    const newComment = document.querySelector('#new-comment').value.trim();
    
    const response = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({ newComment, postId }),
        headers: { "Content-Type": "application/json" }
    });

    if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to add. Check comment.js');
      }
};


document.getElementById('comment-form').addEventListener('submit', comment);