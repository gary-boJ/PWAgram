var shareImageButton = document.querySelector('#share-image-button');
var createPostArea = document.querySelector('#create-post');
var closeCreatePostModalButton = document.querySelector('#close-create-post-modal-btn');

function openCreatePostModal() {
    createPostArea.style.display = 'block';
}

function closeCreatePostModal() {
    createPostArea.style.display = 'none';
}

shareImageButton.addEventListener('click', openCreatePostModal);

closeCreatePostModalButton.addEventListener('click', closeCreatePostModal);

function createCard() {
    var cardWrapper = document.createElement('div');
    cardWrapper.className = 'shared-moment-card mdl-card mdl-shaddow--2dp';
    var cardTitle = document.createElement('div');
    cardTitle.className = 'mdl-card__title';
    cardTitle.style.backgroundImage = 'url("/src/images/dangerboat.jpg';
    cardTitle.style.backgroundSize = 'cover';
    cardTitle.style.height = '180px';
    cardWrapper.appendChild(cardTitle);
    var cardTitleTextElement = document.createElement('h2');
    cardTitleTextElement.className = 'mdl-card__title-text';
    cardTitleTextElement.textContent = 'Gonna buy me a boat';
    cardTitleTextElement.style.color = 'white';
    cardTitle.appendChild(cardTitleTextElement);
    var cardSupportingText = document.createElement('div');
    cardSupportingText.className = 'mdl-car__supporting-text';
    cardSupportingText.textContent = 'in deep water';
    cardSupportingText.style.textAlign = 'center';
    cardWrapper.appendChild(cardSupportingText);
    componentHandler.upgradeElement(cardWrapper);
    var sharedMomentsArea = document.getElementById('shared-moments');
    sharedMomentsArea.appendChild(cardWrapper);
}

fetch('https://httpbin.org/get')
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        createCard();
    });