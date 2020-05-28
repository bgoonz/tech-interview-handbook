(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var o=n(1),r=n(6),a=(n(0),n(171)),i={id:"summing-root-to-leaf-numbers",title:"Summing Root To Leaf Numbers",author:"Raivat Shah",author_title:"Student at NUS Computing",author_url:"https://github.com/raivatshah",author_image_url:"https://github.com/raivatshah.png",tags:["leetcode","trees","problem-solving"]},l={permalink:"/tech-interview-handbook/blog/summing-root-to-leaf-numbers",source:"@site/blog/2020-05-28-summing-root-to-leaf-numbers.md",description:"Sum Root to Leaf Numbers is an interesting problem from LeetCode. The problem is of medium difficulty and is about binary trees. This post is an explained solution to the problem.",date:"2020-05-28T00:00:00.000Z",tags:[{label:"leetcode",permalink:"/tech-interview-handbook/blog/tags/leetcode"},{label:"trees",permalink:"/tech-interview-handbook/blog/tags/trees"},{label:"problem-solving",permalink:"/tech-interview-handbook/blog/tags/problem-solving"}],title:"Summing Root To Leaf Numbers",readingTime:5.57,truncated:!0},s=[{value:"The Problem",id:"the-problem",children:[]},{value:"The Observations and Insights",id:"the-observations-and-insights",children:[]},{value:"The Solution",id:"the-solution",children:[]},{value:"The Algorithmic Complexity",id:"the-algorithmic-complexity",children:[]},{value:"The Conclusion",id:"the-conclusion",children:[]},{value:"Acknowledgements",id:"acknowledgements",children:[]}],c={rightToc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Sum Root to Leaf Numbers is an ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://leetcode.com/problems/sum-root-to-leaf-numbers/"}),"interesting problem from LeetCode"),". The problem is of medium difficulty and is about binary trees. This post is an explained solution to the problem. "),Object(a.b)("p",null,"I assume that you\u2019re familiar with Python and the concept of binary trees. If you\u2019re not, you can read ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.tutorialspoint.com/python_data_structure/python_binary_tree.htm"}),"this article")," to get started."),Object(a.b)("p",null,Object(a.b)("img",Object(o.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/29497717/82636662-b01b4b80-9c35-11ea-9ffa-e84b1e13c599.jpeg",alt:"leetcode1"}))),Object(a.b)("h2",{id:"the-problem"},"The Problem"),Object(a.b)("p",null,"Given a binary tree whose nodes contain values ",Object(a.b)("inlineCode",{parentName:"p"},"0-9"),", we have to find the sum of all numbers formed by root-to-leaf paths. A leaf is a node that doesn\u2019t have any child nodes. ",Object(a.b)("strong",{parentName:"p"},"In a binary tree, a root-to-leaf path is always unique"),". Here below is the expected behavior of the solution required:"),Object(a.b)("p",null,Object(a.b)("img",Object(o.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/29497717/82636816-0be5d480-9c36-11ea-8b2d-78bb36c865ee.jpeg",alt:"leetcode2"}))),Object(a.b)("p",null,"In the tree on the left, the output is ",Object(a.b)("inlineCode",{parentName:"p"},"25"),". ",Object(a.b)("inlineCode",{parentName:"p"},"25")," is the sum of ",Object(a.b)("inlineCode",{parentName:"p"},"12")," and ",Object(a.b)("inlineCode",{parentName:"p"},"13"),", which are the two numbers formed when starting from ",Object(a.b)("inlineCode",{parentName:"p"},"1")," and visiting every leaf. In the tree on the right, the output is ",Object(a.b)("inlineCode",{parentName:"p"},"1026")," as it is the sum of the three numbers ",Object(a.b)("inlineCode",{parentName:"p"},"495"),", ",Object(a.b)("inlineCode",{parentName:"p"},"491")," and ",Object(a.b)("inlineCode",{parentName:"p"},"40"),"."),Object(a.b)("h2",{id:"the-observations-and-insights"},"The Observations and Insights"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"To construct a number, we traverse the tree from the root to the leaf, appending digits where the most significant digit is at the root, and the least significant digit is at the leaf. We visit some leaves before other nodes that are closer to the root. This suggests that a depth-first search will be useful. ")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"The ",Object(a.b)("em",{parentName:"p"},"construction")," of numbers is incremental and similar of sorts: the only difference between ",Object(a.b)("inlineCode",{parentName:"p"},"495")," and ",Object(a.b)("inlineCode",{parentName:"p"},"491")," (from the tree on the right) is the last digit. If we remove the ",Object(a.b)("inlineCode",{parentName:"p"},"5")," and insert a ",Object(a.b)("inlineCode",{parentName:"p"},"1")," in its place, we have the next required number. A number essentially comprises of the leaf's digit appended to all the digits in ancestor nodes. Thus, numbers within the same subtree have common digits. ")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Finally, notice that this problem involves a tree, so a recursive solution is helpful. "))),Object(a.b)("h2",{id:"the-solution"},"The Solution"),Object(a.b)("p",null,"We can do a ",Object(a.b)("inlineCode",{parentName:"p"},"pre-order")," traversal of the tree where we incrementally construct a number and exploit the fact that numbers formed by nodes in the same sub-tree have common digits. When we\u2019re done forming numbers in a sub-tree, we can backtrack and go to another sub-tree."),Object(a.b)("p",null,"Let\u2019s create a ",Object(a.b)("inlineCode",{parentName:"p"},"Solution")," class to encompass our solution."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"class Solution: \n    def sum_numbers(self, root: TreeNode) -> int:\n")),Object(a.b)("p",null,"The method signature given to us in the problem has one argument: root, which is of the type ",Object(a.b)("inlineCode",{parentName:"p"},"TreeNode")," . A ",Object(a.b)("inlineCode",{parentName:"p"},"TreeNode")," class is as follows (from LeetCode):"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"class TreeNode:\n     def __init__(self, val=0, left=None, right=None):\n         self.val = val\n         self.left = left\n         self.right = right\n")),Object(a.b)("p",null,"From observation #2, notice that appending a node's digit to its ancestors can be achieved by ",Object(a.b)("em",{parentName:"p"},"moving")," all the digits of the number formed by ancestors to the right by 1 place and adding the current node's digit. The digits can be ",Object(a.b)("em",{parentName:"p"},"moved")," by multiplying the number formed by ancestors by 10 (since we're in base-10). For example: "),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"495 = 49 x 10 + 5")," "),Object(a.b)("p",null,"Thus, we can keep track of the ",Object(a.b)("em",{parentName:"p"},"current")," digits in an integer. This is important because we won't incur extra storage space for higher input sizes. We can pass around this value in the function parameter itself. Since the method signature given can only have one parameter, let's create a ",Object(a.b)("inlineCode",{parentName:"p"},"sum_root_to_leaf_helper")," method. "),Object(a.b)("p",null,"We can think of the ",Object(a.b)("inlineCode",{parentName:"p"},"sum_root_to_leaf_helper")," method recursively and process each node differently based on whether or not it is a leaf."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"If the node is a leaf, we want to add its digit to our current digits by moving all the other digits to the right. We also want to return this value (since we'll backtrack from here). ")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"If it is not a leaf, we want to add the digit to our current digits by moving all the other digits to the right. We also want to continue constructing the number by traversing down this node's left and right subtrees."))),Object(a.b)("p",null,"If the current node is a ",Object(a.b)("inlineCode",{parentName:"p"},"None"),", we can simply return 0 because it doesn't count. "),Object(a.b)("p",null,"Thus, our ",Object(a.b)("inlineCode",{parentName:"p"},"sum_root_to_leaf_helper")," method will be as follows:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"def sum_root_to_leaf_helper(node, partial_sum=0):\n            if not node:\n                return 0\n            partial_sum = partial_sum * 10 + node.val\n            # Leaf\n            if not node.left and not node.right:\n                return partial_sum\n            # Non Leaf \n            return (sum_root_to_leaf_helper(node.left, partial_sum) + sum_root_to_leaf_helper(node.right, partial_sum))\n")),Object(a.b)("p",null,"We use a default value for the partial sum to be 0. "),Object(a.b)("p",null,"In our main method, we want to include the ",Object(a.b)("inlineCode",{parentName:"p"},"sum_root_to_leaf_helper")," method as a nested method and simply pass on the node parameter. Finally, this is how our solution looks:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"class Solution: \n    def sumNumbers(self, root: TreeNode) -> int:\n        def sum_root_to_leaf_helper(node, partial_sum=0):\n            if not node:\n                return 0\n            partial_sum = partial_sum * 10 + node.val\n            # Leaf\n            if not node.left and not node.right:\n                return partial_sum\n            # Non Leaf \n            return (sum_root_to_leaf_helper(node.left, partial_sum) + sum_root_to_leaf_helper(node.right, partial_sum))\n    \n        return sum_root_to_leaf_helper(root)\n")),Object(a.b)("h2",{id:"the-algorithmic-complexity"},"The Algorithmic Complexity"),Object(a.b)("p",null,"When we come up with a solution, it is important to analyze its algorithmic complexity not only to estimate its performance but also to identify areas for improvement and reflect on our problem-solving skills. We should always ask the question: ",Object(a.b)("em",{parentName:"p"},"can we do better than X?")," Where X is the current complexity of our solution. "),Object(a.b)("p",null,"Time:"),Object(a.b)("p",null,"Our solution is a modification of the depth-first-search pre-order traversal where we visit all nodes exactly once and perform a trivial computation (moving digits by integer multiplication). Thus, our runtime is simply ",Object(a.b)("inlineCode",{parentName:"p"},"O(N)")," where ",Object(a.b)("inlineCode",{parentName:"p"},"N")," represents the number of nodes in the given tree. A solution better than ",Object(a.b)("inlineCode",{parentName:"p"},"O(N)")," doesn't seem possible because to construct a number from digits, we need to know all the digits (and thus visit all nodes)."),Object(a.b)("p",null,"Space:"),Object(a.b)("p",null,"In terms of storage, we incur a high cost in the recursion call stack that builds up as our ",Object(a.b)("inlineCode",{parentName:"p"},"sum_root_to_leaf_helper")," calls itself. These calls ",Object(a.b)("em",{parentName:"p"},"build-up")," as one waits for another to finish."),Object(a.b)("p",null,"The maximum call stack is dependent upon the height of the binary tree (since we start backtracking after we visit a leaf), giving a complexity of ",Object(a.b)("inlineCode",{parentName:"p"},"O(H)")," where ",Object(a.b)("inlineCode",{parentName:"p"},"H")," is the height of the binary tree. In the worst case, the binary tree is skewed in either direction and thus ",Object(a.b)("inlineCode",{parentName:"p"},"H = N"),". Therefore, the worst-case space complexity is ",Object(a.b)("inlineCode",{parentName:"p"},"O(N)"),"."),Object(a.b)("p",null,"You can read ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.freecodecamp.org/news/how-recursion-works-explained-with-flowcharts-and-a-video-de61f40cb7f9/"}),"this article")," to know more about recursion call stacks."),Object(a.b)("p",null,"It is possible to do better than ",Object(a.b)("inlineCode",{parentName:"p"},"O(N)")," by using a Morris Preorder Traversal. The basic idea is to link a node and its predecessor temporarily. You can read more about it ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.sciencedirect.com/science/article/abs/pii/0020019079900681"}),"here"),"."),Object(a.b)("h2",{id:"the-conclusion"},"The Conclusion"),Object(a.b)("p",null,"I hope this post helped! Please do let me know if you have any feedback, comments or suggestions by responding to this post."),Object(a.b)("h2",{id:"acknowledgements"},"Acknowledgements"),Object(a.b)("p",null,"Advay, Kevin, Louie for reviewing this post and Yangshun for the idea of adding it as a blogpost. "))}b.isMDXComponent=!0},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},p=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(n),m=o,h=p["".concat(i,".").concat(m)]||p[m]||u[m]||a;return n?r.a.createElement(h,l({ref:t},c,{components:n})):r.a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);