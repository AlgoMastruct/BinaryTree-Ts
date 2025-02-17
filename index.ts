import Tree from "./Tree";

const t = new Tree();

console.log("preorder iteration:");
t.preorder();
console.log("\ninorder iteration:");
t.inorder();
console.log("\npostorder iteration:");
t.postorder();
console.log("\nnon recursive inorder iteration:");
t.nonRecursiveInorder();
console.log("\nnon recursive preorder iteration:");
t.nonRecursivePreorder();
console.log("\nlevel order iteration:");
t.levelOrder();
