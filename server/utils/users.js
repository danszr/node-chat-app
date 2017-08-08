[{
  id: '/#12poiajdsd',
  name: 'Andrew',
  room: 'The Office Fans'
}]

class Users {
  constructor () {
    this.users = []
  }
  addUser (id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }
  removeUser(id) {
    var userDelete = this.users.filter((user) => user.id === id);
    this.users = this.users.filter((user) => user.id !== id);
    return userDelete[0];
  }
  getUser (id) {
    var userMatches = this.users.filter((user) => user.id === id);
    return userMatches[0];
  }
  getUserList (room) {
    var users = this.users.filter((user) => user.room === room);
    var namesArray = users.map((user) => user.name);

    return namesArray;
  }
}

module.exports = {Users};
