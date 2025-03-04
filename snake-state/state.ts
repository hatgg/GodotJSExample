import { Node2D, Vector2 } from "godot";
import { SnakeDirection } from "./constants";
import SnakeBody from "./snake_body";
import Coin from "./coin";

export enum GameState {
    PLAYING,
    PAUSED,
    ENDED,
}

export interface GameStateData {
    // Game settings
    speed: number;
    nextDirection: SnakeDirection;
    currentDirection: SnakeDirection;
    moveProgress: number;
    
    // Game objects
    bodies: Array<SnakeBody>;
    coin: Coin | null;
    controlNode: Node2D | null;
    
    // UI and game state
    gameState: GameState;
    score: number;
}

// Initial state
export const initialState: GameStateData = {
    speed: 100,
    nextDirection: SnakeDirection.RIGHT,
    currentDirection: SnakeDirection.RIGHT,
    moveProgress: 0,
    bodies: [],
    coin: null,
    controlNode: null,
    gameState: GameState.PLAYING,
    score: 0
};

// Global state instance
export let state: GameStateData = { ...initialState };

// Function to serialize state to JSON
export function serializeState(): string {
    const serializableState = {
        speed: state.speed,
        nextDirection: state.nextDirection,
        currentDirection: state.currentDirection,
        moveProgress: state.moveProgress,
        gameState: state.gameState,
        score: state.score,
        bodies: state.bodies.map(body => ({ x: body.x, y: body.y })),
        coin: state.coin ? { x: state.coin.x, y: state.coin.y } : null
    };
    return JSON.stringify(serializableState, null, 2);
}

// Function to deserialize state from JSON
export function deserializeState(serializedState: string): void {
    const data = JSON.parse(serializedState);
    state.speed = data.speed;
    state.nextDirection = data.nextDirection;
    state.currentDirection = data.currentDirection;
    state.moveProgress = data.moveProgress;
    state.gameState = data.gameState;
    state.score = data.score;
    // Note: bodies and coin need to be handled separately since they're game objects
}