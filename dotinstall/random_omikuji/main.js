'use strict';

{
    const btn = document.getElementById('btn');

    btn.addEventListener('click', () => {
        const n = Math.floor(Math.random() * 3);
        btn.textContent = n;

        switch (n) {
            case 0:
                btn.textContent
        }
    })
}