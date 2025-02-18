export default class TreeNode {
  data: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(data?: number) {
    this.data = data ?? 0;
    this.left = null;
    this.right = null;
  }
}
