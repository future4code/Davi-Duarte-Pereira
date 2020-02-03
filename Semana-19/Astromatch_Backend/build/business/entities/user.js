"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name, email, password, id, birthday, age, photo) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.id = id;
        this.birthday = birthday;
        this.age = age;
        this.photo = photo;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getPassword() {
        return this.password;
    }
    getId() {
        return this.id;
    }
    getbirthday() {
        return this.birthday;
    }
    getAge() {
        return this.age;
    }
    getPhoto() {
        return this.photo;
    }
}
exports.User = User;
