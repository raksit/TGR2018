var users = [
    {
        "id": 1,
        "name": "A",
    },
    {
        "id": 2,
        "name": "B",
    },
    {
        "id": 3,
        "name": "C",
    },
];

exports.getAll = function() {
    return users;
};

exports.getById = function (id) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].id == id) return users[i].name;
    }
};
