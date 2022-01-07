// if var name is empty then by default see Hello User
var name = '';

var fullName = name || 'Hello User';
console.log(fullName);

var isOk = true;

isOk && console.log('Everything is OK');