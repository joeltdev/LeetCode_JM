function isSameTree(p, q) {
  if (p === null && q === null) {
    return true;
  }
  if (p === null || q === null) {
    return false;
  }
  if (p.val !== q.val) {
    return false;
  }
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

let p = [1, 2];
let q = [1, null, 2];
let isSameTrees = isSameTree(p, q);

isSameTrees();
