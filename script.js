document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", revealOnScroll);

    function revealOnScroll() {
        var sections = document.querySelectorAll(".hidden");

        for (var section of sections) {
            var windowHeight = window.innerHeight;
            var sectionTop = section.getBoundingClientRect().top;
            var sectionPoint = 50;

            if (sectionTop < windowHeight - sectionPoint) {
                section.classList.add("visible");
            }
        }
    }
});
function showModal() {
    document.getElementById('myModal').style.display = 'block';
}

function hideModal() {
    document.getElementById('myModal').style.display = 'none';
}
function toggleSkills() {
    var skillsList = document.getElementById('skillsList');
    skillsList.classList.toggle('show');
}
function showContactModal() {
    document.getElementById('contactModal').style.display = 'block';
}

function hideContactModal() {
    document.getElementById('contactModal').style.display = 'none';
}

function showSocialModal() {
    document.getElementById('socialModal').style.display = 'block';
}

function hideSocialModal() {
    document.getElementById('socialModal').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const confirmationMessage = document.getElementById('confirmation-message');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Submit the form using AJAX
        fetch(contactForm.action, {
            method: 'POST',
            body: new FormData(contactForm),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                contactForm.style.display = 'none';
                confirmationMessage.style.display = 'block';
            } else {
                // Handle error if needed
                console.error(data.error);
            }
        })
        .catch(error => {
            // Handle network error
            console.error('Error:', error);
        });
    });
});

function handleSectionVisibility() {
    const sections = document.querySelectorAll('.animated-section');

    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top <= windowHeight / 1.2 && rect.bottom >= 0) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}

// Event listener for scrolling
document.addEventListener('scroll', handleSectionVisibility);

// Initial check for section visibility
handleSectionVisibility();
// Poll functionality (already provided in the previous example)

// Blog functionality
document.addEventListener('DOMContentLoaded', function () {
    // Fetch and display blog posts
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
// Poll functionality
function submitVote() {
    const selectedOption = document.querySelector('input[name="poll-option"]:checked');

    if (selectedOption) {
        const vote = selectedOption.value;
        displayPollResults(vote);
    } else {
        alert("Please select an option before submitting your vote.");
    }
}

function displayPollResults(vote) {
    const resultsContainer = document.getElementById('poll-results');

    // Simulate processing the vote and updating results
    // In a real scenario, you would send the vote to a server for processing

    // For demonstration purposes, display a simple message
    resultsContainer.innerHTML = `<p>Thank you for voting! Your choice: ${vote}</p>`;
}
let votes = {
    option1: 0,
    option2: 0,
    // Add more options as needed
};

document.addEventListener('DOMContentLoaded', function () {
    displayPollResults();
});

function submitVote() {
    const selectedOption = document.querySelector('input[name="poll-option"]:checked');

    if (selectedOption) {
        const vote = selectedOption.value;
        votes[vote]++;
        displayPollResults();
    } else {
        alert("Please select an option before submitting your vote.");
    }
}

function displayPollResults() {
    const resultsContainer = document.getElementById('poll-results');
    const totalVotes = votes.option1 + votes.option2; // Calculate total votes

    // Display results
    resultsContainer.innerHTML = `<p>Total Votes: ${totalVotes}</p>`;
    resultsContainer.innerHTML += `<p>Option 1: ${votes.option1} votes</p>`;
    resultsContainer.innerHTML += `<p>Option 2: ${votes.option2} votes</p>`;
    // Add more options as needed
}