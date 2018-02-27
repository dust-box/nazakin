module.exports = () => {
    const stage = document.querySelector('.loading');

    if (stage) {
        stage.classList.add('loaded');
    }
};