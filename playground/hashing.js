const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
  id: 10
}

var token = jwt.sign(data, 'dd_secret');
console.log(token);

var decoded = jwt.verify(token, 'dd_secret');
console.log('decoded:', decoded);

// var message = 'i am user number 1';\
// var hash = SHA256(message.toString);
//
// console.log(`message: ${message}`,`hash: ${hash}`)
//
// var data = {
//   id: 4
// }
//
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data)+ 'dd_sec_ret').toString()
// }
//
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();
//
//
// var resultHash = SHA256(JSON.stringify(token.data)+'dd_sec_ret').toString()
// if(resultHash === token.hash) {
//     console.log('Data was not changed');
// }else{
//   console.log('ALERT data was changed.  Dont trust')
// }
