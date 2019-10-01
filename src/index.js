module.exports = function check(str, bracketsConfig) {

  let types = new Map();
  let pairs = new Map();
  let group = new Map();
  let stack1 = [];
  let open;
  let index;
  for (let bracket of bracketsConfig) {
    if (bracket[0] == bracket[1]) {
      types.set(bracket[0], "similar");
      continue;
    }
    pairs.set(bracket[1], bracket[0]);
    types.set(bracket[0], "open");
    types.set(bracket[1], "close");
  }



  for (let i = 0; i < str.length; i++) {
   if (types.get(str[i]) == "open") {
    stack1.push(str[i]);
   } else if (types.get(str[i]) == "close") {
    open = pairs.get(str[i]);
    if (stack1[stack1.length-1] != open) return false;
    stack1.pop();
   } else {
    index = stack1.indexOf(str[i]);
    if (index == -1) {
        stack1.push(str[i]);
    } else  {
      if (stack1[stack1.length-1] != str[i]) return false;
      stack1.pop();
   }
  }
}
  if (stack1.length != 0) return false;
  return true;
}




/* module.exports = function check(str, bracketsConfig) {

  let types = new Map();
  let pairs = new Map();
  let group = new Map();
  let stack1 = [];
  let open;
  let index;
  let k = 0;
  let group_id;
  for (let bracket of bracketsConfig) {
    if (bracket[0] == bracket[1]) {
      types.set(bracket[0], "similar");
      group.set(bracket[0], k);
      group.set(bracket[1], k);
      stack1.push([]);
      continue;
    }
    pairs.set(bracket[1], bracket[0]);
    types.set(bracket[0], "open");
    types.set(bracket[1], "close");
    group.set(bracket[0], k);
    group.set(bracket[1], k);
    stack1.push([]);
  }



  for (let i = 0; i < str.length; i++) {
   group_id = group.get(str[i]);
   if (types.get(str[i]) == "open") {
    stack1[group_id].push(str[i]);
   } else if (types.get(str[i]) == "close") {
    open = pairs.get(str[i]);
    index = stack1[group_id].indexOf(open);
    stack1[group_id].pop();
   } else {
    index = stack1[group_id].indexOf(str[i]);
    if (index == -1) {
        stack1[group_id].push(str[i]);
    } else  {
      stack1[group_id].pop();
   }
  }
}
for (let stack of stack1) {
    if (stack.length != 0) return false;
  }
  return true;
}
*/