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
      currentNode = currentNode.parentNode;
    }
    return depth;
  },

  createBranch(branchRoot, moveSet, currentShortestPathLength, targetPosition) {
    // Base case 1
    const branchRootDepth = this.depth(branchRoot);
    if (branchRootDepth > currentShortestPathLength || branchRootDepth > 6) {
      // eslint-disable-next-line no-param-reassign
      branchRoot[`move${moveSet}`] = "Branch too long";
      return currentShortestPathLength;
    }

    // Base case 2
    const newPosition = moveSet;
    if (newPosition.x > 8 || newPosition.y > 8) {
      // eslint-disable-next-line no-param-reassign
      branchRoot[`move${moveSet}`] = "Off of board";
      return currentShortestPathLength;
    }

    // eslint-disable-next-line no-param-reassign
    branchRoot[`move${moveSet}`] = this.createKnightNode(
      newPosition,
      branchRoot
    );

    // Base case 3
    if (
      newPosition.x === targetPosition.x &&
      newPosition.y === targetPosition.y
    ) {
      return branchRootDepth + 1;
    }

    return this.createBranch(
      branchRoot[`move${moveSet}`],
      moveSet,
      currentShortestPathLength,
      targetPosition
    );
  },

  findShortestPath(currentBoard, targetPosition) {
    let currentShortestPathLength;

    currentBoard.root.possibleMoves.forEach((move) => {
      currentShortestPathLength = this.createBranch(
        currentBoard.root,
        move,
        currentShortestPathLength,
        targetPosition
      );
    });

    // Create branch 1

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

gameBoard.knightMoves({ x: 4, y: 4 }, { x: 5, y: 6 });
