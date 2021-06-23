/*
user = {
    id: uniq,
    login: string,
    password: string, 
}


*/

// function UserSecond() {

// }

// // UserSecond.prototype.checkUserLogin = function(){}

// UserSecond.checkUserLogin = function() {

// }

class User {
    // _id;
    #id;
    login;
    password;
    role;
    position;
    
    constructor(login, password, role, position) {
        this.#id = Date.now();
        this.login = login;
        this.password = password;
        this.role = User.roles[role];
        this.position = position;

    }

    static roles = {
        admin: 'BEAUTIFUL_ADMIN',
        user: 'BEAUTIFUL_USER',
    };
    
    static validationId() {
        return true;
    }

    static findUserByLogin(login) {
        return false;
    }

    static makeUser(login, password, role, position) {
        const user = User.findUserByLogin(login);
    
        if (user) {
            console.log('user already exist');
            return user;
        }
        
        return new User(
            login,
            password,
            role,
            position
        );
    }

    // _toDo() {}

    #toDo() {
        console.log('hello');
        // this._id = '123213';
        console.log(this.#id, 'id');
    }

    publicToDo() {
        console.log('call public toDo');
        console.log(this.#id, '');
        this.#toDo();
    }

    get id() {
        return this.#id;
    }

    set id(value) {
        if (User.validationId(value)) {
            this.#id = value;
        }
    }
}
const user = User.makeUser(
    'Valera',
    'qweqwe123',
    'admin',
    'front-end developer'
);

console.log(user.id);

user.id = 'aaaa';

console.log(user, 'user');




// const user = new User(
//     'Valera',
//     'qweqwe123',
//     'admin',
//     'front-end developer'
// );


// user.toDo();




// console.log(user.toDo(), 'user');
// console.log(user.#toDo(), 'user');

user.publicToDo();

// console.log(user.id, 'user.id');

user.id = 'aaaa';

console.log(user, 'user');


// console.log(user.#id, 'user.#id');
// user._id = 'ha ha lo lo lo';
// console.dir(User, 'User');