# Binary Trees - Depth First Search

There are two main types of tree traversals. The first is called depth-first search (DFS). For binary trees specifically, there are 3 ways to perform DFS - preorder, inorder, and postorder (don't worry though, the type you choose rarely matters). The other main type of traversal is called breadth-first search (BFS). Let's start by looking at DFS.

The name of each traversal is describing when the current node's logic is performed.

    Pre -> before children

    In -> in the middle of children

    Post -> after children

In a DFS, we prioritize depth by traversing as far down the tree as possible in one direction (until reaching a leaf node) before considering the other direction. For example, let's say we choose left as our priority direction. We move exclusively with node.left until the left subtree has been fully explored. Then, we explore the right subtree.

Trees are named as such because they resemble real-life trees. You can think of the paths of a binary tree as branches growing from the root. DFS chooses a branch and goes as far down as possible. Once it fully explores the branch, it backtracks until it finds another unexplored branch.

Because we need to backtrack up the tree after reaching the end of a branch, DFS is typically implemented using recursion, although it is also sometimes done iteratively using a stack.

```js
let dfs = node => {
    if (!node) {
        return;
    }

    dfs(node.left);
    dfs(node.right);
    return;
}
```

The good news is that the structure for performing a DFS is very similar across all problems. It goes as follows:

1. Handle the base case(s). Usually, an empty tree (node = null) is a base case.
1. Do some logic for the current node
1. Recursively call on the current node's children
1. Return the answer

## Preorder Traversal

In preorder traversal, logic is done on the current node before moving to the children. Let's say that we wanted to just print the value of each node in the tree to the console. In that case, at any given node, we would print the current node's value, then recursively call the left child, then recursively call the right child.

```js
let preorderDfs = node => {
    if (!node) {
        return;
    }

    console.log(node.val);
    preorderDfs(node.left);
    preorderDfs(node.right);
    return;
}
```

Logic (printing) is done immediately at the start of each function call, preorder handles nodes in the same order that the function calls happen.

## Inorder Traversal

For inorder traversal, we first recursively call the left child, then perform logic (print in this case) on the current node, and then recursively call the right child. This means no logic will be done until we reach a node without a left child since calling on the left child takes priority over performing logic.


```js
let inorderDfs = node => {
    if (!node) {
        return;
    }

    inorderDfs(node.left);
    console.log(node.val);
    inorderDfs(node.right);
    return;
}
```

Notice that for any given node, its value is not printed until all values in the left subtree are printed, and values in its right subtree are not printed until after that.



## Postorder Traversal

In postorder traversal, we recursively call on the children first and then perform logic on the current node. This means no logic will be done until we reach a leaf node since calling on the children takes priority over performing logic. In a postorder traversal, the root is the last node where logic is done.

```js
let postorderDfs = node => {
    if (!node) {
        return;
    }

    postorderDfs(node.left);
    postorderDfs(node.right);
    console.log(node.val);
    return;
}
```

Notice that for any given node, no values in its right subtree are printed until all values in its left subtree are printed, and its own value is not printed until after that.


## Examples

#### Maximum Depth of Binary Tree

Given the root of a binary tree, find the length of the longest path from the root to a leaf.

```js
var maxDepth = function(root) {
    if (!root) {
        return 0;
    }
    
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
    return Math.max(left, right) + 1;
};
```

or implementing DFS iteratively

```js
var maxDepth = function(root) {
    if (!root) {
        return 0;
    }
    
    let stack = [[root, 1]];
    let ans = 0;
    
    while (stack.length) {
        let [node, depth] = stack.pop();
        ans = Math.max(ans, depth);
        
        if (node.left) {
            stack.push([node.left, depth + 1]);
        }
        if (node.right) {
            stack.push([node.right, depth + 1]);
        }
    }
    
    return ans;
};
```

The time and space complexity of tree questions is usually straightforward. The time complexity is almost always O(n), where n is the total number of nodes, because each node is only visited once, and at each node, 
O(1) work is done. If more than O(1) work is done at each node, let's say O(k) work, then the time complexity will be O(n⋅k).

For space complexity, even if you are using recursion, the calls are still placed on the call stack which counts as extra space. The largest the stack will be (for either iterative or recursive) at any time will depend on the tree. For recursion, in the worst case it is O(n) if the tree is just a straight line, so usually, the correct answer to give for space complexity is O(n). If the tree is "complete" (all nodes have 0 or 2 children and each level except the last is full), then the space complexity is O(logn), but this is a best-case scenario.

#### Path Sum

Given the root of a binary tree and an integer targetSum, return true if there exists a path from the root to a leaf such that the sum of the nodes on the path is equal to targetSum, and return false otherwise.


```js
var hasPathSum = function(root, targetSum) {
    let dfs = (node, curr) => {
        if (!node) {
            return false;
        }
        
        // if both children are null, then the node is a leaf
        if (!node.left && !node.right) {
            return (curr + node.val) == targetSum;
        }
        
        curr += node.val;
        let left = dfs(node.left, curr);
        let right = dfs(node.right, curr);
        return left || right;
    }
    
    return dfs(root, 0);
};
```

or iterative approach

```js
var hasPathSum = function(root, targetSum) {
    if (!root) {
        return false;
    }
    
    let stack = [[root, 0]];
    while (stack.length) {
        let [node, curr] = stack.pop();
        // if both children are null, then the node is a leaf
        if (!node.left && !node.right) {
            if (curr + node.val == targetSum) {
                return true;
            }
        }
        
        curr += node.val;
        if (node.left) {
            stack.push([node.left, curr]);
        }
        if (node.right) {
            stack.push([node.right, curr]);
        }
    }
    
    return false;
};
```

Again, the time and space complexity are both O(n), where n is the number of nodes in the tree, as each node is visited at most once and each visit involves constant work. In the worst case scenario for space (straight line), the recursion call stack will grow to the same size as the number of nodes in the tree.

#### Count Good Nodes in Binary Tree

Given the root of a binary tree, find the number of nodes that are good. A node is good if the path between the root and the node has no nodes with a greater value.

```js
var goodNodes = function(root) {
    let dfs = (node, maxSoFar) => {
        if (!node) {
            return 0;
        }
        
        let left = dfs(node.left, Math.max(maxSoFar, node.val));
        let right = dfs(node.right, Math.max(maxSoFar, node.val));
        let ans = left + right;
        if (node.val >= maxSoFar) {
            ans++;
        }
        
        return ans;
    }
    
    return dfs(root, -Infinity);
};
```

or iteratively 

```js
var goodNodes = function(root) {
    if (!root) {
        return 0;
    }
    
    let stack = [[root, -Infinity]];
    let ans = 0;

    while (stack.length) {
        let [node, maxSoFar] = stack.pop();
        if (node.val >= maxSoFar) {
            ans++;
        }
        
        if (node.left) {
            stack.push([node.left, Math.max(maxSoFar, node.val)]);
        }
        if (node.right) {
            stack.push([node.right, Math.max(maxSoFar, node.val)]);
        }
    }

    return ans;
};
```

The time and space complexity are both O(n) for the exact same reasons as the previous examples.

#### Same Tree

Given the roots of two binary trees p and q, check if they are the same tree. Two binary trees are the same tree if they are structurally identical and the nodes have the same values.


```js
var isSameTree = function(p, q) {
    if (p == null && q == null) {
        return true;
    }
    
    if (p == null || q == null) {
        return false;
    }
    
    if (p.val != q.val) {
        return false;
    }
    
    let left = isSameTree(p.left, q.left);
    let right = isSameTree(p.right, q.right);
    return left && right;
};
```

or iteratively

```js
var isSameTree = function(p, q) {
    let stack = [[p, q]];
    
    while (stack.length) {
        let [p, q] = stack.pop();
        
        if (p == null && q == null) {
            continue;
        }

        if (p == null || q == null) {
            return false;
        }

        if (p.val != q.val) {
            return false;
        }
        
        stack.push([p.left, q.left]);
        stack.push([p.right, q.right]);
    }

    return true;
};
```

Again, the time and space complexity are both O(n) for the same reasons as the other examples.


#### Lowest Common Ancestor of a Binary Tree

Given the root of a binary tree and two nodes p and q that are in the tree, return the lowest common ancestor (LCA) of the two nodes. The LCA is the lowest node in the tree that has both p and q as descendants (note: a node is a descendant of itself).


```js
var lowestCommonAncestor = function(root, p, q) {
    if (!root) {
        return null;
    }
    
    // first case
    if (root == p || root == q) {
        return root;
    }
    
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);
    
    // second case
    if (left && right) {
        return root;
    }
    
    // third case
    if (left) {
        return left;
    }
    
    return right;
};
```

This algorithm has the usual time and space complexity of O(n) - each node is visited at most once and constant work is done at each node. The recursion call stack could use up to O(n) space.