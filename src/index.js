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

  createBranch(branchRoot, moveSet, currentShortestPathLength) {
    // Base case 1
    
    let newPosition = branchRoot.possibleMoves[moveSet];
  }

  findShortestPath(currentBoard, targetPosition) {
    let currentShortestPathLength;

    // Create branch 1
    currentShortestPathLength = this.createBranch(currentBoard.root, 0, currentShortestPathLength);

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
