// Blog functionality
document.addEventListener('DOMContentLoaded', function () {
    fetchBlogPosts();
});

function fetchBlogPosts() {
    // Simulate fetching blog posts from a server or API
    const blogPosts = [
        { title: 'Introduction to Web Development', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { title: 'JavaScript Fundamentals', content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
        // Add more blog posts as needed
    ];

    // Display the blog posts on the page
    const blogPostsContainer = document.getElementById('blog-posts');
    blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('blog-post');
        postElement.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
        blogPostsContainer.appendChild(postElement);
    });
}
