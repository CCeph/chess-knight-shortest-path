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

  storePathToNode(node) {
    const pathArray = [];
    let currentNode = node;

    while (currentNode !== null) {
      pathArray.push(currentNode.position);
      currentNode = currentNode.parentNode;
    }
    pathArray.reverse();
    return pathArray;
  },

  createBranch(
    branchRoot,
    moveSet,
    moveIndex,
    currentShortestPath,
    targetPosition
  ) {
    // Base case 1
    const branchRootDepth = this.depth(branchRoot);
    const moveName = `move${moveIndex}`;
    let shortestPath = {
      numberOfMoves: currentShortestPath.numberOfMoves,
      path: currentShortestPath.path,
    };
    if (branchRootDepth >= shortestPath.numberOfMoves || branchRootDepth > 6) {
      // eslint-disable-next-line no-param-reassign
      branchRoot[moveName] = "Branch too long";
      return shortestPath;
    }

    // Base case 2
    const newPosition = moveSet;
    if (
      newPosition.x > 7 ||
      newPosition.y > 7 ||
      newPosition.x < 0 ||
      newPosition.y < 0
    ) {
      // eslint-disable-next-line no-param-reassign
      branchRoot[moveName] = "Off of board";
      return shortestPath;
    }

    // eslint-disable-next-line no-param-reassign
    const newChild = this.createKnightNode(newPosition, branchRoot);
    // eslint-disable-next-line no-param-reassign
    branchRoot[moveName] = newChild;

    // Base case 3
    if (
      newPosition.x === targetPosition.x &&
      newPosition.y === targetPosition.y
    ) {
      shortestPath.numberOfMoves = branchRootDepth;
      shortestPath.path = this.storePathToNode(newChild);
      return shortestPath;
    }

    newChild.possibleMoves.forEach((move, childMoveIndex) => {
      // eslint-disable-next-line no-param-reassign
      shortestPath = this.createBranch(
        newChild,
        move,
        childMoveIndex,
        shortestPath,
        targetPosition
      );
    });
    return shortestPath;
  },

  findShortestPath(currentBoard, targetPosition) {
    let currentShortestPath = { numberOfMoves: 7, path: [] };

    currentBoard.root.possibleMoves.forEach((move, moveIndex) => {
      currentShortestPath = this.createBranch(
        currentBoard.root,
        move,
        moveIndex,
        currentShortestPath,
        targetPosition
      );
    });

    return currentShortestPath;
  },

  knightMoves(startPosition, endPosition) {
    const currentBoard = this.createGameBoardTree(startPosition);
    const shortestPath = this.findShortestPath(currentBoard, endPosition);
    return shortestPath;
  },
};

// Chess board goes from 0,0 to 7,7
console.log(gameBoard.knightMoves({ x: 4, y: 4 }, { x: 4, y: 5 }));
