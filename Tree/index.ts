import TreeNode from "./TreeNode";

export default class Tree {
  private root: TreeNode | null;

  constructor() {
    this.root = new TreeNode(9);
    this.root.left = new TreeNode(5);
    this.root.right = new TreeNode(8);
    this.root.left.left = new TreeNode(3);
    this.root.left.right = new TreeNode(1);
    this.root.right.right = new TreeNode(6);
  }

  public isEmpty(): boolean {
    return this.root === null;
  }

  public inorder(): void {
    this._inorder(this.root);
  }

  private _inorder(p: TreeNode | null): void {
    if (p) {
      this._inorder(p.left);
      console.log(p.data);
      this._inorder(p.right);
    }
  }

  public preorder(): void {
    this._preorder(this.root);
  }

  private _preorder(p: TreeNode | null): void {
    if (p) {
      console.log(p.data);
      this._preorder(p.left);
      this._preorder(p.right);
    }
  }

  public postorder(): void {
    this._postorder(this.root);
  }

  private _postorder(p: TreeNode | null): void {
    if (p) {
      this._postorder(p.left);
      this._postorder(p.right);
      console.log(p.data);
    }
  }

  public nonRecursiveInorder(): void {
    let stack: TreeNode[] = [];
    let current: TreeNode | null = this.root;

    while (current || stack.length) {
      while (current) {
        stack.push(current);
        current = current.left;
      }

      current = stack.pop()!;
      console.log(current.data);
      current = current.right;
    }
  }

  public nonRecursivePreorder(): void {
    let stack: TreeNode[] = [];
    let current: TreeNode | null = this.root;

    while (stack.length || current) {
      if (current) {
        console.log(current.data);
        stack.push(current);
        current = current.left;
      } else {
        current = stack.pop()!;
        current = current.right;
      }
    }
  }

  public levelOrder(): void {
    let queue: TreeNode[] = [];
    let current: TreeNode | null = this.root;

    while (current) {
      console.log(current.data);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);

      current = queue.shift()!;
    }
  }
}
