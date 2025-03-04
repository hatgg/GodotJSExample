import { Node2D, PackedScene, ResourceLoader, Vector2, Node, Input } from "godot";
import { kBlockSize, kHeight, kWidth, SnakeDirection } from "./constants";
import { GameState, state } from "./state";
import SnakeBody from "./snake_body";
import Coin from "./coin";

const kSnakeBodyAssetPath = "res://snake/snake_body.tscn";
const kCoinAssetPath = "res://snake/coin.tscn";

export const actions = {
    setDirection(newDirection: SnakeDirection): void {
        state.nextDirection = newDirection;
    },

    setState(newState: GameState): void {
        state.gameState = newState;
    },

    setSpeed(delta: number): void {
        state.speed = Math.floor(Math.min(Math.max(state.speed + delta, 20), 300));
    },

    updateMoveProgress(dt: number): void {
        const step = dt * state.speed;
        state.moveProgress += step;
    },

    resetMoveProgress(): void {
        state.moveProgress -= kBlockSize;
    },

    updateCurrentDirection(): void {
        state.currentDirection = state.nextDirection;
    },

    addBody(body: SnakeBody): void {
        state.bodies.push(body);
        state.score = state.bodies.length;
    },

    setCoin(coin: Coin): void {
        state.coin = coin;
    },

    setControlNode(node: Node2D): void {
        state.controlNode = node;
    },

    resetState(): void {
        state.nextDirection = SnakeDirection.DOWN;
        state.currentDirection = SnakeDirection.DOWN;
        state.moveProgress = 0;
        state.bodies = [];
        state.score = 0;
    },

    initializeGame(): void {
        if (!state.controlNode) return;

        // Clean up existing bodies
        for (const body of state.bodies) {
            body.queue_free();
        }
        state.bodies = [];

        // Initialize snake
        this.addNewSnakeBody(5, 5);
        this.addNewSnakeBody(5, 4);
        this.addNewSnakeBody(5, 3);

        // Initialize coin if not exists
        if (!state.coin) {
            const coin = <Coin>this.instantiateAsset(kCoinAssetPath);
            if (coin) {
                this.setCoin(coin);
            }
        }

        // Set initial positions
        this.setCoinPosition();
        this.setState(GameState.PLAYING);
        this.setSpeed(0);
    },

    instantiateAsset(path: string): Node2D | null {
        if (!state.controlNode) return null;
        
        const scene = <PackedScene>ResourceLoader.load(path, "", ResourceLoader.CacheMode.CACHE_MODE_REUSE);
        if (scene) {
            const node = <Node2D>scene.instantiate(PackedScene.GenEditState.GEN_EDIT_STATE_DISABLED);
            state.controlNode.add_child(node, false, Node.InternalMode.INTERNAL_MODE_DISABLED);
            node.scale = new Vector2(0.25, 0.25);
            return node;
        }
        return null;
    },

    addNewSnakeBody(x: number, y: number): SnakeBody | null {
        const body = <SnakeBody>this.instantiateAsset(kSnakeBodyAssetPath);
        if (body) {
            body.x = x;
            body.y = y;
            body.update_position();
            this.addBody(body);
            return body;
        }
        return null;
    },

    checkCollision(x: number, y: number, startIndex: number = 0): boolean {
        return state.bodies.slice(startIndex).some(body => body.x === x && body.y === y);
    },

    checkWall(x: number, y: number): boolean {
        return x < 0 || x >= kWidth || y < 0 || y >= kHeight;
    },

    moveSnake(deltaX: number, deltaY: number, deltaMode: boolean): boolean {
        if (state.bodies.length === 0) return false;

        const head = state.bodies[0];
        const oldX = head.x;
        const oldY = head.y;

        if (deltaMode) {
            head.x = oldX + deltaX;
            head.y = oldY + deltaY;
        } else {
            head.x = deltaX;
            head.y = deltaY;
        }

        // Check for collisions
        if (this.checkWall(head.x, head.y) || this.checkCollision(head.x, head.y, 1)) {
            this.setState(GameState.ENDED);
            return false;
        }

        head.update_position();

        // Move body segments
        let prevX = oldX;
        let prevY = oldY;

        for (let i = 1; i < state.bodies.length; i++) {
            const body = state.bodies[i];
            const tempX = body.x;
            const tempY = body.y;
            body.x = prevX;
            body.y = prevY;
            body.update_position();
            prevX = tempX;
            prevY = tempY;
        }

        // Check for coin collision
        if (state.coin && head.x === state.coin.x && head.y === state.coin.y) {
            return true;
        }

        return false;
    },

    handleInput(): void {
        switch (state.gameState) {
            case GameState.PLAYING: {
                if (Input.is_action_pressed("right", true) && state.currentDirection !== SnakeDirection.LEFT) {
                    this.setDirection(SnakeDirection.RIGHT);
                } else if (Input.is_action_pressed("left", true) && state.currentDirection !== SnakeDirection.RIGHT) {
                    this.setDirection(SnakeDirection.LEFT);
                } else if (Input.is_action_pressed("up", true) && state.currentDirection !== SnakeDirection.DOWN) {
                    this.setDirection(SnakeDirection.UP);
                } else if (Input.is_action_pressed("down", true) && state.currentDirection !== SnakeDirection.UP) {
                    this.setDirection(SnakeDirection.DOWN);
                } else if (Input.is_action_just_pressed("confirm", true)) {
                    this.setState(GameState.PAUSED);
                } else if (Input.is_action_just_pressed("cheat_speed_up", true)) {
                    this.setSpeed(10);
                } else if (Input.is_action_just_pressed("cheat_speed_down", true)) {
                    this.setSpeed(-10);
                }
                break;
            }
            case GameState.PAUSED: {
                if (Input.is_action_just_pressed("confirm", true)) {
                    this.setState(GameState.PLAYING);
                }
                break;
            }
            case GameState.ENDED: {
                if (Input.is_action_just_pressed("confirm", true)) {
                    this.initializeGame();
                }
                break;
            }
        }
    },

    findNewCoinPosition(): { x: number, y: number } | null {
        let x = Math.floor(Math.random() * kWidth);
        let y = Math.floor(Math.random() * kHeight);
        const startX = x;
        const startY = y;

        while (true) {
            if (!this.checkCollision(x, y)) {
                return { x, y };
            }

            x++;
            if (x >= kWidth) {
                x = 0;
                y++;
                if (y >= kHeight) {
                    y = 0;
                }
            }

            if (x === startX && y === startY) {
                return null; // No space available
            }
        }
    },

    setCoinPosition(): void {
        const newPos = this.findNewCoinPosition();
        if (newPos && state.coin) {
            state.coin.x = newPos.x;
            state.coin.y = newPos.y;
            state.coin.update_position();
        }
    },

    update(dt: number): void {
        if (state.gameState !== GameState.PLAYING) return;

        this.updateMoveProgress(dt);
        
        if (state.moveProgress >= kBlockSize) {
            this.resetMoveProgress();
            this.updateCurrentDirection();
            
            let deltaX = 0;
            let deltaY = 0;
            
            switch (state.currentDirection) {
                case SnakeDirection.RIGHT: deltaX = 1; break;
                case SnakeDirection.LEFT: deltaX = -1; break;
                case SnakeDirection.UP: deltaY = -1; break;
                default: deltaY = 1; break;
            }
            
            const ateCoin = this.moveSnake(deltaX, deltaY, true);
            if (ateCoin) {
                const lastBody = state.bodies[state.bodies.length - 1];
                this.addNewSnakeBody(lastBody.x, lastBody.y);
                this.setCoinPosition();
            }
        }
    }
};