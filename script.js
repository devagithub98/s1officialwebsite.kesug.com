// script.js
function showContent(option) {
    const contentDiv = document.getElementById('content');
    // Use fetch or AJAX to load content from separate HTML files
    fetch(option + '.html')
        .then(response => response.text())
        .then(data => {
            contentDiv.innerHTML = data;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}