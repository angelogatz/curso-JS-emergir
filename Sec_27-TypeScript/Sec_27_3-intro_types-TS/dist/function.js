"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(x, y) {
    return x + y;
}
var angelo = {
    name: "angelo",
    id: 0,
    isAdmin: true,
    level: "coordenator"
};
var isAdmin = function (user) { return !!user.isAdmin; };
console.log(isAdmin(angelo));
var maria = {
    name: "maria",
    id: 1
};
console.log(isAdmin(maria));
exports.default = 2;
