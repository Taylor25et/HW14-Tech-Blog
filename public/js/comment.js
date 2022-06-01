// to add a comment

const addComment = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('#inputComment').value.trim();
    const post_id = commentForm.getAttribute('data-id');
    // const authMessage = document.querySelector('.auth');
    // const userImg = document.querySelector('#user-img').dataset.id;
    
    if (comment && post_id) {
    const respond = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({
          post_id, 
          comment
        }),
        headers: { "Content-Type": "application/json" }
    });

    if (respond.ok) {
        document.location.reload();
      } else {
        alert(respond.statusText);
      }
}};
const commentForm = document.querySelector('.commentForm');
commentForm.addEventListener('submit', addComment);