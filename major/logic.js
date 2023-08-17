let likeCount = 0;
let dislikeCount = 0;

const likeButton = document.getElementById('likeButton');
const dislikeButton = document.getElementById('dislikeButton');
const likeCountElement = document.getElementById('likeCount');
const dislikeCountElement = document.getElementById('dislikeCount');

function updateLikeCount() {
    likeCountElement.textContent = `${likeCount} ${likeCount === 1 ? 'like' : 'likes'}`;
}

function updateDislikeCount() {
    dislikeCountElement.textContent = `${dislikeCount} ${dislikeCount === 1 ? 'dislike' : 'dislikes'}`;
}

likeButton.addEventListener('click', () => {
    likeCount++;
    updateLikeCount();
});

dislikeButton.addEventListener('click', () => {
    dislikeCount++;
    updateDislikeCount();
});

updateLikeCount();
updateDislikeCount();