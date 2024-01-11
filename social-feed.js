document.addEventListener('DOMContentLoaded', function () {
    // Fetch and display social media feed
    fetchSocialMediaFeed('social-feed');
});

async function fetchSocialMediaFeed(containerId) {
    try {
        const response = await fetch('/api/recent-posts');
        const data = await response.json();

        const feedContainer = document.getElementById(containerId);

        if (data.success) {
            data.posts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.classList.add('post');
                postElement.innerHTML = `<p>${post.content}</p>`;
                feedContainer.appendChild(postElement);
            });
        } else {
            feedContainer.innerHTML = '<p>Error fetching social media feed.</p>';
        }
    } catch (error) {
        console.error('Error fetching social media feed:', error);
    }
}
