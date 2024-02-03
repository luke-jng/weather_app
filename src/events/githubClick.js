const githubButtonClick = () => {
    const gitLinkButton = document.getElementById('footer_github_link_button');

    gitLinkButton.addEventListener('click', () => {
        window.location.href= 'https://github.com/luke-jng/weather_app';
    })
}

export {githubButtonClick};