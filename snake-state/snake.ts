import { Engine, Input, Label, Node, NodePath, Node2D } from "godot";
import { actions } from "./actions";
import { state, serializeState, GameState } from "./state";
import { export_ } from "godot.annotations";
import { Variant } from "godot";

export default class Snake extends Node {
    // The value of exported field will be restored by godot on loading instance
    @export_(Variant.Type.TYPE_FLOAT)
    private _speed: number = 100;

    private _score_label!: Label;
    private _state_label!: Label;
    private _speed_label!: Label;

    _ready() {
        if (Engine.is_editor_hint()) {
            console.log("snake ready in editor mode?");
            return;
        }

        console.log("snake ready speed:", this._speed);
        console.assert(typeof this._speed === "number");

        // Initialize UI references
        this._score_label = <Label>this.get_node(new NodePath("UI/VBoxContainer/ScoreLabel"));
        this._state_label = <Label>this.get_node(new NodePath("UI/VBoxContainer/StateLabel"));
        this._speed_label = <Label>this.get_node(new NodePath("UI/VBoxContainer/SpeedLabel"));
        
        // Set up control node for game objects - properly cast to Node2D
        const controlNode = <Node2D>this.get_node(new NodePath("Control"));
        actions.setControlNode(controlNode);
        
        // Start game
        actions.initializeGame();
        this.update_ui();
    }

    private update_ui() {
        this._score_label.text = `Score ${state.score}`;
        this._state_label.text = `State ${GameState[state.gameState]}`;
        this._speed_label.text = `Speed ${state.speed}`;
    }

    _process(dt: number) {
        // Handle state serialization on key press
        if (Input.is_action_just_pressed("save", true)) {
            console.log(serializeState());
        }

        // Handle game input
        actions.handleInput();
        
        // Update game state
        actions.update(dt);
        
        // Update UI
        this.update_ui();
    }
}