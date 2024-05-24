import { Basis, Button, Input, Node, Signal, Time, Vector2, Vector3 } from "godot";
import { $wait, export_, onready_, signal_ } from "./jsb/jsb.core";
import { CyclicClass1 } from "./tests/cyclic_import_1";

export default class TestNode extends Button {
    private _v1 = 0

    get foo() { return this._v1 }
    set foo(value: number) { this._v1 = value }

    @onready_("JSButtonChildNode")
    ready_node!: Node;

    @export_(jsb.VariantType.TYPE_STRING)
    hello = "hello";

    @export_(jsb.VariantType.TYPE_INT)
    int_value = 0;

    @signal_()
    test_signal!: Signal; // signal field will automatically instantiated by GodotJS

    constructor() {
        super()
        console.log("test constructor")
    }

    _notification(what: number) {
        console.log("test _notification", what)
    }

    _ready() {
        console.log("test ready", this.hello);
        console.log("ready_node:", this.ready_node);
        this.test_wait_for_signal();

        // test cyclic imported modules
        CyclicClass1.call1();
    }

    private async test_wait_for_signal() {
        console.log("waiting for test signal");
        let res = await $wait(this.test_signal);
        console.log("done, test signal emitted", res);
    }

    _on_pressed() {
        console.log("test on clicked!");

        // this.test_signal.connect(jsb.callable(this, this.on_test_signal), 0);
        // this.test_signal.emit();
        // this.test_signal.disconnect(jsb.callable(this, this.on_test_signal));
        this.test_signal.emit(123);

        // test godot object method with default arguments
        console.log("get_datetime_string_from_system(true)", Time.get_datetime_string_from_system(true));
        console.log("get_datetime_string_from_system(true, true)", Time.get_datetime_string_from_system(true, true));
        console.log("get_datetime_string_from_system(true, false)", Time.get_datetime_string_from_system(true, false));
        
        // test variant static method with default arguments
        const basis = Basis.looking_at(new Vector3(1, 2, 0), Vector3.UP);
        console.log("Basis.looking_at(new Vector3(1, 2, 0), Vector3.UP)", basis.x, basis.y, basis.y);
    }

    private on_test_signal() {
        console.log("on test signal");
    }

    work() {
        console.log("test bark at the moon")
    }

    static unbound_call() {

    }
}
