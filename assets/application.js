document.addEventListener("DOMContentLoaded", () => {
    const siteToggleButtons = document.querySelectorAll('button[data-toggle]');
    siteToggleButtons.forEach(button => {
        const target = button.dataset.toggle;

        button.addEventListener('click', () => {
            const targetEl =
                target === 'next' ? button.nextElementSibling :
                target === 'prev' ? button.prevElementSibling :
                document.querySelector(target);

            console.log('targetEl', targetEl);

            if (!targetEl) { return; }

            targetEl.classList.toggle('is-active');
            targetEl.classList.contains('is-active') ? button.classList.add('is-active') : button.classList.remove('is-active');
        })
    })
});



