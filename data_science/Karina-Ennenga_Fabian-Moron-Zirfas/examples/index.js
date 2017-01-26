
const animals = [
    ['elefant', 'mice', 'cat', 'dog', 'unicorn', 'elefant', 'unicorn', 'cat', 'unicorn'],
    ['elefant', 'horse', 'cat', 'fish', 'mice', 'fish'],
    ['pony', 'sloth', 'frog', 'fish', 'pony']
];
function map (arr) {
  let result = [];
  arr.forEach(function(element, index, array) {
    result.push({animal: element, count: 1});
  });
  return result;
}
function reduce (arr) {
  let result = [];
  let obj = {};
  for(let i = 0; i < arr.length; i++) {
    if(obj.hasOwnProperty(arr[i].animal) !== true) {
      obj[arr[i].animal] = arr[i].count;
    }else{
      obj[arr[i].animal]++;
    }
  }
  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      result.push({animal: key, count: obj[key]});
    }
  }
  return result;
}
function main() {
  let mapped = [];
  animals.forEach(function (e) {
    mapped.push(map(e));
  });
  let reduced = [];
  mapped.forEach(function(e) {
    reduced.push(reduce(e));
  });
  let all = [];
  reduced.forEach(function(ele) {
    ele.forEach(function(e) {
      all.push(e);
    });
  });
//  console.log(all);
  let result = [];
  result.push(reduce(all));
  console.log(result);
}
main();
