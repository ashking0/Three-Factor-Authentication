import {createHash} from 'crypto';

export default class User {
    constructor() {
    }

    addUsernameAndPassword(username, password, allUsers) {
        const exist = allUsers.map(function callbackFn(element) {
            if(element.username === username) {
                return false;
            }
        });
        
        if(exist.includes(false)) {
            return false;
        }

        this.username = username;
        this.password = this.encrypt(password);
        return true;
    }

    addPattern(pattern) {
        this.pattern = this.encrypt(pattern);
    }

    addGrid(grid) {
        this.grid = this.encrypt(grid);
    }

    comparePassword(password) {
        return this.password === this.encrypt(password);
    }

    comparePattern(pattern) {
        return this.pattern === this.encrypt(pattern);
    }

    compareGrid(grid) {
        return this.grid === this.encrypt(grid);
    }

    encrypt(text) {
        return createHash('sha256').update(text).digest('hex');
    }
}