// eslint-disable-next-line import/extensions
import mergeSort from "./commonUtils.js";

console.log(mergeSort);

const gameBoard = {
  prettyPrint(node, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  },

  createKnightNode(position, parentNode) {
    const possibleMoves = [
      { x: position.x + 1, y: position.y + 2 },
      { x: position.x + 2, y: position.y + 1 },
      { x: position.x + 2, y: position.y - 1 },
      { x: position.x + 1, y: position.y - 2 },
      { x: position.x - 1, y: position.y - 2 },
      { x: position.x - 2, y: position.y - 1 },
      { x: position.x - 2, y: position.y + 1 },
      { x: position.x - 1, y: position.y + 2 },
    ];

    return { position, possibleMoves, parentNode };
  },

  createGameBoardTree(knightPosition) {
    return { root: this.createKnightNode(knightPosition, null) };
  },

  depth(node) {
    let currentNode = node;
    let depth = 0;

    while (currentNode !== null) {
      depth += 1;
      currentNode = node.parentNode;
    }
    return depth;
  }

  createBranch(branchRoot, moveSet, currentShortestPathLength, targetPosition) {
    // Base case 1
    let branchRootDepth = depth(branchRoot);
    if (branchRootDepth > currentShortestPathLength || branchRootDepth > 6) {
      branchRoot[`move${moveSet}`] = "Branch too long"
      return currentShortestPathLength;
    }

    // Base case 2
    let newPosition = branchRoot.possibleMoves[moveSet];
    if (newPosition.x > 8 || newPosition.y > 8) {
      branchRoot[`move${moveSet}`] = "Off of board"
      return currentShortestPathLength;
    }

    branchRoot[`move${moveSet}`] = this.createKnightNode(newPosition);

    // Base case 3
    if (newPosition === targetPosition) {
      return branchRootDepth + 1;
    }

    this.createBranch(branchRoot[`move${moveSet}`], moveSet, currentShortestPathLength);
  }

  findShortestPath(currentBoard, targetPosition) {
    let currentShortestPathLength;

    // Create branch 1
    currentShortestPathLength = this.createBranch(currentBoard.root, 0, currentShortestPathLength, targetPosition);

    // Create branch 2

    // Create branch 3

    // Create branch 4

    // Create branch 5

    // Create branch 6

    // Create branch 7

    // Create branch 8
  },

  knightMoves(startPosition, endPosition) {
    const currentBoard = this.createGameBoardTree(startPosition);
    this.findShortestPath(currentBoard, endPosition);
  },
};
