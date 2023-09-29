# Binary Search Tree

A binary search tree (BST) is a type of binary tree. A BST has the following property:

For each node, all values in its left subtree are less than the value in the node, and all values in its right subtree are greater than the value in the node.

With a binary search tree, operations like searching, adding, and removing can be done in O(logn) time on average, where n is the number of nodes in the tree, using something called binary search.

This process has an average time complexity of O(logn). In the worst case scenario, let's say with a tree that had no right children and was just a straight line (basically a linked list), the time complexity would be O(n). 

## Example

#### Range Sum of BST

Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].

```js
var rangeSumBST = function(root, low, high) {
    if (!root) {
        return 0;
    }
    
    let ans = 0;
    if (low <= root.val && root.val <= high) {
        ans += root.val;
    }
    if (low < root.val) {
        ans += rangeSumBST(root.left, low, high);
    }
    if (root.val < high) {
        ans += rangeSumBST(root.right, low, high);
    }
    
    return ans;
};
```

or 

```js
var rangeSumBST = function(root, low, high) {
    let stack = [root]; 
    let ans = 0;
    while (stack.length) {
        let node = stack.pop();
        if (low <= node.val && node.val <= high) {
            ans += node.val;
        }
        if (node.left && low < node.val) {
            stack.push(node.left);
        }
        if (node.right && node.val < high) {
            stack.push(node.right);
        }
    }

    return ans;
};
```

Although the time complexity is still O(n) for the case when all nodes in the tree are between low and high, on average this algorithm will perform better than simply searching all nodes. For example, if you had a full tree with a million nodes, and the root's value was greater than high, then you can immediately save 500,000 visits based on the logic that all nodes in the right subtree are greater than the root's value which is already outside the range.

The space complexity is O(n) for the stack / recursion call stack.


#### Minimum Absolute Difference in BST

Given the root of a BST, return the minimum absolute difference between the values of any two different nodes in the tree.

```js
var getMinimumDifference = function(root) {
    let dfs = node => {
        if (!node) {
            return;
        }
        
        dfs(node.left);
        values.push(node.val);
        dfs(node.right);
    }
    
    let values = [];
    dfs(root);
    let ans = Infinity;
    for (let i = 1; i < values.length; i++) {
        ans = Math.min(ans, values[i] - values[i - 1]);
    }
    
    return ans;
};
```

#### Validate Binary Search Tree

Given the root of a binary tree, determine if it is a valid BST.

```js
var isValidBST = function(root) {
    let dfs = (node, small, large) => {
        if (!node) {
            return true;
        }
        
        if (small >= node.val || node.val >= large) {
            return false;
        }
        
        let left = dfs(node.left, small, node.val);
        let right = dfs(node.right, node.val, large);
        
        // tree is a bst if left and right subtrees are also BSTs
        return left && right;
    }
    
    return dfs(root, -Infinity, Infinity);
};
```

or 

```js
var isValidBST = function(root) {
    let stack = [[root, -Infinity, Infinity]];
    while (stack.length) {
        let [node, small, large] = stack.pop();
        if (small >= node.val || node.val >= large) {
            return false;
        }
        
        if (node.left) {
            stack.push([node.left, small, node.val]);
        }
        if (node.right) {
            stack.push([node.right, node.val, large]);
        }
    }
    
    return true;
};
```

The time and space complexity are both O(n) for the same reasons as all the other examples.