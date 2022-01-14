"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser({ name, email, password }) {
    const user = { name, password, email };
    return user;
}
exports.default = createUser;
