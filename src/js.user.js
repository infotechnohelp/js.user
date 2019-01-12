const User = function (jsonString) {
    this.data = null;
    this.userRoles = {user: 1, admin: 2};

    if (new Helper().isJson(jsonString)) {
        var parsed = JSON.parse(jsonString);
        if (typeof parsed === 'object') {
            this.data = parsed;
        }
    }
}

User.prototype.isIdentified = function () {
    return this.data !== null;
}

User.prototype.isUser = function () {
    if (!this.isIdentified()) {
        return null;
    }

    return this.data.user_role_id === this.userRoles.user;
}

User.prototype.isNotUser = function () {
    if (!this.isIdentified()) {
        return null;
    }

    return this.data.user_role_id !== this.userRoles.user;
}

User.prototype.isAdmin = function () {
    if (!this.isIdentified()) {
        return null;
    }

    return this.data.user_role_id === this.userRoles.admin;
}