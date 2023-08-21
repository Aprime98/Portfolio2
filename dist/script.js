

const clickableDiv1 = document.getElementById('clickableDiv1');
const clickableDiv2 = document.getElementById('clickableDiv2');

clickableDiv1.addEventListener('click', function() {
    // Define the link URL
    const linkURL = 'https://docs.google.com/presentation/d/1bV2W2bMkUyL-hO65GhfBFVS2wfGwLsCZmQ6S9w_O1rI/edit#slide=id.g259742a81bc_0_135';

    // Navigate to the link
    window.location.href = linkURL;
});

clickableDiv2.addEventListener('click', function() {
    // Define the link URL
    const linkURL = 'https://www.youtube.com/watch?v=f_Rwuk6_g1k';

    // Navigate to the link
    window.location.href = linkURL;
});