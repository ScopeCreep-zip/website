// GitHub repository count fetcher
async function fetchGitHubStats() {
    const users = ['usrbinkat', 'radicalkjax'];
    let totalRepos = 0;
    
    try {
        // Use Promise.all to fetch both users' data in parallel
        const userPromises = users.map(async (username) => {
            try {
                // Fetch user's owned repositories
                const userResponse = await fetch(`https://api.github.com/users/${username}`);
                if (!userResponse.ok) throw new Error(`Failed to fetch user ${username}`);
                const userData = await userResponse.json();
                let userRepoCount = userData.public_repos || 0;
                
                // Fetch all repos the user has contributed to using search API
                // This is more efficient than checking each org's repos individually
                const searchResponse = await fetch(`https://api.github.com/search/repositories?q=user:${username}+fork:true&per_page=100`);
                if (searchResponse.ok) {
                    const searchData = await searchResponse.json();
                    userRepoCount += searchData.total_count || 0;
                }
                
                return userRepoCount;
            } catch (error) {
                console.error(`Error fetching data for ${username}:`, error);
                return 0;
            }
        });
        
        const repoCounts = await Promise.all(userPromises);
        totalRepos = repoCounts.reduce((sum, count) => sum + count, 0);
        
        // Update the stat element
        const githubStatElement = document.querySelector('.github-repos');
        if (githubStatElement) {
            // Clear the spinner and restore the number
            githubStatElement.innerHTML = '0';
            githubStatElement.setAttribute('data-target', totalRepos);
            
            // Trigger the animation
            const target = totalRepos;
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16); // 60fps
            let current = 0;
            
            const updateNumber = () => {
                current += increment;
                if (current < target) {
                    githubStatElement.textContent = Math.floor(current);
                    requestAnimationFrame(updateNumber);
                } else {
                    githubStatElement.textContent = Math.floor(target);
                }
            };
            
            // Start animation when element is in viewport
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        updateNumber();
                        observer.unobserve(entry.target);
                    }
                });
            });
            
            observer.observe(githubStatElement);
        }
    } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        // Fallback to a default value if API fails
        const githubStatElement = document.querySelector('.github-repos');
        if (githubStatElement) {
            // Clear the spinner and show fallback value
            githubStatElement.innerHTML = '0';
            githubStatElement.setAttribute('data-target', '150'); // Fallback value
        }
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    fetchGitHubStats();
});