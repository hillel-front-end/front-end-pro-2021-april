/*

*/

//CRUD

const actions = {
    create() {
        console.log('create');
    },

    update() {
        console.log('update');
    },

    delete() {
        console.log('delete');
    },

    read() {
        console.log('read');
    },

    greeting() {
        console.log('greeting...');
    },

    valera() {
        console.log('valera...');
    }
}; 



// const buttons = document.querySelectorAll('[data-action]');
// console.log(buttons, 'buttons');

// for(let button of buttons) {
//     // console.log(button.dataset.action);
//     const action = button.dataset.action;

//     // if (action) {
//         action && button.addEventListener('click', actions[action]);
//     // }
// }

// console.log('end bind events');
// --------------x


const buttons_group = document.querySelector('.button_group');

buttons_group.addEventListener('click', (event) => {
    //Event delegation
    const target = event.target;
    const action = target.dataset.action;

    //Behaviour
    if (action &&  actions[action]) {
        actions[action]();
    }
});


setTimeout(() => {
    const buttons_group = document.querySelector('.button_group');
    const button = document.createElement('button');

    button.dataset.action = 'valera';
    button.innerText = 'valera';    

    buttons_group.append(button);
    console.log('timeout');
}, 5000);