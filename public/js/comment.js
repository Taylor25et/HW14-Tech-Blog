// user can add comment to someone's post
async function addComment(event) {
    event.preventDefault();

    const post_id = document.getElementById('post-id').value;
    const comment = document.querySelector('#comment-field').value.trim();
    // const authMessage = document.querySelector('.auth');
    // const userImg = document.querySelector('#user-img').dataset.id;
   
    
    if (comment && post_id) {
    const response = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({
          post_id, 
          comment
        }),
        headers: { "Content-Type": "application/json" }
    });

    if (response.ok) {
      //halp 
        document.location.reload();
      }  else {
        alert(response.statusText);
      }
}};
// document.querySelector('comment-form').addEventListener('submit', addComment);
document.getElementById('comment-form').addEventListener('submit', addComment);