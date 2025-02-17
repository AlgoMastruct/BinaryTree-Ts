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

  public get isEmpty(): boolean {
    return this.root === null;
  }

  public inorder(): void {
    this._inorder(this.root!);
  }

  private _inorder(p: TreeNode): void {
    if (p !== null) {
      this._inorder(p.left!);
      console.log(p.data + " "); // visit
      this._inorder(p.right!);
    }
  }

  private static visit(p: TreeNode): void {
    console.log(p.data + " ");
  }

  public preorder(): void {
    this._preorder(this.root!);
  }

  private _preorder(p: TreeNode): void {
    if (p !== null) {
      console.log(p.data + " "); // visit
      this._preorder(p.left!);
      this._preorder(p.right!);
    }
  }
  public postorder(): void {
    this._postorder(this.root!);
  }

  private _postorder(p: TreeNode): void {
    if (p !== null) {
      this._postorder(p.left!);
      this._postorder(p.right!);
      console.log(p.data + " "); // visit
    }
  }

  public nonRecursiveInorder(): void {
    let s: TreeNode[] = [];
    let p: TreeNode = this.root!;
    while (true) {
      while (p !== null) {
        s.push(p);
        p = p.left!;
      }
      if (!s.length) return;
      p = s.pop()!;
      console.log(p.data + " ");
      p = p.right!;
    }
  }

  public nonRecursivePreorder(): void {
    let stack: TreeNode[] = [];
    let current: TreeNode | null = this.root;

    while (current || stack.length) {
      while (current) {
        console.log(current.data + " ");
        stack.push(current);
        current = current.left;
      }
      current = stack.pop()!;
      current = current.right;
    }
  }

  public levelOrder(): void {
    let queue: TreeNode[] = [];
    let current: TreeNode | null = this.root;

    while (current) {
      console.log(current.data + " ");
      if (current.left) {
        queue.unshift(current.left);
      }
      if (current.right) {
        queue.unshift(current.right);
      }
      if (!queue.length) return;
      current = queue.shift()!;
    }
  }
}
