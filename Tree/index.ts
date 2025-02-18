import TreeNode from "./TreeNode";

export default class Tree {
  private root: TreeNode | null;

  constructor(root?: TreeNode) {
    if (root) {
      this.root = this.copy(root);
    } else {
      this.root = new TreeNode(9);
      this.root.left = new TreeNode(5);
      this.root.right = new TreeNode(8);
      this.root.left.left = new TreeNode(3);
      this.root.left.right = new TreeNode(1);
      this.root.right.right = new TreeNode(6);
    }
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

  public incrementAllNodes(): void {
    this._incrementAllNodes(this.root);
  }

  private _incrementAllNodes(p: TreeNode | null): void {
    if (p) {
      p.data++;
      this._incrementAllNodes(p.left);
      this._incrementAllNodes(p.right);
    }
  }

  public numberOfNodes(): number {
    return this._numberOfNodes(this.root);
  }

  private _numberOfNodes(p: TreeNode | null): number {
    if (p === null) return 0;
    return 1 + this._numberOfNodes(p.left) + this._numberOfNodes(p.right);
  }

  public height(): number {
    return this._height(this.root);
  }

  private _height(p: TreeNode | null): number {
    if (p === null) return -1;
    let m = this._height(p.left);
    let n = this._height(p.right);
    if (m > n) return 1 + m;
    return 1 + n;
  }

  private copy(p: TreeNode | null): TreeNode | null {
    if (p) {
      let temp: TreeNode = new TreeNode();
      temp.data = p.data;
      temp.left = this.copy(p.left);
      temp.right = this.copy(p.right);
      return temp;
    }
    return null;
  }

  public equals(other: Tree): boolean {
    return Tree._equals(this.root, other.root);
  }

  private static _equals(
    first: TreeNode | null,
    second: TreeNode | null
  ): boolean {
    if (!first && !second) return true;
    if (
      first &&
      second &&
      first.data === second.data &&
      this._equals(first.left, second.left) &&
      this._equals(first.right, second.right)
    ) {
      return true;
    }
    return false;
  }

  public isFull(): boolean {
    return this._isFull(this.root);
  }

  private _isFull(p: TreeNode | null): boolean {
    if (!p) return true;
    if (this._height(p.left) !== this._height(p.right)) return false;
    return this._isFull(p.left) && this._isFull(p.right);
  }

  public nonRecursiveIsFull(): boolean {
    if (!this.root) return true;
    let n: number = this.numberOfNodes();
    let h: number = this.height();
    if (n === 2 ** (h + 1) - 1) return true;
    return false;
  }

  public isStrict(): boolean {
    return this._isStrict(this.root);
  }

  private _isStrict(p: TreeNode | null): boolean {
    if (!p) return true;
    if (!p.left && p.right) return false;
    if (p.left && !p.right) return false;
    return this._isStrict(p.left) && this._isStrict(p.right);
  }

  public isBalanced(): boolean {
    return this._isBalanced(this.root);
  }

  private _isBalanced(p: TreeNode | null): boolean {
    if (!p) return true;
    return (
      Math.abs(this._height(p.left) - this._height(p.right)) <= 1 &&
      this._isBalanced(p.left) &&
      this._isBalanced(p.right)
    );
  }

  public isComplete() {
    return this._isComplete(this.root);
  }

  private _isComplete(p: TreeNode | null): boolean {
    let leftHeight: number, rightHeight: number;
    let leftIsFull: boolean,
      rightIsFull: boolean,
      leftIsComplete: boolean,
      rightIsComplete: boolean;

    if (!p) return true;

    leftHeight = this._height(p.left);
    rightHeight = this._height(p.right);
    leftIsFull = this._isFull(p.left);
    rightIsFull = this._isFull(p.right);
    leftIsComplete = this._isComplete(p.left);
    rightIsComplete = this._isComplete(p.right);

    if (leftIsFull && rightIsComplete && leftHeight === rightHeight)
      return true;
    if (leftIsComplete && rightIsFull && leftHeight === rightHeight + 1)
      return true;
    return false;
  }
}
