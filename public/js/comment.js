// user can add comment to someone's post
async function addComment(event) {
    // event.preventDefault();

    const postId = document.getElementById('post-title').dataset.id;
    const newComment = document.querySelector('.comment-field').value.trim();
    
    // const authMessage = document.querySelector('.auth');
    // const userImg = document.querySelector('#user-img').dataset.id;
    
    if (newComment && postId) {
    const response = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({
          postId, 
          newComment
        }),
        headers: { "Content-Type": "application/json" }
    });
    console.log(addComment)

    if (response.ok) {
        document.location.replace("/comment/${}");
      } else {
        alert(response.statusText);
      }
}};
document.getElementById('comment-form').addEventListener('submit', addComment);