// 修正後
function parseName(str) {
  var name = str.split(/\s+/);

  if (name.length === 3) {
    return {
      firstName: name[0],
      middleName: name[1],
      lastName: name[2]
    };
  }
  if (name.length === 2) {
    return {
      firstName: name[0],
      lastName: name[1]
    };
  }
}

// 修正前
// function parseName(str) {
//   var name = str.split(/\s+/);

//   return {
//     firstName: name[0],
//     middleName: name[1],
//     lastName: name[2]
//   };
// }

var foo = 'bar';
// var foo = {
//   'foo': 'bar'
// };
// var foo = ['foo', 'bar'];
