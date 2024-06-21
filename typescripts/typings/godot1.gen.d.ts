// AUTO-GENERATED
/// <reference no-default-lib="true"/>
declare module "godot" {
    class IntervalTweener extends Tweener {
    }
    namespace ItemList {
        enum IconMode {
            ICON_MODE_TOP = 0,
            ICON_MODE_LEFT = 1,
        }
        enum SelectMode {
            SELECT_SINGLE = 0,
            SELECT_MULTI = 1,
        }
    }
    class ItemList extends Control {
        add_item(text: string, icon: Texture2D = <any> {} /*compound.type from nil*/, selectable: boolean = true): number /*i64*/
        add_icon_item(icon: Texture2D, selectable: boolean = true): number /*i64*/
        set_item_text(idx: number /*i64*/, text: string): void
        get_item_text(idx: number /*i64*/): string
        set_item_icon(idx: number /*i64*/, icon: Texture2D): void
        get_item_icon(idx: number /*i64*/): Texture2D
        set_item_text_direction(idx: number /*i64*/, direction: Control.TextDirection): void
        get_item_text_direction(idx: number /*i64*/): Control.TextDirection
        set_item_language(idx: number /*i64*/, language: string): void
        get_item_language(idx: number /*i64*/): string
        set_item_icon_transposed(idx: number /*i64*/, transposed: boolean): void
        is_item_icon_transposed(idx: number /*i64*/): boolean
        set_item_icon_region(idx: number /*i64*/, rect: Rect2): void
        get_item_icon_region(idx: number /*i64*/): Rect2
        set_item_icon_modulate(idx: number /*i64*/, modulate: Color): void
        get_item_icon_modulate(idx: number /*i64*/): Color
        set_item_selectable(idx: number /*i64*/, selectable: boolean): void
        is_item_selectable(idx: number /*i64*/): boolean
        set_item_disabled(idx: number /*i64*/, disabled: boolean): void
        is_item_disabled(idx: number /*i64*/): boolean
        set_item_metadata(idx: number /*i64*/, metadata: any): void
        get_item_metadata(idx: number /*i64*/): any
        set_item_custom_bg_color(idx: number /*i64*/, custom_bg_color: Color): void
        get_item_custom_bg_color(idx: number /*i64*/): Color
        set_item_custom_fg_color(idx: number /*i64*/, custom_fg_color: Color): void
        get_item_custom_fg_color(idx: number /*i64*/): Color
        get_item_rect(idx: number /*i64*/, expand: boolean = true): Rect2
        set_item_tooltip_enabled(idx: number /*i64*/, enable: boolean): void
        is_item_tooltip_enabled(idx: number /*i64*/): boolean
        set_item_tooltip(idx: number /*i64*/, tooltip: string): void
        get_item_tooltip(idx: number /*i64*/): string
        select(idx: number /*i64*/, single: boolean = true): void
        deselect(idx: number /*i64*/): void
        deselect_all(): void
        is_selected(idx: number /*i64*/): boolean
        get_selected_items(): PackedInt32Array
        move_item(from_idx: number /*i64*/, to_idx: number /*i64*/): void
        set_item_count(count: number /*i64*/): void
        get_item_count(): number /*i64*/
        remove_item(idx: number /*i64*/): void
        clear(): void
        sort_items_by_text(): void
        set_fixed_column_width(width: number /*i64*/): void
        get_fixed_column_width(): number /*i64*/
        set_same_column_width(enable: boolean): void
        is_same_column_width(): boolean
        set_max_text_lines(lines: number /*i64*/): void
        get_max_text_lines(): number /*i64*/
        set_max_columns(amount: number /*i64*/): void
        get_max_columns(): number /*i64*/
        set_select_mode(mode: ItemList.SelectMode): void
        get_select_mode(): ItemList.SelectMode
        set_icon_mode(mode: ItemList.IconMode): void
        get_icon_mode(): ItemList.IconMode
        set_fixed_icon_size(size: Vector2i): void
        get_fixed_icon_size(): Vector2i
        set_icon_scale(scale: number /*f64*/): void
        get_icon_scale(): number /*f64*/
        set_allow_rmb_select(allow: boolean): void
        get_allow_rmb_select(): boolean
        set_allow_reselect(allow: boolean): void
        get_allow_reselect(): boolean
        set_allow_search(allow: boolean): void
        get_allow_search(): boolean
        set_auto_height(enable: boolean): void
        has_auto_height(): boolean
        is_anything_selected(): boolean
        get_item_at_position(position: Vector2, exact: boolean = false): number /*i64*/
        ensure_current_is_visible(): void
        get_v_scroll_bar(): VScrollBar
        set_text_overrun_behavior(overrun_behavior: TextServer.OverrunBehavior): void
        get_text_overrun_behavior(): TextServer.OverrunBehavior
        force_update_list_size(): void
        select_mode: number /*i64*/
        allow_reselect: boolean
        allow_rmb_select: boolean
        allow_search: boolean
        max_text_lines: number /*i64*/
        auto_height: boolean
        text_overrun_behavior: number /*i64*/
        item_count: any /*Items,item_*/
        max_columns: number /*i64*/
        same_column_width: boolean
        fixed_column_width: number /*i64*/
        icon_mode: number /*i64*/
        icon_scale: number /*f64*/
        fixed_icon_size: Vector2i
        readonly item_selected: Signal
        readonly empty_clicked: Signal
        readonly item_clicked: Signal
        readonly multi_selected: Signal
        readonly item_activated: Signal
    }
    class JNISingleton extends Object {
    }
    class JSON extends Resource {
        static stringify(data: any, indent: string = '', sort_keys: boolean = true, full_precision: boolean = false): string
        static parse_string(json_string: string): any
        parse(json_text: string, keep_text: boolean = false): GodotError
        get_data(): any
        set_data(data: any): void
        get_parsed_text(): string
        get_error_line(): number /*i64*/
        get_error_message(): string
        data: any
    }
    namespace JSONRPC {
        enum ErrorCode {
            PARSE_ERROR = -32700,
            INVALID_REQUEST = -32600,
            METHOD_NOT_FOUND = -32601,
            INVALID_PARAMS = -32602,
            INTERNAL_ERROR = -32603,
        }
    }
    class JSONRPC extends Object {
        set_scope(scope: string, target: Object): void
        process_action(action: any, recurse: boolean = false): any
        process_string(action: string): string
        make_request(method: string, params: any, id: any): Dictionary
        make_response(result: any, id: any): Dictionary
        make_notification(method: string, params: any): Dictionary
        make_response_error(code: number /*i64*/, message: string, id: any = <any> {} /*compound.type from nil*/): Dictionary
    }
    class JavaClass extends RefCounted {
    }
    class JavaScriptObject extends RefCounted {
    }
    class Joint2D extends Node2D {
        set_node_a(node: NodePath): void
        get_node_a(): NodePath
        set_node_b(node: NodePath): void
        get_node_b(): NodePath
        set_bias(bias: number /*f64*/): void
        get_bias(): number /*f64*/
        set_exclude_nodes_from_collision(enable: boolean): void
        get_exclude_nodes_from_collision(): boolean
        get_rid(): RID
        node_a: NodePath
        node_b: NodePath
        bias: number /*f64*/
        disable_collision: boolean
    }
    class Joint3D extends Node3D {
        set_node_a(node: NodePath): void
        get_node_a(): NodePath
        set_node_b(node: NodePath): void
        get_node_b(): NodePath
        set_solver_priority(priority: number /*i64*/): void
        get_solver_priority(): number /*i64*/
        set_exclude_nodes_from_collision(enable: boolean): void
        get_exclude_nodes_from_collision(): boolean
        get_rid(): RID
        node_a: NodePath
        node_b: NodePath
        solver_priority: number /*i64*/
        exclude_nodes_from_collision: boolean
    }
    class Joint3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    class KinematicCollision2D extends RefCounted {
        get_position(): Vector2
        get_normal(): Vector2
        get_travel(): Vector2
        get_remainder(): Vector2
        get_angle(up_direction: Vector2 = new Vector2(0, -1)): number /*f64*/
        get_depth(): number /*f64*/
        get_local_shape(): Object
        get_collider(): Object
        get_collider_id(): number /*i64*/
        get_collider_rid(): RID
        get_collider_shape(): Object
        get_collider_shape_index(): number /*i64*/
        get_collider_velocity(): Vector2
    }
    class KinematicCollision3D extends RefCounted {
        get_travel(): Vector3
        get_remainder(): Vector3
        get_depth(): number /*f64*/
        get_collision_count(): number /*i64*/
        get_position(collision_index: number /*i64*/ = 0): Vector3
        get_normal(collision_index: number /*i64*/ = 0): Vector3
        get_angle(collision_index: number /*i64*/ = 0, up_direction: Vector3 = Vector3.ZERO): number /*f64*/
        get_local_shape(collision_index: number /*i64*/ = 0): Object
        get_collider(collision_index: number /*i64*/ = 0): Object
        get_collider_id(collision_index: number /*i64*/ = 0): number /*i64*/
        get_collider_rid(collision_index: number /*i64*/ = 0): RID
        get_collider_shape(collision_index: number /*i64*/ = 0): Object
        get_collider_shape_index(collision_index: number /*i64*/ = 0): number /*i64*/
        get_collider_velocity(collision_index: number /*i64*/ = 0): Vector3
    }
    class Label extends Control {
        set_horizontal_alignment(alignment: HorizontalAlignment): void
        get_horizontal_alignment(): HorizontalAlignment
        set_vertical_alignment(alignment: VerticalAlignment): void
        get_vertical_alignment(): VerticalAlignment
        set_text(text: string): void
        get_text(): string
        set_label_settings(settings: LabelSettings): void
        get_label_settings(): LabelSettings
        set_text_direction(direction: Control.TextDirection): void
        get_text_direction(): Control.TextDirection
        set_language(language: string): void
        get_language(): string
        set_autowrap_mode(autowrap_mode: TextServer.AutowrapMode): void
        get_autowrap_mode(): TextServer.AutowrapMode
        set_justification_flags(justification_flags: TextServer.JustificationFlag): void
        get_justification_flags(): TextServer.JustificationFlag
        set_clip_text(enable: boolean): void
        is_clipping_text(): boolean
        set_tab_stops(tab_stops: PackedFloat32Array): void
        get_tab_stops(): PackedFloat32Array
        set_text_overrun_behavior(overrun_behavior: TextServer.OverrunBehavior): void
        get_text_overrun_behavior(): TextServer.OverrunBehavior
        set_uppercase(enable: boolean): void
        is_uppercase(): boolean
        get_line_height(line: number /*i64*/ = -1): number /*i64*/
        get_line_count(): number /*i64*/
        get_visible_line_count(): number /*i64*/
        get_total_character_count(): number /*i64*/
        set_visible_characters(amount: number /*i64*/): void
        get_visible_characters(): number /*i64*/
        get_visible_characters_behavior(): TextServer.VisibleCharactersBehavior
        set_visible_characters_behavior(behavior: TextServer.VisibleCharactersBehavior): void
        set_visible_ratio(ratio: number /*f64*/): void
        get_visible_ratio(): number /*f64*/
        set_lines_skipped(lines_skipped: number /*i64*/): void
        get_lines_skipped(): number /*i64*/
        set_max_lines_visible(lines_visible: number /*i64*/): void
        get_max_lines_visible(): number /*i64*/
        set_structured_text_bidi_override(parser: TextServer.StructuredTextParser): void
        get_structured_text_bidi_override(): TextServer.StructuredTextParser
        set_structured_text_bidi_override_options(args: Array): void
        get_structured_text_bidi_override_options(): Array
        text: string
        label_settings: LabelSettings
        horizontal_alignment: number /*i64*/
        vertical_alignment: number /*i64*/
        autowrap_mode: number /*i64*/
        justification_flags: number /*i64*/
        clip_text: boolean
        text_overrun_behavior: number /*i64*/
        uppercase: boolean
        tab_stops: PackedFloat32Array
        lines_skipped: number /*i64*/
        max_lines_visible: number /*i64*/
        visible_characters: number /*i64*/
        visible_characters_behavior: number /*i64*/
        visible_ratio: number /*f64*/
        text_direction: number /*i64*/
        language: string
        structured_text_bidi_override: number /*i64*/
        structured_text_bidi_override_options: Array
    }
    namespace Label3D {
        enum DrawFlags {
            FLAG_SHADED = 0,
            FLAG_DOUBLE_SIDED = 1,
            FLAG_DISABLE_DEPTH_TEST = 2,
            FLAG_FIXED_SIZE = 3,
            FLAG_MAX = 4,
        }
        enum AlphaCutMode {
            ALPHA_CUT_DISABLED = 0,
            ALPHA_CUT_DISCARD = 1,
            ALPHA_CUT_OPAQUE_PREPASS = 2,
            ALPHA_CUT_HASH = 3,
        }
    }
    class Label3D extends GeometryInstance3D {
        set_horizontal_alignment(alignment: HorizontalAlignment): void
        get_horizontal_alignment(): HorizontalAlignment
        set_vertical_alignment(alignment: VerticalAlignment): void
        get_vertical_alignment(): VerticalAlignment
        set_modulate(modulate: Color): void
        get_modulate(): Color
        set_outline_modulate(modulate: Color): void
        get_outline_modulate(): Color
        set_text(text: string): void
        get_text(): string
        set_text_direction(direction: TextServer.Direction): void
        get_text_direction(): TextServer.Direction
        set_language(language: string): void
        get_language(): string
        set_structured_text_bidi_override(parser: TextServer.StructuredTextParser): void
        get_structured_text_bidi_override(): TextServer.StructuredTextParser
        set_structured_text_bidi_override_options(args: Array): void
        get_structured_text_bidi_override_options(): Array
        set_uppercase(enable: boolean): void
        is_uppercase(): boolean
        set_render_priority(priority: number /*i64*/): void
        get_render_priority(): number /*i64*/
        set_outline_render_priority(priority: number /*i64*/): void
        get_outline_render_priority(): number /*i64*/
        set_font(font: Font): void
        get_font(): Font
        set_font_size(size: number /*i64*/): void
        get_font_size(): number /*i64*/
        set_outline_size(outline_size: number /*i64*/): void
        get_outline_size(): number /*i64*/
        set_line_spacing(line_spacing: number /*f64*/): void
        get_line_spacing(): number /*f64*/
        set_autowrap_mode(autowrap_mode: TextServer.AutowrapMode): void
        get_autowrap_mode(): TextServer.AutowrapMode
        set_justification_flags(justification_flags: TextServer.JustificationFlag): void
        get_justification_flags(): TextServer.JustificationFlag
        set_width(width: number /*f64*/): void
        get_width(): number /*f64*/
        set_pixel_size(pixel_size: number /*f64*/): void
        get_pixel_size(): number /*f64*/
        set_offset(offset: Vector2): void
        get_offset(): Vector2
        set_draw_flag(flag: Label3D.DrawFlags, enabled: boolean): void
        get_draw_flag(flag: Label3D.DrawFlags): boolean
        set_billboard_mode(mode: BaseMaterial3D.BillboardMode): void
        get_billboard_mode(): BaseMaterial3D.BillboardMode
        set_alpha_cut_mode(mode: Label3D.AlphaCutMode): void
        get_alpha_cut_mode(): Label3D.AlphaCutMode
        set_alpha_scissor_threshold(threshold: number /*f64*/): void
        get_alpha_scissor_threshold(): number /*f64*/
        set_alpha_hash_scale(threshold: number /*f64*/): void
        get_alpha_hash_scale(): number /*f64*/
        set_alpha_antialiasing(alpha_aa: BaseMaterial3D.AlphaAntiAliasing): void
        get_alpha_antialiasing(): BaseMaterial3D.AlphaAntiAliasing
        set_alpha_antialiasing_edge(edge: number /*f64*/): void
        get_alpha_antialiasing_edge(): number /*f64*/
        set_texture_filter(mode: BaseMaterial3D.TextureFilter): void
        get_texture_filter(): BaseMaterial3D.TextureFilter
        generate_triangle_mesh(): TriangleMesh
        pixel_size: number /*f64*/
        offset: Vector2
        billboard: number /*i64*/
        alpha_cut: number /*i64*/
        alpha_scissor_threshold: number /*f64*/
        alpha_hash_scale: number /*f64*/
        alpha_antialiasing_mode: number /*i64*/
        alpha_antialiasing_edge: number /*f64*/
        texture_filter: number /*i64*/
        render_priority: number /*i64*/
        outline_render_priority: number /*i64*/
        modulate: Color
        outline_modulate: Color
        text: string
        font: Font
        font_size: number /*i64*/
        outline_size: number /*i64*/
        horizontal_alignment: number /*i64*/
        vertical_alignment: number /*i64*/
        uppercase: boolean
        line_spacing: number /*f64*/
        autowrap_mode: number /*i64*/
        justification_flags: number /*i64*/
        width: number /*f64*/
        text_direction: number /*i64*/
        language: string
        structured_text_bidi_override: number /*i64*/
        structured_text_bidi_override_options: Array
    }
    class Label3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    class LabelSettings extends Resource {
        set_line_spacing(spacing: number /*f64*/): void
        get_line_spacing(): number /*f64*/
        set_font(font: Font): void
        get_font(): Font
        set_font_size(size: number /*i64*/): void
        get_font_size(): number /*i64*/
        set_font_color(color: Color): void
        get_font_color(): Color
        set_outline_size(size: number /*i64*/): void
        get_outline_size(): number /*i64*/
        set_outline_color(color: Color): void
        get_outline_color(): Color
        set_shadow_size(size: number /*i64*/): void
        get_shadow_size(): number /*i64*/
        set_shadow_color(color: Color): void
        get_shadow_color(): Color
        set_shadow_offset(offset: Vector2): void
        get_shadow_offset(): Vector2
        line_spacing: number /*f64*/
        font: Font
        font_size: number /*i64*/
        font_color: Color
        outline_size: number /*i64*/
        outline_color: Color
        shadow_size: number /*i64*/
        shadow_color: Color
        shadow_offset: Vector2
    }
    namespace Light2D {
        enum ShadowFilter {
            SHADOW_FILTER_NONE = 0,
            SHADOW_FILTER_PCF5 = 1,
            SHADOW_FILTER_PCF13 = 2,
        }
        enum BlendMode {
            BLEND_MODE_ADD = 0,
            BLEND_MODE_SUB = 1,
            BLEND_MODE_MIX = 2,
        }
    }
    class Light2D extends Node2D {
        set_enabled(enabled: boolean): void
        is_enabled(): boolean
        set_editor_only(editor_only: boolean): void
        is_editor_only(): boolean
        set_color(color: Color): void
        get_color(): Color
        set_energy(energy: number /*f64*/): void
        get_energy(): number /*f64*/
        set_z_range_min(z: number /*i64*/): void
        get_z_range_min(): number /*i64*/
        set_z_range_max(z: number /*i64*/): void
        get_z_range_max(): number /*i64*/
        set_layer_range_min(layer: number /*i64*/): void
        get_layer_range_min(): number /*i64*/
        set_layer_range_max(layer: number /*i64*/): void
        get_layer_range_max(): number /*i64*/
        set_item_cull_mask(item_cull_mask: number /*i64*/): void
        get_item_cull_mask(): number /*i64*/
        set_item_shadow_cull_mask(item_shadow_cull_mask: number /*i64*/): void
        get_item_shadow_cull_mask(): number /*i64*/
        set_shadow_enabled(enabled: boolean): void
        is_shadow_enabled(): boolean
        set_shadow_smooth(smooth: number /*f64*/): void
        get_shadow_smooth(): number /*f64*/
        set_shadow_filter(filter: Light2D.ShadowFilter): void
        get_shadow_filter(): Light2D.ShadowFilter
        set_shadow_color(shadow_color: Color): void
        get_shadow_color(): Color
        set_blend_mode(mode: Light2D.BlendMode): void
        get_blend_mode(): Light2D.BlendMode
        set_height(height: number /*f64*/): void
        get_height(): number /*f64*/
        enabled: boolean
        editor_only: boolean
        color: Color
        energy: number /*f64*/
        blend_mode: number /*i64*/
        range_z_min: number /*i64*/
        range_z_max: number /*i64*/
        range_layer_min: number /*i64*/
        range_layer_max: number /*i64*/
        range_item_cull_mask: number /*i64*/
        shadow_enabled: boolean
        shadow_color: Color
        shadow_filter: number /*i64*/
        shadow_filter_smooth: number /*f64*/
        shadow_item_cull_mask: number /*i64*/
    }
    namespace Light3D {
        enum Param {
            PARAM_ENERGY = 0,
            PARAM_INDIRECT_ENERGY = 1,
            PARAM_VOLUMETRIC_FOG_ENERGY = 2,
            PARAM_SPECULAR = 3,
            PARAM_RANGE = 4,
            PARAM_SIZE = 5,
            PARAM_ATTENUATION = 6,
            PARAM_SPOT_ANGLE = 7,
            PARAM_SPOT_ATTENUATION = 8,
            PARAM_SHADOW_MAX_DISTANCE = 9,
            PARAM_SHADOW_SPLIT_1_OFFSET = 10,
            PARAM_SHADOW_SPLIT_2_OFFSET = 11,
            PARAM_SHADOW_SPLIT_3_OFFSET = 12,
            PARAM_SHADOW_FADE_START = 13,
            PARAM_SHADOW_NORMAL_BIAS = 14,
            PARAM_SHADOW_BIAS = 15,
            PARAM_SHADOW_PANCAKE_SIZE = 16,
            PARAM_SHADOW_OPACITY = 17,
            PARAM_SHADOW_BLUR = 18,
            PARAM_TRANSMITTANCE_BIAS = 19,
            PARAM_INTENSITY = 20,
            PARAM_MAX = 21,
        }
        enum BakeMode {
            BAKE_DISABLED = 0,
            BAKE_STATIC = 1,
            BAKE_DYNAMIC = 2,
        }
    }
    class Light3D extends VisualInstance3D {
        set_editor_only(editor_only: boolean): void
        is_editor_only(): boolean
        set_param(param: Light3D.Param, value: number /*f64*/): void
        get_param(param: Light3D.Param): number /*f64*/
        set_shadow(enabled: boolean): void
        has_shadow(): boolean
        set_negative(enabled: boolean): void
        is_negative(): boolean
        set_cull_mask(cull_mask: number /*i64*/): void
        get_cull_mask(): number /*i64*/
        set_enable_distance_fade(enable: boolean): void
        is_distance_fade_enabled(): boolean
        set_distance_fade_begin(distance: number /*f64*/): void
        get_distance_fade_begin(): number /*f64*/
        set_distance_fade_shadow(distance: number /*f64*/): void
        get_distance_fade_shadow(): number /*f64*/
        set_distance_fade_length(distance: number /*f64*/): void
        get_distance_fade_length(): number /*f64*/
        set_color(color: Color): void
        get_color(): Color
        set_shadow_reverse_cull_face(enable: boolean): void
        get_shadow_reverse_cull_face(): boolean
        set_bake_mode(bake_mode: Light3D.BakeMode): void
        get_bake_mode(): Light3D.BakeMode
        set_projector(projector: Texture2D): void
        get_projector(): Texture2D
        set_temperature(temperature: number /*f64*/): void
        get_temperature(): number /*f64*/
        get_correlated_color(): Color
        light_temperature: number /*f64*/
        light_color: Color
        light_projector: Texture2D
        light_negative: boolean
        light_bake_mode: number /*i64*/
        light_cull_mask: number /*i64*/
        shadow_enabled: boolean
        shadow_reverse_cull_face: boolean
        distance_fade_enabled: boolean
        distance_fade_begin: number /*f64*/
        distance_fade_shadow: number /*f64*/
        distance_fade_length: number /*f64*/
        editor_only: boolean
    }
    class Light3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    class LightOccluder2D extends Node2D {
        set_occluder_polygon(polygon: OccluderPolygon2D): void
        get_occluder_polygon(): OccluderPolygon2D
        set_occluder_light_mask(mask: number /*i64*/): void
        get_occluder_light_mask(): number /*i64*/
        set_as_sdf_collision(enable: boolean): void
        is_set_as_sdf_collision(): boolean
        occluder: OccluderPolygon2D
        sdf_collision: boolean
        occluder_light_mask: number /*i64*/
    }
    class LightOccluder2DEditor extends AbstractPolygon2DEditor {
    }
    class LightOccluder2DEditorPlugin extends AbstractPolygon2DEditorPlugin {
    }
    namespace LightmapGI {
        enum BakeQuality {
            BAKE_QUALITY_LOW = 0,
            BAKE_QUALITY_MEDIUM = 1,
            BAKE_QUALITY_HIGH = 2,
            BAKE_QUALITY_ULTRA = 3,
        }
        enum GenerateProbes {
            GENERATE_PROBES_DISABLED = 0,
            GENERATE_PROBES_SUBDIV_4 = 1,
            GENERATE_PROBES_SUBDIV_8 = 2,
            GENERATE_PROBES_SUBDIV_16 = 3,
            GENERATE_PROBES_SUBDIV_32 = 4,
        }
        enum BakeError {
            BAKE_ERROR_OK = 0,
            BAKE_ERROR_NO_SCENE_ROOT = 1,
            BAKE_ERROR_FOREIGN_DATA = 2,
            BAKE_ERROR_NO_LIGHTMAPPER = 3,
            BAKE_ERROR_NO_SAVE_PATH = 4,
            BAKE_ERROR_NO_MESHES = 5,
            BAKE_ERROR_MESHES_INVALID = 6,
            BAKE_ERROR_CANT_CREATE_IMAGE = 7,
            BAKE_ERROR_USER_ABORTED = 8,
            BAKE_ERROR_TEXTURE_SIZE_TOO_SMALL = 9,
        }
        enum EnvironmentMode {
            ENVIRONMENT_MODE_DISABLED = 0,
            ENVIRONMENT_MODE_SCENE = 1,
            ENVIRONMENT_MODE_CUSTOM_SKY = 2,
            ENVIRONMENT_MODE_CUSTOM_COLOR = 3,
        }
    }
    class LightmapGI extends VisualInstance3D {
        set_light_data(data: LightmapGIData): void
        get_light_data(): LightmapGIData
        set_bake_quality(bake_quality: LightmapGI.BakeQuality): void
        get_bake_quality(): LightmapGI.BakeQuality
        set_bounces(bounces: number /*i64*/): void
        get_bounces(): number /*i64*/
        set_bounce_indirect_energy(bounce_indirect_energy: number /*f64*/): void
        get_bounce_indirect_energy(): number /*f64*/
        set_generate_probes(subdivision: LightmapGI.GenerateProbes): void
        get_generate_probes(): LightmapGI.GenerateProbes
        set_bias(bias: number /*f64*/): void
        get_bias(): number /*f64*/
        set_environment_mode(mode: LightmapGI.EnvironmentMode): void
        get_environment_mode(): LightmapGI.EnvironmentMode
        set_environment_custom_sky(sky: Sky): void
        get_environment_custom_sky(): Sky
        set_environment_custom_color(color: Color): void
        get_environment_custom_color(): Color
        set_environment_custom_energy(energy: number /*f64*/): void
        get_environment_custom_energy(): number /*f64*/
        set_max_texture_size(max_texture_size: number /*i64*/): void
        get_max_texture_size(): number /*i64*/
        set_use_denoiser(use_denoiser: boolean): void
        is_using_denoiser(): boolean
        set_denoiser_strength(denoiser_strength: number /*f64*/): void
        get_denoiser_strength(): number /*f64*/
        set_interior(enable: boolean): void
        is_interior(): boolean
        set_directional(directional: boolean): void
        is_directional(): boolean
        set_use_texture_for_bounces(use_texture_for_bounces: boolean): void
        is_using_texture_for_bounces(): boolean
        set_camera_attributes(camera_attributes: CameraAttributes): void
        get_camera_attributes(): CameraAttributes
        quality: number /*i64*/
        bounces: number /*i64*/
        bounce_indirect_energy: number /*f64*/
        directional: boolean
        use_texture_for_bounces: boolean
        interior: boolean
        use_denoiser: boolean
        denoiser_strength: number /*f64*/
        bias: number /*f64*/
        max_texture_size: number /*i64*/
        environment_mode: number /*i64*/
        environment_custom_sky: Sky
        environment_custom_color: Color
        environment_custom_energy: number /*f64*/
        camera_attributes: CameraAttributesPractical | CameraAttributesPhysical
        generate_probes_subdiv: number /*i64*/
        light_data: LightmapGIData
    }
    class LightmapGIData extends Resource {
        _set_user_data(data: Array): void
        _get_user_data(): Array
        set_lightmap_textures(light_textures: Array): void
        get_lightmap_textures(): Array
        set_uses_spherical_harmonics(uses_spherical_harmonics: boolean): void
        is_using_spherical_harmonics(): boolean
        add_user(path: NodePath, uv_scale: Rect2, slice_index: number /*i64*/, sub_instance: number /*i64*/): void
        get_user_count(): number /*i64*/
        get_user_path(user_idx: number /*i64*/): NodePath
        clear_users(): void
        _set_probe_data(data: Dictionary): void
        _get_probe_data(): Dictionary
        set_light_texture(light_texture: TextureLayered): void
        get_light_texture(): TextureLayered
        _set_light_textures_data(data: Array): void
        _get_light_textures_data(): Array
        lightmap_textures: Array
        uses_spherical_harmonics: boolean
        user_data: Array
        probe_data: Dictionary
        light_texture: TextureLayered
        light_textures: Array
    }
    class LightmapGIEditorPlugin extends EditorPlugin {
        _bake(): void
    }
    class LightmapGIGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    class LightmapProbe extends Node3D {
    }
    class LightmapProbeGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    class Lightmapper extends RefCounted {
    }
    class LightmapperRD extends Lightmapper {
    }
    namespace Line2D {
        enum LineJointMode {
            LINE_JOINT_SHARP = 0,
            LINE_JOINT_BEVEL = 1,
            LINE_JOINT_ROUND = 2,
        }
        enum LineCapMode {
            LINE_CAP_NONE = 0,
            LINE_CAP_BOX = 1,
            LINE_CAP_ROUND = 2,
        }
        enum LineTextureMode {
            LINE_TEXTURE_NONE = 0,
            LINE_TEXTURE_TILE = 1,
            LINE_TEXTURE_STRETCH = 2,
        }
    }
    class Line2D extends Node2D {
        set_points(points: PackedVector2Array): void
        get_points(): PackedVector2Array
        set_point_position(index: number /*i64*/, position: Vector2): void
        get_point_position(index: number /*i64*/): Vector2
        get_point_count(): number /*i64*/
        add_point(position: Vector2, index: number /*i64*/ = -1): void
        remove_point(index: number /*i64*/): void
        clear_points(): void
        set_closed(closed: boolean): void
        is_closed(): boolean
        set_width(width: number /*f64*/): void
        get_width(): number /*f64*/
        set_curve(curve: Curve): void
        get_curve(): Curve
        set_default_color(color: Color): void
        get_default_color(): Color
        set_gradient(color: Gradient): void
        get_gradient(): Gradient
        set_texture(texture: Texture2D): void
        get_texture(): Texture2D
        set_texture_mode(mode: Line2D.LineTextureMode): void
        get_texture_mode(): Line2D.LineTextureMode
        set_joint_mode(mode: Line2D.LineJointMode): void
        get_joint_mode(): Line2D.LineJointMode
        set_begin_cap_mode(mode: Line2D.LineCapMode): void
        get_begin_cap_mode(): Line2D.LineCapMode
        set_end_cap_mode(mode: Line2D.LineCapMode): void
        get_end_cap_mode(): Line2D.LineCapMode
        set_sharp_limit(limit: number /*f64*/): void
        get_sharp_limit(): number /*f64*/
        set_round_precision(precision: number /*i64*/): void
        get_round_precision(): number /*i64*/
        set_antialiased(antialiased: boolean): void
        get_antialiased(): boolean
        points: PackedVector2Array
        closed: boolean
        width: number /*f64*/
        width_curve: Curve
        default_color: Color
        gradient: Gradient
        texture: Texture2D
        texture_mode: number /*i64*/
        joint_mode: number /*i64*/
        begin_cap_mode: number /*i64*/
        end_cap_mode: number /*i64*/
        sharp_limit: number /*f64*/
        round_precision: number /*i64*/
        antialiased: boolean
    }
    class Line2DEditor extends AbstractPolygon2DEditor {
    }
    class Line2DEditorPlugin extends AbstractPolygon2DEditorPlugin {
    }
    namespace LineEdit {
        enum MenuItems {
            MENU_CUT = 0,
            MENU_COPY = 1,
            MENU_PASTE = 2,
            MENU_CLEAR = 3,
            MENU_SELECT_ALL = 4,
            MENU_UNDO = 5,
            MENU_REDO = 6,
            MENU_SUBMENU_TEXT_DIR = 7,
            MENU_DIR_INHERITED = 8,
            MENU_DIR_AUTO = 9,
            MENU_DIR_LTR = 10,
            MENU_DIR_RTL = 11,
            MENU_DISPLAY_UCC = 12,
            MENU_SUBMENU_INSERT_UCC = 13,
            MENU_INSERT_LRM = 14,
            MENU_INSERT_RLM = 15,
            MENU_INSERT_LRE = 16,
            MENU_INSERT_RLE = 17,
            MENU_INSERT_LRO = 18,
            MENU_INSERT_RLO = 19,
            MENU_INSERT_PDF = 20,
            MENU_INSERT_ALM = 21,
            MENU_INSERT_LRI = 22,
            MENU_INSERT_RLI = 23,
            MENU_INSERT_FSI = 24,
            MENU_INSERT_PDI = 25,
            MENU_INSERT_ZWJ = 26,
            MENU_INSERT_ZWNJ = 27,
            MENU_INSERT_WJ = 28,
            MENU_INSERT_SHY = 29,
            MENU_MAX = 30,
        }
        enum VirtualKeyboardType {
            KEYBOARD_TYPE_DEFAULT = 0,
            KEYBOARD_TYPE_MULTILINE = 1,
            KEYBOARD_TYPE_NUMBER = 2,
            KEYBOARD_TYPE_NUMBER_DECIMAL = 3,
            KEYBOARD_TYPE_PHONE = 4,
            KEYBOARD_TYPE_EMAIL_ADDRESS = 5,
            KEYBOARD_TYPE_PASSWORD = 6,
            KEYBOARD_TYPE_URL = 7,
        }
    }
    class LineEdit extends Control {
        _text_changed(): void
        set_horizontal_alignment(alignment: HorizontalAlignment): void
        get_horizontal_alignment(): HorizontalAlignment
        clear(): void
        select(from: number /*i64*/ = 0, to: number /*i64*/ = -1): void
        select_all(): void
        deselect(): void
        has_selection(): boolean
        get_selected_text(): string
        get_selection_from_column(): number /*i64*/
        get_selection_to_column(): number /*i64*/
        set_text(text: string): void
        get_text(): string
        get_draw_control_chars(): boolean
        set_draw_control_chars(enable: boolean): void
        set_text_direction(direction: Control.TextDirection): void
        get_text_direction(): Control.TextDirection
        set_language(language: string): void
        get_language(): string
        set_structured_text_bidi_override(parser: TextServer.StructuredTextParser): void
        get_structured_text_bidi_override(): TextServer.StructuredTextParser
        set_structured_text_bidi_override_options(args: Array): void
        get_structured_text_bidi_override_options(): Array
        set_placeholder(text: string): void
        get_placeholder(): string
        set_caret_column(position: number /*i64*/): void
        get_caret_column(): number /*i64*/
        get_scroll_offset(): number /*f64*/
        set_expand_to_text_length_enabled(enabled: boolean): void
        is_expand_to_text_length_enabled(): boolean
        set_caret_blink_enabled(enabled: boolean): void
        is_caret_blink_enabled(): boolean
        set_caret_mid_grapheme_enabled(enabled: boolean): void
        is_caret_mid_grapheme_enabled(): boolean
        set_caret_force_displayed(enabled: boolean): void
        is_caret_force_displayed(): boolean
        set_caret_blink_interval(interval: number /*f64*/): void
        get_caret_blink_interval(): number /*f64*/
        set_max_length(chars: number /*i64*/): void
        get_max_length(): number /*i64*/
        insert_text_at_caret(text: string): void
        delete_char_at_caret(): void
        delete_text(from_column: number /*i64*/, to_column: number /*i64*/): void
        set_editable(enabled: boolean): void
        is_editable(): boolean
        set_secret(enabled: boolean): void
        is_secret(): boolean
        set_secret_character(character: string): void
        get_secret_character(): string
        menu_option(option: number /*i64*/): void
        get_menu(): PopupMenu
        is_menu_visible(): boolean
        set_context_menu_enabled(enable: boolean): void
        is_context_menu_enabled(): boolean
        set_virtual_keyboard_enabled(enable: boolean): void
        is_virtual_keyboard_enabled(): boolean
        set_virtual_keyboard_type(type: LineEdit.VirtualKeyboardType): void
        get_virtual_keyboard_type(): LineEdit.VirtualKeyboardType
        set_clear_button_enabled(enable: boolean): void
        is_clear_button_enabled(): boolean
        set_shortcut_keys_enabled(enable: boolean): void
        is_shortcut_keys_enabled(): boolean
        set_middle_mouse_paste_enabled(enable: boolean): void
        is_middle_mouse_paste_enabled(): boolean
        set_selecting_enabled(enable: boolean): void
        is_selecting_enabled(): boolean
        set_deselect_on_focus_loss_enabled(enable: boolean): void
        is_deselect_on_focus_loss_enabled(): boolean
        set_drag_and_drop_selection_enabled(enable: boolean): void
        is_drag_and_drop_selection_enabled(): boolean
        set_right_icon(icon: Texture2D): void
        get_right_icon(): Texture2D
        set_flat(enabled: boolean): void
        is_flat(): boolean
        set_select_all_on_focus(enabled: boolean): void
        is_select_all_on_focus(): boolean
        text: string
        placeholder_text: string
        alignment: number /*i64*/
        max_length: number /*i64*/
        editable: boolean
        expand_to_text_length: boolean
        context_menu_enabled: boolean
        virtual_keyboard_enabled: boolean
        virtual_keyboard_type: number /*i64*/
        clear_button_enabled: boolean
        shortcut_keys_enabled: boolean
        middle_mouse_paste_enabled: boolean
        selecting_enabled: boolean
        deselect_on_focus_loss_enabled: boolean
        drag_and_drop_selection_enabled: boolean
        right_icon: Texture2D
        flat: boolean
        draw_control_chars: boolean
        select_all_on_focus: boolean
        caret_blink: boolean
        caret_blink_interval: number /*f64*/
        caret_column: number /*i64*/
        caret_force_displayed: boolean
        caret_mid_grapheme: boolean
        secret: boolean
        secret_character: string
        text_direction: number /*i64*/
        language: string
        structured_text_bidi_override: number /*i64*/
        structured_text_bidi_override_options: Array
        readonly text_changed: Signal
        readonly text_change_rejected: Signal
        readonly text_submitted: Signal
    }
    namespace LinkButton {
        enum UnderlineMode {
            UNDERLINE_MODE_ALWAYS = 0,
            UNDERLINE_MODE_ON_HOVER = 1,
            UNDERLINE_MODE_NEVER = 2,
        }
    }
    class LinkButton extends BaseButton {
        set_text(text: string): void
        get_text(): string
        set_text_direction(direction: Control.TextDirection): void
        get_text_direction(): Control.TextDirection
        set_language(language: string): void
        get_language(): string
        set_uri(uri: string): void
        get_uri(): string
        set_underline_mode(underline_mode: LinkButton.UnderlineMode): void
        get_underline_mode(): LinkButton.UnderlineMode
        set_structured_text_bidi_override(parser: TextServer.StructuredTextParser): void
        get_structured_text_bidi_override(): TextServer.StructuredTextParser
        set_structured_text_bidi_override_options(args: Array): void
        get_structured_text_bidi_override_options(): Array
        text: string
        underline: number /*i64*/
        uri: string
        text_direction: number /*i64*/
        language: string
        structured_text_bidi_override: number /*i64*/
        structured_text_bidi_override_options: Array
    }
    class LocalizationEditor extends VBoxContainer {
        update_translations(): void
        readonly localization_changed: Signal
    }
    class MainLoop extends Object {
        static readonly NOTIFICATION_OS_MEMORY_WARNING = 2009
        static readonly NOTIFICATION_TRANSLATION_CHANGED = 2010
        static readonly NOTIFICATION_WM_ABOUT = 2011
        static readonly NOTIFICATION_CRASH = 2012
        static readonly NOTIFICATION_OS_IME_UPDATE = 2013
        static readonly NOTIFICATION_APPLICATION_RESUMED = 2014
        static readonly NOTIFICATION_APPLICATION_PAUSED = 2015
        static readonly NOTIFICATION_APPLICATION_FOCUS_IN = 2016
        static readonly NOTIFICATION_APPLICATION_FOCUS_OUT = 2017
        static readonly NOTIFICATION_TEXT_SERVER_CHANGED = 2018
        /* gdvirtual */ _initialize(): void
        /* gdvirtual */ _physics_process(delta: number /*f64*/): boolean
        /* gdvirtual */ _process(delta: number /*f64*/): boolean
        /* gdvirtual */ _finalize(): void
        readonly on_request_permissions_result: Signal
    }
    class MarginContainer extends Container {
    }
    class Marker2D extends Node2D {
        set_gizmo_extents(extents: number /*f64*/): void
        get_gizmo_extents(): number /*f64*/
        gizmo_extents: number /*f64*/
    }
    class Marker3D extends Node3D {
        set_gizmo_extents(extents: number /*f64*/): void
        get_gizmo_extents(): number /*f64*/
        gizmo_extents: number /*f64*/
    }
    class Marker3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    class Material extends Resource {
        static readonly RENDER_PRIORITY_MAX = 127
        static readonly RENDER_PRIORITY_MIN = -128
        /* gdvirtual */ _get_shader_rid(): RID
        /* gdvirtual */ _get_shader_mode(): Shader.Mode
        /* gdvirtual */ _can_do_next_pass(): boolean
        /* gdvirtual */ _can_use_render_priority(): boolean
        set_next_pass(next_pass: Material): void
        get_next_pass(): Material
        set_render_priority(priority: number /*i64*/): void
        get_render_priority(): number /*i64*/
        inspect_native_shader_code(): void
        create_placeholder(): Resource
        render_priority: number /*i64*/
        next_pass: Material
    }
    class MaterialEditorPlugin extends EditorPlugin {
    }
    class MenuBar extends Control {
        set_switch_on_hover(enable: boolean): void
        is_switch_on_hover(): boolean
        set_disable_shortcuts(disabled: boolean): void
        set_prefer_global_menu(enabled: boolean): void
        is_prefer_global_menu(): boolean
        is_native_menu(): boolean
        get_menu_count(): number /*i64*/
        set_text_direction(direction: Control.TextDirection): void
        get_text_direction(): Control.TextDirection
        set_language(language: string): void
        get_language(): string
        set_flat(enabled: boolean): void
        is_flat(): boolean
        set_start_index(enabled: number /*i64*/): void
        get_start_index(): number /*i64*/
        set_menu_title(menu: number /*i64*/, title: string): void
        get_menu_title(menu: number /*i64*/): string
        set_menu_tooltip(menu: number /*i64*/, tooltip: string): void
        get_menu_tooltip(menu: number /*i64*/): string
        set_menu_disabled(menu: number /*i64*/, disabled: boolean): void
        is_menu_disabled(menu: number /*i64*/): boolean
        set_menu_hidden(menu: number /*i64*/, hidden: boolean): void
        is_menu_hidden(menu: number /*i64*/): boolean
        get_menu_popup(menu: number /*i64*/): PopupMenu
        flat: boolean
        start_index: number /*i64*/
        switch_on_hover: boolean
        prefer_global_menu: boolean
        text_direction: number /*i64*/
        language: string
    }
    class MenuButton extends Button {
        get_popup(): PopupMenu
        show_popup(): void
        set_switch_on_hover(enable: boolean): void
        is_switch_on_hover(): boolean
        set_disable_shortcuts(disabled: boolean): void
        set_item_count(count: number /*i64*/): void
        get_item_count(): number /*i64*/
        switch_on_hover: boolean
        item_count: any /*Items,popup/item_*/
        readonly about_to_popup: Signal
    }
    namespace Mesh {
        enum PrimitiveType {
            PRIMITIVE_POINTS = 0,
            PRIMITIVE_LINES = 1,
            PRIMITIVE_LINE_STRIP = 2,
            PRIMITIVE_TRIANGLES = 3,
            PRIMITIVE_TRIANGLE_STRIP = 4,
        }
        enum ArrayType {
            ARRAY_VERTEX = 0,
            ARRAY_NORMAL = 1,
            ARRAY_TANGENT = 2,
            ARRAY_COLOR = 3,
            ARRAY_TEX_UV = 4,
            ARRAY_TEX_UV2 = 5,
            ARRAY_CUSTOM0 = 6,
            ARRAY_CUSTOM1 = 7,
            ARRAY_CUSTOM2 = 8,
            ARRAY_CUSTOM3 = 9,
            ARRAY_BONES = 10,
            ARRAY_WEIGHTS = 11,
            ARRAY_INDEX = 12,
            ARRAY_MAX = 13,
        }
        enum ArrayCustomFormat {
            ARRAY_CUSTOM_RGBA8_UNORM = 0,
            ARRAY_CUSTOM_RGBA8_SNORM = 1,
            ARRAY_CUSTOM_RG_HALF = 2,
            ARRAY_CUSTOM_RGBA_HALF = 3,
            ARRAY_CUSTOM_R_FLOAT = 4,
            ARRAY_CUSTOM_RG_FLOAT = 5,
            ARRAY_CUSTOM_RGB_FLOAT = 6,
            ARRAY_CUSTOM_RGBA_FLOAT = 7,
            ARRAY_CUSTOM_MAX = 8,
        }
        enum ArrayFormat {
            ARRAY_FORMAT_VERTEX = 1,
            ARRAY_FORMAT_NORMAL = 2,
            ARRAY_FORMAT_TANGENT = 4,
            ARRAY_FORMAT_COLOR = 8,
            ARRAY_FORMAT_TEX_UV = 16,
            ARRAY_FORMAT_TEX_UV2 = 32,
            ARRAY_FORMAT_CUSTOM0 = 64,
            ARRAY_FORMAT_CUSTOM1 = 128,
            ARRAY_FORMAT_CUSTOM2 = 256,
            ARRAY_FORMAT_CUSTOM3 = 512,
            ARRAY_FORMAT_BONES = 1024,
            ARRAY_FORMAT_WEIGHTS = 2048,
            ARRAY_FORMAT_INDEX = 4096,
            ARRAY_FORMAT_BLEND_SHAPE_MASK = 7,
            ARRAY_FORMAT_CUSTOM_BASE = 13,
            ARRAY_FORMAT_CUSTOM_BITS = 3,
            ARRAY_FORMAT_CUSTOM0_SHIFT = 13,
            ARRAY_FORMAT_CUSTOM1_SHIFT = 16,
            ARRAY_FORMAT_CUSTOM2_SHIFT = 19,
            ARRAY_FORMAT_CUSTOM3_SHIFT = 22,
            ARRAY_FORMAT_CUSTOM_MASK = 7,
            ARRAY_COMPRESS_FLAGS_BASE = 25,
            ARRAY_FLAG_USE_2D_VERTICES = 33554432,
            ARRAY_FLAG_USE_DYNAMIC_UPDATE = 67108864,
            ARRAY_FLAG_USE_8_BONE_WEIGHTS = 134217728,
            ARRAY_FLAG_USES_EMPTY_VERTEX_ARRAY = 268435456,
            ARRAY_FLAG_COMPRESS_ATTRIBUTES = 536870912,
        }
        enum BlendShapeMode {
            BLEND_SHAPE_MODE_NORMALIZED = 0,
            BLEND_SHAPE_MODE_RELATIVE = 1,
        }
    }
    class Mesh extends Resource {
        /* gdvirtual */ _get_surface_count(): number /*i64*/
        /* gdvirtual */ _surface_get_array_len(index: number /*i64*/): number /*i64*/
        /* gdvirtual */ _surface_get_array_index_len(index: number /*i64*/): number /*i64*/
        /* gdvirtual */ _surface_get_arrays(index: number /*i64*/): Array
        /* gdvirtual */ _surface_get_blend_shape_arrays(index: number /*i64*/): Array
        /* gdvirtual */ _surface_get_lods(index: number /*i64*/): Dictionary
        /* gdvirtual */ _surface_get_format(index: number /*i64*/): number /*i64*/
        /* gdvirtual */ _surface_get_primitive_type(index: number /*i64*/): number /*i64*/
        /* gdvirtual */ _surface_set_material(index: number /*i64*/, material: Material): void
        /* gdvirtual */ _surface_get_material(index: number /*i64*/): Material
        /* gdvirtual */ _get_blend_shape_count(): number /*i64*/
        /* gdvirtual */ _get_blend_shape_name(index: number /*i64*/): StringName
        /* gdvirtual */ _set_blend_shape_name(index: number /*i64*/, name: StringName): void
        /* gdvirtual */ _get_aabb(): AABB
        set_lightmap_size_hint(size: Vector2i): void
        get_lightmap_size_hint(): Vector2i
        get_aabb(): AABB
        get_faces(): PackedVector3Array
        get_surface_count(): number /*i64*/
        surface_get_arrays(surf_idx: number /*i64*/): Array
        surface_get_blend_shape_arrays(surf_idx: number /*i64*/): Array
        surface_set_material(surf_idx: number /*i64*/, material: Material): void
        surface_get_material(surf_idx: number /*i64*/): Material
        create_placeholder(): Resource
        create_trimesh_shape(): ConcavePolygonShape3D
        create_convex_shape(clean: boolean = true, simplify: boolean = false): ConvexPolygonShape3D
        create_outline(margin: number /*f64*/): Mesh
        generate_triangle_mesh(): TriangleMesh
        lightmap_size_hint: Vector2i
    }
    namespace MeshConvexDecompositionSettings {
        enum Mode {
            CONVEX_DECOMPOSITION_MODE_VOXEL = 0,
            CONVEX_DECOMPOSITION_MODE_TETRAHEDRON = 1,
        }
    }
    class MeshConvexDecompositionSettings extends RefCounted {
        set_max_concavity(max_concavity: number /*f64*/): void
        get_max_concavity(): number /*f64*/
        set_symmetry_planes_clipping_bias(symmetry_planes_clipping_bias: number /*f64*/): void
        get_symmetry_planes_clipping_bias(): number /*f64*/
        set_revolution_axes_clipping_bias(revolution_axes_clipping_bias: number /*f64*/): void
        get_revolution_axes_clipping_bias(): number /*f64*/
        set_min_volume_per_convex_hull(min_volume_per_convex_hull: number /*f64*/): void
        get_min_volume_per_convex_hull(): number /*f64*/
        set_resolution(min_volume_per_convex_hull: number /*i64*/): void
        get_resolution(): number /*i64*/
        set_max_num_vertices_per_convex_hull(max_num_vertices_per_convex_hull: number /*i64*/): void
        get_max_num_vertices_per_convex_hull(): number /*i64*/
        set_plane_downsampling(plane_downsampling: number /*i64*/): void
        get_plane_downsampling(): number /*i64*/
        set_convex_hull_downsampling(convex_hull_downsampling: number /*i64*/): void
        get_convex_hull_downsampling(): number /*i64*/
        set_normalize_mesh(normalize_mesh: boolean): void
        get_normalize_mesh(): boolean
        set_mode(mode: MeshConvexDecompositionSettings.Mode): void
        get_mode(): MeshConvexDecompositionSettings.Mode
        set_convex_hull_approximation(convex_hull_approximation: boolean): void
        get_convex_hull_approximation(): boolean
        set_max_convex_hulls(max_convex_hulls: number /*i64*/): void
        get_max_convex_hulls(): number /*i64*/
        set_project_hull_vertices(project_hull_vertices: boolean): void
        get_project_hull_vertices(): boolean
        max_concavity: number /*f64*/
        symmetry_planes_clipping_bias: number /*f64*/
        revolution_axes_clipping_bias: number /*f64*/
        min_volume_per_convex_hull: number /*f64*/
        resolution: number /*i64*/
        max_num_vertices_per_convex_hull: number /*i64*/
        plane_downsampling: number /*i64*/
        convex_hull_downsampling: number /*i64*/
        normalize_mesh: boolean
        mode: number /*i64*/
        convex_hull_approximation: boolean
        max_convex_hulls: number /*i64*/
        project_hull_vertices: boolean
    }
    class MeshDataTool extends RefCounted {
        clear(): void
        create_from_surface(mesh: ArrayMesh, surface: number /*i64*/): GodotError
        commit_to_surface(mesh: ArrayMesh, compression_flags: number /*i64*/ = 0): GodotError
        get_format(): number /*i64*/
        get_vertex_count(): number /*i64*/
        get_edge_count(): number /*i64*/
        get_face_count(): number /*i64*/
        set_vertex(idx: number /*i64*/, vertex: Vector3): void
        get_vertex(idx: number /*i64*/): Vector3
        set_vertex_normal(idx: number /*i64*/, normal: Vector3): void
        get_vertex_normal(idx: number /*i64*/): Vector3
        set_vertex_tangent(idx: number /*i64*/, tangent: Plane): void
        get_vertex_tangent(idx: number /*i64*/): Plane
        set_vertex_uv(idx: number /*i64*/, uv: Vector2): void
        get_vertex_uv(idx: number /*i64*/): Vector2
        set_vertex_uv2(idx: number /*i64*/, uv2: Vector2): void
        get_vertex_uv2(idx: number /*i64*/): Vector2
        set_vertex_color(idx: number /*i64*/, color: Color): void
        get_vertex_color(idx: number /*i64*/): Color
        set_vertex_bones(idx: number /*i64*/, bones: PackedInt32Array): void
        get_vertex_bones(idx: number /*i64*/): PackedInt32Array
        set_vertex_weights(idx: number /*i64*/, weights: PackedFloat32Array): void
        get_vertex_weights(idx: number /*i64*/): PackedFloat32Array
        set_vertex_meta(idx: number /*i64*/, meta: any): void
        get_vertex_meta(idx: number /*i64*/): any
        get_vertex_edges(idx: number /*i64*/): PackedInt32Array
        get_vertex_faces(idx: number /*i64*/): PackedInt32Array
        get_edge_vertex(idx: number /*i64*/, vertex: number /*i64*/): number /*i64*/
        get_edge_faces(idx: number /*i64*/): PackedInt32Array
        set_edge_meta(idx: number /*i64*/, meta: any): void
        get_edge_meta(idx: number /*i64*/): any
        get_face_vertex(idx: number /*i64*/, vertex: number /*i64*/): number /*i64*/
        get_face_edge(idx: number /*i64*/, edge: number /*i64*/): number /*i64*/
        set_face_meta(idx: number /*i64*/, meta: any): void
        get_face_meta(idx: number /*i64*/): any
        get_face_normal(idx: number /*i64*/): Vector3
        set_material(material: Material): void
        get_material(): Material
    }
    class MeshEditorPlugin extends EditorPlugin {
    }
    class MeshInstance2D extends Node2D {
        set_mesh(mesh: Mesh): void
        get_mesh(): Mesh
        set_texture(texture: Texture2D): void
        get_texture(): Texture2D
        mesh: Mesh
        texture: Texture2D
        readonly texture_changed: Signal
    }
    class MeshInstance3D extends GeometryInstance3D {
        set_mesh(mesh: Mesh): void
        get_mesh(): Mesh
        set_skeleton_path(skeleton_path: NodePath): void
        get_skeleton_path(): NodePath
        set_skin(skin: Skin): void
        get_skin(): Skin
        get_surface_override_material_count(): number /*i64*/
        set_surface_override_material(surface: number /*i64*/, material: Material): void
        get_surface_override_material(surface: number /*i64*/): Material
        get_active_material(surface: number /*i64*/): Material
        create_trimesh_collision(): void
        create_convex_collision(clean: boolean = true, simplify: boolean = false): void
        create_multiple_convex_collisions(settings: MeshConvexDecompositionSettings = <any> {} /*compound.type from nil*/): void
        get_blend_shape_count(): number /*i64*/
        find_blend_shape_by_name(name: StringName): number /*i64*/
        get_blend_shape_value(blend_shape_idx: number /*i64*/): number /*f64*/
        set_blend_shape_value(blend_shape_idx: number /*i64*/, value: number /*f64*/): void
        create_debug_tangents(): void
        mesh: Mesh
        skin: Skin
        skeleton: NodePath
    }
    class MeshInstance3DEditor extends Control {
    }
    class MeshInstance3DEditorPlugin extends EditorPlugin {
    }
    class MeshInstance3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    class MeshLibrary extends Resource {
        create_item(id: number /*i64*/): void
        set_item_name(id: number /*i64*/, name: string): void
        set_item_mesh(id: number /*i64*/, mesh: Mesh): void
        set_item_mesh_transform(id: number /*i64*/, mesh_transform: Transform3D): void
        set_item_navigation_mesh(id: number /*i64*/, navigation_mesh: NavigationMesh): void
        set_item_navigation_mesh_transform(id: number /*i64*/, navigation_mesh: Transform3D): void
        set_item_navigation_layers(id: number /*i64*/, navigation_layers: number /*i64*/): void
        set_item_shapes(id: number /*i64*/, shapes: Array): void
        set_item_preview(id: number /*i64*/, texture: Texture2D): void
        get_item_name(id: number /*i64*/): string
        get_item_mesh(id: number /*i64*/): Mesh
        get_item_mesh_transform(id: number /*i64*/): Transform3D
        get_item_navigation_mesh(id: number /*i64*/): NavigationMesh
        get_item_navigation_mesh_transform(id: number /*i64*/): Transform3D
        get_item_navigation_layers(id: number /*i64*/): number /*i64*/
        get_item_shapes(id: number /*i64*/): Array
        get_item_preview(id: number /*i64*/): Texture2D
        remove_item(id: number /*i64*/): void
        find_item_by_name(name: string): number /*i64*/
        clear(): void
        get_item_list(): PackedInt32Array
        get_last_unused_item_id(): number /*i64*/
    }
    class MeshLibraryEditor extends Control {
    }
    class MeshLibraryEditorPlugin extends EditorPlugin {
    }
    class MeshTexture extends Texture2D {
        set_mesh(mesh: Mesh): void
        get_mesh(): Mesh
        set_image_size(size: Vector2): void
        get_image_size(): Vector2
        set_base_texture(texture: Texture2D): void
        get_base_texture(): Texture2D
        mesh: Mesh
        base_texture: Texture2D
        image_size: Vector2
    }
    class MethodTweener extends Tweener {
        set_delay(delay: number /*f64*/): MethodTweener
        set_trans(trans: Tween.TransitionType): MethodTweener
        set_ease(ease: Tween.EaseType): MethodTweener
    }
    class MissingNode extends Node {
        set_original_class(name: string): void
        get_original_class(): string
        set_recording_properties(enable: boolean): void
        is_recording_properties(): boolean
        original_class: string
        recording_properties: boolean
    }
    class MissingResource extends Resource {
        set_original_class(name: string): void
        get_original_class(): string
        set_recording_properties(enable: boolean): void
        is_recording_properties(): boolean
        original_class: string
        recording_properties: boolean
    }
    class MobileVRInterface extends XRInterface {
        set_eye_height(eye_height: number /*f64*/): void
        get_eye_height(): number /*f64*/
        set_iod(iod: number /*f64*/): void
        get_iod(): number /*f64*/
        set_display_width(display_width: number /*f64*/): void
        get_display_width(): number /*f64*/
        set_display_to_lens(display_to_lens: number /*f64*/): void
        get_display_to_lens(): number /*f64*/
        set_oversample(oversample: number /*f64*/): void
        get_oversample(): number /*f64*/
        set_k1(k: number /*f64*/): void
        get_k1(): number /*f64*/
        set_k2(k: number /*f64*/): void
        get_k2(): number /*f64*/
        eye_height: number /*f64*/
        iod: number /*f64*/
        display_width: number /*f64*/
        display_to_lens: number /*f64*/
        oversample: number /*f64*/
        k1: number /*f64*/
        k2: number /*f64*/
    }
    class MovieWriter extends Object {
        /* gdvirtual */ _get_audio_mix_rate(): number /*i64*/
        /* gdvirtual */ _get_audio_speaker_mode(): AudioServer.SpeakerMode
        /* gdvirtual */ _handles_file(path: string): boolean
        /* gdvirtual */ _write_begin(movie_size: Vector2i, fps: number /*i64*/, base_path: string): GodotError
        /* gdvirtual */ _write_frame(frame_image: Image, audio_frame_block: number /*i64*/): GodotError
        /* gdvirtual */ _write_end(): void
        static add_writer(writer: MovieWriter): void
    }
    class MovieWriterMJPEG extends MovieWriter {
    }
    class MovieWriterPNGWAV extends MovieWriter {
    }
    namespace MultiMesh {
        enum TransformFormat {
            TRANSFORM_2D = 0,
            TRANSFORM_3D = 1,
        }
    }
    class MultiMesh extends Resource {
        set_mesh(mesh: Mesh): void
        get_mesh(): Mesh
        set_use_colors(enable: boolean): void
        is_using_colors(): boolean
        set_use_custom_data(enable: boolean): void
        is_using_custom_data(): boolean
        set_transform_format(format: MultiMesh.TransformFormat): void
        get_transform_format(): MultiMesh.TransformFormat
        set_instance_count(count: number /*i64*/): void
        get_instance_count(): number /*i64*/
        set_visible_instance_count(count: number /*i64*/): void
        get_visible_instance_count(): number /*i64*/
        set_instance_transform(instance: number /*i64*/, transform: Transform3D): void
        set_instance_transform_2d(instance: number /*i64*/, transform: Transform2D): void
        get_instance_transform(instance: number /*i64*/): Transform3D
        get_instance_transform_2d(instance: number /*i64*/): Transform2D
        set_instance_color(instance: number /*i64*/, color: Color): void
        get_instance_color(instance: number /*i64*/): Color
        set_instance_custom_data(instance: number /*i64*/, custom_data: Color): void
        get_instance_custom_data(instance: number /*i64*/): Color
        get_aabb(): AABB
        get_buffer(): PackedFloat32Array
        set_buffer(buffer: PackedFloat32Array): void
        _set_transform_array(array: PackedVector3Array): void
        _get_transform_array(): PackedVector3Array
        _set_transform_2d_array(array: PackedVector2Array): void
        _get_transform_2d_array(): PackedVector2Array
        _set_color_array(array: PackedColorArray): void
        _get_color_array(): PackedColorArray
        _set_custom_data_array(array: PackedColorArray): void
        _get_custom_data_array(): PackedColorArray
        transform_format: number /*i64*/
        use_colors: boolean
        use_custom_data: boolean
        instance_count: number /*i64*/
        visible_instance_count: number /*i64*/
        mesh: Mesh
        buffer: PackedFloat32Array
        transform_array: PackedVector3Array
        transform_2d_array: PackedVector2Array
        color_array: PackedColorArray
        custom_data_array: PackedColorArray
    }
    class MultiMeshEditor extends Control {
    }
    class MultiMeshEditorPlugin extends EditorPlugin {
    }
    class MultiMeshInstance2D extends Node2D {
        set_multimesh(multimesh: MultiMesh): void
        get_multimesh(): MultiMesh
        set_texture(texture: Texture2D): void
        get_texture(): Texture2D
        multimesh: MultiMesh
        texture: Texture2D
        readonly texture_changed: Signal
    }
    class MultiMeshInstance3D extends GeometryInstance3D {
        set_multimesh(multimesh: MultiMesh): void
        get_multimesh(): MultiMesh
        multimesh: MultiMesh
    }
    namespace MultiplayerAPI {
        enum RPCMode {
            RPC_MODE_DISABLED = 0,
            RPC_MODE_ANY_PEER = 1,
            RPC_MODE_AUTHORITY = 2,
        }
    }
    class MultiplayerAPI extends RefCounted {
        has_multiplayer_peer(): boolean
        get_multiplayer_peer(): MultiplayerPeer
        set_multiplayer_peer(peer: MultiplayerPeer): void
        get_unique_id(): number /*i64*/
        is_server(): boolean
        get_remote_sender_id(): number /*i64*/
        poll(): GodotError
        rpc(peer: number /*i64*/, object: Object, method: StringName, arguments_: Array = <any> {} /*compound.type from 28([object Object])*/): GodotError
        object_configuration_add(object: Object, configuration: any): GodotError
        object_configuration_remove(object: Object, configuration: any): GodotError
        get_peers(): PackedInt32Array
        static set_default_interface(interface_name: StringName): void
        static get_default_interface(): StringName
        static create_default_interface(): MultiplayerAPI
        multiplayer_peer: MultiplayerPeer
        readonly peer_connected: Signal
        readonly peer_disconnected: Signal
        readonly connected_to_server: Signal
        readonly connection_failed: Signal
        readonly server_disconnected: Signal
    }
    class MultiplayerAPIExtension extends MultiplayerAPI {
        /* gdvirtual */ _poll(): GodotError
        /* gdvirtual */ _set_multiplayer_peer(multiplayer_peer: MultiplayerPeer): void
        /* gdvirtual */ _get_multiplayer_peer(): MultiplayerPeer
        /* gdvirtual */ _get_unique_id(): number /*i64*/
        /* gdvirtual */ _get_peer_ids(): PackedInt32Array
        /* gdvirtual */ _rpc(peer: number /*i64*/, object: Object, method: StringName, args: Array): GodotError
        /* gdvirtual */ _get_remote_sender_id(): number /*i64*/
        /* gdvirtual */ _object_configuration_add(object: Object, configuration: any): GodotError
        /* gdvirtual */ _object_configuration_remove(object: Object, configuration: any): GodotError
    }
    class MultiplayerEditorDebugger extends EditorDebuggerPlugin {
        readonly open_request: Signal
    }
    class MultiplayerEditorPlugin extends EditorPlugin {
    }
    namespace MultiplayerPeer {
        enum ConnectionStatus {
            CONNECTION_DISCONNECTED = 0,
            CONNECTION_CONNECTING = 1,
            CONNECTION_CONNECTED = 2,
        }
        enum TransferMode {
            TRANSFER_MODE_UNRELIABLE = 0,
            TRANSFER_MODE_UNRELIABLE_ORDERED = 1,
            TRANSFER_MODE_RELIABLE = 2,
        }
    }
    class MultiplayerPeer extends PacketPeer {
        static readonly TARGET_PEER_BROADCAST = 0
        static readonly TARGET_PEER_SERVER = 1
        set_transfer_channel(channel: number /*i64*/): void
        get_transfer_channel(): number /*i64*/
        set_transfer_mode(mode: MultiplayerPeer.TransferMode): void
        get_transfer_mode(): MultiplayerPeer.TransferMode
        set_target_peer(id: number /*i64*/): void
        get_packet_peer(): number /*i64*/
        get_packet_channel(): number /*i64*/
        get_packet_mode(): MultiplayerPeer.TransferMode
        poll(): void
        close(): void
        disconnect_peer(peer: number /*i64*/, force: boolean = false): void
        get_connection_status(): MultiplayerPeer.ConnectionStatus
        get_unique_id(): number /*i64*/
        generate_unique_id(): number /*i64*/
        set_refuse_new_connections(enable: boolean): void
        is_refusing_new_connections(): boolean
        is_server_relay_supported(): boolean
        refuse_new_connections: boolean
        transfer_mode: number /*i64*/
        transfer_channel: number /*i64*/
        readonly peer_connected: Signal
        readonly peer_disconnected: Signal
    }
    class MultiplayerPeerExtension extends MultiplayerPeer {
        /* gdvirtual */ _get_packet(r_buffer: number /*i64*/, r_buffer_size: number /*i64*/): GodotError
        /* gdvirtual */ _put_packet(p_buffer: number /*i64*/, p_buffer_size: number /*i64*/): GodotError
        /* gdvirtual */ _get_available_packet_count(): number /*i64*/
        /* gdvirtual */ _get_max_packet_size(): number /*i64*/
        /* gdvirtual */ _get_packet_script(): PackedByteArray
        /* gdvirtual */ _put_packet_script(p_buffer: PackedByteArray): GodotError
        /* gdvirtual */ _get_packet_channel(): number /*i64*/
        /* gdvirtual */ _get_packet_mode(): MultiplayerPeer.TransferMode
        /* gdvirtual */ _set_transfer_channel(p_channel: number /*i64*/): void
        /* gdvirtual */ _get_transfer_channel(): number /*i64*/
        /* gdvirtual */ _set_transfer_mode(p_mode: MultiplayerPeer.TransferMode): void
        /* gdvirtual */ _get_transfer_mode(): MultiplayerPeer.TransferMode
        /* gdvirtual */ _set_target_peer(p_peer: number /*i64*/): void
        /* gdvirtual */ _get_packet_peer(): number /*i64*/
        /* gdvirtual */ _is_server(): boolean
        /* gdvirtual */ _poll(): void
        /* gdvirtual */ _close(): void
        /* gdvirtual */ _disconnect_peer(p_peer: number /*i64*/, p_force: boolean): void
        /* gdvirtual */ _get_unique_id(): number /*i64*/
        /* gdvirtual */ _set_refuse_new_connections(p_enable: boolean): void
        /* gdvirtual */ _is_refusing_new_connections(): boolean
        /* gdvirtual */ _is_server_relay_supported(): boolean
        /* gdvirtual */ _get_connection_status(): MultiplayerPeer.ConnectionStatus
    }
    class MultiplayerSpawner extends Node {
        add_spawnable_scene(path: string): void
        get_spawnable_scene_count(): number /*i64*/
        get_spawnable_scene(index: number /*i64*/): string
        clear_spawnable_scenes(): void
        _get_spawnable_scenes(): PackedStringArray
        _set_spawnable_scenes(scenes: PackedStringArray): void
        spawn(data: any = <any> {} /*compound.type from nil*/): Node
        get_spawn_path(): NodePath
        set_spawn_path(path: NodePath): void
        get_spawn_limit(): number /*i64*/
        set_spawn_limit(limit: number /*i64*/): void
        get_spawn_function(): Callable
        set_spawn_function(spawn_function: Callable): void
        _spawnable_scenes: PackedStringArray
        spawn_path: NodePath
        spawn_limit: number /*i64*/
        spawn_function: Callable
        readonly despawned: Signal
        readonly spawned: Signal
    }
    namespace MultiplayerSynchronizer {
        enum VisibilityUpdateMode {
            VISIBILITY_PROCESS_IDLE = 0,
            VISIBILITY_PROCESS_PHYSICS = 1,
            VISIBILITY_PROCESS_NONE = 2,
        }
    }
    class MultiplayerSynchronizer extends Node {
        set_root_path(path: NodePath): void
        get_root_path(): NodePath
        set_replication_interval(milliseconds: number /*f64*/): void
        get_replication_interval(): number /*f64*/
        set_delta_interval(milliseconds: number /*f64*/): void
        get_delta_interval(): number /*f64*/
        set_replication_config(config: SceneReplicationConfig): void
        get_replication_config(): SceneReplicationConfig
        set_visibility_update_mode(mode: MultiplayerSynchronizer.VisibilityUpdateMode): void
        get_visibility_update_mode(): MultiplayerSynchronizer.VisibilityUpdateMode
        update_visibility(for_peer: number /*i64*/ = 0): void
        set_visibility_public(visible: boolean): void
        is_visibility_public(): boolean
        add_visibility_filter(filter: Callable): void
        remove_visibility_filter(filter: Callable): void
        set_visibility_for(peer: number /*i64*/, visible: boolean): void
        get_visibility_for(peer: number /*i64*/): boolean
        root_path: NodePath
        replication_interval: number /*f64*/
        delta_interval: number /*f64*/
        replication_config: SceneReplicationConfig
        visibility_update_mode: number /*i64*/
        public_visibility: boolean
        readonly synchronized: Signal
        readonly delta_synchronized: Signal
        readonly visibility_changed: Signal
    }
    class Mutex extends RefCounted {
        lock(): void
        try_lock(): boolean
        unlock(): void
    }
    class NavigationAgent2D extends Node {
        get_rid(): RID
        set_avoidance_enabled(enabled: boolean): void
        get_avoidance_enabled(): boolean
        set_path_desired_distance(desired_distance: number /*f64*/): void
        get_path_desired_distance(): number /*f64*/
        set_target_desired_distance(desired_distance: number /*f64*/): void
        get_target_desired_distance(): number /*f64*/
        set_radius(radius: number /*f64*/): void
        get_radius(): number /*f64*/
        set_neighbor_distance(neighbor_distance: number /*f64*/): void
        get_neighbor_distance(): number /*f64*/
        set_max_neighbors(max_neighbors: number /*i64*/): void
        get_max_neighbors(): number /*i64*/
        set_time_horizon_agents(time_horizon: number /*f64*/): void
        get_time_horizon_agents(): number /*f64*/
        set_time_horizon_obstacles(time_horizon: number /*f64*/): void
        get_time_horizon_obstacles(): number /*f64*/
        set_max_speed(max_speed: number /*f64*/): void
        get_max_speed(): number /*f64*/
        set_path_max_distance(max_speed: number /*f64*/): void
        get_path_max_distance(): number /*f64*/
        set_navigation_layers(navigation_layers: number /*i64*/): void
        get_navigation_layers(): number /*i64*/
        set_navigation_layer_value(layer_number: number /*i64*/, value: boolean): void
        get_navigation_layer_value(layer_number: number /*i64*/): boolean
        set_pathfinding_algorithm(pathfinding_algorithm: NavigationPathQueryParameters2D.PathfindingAlgorithm): void
        get_pathfinding_algorithm(): NavigationPathQueryParameters2D.PathfindingAlgorithm
        set_path_postprocessing(path_postprocessing: NavigationPathQueryParameters2D.PathPostProcessing): void
        get_path_postprocessing(): NavigationPathQueryParameters2D.PathPostProcessing
        set_path_metadata_flags(flags: NavigationPathQueryParameters2D.PathMetadataFlags): void
        get_path_metadata_flags(): NavigationPathQueryParameters2D.PathMetadataFlags
        set_navigation_map(navigation_map: RID): void
        get_navigation_map(): RID
        set_target_position(position: Vector2): void
        get_target_position(): Vector2
        get_next_path_position(): Vector2
        set_velocity_forced(velocity: Vector2): void
        set_velocity(velocity: Vector2): void
        get_velocity(): Vector2
        distance_to_target(): number /*f64*/
        get_current_navigation_result(): NavigationPathQueryResult2D
        get_current_navigation_path(): PackedVector2Array
        get_current_navigation_path_index(): number /*i64*/
        is_target_reached(): boolean
        is_target_reachable(): boolean
        is_navigation_finished(): boolean
        get_final_position(): Vector2
        _avoidance_done(new_velocity: Vector3): void
        set_avoidance_layers(layers: number /*i64*/): void
        get_avoidance_layers(): number /*i64*/
        set_avoidance_mask(mask: number /*i64*/): void
        get_avoidance_mask(): number /*i64*/
        set_avoidance_layer_value(layer_number: number /*i64*/, value: boolean): void
        get_avoidance_layer_value(layer_number: number /*i64*/): boolean
        set_avoidance_mask_value(mask_number: number /*i64*/, value: boolean): void
        get_avoidance_mask_value(mask_number: number /*i64*/): boolean
        set_avoidance_priority(priority: number /*f64*/): void
        get_avoidance_priority(): number /*f64*/
        set_debug_enabled(enabled: boolean): void
        get_debug_enabled(): boolean
        set_debug_use_custom(enabled: boolean): void
        get_debug_use_custom(): boolean
        set_debug_path_custom_color(color: Color): void
        get_debug_path_custom_color(): Color
        set_debug_path_custom_point_size(point_size: number /*f64*/): void
        get_debug_path_custom_point_size(): number /*f64*/
        set_debug_path_custom_line_width(line_width: number /*f64*/): void
        get_debug_path_custom_line_width(): number /*f64*/
        target_position: Vector2
        path_desired_distance: number /*f64*/
        target_desired_distance: number /*f64*/
        path_max_distance: number /*f64*/
        navigation_layers: number /*i64*/
        pathfinding_algorithm: number /*i64*/
        path_postprocessing: number /*i64*/
        path_metadata_flags: number /*i64*/
        avoidance_enabled: boolean
        velocity: Vector2
        radius: number /*f64*/
        neighbor_distance: number /*f64*/
        max_neighbors: number /*i64*/
        time_horizon_agents: number /*f64*/
        time_horizon_obstacles: number /*f64*/
        max_speed: number /*f64*/
        avoidance_layers: number /*i64*/
        avoidance_mask: number /*i64*/
        avoidance_priority: number /*f64*/
        debug_enabled: boolean
        debug_use_custom: boolean
        debug_path_custom_color: Color
        debug_path_custom_point_size: number /*f64*/
        debug_path_custom_line_width: number /*f64*/
        readonly path_changed: Signal
        readonly target_reached: Signal
        readonly waypoint_reached: Signal
        readonly link_reached: Signal
        readonly navigation_finished: Signal
        readonly velocity_computed: Signal
    }
    class NavigationAgent3D extends Node {
        get_rid(): RID
        set_avoidance_enabled(enabled: boolean): void
        get_avoidance_enabled(): boolean
        set_path_desired_distance(desired_distance: number /*f64*/): void
        get_path_desired_distance(): number /*f64*/
        set_target_desired_distance(desired_distance: number /*f64*/): void
        get_target_desired_distance(): number /*f64*/
        set_radius(radius: number /*f64*/): void
        get_radius(): number /*f64*/
        set_height(height: number /*f64*/): void
        get_height(): number /*f64*/
        set_path_height_offset(path_height_offset: number /*f64*/): void
        get_path_height_offset(): number /*f64*/
        set_use_3d_avoidance(enabled: boolean): void
        get_use_3d_avoidance(): boolean
        set_keep_y_velocity(enabled: boolean): void
        get_keep_y_velocity(): boolean
        set_neighbor_distance(neighbor_distance: number /*f64*/): void
        get_neighbor_distance(): number /*f64*/
        set_max_neighbors(max_neighbors: number /*i64*/): void
        get_max_neighbors(): number /*i64*/
        set_time_horizon_agents(time_horizon: number /*f64*/): void
        get_time_horizon_agents(): number /*f64*/
        set_time_horizon_obstacles(time_horizon: number /*f64*/): void
        get_time_horizon_obstacles(): number /*f64*/
        set_max_speed(max_speed: number /*f64*/): void
        get_max_speed(): number /*f64*/
        set_path_max_distance(max_speed: number /*f64*/): void
        get_path_max_distance(): number /*f64*/
        set_navigation_layers(navigation_layers: number /*i64*/): void
        get_navigation_layers(): number /*i64*/
        set_navigation_layer_value(layer_number: number /*i64*/, value: boolean): void
        get_navigation_layer_value(layer_number: number /*i64*/): boolean
        set_pathfinding_algorithm(pathfinding_algorithm: NavigationPathQueryParameters3D.PathfindingAlgorithm): void
        get_pathfinding_algorithm(): NavigationPathQueryParameters3D.PathfindingAlgorithm
        set_path_postprocessing(path_postprocessing: NavigationPathQueryParameters3D.PathPostProcessing): void
        get_path_postprocessing(): NavigationPathQueryParameters3D.PathPostProcessing
        set_path_metadata_flags(flags: NavigationPathQueryParameters3D.PathMetadataFlags): void
        get_path_metadata_flags(): NavigationPathQueryParameters3D.PathMetadataFlags
        set_navigation_map(navigation_map: RID): void
        get_navigation_map(): RID
        set_target_position(position: Vector3): void
        get_target_position(): Vector3
        get_next_path_position(): Vector3
        set_velocity_forced(velocity: Vector3): void
        set_velocity(velocity: Vector3): void
        get_velocity(): Vector3
        distance_to_target(): number /*f64*/
        get_current_navigation_result(): NavigationPathQueryResult3D
        get_current_navigation_path(): PackedVector3Array
        get_current_navigation_path_index(): number /*i64*/
        is_target_reached(): boolean
        is_target_reachable(): boolean
        is_navigation_finished(): boolean
        get_final_position(): Vector3
        _avoidance_done(new_velocity: Vector3): void
        set_avoidance_layers(layers: number /*i64*/): void
        get_avoidance_layers(): number /*i64*/
        set_avoidance_mask(mask: number /*i64*/): void
        get_avoidance_mask(): number /*i64*/
        set_avoidance_layer_value(layer_number: number /*i64*/, value: boolean): void
        get_avoidance_layer_value(layer_number: number /*i64*/): boolean
        set_avoidance_mask_value(mask_number: number /*i64*/, value: boolean): void
        get_avoidance_mask_value(mask_number: number /*i64*/): boolean
        set_avoidance_priority(priority: number /*f64*/): void
        get_avoidance_priority(): number /*f64*/
        set_debug_enabled(enabled: boolean): void
        get_debug_enabled(): boolean
        set_debug_use_custom(enabled: boolean): void
        get_debug_use_custom(): boolean
        set_debug_path_custom_color(color: Color): void
        get_debug_path_custom_color(): Color
        set_debug_path_custom_point_size(point_size: number /*f64*/): void
        get_debug_path_custom_point_size(): number /*f64*/
        target_position: Vector3
        path_desired_distance: number /*f64*/
        target_desired_distance: number /*f64*/
        path_height_offset: number /*f64*/
        path_max_distance: number /*f64*/
        navigation_layers: number /*i64*/
        pathfinding_algorithm: number /*i64*/
        path_postprocessing: number /*i64*/
        path_metadata_flags: number /*i64*/
        avoidance_enabled: boolean
        velocity: Vector3
        height: number /*f64*/
        radius: number /*f64*/
        neighbor_distance: number /*f64*/
        max_neighbors: number /*i64*/
        time_horizon_agents: number /*f64*/
        time_horizon_obstacles: number /*f64*/
        max_speed: number /*f64*/
        use_3d_avoidance: boolean
        keep_y_velocity: boolean
        avoidance_layers: number /*i64*/
        avoidance_mask: number /*i64*/
        avoidance_priority: number /*f64*/
        debug_enabled: boolean
        debug_use_custom: boolean
        debug_path_custom_color: Color
        debug_path_custom_point_size: number /*f64*/
        readonly path_changed: Signal
        readonly target_reached: Signal
        readonly waypoint_reached: Signal
        readonly link_reached: Signal
        readonly navigation_finished: Signal
        readonly velocity_computed: Signal
    }
    class NavigationLink2D extends Node2D {
        get_rid(): RID
        set_enabled(enabled: boolean): void
        is_enabled(): boolean
        set_bidirectional(bidirectional: boolean): void
        is_bidirectional(): boolean
        set_navigation_layers(navigation_layers: number /*i64*/): void
        get_navigation_layers(): number /*i64*/
        set_navigation_layer_value(layer_number: number /*i64*/, value: boolean): void
        get_navigation_layer_value(layer_number: number /*i64*/): boolean
        set_start_position(position: Vector2): void
        get_start_position(): Vector2
        set_end_position(position: Vector2): void
        get_end_position(): Vector2
        set_global_start_position(position: Vector2): void
        get_global_start_position(): Vector2
        set_global_end_position(position: Vector2): void
        get_global_end_position(): Vector2
        set_enter_cost(enter_cost: number /*f64*/): void
        get_enter_cost(): number /*f64*/
        set_travel_cost(travel_cost: number /*f64*/): void
        get_travel_cost(): number /*f64*/
        enabled: boolean
        bidirectional: boolean
        navigation_layers: number /*i64*/
        start_position: Vector2
        end_position: Vector2
        enter_cost: number /*f64*/
        travel_cost: number /*f64*/
    }
    class NavigationLink2DEditor extends Control {
    }
    class NavigationLink2DEditorPlugin extends EditorPlugin {
    }
    class NavigationLink3D extends Node3D {
        get_rid(): RID
        set_enabled(enabled: boolean): void
        is_enabled(): boolean
        set_bidirectional(bidirectional: boolean): void
        is_bidirectional(): boolean
        set_navigation_layers(navigation_layers: number /*i64*/): void
        get_navigation_layers(): number /*i64*/
        set_navigation_layer_value(layer_number: number /*i64*/, value: boolean): void
        get_navigation_layer_value(layer_number: number /*i64*/): boolean
        set_start_position(position: Vector3): void
        get_start_position(): Vector3
        set_end_position(position: Vector3): void
        get_end_position(): Vector3
        set_global_start_position(position: Vector3): void
        get_global_start_position(): Vector3
        set_global_end_position(position: Vector3): void
        get_global_end_position(): Vector3
        set_enter_cost(enter_cost: number /*f64*/): void
        get_enter_cost(): number /*f64*/
        set_travel_cost(travel_cost: number /*f64*/): void
        get_travel_cost(): number /*f64*/
        enabled: boolean
        bidirectional: boolean
        navigation_layers: number /*i64*/
        start_position: Vector3
        end_position: Vector3
        enter_cost: number /*f64*/
        travel_cost: number /*f64*/
    }
    class NavigationLink3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    namespace NavigationMesh {
        enum SamplePartitionType {
            SAMPLE_PARTITION_WATERSHED = 0,
            SAMPLE_PARTITION_MONOTONE = 1,
            SAMPLE_PARTITION_LAYERS = 2,
            SAMPLE_PARTITION_MAX = 3,
        }
        enum ParsedGeometryType {
            PARSED_GEOMETRY_MESH_INSTANCES = 0,
            PARSED_GEOMETRY_STATIC_COLLIDERS = 1,
            PARSED_GEOMETRY_BOTH = 2,
            PARSED_GEOMETRY_MAX = 3,
        }
        enum SourceGeometryMode {
            SOURCE_GEOMETRY_ROOT_NODE_CHILDREN = 0,
            SOURCE_GEOMETRY_GROUPS_WITH_CHILDREN = 1,
            SOURCE_GEOMETRY_GROUPS_EXPLICIT = 2,
            SOURCE_GEOMETRY_MAX = 3,
        }
    }
    class NavigationMesh extends Resource {
        set_sample_partition_type(sample_partition_type: NavigationMesh.SamplePartitionType): void
        get_sample_partition_type(): NavigationMesh.SamplePartitionType
        set_parsed_geometry_type(geometry_type: NavigationMesh.ParsedGeometryType): void
        get_parsed_geometry_type(): NavigationMesh.ParsedGeometryType
        set_collision_mask(mask: number /*i64*/): void
        get_collision_mask(): number /*i64*/
        set_collision_mask_value(layer_number: number /*i64*/, value: boolean): void
        get_collision_mask_value(layer_number: number /*i64*/): boolean
        set_source_geometry_mode(mask: NavigationMesh.SourceGeometryMode): void
        get_source_geometry_mode(): NavigationMesh.SourceGeometryMode
        set_source_group_name(mask: StringName): void
        get_source_group_name(): StringName
        set_cell_size(cell_size: number /*f64*/): void
        get_cell_size(): number /*f64*/
        set_cell_height(cell_height: number /*f64*/): void
        get_cell_height(): number /*f64*/
        set_agent_height(agent_height: number /*f64*/): void
        get_agent_height(): number /*f64*/
        set_agent_radius(agent_radius: number /*f64*/): void
        get_agent_radius(): number /*f64*/
        set_agent_max_climb(agent_max_climb: number /*f64*/): void
        get_agent_max_climb(): number /*f64*/
        set_agent_max_slope(agent_max_slope: number /*f64*/): void
        get_agent_max_slope(): number /*f64*/
        set_region_min_size(region_min_size: number /*f64*/): void
        get_region_min_size(): number /*f64*/
        set_region_merge_size(region_merge_size: number /*f64*/): void
        get_region_merge_size(): number /*f64*/
        set_edge_max_length(edge_max_length: number /*f64*/): void
        get_edge_max_length(): number /*f64*/
        set_edge_max_error(edge_max_error: number /*f64*/): void
        get_edge_max_error(): number /*f64*/
        set_vertices_per_polygon(vertices_per_polygon: number /*f64*/): void
        get_vertices_per_polygon(): number /*f64*/
        set_detail_sample_distance(detail_sample_dist: number /*f64*/): void
        get_detail_sample_distance(): number /*f64*/
        set_detail_sample_max_error(detail_sample_max_error: number /*f64*/): void
        get_detail_sample_max_error(): number /*f64*/
        set_filter_low_hanging_obstacles(filter_low_hanging_obstacles: boolean): void
        get_filter_low_hanging_obstacles(): boolean
        set_filter_ledge_spans(filter_ledge_spans: boolean): void
        get_filter_ledge_spans(): boolean
        set_filter_walkable_low_height_spans(filter_walkable_low_height_spans: boolean): void
        get_filter_walkable_low_height_spans(): boolean
        set_filter_baking_aabb(baking_aabb: AABB): void
        get_filter_baking_aabb(): AABB
        set_filter_baking_aabb_offset(baking_aabb_offset: Vector3): void
        get_filter_baking_aabb_offset(): Vector3
        set_vertices(vertices: PackedVector3Array): void
        get_vertices(): PackedVector3Array
        add_polygon(polygon: PackedInt32Array): void
        get_polygon_count(): number /*i64*/
        get_polygon(idx: number /*i64*/): PackedInt32Array
        clear_polygons(): void
        create_from_mesh(mesh: Mesh): void
        _set_polygons(polygons: Array): void
        _get_polygons(): Array
        clear(): void
        vertices: PackedVector3Array
        polygons: Array
        sample_partition_type: number /*i64*/
        geometry_parsed_geometry_type: number /*i64*/
        geometry_collision_mask: number /*i64*/
        geometry_source_geometry_mode: number /*i64*/
        geometry_source_group_name: string
        cell_size: number /*f64*/
        cell_height: number /*f64*/
        agent_height: number /*f64*/
        agent_radius: number /*f64*/
        agent_max_climb: number /*f64*/
        agent_max_slope: number /*f64*/
        region_min_size: number /*f64*/
        region_merge_size: number /*f64*/
        edge_max_length: number /*f64*/
        edge_max_error: number /*f64*/
        vertices_per_polygon: number /*f64*/
        detail_sample_distance: number /*f64*/
        detail_sample_max_error: number /*f64*/
        filter_low_hanging_obstacles: boolean
        filter_ledge_spans: boolean
        filter_walkable_low_height_spans: boolean
        filter_baking_aabb: AABB
        filter_baking_aabb_offset: Vector3
    }
    class NavigationMeshEditor extends Control {
    }
    class NavigationMeshEditorPlugin extends EditorPlugin {
    }
    class NavigationMeshSourceGeometryData2D extends Resource {
        clear(): void
        has_data(): boolean
        set_traversable_outlines(traversable_outlines: Array): void
        get_traversable_outlines(): Array
        set_obstruction_outlines(obstruction_outlines: Array): void
        get_obstruction_outlines(): Array
        add_traversable_outline(shape_outline: PackedVector2Array): void
        add_obstruction_outline(shape_outline: PackedVector2Array): void
        traversable_outlines: Array
        obstruction_outlines: Array
    }
    class NavigationMeshSourceGeometryData3D extends Resource {
        set_vertices(vertices: PackedFloat32Array): void
        get_vertices(): PackedFloat32Array
        set_indices(indices: PackedInt32Array): void
        get_indices(): PackedInt32Array
        clear(): void
        has_data(): boolean
        add_mesh(mesh: Mesh, xform: Transform3D): void
        add_mesh_array(mesh_array: Array, xform: Transform3D): void
        add_faces(faces: PackedVector3Array, xform: Transform3D): void
        vertices: PackedVector3Array
        indices: PackedInt32Array
    }
    class NavigationObstacle2D extends Node2D {
        get_rid(): RID
        set_avoidance_enabled(enabled: boolean): void
        get_avoidance_enabled(): boolean
        set_navigation_map(navigation_map: RID): void
        get_navigation_map(): RID
        set_radius(radius: number /*f64*/): void
        get_radius(): number /*f64*/
        set_velocity(velocity: Vector2): void
        get_velocity(): Vector2
        set_vertices(vertices: PackedVector2Array): void
        get_vertices(): PackedVector2Array
        set_avoidance_layers(layers: number /*i64*/): void
        get_avoidance_layers(): number /*i64*/
        set_avoidance_layer_value(layer_number: number /*i64*/, value: boolean): void
        get_avoidance_layer_value(layer_number: number /*i64*/): boolean
        avoidance_enabled: boolean
        velocity: Vector2
        radius: number /*f64*/
        vertices: PackedVector2Array
        avoidance_layers: number /*i64*/
    }
    class NavigationObstacle2DEditor extends AbstractPolygon2DEditor {
    }
    class NavigationObstacle2DEditorPlugin extends AbstractPolygon2DEditorPlugin {
    }
    class NavigationObstacle3D extends Node3D {
        get_rid(): RID
        set_avoidance_enabled(enabled: boolean): void
        get_avoidance_enabled(): boolean
        set_navigation_map(navigation_map: RID): void
        get_navigation_map(): RID
        set_radius(radius: number /*f64*/): void
        get_radius(): number /*f64*/
        set_height(height: number /*f64*/): void
        get_height(): number /*f64*/
        set_velocity(velocity: Vector3): void
        get_velocity(): Vector3
        set_vertices(vertices: PackedVector3Array): void
        get_vertices(): PackedVector3Array
        set_avoidance_layers(layers: number /*i64*/): void
        get_avoidance_layers(): number /*i64*/
        set_avoidance_layer_value(layer_number: number /*i64*/, value: boolean): void
        get_avoidance_layer_value(layer_number: number /*i64*/): boolean
        set_use_3d_avoidance(enabled: boolean): void
        get_use_3d_avoidance(): boolean
        avoidance_enabled: boolean
        velocity: Vector3
        radius: number /*f64*/
        height: number /*f64*/
        vertices: PackedVector3Array
        avoidance_layers: number /*i64*/
        use_3d_avoidance: boolean
    }
    class NavigationObstacle3DEditor extends HBoxContainer {
        _polygon_draw(): void
    }
    class NavigationObstacle3DEditorPlugin extends EditorPlugin {
    }
    namespace NavigationPathQueryParameters2D {
        enum PathfindingAlgorithm {
            PATHFINDING_ALGORITHM_ASTAR = 0,
        }
        enum PathPostProcessing {
            PATH_POSTPROCESSING_CORRIDORFUNNEL = 0,
            PATH_POSTPROCESSING_EDGECENTERED = 1,
        }
        enum PathMetadataFlags {
            PATH_METADATA_INCLUDE_NONE = 0,
            PATH_METADATA_INCLUDE_TYPES = 1,
            PATH_METADATA_INCLUDE_RIDS = 2,
            PATH_METADATA_INCLUDE_OWNERS = 4,
            PATH_METADATA_INCLUDE_ALL = 7,
        }
    }
    class NavigationPathQueryParameters2D extends RefCounted {
        set_pathfinding_algorithm(pathfinding_algorithm: NavigationPathQueryParameters2D.PathfindingAlgorithm): void
        get_pathfinding_algorithm(): NavigationPathQueryParameters2D.PathfindingAlgorithm
        set_path_postprocessing(path_postprocessing: NavigationPathQueryParameters2D.PathPostProcessing): void
        get_path_postprocessing(): NavigationPathQueryParameters2D.PathPostProcessing
        set_map(map: RID): void
        get_map(): RID
        set_start_position(start_position: Vector2): void
        get_start_position(): Vector2
        set_target_position(target_position: Vector2): void
        get_target_position(): Vector2
        set_navigation_layers(navigation_layers: number /*i64*/): void
        get_navigation_layers(): number /*i64*/
        set_metadata_flags(flags: NavigationPathQueryParameters2D.PathMetadataFlags): void
        get_metadata_flags(): NavigationPathQueryParameters2D.PathMetadataFlags
        map: RID
        start_position: Vector2
        target_position: Vector2
        navigation_layers: number /*i64*/
        pathfinding_algorithm: number /*i64*/
        path_postprocessing: number /*i64*/
        metadata_flags: number /*i64*/
    }
    namespace NavigationPathQueryParameters3D {
        enum PathfindingAlgorithm {
            PATHFINDING_ALGORITHM_ASTAR = 0,
        }
        enum PathPostProcessing {
            PATH_POSTPROCESSING_CORRIDORFUNNEL = 0,
            PATH_POSTPROCESSING_EDGECENTERED = 1,
        }
        enum PathMetadataFlags {
            PATH_METADATA_INCLUDE_NONE = 0,
            PATH_METADATA_INCLUDE_TYPES = 1,
            PATH_METADATA_INCLUDE_RIDS = 2,
            PATH_METADATA_INCLUDE_OWNERS = 4,
            PATH_METADATA_INCLUDE_ALL = 7,
        }
    }
    class NavigationPathQueryParameters3D extends RefCounted {
        set_pathfinding_algorithm(pathfinding_algorithm: NavigationPathQueryParameters3D.PathfindingAlgorithm): void
        get_pathfinding_algorithm(): NavigationPathQueryParameters3D.PathfindingAlgorithm
        set_path_postprocessing(path_postprocessing: NavigationPathQueryParameters3D.PathPostProcessing): void
        get_path_postprocessing(): NavigationPathQueryParameters3D.PathPostProcessing
        set_map(map: RID): void
        get_map(): RID
        set_start_position(start_position: Vector3): void
        get_start_position(): Vector3
        set_target_position(target_position: Vector3): void
        get_target_position(): Vector3
        set_navigation_layers(navigation_layers: number /*i64*/): void
        get_navigation_layers(): number /*i64*/
        set_metadata_flags(flags: NavigationPathQueryParameters3D.PathMetadataFlags): void
        get_metadata_flags(): NavigationPathQueryParameters3D.PathMetadataFlags
        map: RID
        start_position: Vector3
        target_position: Vector3
        navigation_layers: number /*i64*/
        pathfinding_algorithm: number /*i64*/
        path_postprocessing: number /*i64*/
        metadata_flags: number /*i64*/
    }
    namespace NavigationPathQueryResult2D {
        enum PathSegmentType {
            PATH_SEGMENT_TYPE_REGION = 0,
            PATH_SEGMENT_TYPE_LINK = 1,
        }
    }
    class NavigationPathQueryResult2D extends RefCounted {
        set_path(path: PackedVector2Array): void
        get_path(): PackedVector2Array
        set_path_types(path_types: PackedInt32Array): void
        get_path_types(): PackedInt32Array
        set_path_rids(path_rids: Array): void
        get_path_rids(): Array
        set_path_owner_ids(path_owner_ids: PackedInt64Array): void
        get_path_owner_ids(): PackedInt64Array
        reset(): void
        path: PackedVector2Array
        path_types: PackedInt32Array
        path_rids: Array
        path_owner_ids: PackedInt64Array
    }
    namespace NavigationPathQueryResult3D {
        enum PathSegmentType {
            PATH_SEGMENT_TYPE_REGION = 0,
            PATH_SEGMENT_TYPE_LINK = 1,
        }
    }
    class NavigationPathQueryResult3D extends RefCounted {
        set_path(path: PackedVector3Array): void
        get_path(): PackedVector3Array
        set_path_types(path_types: PackedInt32Array): void
        get_path_types(): PackedInt32Array
        set_path_rids(path_rids: Array): void
        get_path_rids(): Array
        set_path_owner_ids(path_owner_ids: PackedInt64Array): void
        get_path_owner_ids(): PackedInt64Array
        reset(): void
        path: PackedVector3Array
        path_types: PackedInt32Array
        path_rids: Array
        path_owner_ids: PackedInt64Array
    }
    namespace NavigationPolygon {
        enum ParsedGeometryType {
            PARSED_GEOMETRY_MESH_INSTANCES = 0,
            PARSED_GEOMETRY_STATIC_COLLIDERS = 1,
            PARSED_GEOMETRY_BOTH = 2,
            PARSED_GEOMETRY_MAX = 3,
        }
        enum SourceGeometryMode {
            SOURCE_GEOMETRY_ROOT_NODE_CHILDREN = 0,
            SOURCE_GEOMETRY_GROUPS_WITH_CHILDREN = 1,
            SOURCE_GEOMETRY_GROUPS_EXPLICIT = 2,
            SOURCE_GEOMETRY_MAX = 3,
        }
    }
    class NavigationPolygon extends Resource {
        set_vertices(vertices: PackedVector2Array): void
        get_vertices(): PackedVector2Array
        add_polygon(polygon: PackedInt32Array): void
        get_polygon_count(): number /*i64*/
        get_polygon(idx: number /*i64*/): PackedInt32Array
        clear_polygons(): void
        get_navigation_mesh(): NavigationMesh
        add_outline(outline: PackedVector2Array): void
        add_outline_at_index(outline: PackedVector2Array, index: number /*i64*/): void
        get_outline_count(): number /*i64*/
        set_outline(idx: number /*i64*/, outline: PackedVector2Array): void
        get_outline(idx: number /*i64*/): PackedVector2Array
        remove_outline(idx: number /*i64*/): void
        clear_outlines(): void
        make_polygons_from_outlines(): void
        _set_polygons(polygons: Array): void
        _get_polygons(): Array
        _set_outlines(outlines: Array): void
        _get_outlines(): Array
        set_cell_size(cell_size: number /*f64*/): void
        get_cell_size(): number /*f64*/
        set_parsed_geometry_type(geometry_type: NavigationPolygon.ParsedGeometryType): void
        get_parsed_geometry_type(): NavigationPolygon.ParsedGeometryType
        set_parsed_collision_mask(mask: number /*i64*/): void
        get_parsed_collision_mask(): number /*i64*/
        set_parsed_collision_mask_value(layer_number: number /*i64*/, value: boolean): void
        get_parsed_collision_mask_value(layer_number: number /*i64*/): boolean
        set_source_geometry_mode(geometry_mode: NavigationPolygon.SourceGeometryMode): void
        get_source_geometry_mode(): NavigationPolygon.SourceGeometryMode
        set_source_geometry_group_name(group_name: StringName): void
        get_source_geometry_group_name(): StringName
        set_agent_radius(agent_radius: number /*f64*/): void
        get_agent_radius(): number /*f64*/
        clear(): void
        vertices: PackedVector2Array
        polygons: Array
        outlines: Array
        parsed_geometry_type: number /*i64*/
        parsed_collision_mask: number /*i64*/
        source_geometry_mode: number /*i64*/
        source_geometry_group_name: string
        cell_size: number /*f64*/
        agent_radius: number /*f64*/
    }
    class NavigationPolygonEditor extends AbstractPolygon2DEditor {
    }
    class NavigationPolygonEditorPlugin extends AbstractPolygon2DEditorPlugin {
    }
    class NavigationRegion2D extends Node2D {
        get_rid(): RID
        set_navigation_polygon(navigation_polygon: NavigationPolygon): void
        get_navigation_polygon(): NavigationPolygon
        set_enabled(enabled: boolean): void
        is_enabled(): boolean
        set_navigation_map(navigation_map: RID): void
        get_navigation_map(): RID
        set_use_edge_connections(enabled: boolean): void
        get_use_edge_connections(): boolean
        set_navigation_layers(navigation_layers: number /*i64*/): void
        get_navigation_layers(): number /*i64*/
        set_navigation_layer_value(layer_number: number /*i64*/, value: boolean): void
        get_navigation_layer_value(layer_number: number /*i64*/): boolean
        set_constrain_avoidance(enabled: boolean): void
        get_constrain_avoidance(): boolean
        set_avoidance_layers(layers: number /*i64*/): void
        get_avoidance_layers(): number /*i64*/
        set_avoidance_layer_value(layer_number: number /*i64*/, value: boolean): void
        get_avoidance_layer_value(layer_number: number /*i64*/): boolean
        get_region_rid(): RID
        set_enter_cost(enter_cost: number /*f64*/): void
        get_enter_cost(): number /*f64*/
        set_travel_cost(travel_cost: number /*f64*/): void
        get_travel_cost(): number /*f64*/
        bake_navigation_polygon(on_thread: boolean = true): void
        _navigation_polygon_changed(): void
        navigation_polygon: NavigationPolygon
        enabled: boolean
        use_edge_connections: boolean
        navigation_layers: number /*i64*/
        enter_cost: number /*f64*/
        travel_cost: number /*f64*/
        constrain_avoidance: boolean
        avoidance_layers: number /*i64*/
        readonly navigation_polygon_changed: Signal
        readonly bake_finished: Signal
    }
    class NavigationRegion3D extends Node3D {
        get_rid(): RID
        set_navigation_mesh(navigation_mesh: NavigationMesh): void
        get_navigation_mesh(): NavigationMesh
        set_enabled(enabled: boolean): void
        is_enabled(): boolean
        set_navigation_map(navigation_map: RID): void
        get_navigation_map(): RID
        set_use_edge_connections(enabled: boolean): void
        get_use_edge_connections(): boolean
        set_navigation_layers(navigation_layers: number /*i64*/): void
        get_navigation_layers(): number /*i64*/
        set_navigation_layer_value(layer_number: number /*i64*/, value: boolean): void
        get_navigation_layer_value(layer_number: number /*i64*/): boolean
        get_region_rid(): RID
        set_enter_cost(enter_cost: number /*f64*/): void
        get_enter_cost(): number /*f64*/
        set_travel_cost(travel_cost: number /*f64*/): void
        get_travel_cost(): number /*f64*/
        bake_navigation_mesh(on_thread: boolean = true): void
        _bake_finished(navigation_mesh: NavigationMesh): void
        navigation_mesh: NavigationMesh
        enabled: boolean
        use_edge_connections: boolean
        navigation_layers: number /*i64*/
        enter_cost: number /*f64*/
        travel_cost: number /*f64*/
        readonly navigation_mesh_changed: Signal
        readonly bake_finished: Signal
    }
    class NavigationRegion3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    namespace NinePatchRect {
        enum AxisStretchMode {
            AXIS_STRETCH_MODE_STRETCH = 0,
            AXIS_STRETCH_MODE_TILE = 1,
            AXIS_STRETCH_MODE_TILE_FIT = 2,
        }
    }
    class NinePatchRect extends Control {
        set_texture(texture: Texture2D): void
        get_texture(): Texture2D
        set_patch_margin(margin: Side, value: number /*i64*/): void
        get_patch_margin(margin: Side): number /*i64*/
        set_region_rect(rect: Rect2): void
        get_region_rect(): Rect2
        set_draw_center(draw_center: boolean): void
        is_draw_center_enabled(): boolean
        set_h_axis_stretch_mode(mode: NinePatchRect.AxisStretchMode): void
        get_h_axis_stretch_mode(): NinePatchRect.AxisStretchMode
        set_v_axis_stretch_mode(mode: NinePatchRect.AxisStretchMode): void
        get_v_axis_stretch_mode(): NinePatchRect.AxisStretchMode
        texture: Texture2D
        draw_center: boolean
        region_rect: Rect2
        axis_stretch_horizontal: number /*i64*/
        axis_stretch_vertical: number /*i64*/
        readonly texture_changed: Signal
    }
    namespace Node {
        enum ProcessMode {
            PROCESS_MODE_INHERIT = 0,
            PROCESS_MODE_PAUSABLE = 1,
            PROCESS_MODE_WHEN_PAUSED = 2,
            PROCESS_MODE_ALWAYS = 3,
            PROCESS_MODE_DISABLED = 4,
        }
        enum ProcessThreadGroup {
            PROCESS_THREAD_GROUP_INHERIT = 0,
            PROCESS_THREAD_GROUP_MAIN_THREAD = 1,
            PROCESS_THREAD_GROUP_SUB_THREAD = 2,
        }
        enum ProcessThreadMessages {
            FLAG_PROCESS_THREAD_MESSAGES = 1,
            FLAG_PROCESS_THREAD_MESSAGES_PHYSICS = 2,
            FLAG_PROCESS_THREAD_MESSAGES_ALL = 3,
        }
        enum DuplicateFlags {
            DUPLICATE_SIGNALS = 1,
            DUPLICATE_GROUPS = 2,
            DUPLICATE_SCRIPTS = 4,
            DUPLICATE_USE_INSTANTIATION = 8,
        }
        enum InternalMode {
            INTERNAL_MODE_DISABLED = 0,
            INTERNAL_MODE_FRONT = 1,
            INTERNAL_MODE_BACK = 2,
        }
    }
    class Node extends Object {
        static readonly NOTIFICATION_ENTER_TREE = 10
        static readonly NOTIFICATION_EXIT_TREE = 11
        static readonly NOTIFICATION_MOVED_IN_PARENT = 12
        static readonly NOTIFICATION_READY = 13
        static readonly NOTIFICATION_PAUSED = 14
        static readonly NOTIFICATION_UNPAUSED = 15
        static readonly NOTIFICATION_PHYSICS_PROCESS = 16
        static readonly NOTIFICATION_PROCESS = 17
        static readonly NOTIFICATION_PARENTED = 18
        static readonly NOTIFICATION_UNPARENTED = 19
        static readonly NOTIFICATION_SCENE_INSTANTIATED = 20
        static readonly NOTIFICATION_DRAG_BEGIN = 21
        static readonly NOTIFICATION_DRAG_END = 22
        static readonly NOTIFICATION_PATH_RENAMED = 23
        static readonly NOTIFICATION_CHILD_ORDER_CHANGED = 24
        static readonly NOTIFICATION_INTERNAL_PROCESS = 25
        static readonly NOTIFICATION_INTERNAL_PHYSICS_PROCESS = 26
        static readonly NOTIFICATION_POST_ENTER_TREE = 27
        static readonly NOTIFICATION_DISABLED = 28
        static readonly NOTIFICATION_ENABLED = 29
        static readonly NOTIFICATION_EDITOR_PRE_SAVE = 9001
        static readonly NOTIFICATION_EDITOR_POST_SAVE = 9002
        static readonly NOTIFICATION_WM_MOUSE_ENTER = 1002
        static readonly NOTIFICATION_WM_MOUSE_EXIT = 1003
        static readonly NOTIFICATION_WM_WINDOW_FOCUS_IN = 1004
        static readonly NOTIFICATION_WM_WINDOW_FOCUS_OUT = 1005
        static readonly NOTIFICATION_WM_CLOSE_REQUEST = 1006
        static readonly NOTIFICATION_WM_GO_BACK_REQUEST = 1007
        static readonly NOTIFICATION_WM_SIZE_CHANGED = 1008
        static readonly NOTIFICATION_WM_DPI_CHANGE = 1009
        static readonly NOTIFICATION_VP_MOUSE_ENTER = 1010
        static readonly NOTIFICATION_VP_MOUSE_EXIT = 1011
        static readonly NOTIFICATION_OS_MEMORY_WARNING = 2009
        static readonly NOTIFICATION_TRANSLATION_CHANGED = 2010
        static readonly NOTIFICATION_WM_ABOUT = 2011
        static readonly NOTIFICATION_CRASH = 2012
        static readonly NOTIFICATION_OS_IME_UPDATE = 2013
        static readonly NOTIFICATION_APPLICATION_RESUMED = 2014
        static readonly NOTIFICATION_APPLICATION_PAUSED = 2015
        static readonly NOTIFICATION_APPLICATION_FOCUS_IN = 2016
        static readonly NOTIFICATION_APPLICATION_FOCUS_OUT = 2017
        static readonly NOTIFICATION_TEXT_SERVER_CHANGED = 2018
        /* gdvirtual */ _process(delta: number /*f64*/): void
        /* gdvirtual */ _physics_process(delta: number /*f64*/): void
        /* gdvirtual */ _enter_tree(): void
        /* gdvirtual */ _exit_tree(): void
        /* gdvirtual */ _ready(): void
        /* gdvirtual */ _get_configuration_warnings(): PackedStringArray
        /* gdvirtual */ _input(event: InputEvent): void
        /* gdvirtual */ _shortcut_input(event: InputEvent): void
        /* gdvirtual */ _unhandled_input(event: InputEvent): void
        /* gdvirtual */ _unhandled_key_input(event: InputEvent): void
        static print_orphan_nodes(): void
        add_sibling(sibling: Node, force_readable_name: boolean = false): void
        set_name(name: string): void
        get_name(): StringName
        add_child(node: Node, force_readable_name: boolean = false, internal: Node.InternalMode = 0): void
        remove_child(node: Node): void
        reparent(new_parent: Node, keep_global_transform: boolean = true): void
        get_child_count(include_internal: boolean = false): number /*i64*/
        get_children(include_internal: boolean = false): Array
        get_child(idx: number /*i64*/, include_internal: boolean = false): Node
        has_node(path: NodePath): boolean
        get_node(path: NodePath): Node
        get_node_or_null(path: NodePath): Node
        get_parent(): Node
        find_child(pattern: string, recursive: boolean = true, owned: boolean = true): Node
        find_children(pattern: string, type: string = '', recursive: boolean = true, owned: boolean = true): Array
        find_parent(pattern: string): Node
        has_node_and_resource(path: NodePath): boolean
        get_node_and_resource(path: NodePath): Array
        is_inside_tree(): boolean
        is_ancestor_of(node: Node): boolean
        is_greater_than(node: Node): boolean
        get_path(): NodePath
        get_path_to(node: Node, use_unique_path: boolean = false): NodePath
        add_to_group(group: StringName, persistent: boolean = false): void
        remove_from_group(group: StringName): void
        is_in_group(group: StringName): boolean
        move_child(child_node: Node, to_index: number /*i64*/): void
        get_groups(): Array
        set_owner(owner: Node): void
        get_owner(): Node
        get_index(include_internal: boolean = false): number /*i64*/
        print_tree(): void
        print_tree_pretty(): void
        get_tree_string(): string
        get_tree_string_pretty(): string
        set_scene_file_path(scene_file_path: string): void
        get_scene_file_path(): string
        propagate_notification(what: number /*i64*/): void
        propagate_call(method: StringName, args: Array = <any> {} /*compound.type from 28([object Object])*/, parent_first: boolean = false): void
        set_physics_process(enable: boolean): void
        get_physics_process_delta_time(): number /*f64*/
        is_physics_processing(): boolean
        get_process_delta_time(): number /*f64*/
        set_process(enable: boolean): void
        set_process_priority(priority: number /*i64*/): void
        get_process_priority(): number /*i64*/
        set_physics_process_priority(priority: number /*i64*/): void
        get_physics_process_priority(): number /*i64*/
        is_processing(): boolean
        set_process_input(enable: boolean): void
        is_processing_input(): boolean
        set_process_shortcut_input(enable: boolean): void
        is_processing_shortcut_input(): boolean
        set_process_unhandled_input(enable: boolean): void
        is_processing_unhandled_input(): boolean
        set_process_unhandled_key_input(enable: boolean): void
        is_processing_unhandled_key_input(): boolean
        set_process_mode(mode: Node.ProcessMode): void
        get_process_mode(): Node.ProcessMode
        can_process(): boolean
        set_process_thread_group(mode: Node.ProcessThreadGroup): void
        get_process_thread_group(): Node.ProcessThreadGroup
        set_process_thread_messages(flags: Node.ProcessThreadMessages): void
        get_process_thread_messages(): Node.ProcessThreadMessages
        set_process_thread_group_order(order: number /*i64*/): void
        get_process_thread_group_order(): number /*i64*/
        set_display_folded(fold: boolean): void
        is_displayed_folded(): boolean
        set_process_internal(enable: boolean): void
        is_processing_internal(): boolean
        set_physics_process_internal(enable: boolean): void
        is_physics_processing_internal(): boolean
        get_window(): Window
        get_last_exclusive_window(): Window
        get_tree(): SceneTree
        create_tween(): Tween
        duplicate(flags: number /*i64*/ = 15): Node
        replace_by(node: Node, keep_groups: boolean = false): void
        set_scene_instance_load_placeholder(load_placeholder: boolean): void
        get_scene_instance_load_placeholder(): boolean
        set_editable_instance(node: Node, is_editable: boolean): void
        is_editable_instance(node: Node): boolean
        get_viewport(): Viewport
        queue_free(): void
        request_ready(): void
        is_node_ready(): boolean
        set_multiplayer_authority(id: number /*i64*/, recursive: boolean = true): void
        get_multiplayer_authority(): number /*i64*/
        is_multiplayer_authority(): boolean
        get_multiplayer(): MultiplayerAPI
        rpc_config(method: StringName, config: any): void
        set_editor_description(editor_description: string): void
        get_editor_description(): string
        _set_import_path(import_path: NodePath): void
        _get_import_path(): NodePath
        set_unique_name_in_owner(enable: boolean): void
        is_unique_name_in_owner(): boolean
        _set_property_pinned(property: string, pinned: boolean): void
        rpc(method: StringName, ...vargargs: any[]): GodotError
        rpc_id(peer_id: number /*i64*/, method: StringName, ...vargargs: any[]): GodotError
        update_configuration_warnings(): void
        call_deferred_thread_group(method: StringName, ...vargargs: any[]): any
        set_deferred_thread_group(property: StringName, value: any): void
        notify_deferred_thread_group(what: number /*i64*/): void
        call_thread_safe(method: StringName, ...vargargs: any[]): any
        set_thread_safe(property: StringName, value: any): void
        notify_thread_safe(what: number /*i64*/): void
        _import_path: NodePath
        unique_name_in_owner: boolean
        scene_file_path: string
        owner: Node
        readonly multiplayer: MultiplayerAPI
        process_mode: number /*i64*/
        process_priority: number /*i64*/
        process_physics_priority: number /*i64*/
        process_thread_group: number /*i64*/
        process_thread_group_order: number /*i64*/
        process_thread_messages: number /*i64*/
        editor_description: string
        readonly ready: Signal
        readonly renamed: Signal
        readonly tree_entered: Signal
        readonly tree_exiting: Signal
        readonly tree_exited: Signal
        readonly child_entered_tree: Signal
        readonly child_exiting_tree: Signal
        readonly child_order_changed: Signal
        readonly replacing_by: Signal
    }
    class Node2D extends CanvasItem {
        set_position(position: Vector2): void
        set_rotation(radians: number /*f64*/): void
        set_rotation_degrees(degrees: number /*f64*/): void
        set_skew(radians: number /*f64*/): void
        set_scale(scale: Vector2): void
        get_position(): Vector2
        get_rotation(): number /*f64*/
        get_rotation_degrees(): number /*f64*/
        get_skew(): number /*f64*/
        get_scale(): Vector2
        rotate(radians: number /*f64*/): void
        move_local_x(delta: number /*f64*/, scaled: boolean = false): void
        move_local_y(delta: number /*f64*/, scaled: boolean = false): void
        translate(offset: Vector2): void
        global_translate(offset: Vector2): void
        apply_scale(ratio: Vector2): void
        set_global_position(position: Vector2): void
        get_global_position(): Vector2
        set_global_rotation(radians: number /*f64*/): void
        set_global_rotation_degrees(degrees: number /*f64*/): void
        get_global_rotation(): number /*f64*/
        get_global_rotation_degrees(): number /*f64*/
        set_global_skew(radians: number /*f64*/): void
        get_global_skew(): number /*f64*/
        set_global_scale(scale: Vector2): void
        get_global_scale(): Vector2
        set_transform(xform: Transform2D): void
        set_global_transform(xform: Transform2D): void
        look_at(point: Vector2): void
        get_angle_to(point: Vector2): number /*f64*/
        to_local(global_point: Vector2): Vector2
        to_global(local_point: Vector2): Vector2
        get_relative_transform_to_parent(parent: Node): Transform2D
        position: Vector2
        rotation: number /*f64*/
        rotation_degrees: number /*f64*/
        scale: Vector2
        skew: number /*f64*/
        transform: Transform2D
        global_position: Vector2
        global_rotation: number /*f64*/
        global_rotation_degrees: number /*f64*/
        global_scale: Vector2
        global_skew: number /*f64*/
        global_transform: Transform2D
    }
    namespace Node3D {
        enum RotationEditMode {
            ROTATION_EDIT_MODE_EULER = 0,
            ROTATION_EDIT_MODE_QUATERNION = 1,
            ROTATION_EDIT_MODE_BASIS = 2,
        }
    }
    class Node3D extends Node {
        static readonly NOTIFICATION_TRANSFORM_CHANGED = 2000
        static readonly NOTIFICATION_ENTER_WORLD = 41
        static readonly NOTIFICATION_EXIT_WORLD = 42
        static readonly NOTIFICATION_VISIBILITY_CHANGED = 43
        static readonly NOTIFICATION_LOCAL_TRANSFORM_CHANGED = 44
        set_transform(local: Transform3D): void
        get_transform(): Transform3D
        set_position(position: Vector3): void
        get_position(): Vector3
        set_rotation(euler_radians: Vector3): void
        get_rotation(): Vector3
        set_rotation_degrees(euler_degrees: Vector3): void
        get_rotation_degrees(): Vector3
        set_rotation_order(order: EulerOrder): void
        get_rotation_order(): EulerOrder
        set_rotation_edit_mode(edit_mode: Node3D.RotationEditMode): void
        get_rotation_edit_mode(): Node3D.RotationEditMode
        set_scale(scale: Vector3): void
        get_scale(): Vector3
        set_quaternion(quaternion: Quaternion): void
        get_quaternion(): Quaternion
        set_basis(basis: Basis): void
        get_basis(): Basis
        set_global_transform(global: Transform3D): void
        get_global_transform(): Transform3D
        set_global_position(position: Vector3): void
        get_global_position(): Vector3
        set_global_basis(basis: Basis): void
        get_global_basis(): Basis
        set_global_rotation(euler_radians: Vector3): void
        get_global_rotation(): Vector3
        set_global_rotation_degrees(euler_degrees: Vector3): void
        get_global_rotation_degrees(): Vector3
        get_parent_node_3d(): Node3D
        set_ignore_transform_notification(enabled: boolean): void
        set_as_top_level(enable: boolean): void
        is_set_as_top_level(): boolean
        set_disable_scale(disable: boolean): void
        is_scale_disabled(): boolean
        get_world_3d(): World3D
        force_update_transform(): void
        set_visibility_parent(path: NodePath): void
        get_visibility_parent(): NodePath
        update_gizmos(): void
        add_gizmo(gizmo: Node3DGizmo): void
        get_gizmos(): Array
        clear_gizmos(): void
        set_subgizmo_selection(gizmo: Node3DGizmo, id: number /*i64*/, transform: Transform3D): void
        clear_subgizmo_selection(): void
        set_visible(visible: boolean): void
        is_visible(): boolean
        is_visible_in_tree(): boolean
        show(): void
        hide(): void
        set_notify_local_transform(enable: boolean): void
        is_local_transform_notification_enabled(): boolean
        set_notify_transform(enable: boolean): void
        is_transform_notification_enabled(): boolean
        rotate(axis: Vector3, angle: number /*f64*/): void
        global_rotate(axis: Vector3, angle: number /*f64*/): void
        global_scale(scale: Vector3): void
        global_translate(offset: Vector3): void
        rotate_object_local(axis: Vector3, angle: number /*f64*/): void
        scale_object_local(scale: Vector3): void
        translate_object_local(offset: Vector3): void
        rotate_x(angle: number /*f64*/): void
        rotate_y(angle: number /*f64*/): void
        rotate_z(angle: number /*f64*/): void
        translate(offset: Vector3): void
        orthonormalize(): void
        set_identity(): void
        look_at(target: Vector3, up: Vector3 = Vector3.ZERO, use_model_front: boolean = false): void
        look_at_from_position(position: Vector3, target: Vector3, up: Vector3 = Vector3.ZERO, use_model_front: boolean = false): void
        to_local(global_point: Vector3): Vector3
        to_global(local_point: Vector3): Vector3
        transform: Transform3D
        global_transform: Transform3D
        position: Vector3
        rotation: Vector3
        rotation_degrees: Vector3
        quaternion: Quaternion
        basis: Basis
        scale: Vector3
        rotation_edit_mode: number /*i64*/
        rotation_order: number /*i64*/
        top_level: boolean
        global_position: Vector3
        global_basis: Basis
        global_rotation: Vector3
        global_rotation_degrees: Vector3
        visible: boolean
        visibility_parent: NodePath
        readonly visibility_changed: Signal
    }
    class Node3DEditor extends VBoxContainer {
        _get_editor_data(_unnamed_arg0: Object): Object
        _request_gizmo(_unnamed_arg0: Object): void
        _request_gizmo_for_id(_unnamed_arg0: number /*i64*/): void
        _set_subgizmo_selection(_unnamed_arg0: Object, _unnamed_arg1: Node3DGizmo, _unnamed_arg2: number /*i64*/, _unnamed_arg3: Transform3D): void
        _clear_subgizmo_selection(_unnamed_arg0: Object): void
        _refresh_menu_icons(): void
        readonly transform_key_request: Signal
        readonly item_lock_status_changed: Signal
        readonly item_group_status_changed: Signal
    }
    class Node3DEditorPlugin extends EditorPlugin {
    }
    class Node3DEditorViewport extends Control {
        update_transform_gizmo_view(): void
        readonly toggle_maximize_view: Signal
        readonly clicked: Signal
    }
    class Node3DEditorViewportContainer extends Container {
    }
    class Node3DGizmo extends RefCounted {
    }
    class NodeDock extends VBoxContainer {
    }
    class Noise extends Resource {
        get_noise_1d(x: number /*f64*/): number /*f64*/
        get_noise_2d(x: number /*f64*/, y: number /*f64*/): number /*f64*/
        get_noise_2dv(v: Vector2): number /*f64*/
        get_noise_3d(x: number /*f64*/, y: number /*f64*/, z: number /*f64*/): number /*f64*/
        get_noise_3dv(v: Vector3): number /*f64*/
        get_image(width: number /*i64*/, height: number /*i64*/, invert: boolean = false, in_3d_space: boolean = false, normalize: boolean = true): Image
        get_seamless_image(width: number /*i64*/, height: number /*i64*/, invert: boolean = false, in_3d_space: boolean = false, skirt: number /*f64*/ = 0.1, normalize: boolean = true): Image
        get_image_3d(width: number /*i64*/, height: number /*i64*/, depth: number /*i64*/, invert: boolean = false, normalize: boolean = true): Array
        get_seamless_image_3d(width: number /*i64*/, height: number /*i64*/, depth: number /*i64*/, invert: boolean = false, skirt: number /*f64*/ = 0.1, normalize: boolean = true): Array
    }
    class NoiseEditorInspectorPlugin extends EditorInspectorPlugin {
    }
    class NoiseEditorPlugin extends EditorPlugin {
    }
    class NoiseTexture2D extends Texture2D {
        _update_texture(): void
        _generate_texture(): Image
        _thread_done(image: Image): void
        set_width(width: number /*i64*/): void
        set_height(height: number /*i64*/): void
        set_invert(invert: boolean): void
        get_invert(): boolean
        set_in_3d_space(enable: boolean): void
        is_in_3d_space(): boolean
        set_generate_mipmaps(invert: boolean): void
        is_generating_mipmaps(): boolean
        set_seamless(seamless: boolean): void
        get_seamless(): boolean
        set_seamless_blend_skirt(seamless_blend_skirt: number /*f64*/): void
        get_seamless_blend_skirt(): number /*f64*/
        set_as_normal_map(as_normal_map: boolean): void
        is_normal_map(): boolean
        set_bump_strength(bump_strength: number /*f64*/): void
        get_bump_strength(): number /*f64*/
        set_normalize(normalize: boolean): void
        is_normalized(): boolean
        set_color_ramp(gradient: Gradient): void
        get_color_ramp(): Gradient
        set_noise(noise: Noise): void
        get_noise(): Noise
        width: number /*i64*/
        height: number /*i64*/
        invert: boolean
        in_3d_space: boolean
        generate_mipmaps: boolean
        seamless: boolean
        seamless_blend_skirt: number /*f64*/
        as_normal_map: boolean
        bump_strength: number /*f64*/
        normalize: boolean
        color_ramp: Gradient
        noise: Noise
    }
    class NoiseTexture3D extends Texture3D {
        _update_texture(): void
        _generate_texture(): Array
        _thread_done(image: Array): void
        set_width(width: number /*i64*/): void
        set_height(height: number /*i64*/): void
        set_depth(depth: number /*i64*/): void
        set_invert(invert: boolean): void
        get_invert(): boolean
        set_seamless(seamless: boolean): void
        get_seamless(): boolean
        set_seamless_blend_skirt(seamless_blend_skirt: number /*f64*/): void
        get_seamless_blend_skirt(): number /*f64*/
        set_normalize(normalize: boolean): void
        is_normalized(): boolean
        set_color_ramp(gradient: Gradient): void
        get_color_ramp(): Gradient
        set_noise(noise: Noise): void
        get_noise(): Noise
        width: number /*i64*/
        height: number /*i64*/
        depth: number /*i64*/
        invert: boolean
        seamless: boolean
        seamless_blend_skirt: number /*f64*/
        normalize: boolean
        color_ramp: Gradient
        noise: Noise
    }
    class ORMMaterial3D extends BaseMaterial3D {
    }
    class ORMMaterial3DConversionPlugin extends EditorResourceConversionPlugin {
    }
    namespace Object {
        enum ConnectFlags {
            CONNECT_DEFERRED = 1,
            CONNECT_PERSIST = 2,
            CONNECT_ONE_SHOT = 4,
            CONNECT_REFERENCE_COUNTED = 8,
        }
    }
    class Object {
        static readonly NOTIFICATION_POSTINITIALIZE = 0
        static readonly NOTIFICATION_PREDELETE = 1
        static readonly NOTIFICATION_EXTENSION_RELOADED = 2
        /* gdvirtual */ free(): void
        /* gdvirtual */ _notification(what: number /*i64*/): void
        /* gdvirtual */ _set(property: StringName, value: any): boolean
        /* gdvirtual */ _get(property: StringName): void
        /* gdvirtual */ _get_property_list(): Array
        /* gdvirtual */ _validate_property(property: Dictionary): void
        /* gdvirtual */ _property_can_revert(property: StringName): boolean
        /* gdvirtual */ _property_get_revert(property: StringName): void
        /* gdvirtual */ _init(): void
        /* gdvirtual */ _to_string(): string
        get_class(): string
        is_class(class_: string): boolean
        set(property: StringName, value: any): void
        get(property: StringName): any
        set_indexed(property_path: NodePath, value: any): void
        get_indexed(property_path: NodePath): any
        get_property_list(): Array
        get_method_list(): Array
        property_can_revert(property: StringName): boolean
        property_get_revert(property: StringName): any
        notification(what: number /*i64*/, reversed: boolean = false): void
        to_string(): string
        get_instance_id(): number /*i64*/
        set_script(script: any): void
        get_script(): any
        set_meta(name: StringName, value: any): void
        remove_meta(name: StringName): void
        get_meta(name: StringName, default_: any = <any> {} /*compound.type from nil*/): any
        has_meta(name: StringName): boolean
        get_meta_list(): Array
        add_user_signal(signal: string, arguments_: Array = <any> {} /*compound.type from 28([object Object])*/): void
        has_user_signal(signal: StringName): boolean
        emit_signal(signal: StringName, ...vargargs: any[]): GodotError
        call(method: StringName, ...vargargs: any[]): any
        call_deferred(method: StringName, ...vargargs: any[]): any
        set_deferred(property: StringName, value: any): void
        callv(method: StringName, arg_array: Array): any
        has_method(method: StringName): boolean
        has_signal(signal: StringName): boolean
        get_signal_list(): Array
        get_signal_connection_list(signal: StringName): Array
        get_incoming_connections(): Array
        connect(signal: StringName, callable: Callable, flags: number /*i64*/ = 0): GodotError
        disconnect(signal: StringName, callable: Callable): void
        is_connected(signal: StringName, callable: Callable): boolean
        set_block_signals(enable: boolean): void
        is_blocking_signals(): boolean
        notify_property_list_changed(): void
        set_message_translation(enable: boolean): void
        can_translate_messages(): boolean
        tr(message: StringName, context: StringName = ''): string
        tr_n(message: StringName, plural_message: StringName, n: number /*i64*/, context: StringName = ''): string
        is_queued_for_deletion(): boolean
        cancel_free(): void
        readonly script_changed: Signal
        readonly property_list_changed: Signal
    }
    class Occluder3D extends Resource {
        get_vertices(): PackedVector3Array
        get_indices(): PackedInt32Array
    }
    class OccluderInstance3D extends Node3D {
        set_bake_mask(mask: number /*i64*/): void
        get_bake_mask(): number /*i64*/
        set_bake_mask_value(layer_number: number /*i64*/, value: boolean): void
        get_bake_mask_value(layer_number: number /*i64*/): boolean
        set_bake_simplification_distance(simplification_distance: number /*f64*/): void
        get_bake_simplification_distance(): number /*f64*/
        set_occluder(occluder: Occluder3D): void
        get_occluder(): Occluder3D
        _is_editable_3d_polygon(): boolean
        _get_editable_3d_polygon_resource(): Resource
        occluder: Occluder3D
        bake_mask: number /*i64*/
        bake_simplification_distance: number /*f64*/
    }
    class OccluderInstance3DEditorPlugin extends EditorPlugin {
        _bake(): void
    }
    class OccluderInstance3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    namespace OccluderPolygon2D {
        enum CullMode {
            CULL_DISABLED = 0,
            CULL_CLOCKWISE = 1,
            CULL_COUNTER_CLOCKWISE = 2,
        }
    }
    class OccluderPolygon2D extends Resource {
        set_closed(closed: boolean): void
        is_closed(): boolean
        set_cull_mode(cull_mode: OccluderPolygon2D.CullMode): void
        get_cull_mode(): OccluderPolygon2D.CullMode
        set_polygon(polygon: PackedVector2Array): void
        get_polygon(): PackedVector2Array
        closed: boolean
        cull_mode: number /*i64*/
        polygon: PackedVector2Array
    }
    class OfflineMultiplayerPeer extends MultiplayerPeer {
    }
    class OggPacketSequence extends Resource {
        set_packet_data(packet_data: Array): void
        get_packet_data(): Array
        set_packet_granule_positions(granule_positions: PackedInt64Array): void
        get_packet_granule_positions(): PackedInt64Array
        set_sampling_rate(sampling_rate: number /*f64*/): void
        get_sampling_rate(): number /*f64*/
        get_length(): number /*f64*/
        packet_data: Array
        granule_positions: PackedInt64Array
        sampling_rate: number /*f64*/
    }
    class OggPacketSequencePlayback extends RefCounted {
    }
    namespace OmniLight3D {
        enum ShadowMode {
            SHADOW_DUAL_PARABOLOID = 0,
            SHADOW_CUBE = 1,
        }
    }
    class OmniLight3D extends Light3D {
        set_shadow_mode(mode: OmniLight3D.ShadowMode): void
        get_shadow_mode(): OmniLight3D.ShadowMode
        omni_shadow_mode: number /*i64*/
    }
    class OpenXRAPIExtension extends RefCounted {
        get_instance(): number /*i64*/
        get_system_id(): number /*i64*/
        get_session(): number /*i64*/
        transform_from_pose(pose: number /*i64*/): Transform3D
        xr_result(result: number /*i64*/, format: string, args: Array): boolean
        static openxr_is_enabled(check_run_in_editor: boolean): boolean
        get_instance_proc_addr(name: string): number /*i64*/
        get_error_string(result: number /*i64*/): string
        get_swapchain_format_name(swapchain_format: number /*i64*/): string
        is_initialized(): boolean
        is_running(): boolean
        get_play_space(): number /*i64*/
        get_next_frame_time(): number /*i64*/
        can_render(): boolean
    }
    namespace OpenXRAction {
        enum ActionType {
            OPENXR_ACTION_BOOL = 0,
            OPENXR_ACTION_FLOAT = 1,
            OPENXR_ACTION_VECTOR2 = 2,
            OPENXR_ACTION_POSE = 3,
        }
    }
    class OpenXRAction extends Resource {
        set_localized_name(localized_name: string): void
        get_localized_name(): string
        set_action_type(action_type: OpenXRAction.ActionType): void
        get_action_type(): OpenXRAction.ActionType
        set_toplevel_paths(toplevel_paths: PackedStringArray): void
        get_toplevel_paths(): PackedStringArray
        localized_name: string
        action_type: number /*i64*/
        toplevel_paths: PackedStringArray
    }
    class OpenXRActionMap extends Resource {
        set_action_sets(action_sets: Array): void
        get_action_sets(): Array
        get_action_set_count(): number /*i64*/
        find_action_set(name: string): OpenXRActionSet
        get_action_set(idx: number /*i64*/): OpenXRActionSet
        add_action_set(action_set: OpenXRActionSet): void
        remove_action_set(action_set: OpenXRActionSet): void
        set_interaction_profiles(interaction_profiles: Array): void
        get_interaction_profiles(): Array
        get_interaction_profile_count(): number /*i64*/
        find_interaction_profile(name: string): OpenXRInteractionProfile
        get_interaction_profile(idx: number /*i64*/): OpenXRInteractionProfile
        add_interaction_profile(interaction_profile: OpenXRInteractionProfile): void
        remove_interaction_profile(interaction_profile: OpenXRInteractionProfile): void
        create_default_action_sets(): void
        action_sets: OpenXRActionSet
        interaction_profiles: OpenXRInteractionProfile
    }
    class OpenXRActionSet extends Resource {
        set_localized_name(localized_name: string): void
        get_localized_name(): string
        set_priority(priority: number /*i64*/): void
        get_priority(): number /*i64*/
        get_action_count(): number /*i64*/
        set_actions(actions: Array): void
        get_actions(): Array
        add_action(action: OpenXRAction): void
        remove_action(action: OpenXRAction): void
        localized_name: string
        priority: number /*i64*/
        actions: OpenXRAction
    }
    class OpenXRExtensionWrapperExtension extends Object {
        /* gdvirtual */ _get_requested_extensions(): Dictionary
        /* gdvirtual */ _set_system_properties_and_get_next_pointer(next_pointer: number /*i64*/): number /*i64*/
        /* gdvirtual */ _set_instance_create_info_and_get_next_pointer(next_pointer: number /*i64*/): number /*i64*/
        /* gdvirtual */ _set_session_create_and_get_next_pointer(next_pointer: number /*i64*/): number /*i64*/
        /* gdvirtual */ _set_swapchain_create_info_and_get_next_pointer(next_pointer: number /*i64*/): number /*i64*/
        /* gdvirtual */ _on_register_metadata(): void
        /* gdvirtual */ _on_before_instance_created(): void
        /* gdvirtual */ _on_instance_created(instance: number /*i64*/): void
        /* gdvirtual */ _on_instance_destroyed(): void
        /* gdvirtual */ _on_session_created(session: number /*i64*/): void
        /* gdvirtual */ _on_process(): void
        /* gdvirtual */ _on_pre_render(): void
        /* gdvirtual */ _on_session_destroyed(): void
        /* gdvirtual */ _on_state_idle(): void
        /* gdvirtual */ _on_state_ready(): void
        /* gdvirtual */ _on_state_synchronized(): void
        /* gdvirtual */ _on_state_visible(): void
        /* gdvirtual */ _on_state_focused(): void
        /* gdvirtual */ _on_state_stopping(): void
        /* gdvirtual */ _on_state_loss_pending(): void
        /* gdvirtual */ _on_state_exiting(): void
        /* gdvirtual */ _on_event_polled(event: number /*i64*/): boolean
        get_openxr_api(): OpenXRAPIExtension
        register_extension_wrapper(): void
    }
    namespace OpenXRHand {
        enum Hands {
            HAND_LEFT = 0,
            HAND_RIGHT = 1,
            HAND_MAX = 2,
        }
        enum MotionRange {
            MOTION_RANGE_UNOBSTRUCTED = 0,
            MOTION_RANGE_CONFORM_TO_CONTROLLER = 1,
            MOTION_RANGE_MAX = 2,
        }
    }
    class OpenXRHand extends Node3D {
        set_hand(hand: OpenXRHand.Hands): void
        get_hand(): OpenXRHand.Hands
        set_hand_skeleton(hand_skeleton: NodePath): void
        get_hand_skeleton(): NodePath
        set_motion_range(motion_range: OpenXRHand.MotionRange): void
        get_motion_range(): OpenXRHand.MotionRange
        hand: number /*i64*/
        motion_range: number /*i64*/
        hand_skeleton: NodePath
    }
    class OpenXRIPBinding extends Resource {
        set_action(action: OpenXRAction): void
        get_action(): OpenXRAction
        get_path_count(): number /*i64*/
        set_paths(paths: PackedStringArray): void
        get_paths(): PackedStringArray
        has_path(path: string): boolean
        add_path(path: string): void
        remove_path(path: string): void
        action: OpenXRAction
        paths: PackedStringArray
    }
    class OpenXRInteractionProfile extends Resource {
        set_interaction_profile_path(interaction_profile_path: string): void
        get_interaction_profile_path(): string
        get_binding_count(): number /*i64*/
        get_binding(index: number /*i64*/): OpenXRIPBinding
        set_bindings(bindings: Array): void
        get_bindings(): Array
        interaction_profile_path: string
        bindings: OpenXRIPBinding
    }
    class OpenXRInteractionProfileMetadata extends Object {
        register_profile_rename(old_name: string, new_name: string): void
        register_top_level_path(display_name: string, openxr_path: string, openxr_extension_name: string): void
        register_interaction_profile(display_name: string, openxr_path: string, openxr_extension_name: string): void
        register_io_path(interaction_profile: string, display_name: string, toplevel_path: string, openxr_path: string, openxr_extension_name: string, action_type: OpenXRAction.ActionType): void
    }
    namespace OpenXRInterface {
        enum Hand {
            HAND_LEFT = 0,
            HAND_RIGHT = 1,
            HAND_MAX = 2,
        }
        enum HandMotionRange {
            HAND_MOTION_RANGE_UNOBSTRUCTED = 0,
            HAND_MOTION_RANGE_CONFORM_TO_CONTROLLER = 1,
            HAND_MOTION_RANGE_MAX = 2,
        }
        enum HandJoints {
            HAND_JOINT_PALM = 0,
            HAND_JOINT_WRIST = 1,
            HAND_JOINT_THUMB_METACARPAL = 2,
            HAND_JOINT_THUMB_PROXIMAL = 3,
            HAND_JOINT_THUMB_DISTAL = 4,
            HAND_JOINT_THUMB_TIP = 5,
            HAND_JOINT_INDEX_METACARPAL = 6,
            HAND_JOINT_INDEX_PROXIMAL = 7,
            HAND_JOINT_INDEX_INTERMEDIATE = 8,
            HAND_JOINT_INDEX_DISTAL = 9,
            HAND_JOINT_INDEX_TIP = 10,
            HAND_JOINT_MIDDLE_METACARPAL = 11,
            HAND_JOINT_MIDDLE_PROXIMAL = 12,
            HAND_JOINT_MIDDLE_INTERMEDIATE = 13,
            HAND_JOINT_MIDDLE_DISTAL = 14,
            HAND_JOINT_MIDDLE_TIP = 15,
            HAND_JOINT_RING_METACARPAL = 16,
            HAND_JOINT_RING_PROXIMAL = 17,
            HAND_JOINT_RING_INTERMEDIATE = 18,
            HAND_JOINT_RING_DISTAL = 19,
            HAND_JOINT_RING_TIP = 20,
            HAND_JOINT_LITTLE_METACARPAL = 21,
            HAND_JOINT_LITTLE_PROXIMAL = 22,
            HAND_JOINT_LITTLE_INTERMEDIATE = 23,
            HAND_JOINT_LITTLE_DISTAL = 24,
            HAND_JOINT_LITTLE_TIP = 25,
            HAND_JOINT_MAX = 26,
        }
        enum HandJointFlags {
            HAND_JOINT_NONE = 0,
            HAND_JOINT_ORIENTATION_VALID = 1,
            HAND_JOINT_ORIENTATION_TRACKED = 2,
            HAND_JOINT_POSITION_VALID = 4,
            HAND_JOINT_POSITION_TRACKED = 8,
            HAND_JOINT_LINEAR_VELOCITY_VALID = 16,
            HAND_JOINT_ANGULAR_VELOCITY_VALID = 32,
        }
    }
    class OpenXRInterface extends XRInterface {
        get_display_refresh_rate(): number /*f64*/
        set_display_refresh_rate(refresh_rate: number /*f64*/): void
        get_render_target_size_multiplier(): number /*f64*/
        set_render_target_size_multiplier(multiplier: number /*f64*/): void
        is_foveation_supported(): boolean
        get_foveation_level(): number /*i64*/
        set_foveation_level(foveation_level: number /*i64*/): void
        get_foveation_dynamic(): boolean
        set_foveation_dynamic(foveation_dynamic: boolean): void
        is_action_set_active(name: string): boolean
        set_action_set_active(name: string, active: boolean): void
        get_action_sets(): Array
        get_available_display_refresh_rates(): Array
        set_motion_range(hand: OpenXRInterface.Hand, motion_range: OpenXRInterface.HandMotionRange): void
        get_motion_range(hand: OpenXRInterface.Hand): OpenXRInterface.HandMotionRange
        get_hand_joint_flags(hand: OpenXRInterface.Hand, joint: OpenXRInterface.HandJoints): OpenXRInterface.HandJointFlags
        get_hand_joint_rotation(hand: OpenXRInterface.Hand, joint: OpenXRInterface.HandJoints): Quaternion
        get_hand_joint_position(hand: OpenXRInterface.Hand, joint: OpenXRInterface.HandJoints): Vector3
        get_hand_joint_radius(hand: OpenXRInterface.Hand, joint: OpenXRInterface.HandJoints): number /*f64*/
        get_hand_joint_linear_velocity(hand: OpenXRInterface.Hand, joint: OpenXRInterface.HandJoints): Vector3
        get_hand_joint_angular_velocity(hand: OpenXRInterface.Hand, joint: OpenXRInterface.HandJoints): Vector3
        is_hand_tracking_supported(): boolean
        is_eye_gaze_interaction_supported(): boolean
        display_refresh_rate: number /*f64*/
        render_target_size_multiplier: number /*f64*/
        foveation_level: number /*i64*/
        foveation_dynamic: boolean
        readonly session_begun: Signal
        readonly session_stopping: Signal
        readonly session_focussed: Signal
        readonly session_visible: Signal
        readonly pose_recentered: Signal
    }
    class OptimizedTranslation extends Translation {
        generate(from: Translation): void
    }
    class OptionButton extends Button {
        add_item(label: string, id: number /*i64*/ = -1): void
        add_icon_item(texture: Texture2D, label: string, id: number /*i64*/ = -1): void
        set_item_text(idx: number /*i64*/, text: string): void
        set_item_icon(idx: number /*i64*/, texture: Texture2D): void
        set_item_disabled(idx: number /*i64*/, disabled: boolean): void
        set_item_id(idx: number /*i64*/, id: number /*i64*/): void
        set_item_metadata(idx: number /*i64*/, metadata: any): void
        set_item_tooltip(idx: number /*i64*/, tooltip: string): void
        get_item_text(idx: number /*i64*/): string
        get_item_icon(idx: number /*i64*/): Texture2D
        get_item_id(idx: number /*i64*/): number /*i64*/
        get_item_index(id: number /*i64*/): number /*i64*/
        get_item_metadata(idx: number /*i64*/): any
        get_item_tooltip(idx: number /*i64*/): string
        is_item_disabled(idx: number /*i64*/): boolean
        is_item_separator(idx: number /*i64*/): boolean
        add_separator(text: string = ''): void
        clear(): void
        select(idx: number /*i64*/): void
        get_selected(): number /*i64*/
        get_selected_id(): number /*i64*/
        get_selected_metadata(): any
        remove_item(idx: number /*i64*/): void
        _select_int(idx: number /*i64*/): void
        get_popup(): PopupMenu
        show_popup(): void
        set_item_count(count: number /*i64*/): void
        get_item_count(): number /*i64*/
        has_selectable_items(): boolean
        get_selectable_item(from_last: boolean = false): number /*i64*/
        set_fit_to_longest_item(fit: boolean): void
        is_fit_to_longest_item(): boolean
        set_allow_reselect(allow: boolean): void
        get_allow_reselect(): boolean
        set_disable_shortcuts(disabled: boolean): void
        item_count: any /*Items,popup/item_*/
        selected: number /*i64*/
        fit_to_longest_item: boolean
        allow_reselect: boolean
        readonly item_selected: Signal
        readonly item_focused: Signal
    }
    class OrphanResourcesDialog extends ConfirmationDialog {
    }
    class PCKPacker extends RefCounted {
        pck_start(pck_name: string, alignment: number /*i64*/ = 32, key: string = '0000000000000000000000000000000000000000000000000000000000000000', encrypt_directory: boolean = false): GodotError
        add_file(pck_path: string, source_path: string, encrypt: boolean = false): GodotError
        flush(verbose: boolean = false): GodotError
    }
    class PackedDataContainer extends Resource {
        _set_data(data: PackedByteArray): void
        _get_data(): PackedByteArray
        _iter_init(_unnamed_arg0: Array): any
        _iter_get(_unnamed_arg0: any): any
        _iter_next(_unnamed_arg0: Array): any
        pack(value: any): GodotError
        size(): number /*i64*/
        __data__: PackedByteArray
    }
    class PackedDataContainerRef extends RefCounted {
        size(): number /*i64*/
        _iter_init(_unnamed_arg0: Array): any
        _iter_get(_unnamed_arg0: any): any
        _iter_next(_unnamed_arg0: Array): any
    }
    namespace PackedScene {
        enum GenEditState {
            GEN_EDIT_STATE_DISABLED = 0,
            GEN_EDIT_STATE_INSTANCE = 1,
            GEN_EDIT_STATE_MAIN = 2,
            GEN_EDIT_STATE_MAIN_INHERITED = 3,
        }
    }
    class PackedScene extends Resource {
        pack(path: Node): GodotError
        instantiate(edit_state: PackedScene.GenEditState = 0): Node
        can_instantiate(): boolean
        _set_bundled_scene(scene: Dictionary): void
        _get_bundled_scene(): Dictionary
        get_state(): SceneState
        _bundled: Dictionary
    }
    class PackedSceneEditorPlugin extends EditorPlugin {
    }
    class PackedSceneEditorTranslationParserPlugin extends EditorTranslationParserPlugin {
    }
    class PacketPeer extends RefCounted {
        get_var(allow_objects: boolean = false): any
        put_var(var_: any, full_objects: boolean = false): GodotError
        get_packet(): PackedByteArray
        put_packet(buffer: PackedByteArray): GodotError
        get_packet_error(): GodotError
        get_available_packet_count(): number /*i64*/
        get_encode_buffer_max_size(): number /*i64*/
        set_encode_buffer_max_size(max_size: number /*i64*/): void
        encode_buffer_max_size: number /*i64*/
    }
    namespace PacketPeerDTLS {
        enum Status {
            STATUS_DISCONNECTED = 0,
            STATUS_HANDSHAKING = 1,
            STATUS_CONNECTED = 2,
            STATUS_ERROR = 3,
            STATUS_ERROR_HOSTNAME_MISMATCH = 4,
        }
    }
    class PacketPeerDTLS extends PacketPeer {
        poll(): void
        connect_to_peer(packet_peer: PacketPeerUDP, hostname: string, client_options: TLSOptions = <any> {} /*compound.type from nil*/): GodotError
        get_status(): PacketPeerDTLS.Status
        disconnect_from_peer(): void
    }
    class PacketPeerExtension extends PacketPeer {
        /* gdvirtual */ _get_packet(r_buffer: number /*i64*/, r_buffer_size: number /*i64*/): GodotError
        /* gdvirtual */ _put_packet(p_buffer: number /*i64*/, p_buffer_size: number /*i64*/): GodotError
        /* gdvirtual */ _get_available_packet_count(): number /*i64*/
        /* gdvirtual */ _get_max_packet_size(): number /*i64*/
    }
    class PacketPeerStream extends PacketPeer {
        set_stream_peer(peer: StreamPeer): void
        get_stream_peer(): StreamPeer
        set_input_buffer_max_size(max_size_bytes: number /*i64*/): void
        set_output_buffer_max_size(max_size_bytes: number /*i64*/): void
        get_input_buffer_max_size(): number /*i64*/
        get_output_buffer_max_size(): number /*i64*/
        input_buffer_max_size: number /*i64*/
        output_buffer_max_size: number /*i64*/
        stream_peer: StreamPeer
    }
    class PacketPeerUDP extends PacketPeer {
        bind(port: number /*i64*/, bind_address: string = '*', recv_buf_size: number /*i64*/ = 65536): GodotError
        close(): void
        wait(): GodotError
        is_bound(): boolean
        connect_to_host(host: string, port: number /*i64*/): GodotError
        is_socket_connected(): boolean
        get_packet_ip(): string
        get_packet_port(): number /*i64*/
        get_local_port(): number /*i64*/
        set_dest_address(host: string, port: number /*i64*/): GodotError
        set_broadcast_enabled(enabled: boolean): void
        join_multicast_group(multicast_address: string, interface_name: string): GodotError
        leave_multicast_group(multicast_address: string, interface_name: string): GodotError
    }
    class Panel extends Control {
    }
    class PanelContainer extends Container {
    }
    class PanoramaSkyMaterial extends Material {
        set_panorama(texture: Texture2D): void
        get_panorama(): Texture2D
        set_filtering_enabled(enabled: boolean): void
        is_filtering_enabled(): boolean
        panorama: Texture2D
        filter: boolean
    }
    class PanoramaSkyMaterialConversionPlugin extends EditorResourceConversionPlugin {
    }
    class ParallaxBackground extends CanvasLayer {
        _camera_moved(_unnamed_arg0: Transform2D, _unnamed_arg1: Vector2): void
        set_scroll_offset(offset: Vector2): void
        get_scroll_offset(): Vector2
        set_scroll_base_offset(offset: Vector2): void
        get_scroll_base_offset(): Vector2
        set_scroll_base_scale(scale: Vector2): void
        get_scroll_base_scale(): Vector2
        set_limit_begin(offset: Vector2): void
        get_limit_begin(): Vector2
        set_limit_end(offset: Vector2): void
        get_limit_end(): Vector2
        set_ignore_camera_zoom(ignore: boolean): void
        is_ignore_camera_zoom(): boolean
        scroll_offset: Vector2
        scroll_base_offset: Vector2
        scroll_base_scale: Vector2
        scroll_limit_begin: Vector2
        scroll_limit_end: Vector2
        scroll_ignore_camera_zoom: boolean
    }
    class ParallaxLayer extends Node2D {
        set_motion_scale(scale: Vector2): void
        get_motion_scale(): Vector2
        set_motion_offset(offset: Vector2): void
        get_motion_offset(): Vector2
        set_mirroring(mirror: Vector2): void
        get_mirroring(): Vector2
        motion_scale: Vector2
        motion_offset: Vector2
        motion_mirroring: Vector2
    }
    namespace ParticleProcessMaterial {
        enum Parameter {
            PARAM_INITIAL_LINEAR_VELOCITY = 0,
            PARAM_ANGULAR_VELOCITY = 1,
            PARAM_ORBIT_VELOCITY = 2,
            PARAM_LINEAR_ACCEL = 3,
            PARAM_RADIAL_ACCEL = 4,
            PARAM_TANGENTIAL_ACCEL = 5,
            PARAM_DAMPING = 6,
            PARAM_ANGLE = 7,
            PARAM_SCALE = 8,
            PARAM_HUE_VARIATION = 9,
            PARAM_ANIM_SPEED = 10,
            PARAM_ANIM_OFFSET = 11,
            PARAM_RADIAL_VELOCITY = 15,
            PARAM_DIRECTIONAL_VELOCITY = 16,
            PARAM_SCALE_OVER_VELOCITY = 17,
            PARAM_MAX = 18,
            PARAM_TURB_VEL_INFLUENCE = 13,
            PARAM_TURB_INIT_DISPLACEMENT = 14,
            PARAM_TURB_INFLUENCE_OVER_LIFE = 12,
        }
        enum ParticleFlags {
            PARTICLE_FLAG_ALIGN_Y_TO_VELOCITY = 0,
            PARTICLE_FLAG_ROTATE_Y = 1,
            PARTICLE_FLAG_DISABLE_Z = 2,
            PARTICLE_FLAG_DAMPING_AS_FRICTION = 3,
            PARTICLE_FLAG_MAX = 4,
        }
        enum EmissionShape {
            EMISSION_SHAPE_POINT = 0,
            EMISSION_SHAPE_SPHERE = 1,
            EMISSION_SHAPE_SPHERE_SURFACE = 2,
            EMISSION_SHAPE_BOX = 3,
            EMISSION_SHAPE_POINTS = 4,
            EMISSION_SHAPE_DIRECTED_POINTS = 5,
            EMISSION_SHAPE_RING = 6,
            EMISSION_SHAPE_MAX = 7,
        }
        enum SubEmitterMode {
            SUB_EMITTER_DISABLED = 0,
            SUB_EMITTER_CONSTANT = 1,
            SUB_EMITTER_AT_END = 2,
            SUB_EMITTER_AT_COLLISION = 3,
            SUB_EMITTER_MAX = 4,
        }
        enum CollisionMode {
            COLLISION_DISABLED = 0,
            COLLISION_RIGID = 1,
            COLLISION_HIDE_ON_CONTACT = 2,
            COLLISION_MAX = 3,
        }
    }
    class ParticleProcessMaterial extends Material {
        set_direction(degrees: Vector3): void
        get_direction(): Vector3
        set_inherit_velocity_ratio(ratio: number /*f64*/): void
        get_inherit_velocity_ratio(): number /*f64*/
        set_spread(degrees: number /*f64*/): void
        get_spread(): number /*f64*/
        set_flatness(amount: number /*f64*/): void
        get_flatness(): number /*f64*/
        set_param_min(param: ParticleProcessMaterial.Parameter, value: number /*f64*/): void
        get_param_min(param: ParticleProcessMaterial.Parameter): number /*f64*/
        set_param_max(param: ParticleProcessMaterial.Parameter, value: number /*f64*/): void
        get_param_max(param: ParticleProcessMaterial.Parameter): number /*f64*/
        set_param_texture(param: ParticleProcessMaterial.Parameter, texture: Texture2D): void
        get_param_texture(param: ParticleProcessMaterial.Parameter): Texture2D
        set_color(color: Color): void
        get_color(): Color
        set_color_ramp(ramp: Texture2D): void
        get_color_ramp(): Texture2D
        set_alpha_curve(curve: Texture2D): void
        get_alpha_curve(): Texture2D
        set_emission_curve(curve: Texture2D): void
        get_emission_curve(): Texture2D
        set_color_initial_ramp(ramp: Texture2D): void
        get_color_initial_ramp(): Texture2D
        set_velocity_limit_curve(curve: Texture2D): void
        get_velocity_limit_curve(): Texture2D
        set_particle_flag(particle_flag: ParticleProcessMaterial.ParticleFlags, enable: boolean): void
        get_particle_flag(particle_flag: ParticleProcessMaterial.ParticleFlags): boolean
        set_velocity_pivot(pivot: Vector3): void
        get_velocity_pivot(): Vector3
        set_emission_shape(shape: ParticleProcessMaterial.EmissionShape): void
        get_emission_shape(): ParticleProcessMaterial.EmissionShape
        set_emission_sphere_radius(radius: number /*f64*/): void
        get_emission_sphere_radius(): number /*f64*/
        set_emission_box_extents(extents: Vector3): void
        get_emission_box_extents(): Vector3
        set_emission_point_texture(texture: Texture2D): void
        get_emission_point_texture(): Texture2D
        set_emission_normal_texture(texture: Texture2D): void
        get_emission_normal_texture(): Texture2D
        set_emission_color_texture(texture: Texture2D): void
        get_emission_color_texture(): Texture2D
        set_emission_point_count(point_count: number /*i64*/): void
        get_emission_point_count(): number /*i64*/
        set_emission_ring_axis(axis: Vector3): void
        get_emission_ring_axis(): Vector3
        set_emission_ring_height(height: number /*f64*/): void
        get_emission_ring_height(): number /*f64*/
        set_emission_ring_radius(radius: number /*f64*/): void
        get_emission_ring_radius(): number /*f64*/
        set_emission_ring_inner_radius(inner_radius: number /*f64*/): void
        get_emission_ring_inner_radius(): number /*f64*/
        set_emission_shape_offset(emission_shape_offset: Vector3): void
        get_emission_shape_offset(): Vector3
        set_emission_shape_scale(emission_shape_scale: Vector3): void
        get_emission_shape_scale(): Vector3
        get_turbulence_enabled(): boolean
        set_turbulence_enabled(turbulence_enabled: boolean): void
        get_turbulence_noise_strength(): number /*f64*/
        set_turbulence_noise_strength(turbulence_noise_strength: number /*f64*/): void
        get_turbulence_noise_scale(): number /*f64*/
        set_turbulence_noise_scale(turbulence_noise_scale: number /*f64*/): void
        get_turbulence_noise_speed_random(): number /*f64*/
        set_turbulence_noise_speed_random(turbulence_noise_speed_random: number /*f64*/): void
        get_turbulence_noise_speed(): Vector3
        set_turbulence_noise_speed(turbulence_noise_speed: Vector3): void
        get_gravity(): Vector3
        set_gravity(accel_vec: Vector3): void
        set_lifetime_randomness(randomness: number /*f64*/): void
        get_lifetime_randomness(): number /*f64*/
        get_sub_emitter_mode(): ParticleProcessMaterial.SubEmitterMode
        set_sub_emitter_mode(mode: ParticleProcessMaterial.SubEmitterMode): void
        get_sub_emitter_frequency(): number /*f64*/
        set_sub_emitter_frequency(hz: number /*f64*/): void
        get_sub_emitter_amount_at_end(): number /*i64*/
        set_sub_emitter_amount_at_end(amount: number /*i64*/): void
        get_sub_emitter_amount_at_collision(): number /*i64*/
        set_sub_emitter_amount_at_collision(amount: number /*i64*/): void
        get_sub_emitter_keep_velocity(): boolean
        set_sub_emitter_keep_velocity(enable: boolean): void
        set_attractor_interaction_enabled(enabled: boolean): void
        is_attractor_interaction_enabled(): boolean
        set_collision_mode(mode: ParticleProcessMaterial.CollisionMode): void
        get_collision_mode(): ParticleProcessMaterial.CollisionMode
        set_collision_use_scale(radius: boolean): void
        is_collision_using_scale(): boolean
        set_collision_friction(friction: number /*f64*/): void
        get_collision_friction(): number /*f64*/
        set_collision_bounce(bounce: number /*f64*/): void
        get_collision_bounce(): number /*f64*/
        lifetime_randomness: number /*f64*/
        emission_shape_offset: Vector3
        emission_shape_scale: Vector3
        emission_shape: number /*i64*/
        emission_sphere_radius: number /*f64*/
        emission_box_extents: Vector3
        emission_point_texture: Texture2D
        emission_normal_texture: Texture2D
        emission_color_texture: Texture2D
        emission_point_count: number /*i64*/
        emission_ring_axis: Vector3
        emission_ring_height: number /*f64*/
        emission_ring_radius: number /*f64*/
        emission_ring_inner_radius: number /*f64*/
        inherit_velocity_ratio: number /*f64*/
        velocity_pivot: Vector3
        direction: Vector3
        spread: number /*f64*/
        flatness: number /*f64*/
        velocity_limit_curve: CurveTexture
        gravity: Vector3
        attractor_interaction_enabled: boolean
        color: Color
        color_ramp: GradientTexture1D
        color_initial_ramp: GradientTexture1D
        alpha_curve: CurveTexture
        emission_curve: CurveTexture
        turbulence_enabled: boolean
        turbulence_noise_strength: number /*f64*/
        turbulence_noise_scale: number /*f64*/
        turbulence_noise_speed: Vector3
        turbulence_noise_speed_random: number /*f64*/
        collision_mode: number /*i64*/
        collision_friction: number /*f64*/
        collision_bounce: number /*f64*/
        collision_use_scale: boolean
        sub_emitter_mode: number /*i64*/
        sub_emitter_frequency: number /*f64*/
        sub_emitter_amount_at_end: number /*i64*/
        sub_emitter_amount_at_collision: number /*i64*/
        sub_emitter_keep_velocity: boolean
    }
    class ParticleProcessMaterialConversionPlugin extends EditorResourceConversionPlugin {
    }
    class Path2D extends Node2D {
        set_curve(curve: Curve2D): void
        get_curve(): Curve2D
        curve: Curve2D
    }
    class Path2DEditor extends HBoxContainer {
    }
    class Path2DEditorPlugin extends EditorPlugin {
    }
    class Path3D extends Node3D {
        set_curve(curve: Curve3D): void
        get_curve(): Curve3D
        curve: Curve3D
        readonly curve_changed: Signal
    }
    class Path3DEditorPlugin extends EditorPlugin {
    }
    class Path3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    class PathFollow2D extends Node2D {
        set_progress(progress: number /*f64*/): void
        get_progress(): number /*f64*/
        set_h_offset(h_offset: number /*f64*/): void
        get_h_offset(): number /*f64*/
        set_v_offset(v_offset: number /*f64*/): void
        get_v_offset(): number /*f64*/
        set_progress_ratio(ratio: number /*f64*/): void
        get_progress_ratio(): number /*f64*/
        set_rotates(enabled: boolean): void
        is_rotating(): boolean
        set_cubic_interpolation(enabled: boolean): void
        get_cubic_interpolation(): boolean
        set_loop(loop: boolean): void
        has_loop(): boolean
        progress: number /*f64*/
        progress_ratio: number /*f64*/
        h_offset: number /*f64*/
        v_offset: number /*f64*/
        rotates: boolean
        cubic_interp: boolean
        loop: boolean
    }
    namespace PathFollow3D {
        enum RotationMode {
            ROTATION_NONE = 0,
            ROTATION_Y = 1,
            ROTATION_XY = 2,
            ROTATION_XYZ = 3,
            ROTATION_ORIENTED = 4,
        }
    }
    class PathFollow3D extends Node3D {
        set_progress(progress: number /*f64*/): void
        get_progress(): number /*f64*/
        set_h_offset(h_offset: number /*f64*/): void
        get_h_offset(): number /*f64*/
        set_v_offset(v_offset: number /*f64*/): void
        get_v_offset(): number /*f64*/
        set_progress_ratio(ratio: number /*f64*/): void
        get_progress_ratio(): number /*f64*/
        set_rotation_mode(rotation_mode: PathFollow3D.RotationMode): void
        get_rotation_mode(): PathFollow3D.RotationMode
        set_cubic_interpolation(enabled: boolean): void
        get_cubic_interpolation(): boolean
        set_use_model_front(enabled: boolean): void
        is_using_model_front(): boolean
        set_loop(loop: boolean): void
        has_loop(): boolean
        set_tilt_enabled(enabled: boolean): void
        is_tilt_enabled(): boolean
        static correct_posture(transform: Transform3D, rotation_mode: PathFollow3D.RotationMode): Transform3D
        progress: number /*f64*/
        progress_ratio: number /*f64*/
        h_offset: number /*f64*/
        v_offset: number /*f64*/
        rotation_mode: number /*i64*/
        use_model_front: boolean
        cubic_interp: boolean
        loop: boolean
        tilt_enabled: boolean
    }
    class PhysicalBone2D extends RigidBody2D {
        get_joint(): Joint2D
        get_auto_configure_joint(): boolean
        set_auto_configure_joint(auto_configure_joint: boolean): void
        set_simulate_physics(simulate_physics: boolean): void
        get_simulate_physics(): boolean
        is_simulating_physics(): boolean
        set_bone2d_nodepath(nodepath: NodePath): void
        get_bone2d_nodepath(): NodePath
        set_bone2d_index(bone_index: number /*i64*/): void
        get_bone2d_index(): number /*i64*/
        set_follow_bone_when_simulating(follow_bone: boolean): void
        get_follow_bone_when_simulating(): boolean
        bone2d_nodepath: NodePath
        bone2d_index: number /*i64*/
        auto_configure_joint: boolean
        simulate_physics: boolean
        follow_bone_when_simulating: boolean
    }
    namespace PhysicalBone3D {
        enum DampMode {
            DAMP_MODE_COMBINE = 0,
            DAMP_MODE_REPLACE = 1,
        }
        enum JointType {
            JOINT_TYPE_NONE = 0,
            JOINT_TYPE_PIN = 1,
            JOINT_TYPE_CONE = 2,
            JOINT_TYPE_HINGE = 3,
            JOINT_TYPE_SLIDER = 4,
            JOINT_TYPE_6DOF = 5,
        }
    }
    class PhysicalBone3D extends PhysicsBody3D {
        /* gdvirtual */ _integrate_forces(state: PhysicsDirectBodyState3D): void
        apply_central_impulse(impulse: Vector3): void
        apply_impulse(impulse: Vector3, position: Vector3 = new Vector3(0, 0, 0)): void
        set_joint_type(joint_type: PhysicalBone3D.JointType): void
        get_joint_type(): PhysicalBone3D.JointType
        set_joint_offset(offset: Transform3D): void
        get_joint_offset(): Transform3D
        set_joint_rotation(euler: Vector3): void
        get_joint_rotation(): Vector3
        set_body_offset(offset: Transform3D): void
        get_body_offset(): Transform3D
        get_simulate_physics(): boolean
        is_simulating_physics(): boolean
        get_bone_id(): number /*i64*/
        set_mass(mass: number /*f64*/): void
        get_mass(): number /*f64*/
        set_friction(friction: number /*f64*/): void
        get_friction(): number /*f64*/
        set_bounce(bounce: number /*f64*/): void
        get_bounce(): number /*f64*/
        set_gravity_scale(gravity_scale: number /*f64*/): void
        get_gravity_scale(): number /*f64*/
        set_linear_damp_mode(linear_damp_mode: PhysicalBone3D.DampMode): void
        get_linear_damp_mode(): PhysicalBone3D.DampMode
        set_angular_damp_mode(angular_damp_mode: PhysicalBone3D.DampMode): void
        get_angular_damp_mode(): PhysicalBone3D.DampMode
        set_linear_damp(linear_damp: number /*f64*/): void
        get_linear_damp(): number /*f64*/
        set_angular_damp(angular_damp: number /*f64*/): void
        get_angular_damp(): number /*f64*/
        set_linear_velocity(linear_velocity: Vector3): void
        get_linear_velocity(): Vector3
        set_angular_velocity(angular_velocity: Vector3): void
        get_angular_velocity(): Vector3
        set_use_custom_integrator(enable: boolean): void
        is_using_custom_integrator(): boolean
        set_can_sleep(able_to_sleep: boolean): void
        is_able_to_sleep(): boolean
        joint_type: number /*i64*/
        joint_offset: Transform3D
        joint_rotation: Vector3
        body_offset: Transform3D
        mass: number /*f64*/
        friction: number /*f64*/
        bounce: number /*f64*/
        gravity_scale: number /*f64*/
        custom_integrator: boolean
        linear_damp_mode: number /*i64*/
        linear_damp: number /*f64*/
        angular_damp_mode: number /*i64*/
        angular_damp: number /*f64*/
        linear_velocity: Vector3
        angular_velocity: Vector3
        can_sleep: boolean
    }
    class PhysicalBone3DEditorPlugin extends EditorPlugin {
    }
    class PhysicalBone3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    class PhysicalSkyMaterial extends Material {
        set_rayleigh_coefficient(rayleigh: number /*f64*/): void
        get_rayleigh_coefficient(): number /*f64*/
        set_rayleigh_color(color: Color): void
        get_rayleigh_color(): Color
        set_mie_coefficient(mie: number /*f64*/): void
        get_mie_coefficient(): number /*f64*/
        set_mie_eccentricity(eccentricity: number /*f64*/): void
        get_mie_eccentricity(): number /*f64*/
        set_mie_color(color: Color): void
        get_mie_color(): Color
        set_turbidity(turbidity: number /*f64*/): void
        get_turbidity(): number /*f64*/
        set_sun_disk_scale(scale: number /*f64*/): void
        get_sun_disk_scale(): number /*f64*/
        set_ground_color(color: Color): void
        get_ground_color(): Color
        set_energy_multiplier(multiplier: number /*f64*/): void
        get_energy_multiplier(): number /*f64*/
        set_use_debanding(use_debanding: boolean): void
        get_use_debanding(): boolean
        set_night_sky(night_sky: Texture2D): void
        get_night_sky(): Texture2D
        rayleigh_coefficient: number /*f64*/
        rayleigh_color: Color
        mie_coefficient: number /*f64*/
        mie_eccentricity: number /*f64*/
        mie_color: Color
        turbidity: number /*f64*/
        sun_disk_scale: number /*f64*/
        ground_color: Color
        energy_multiplier: number /*f64*/
        use_debanding: boolean
        night_sky: Texture2D
    }
    class PhysicalSkyMaterialConversionPlugin extends EditorResourceConversionPlugin {
    }
    class PhysicsBody2D extends CollisionObject2D {
        move_and_collide(motion: Vector2, test_only: boolean = false, safe_margin: number /*f64*/ = 0.08, recovery_as_collision: boolean = false): KinematicCollision2D
        test_move(from: Transform2D, motion: Vector2, collision: KinematicCollision2D = <any> {} /*compound.type from nil*/, safe_margin: number /*f64*/ = 0.08, recovery_as_collision: boolean = false): boolean
        get_collision_exceptions(): Array
        add_collision_exception_with(body: Node): void
        remove_collision_exception_with(body: Node): void
    }
    class PhysicsBody3D extends CollisionObject3D {
        move_and_collide(motion: Vector3, test_only: boolean = false, safe_margin: number /*f64*/ = 0.001, recovery_as_collision: boolean = false, max_collisions: number /*i64*/ = 1): KinematicCollision3D
        test_move(from: Transform3D, motion: Vector3, collision: KinematicCollision3D = <any> {} /*compound.type from nil*/, safe_margin: number /*f64*/ = 0.001, recovery_as_collision: boolean = false, max_collisions: number /*i64*/ = 1): boolean
        set_axis_lock(axis: PhysicsServer3D.BodyAxis, lock: boolean): void
        get_axis_lock(axis: PhysicsServer3D.BodyAxis): boolean
        get_collision_exceptions(): Array
        add_collision_exception_with(body: Node): void
        remove_collision_exception_with(body: Node): void
    }
    class PhysicsDirectBodyState2D extends Object {
        get_total_gravity(): Vector2
        get_total_linear_damp(): number /*f64*/
        get_total_angular_damp(): number /*f64*/
        get_center_of_mass(): Vector2
        get_center_of_mass_local(): Vector2
        get_inverse_mass(): number /*f64*/
        get_inverse_inertia(): number /*f64*/
        set_linear_velocity(velocity: Vector2): void
        get_linear_velocity(): Vector2
        set_angular_velocity(velocity: number /*f64*/): void
        get_angular_velocity(): number /*f64*/
        set_transform(transform: Transform2D): void
        get_transform(): Transform2D
        get_velocity_at_local_position(local_position: Vector2): Vector2
        apply_central_impulse(impulse: Vector2): void
        apply_torque_impulse(impulse: number /*f64*/): void
        apply_impulse(impulse: Vector2, position: Vector2 = Vector2.ZERO): void
        apply_central_force(force: Vector2 = Vector2.ZERO): void
        apply_force(force: Vector2, position: Vector2 = Vector2.ZERO): void
        apply_torque(torque: number /*f64*/): void
        add_constant_central_force(force: Vector2 = Vector2.ZERO): void
        add_constant_force(force: Vector2, position: Vector2 = Vector2.ZERO): void
        add_constant_torque(torque: number /*f64*/): void
        set_constant_force(force: Vector2): void
        get_constant_force(): Vector2
        set_constant_torque(torque: number /*f64*/): void
        get_constant_torque(): number /*f64*/
        set_sleep_state(enabled: boolean): void
        is_sleeping(): boolean
        get_contact_count(): number /*i64*/
        get_contact_local_position(contact_idx: number /*i64*/): Vector2
        get_contact_local_normal(contact_idx: number /*i64*/): Vector2
        get_contact_local_shape(contact_idx: number /*i64*/): number /*i64*/
        get_contact_local_velocity_at_position(contact_idx: number /*i64*/): Vector2
        get_contact_collider(contact_idx: number /*i64*/): RID
        get_contact_collider_position(contact_idx: number /*i64*/): Vector2
        get_contact_collider_id(contact_idx: number /*i64*/): number /*i64*/
        get_contact_collider_object(contact_idx: number /*i64*/): Object
        get_contact_collider_shape(contact_idx: number /*i64*/): number /*i64*/
        get_contact_collider_velocity_at_position(contact_idx: number /*i64*/): Vector2
        get_contact_impulse(contact_idx: number /*i64*/): Vector2
        get_step(): number /*f64*/
        integrate_forces(): void
        get_space_state(): PhysicsDirectSpaceState2D
        readonly step: number /*f64*/
        readonly inverse_mass: number /*f64*/
        readonly inverse_inertia: number /*f64*/
        readonly total_angular_damp: number /*f64*/
        readonly total_linear_damp: number /*f64*/
        readonly total_gravity: Vector2
        readonly center_of_mass: Vector2
        readonly center_of_mass_local: Vector2
        angular_velocity: number /*f64*/
        linear_velocity: Vector2
        sleeping: boolean
        transform: Transform2D
    }
    class PhysicsDirectBodyState2DExtension extends PhysicsDirectBodyState2D {
        /* gdvirtual */ _get_total_gravity(): Vector2
        /* gdvirtual */ _get_total_linear_damp(): number /*f64*/
        /* gdvirtual */ _get_total_angular_damp(): number /*f64*/
        /* gdvirtual */ _get_center_of_mass(): Vector2
        /* gdvirtual */ _get_center_of_mass_local(): Vector2
        /* gdvirtual */ _get_inverse_mass(): number /*f64*/
        /* gdvirtual */ _get_inverse_inertia(): number /*f64*/
        /* gdvirtual */ _set_linear_velocity(velocity: Vector2): void
        /* gdvirtual */ _get_linear_velocity(): Vector2
        /* gdvirtual */ _set_angular_velocity(velocity: number /*f64*/): void
        /* gdvirtual */ _get_angular_velocity(): number /*f64*/
        /* gdvirtual */ _set_transform(transform: Transform2D): void
        /* gdvirtual */ _get_transform(): Transform2D
        /* gdvirtual */ _get_velocity_at_local_position(local_position: Vector2): Vector2
        /* gdvirtual */ _apply_central_impulse(impulse: Vector2): void
        /* gdvirtual */ _apply_impulse(impulse: Vector2, position: Vector2): void
        /* gdvirtual */ _apply_torque_impulse(impulse: number /*f64*/): void
        /* gdvirtual */ _apply_central_force(force: Vector2): void
        /* gdvirtual */ _apply_force(force: Vector2, position: Vector2): void
        /* gdvirtual */ _apply_torque(torque: number /*f64*/): void
        /* gdvirtual */ _add_constant_central_force(force: Vector2): void
        /* gdvirtual */ _add_constant_force(force: Vector2, position: Vector2): void
        /* gdvirtual */ _add_constant_torque(torque: number /*f64*/): void
        /* gdvirtual */ _set_constant_force(force: Vector2): void
        /* gdvirtual */ _get_constant_force(): Vector2
        /* gdvirtual */ _set_constant_torque(torque: number /*f64*/): void
        /* gdvirtual */ _get_constant_torque(): number /*f64*/
        /* gdvirtual */ _set_sleep_state(enabled: boolean): void
        /* gdvirtual */ _is_sleeping(): boolean
        /* gdvirtual */ _get_contact_count(): number /*i64*/
        /* gdvirtual */ _get_contact_local_position(contact_idx: number /*i64*/): Vector2
        /* gdvirtual */ _get_contact_local_normal(contact_idx: number /*i64*/): Vector2
        /* gdvirtual */ _get_contact_local_shape(contact_idx: number /*i64*/): number /*i64*/
        /* gdvirtual */ _get_contact_local_velocity_at_position(contact_idx: number /*i64*/): Vector2
        /* gdvirtual */ _get_contact_collider(contact_idx: number /*i64*/): RID
        /* gdvirtual */ _get_contact_collider_position(contact_idx: number /*i64*/): Vector2
        /* gdvirtual */ _get_contact_collider_id(contact_idx: number /*i64*/): number /*i64*/
        /* gdvirtual */ _get_contact_collider_object(contact_idx: number /*i64*/): Object
        /* gdvirtual */ _get_contact_collider_shape(contact_idx: number /*i64*/): number /*i64*/
        /* gdvirtual */ _get_contact_collider_velocity_at_position(contact_idx: number /*i64*/): Vector2
        /* gdvirtual */ _get_contact_impulse(contact_idx: number /*i64*/): Vector2
        /* gdvirtual */ _get_step(): number /*f64*/
        /* gdvirtual */ _integrate_forces(): void
        /* gdvirtual */ _get_space_state(): PhysicsDirectSpaceState2D
    }
    class PhysicsDirectBodyState3D extends Object {
        get_total_gravity(): Vector3
        get_total_linear_damp(): number /*f64*/
        get_total_angular_damp(): number /*f64*/
        get_center_of_mass(): Vector3
        get_center_of_mass_local(): Vector3
        get_principal_inertia_axes(): Basis
        get_inverse_mass(): number /*f64*/
        get_inverse_inertia(): Vector3
        get_inverse_inertia_tensor(): Basis
        set_linear_velocity(velocity: Vector3): void
        get_linear_velocity(): Vector3
        set_angular_velocity(velocity: Vector3): void
        get_angular_velocity(): Vector3
        set_transform(transform: Transform3D): void
        get_transform(): Transform3D
        get_velocity_at_local_position(local_position: Vector3): Vector3
        apply_central_impulse(impulse: Vector3 = new Vector3(0, 0, 0)): void
        apply_impulse(impulse: Vector3, position: Vector3 = new Vector3(0, 0, 0)): void
        apply_torque_impulse(impulse: Vector3): void
        apply_central_force(force: Vector3 = new Vector3(0, 0, 0)): void
        apply_force(force: Vector3, position: Vector3 = new Vector3(0, 0, 0)): void
        apply_torque(torque: Vector3): void
        add_constant_central_force(force: Vector3 = new Vector3(0, 0, 0)): void
        add_constant_force(force: Vector3, position: Vector3 = new Vector3(0, 0, 0)): void
        add_constant_torque(torque: Vector3): void
        set_constant_force(force: Vector3): void
        get_constant_force(): Vector3
        set_constant_torque(torque: Vector3): void
        get_constant_torque(): Vector3
        set_sleep_state(enabled: boolean): void
        is_sleeping(): boolean
        get_contact_count(): number /*i64*/
        get_contact_local_position(contact_idx: number /*i64*/): Vector3
        get_contact_local_normal(contact_idx: number /*i64*/): Vector3
        get_contact_impulse(contact_idx: number /*i64*/): Vector3
        get_contact_local_shape(contact_idx: number /*i64*/): number /*i64*/
        get_contact_local_velocity_at_position(contact_idx: number /*i64*/): Vector3
        get_contact_collider(contact_idx: number /*i64*/): RID
        get_contact_collider_position(contact_idx: number /*i64*/): Vector3
        get_contact_collider_id(contact_idx: number /*i64*/): number /*i64*/
        get_contact_collider_object(contact_idx: number /*i64*/): Object
        get_contact_collider_shape(contact_idx: number /*i64*/): number /*i64*/
        get_contact_collider_velocity_at_position(contact_idx: number /*i64*/): Vector3
        get_step(): number /*f64*/
        integrate_forces(): void
        get_space_state(): PhysicsDirectSpaceState3D
        readonly step: number /*f64*/
        readonly inverse_mass: number /*f64*/
        readonly total_angular_damp: number /*f64*/
        readonly total_linear_damp: number /*f64*/
        readonly inverse_inertia: Vector3
        readonly inverse_inertia_tensor: Basis
        readonly total_gravity: Vector3
        readonly center_of_mass: Vector3
        readonly center_of_mass_local: Vector3
        readonly principal_inertia_axes: Basis
        angular_velocity: Vector3
        linear_velocity: Vector3
        sleeping: boolean
        transform: Transform3D
    }
    class PhysicsDirectBodyState3DExtension extends PhysicsDirectBodyState3D {
        /* gdvirtual */ _get_total_gravity(): Vector3
        /* gdvirtual */ _get_total_linear_damp(): number /*f64*/
        /* gdvirtual */ _get_total_angular_damp(): number /*f64*/
        /* gdvirtual */ _get_center_of_mass(): Vector3
        /* gdvirtual */ _get_center_of_mass_local(): Vector3
        /* gdvirtual */ _get_principal_inertia_axes(): Basis
        /* gdvirtual */ _get_inverse_mass(): number /*f64*/
        /* gdvirtual */ _get_inverse_inertia(): Vector3
        /* gdvirtual */ _get_inverse_inertia_tensor(): Basis
        /* gdvirtual */ _set_linear_velocity(velocity: Vector3): void
        /* gdvirtual */ _get_linear_velocity(): Vector3
        /* gdvirtual */ _set_angular_velocity(velocity: Vector3): void
        /* gdvirtual */ _get_angular_velocity(): Vector3
        /* gdvirtual */ _set_transform(transform: Transform3D): void
        /* gdvirtual */ _get_transform(): Transform3D
        /* gdvirtual */ _get_velocity_at_local_position(local_position: Vector3): Vector3
        /* gdvirtual */ _apply_central_impulse(impulse: Vector3): void
        /* gdvirtual */ _apply_impulse(impulse: Vector3, position: Vector3): void
        /* gdvirtual */ _apply_torque_impulse(impulse: Vector3): void
        /* gdvirtual */ _apply_central_force(force: Vector3): void
        /* gdvirtual */ _apply_force(force: Vector3, position: Vector3): void
        /* gdvirtual */ _apply_torque(torque: Vector3): void
        /* gdvirtual */ _add_constant_central_force(force: Vector3): void
        /* gdvirtual */ _add_constant_force(force: Vector3, position: Vector3): void
        /* gdvirtual */ _add_constant_torque(torque: Vector3): void
        /* gdvirtual */ _set_constant_force(force: Vector3): void
        /* gdvirtual */ _get_constant_force(): Vector3
        /* gdvirtual */ _set_constant_torque(torque: Vector3): void
        /* gdvirtual */ _get_constant_torque(): Vector3
        /* gdvirtual */ _set_sleep_state(enabled: boolean): void
        /* gdvirtual */ _is_sleeping(): boolean
        /* gdvirtual */ _get_contact_count(): number /*i64*/
        /* gdvirtual */ _get_contact_local_position(contact_idx: number /*i64*/): Vector3
        /* gdvirtual */ _get_contact_local_normal(contact_idx: number /*i64*/): Vector3
        /* gdvirtual */ _get_contact_impulse(contact_idx: number /*i64*/): Vector3
        /* gdvirtual */ _get_contact_local_shape(contact_idx: number /*i64*/): number /*i64*/
        /* gdvirtual */ _get_contact_local_velocity_at_position(contact_idx: number /*i64*/): Vector3
        /* gdvirtual */ _get_contact_collider(contact_idx: number /*i64*/): RID
        /* gdvirtual */ _get_contact_collider_position(contact_idx: number /*i64*/): Vector3
        /* gdvirtual */ _get_contact_collider_id(contact_idx: number /*i64*/): number /*i64*/
        /* gdvirtual */ _get_contact_collider_object(contact_idx: number /*i64*/): Object
        /* gdvirtual */ _get_contact_collider_shape(contact_idx: number /*i64*/): number /*i64*/
        /* gdvirtual */ _get_contact_collider_velocity_at_position(contact_idx: number /*i64*/): Vector3
        /* gdvirtual */ _get_step(): number /*f64*/
        /* gdvirtual */ _integrate_forces(): void
        /* gdvirtual */ _get_space_state(): PhysicsDirectSpaceState3D
    }
    class PhysicsDirectSpaceState2D extends Object {
        intersect_point(parameters: PhysicsPointQueryParameters2D, max_results: number /*i64*/ = 32): Array
        intersect_ray(parameters: PhysicsRayQueryParameters2D): Dictionary
        intersect_shape(parameters: PhysicsShapeQueryParameters2D, max_results: number /*i64*/ = 32): Array
        cast_motion(parameters: PhysicsShapeQueryParameters2D): PackedFloat32Array
        collide_shape(parameters: PhysicsShapeQueryParameters2D, max_results: number /*i64*/ = 32): Array
        get_rest_info(parameters: PhysicsShapeQueryParameters2D): Dictionary
    }
    class PhysicsDirectSpaceState2DExtension extends PhysicsDirectSpaceState2D {
        /* gdvirtual */ _intersect_ray(from: Vector2, to: Vector2, collision_mask: number /*i64*/, collide_with_bodies: boolean, collide_with_areas: boolean, hit_from_inside: boolean, result: number /*i64*/): boolean
        /* gdvirtual */ _intersect_point(position: Vector2, canvas_instance_id: number /*i64*/, collision_mask: number /*i64*/, collide_with_bodies: boolean, collide_with_areas: boolean, results: number /*i64*/, max_results: number /*i64*/): number /*i64*/
        /* gdvirtual */ _intersect_shape(shape_rid: RID, transform: Transform2D, motion: Vector2, margin: number /*f64*/, collision_mask: number /*i64*/, collide_with_bodies: boolean, collide_with_areas: boolean, result: number /*i64*/, max_results: number /*i64*/): number /*i64*/
        /* gdvirtual */ _cast_motion(shape_rid: RID, transform: Transform2D, motion: Vector2, margin: number /*f64*/, collision_mask: number /*i64*/, collide_with_bodies: boolean, collide_with_areas: boolean, closest_safe: number /*i64*/, closest_unsafe: number /*i64*/): boolean
        /* gdvirtual */ _collide_shape(shape_rid: RID, transform: Transform2D, motion: Vector2, margin: number /*f64*/, collision_mask: number /*i64*/, collide_with_bodies: boolean, collide_with_areas: boolean, results: number /*i64*/, max_results: number /*i64*/, result_count: number /*i64*/): boolean
        /* gdvirtual */ _rest_info(shape_rid: RID, transform: Transform2D, motion: Vector2, margin: number /*f64*/, collision_mask: number /*i64*/, collide_with_bodies: boolean, collide_with_areas: boolean, rest_info: number /*i64*/): boolean
        is_body_excluded_from_query(body: RID): boolean
    }
    class PhysicsDirectSpaceState3D extends Object {
        intersect_point(parameters: PhysicsPointQueryParameters3D, max_results: number /*i64*/ = 32): Array
        intersect_ray(parameters: PhysicsRayQueryParameters3D): Dictionary
        intersect_shape(parameters: PhysicsShapeQueryParameters3D, max_results: number /*i64*/ = 32): Array
        cast_motion(parameters: PhysicsShapeQueryParameters3D): PackedFloat32Array
        collide_shape(parameters: PhysicsShapeQueryParameters3D, max_results: number /*i64*/ = 32): Array
        get_rest_info(parameters: PhysicsShapeQueryParameters3D): Dictionary
    }
    class PhysicsDirectSpaceState3DExtension extends PhysicsDirectSpaceState3D {
        /* gdvirtual */ _intersect_ray(from: Vector3, to: Vector3, collision_mask: number /*i64*/, collide_with_bodies: boolean, collide_with_areas: boolean, hit_from_inside: boolean, hit_back_faces: boolean, pick_ray: boolean, result: number /*i64*/): boolean
        /* gdvirtual */ _intersect_point(position: Vector3, collision_mask: number /*i64*/, collide_with_bodies: boolean, collide_with_areas: boolean, results: number /*i64*/, max_results: number /*i64*/): number /*i64*/
        /* gdvirtual */ _intersect_shape(shape_rid: RID, transform: Transform3D, motion: Vector3, margin: number /*f64*/, collision_mask: number /*i64*/, collide_with_bodies: boolean, collide_with_areas: boolean, result_count: number /*i64*/, max_results: number /*i64*/): number /*i64*/
        /* gdvirtual */ _cast_motion(shape_rid: RID, transform: Transform3D, motion: Vector3, margin: number /*f64*/, collision_mask: number /*i64*/, collide_with_bodies: boolean, collide_with_areas: boolean, closest_safe: number /*i64*/, closest_unsafe: number /*i64*/, info: number /*i64*/): boolean
        /* gdvirtual */ _collide_shape(shape_rid: RID, transform: Transform3D, motion: Vector3, margin: number /*f64*/, collision_mask: number /*i64*/, collide_with_bodies: boolean, collide_with_areas: boolean, results: number /*i64*/, max_results: number /*i64*/, result_count: number /*i64*/): boolean
        /* gdvirtual */ _rest_info(shape_rid: RID, transform: Transform3D, motion: Vector3, margin: number /*f64*/, collision_mask: number /*i64*/, collide_with_bodies: boolean, collide_with_areas: boolean, rest_info: number /*i64*/): boolean
        /* gdvirtual */ _get_closest_point_to_object_volume(object: RID, point: Vector3): Vector3
        is_body_excluded_from_query(body: RID): boolean
    }
    class PhysicsMaterial extends Resource {
        set_friction(friction: number /*f64*/): void
        get_friction(): number /*f64*/
        set_rough(rough: boolean): void
        is_rough(): boolean
        set_bounce(bounce: number /*f64*/): void
        get_bounce(): number /*f64*/
        set_absorbent(absorbent: boolean): void
        is_absorbent(): boolean
        friction: number /*f64*/
        rough: boolean
        bounce: number /*f64*/
        absorbent: boolean
    }
    class PhysicsPointQueryParameters2D extends RefCounted {
        set_position(position: Vector2): void
        get_position(): Vector2
        set_canvas_instance_id(canvas_instance_id: number /*i64*/): void
        get_canvas_instance_id(): number /*i64*/
        set_collision_mask(collision_mask: number /*i64*/): void
        get_collision_mask(): number /*i64*/
        set_exclude(exclude: Array): void
        get_exclude(): Array
        set_collide_with_bodies(enable: boolean): void
        is_collide_with_bodies_enabled(): boolean
        set_collide_with_areas(enable: boolean): void
        is_collide_with_areas_enabled(): boolean
        position: Vector2
        canvas_instance_id: number /*i64*/
        collision_mask: number /*i64*/
        exclude: Array
        collide_with_bodies: boolean
        collide_with_areas: boolean
    }
    class PhysicsPointQueryParameters3D extends RefCounted {
        set_position(position: Vector3): void
        get_position(): Vector3
        set_collision_mask(collision_mask: number /*i64*/): void
        get_collision_mask(): number /*i64*/
        set_exclude(exclude: Array): void
        get_exclude(): Array
        set_collide_with_bodies(enable: boolean): void
        is_collide_with_bodies_enabled(): boolean
        set_collide_with_areas(enable: boolean): void
        is_collide_with_areas_enabled(): boolean
        position: Vector3
        collision_mask: number /*i64*/
        exclude: Array
        collide_with_bodies: boolean
        collide_with_areas: boolean
    }
    class PhysicsRayQueryParameters2D extends RefCounted {
        static create(from: Vector2, to: Vector2, collision_mask: number /*i64*/ = -1, exclude: Array = <any> {} /*compound.type from 28([object Object])*/): PhysicsRayQueryParameters2D
        set_from(from: Vector2): void
        get_from(): Vector2
        set_to(to: Vector2): void
        get_to(): Vector2
        set_collision_mask(collision_mask: number /*i64*/): void
        get_collision_mask(): number /*i64*/
        set_exclude(exclude: Array): void
        get_exclude(): Array
        set_collide_with_bodies(enable: boolean): void
        is_collide_with_bodies_enabled(): boolean
        set_collide_with_areas(enable: boolean): void
        is_collide_with_areas_enabled(): boolean
        set_hit_from_inside(enable: boolean): void
        is_hit_from_inside_enabled(): boolean
        from: Vector2
        to: Vector2
        collision_mask: number /*i64*/
        exclude: Array
        collide_with_bodies: boolean
        collide_with_areas: boolean
        hit_from_inside: boolean
    }
    class PhysicsRayQueryParameters3D extends RefCounted {
        static create(from: Vector3, to: Vector3, collision_mask: number /*i64*/ = -1, exclude: Array = <any> {} /*compound.type from 28([object Object])*/): PhysicsRayQueryParameters3D
        set_from(from: Vector3): void
        get_from(): Vector3
        set_to(to: Vector3): void
        get_to(): Vector3
        set_collision_mask(collision_mask: number /*i64*/): void
        get_collision_mask(): number /*i64*/
        set_exclude(exclude: Array): void
        get_exclude(): Array
        set_collide_with_bodies(enable: boolean): void
        is_collide_with_bodies_enabled(): boolean
        set_collide_with_areas(enable: boolean): void
        is_collide_with_areas_enabled(): boolean
        set_hit_from_inside(enable: boolean): void
        is_hit_from_inside_enabled(): boolean
        set_hit_back_faces(enable: boolean): void
        is_hit_back_faces_enabled(): boolean
        from: Vector3
        to: Vector3
        collision_mask: number /*i64*/
        exclude: Array
        collide_with_bodies: boolean
        collide_with_areas: boolean
        hit_from_inside: boolean
        hit_back_faces: boolean
    }
    class PhysicsServer3DRenderingServerHandler extends Object {
        /* gdvirtual */ _set_vertex(vertex_id: number /*i64*/, vertex: Vector3): void
        /* gdvirtual */ _set_normal(vertex_id: number /*i64*/, normal: Vector3): void
        /* gdvirtual */ _set_aabb(aabb: AABB): void
        set_vertex(vertex_id: number /*i64*/, vertex: Vector3): void
        set_normal(vertex_id: number /*i64*/, normal: Vector3): void
        set_aabb(aabb: AABB): void
    }
    class PhysicsShapeQueryParameters2D extends RefCounted {
        set_shape(shape: Resource): void
        get_shape(): Resource
        set_shape_rid(shape: RID): void
        get_shape_rid(): RID
        set_transform(transform: Transform2D): void
        get_transform(): Transform2D
        set_motion(motion: Vector2): void
        get_motion(): Vector2
        set_margin(margin: number /*f64*/): void
        get_margin(): number /*f64*/
        set_collision_mask(collision_mask: number /*i64*/): void
        get_collision_mask(): number /*i64*/
        set_exclude(exclude: Array): void
        get_exclude(): Array
        set_collide_with_bodies(enable: boolean): void
        is_collide_with_bodies_enabled(): boolean
        set_collide_with_areas(enable: boolean): void
        is_collide_with_areas_enabled(): boolean
        collision_mask: number /*i64*/
        exclude: Array
        margin: number /*f64*/
        motion: Vector2
        shape: Shape2D
        shape_rid: RID
        transform: Transform2D
        collide_with_bodies: boolean
        collide_with_areas: boolean
    }
    class PhysicsShapeQueryParameters3D extends RefCounted {
        set_shape(shape: Resource): void
        get_shape(): Resource
        set_shape_rid(shape: RID): void
        get_shape_rid(): RID
        set_transform(transform: Transform3D): void
        get_transform(): Transform3D
        set_motion(motion: Vector3): void
        get_motion(): Vector3
        set_margin(margin: number /*f64*/): void
        get_margin(): number /*f64*/
        set_collision_mask(collision_mask: number /*i64*/): void
        get_collision_mask(): number /*i64*/
        set_exclude(exclude: Array): void
        get_exclude(): Array
        set_collide_with_bodies(enable: boolean): void
        is_collide_with_bodies_enabled(): boolean
        set_collide_with_areas(enable: boolean): void
        is_collide_with_areas_enabled(): boolean
        collision_mask: number /*i64*/
        exclude: Array
        margin: number /*f64*/
        motion: Vector2
        shape: Shape3D
        shape_rid: RID
        transform: Transform3D
        collide_with_bodies: boolean
        collide_with_areas: boolean
    }
    class PhysicsTestMotionParameters2D extends RefCounted {
        get_from(): Transform2D
        set_from(from: Transform2D): void
        get_motion(): Vector2
        set_motion(motion: Vector2): void
        get_margin(): number /*f64*/
        set_margin(margin: number /*f64*/): void
        is_collide_separation_ray_enabled(): boolean
        set_collide_separation_ray_enabled(enabled: boolean): void
        get_exclude_bodies(): Array
        set_exclude_bodies(exclude_list: Array): void
        get_exclude_objects(): Array
        set_exclude_objects(exclude_list: Array): void
        is_recovery_as_collision_enabled(): boolean
        set_recovery_as_collision_enabled(enabled: boolean): void
        from: Transform2D
        motion: Vector2
        margin: number /*f64*/
        collide_separation_ray: boolean
        exclude_bodies: Array
        exclude_objects: Array
        recovery_as_collision: boolean
    }
    class PhysicsTestMotionParameters3D extends RefCounted {
        get_from(): Transform3D
        set_from(from: Transform3D): void
        get_motion(): Vector3
        set_motion(motion: Vector3): void
        get_margin(): number /*f64*/
        set_margin(margin: number /*f64*/): void
        get_max_collisions(): number /*i64*/
        set_max_collisions(max_collisions: number /*i64*/): void
        is_collide_separation_ray_enabled(): boolean
        set_collide_separation_ray_enabled(enabled: boolean): void
        get_exclude_bodies(): Array
        set_exclude_bodies(exclude_list: Array): void
        get_exclude_objects(): Array
        set_exclude_objects(exclude_list: Array): void
        is_recovery_as_collision_enabled(): boolean
        set_recovery_as_collision_enabled(enabled: boolean): void
        from: Transform3D
        motion: Vector3
        margin: number /*f64*/
        max_collisions: number /*i64*/
        collide_separation_ray: boolean
        exclude_bodies: Array
        exclude_objects: Array
        recovery_as_collision: boolean
    }
    class PhysicsTestMotionResult2D extends RefCounted {
        get_travel(): Vector2
        get_remainder(): Vector2
        get_collision_point(): Vector2
        get_collision_normal(): Vector2
        get_collider_velocity(): Vector2
        get_collider_id(): number /*i64*/
        get_collider_rid(): RID
        get_collider(): Object
        get_collider_shape(): number /*i64*/
        get_collision_local_shape(): number /*i64*/
        get_collision_depth(): number /*f64*/
        get_collision_safe_fraction(): number /*f64*/
        get_collision_unsafe_fraction(): number /*f64*/
    }
    class PhysicsTestMotionResult3D extends RefCounted {
        get_travel(): Vector3
        get_remainder(): Vector3
        get_collision_safe_fraction(): number /*f64*/
        get_collision_unsafe_fraction(): number /*f64*/
        get_collision_count(): number /*i64*/
        get_collision_point(collision_index: number /*i64*/ = 0): Vector3
        get_collision_normal(collision_index: number /*i64*/ = 0): Vector3
        get_collider_velocity(collision_index: number /*i64*/ = 0): Vector3
        get_collider_id(collision_index: number /*i64*/ = 0): number /*i64*/
        get_collider_rid(collision_index: number /*i64*/ = 0): RID
        get_collider(collision_index: number /*i64*/ = 0): Object
        get_collider_shape(collision_index: number /*i64*/ = 0): number /*i64*/
        get_collision_local_shape(collision_index: number /*i64*/ = 0): number /*i64*/
        get_collision_depth(collision_index: number /*i64*/ = 0): number /*f64*/
    }
    class PinJoint2D extends Joint2D {
        set_softness(softness: number /*f64*/): void
        get_softness(): number /*f64*/
        set_angular_limit_lower(angular_limit_lower: number /*f64*/): void
        get_angular_limit_lower(): number /*f64*/
        set_angular_limit_upper(angular_limit_upper: number /*f64*/): void
        get_angular_limit_upper(): number /*f64*/
        set_motor_target_velocity(motor_target_velocity: number /*f64*/): void
        get_motor_target_velocity(): number /*f64*/
        set_motor_enabled(enabled: boolean): void
        is_motor_enabled(): boolean
        set_angular_limit_enabled(enabled: boolean): void
        is_angular_limit_enabled(): boolean
        softness: number /*f64*/
        angular_limit_enabled: boolean
        angular_limit_lower: number /*f64*/
        angular_limit_upper: number /*f64*/
        motor_enabled: boolean
        motor_target_velocity: number /*f64*/
    }
    namespace PinJoint3D {
        enum Param {
            PARAM_BIAS = 0,
            PARAM_DAMPING = 1,
            PARAM_IMPULSE_CLAMP = 2,
        }
    }
    class PinJoint3D extends Joint3D {
        set_param(param: PinJoint3D.Param, value: number /*f64*/): void
        get_param(param: PinJoint3D.Param): number /*f64*/
    }
    class PlaceholderCubemap extends PlaceholderTextureLayered {
    }
    class PlaceholderCubemapArray extends PlaceholderTextureLayered {
    }
    class PlaceholderMaterial extends Material {
    }
    class PlaceholderMesh extends Mesh {
        set_aabb(aabb: AABB): void
        aabb: AABB
    }
    class PlaceholderTexture2D extends Texture2D {
        set_size(size: Vector2): void
        size: Vector2
    }
    class PlaceholderTexture2DArray extends PlaceholderTextureLayered {
    }
    class PlaceholderTexture3D extends Texture3D {
        set_size(size: Vector3i): void
        get_size(): Vector3i
        size: Vector3i
    }
    class PlaceholderTextureLayered extends TextureLayered {
        set_size(size: Vector2i): void
        get_size(): Vector2i
        set_layers(layers: number /*i64*/): void
        size: Vector2i
        layers: number /*i64*/
    }
    namespace PlaneMesh {
        enum Orientation {
            FACE_X = 0,
            FACE_Y = 1,
            FACE_Z = 2,
        }
    }
    class PlaneMesh extends PrimitiveMesh {
        set_size(size: Vector2): void
        get_size(): Vector2
        set_subdivide_width(subdivide: number /*i64*/): void
        get_subdivide_width(): number /*i64*/
        set_subdivide_depth(subdivide: number /*i64*/): void
        get_subdivide_depth(): number /*i64*/
        set_center_offset(offset: Vector3): void
        get_center_offset(): Vector3
        set_orientation(orientation: PlaneMesh.Orientation): void
        get_orientation(): PlaneMesh.Orientation
        size: Vector2
        subdivide_width: number /*i64*/
        subdivide_depth: number /*i64*/
        center_offset: Vector3
        orientation: number /*i64*/
    }
    class PluginConfigDialog extends ConfirmationDialog {
        readonly plugin_ready: Signal
    }
    class PointLight2D extends Light2D {
        set_texture(texture: Texture2D): void
        get_texture(): Texture2D
        set_texture_offset(texture_offset: Vector2): void
        get_texture_offset(): Vector2
        set_texture_scale(texture_scale: number /*f64*/): void
        get_texture_scale(): number /*f64*/
        texture: Texture2D
        offset: Vector2
        texture_scale: number /*f64*/
        height: number /*f64*/
    }
    class PointMesh extends PrimitiveMesh {
    }
    class Polygon2D extends Node2D {
        set_polygon(polygon: PackedVector2Array): void
        get_polygon(): PackedVector2Array
        set_uv(uv: PackedVector2Array): void
        get_uv(): PackedVector2Array
        set_color(color: Color): void
        get_color(): Color
        set_polygons(polygons: Array): void
        get_polygons(): Array
        set_vertex_colors(vertex_colors: PackedColorArray): void
        get_vertex_colors(): PackedColorArray
        set_texture(texture: Texture2D): void
        get_texture(): Texture2D
        set_texture_offset(texture_offset: Vector2): void
        get_texture_offset(): Vector2
        set_texture_rotation(texture_rotation: number /*f64*/): void
        get_texture_rotation(): number /*f64*/
        set_texture_scale(texture_scale: Vector2): void
        get_texture_scale(): Vector2
        set_invert_enabled(invert: boolean): void
        get_invert_enabled(): boolean
        set_antialiased(antialiased: boolean): void
        get_antialiased(): boolean
        set_invert_border(invert_border: number /*f64*/): void
        get_invert_border(): number /*f64*/
        set_offset(offset: Vector2): void
        get_offset(): Vector2
        add_bone(path: NodePath, weights: PackedFloat32Array): void
        get_bone_count(): number /*i64*/
        get_bone_path(index: number /*i64*/): NodePath
        get_bone_weights(index: number /*i64*/): PackedFloat32Array
        erase_bone(index: number /*i64*/): void
        clear_bones(): void
        set_bone_path(index: number /*i64*/, path: NodePath): void
        set_bone_weights(index: number /*i64*/, weights: PackedFloat32Array): void
        set_skeleton(skeleton: NodePath): void
        get_skeleton(): NodePath
        set_internal_vertex_count(internal_vertex_count: number /*i64*/): void
        get_internal_vertex_count(): number /*i64*/
        _set_bones(bones: Array): void
        _get_bones(): Array
        color: Color
        offset: Vector2
        antialiased: boolean
        texture: Texture2D
        texture_offset: Vector2
        texture_scale: Vector2
        texture_rotation: number /*f64*/
        skeleton: NodePath
        invert_enabled: boolean
        invert_border: number /*f64*/
        polygon: PackedVector2Array
        uv: PackedVector2Array
        vertex_colors: PackedColorArray
        polygons: Array
        bones: Array
        internal_vertex_count: number /*i64*/
    }
    class Polygon2DEditor extends AbstractPolygon2DEditor {
        _update_bone_list(): void
        _update_polygon_editing_state(): void
    }
    class Polygon2DEditorPlugin extends AbstractPolygon2DEditorPlugin {
    }
    class Polygon3DEditor extends HBoxContainer {
        _polygon_draw(): void
    }
    class Polygon3DEditorPlugin extends EditorPlugin {
    }
    class PolygonOccluder3D extends Occluder3D {
        set_polygon(polygon: PackedVector2Array): void
        get_polygon(): PackedVector2Array
        _has_editable_3d_polygon_no_depth(): boolean
        polygon: PackedVector2Array
    }
    class PolygonPathFinder extends Resource {
        setup(points: PackedVector2Array, connections: PackedInt32Array): void
        find_path(from: Vector2, to: Vector2): PackedVector2Array
        get_intersections(from: Vector2, to: Vector2): PackedVector2Array
        get_closest_point(point: Vector2): Vector2
        is_point_inside(point: Vector2): boolean
        set_point_penalty(idx: number /*i64*/, penalty: number /*f64*/): void
        get_point_penalty(idx: number /*i64*/): number /*f64*/
        get_bounds(): Rect2
        _set_data(data: Dictionary): void
        _get_data(): Dictionary
        data: Dictionary
    }
    class Popup extends Window {
        readonly popup_hide: Signal
    }
    class PopupMenu extends Popup {
        activate_item_by_event(event: InputEvent, for_global_only: boolean = false): boolean
        add_item(label: string, id: number /*i64*/ = -1, accel: Key = 0): void
        add_icon_item(texture: Texture2D, label: string, id: number /*i64*/ = -1, accel: Key = 0): void
        add_check_item(label: string, id: number /*i64*/ = -1, accel: Key = 0): void
        add_icon_check_item(texture: Texture2D, label: string, id: number /*i64*/ = -1, accel: Key = 0): void
        add_radio_check_item(label: string, id: number /*i64*/ = -1, accel: Key = 0): void
        add_icon_radio_check_item(texture: Texture2D, label: string, id: number /*i64*/ = -1, accel: Key = 0): void
        add_multistate_item(label: string, max_states: number /*i64*/, default_state: number /*i64*/ = 0, id: number /*i64*/ = -1, accel: Key = 0): void
        add_shortcut(shortcut: Shortcut, id: number /*i64*/ = -1, global: boolean = false, allow_echo: boolean = false): void
        add_icon_shortcut(texture: Texture2D, shortcut: Shortcut, id: number /*i64*/ = -1, global: boolean = false, allow_echo: boolean = false): void
        add_check_shortcut(shortcut: Shortcut, id: number /*i64*/ = -1, global: boolean = false): void
        add_icon_check_shortcut(texture: Texture2D, shortcut: Shortcut, id: number /*i64*/ = -1, global: boolean = false): void
        add_radio_check_shortcut(shortcut: Shortcut, id: number /*i64*/ = -1, global: boolean = false): void
        add_icon_radio_check_shortcut(texture: Texture2D, shortcut: Shortcut, id: number /*i64*/ = -1, global: boolean = false): void
        add_submenu_item(label: string, submenu: string, id: number /*i64*/ = -1): void
        set_item_text(index: number /*i64*/, text: string): void
        set_item_text_direction(index: number /*i64*/, direction: Control.TextDirection): void
        set_item_language(index: number /*i64*/, language: string): void
        set_item_icon(index: number /*i64*/, icon: Texture2D): void
        set_item_icon_max_width(index: number /*i64*/, width: number /*i64*/): void
        set_item_icon_modulate(index: number /*i64*/, modulate: Color): void
        set_item_checked(index: number /*i64*/, checked: boolean): void
        set_item_id(index: number /*i64*/, id: number /*i64*/): void
        set_item_accelerator(index: number /*i64*/, accel: Key): void
        set_item_metadata(index: number /*i64*/, metadata: any): void
        set_item_disabled(index: number /*i64*/, disabled: boolean): void
        set_item_submenu(index: number /*i64*/, submenu: string): void
        set_item_as_separator(index: number /*i64*/, enable: boolean): void
        set_item_as_checkable(index: number /*i64*/, enable: boolean): void
        set_item_as_radio_checkable(index: number /*i64*/, enable: boolean): void
        set_item_tooltip(index: number /*i64*/, tooltip: string): void
        set_item_shortcut(index: number /*i64*/, shortcut: Shortcut, global: boolean = false): void
        set_item_indent(index: number /*i64*/, indent: number /*i64*/): void
        set_item_multistate(index: number /*i64*/, state: number /*i64*/): void
        set_item_shortcut_disabled(index: number /*i64*/, disabled: boolean): void
        toggle_item_checked(index: number /*i64*/): void
        toggle_item_multistate(index: number /*i64*/): void
        get_item_text(index: number /*i64*/): string
        get_item_text_direction(index: number /*i64*/): Control.TextDirection
        get_item_language(index: number /*i64*/): string
        get_item_icon(index: number /*i64*/): Texture2D
        get_item_icon_max_width(index: number /*i64*/): number /*i64*/
        get_item_icon_modulate(index: number /*i64*/): Color
        is_item_checked(index: number /*i64*/): boolean
        get_item_id(index: number /*i64*/): number /*i64*/
        get_item_index(id: number /*i64*/): number /*i64*/
        get_item_accelerator(index: number /*i64*/): Key
        get_item_metadata(index: number /*i64*/): any
        is_item_disabled(index: number /*i64*/): boolean
        get_item_submenu(index: number /*i64*/): string
        is_item_separator(index: number /*i64*/): boolean
        is_item_checkable(index: number /*i64*/): boolean
        is_item_radio_checkable(index: number /*i64*/): boolean
        is_item_shortcut_disabled(index: number /*i64*/): boolean
        get_item_tooltip(index: number /*i64*/): string
        get_item_shortcut(index: number /*i64*/): Shortcut
        get_item_indent(index: number /*i64*/): number /*i64*/
        set_focused_item(index: number /*i64*/): void
        get_focused_item(): number /*i64*/
        set_item_count(count: number /*i64*/): void
        get_item_count(): number /*i64*/
        scroll_to_item(index: number /*i64*/): void
        remove_item(index: number /*i64*/): void
        add_separator(label: string = '', id: number /*i64*/ = -1): void
        clear(free_submenus: boolean = false): void
        set_hide_on_item_selection(enable: boolean): void
        is_hide_on_item_selection(): boolean
        set_hide_on_checkable_item_selection(enable: boolean): void
        is_hide_on_checkable_item_selection(): boolean
        set_hide_on_state_item_selection(enable: boolean): void
        is_hide_on_state_item_selection(): boolean
        set_submenu_popup_delay(seconds: number /*f64*/): void
        get_submenu_popup_delay(): number /*f64*/
        set_allow_search(allow: boolean): void
        get_allow_search(): boolean
        hide_on_item_selection: boolean
        hide_on_checkable_item_selection: boolean
        hide_on_state_item_selection: boolean
        submenu_popup_delay: number /*f64*/
        allow_search: boolean
        item_count: any /*Items,item_*/
        readonly id_pressed: Signal
        readonly id_focused: Signal
        readonly index_pressed: Signal
        readonly menu_changed: Signal
    }
    class PopupPanel extends Popup {
    }
    namespace PortableCompressedTexture2D {
        enum CompressionMode {
            COMPRESSION_MODE_LOSSLESS = 0,
            COMPRESSION_MODE_LOSSY = 1,
            COMPRESSION_MODE_BASIS_UNIVERSAL = 2,
            COMPRESSION_MODE_S3TC = 3,
            COMPRESSION_MODE_ETC2 = 4,
            COMPRESSION_MODE_BPTC = 5,
        }
    }
    class PortableCompressedTexture2D extends Texture2D {
        create_from_image(image: Image, compression_mode: PortableCompressedTexture2D.CompressionMode, normal_map: boolean = false, lossy_quality: number /*f64*/ = 0.8): void
        get_format(): Image.Format
        get_compression_mode(): PortableCompressedTexture2D.CompressionMode
        set_size_override(size: Vector2): void
        get_size_override(): Vector2
        set_keep_compressed_buffer(keep: boolean): void
        is_keeping_compressed_buffer(): boolean
        _set_data(data: PackedByteArray): void
        _get_data(): PackedByteArray
        static set_keep_all_compressed_buffers(keep: boolean): void
        static is_keeping_all_compressed_buffers(): boolean
        _data: PackedByteArray
        size_override: Vector2
        keep_compressed_buffer: boolean
    }
    class PostImportPluginSkeletonRenamer extends EditorScenePostImportPlugin {
    }
    class PostImportPluginSkeletonRestFixer extends EditorScenePostImportPlugin {
    }
    class PostImportPluginSkeletonTrackOrganizer extends EditorScenePostImportPlugin {
    }
    class PrimitiveMesh extends Mesh {
        /* gdvirtual */ _create_mesh_array(): Array
        _update(): void
        set_material(material: Material): void
        get_material(): Material
        get_mesh_arrays(): Array
        set_custom_aabb(aabb: AABB): void
        get_custom_aabb(): AABB
        set_flip_faces(flip_faces: boolean): void
        get_flip_faces(): boolean
        set_add_uv2(add_uv2: boolean): void
        get_add_uv2(): boolean
        set_uv2_padding(uv2_padding: number /*f64*/): void
        get_uv2_padding(): number /*f64*/
        _request_update(): void
        material: BaseMaterial3D | ShaderMaterial
        custom_aabb: AABB
        flip_faces: boolean
        add_uv2: boolean
        uv2_padding: number /*f64*/
    }
    class PrismMesh extends PrimitiveMesh {
        set_left_to_right(left_to_right: number /*f64*/): void
        get_left_to_right(): number /*f64*/
        set_size(size: Vector3): void
        get_size(): Vector3
        set_subdivide_width(segments: number /*i64*/): void
        get_subdivide_width(): number /*i64*/
        set_subdivide_height(segments: number /*i64*/): void
        get_subdivide_height(): number /*i64*/
        set_subdivide_depth(segments: number /*i64*/): void
        get_subdivide_depth(): number /*i64*/
        left_to_right: number /*f64*/
        size: Vector3
        subdivide_width: number /*i64*/
        subdivide_height: number /*i64*/
        subdivide_depth: number /*i64*/
    }
    class ProceduralSkyMaterial extends Material {
        set_sky_top_color(color: Color): void
        get_sky_top_color(): Color
        set_sky_horizon_color(color: Color): void
        get_sky_horizon_color(): Color
        set_sky_curve(curve: number /*f64*/): void
        get_sky_curve(): number /*f64*/
        set_sky_energy_multiplier(multiplier: number /*f64*/): void
        get_sky_energy_multiplier(): number /*f64*/
        set_sky_cover(sky_cover: Texture2D): void
        get_sky_cover(): Texture2D
        set_sky_cover_modulate(color: Color): void
        get_sky_cover_modulate(): Color
        set_ground_bottom_color(color: Color): void
        get_ground_bottom_color(): Color
        set_ground_horizon_color(color: Color): void
        get_ground_horizon_color(): Color
        set_ground_curve(curve: number /*f64*/): void
        get_ground_curve(): number /*f64*/
        set_ground_energy_multiplier(energy: number /*f64*/): void
        get_ground_energy_multiplier(): number /*f64*/
        set_sun_angle_max(degrees: number /*f64*/): void
        get_sun_angle_max(): number /*f64*/
        set_sun_curve(curve: number /*f64*/): void
        get_sun_curve(): number /*f64*/
        set_use_debanding(use_debanding: boolean): void
        get_use_debanding(): boolean
        sky_top_color: Color
        sky_horizon_color: Color
        sky_curve: number /*f64*/
        sky_energy_multiplier: number /*f64*/
        sky_cover: Texture2D
        sky_cover_modulate: Color
        ground_bottom_color: Color
        ground_horizon_color: Color
        ground_curve: number /*f64*/
        ground_energy_multiplier: number /*f64*/
        sun_angle_max: number /*f64*/
        sun_curve: number /*f64*/
        use_debanding: boolean
    }
    class ProceduralSkyMaterialConversionPlugin extends EditorResourceConversionPlugin {
    }
    namespace ProgressBar {
        enum FillMode {
            FILL_BEGIN_TO_END = 0,
            FILL_END_TO_BEGIN = 1,
            FILL_TOP_TO_BOTTOM = 2,
            FILL_BOTTOM_TO_TOP = 3,
        }
    }
    class ProgressBar extends Range {
        set_fill_mode(mode: number /*i64*/): void
        get_fill_mode(): number /*i64*/
        set_show_percentage(visible: boolean): void
        is_percentage_shown(): boolean
        fill_mode: number /*i64*/
        show_percentage: boolean
    }
    class ProgressDialog extends PopupPanel {
    }
    class ProjectExportDialog extends ConfirmationDialog {
        _export_all(_unnamed_arg0: boolean): void
        set_export_path(_unnamed_arg0: string): void
        get_export_path(): string
        get_current_preset(): any /*EditorExportPreset*/
        export_path: string
    }
    class ProjectExportTextureFormatError extends HBoxContainer {
        readonly texture_format_enabled: Signal
    }
    class ProjectSettingsEditor extends AcceptDialog {
        queue_save(): void
        _update_action_map_editor(): void
    }
    class PropertySelector extends ConfirmationDialog {
        readonly selected: Signal
    }
    class PropertyTweener extends Tweener {
        from(value: any): PropertyTweener
        from_current(): PropertyTweener
        as_relative(): PropertyTweener
        set_trans(trans: Tween.TransitionType): PropertyTweener
        set_ease(ease: Tween.EaseType): PropertyTweener
        set_delay(delay: number /*f64*/): PropertyTweener
    }
    class QuadMesh extends PlaneMesh {
    }
    class QuadOccluder3D extends Occluder3D {
        set_size(size: Vector2): void
        get_size(): Vector2
        size: Vector2
    }
    class RDAttachmentFormat extends RefCounted {
        set_format(p_member: RenderingDevice.DataFormat): void
        get_format(): RenderingDevice.DataFormat
        set_samples(p_member: RenderingDevice.TextureSamples): void
        get_samples(): RenderingDevice.TextureSamples
        set_usage_flags(p_member: number /*i64*/): void
        get_usage_flags(): number /*i64*/
        format: number /*i64*/
        samples: number /*i64*/
        usage_flags: number /*i64*/
    }
    class RDFramebufferPass extends RefCounted {
        static readonly ATTACHMENT_UNUSED = -1
        set_color_attachments(p_member: PackedInt32Array): void
        get_color_attachments(): PackedInt32Array
        set_input_attachments(p_member: PackedInt32Array): void
        get_input_attachments(): PackedInt32Array
        set_resolve_attachments(p_member: PackedInt32Array): void
        get_resolve_attachments(): PackedInt32Array
        set_preserve_attachments(p_member: PackedInt32Array): void
        get_preserve_attachments(): PackedInt32Array
        set_depth_attachment(p_member: number /*i64*/): void
        get_depth_attachment(): number /*i64*/
        color_attachments: PackedInt32Array
        input_attachments: PackedInt32Array
        resolve_attachments: PackedInt32Array
        preserve_attachments: PackedInt32Array
        depth_attachment: number /*i64*/
    }
    class RDPipelineColorBlendState extends RefCounted {
        set_enable_logic_op(p_member: boolean): void
        get_enable_logic_op(): boolean
        set_logic_op(p_member: RenderingDevice.LogicOperation): void
        get_logic_op(): RenderingDevice.LogicOperation
        set_blend_constant(p_member: Color): void
        get_blend_constant(): Color
        set_attachments(attachments: Array): void
        get_attachments(): Array
        enable_logic_op: boolean
        logic_op: number /*i64*/
        blend_constant: Color
        attachments: Array
    }
    class RDPipelineColorBlendStateAttachment extends RefCounted {
        set_as_mix(): void
        set_enable_blend(p_member: boolean): void
        get_enable_blend(): boolean
        set_src_color_blend_factor(p_member: RenderingDevice.BlendFactor): void
        get_src_color_blend_factor(): RenderingDevice.BlendFactor
        set_dst_color_blend_factor(p_member: RenderingDevice.BlendFactor): void
        get_dst_color_blend_factor(): RenderingDevice.BlendFactor
        set_color_blend_op(p_member: RenderingDevice.BlendOperation): void
        get_color_blend_op(): RenderingDevice.BlendOperation
        set_src_alpha_blend_factor(p_member: RenderingDevice.BlendFactor): void
        get_src_alpha_blend_factor(): RenderingDevice.BlendFactor
        set_dst_alpha_blend_factor(p_member: RenderingDevice.BlendFactor): void
        get_dst_alpha_blend_factor(): RenderingDevice.BlendFactor
        set_alpha_blend_op(p_member: RenderingDevice.BlendOperation): void
        get_alpha_blend_op(): RenderingDevice.BlendOperation
        set_write_r(p_member: boolean): void
        get_write_r(): boolean
        set_write_g(p_member: boolean): void
        get_write_g(): boolean
        set_write_b(p_member: boolean): void
        get_write_b(): boolean
        set_write_a(p_member: boolean): void
        get_write_a(): boolean
        enable_blend: boolean
        src_color_blend_factor: number /*i64*/
        dst_color_blend_factor: number /*i64*/
        color_blend_op: number /*i64*/
        src_alpha_blend_factor: number /*i64*/
        dst_alpha_blend_factor: number /*i64*/
        alpha_blend_op: number /*i64*/
        write_r: boolean
        write_g: boolean
        write_b: boolean
        write_a: boolean
    }
    class RDPipelineDepthStencilState extends RefCounted {
        set_enable_depth_test(p_member: boolean): void
        get_enable_depth_test(): boolean
        set_enable_depth_write(p_member: boolean): void
        get_enable_depth_write(): boolean
        set_depth_compare_operator(p_member: RenderingDevice.CompareOperator): void
        get_depth_compare_operator(): RenderingDevice.CompareOperator
        set_enable_depth_range(p_member: boolean): void
        get_enable_depth_range(): boolean
        set_depth_range_min(p_member: number /*f64*/): void
        get_depth_range_min(): number /*f64*/
        set_depth_range_max(p_member: number /*f64*/): void
        get_depth_range_max(): number /*f64*/
        set_enable_stencil(p_member: boolean): void
        get_enable_stencil(): boolean
        set_front_op_fail(p_member: RenderingDevice.StencilOperation): void
        get_front_op_fail(): RenderingDevice.StencilOperation
        set_front_op_pass(p_member: RenderingDevice.StencilOperation): void
        get_front_op_pass(): RenderingDevice.StencilOperation
        set_front_op_depth_fail(p_member: RenderingDevice.StencilOperation): void
        get_front_op_depth_fail(): RenderingDevice.StencilOperation
        set_front_op_compare(p_member: RenderingDevice.CompareOperator): void
        get_front_op_compare(): RenderingDevice.CompareOperator
        set_front_op_compare_mask(p_member: number /*i64*/): void
        get_front_op_compare_mask(): number /*i64*/
        set_front_op_write_mask(p_member: number /*i64*/): void
        get_front_op_write_mask(): number /*i64*/
        set_front_op_reference(p_member: number /*i64*/): void
        get_front_op_reference(): number /*i64*/
        set_back_op_fail(p_member: RenderingDevice.StencilOperation): void
        get_back_op_fail(): RenderingDevice.StencilOperation
        set_back_op_pass(p_member: RenderingDevice.StencilOperation): void
        get_back_op_pass(): RenderingDevice.StencilOperation
        set_back_op_depth_fail(p_member: RenderingDevice.StencilOperation): void
        get_back_op_depth_fail(): RenderingDevice.StencilOperation
        set_back_op_compare(p_member: RenderingDevice.CompareOperator): void
        get_back_op_compare(): RenderingDevice.CompareOperator
        set_back_op_compare_mask(p_member: number /*i64*/): void
        get_back_op_compare_mask(): number /*i64*/
        set_back_op_write_mask(p_member: number /*i64*/): void
        get_back_op_write_mask(): number /*i64*/
        set_back_op_reference(p_member: number /*i64*/): void
        get_back_op_reference(): number /*i64*/
        enable_depth_test: boolean
        enable_depth_write: boolean
        depth_compare_operator: number /*i64*/
        enable_depth_range: boolean
        depth_range_min: number /*f64*/
        depth_range_max: number /*f64*/
        enable_stencil: boolean
        front_op_fail: number /*i64*/
        front_op_pass: number /*i64*/
        front_op_depth_fail: number /*i64*/
        front_op_compare: number /*i64*/
        front_op_compare_mask: number /*i64*/
        front_op_write_mask: number /*i64*/
        front_op_reference: number /*i64*/
        back_op_fail: number /*i64*/
        back_op_pass: number /*i64*/
        back_op_depth_fail: number /*i64*/
        back_op_compare: number /*i64*/
        back_op_compare_mask: number /*i64*/
        back_op_write_mask: number /*i64*/
        back_op_reference: number /*i64*/
    }
    class RDPipelineMultisampleState extends RefCounted {
        set_sample_count(p_member: RenderingDevice.TextureSamples): void
        get_sample_count(): RenderingDevice.TextureSamples
        set_enable_sample_shading(p_member: boolean): void
        get_enable_sample_shading(): boolean
        set_min_sample_shading(p_member: number /*f64*/): void
        get_min_sample_shading(): number /*f64*/
        set_enable_alpha_to_coverage(p_member: boolean): void
        get_enable_alpha_to_coverage(): boolean
        set_enable_alpha_to_one(p_member: boolean): void
        get_enable_alpha_to_one(): boolean
        set_sample_masks(masks: Array): void
        get_sample_masks(): Array
        sample_count: number /*i64*/
        enable_sample_shading: boolean
        min_sample_shading: number /*f64*/
        enable_alpha_to_coverage: boolean
        enable_alpha_to_one: boolean
        sample_masks: Array
    }
    class RDPipelineRasterizationState extends RefCounted {
        set_enable_depth_clamp(p_member: boolean): void
        get_enable_depth_clamp(): boolean
        set_discard_primitives(p_member: boolean): void
        get_discard_primitives(): boolean
        set_wireframe(p_member: boolean): void
        get_wireframe(): boolean
        set_cull_mode(p_member: RenderingDevice.PolygonCullMode): void
        get_cull_mode(): RenderingDevice.PolygonCullMode
        set_front_face(p_member: RenderingDevice.PolygonFrontFace): void
        get_front_face(): RenderingDevice.PolygonFrontFace
        set_depth_bias_enabled(p_member: boolean): void
        get_depth_bias_enabled(): boolean
        set_depth_bias_constant_factor(p_member: number /*f64*/): void
        get_depth_bias_constant_factor(): number /*f64*/
        set_depth_bias_clamp(p_member: number /*f64*/): void
        get_depth_bias_clamp(): number /*f64*/
        set_depth_bias_slope_factor(p_member: number /*f64*/): void
        get_depth_bias_slope_factor(): number /*f64*/
        set_line_width(p_member: number /*f64*/): void
        get_line_width(): number /*f64*/
        set_patch_control_points(p_member: number /*i64*/): void
        get_patch_control_points(): number /*i64*/
        enable_depth_clamp: boolean
        discard_primitives: boolean
        wireframe: boolean
        cull_mode: number /*i64*/
        front_face: number /*i64*/
        depth_bias_enabled: boolean
        depth_bias_constant_factor: number /*f64*/
        depth_bias_clamp: number /*f64*/
        depth_bias_slope_factor: number /*f64*/
        line_width: number /*f64*/
        patch_control_points: number /*i64*/
    }
    class RDPipelineSpecializationConstant extends RefCounted {
        set_value(value: any): void
        get_value(): any
        set_constant_id(constant_id: number /*i64*/): void
        get_constant_id(): number /*i64*/
        value: any
        constant_id: number /*i64*/
    }
    class RDSamplerState extends RefCounted {
        set_mag_filter(p_member: RenderingDevice.SamplerFilter): void
        get_mag_filter(): RenderingDevice.SamplerFilter
        set_min_filter(p_member: RenderingDevice.SamplerFilter): void
        get_min_filter(): RenderingDevice.SamplerFilter
        set_mip_filter(p_member: RenderingDevice.SamplerFilter): void
        get_mip_filter(): RenderingDevice.SamplerFilter
        set_repeat_u(p_member: RenderingDevice.SamplerRepeatMode): void
        get_repeat_u(): RenderingDevice.SamplerRepeatMode
        set_repeat_v(p_member: RenderingDevice.SamplerRepeatMode): void
        get_repeat_v(): RenderingDevice.SamplerRepeatMode
        set_repeat_w(p_member: RenderingDevice.SamplerRepeatMode): void
        get_repeat_w(): RenderingDevice.SamplerRepeatMode
        set_lod_bias(p_member: number /*f64*/): void
        get_lod_bias(): number /*f64*/
        set_use_anisotropy(p_member: boolean): void
        get_use_anisotropy(): boolean
        set_anisotropy_max(p_member: number /*f64*/): void
        get_anisotropy_max(): number /*f64*/
        set_enable_compare(p_member: boolean): void
        get_enable_compare(): boolean
        set_compare_op(p_member: RenderingDevice.CompareOperator): void
        get_compare_op(): RenderingDevice.CompareOperator
        set_min_lod(p_member: number /*f64*/): void
        get_min_lod(): number /*f64*/
        set_max_lod(p_member: number /*f64*/): void
        get_max_lod(): number /*f64*/
        set_border_color(p_member: RenderingDevice.SamplerBorderColor): void
        get_border_color(): RenderingDevice.SamplerBorderColor
        set_unnormalized_uvw(p_member: boolean): void
        get_unnormalized_uvw(): boolean
        mag_filter: number /*i64*/
        min_filter: number /*i64*/
        mip_filter: number /*i64*/
        repeat_u: number /*i64*/
        repeat_v: number /*i64*/
        repeat_w: number /*i64*/
        lod_bias: number /*f64*/
        use_anisotropy: boolean
        anisotropy_max: number /*f64*/
        enable_compare: boolean
        compare_op: number /*i64*/
        min_lod: number /*f64*/
        max_lod: number /*f64*/
        border_color: number /*i64*/
        unnormalized_uvw: boolean
    }
    class RDShaderFile extends Resource {
        set_bytecode(bytecode: RDShaderSPIRV, version: StringName = ''): void
        get_spirv(version: StringName = ''): RDShaderSPIRV
        get_version_list(): Array
        set_base_error(error: string): void
        get_base_error(): string
        _set_versions(versions: Dictionary): void
        _get_versions(): Dictionary
        _versions: Dictionary
        base_error: string
    }
    class RDShaderSPIRV extends Resource {
        set_stage_bytecode(stage: RenderingDevice.ShaderStage, bytecode: PackedByteArray): void
        get_stage_bytecode(stage: RenderingDevice.ShaderStage): PackedByteArray
        set_stage_compile_error(stage: RenderingDevice.ShaderStage, compile_error: string): void
        get_stage_compile_error(stage: RenderingDevice.ShaderStage): string
    }
    class RDShaderSource extends RefCounted {
        set_stage_source(stage: RenderingDevice.ShaderStage, source: string): void
        get_stage_source(stage: RenderingDevice.ShaderStage): string
        set_language(language: RenderingDevice.ShaderLanguage): void
        get_language(): RenderingDevice.ShaderLanguage
        language: number /*i64*/
    }
    class RDTextureFormat extends RefCounted {
        set_format(p_member: RenderingDevice.DataFormat): void
        get_format(): RenderingDevice.DataFormat
        set_width(p_member: number /*i64*/): void
        get_width(): number /*i64*/
        set_height(p_member: number /*i64*/): void
        get_height(): number /*i64*/
        set_depth(p_member: number /*i64*/): void
        get_depth(): number /*i64*/
        set_array_layers(p_member: number /*i64*/): void
        get_array_layers(): number /*i64*/
        set_mipmaps(p_member: number /*i64*/): void
        get_mipmaps(): number /*i64*/
        set_texture_type(p_member: RenderingDevice.TextureType): void
        get_texture_type(): RenderingDevice.TextureType
        set_samples(p_member: RenderingDevice.TextureSamples): void
        get_samples(): RenderingDevice.TextureSamples
        set_usage_bits(p_member: RenderingDevice.TextureUsageBits): void
        get_usage_bits(): RenderingDevice.TextureUsageBits
        add_shareable_format(format: RenderingDevice.DataFormat): void
        remove_shareable_format(format: RenderingDevice.DataFormat): void
        format: number /*i64*/
        width: number /*i64*/
        height: number /*i64*/
        depth: number /*i64*/
        array_layers: number /*i64*/
        mipmaps: number /*i64*/
        texture_type: number /*i64*/
        samples: number /*i64*/
        usage_bits: number /*i64*/
    }
    class RDTextureView extends RefCounted {
        set_format_override(p_member: RenderingDevice.DataFormat): void
        get_format_override(): RenderingDevice.DataFormat
        set_swizzle_r(p_member: RenderingDevice.TextureSwizzle): void
        get_swizzle_r(): RenderingDevice.TextureSwizzle
        set_swizzle_g(p_member: RenderingDevice.TextureSwizzle): void
        get_swizzle_g(): RenderingDevice.TextureSwizzle
        set_swizzle_b(p_member: RenderingDevice.TextureSwizzle): void
        get_swizzle_b(): RenderingDevice.TextureSwizzle
        set_swizzle_a(p_member: RenderingDevice.TextureSwizzle): void
        get_swizzle_a(): RenderingDevice.TextureSwizzle
        format_override: number /*i64*/
        swizzle_r: number /*i64*/
        swizzle_g: number /*i64*/
        swizzle_b: number /*i64*/
        swizzle_a: number /*i64*/
    }
    class RDUniform extends RefCounted {
        set_uniform_type(p_member: RenderingDevice.UniformType): void
        get_uniform_type(): RenderingDevice.UniformType
        set_binding(p_member: number /*i64*/): void
        get_binding(): number /*i64*/
        add_id(id: RID): void
        clear_ids(): void
        _set_ids(ids: Array): void
        get_ids(): Array
        uniform_type: number /*i64*/
        binding: number /*i64*/
        _ids: Array
    }
    class RDVertexAttribute extends RefCounted {
        set_location(p_member: number /*i64*/): void
        get_location(): number /*i64*/
        set_offset(p_member: number /*i64*/): void
        get_offset(): number /*i64*/
        set_format(p_member: RenderingDevice.DataFormat): void
        get_format(): RenderingDevice.DataFormat
        set_stride(p_member: number /*i64*/): void
        get_stride(): number /*i64*/
        set_frequency(p_member: RenderingDevice.VertexFrequency): void
        get_frequency(): RenderingDevice.VertexFrequency
        location: number /*i64*/
        offset: number /*i64*/
        format: number /*i64*/
        stride: number /*i64*/
        frequency: number /*i64*/
    }
    class RandomNumberGenerator extends RefCounted {
        set_seed(seed: number /*i64*/): void
        get_seed(): number /*i64*/
        set_state(state: number /*i64*/): void
        get_state(): number /*i64*/
        randi(): number /*i64*/
        randf(): number /*f64*/
        randfn(mean: number /*f64*/ = 0, deviation: number /*f64*/ = 1): number /*f64*/
        randf_range(from: number /*f64*/, to: number /*f64*/): number /*f64*/
        randi_range(from: number /*i64*/, to: number /*i64*/): number /*i64*/
        randomize(): void
        seed: number /*i64*/
        state: number /*i64*/
    }
    class Range extends Control {
        /* gdvirtual */ _value_changed(new_value: number /*f64*/): void
        get_value(): number /*f64*/
        get_min(): number /*f64*/
        get_max(): number /*f64*/
        get_step(): number /*f64*/
        get_page(): number /*f64*/
        get_as_ratio(): number /*f64*/
        set_value(value: number /*f64*/): void
        set_value_no_signal(value: number /*f64*/): void
        set_min(minimum: number /*f64*/): void
        set_max(maximum: number /*f64*/): void
        set_step(step: number /*f64*/): void
        set_page(pagesize: number /*f64*/): void
        set_as_ratio(value: number /*f64*/): void
        set_use_rounded_values(enabled: boolean): void
        is_using_rounded_values(): boolean
        set_exp_ratio(enabled: boolean): void
        is_ratio_exp(): boolean
        set_allow_greater(allow: boolean): void
        is_greater_allowed(): boolean
        set_allow_lesser(allow: boolean): void
        is_lesser_allowed(): boolean
        share(with_: Node): void
        unshare(): void
        min_value: number /*f64*/
        max_value: number /*f64*/
        step: number /*f64*/
        page: number /*f64*/
        value: number /*f64*/
        ratio: number /*f64*/
        exp_edit: boolean
        rounded: boolean
        allow_greater: boolean
        allow_lesser: boolean
        readonly value_changed: Signal
        readonly changed: Signal
    }
    class RayCast2D extends Node2D {
        set_enabled(enabled: boolean): void
        is_enabled(): boolean
        set_target_position(local_point: Vector2): void
        get_target_position(): Vector2
        is_colliding(): boolean
        force_raycast_update(): void
        get_collider(): Object
        get_collider_rid(): RID
        get_collider_shape(): number /*i64*/
        get_collision_point(): Vector2
        get_collision_normal(): Vector2
        add_exception_rid(rid: RID): void
        add_exception(node: CollisionObject2D): void
        remove_exception_rid(rid: RID): void
        remove_exception(node: CollisionObject2D): void
        clear_exceptions(): void
        set_collision_mask(mask: number /*i64*/): void
        get_collision_mask(): number /*i64*/
        set_collision_mask_value(layer_number: number /*i64*/, value: boolean): void
        get_collision_mask_value(layer_number: number /*i64*/): boolean
        set_exclude_parent_body(mask: boolean): void
        get_exclude_parent_body(): boolean
        set_collide_with_areas(enable: boolean): void
        is_collide_with_areas_enabled(): boolean
        set_collide_with_bodies(enable: boolean): void
        is_collide_with_bodies_enabled(): boolean
        set_hit_from_inside(enable: boolean): void
        is_hit_from_inside_enabled(): boolean
        enabled: boolean
        exclude_parent: boolean
        target_position: Vector2
        collision_mask: number /*i64*/
        hit_from_inside: boolean
        collide_with_areas: boolean
        collide_with_bodies: boolean
    }
    class RayCast3D extends Node3D {
        set_enabled(enabled: boolean): void
        is_enabled(): boolean
        set_target_position(local_point: Vector3): void
        get_target_position(): Vector3
        is_colliding(): boolean
        force_raycast_update(): void
        get_collider(): Object
        get_collider_rid(): RID
        get_collider_shape(): number /*i64*/
        get_collision_point(): Vector3
        get_collision_normal(): Vector3
        get_collision_face_index(): number /*i64*/
        add_exception_rid(rid: RID): void
        add_exception(node: CollisionObject3D): void
        remove_exception_rid(rid: RID): void
        remove_exception(node: CollisionObject3D): void
        clear_exceptions(): void
        set_collision_mask(mask: number /*i64*/): void
        get_collision_mask(): number /*i64*/
        set_collision_mask_value(layer_number: number /*i64*/, value: boolean): void
        get_collision_mask_value(layer_number: number /*i64*/): boolean
        set_exclude_parent_body(mask: boolean): void
        get_exclude_parent_body(): boolean
        set_collide_with_areas(enable: boolean): void
        is_collide_with_areas_enabled(): boolean
        set_collide_with_bodies(enable: boolean): void
        is_collide_with_bodies_enabled(): boolean
        set_hit_from_inside(enable: boolean): void
        is_hit_from_inside_enabled(): boolean
        set_hit_back_faces(enable: boolean): void
        is_hit_back_faces_enabled(): boolean
        set_debug_shape_custom_color(debug_shape_custom_color: Color): void
        get_debug_shape_custom_color(): Color
        set_debug_shape_thickness(debug_shape_thickness: number /*i64*/): void
        get_debug_shape_thickness(): number /*i64*/
        enabled: boolean
        exclude_parent: boolean
        target_position: Vector3
        collision_mask: number /*i64*/
        hit_from_inside: boolean
        hit_back_faces: boolean
        collide_with_areas: boolean
        collide_with_bodies: boolean
        debug_shape_custom_color: Color
        debug_shape_thickness: number /*i64*/
    }
    class RayCast3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    class RectangleShape2D extends Shape2D {
        set_size(size: Vector2): void
        get_size(): Vector2
        size: Vector2
    }
    class RefCounted extends Object {
        init_ref(): boolean
        reference(): boolean
        unreference(): boolean
        get_reference_count(): number /*i64*/
    }
    class ReferenceRect extends Control {
        get_border_color(): Color
        set_border_color(color: Color): void
        get_border_width(): number /*f64*/
        set_border_width(width: number /*f64*/): void
        get_editor_only(): boolean
        set_editor_only(enabled: boolean): void
        border_color: Color
        border_width: number /*f64*/
        editor_only: boolean
    }
    namespace ReflectionProbe {
        enum UpdateMode {
            UPDATE_ONCE = 0,
            UPDATE_ALWAYS = 1,
        }
        enum AmbientMode {
            AMBIENT_DISABLED = 0,
            AMBIENT_ENVIRONMENT = 1,
            AMBIENT_COLOR = 2,
        }
    }
    class ReflectionProbe extends VisualInstance3D {
        set_intensity(intensity: number /*f64*/): void
        get_intensity(): number /*f64*/
        set_ambient_mode(ambient: ReflectionProbe.AmbientMode): void
        get_ambient_mode(): ReflectionProbe.AmbientMode
        set_ambient_color(ambient: Color): void
        get_ambient_color(): Color
        set_ambient_color_energy(ambient_energy: number /*f64*/): void
        get_ambient_color_energy(): number /*f64*/
        set_max_distance(max_distance: number /*f64*/): void
        get_max_distance(): number /*f64*/
        set_mesh_lod_threshold(ratio: number /*f64*/): void
        get_mesh_lod_threshold(): number /*f64*/
        set_size(size: Vector3): void
        get_size(): Vector3
        set_origin_offset(origin_offset: Vector3): void
        get_origin_offset(): Vector3
        set_as_interior(enable: boolean): void
        is_set_as_interior(): boolean
        set_enable_box_projection(enable: boolean): void
        is_box_projection_enabled(): boolean
        set_enable_shadows(enable: boolean): void
        are_shadows_enabled(): boolean
        set_cull_mask(layers: number /*i64*/): void
        get_cull_mask(): number /*i64*/
        set_update_mode(mode: ReflectionProbe.UpdateMode): void
        get_update_mode(): ReflectionProbe.UpdateMode
        update_mode: number /*i64*/
        intensity: number /*f64*/
        max_distance: number /*f64*/
        size: Vector3
        origin_offset: Vector3
        box_projection: boolean
        interior: boolean
        enable_shadows: boolean
        cull_mask: number /*i64*/
        mesh_lod_threshold: number /*f64*/
        ambient_mode: number /*i64*/
        ambient_color: Color
        ambient_color_energy: number /*f64*/
    }
    class ReflectionProbeGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    class RegEx extends RefCounted {
        static create_from_string(pattern: string): RegEx
        clear(): void
        compile(pattern: string): GodotError
        search(subject: string, offset: number /*i64*/ = 0, end: number /*i64*/ = -1): RegExMatch
        search_all(subject: string, offset: number /*i64*/ = 0, end: number /*i64*/ = -1): Array
        sub(subject: string, replacement: string, all: boolean = false, offset: number /*i64*/ = 0, end: number /*i64*/ = -1): string
        is_valid(): boolean
        get_pattern(): string
        get_group_count(): number /*i64*/
        get_names(): PackedStringArray
    }
    class RegExMatch extends RefCounted {
        get_subject(): string
        get_group_count(): number /*i64*/
        get_names(): Dictionary
        get_strings(): PackedStringArray
        get_string(name: any = <any> {} /*compound.type from nil*/): string
        get_start(name: any = <any> {} /*compound.type from nil*/): number /*i64*/
        get_end(name: any = <any> {} /*compound.type from nil*/): number /*i64*/
        readonly subject: string
        readonly names: Dictionary
        readonly strings: Array
    }
    class RemoteTransform2D extends Node2D {
        set_remote_node(path: NodePath): void
        get_remote_node(): NodePath
        force_update_cache(): void
        set_use_global_coordinates(use_global_coordinates: boolean): void
        get_use_global_coordinates(): boolean
        set_update_position(update_remote_position: boolean): void
        get_update_position(): boolean
        set_update_rotation(update_remote_rotation: boolean): void
        get_update_rotation(): boolean
        set_update_scale(update_remote_scale: boolean): void
        get_update_scale(): boolean
        remote_path: NodePath
        use_global_coordinates: boolean
        update_position: boolean
        update_rotation: boolean
        update_scale: boolean
    }
    class RemoteTransform3D extends Node3D {
        set_remote_node(path: NodePath): void
        get_remote_node(): NodePath
        force_update_cache(): void
        set_use_global_coordinates(use_global_coordinates: boolean): void
        get_use_global_coordinates(): boolean
        set_update_position(update_remote_position: boolean): void
        get_update_position(): boolean
        set_update_rotation(update_remote_rotation: boolean): void
        get_update_rotation(): boolean
        set_update_scale(update_remote_scale: boolean): void
        get_update_scale(): boolean
        remote_path: NodePath
        use_global_coordinates: boolean
        update_position: boolean
        update_rotation: boolean
        update_scale: boolean
    }
    class RenameDialog extends ConfirmationDialog {
        rename(): void
    }
    class RenderSceneBuffers extends RefCounted {
        configure(config: RenderSceneBuffersConfiguration): void
    }
    class RenderSceneBuffersConfiguration extends RefCounted {
        get_render_target(): RID
        set_render_target(render_target: RID): void
        get_internal_size(): Vector2i
        set_internal_size(internal_size: Vector2i): void
        get_target_size(): Vector2i
        set_target_size(target_size: Vector2i): void
        get_view_count(): number /*i64*/
        set_view_count(view_count: number /*i64*/): void
        get_scaling_3d_mode(): RenderingServer.ViewportScaling3DMode
        set_scaling_3d_mode(scaling_3d_mode: RenderingServer.ViewportScaling3DMode): void
        get_msaa_3d(): RenderingServer.ViewportMSAA
        set_msaa_3d(msaa_3d: RenderingServer.ViewportMSAA): void
        get_screen_space_aa(): RenderingServer.ViewportScreenSpaceAA
        set_screen_space_aa(screen_space_aa: RenderingServer.ViewportScreenSpaceAA): void
        get_fsr_sharpness(): number /*f64*/
        set_fsr_sharpness(fsr_sharpness: number /*f64*/): void
        get_texture_mipmap_bias(): number /*f64*/
        set_texture_mipmap_bias(texture_mipmap_bias: number /*f64*/): void
        render_target: RID
        internal_size: Vector2i
        target_size: Vector2i
        view_count: number /*i64*/
        scaling_3d_mode: number /*i64*/
        msaa_3d: number /*i64*/
        screen_space_aa: number /*i64*/
        fsr_sharpness: boolean
        texture_mipmap_bias: boolean
    }
    class RenderSceneBuffersExtension extends RenderSceneBuffers {
        /* gdvirtual */ _configure(config: RenderSceneBuffersConfiguration): void
        /* gdvirtual */ _set_fsr_sharpness(fsr_sharpness: number /*f64*/): void
        /* gdvirtual */ _set_texture_mipmap_bias(texture_mipmap_bias: number /*f64*/): void
        /* gdvirtual */ _set_use_debanding(use_debanding: boolean): void
    }
    class RenderSceneBuffersGLES3 extends RenderSceneBuffers {
    }
    class RenderSceneBuffersRD extends RenderSceneBuffers {
        has_texture(context: StringName, name: StringName): boolean
        create_texture(context: StringName, name: StringName, data_format: RenderingDevice.DataFormat, usage_bits: number /*i64*/, texture_samples: RenderingDevice.TextureSamples, size: Vector2i, layers: number /*i64*/, mipmaps: number /*i64*/, unique: boolean): RID
        create_texture_from_format(context: StringName, name: StringName, format: RDTextureFormat, view: RDTextureView, unique: boolean): RID
        create_texture_view(context: StringName, name: StringName, view_name: StringName, view: RDTextureView): RID
        get_texture(context: StringName, name: StringName): RID
        get_texture_format(context: StringName, name: StringName): RDTextureFormat
        get_texture_slice(context: StringName, name: StringName, layer: number /*i64*/, mipmap: number /*i64*/, layers: number /*i64*/, mipmaps: number /*i64*/): RID
        get_texture_slice_view(context: StringName, name: StringName, layer: number /*i64*/, mipmap: number /*i64*/, layers: number /*i64*/, mipmaps: number /*i64*/, view: RDTextureView): RID
        get_texture_slice_size(context: StringName, name: StringName, mipmap: number /*i64*/): Vector2i
        clear_context(context: StringName): void
        get_color_texture(): RID
        get_color_layer(layer: number /*i64*/): RID
        get_depth_texture(): RID
        get_depth_layer(layer: number /*i64*/): RID
        get_velocity_texture(): RID
        get_velocity_layer(layer: number /*i64*/): RID
        get_render_target(): RID
        get_view_count(): number /*i64*/
        get_internal_size(): Vector2i
        get_use_taa(): boolean
    }
    namespace RenderingDevice {
        enum DeviceType {
            DEVICE_TYPE_OTHER = 0,
            DEVICE_TYPE_INTEGRATED_GPU = 1,
            DEVICE_TYPE_DISCRETE_GPU = 2,
            DEVICE_TYPE_VIRTUAL_GPU = 3,
            DEVICE_TYPE_CPU = 4,
            DEVICE_TYPE_MAX = 5,
        }
        enum DriverResource {
            DRIVER_RESOURCE_VULKAN_DEVICE = 0,
            DRIVER_RESOURCE_VULKAN_PHYSICAL_DEVICE = 1,
            DRIVER_RESOURCE_VULKAN_INSTANCE = 2,
            DRIVER_RESOURCE_VULKAN_QUEUE = 3,
            DRIVER_RESOURCE_VULKAN_QUEUE_FAMILY_INDEX = 4,
            DRIVER_RESOURCE_VULKAN_IMAGE = 5,
            DRIVER_RESOURCE_VULKAN_IMAGE_VIEW = 6,
            DRIVER_RESOURCE_VULKAN_IMAGE_NATIVE_TEXTURE_FORMAT = 7,
            DRIVER_RESOURCE_VULKAN_SAMPLER = 8,
            DRIVER_RESOURCE_VULKAN_DESCRIPTOR_SET = 9,
            DRIVER_RESOURCE_VULKAN_BUFFER = 10,
            DRIVER_RESOURCE_VULKAN_COMPUTE_PIPELINE = 11,
            DRIVER_RESOURCE_VULKAN_RENDER_PIPELINE = 12,
        }
        enum DataFormat {
            DATA_FORMAT_R4G4_UNORM_PACK8 = 0,
            DATA_FORMAT_R4G4B4A4_UNORM_PACK16 = 1,
            DATA_FORMAT_B4G4R4A4_UNORM_PACK16 = 2,
            DATA_FORMAT_R5G6B5_UNORM_PACK16 = 3,
            DATA_FORMAT_B5G6R5_UNORM_PACK16 = 4,
            DATA_FORMAT_R5G5B5A1_UNORM_PACK16 = 5,
            DATA_FORMAT_B5G5R5A1_UNORM_PACK16 = 6,
            DATA_FORMAT_A1R5G5B5_UNORM_PACK16 = 7,
            DATA_FORMAT_R8_UNORM = 8,
            DATA_FORMAT_R8_SNORM = 9,
            DATA_FORMAT_R8_USCALED = 10,
            DATA_FORMAT_R8_SSCALED = 11,
            DATA_FORMAT_R8_UINT = 12,
            DATA_FORMAT_R8_SINT = 13,
            DATA_FORMAT_R8_SRGB = 14,
            DATA_FORMAT_R8G8_UNORM = 15,
            DATA_FORMAT_R8G8_SNORM = 16,
            DATA_FORMAT_R8G8_USCALED = 17,
            DATA_FORMAT_R8G8_SSCALED = 18,
            DATA_FORMAT_R8G8_UINT = 19,
            DATA_FORMAT_R8G8_SINT = 20,
            DATA_FORMAT_R8G8_SRGB = 21,
            DATA_FORMAT_R8G8B8_UNORM = 22,
            DATA_FORMAT_R8G8B8_SNORM = 23,
            DATA_FORMAT_R8G8B8_USCALED = 24,
            DATA_FORMAT_R8G8B8_SSCALED = 25,
            DATA_FORMAT_R8G8B8_UINT = 26,
            DATA_FORMAT_R8G8B8_SINT = 27,
            DATA_FORMAT_R8G8B8_SRGB = 28,
            DATA_FORMAT_B8G8R8_UNORM = 29,
            DATA_FORMAT_B8G8R8_SNORM = 30,
            DATA_FORMAT_B8G8R8_USCALED = 31,
            DATA_FORMAT_B8G8R8_SSCALED = 32,
            DATA_FORMAT_B8G8R8_UINT = 33,
            DATA_FORMAT_B8G8R8_SINT = 34,
            DATA_FORMAT_B8G8R8_SRGB = 35,
            DATA_FORMAT_R8G8B8A8_UNORM = 36,
            DATA_FORMAT_R8G8B8A8_SNORM = 37,
            DATA_FORMAT_R8G8B8A8_USCALED = 38,
            DATA_FORMAT_R8G8B8A8_SSCALED = 39,
            DATA_FORMAT_R8G8B8A8_UINT = 40,
            DATA_FORMAT_R8G8B8A8_SINT = 41,
            DATA_FORMAT_R8G8B8A8_SRGB = 42,
            DATA_FORMAT_B8G8R8A8_UNORM = 43,
            DATA_FORMAT_B8G8R8A8_SNORM = 44,
            DATA_FORMAT_B8G8R8A8_USCALED = 45,
            DATA_FORMAT_B8G8R8A8_SSCALED = 46,
            DATA_FORMAT_B8G8R8A8_UINT = 47,
            DATA_FORMAT_B8G8R8A8_SINT = 48,
            DATA_FORMAT_B8G8R8A8_SRGB = 49,
            DATA_FORMAT_A8B8G8R8_UNORM_PACK32 = 50,
            DATA_FORMAT_A8B8G8R8_SNORM_PACK32 = 51,
            DATA_FORMAT_A8B8G8R8_USCALED_PACK32 = 52,
            DATA_FORMAT_A8B8G8R8_SSCALED_PACK32 = 53,
            DATA_FORMAT_A8B8G8R8_UINT_PACK32 = 54,
            DATA_FORMAT_A8B8G8R8_SINT_PACK32 = 55,
            DATA_FORMAT_A8B8G8R8_SRGB_PACK32 = 56,
            DATA_FORMAT_A2R10G10B10_UNORM_PACK32 = 57,
            DATA_FORMAT_A2R10G10B10_SNORM_PACK32 = 58,
            DATA_FORMAT_A2R10G10B10_USCALED_PACK32 = 59,
            DATA_FORMAT_A2R10G10B10_SSCALED_PACK32 = 60,
            DATA_FORMAT_A2R10G10B10_UINT_PACK32 = 61,
            DATA_FORMAT_A2R10G10B10_SINT_PACK32 = 62,
            DATA_FORMAT_A2B10G10R10_UNORM_PACK32 = 63,
            DATA_FORMAT_A2B10G10R10_SNORM_PACK32 = 64,
            DATA_FORMAT_A2B10G10R10_USCALED_PACK32 = 65,
            DATA_FORMAT_A2B10G10R10_SSCALED_PACK32 = 66,
            DATA_FORMAT_A2B10G10R10_UINT_PACK32 = 67,
            DATA_FORMAT_A2B10G10R10_SINT_PACK32 = 68,
            DATA_FORMAT_R16_UNORM = 69,
            DATA_FORMAT_R16_SNORM = 70,
            DATA_FORMAT_R16_USCALED = 71,
            DATA_FORMAT_R16_SSCALED = 72,
            DATA_FORMAT_R16_UINT = 73,
            DATA_FORMAT_R16_SINT = 74,
            DATA_FORMAT_R16_SFLOAT = 75,
            DATA_FORMAT_R16G16_UNORM = 76,
            DATA_FORMAT_R16G16_SNORM = 77,
            DATA_FORMAT_R16G16_USCALED = 78,
            DATA_FORMAT_R16G16_SSCALED = 79,
            DATA_FORMAT_R16G16_UINT = 80,
            DATA_FORMAT_R16G16_SINT = 81,
            DATA_FORMAT_R16G16_SFLOAT = 82,
            DATA_FORMAT_R16G16B16_UNORM = 83,
            DATA_FORMAT_R16G16B16_SNORM = 84,
            DATA_FORMAT_R16G16B16_USCALED = 85,
            DATA_FORMAT_R16G16B16_SSCALED = 86,
            DATA_FORMAT_R16G16B16_UINT = 87,
            DATA_FORMAT_R16G16B16_SINT = 88,
            DATA_FORMAT_R16G16B16_SFLOAT = 89,
            DATA_FORMAT_R16G16B16A16_UNORM = 90,
            DATA_FORMAT_R16G16B16A16_SNORM = 91,
            DATA_FORMAT_R16G16B16A16_USCALED = 92,
            DATA_FORMAT_R16G16B16A16_SSCALED = 93,
            DATA_FORMAT_R16G16B16A16_UINT = 94,
            DATA_FORMAT_R16G16B16A16_SINT = 95,
            DATA_FORMAT_R16G16B16A16_SFLOAT = 96,
            DATA_FORMAT_R32_UINT = 97,
            DATA_FORMAT_R32_SINT = 98,
            DATA_FORMAT_R32_SFLOAT = 99,
            DATA_FORMAT_R32G32_UINT = 100,
            DATA_FORMAT_R32G32_SINT = 101,
            DATA_FORMAT_R32G32_SFLOAT = 102,
            DATA_FORMAT_R32G32B32_UINT = 103,
            DATA_FORMAT_R32G32B32_SINT = 104,
            DATA_FORMAT_R32G32B32_SFLOAT = 105,
            DATA_FORMAT_R32G32B32A32_UINT = 106,
            DATA_FORMAT_R32G32B32A32_SINT = 107,
            DATA_FORMAT_R32G32B32A32_SFLOAT = 108,
            DATA_FORMAT_R64_UINT = 109,
            DATA_FORMAT_R64_SINT = 110,
            DATA_FORMAT_R64_SFLOAT = 111,
            DATA_FORMAT_R64G64_UINT = 112,
            DATA_FORMAT_R64G64_SINT = 113,
            DATA_FORMAT_R64G64_SFLOAT = 114,
            DATA_FORMAT_R64G64B64_UINT = 115,
            DATA_FORMAT_R64G64B64_SINT = 116,
            DATA_FORMAT_R64G64B64_SFLOAT = 117,
            DATA_FORMAT_R64G64B64A64_UINT = 118,
            DATA_FORMAT_R64G64B64A64_SINT = 119,
            DATA_FORMAT_R64G64B64A64_SFLOAT = 120,
            DATA_FORMAT_B10G11R11_UFLOAT_PACK32 = 121,
            DATA_FORMAT_E5B9G9R9_UFLOAT_PACK32 = 122,
            DATA_FORMAT_D16_UNORM = 123,
            DATA_FORMAT_X8_D24_UNORM_PACK32 = 124,
            DATA_FORMAT_D32_SFLOAT = 125,
            DATA_FORMAT_S8_UINT = 126,
            DATA_FORMAT_D16_UNORM_S8_UINT = 127,
            DATA_FORMAT_D24_UNORM_S8_UINT = 128,
            DATA_FORMAT_D32_SFLOAT_S8_UINT = 129,
            DATA_FORMAT_BC1_RGB_UNORM_BLOCK = 130,
            DATA_FORMAT_BC1_RGB_SRGB_BLOCK = 131,
            DATA_FORMAT_BC1_RGBA_UNORM_BLOCK = 132,
            DATA_FORMAT_BC1_RGBA_SRGB_BLOCK = 133,
            DATA_FORMAT_BC2_UNORM_BLOCK = 134,
            DATA_FORMAT_BC2_SRGB_BLOCK = 135,
            DATA_FORMAT_BC3_UNORM_BLOCK = 136,
            DATA_FORMAT_BC3_SRGB_BLOCK = 137,
            DATA_FORMAT_BC4_UNORM_BLOCK = 138,
            DATA_FORMAT_BC4_SNORM_BLOCK = 139,
            DATA_FORMAT_BC5_UNORM_BLOCK = 140,
            DATA_FORMAT_BC5_SNORM_BLOCK = 141,
            DATA_FORMAT_BC6H_UFLOAT_BLOCK = 142,
            DATA_FORMAT_BC6H_SFLOAT_BLOCK = 143,
            DATA_FORMAT_BC7_UNORM_BLOCK = 144,
            DATA_FORMAT_BC7_SRGB_BLOCK = 145,
            DATA_FORMAT_ETC2_R8G8B8_UNORM_BLOCK = 146,
            DATA_FORMAT_ETC2_R8G8B8_SRGB_BLOCK = 147,
            DATA_FORMAT_ETC2_R8G8B8A1_UNORM_BLOCK = 148,
            DATA_FORMAT_ETC2_R8G8B8A1_SRGB_BLOCK = 149,
            DATA_FORMAT_ETC2_R8G8B8A8_UNORM_BLOCK = 150,
            DATA_FORMAT_ETC2_R8G8B8A8_SRGB_BLOCK = 151,
            DATA_FORMAT_EAC_R11_UNORM_BLOCK = 152,
            DATA_FORMAT_EAC_R11_SNORM_BLOCK = 153,
            DATA_FORMAT_EAC_R11G11_UNORM_BLOCK = 154,
            DATA_FORMAT_EAC_R11G11_SNORM_BLOCK = 155,
            DATA_FORMAT_ASTC_4x4_UNORM_BLOCK = 156,
            DATA_FORMAT_ASTC_4x4_SRGB_BLOCK = 157,
            DATA_FORMAT_ASTC_5x4_UNORM_BLOCK = 158,
            DATA_FORMAT_ASTC_5x4_SRGB_BLOCK = 159,
            DATA_FORMAT_ASTC_5x5_UNORM_BLOCK = 160,
            DATA_FORMAT_ASTC_5x5_SRGB_BLOCK = 161,
            DATA_FORMAT_ASTC_6x5_UNORM_BLOCK = 162,
            DATA_FORMAT_ASTC_6x5_SRGB_BLOCK = 163,
            DATA_FORMAT_ASTC_6x6_UNORM_BLOCK = 164,
            DATA_FORMAT_ASTC_6x6_SRGB_BLOCK = 165,
            DATA_FORMAT_ASTC_8x5_UNORM_BLOCK = 166,
            DATA_FORMAT_ASTC_8x5_SRGB_BLOCK = 167,
            DATA_FORMAT_ASTC_8x6_UNORM_BLOCK = 168,
            DATA_FORMAT_ASTC_8x6_SRGB_BLOCK = 169,
            DATA_FORMAT_ASTC_8x8_UNORM_BLOCK = 170,
            DATA_FORMAT_ASTC_8x8_SRGB_BLOCK = 171,
            DATA_FORMAT_ASTC_10x5_UNORM_BLOCK = 172,
            DATA_FORMAT_ASTC_10x5_SRGB_BLOCK = 173,
            DATA_FORMAT_ASTC_10x6_UNORM_BLOCK = 174,
            DATA_FORMAT_ASTC_10x6_SRGB_BLOCK = 175,
            DATA_FORMAT_ASTC_10x8_UNORM_BLOCK = 176,
            DATA_FORMAT_ASTC_10x8_SRGB_BLOCK = 177,
            DATA_FORMAT_ASTC_10x10_UNORM_BLOCK = 178,
            DATA_FORMAT_ASTC_10x10_SRGB_BLOCK = 179,
            DATA_FORMAT_ASTC_12x10_UNORM_BLOCK = 180,
            DATA_FORMAT_ASTC_12x10_SRGB_BLOCK = 181,
            DATA_FORMAT_ASTC_12x12_UNORM_BLOCK = 182,
            DATA_FORMAT_ASTC_12x12_SRGB_BLOCK = 183,
            DATA_FORMAT_G8B8G8R8_422_UNORM = 184,
            DATA_FORMAT_B8G8R8G8_422_UNORM = 185,
            DATA_FORMAT_G8_B8_R8_3PLANE_420_UNORM = 186,
            DATA_FORMAT_G8_B8R8_2PLANE_420_UNORM = 187,
            DATA_FORMAT_G8_B8_R8_3PLANE_422_UNORM = 188,
            DATA_FORMAT_G8_B8R8_2PLANE_422_UNORM = 189,
            DATA_FORMAT_G8_B8_R8_3PLANE_444_UNORM = 190,
            DATA_FORMAT_R10X6_UNORM_PACK16 = 191,
            DATA_FORMAT_R10X6G10X6_UNORM_2PACK16 = 192,
            DATA_FORMAT_R10X6G10X6B10X6A10X6_UNORM_4PACK16 = 193,
            DATA_FORMAT_G10X6B10X6G10X6R10X6_422_UNORM_4PACK16 = 194,
            DATA_FORMAT_B10X6G10X6R10X6G10X6_422_UNORM_4PACK16 = 195,
            DATA_FORMAT_G10X6_B10X6_R10X6_3PLANE_420_UNORM_3PACK16 = 196,
            DATA_FORMAT_G10X6_B10X6R10X6_2PLANE_420_UNORM_3PACK16 = 197,
            DATA_FORMAT_G10X6_B10X6_R10X6_3PLANE_422_UNORM_3PACK16 = 198,
            DATA_FORMAT_G10X6_B10X6R10X6_2PLANE_422_UNORM_3PACK16 = 199,
            DATA_FORMAT_G10X6_B10X6_R10X6_3PLANE_444_UNORM_3PACK16 = 200,
            DATA_FORMAT_R12X4_UNORM_PACK16 = 201,
            DATA_FORMAT_R12X4G12X4_UNORM_2PACK16 = 202,
            DATA_FORMAT_R12X4G12X4B12X4A12X4_UNORM_4PACK16 = 203,
            DATA_FORMAT_G12X4B12X4G12X4R12X4_422_UNORM_4PACK16 = 204,
            DATA_FORMAT_B12X4G12X4R12X4G12X4_422_UNORM_4PACK16 = 205,
            DATA_FORMAT_G12X4_B12X4_R12X4_3PLANE_420_UNORM_3PACK16 = 206,
            DATA_FORMAT_G12X4_B12X4R12X4_2PLANE_420_UNORM_3PACK16 = 207,
            DATA_FORMAT_G12X4_B12X4_R12X4_3PLANE_422_UNORM_3PACK16 = 208,
            DATA_FORMAT_G12X4_B12X4R12X4_2PLANE_422_UNORM_3PACK16 = 209,
            DATA_FORMAT_G12X4_B12X4_R12X4_3PLANE_444_UNORM_3PACK16 = 210,
            DATA_FORMAT_G16B16G16R16_422_UNORM = 211,
            DATA_FORMAT_B16G16R16G16_422_UNORM = 212,
            DATA_FORMAT_G16_B16_R16_3PLANE_420_UNORM = 213,
            DATA_FORMAT_G16_B16R16_2PLANE_420_UNORM = 214,
            DATA_FORMAT_G16_B16_R16_3PLANE_422_UNORM = 215,
            DATA_FORMAT_G16_B16R16_2PLANE_422_UNORM = 216,
            DATA_FORMAT_G16_B16_R16_3PLANE_444_UNORM = 217,
            DATA_FORMAT_MAX = 218,
        }
        enum BarrierMask {
            BARRIER_MASK_VERTEX = 1,
            BARRIER_MASK_FRAGMENT = 8,
            BARRIER_MASK_COMPUTE = 2,
            BARRIER_MASK_TRANSFER = 4,
            BARRIER_MASK_RASTER = 9,
            BARRIER_MASK_ALL_BARRIERS = 32767,
            BARRIER_MASK_NO_BARRIER = 32768,
        }
        enum TextureType {
            TEXTURE_TYPE_1D = 0,
            TEXTURE_TYPE_2D = 1,
            TEXTURE_TYPE_3D = 2,
            TEXTURE_TYPE_CUBE = 3,
            TEXTURE_TYPE_1D_ARRAY = 4,
            TEXTURE_TYPE_2D_ARRAY = 5,
            TEXTURE_TYPE_CUBE_ARRAY = 6,
            TEXTURE_TYPE_MAX = 7,
        }
        enum TextureSamples {
            TEXTURE_SAMPLES_1 = 0,
            TEXTURE_SAMPLES_2 = 1,
            TEXTURE_SAMPLES_4 = 2,
            TEXTURE_SAMPLES_8 = 3,
            TEXTURE_SAMPLES_16 = 4,
            TEXTURE_SAMPLES_32 = 5,
            TEXTURE_SAMPLES_64 = 6,
            TEXTURE_SAMPLES_MAX = 7,
        }
        enum TextureUsageBits {
            TEXTURE_USAGE_SAMPLING_BIT = 1,
            TEXTURE_USAGE_COLOR_ATTACHMENT_BIT = 2,
            TEXTURE_USAGE_DEPTH_STENCIL_ATTACHMENT_BIT = 4,
            TEXTURE_USAGE_STORAGE_BIT = 8,
            TEXTURE_USAGE_STORAGE_ATOMIC_BIT = 16,
            TEXTURE_USAGE_CPU_READ_BIT = 32,
            TEXTURE_USAGE_CAN_UPDATE_BIT = 64,
            TEXTURE_USAGE_CAN_COPY_FROM_BIT = 128,
            TEXTURE_USAGE_CAN_COPY_TO_BIT = 256,
            TEXTURE_USAGE_INPUT_ATTACHMENT_BIT = 512,
        }
        enum TextureSwizzle {
            TEXTURE_SWIZZLE_IDENTITY = 0,
            TEXTURE_SWIZZLE_ZERO = 1,
            TEXTURE_SWIZZLE_ONE = 2,
            TEXTURE_SWIZZLE_R = 3,
            TEXTURE_SWIZZLE_G = 4,
            TEXTURE_SWIZZLE_B = 5,
            TEXTURE_SWIZZLE_A = 6,
            TEXTURE_SWIZZLE_MAX = 7,
        }
        enum TextureSliceType {
            TEXTURE_SLICE_2D = 0,
            TEXTURE_SLICE_CUBEMAP = 1,
            TEXTURE_SLICE_3D = 2,
        }
        enum SamplerFilter {
            SAMPLER_FILTER_NEAREST = 0,
            SAMPLER_FILTER_LINEAR = 1,
        }
        enum SamplerRepeatMode {
            SAMPLER_REPEAT_MODE_REPEAT = 0,
            SAMPLER_REPEAT_MODE_MIRRORED_REPEAT = 1,
            SAMPLER_REPEAT_MODE_CLAMP_TO_EDGE = 2,
            SAMPLER_REPEAT_MODE_CLAMP_TO_BORDER = 3,
            SAMPLER_REPEAT_MODE_MIRROR_CLAMP_TO_EDGE = 4,
            SAMPLER_REPEAT_MODE_MAX = 5,
        }
        enum SamplerBorderColor {
            SAMPLER_BORDER_COLOR_FLOAT_TRANSPARENT_BLACK = 0,
            SAMPLER_BORDER_COLOR_INT_TRANSPARENT_BLACK = 1,
            SAMPLER_BORDER_COLOR_FLOAT_OPAQUE_BLACK = 2,
            SAMPLER_BORDER_COLOR_INT_OPAQUE_BLACK = 3,
            SAMPLER_BORDER_COLOR_FLOAT_OPAQUE_WHITE = 4,
            SAMPLER_BORDER_COLOR_INT_OPAQUE_WHITE = 5,
            SAMPLER_BORDER_COLOR_MAX = 6,
        }
        enum VertexFrequency {
            VERTEX_FREQUENCY_VERTEX = 0,
            VERTEX_FREQUENCY_INSTANCE = 1,
        }
        enum IndexBufferFormat {
            INDEX_BUFFER_FORMAT_UINT16 = 0,
            INDEX_BUFFER_FORMAT_UINT32 = 1,
        }
        enum StorageBufferUsage {
            STORAGE_BUFFER_USAGE_DISPATCH_INDIRECT = 1,
        }
        enum UniformType {
            UNIFORM_TYPE_SAMPLER = 0,
            UNIFORM_TYPE_SAMPLER_WITH_TEXTURE = 1,
            UNIFORM_TYPE_TEXTURE = 2,
            UNIFORM_TYPE_IMAGE = 3,
            UNIFORM_TYPE_TEXTURE_BUFFER = 4,
            UNIFORM_TYPE_SAMPLER_WITH_TEXTURE_BUFFER = 5,
            UNIFORM_TYPE_IMAGE_BUFFER = 6,
            UNIFORM_TYPE_UNIFORM_BUFFER = 7,
            UNIFORM_TYPE_STORAGE_BUFFER = 8,
            UNIFORM_TYPE_INPUT_ATTACHMENT = 9,
            UNIFORM_TYPE_MAX = 10,
        }
        enum RenderPrimitive {
            RENDER_PRIMITIVE_POINTS = 0,
            RENDER_PRIMITIVE_LINES = 1,
            RENDER_PRIMITIVE_LINES_WITH_ADJACENCY = 2,
            RENDER_PRIMITIVE_LINESTRIPS = 3,
            RENDER_PRIMITIVE_LINESTRIPS_WITH_ADJACENCY = 4,
            RENDER_PRIMITIVE_TRIANGLES = 5,
            RENDER_PRIMITIVE_TRIANGLES_WITH_ADJACENCY = 6,
            RENDER_PRIMITIVE_TRIANGLE_STRIPS = 7,
            RENDER_PRIMITIVE_TRIANGLE_STRIPS_WITH_AJACENCY = 8,
            RENDER_PRIMITIVE_TRIANGLE_STRIPS_WITH_RESTART_INDEX = 9,
            RENDER_PRIMITIVE_TESSELATION_PATCH = 10,
            RENDER_PRIMITIVE_MAX = 11,
        }
        enum PolygonCullMode {
            POLYGON_CULL_DISABLED = 0,
            POLYGON_CULL_FRONT = 1,
            POLYGON_CULL_BACK = 2,
        }
        enum PolygonFrontFace {
            POLYGON_FRONT_FACE_CLOCKWISE = 0,
            POLYGON_FRONT_FACE_COUNTER_CLOCKWISE = 1,
        }
        enum StencilOperation {
            STENCIL_OP_KEEP = 0,
            STENCIL_OP_ZERO = 1,
            STENCIL_OP_REPLACE = 2,
            STENCIL_OP_INCREMENT_AND_CLAMP = 3,
            STENCIL_OP_DECREMENT_AND_CLAMP = 4,
            STENCIL_OP_INVERT = 5,
            STENCIL_OP_INCREMENT_AND_WRAP = 6,
            STENCIL_OP_DECREMENT_AND_WRAP = 7,
            STENCIL_OP_MAX = 8,
        }
        enum CompareOperator {
            COMPARE_OP_NEVER = 0,
            COMPARE_OP_LESS = 1,
            COMPARE_OP_EQUAL = 2,
            COMPARE_OP_LESS_OR_EQUAL = 3,
            COMPARE_OP_GREATER = 4,
            COMPARE_OP_NOT_EQUAL = 5,
            COMPARE_OP_GREATER_OR_EQUAL = 6,
            COMPARE_OP_ALWAYS = 7,
            COMPARE_OP_MAX = 8,
        }
        enum LogicOperation {
            LOGIC_OP_CLEAR = 0,
            LOGIC_OP_AND = 1,
            LOGIC_OP_AND_REVERSE = 2,
            LOGIC_OP_COPY = 3,
            LOGIC_OP_AND_INVERTED = 4,
            LOGIC_OP_NO_OP = 5,
            LOGIC_OP_XOR = 6,
            LOGIC_OP_OR = 7,
            LOGIC_OP_NOR = 8,
            LOGIC_OP_EQUIVALENT = 9,
            LOGIC_OP_INVERT = 10,
            LOGIC_OP_OR_REVERSE = 11,
            LOGIC_OP_COPY_INVERTED = 12,
            LOGIC_OP_OR_INVERTED = 13,
            LOGIC_OP_NAND = 14,
            LOGIC_OP_SET = 15,
            LOGIC_OP_MAX = 16,
        }
        enum BlendFactor {
            BLEND_FACTOR_ZERO = 0,
            BLEND_FACTOR_ONE = 1,
            BLEND_FACTOR_SRC_COLOR = 2,
            BLEND_FACTOR_ONE_MINUS_SRC_COLOR = 3,
            BLEND_FACTOR_DST_COLOR = 4,
            BLEND_FACTOR_ONE_MINUS_DST_COLOR = 5,
            BLEND_FACTOR_SRC_ALPHA = 6,
            BLEND_FACTOR_ONE_MINUS_SRC_ALPHA = 7,
            BLEND_FACTOR_DST_ALPHA = 8,
            BLEND_FACTOR_ONE_MINUS_DST_ALPHA = 9,
            BLEND_FACTOR_CONSTANT_COLOR = 10,
            BLEND_FACTOR_ONE_MINUS_CONSTANT_COLOR = 11,
            BLEND_FACTOR_CONSTANT_ALPHA = 12,
            BLEND_FACTOR_ONE_MINUS_CONSTANT_ALPHA = 13,
            BLEND_FACTOR_SRC_ALPHA_SATURATE = 14,
            BLEND_FACTOR_SRC1_COLOR = 15,
            BLEND_FACTOR_ONE_MINUS_SRC1_COLOR = 16,
            BLEND_FACTOR_SRC1_ALPHA = 17,
            BLEND_FACTOR_ONE_MINUS_SRC1_ALPHA = 18,
            BLEND_FACTOR_MAX = 19,
        }
        enum BlendOperation {
            BLEND_OP_ADD = 0,
            BLEND_OP_SUBTRACT = 1,
            BLEND_OP_REVERSE_SUBTRACT = 2,
            BLEND_OP_MINIMUM = 3,
            BLEND_OP_MAXIMUM = 4,
            BLEND_OP_MAX = 5,
        }
        enum PipelineDynamicStateFlags {
            DYNAMIC_STATE_LINE_WIDTH = 1,
            DYNAMIC_STATE_DEPTH_BIAS = 2,
            DYNAMIC_STATE_BLEND_CONSTANTS = 4,
            DYNAMIC_STATE_DEPTH_BOUNDS = 8,
            DYNAMIC_STATE_STENCIL_COMPARE_MASK = 16,
            DYNAMIC_STATE_STENCIL_WRITE_MASK = 32,
            DYNAMIC_STATE_STENCIL_REFERENCE = 64,
        }
        enum InitialAction {
            INITIAL_ACTION_CLEAR = 0,
            INITIAL_ACTION_CLEAR_REGION = 1,
            INITIAL_ACTION_CLEAR_REGION_CONTINUE = 2,
            INITIAL_ACTION_KEEP = 3,
            INITIAL_ACTION_DROP = 4,
            INITIAL_ACTION_CONTINUE = 5,
            INITIAL_ACTION_MAX = 6,
        }
        enum FinalAction {
            FINAL_ACTION_READ = 0,
            FINAL_ACTION_DISCARD = 1,
            FINAL_ACTION_CONTINUE = 2,
            FINAL_ACTION_MAX = 3,
        }
        enum ShaderStage {
            SHADER_STAGE_VERTEX = 0,
            SHADER_STAGE_FRAGMENT = 1,
            SHADER_STAGE_TESSELATION_CONTROL = 2,
            SHADER_STAGE_TESSELATION_EVALUATION = 3,
            SHADER_STAGE_COMPUTE = 4,
            SHADER_STAGE_MAX = 5,
            SHADER_STAGE_VERTEX_BIT = 1,
            SHADER_STAGE_FRAGMENT_BIT = 2,
            SHADER_STAGE_TESSELATION_CONTROL_BIT = 4,
            SHADER_STAGE_TESSELATION_EVALUATION_BIT = 8,
            SHADER_STAGE_COMPUTE_BIT = 16,
        }
        enum ShaderLanguage {
            SHADER_LANGUAGE_GLSL = 0,
            SHADER_LANGUAGE_HLSL = 1,
        }
        enum PipelineSpecializationConstantType {
            PIPELINE_SPECIALIZATION_CONSTANT_TYPE_BOOL = 0,
            PIPELINE_SPECIALIZATION_CONSTANT_TYPE_INT = 1,
            PIPELINE_SPECIALIZATION_CONSTANT_TYPE_FLOAT = 2,
        }
        enum Limit {
            LIMIT_MAX_BOUND_UNIFORM_SETS = 0,
            LIMIT_MAX_FRAMEBUFFER_COLOR_ATTACHMENTS = 1,
            LIMIT_MAX_TEXTURES_PER_UNIFORM_SET = 2,
            LIMIT_MAX_SAMPLERS_PER_UNIFORM_SET = 3,
            LIMIT_MAX_STORAGE_BUFFERS_PER_UNIFORM_SET = 4,
            LIMIT_MAX_STORAGE_IMAGES_PER_UNIFORM_SET = 5,
            LIMIT_MAX_UNIFORM_BUFFERS_PER_UNIFORM_SET = 6,
            LIMIT_MAX_DRAW_INDEXED_INDEX = 7,
            LIMIT_MAX_FRAMEBUFFER_HEIGHT = 8,
            LIMIT_MAX_FRAMEBUFFER_WIDTH = 9,
            LIMIT_MAX_TEXTURE_ARRAY_LAYERS = 10,
            LIMIT_MAX_TEXTURE_SIZE_1D = 11,
            LIMIT_MAX_TEXTURE_SIZE_2D = 12,
            LIMIT_MAX_TEXTURE_SIZE_3D = 13,
            LIMIT_MAX_TEXTURE_SIZE_CUBE = 14,
            LIMIT_MAX_TEXTURES_PER_SHADER_STAGE = 15,
            LIMIT_MAX_SAMPLERS_PER_SHADER_STAGE = 16,
            LIMIT_MAX_STORAGE_BUFFERS_PER_SHADER_STAGE = 17,
            LIMIT_MAX_STORAGE_IMAGES_PER_SHADER_STAGE = 18,
            LIMIT_MAX_UNIFORM_BUFFERS_PER_SHADER_STAGE = 19,
            LIMIT_MAX_PUSH_CONSTANT_SIZE = 20,
            LIMIT_MAX_UNIFORM_BUFFER_SIZE = 21,
            LIMIT_MAX_VERTEX_INPUT_ATTRIBUTE_OFFSET = 22,
            LIMIT_MAX_VERTEX_INPUT_ATTRIBUTES = 23,
            LIMIT_MAX_VERTEX_INPUT_BINDINGS = 24,
            LIMIT_MAX_VERTEX_INPUT_BINDING_STRIDE = 25,
            LIMIT_MIN_UNIFORM_BUFFER_OFFSET_ALIGNMENT = 26,
            LIMIT_MAX_COMPUTE_SHARED_MEMORY_SIZE = 27,
            LIMIT_MAX_COMPUTE_WORKGROUP_COUNT_X = 28,
            LIMIT_MAX_COMPUTE_WORKGROUP_COUNT_Y = 29,
            LIMIT_MAX_COMPUTE_WORKGROUP_COUNT_Z = 30,
            LIMIT_MAX_COMPUTE_WORKGROUP_INVOCATIONS = 31,
            LIMIT_MAX_COMPUTE_WORKGROUP_SIZE_X = 32,
            LIMIT_MAX_COMPUTE_WORKGROUP_SIZE_Y = 33,
            LIMIT_MAX_COMPUTE_WORKGROUP_SIZE_Z = 34,
            LIMIT_MAX_VIEWPORT_DIMENSIONS_X = 35,
            LIMIT_MAX_VIEWPORT_DIMENSIONS_Y = 36,
        }
        enum MemoryType {
            MEMORY_TEXTURES = 0,
            MEMORY_BUFFERS = 1,
            MEMORY_TOTAL = 2,
        }
    }
    class RenderingDevice extends Object {
        static readonly INVALID_ID = -1
        static readonly INVALID_FORMAT_ID = -1
        texture_create(format: RDTextureFormat, view: RDTextureView, data: Array = <any> {} /*compound.type from 28([object Object])*/): RID
        texture_create_shared(view: RDTextureView, with_texture: RID): RID
        texture_create_shared_from_slice(view: RDTextureView, with_texture: RID, layer: number /*i64*/, mipmap: number /*i64*/, mipmaps: number /*i64*/ = 1, slice_type: RenderingDevice.TextureSliceType = 0): RID
        texture_create_from_extension(type: RenderingDevice.TextureType, format: RenderingDevice.DataFormat, samples: RenderingDevice.TextureSamples, usage_flags: RenderingDevice.TextureUsageBits, image: number /*i64*/, width: number /*i64*/, height: number /*i64*/, depth: number /*i64*/, layers: number /*i64*/): RID
        texture_update(texture: RID, layer: number /*i64*/, data: PackedByteArray, post_barrier: RenderingDevice.BarrierMask = 32767): GodotError
        texture_get_data(texture: RID, layer: number /*i64*/): PackedByteArray
        texture_is_format_supported_for_usage(format: RenderingDevice.DataFormat, usage_flags: RenderingDevice.TextureUsageBits): boolean
        texture_is_shared(texture: RID): boolean
        texture_is_valid(texture: RID): boolean
        texture_copy(from_texture: RID, to_texture: RID, from_pos: Vector3, to_pos: Vector3, size: Vector3, src_mipmap: number /*i64*/, dst_mipmap: number /*i64*/, src_layer: number /*i64*/, dst_layer: number /*i64*/, post_barrier: RenderingDevice.BarrierMask = 32767): GodotError
        texture_clear(texture: RID, color: Color, base_mipmap: number /*i64*/, mipmap_count: number /*i64*/, base_layer: number /*i64*/, layer_count: number /*i64*/, post_barrier: RenderingDevice.BarrierMask = 32767): GodotError
        texture_resolve_multisample(from_texture: RID, to_texture: RID, post_barrier: RenderingDevice.BarrierMask = 32767): GodotError
        texture_get_format(texture: RID): RDTextureFormat
        texture_get_native_handle(texture: RID): number /*i64*/
        framebuffer_format_create(attachments: Array, view_count: number /*i64*/ = 1): number /*i64*/
        framebuffer_format_create_multipass(attachments: Array, passes: Array, view_count: number /*i64*/ = 1): number /*i64*/
        framebuffer_format_create_empty(samples: RenderingDevice.TextureSamples = 0): number /*i64*/
        framebuffer_format_get_texture_samples(format: number /*i64*/, render_pass: number /*i64*/ = 0): RenderingDevice.TextureSamples
        framebuffer_create(textures: Array, validate_with_format: number /*i64*/ = -1, view_count: number /*i64*/ = 1): RID
        framebuffer_create_multipass(textures: Array, passes: Array, validate_with_format: number /*i64*/ = -1, view_count: number /*i64*/ = 1): RID
        framebuffer_create_empty(size: Vector2i, samples: RenderingDevice.TextureSamples = 0, validate_with_format: number /*i64*/ = -1): RID
        framebuffer_get_format(framebuffer: RID): number /*i64*/
        framebuffer_is_valid(framebuffer: RID): boolean
        sampler_create(state: RDSamplerState): RID
        sampler_is_format_supported_for_filter(format: RenderingDevice.DataFormat, sampler_filter: RenderingDevice.SamplerFilter): boolean
        vertex_buffer_create(size_bytes: number /*i64*/, data: PackedByteArray = <any> {} /*compound.type from 29([object Object])*/, use_as_storage: boolean = false): RID
        vertex_format_create(vertex_descriptions: Array): number /*i64*/
        vertex_array_create(vertex_count: number /*i64*/, vertex_format: number /*i64*/, src_buffers: Array, offsets: PackedInt64Array = <any> {} /*compound.type from 31([object Object])*/): RID
        index_buffer_create(size_indices: number /*i64*/, format: RenderingDevice.IndexBufferFormat, data: PackedByteArray = <any> {} /*compound.type from 29([object Object])*/, use_restart_indices: boolean = false): RID
        index_array_create(index_buffer: RID, index_offset: number /*i64*/, index_count: number /*i64*/): RID
        shader_compile_spirv_from_source(shader_source: RDShaderSource, allow_cache: boolean = true): RDShaderSPIRV
        shader_compile_binary_from_spirv(spirv_data: RDShaderSPIRV, name: string = ''): PackedByteArray
        shader_create_from_spirv(spirv_data: RDShaderSPIRV, name: string = ''): RID
        shader_create_from_bytecode(binary_data: PackedByteArray, placeholder_rid: RID = <any> {} /*compound.type from 23([object Object])*/): RID
        shader_create_placeholder(): RID
        shader_get_vertex_input_attribute_mask(shader: RID): number /*i64*/
        uniform_buffer_create(size_bytes: number /*i64*/, data: PackedByteArray = <any> {} /*compound.type from 29([object Object])*/): RID
        storage_buffer_create(size_bytes: number /*i64*/, data: PackedByteArray = <any> {} /*compound.type from 29([object Object])*/, usage: RenderingDevice.StorageBufferUsage = 0): RID
        texture_buffer_create(size_bytes: number /*i64*/, format: RenderingDevice.DataFormat, data: PackedByteArray = <any> {} /*compound.type from 29([object Object])*/): RID
        uniform_set_create(uniforms: Array, shader: RID, shader_set: number /*i64*/): RID
        uniform_set_is_valid(uniform_set: RID): boolean
        buffer_update(buffer: RID, offset: number /*i64*/, size_bytes: number /*i64*/, data: PackedByteArray, post_barrier: RenderingDevice.BarrierMask = 32767): GodotError
        buffer_clear(buffer: RID, offset: number /*i64*/, size_bytes: number /*i64*/, post_barrier: RenderingDevice.BarrierMask = 32767): GodotError
        buffer_get_data(buffer: RID, offset_bytes: number /*i64*/ = 0, size_bytes: number /*i64*/ = 0): PackedByteArray
        render_pipeline_create(shader: RID, framebuffer_format: number /*i64*/, vertex_format: number /*i64*/, primitive: RenderingDevice.RenderPrimitive, rasterization_state: RDPipelineRasterizationState, multisample_state: RDPipelineMultisampleState, stencil_state: RDPipelineDepthStencilState, color_blend_state: RDPipelineColorBlendState, dynamic_state_flags: RenderingDevice.PipelineDynamicStateFlags = 0, for_render_pass: number /*i64*/ = 0, specialization_constants: Array = <any> {} /*compound.type from 28([object Object])*/): RID
        render_pipeline_is_valid(render_pipeline: RID): boolean
        compute_pipeline_create(shader: RID, specialization_constants: Array = <any> {} /*compound.type from 28([object Object])*/): RID
        compute_pipeline_is_valid(compute_pipeline: RID): boolean
        screen_get_width(screen: number /*i64*/ = 0): number /*i64*/
        screen_get_height(screen: number /*i64*/ = 0): number /*i64*/
        screen_get_framebuffer_format(): number /*i64*/
        draw_list_begin_for_screen(screen: number /*i64*/ = 0, clear_color: Color = new Color(0, 0, 0, 1)): number /*i64*/
        draw_list_begin(framebuffer: RID, initial_color_action: RenderingDevice.InitialAction, final_color_action: RenderingDevice.FinalAction, initial_depth_action: RenderingDevice.InitialAction, final_depth_action: RenderingDevice.FinalAction, clear_color_values: PackedColorArray = <any> {} /*compound.type from 37([object Object])*/, clear_depth: number /*f64*/ = 1, clear_stencil: number /*i64*/ = 0, region: Rect2 = <any> {} /*compound.type from 7([object Object])*/, storage_textures: Array = <any> {} /*compound.type from 28([object Object])*/): number /*i64*/
        draw_list_begin_split(framebuffer: RID, splits: number /*i64*/, initial_color_action: RenderingDevice.InitialAction, final_color_action: RenderingDevice.FinalAction, initial_depth_action: RenderingDevice.InitialAction, final_depth_action: RenderingDevice.FinalAction, clear_color_values: PackedColorArray = <any> {} /*compound.type from 37([object Object])*/, clear_depth: number /*f64*/ = 1, clear_stencil: number /*i64*/ = 0, region: Rect2 = <any> {} /*compound.type from 7([object Object])*/, storage_textures: Array = <any> {} /*compound.type from 28([object Object])*/): PackedInt64Array
        draw_list_set_blend_constants(draw_list: number /*i64*/, color: Color): void
        draw_list_bind_render_pipeline(draw_list: number /*i64*/, render_pipeline: RID): void
        draw_list_bind_uniform_set(draw_list: number /*i64*/, uniform_set: RID, set_index: number /*i64*/): void
        draw_list_bind_vertex_array(draw_list: number /*i64*/, vertex_array: RID): void
        draw_list_bind_index_array(draw_list: number /*i64*/, index_array: RID): void
        draw_list_set_push_constant(draw_list: number /*i64*/, buffer: PackedByteArray, size_bytes: number /*i64*/): void
        draw_list_draw(draw_list: number /*i64*/, use_indices: boolean, instances: number /*i64*/, procedural_vertex_count: number /*i64*/ = 0): void
        draw_list_enable_scissor(draw_list: number /*i64*/, rect: Rect2 = <any> {} /*compound.type from 7([object Object])*/): void
        draw_list_disable_scissor(draw_list: number /*i64*/): void
        draw_list_switch_to_next_pass(): number /*i64*/
        draw_list_switch_to_next_pass_split(splits: number /*i64*/): PackedInt64Array
        draw_list_end(post_barrier: RenderingDevice.BarrierMask = 32767): void
        compute_list_begin(allow_draw_overlap: boolean = false): number /*i64*/
        compute_list_bind_compute_pipeline(compute_list: number /*i64*/, compute_pipeline: RID): void
        compute_list_set_push_constant(compute_list: number /*i64*/, buffer: PackedByteArray, size_bytes: number /*i64*/): void
        compute_list_bind_uniform_set(compute_list: number /*i64*/, uniform_set: RID, set_index: number /*i64*/): void
        compute_list_dispatch(compute_list: number /*i64*/, x_groups: number /*i64*/, y_groups: number /*i64*/, z_groups: number /*i64*/): void
        compute_list_add_barrier(compute_list: number /*i64*/): void
        compute_list_end(post_barrier: RenderingDevice.BarrierMask = 32767): void
        free_rid(rid: RID): void
        capture_timestamp(name: string): void
        get_captured_timestamps_count(): number /*i64*/
        get_captured_timestamps_frame(): number /*i64*/
        get_captured_timestamp_gpu_time(index: number /*i64*/): number /*i64*/
        get_captured_timestamp_cpu_time(index: number /*i64*/): number /*i64*/
        get_captured_timestamp_name(index: number /*i64*/): string
        limit_get(limit: RenderingDevice.Limit): number /*i64*/
        get_frame_delay(): number /*i64*/
        submit(): void
        sync(): void
        barrier(from: RenderingDevice.BarrierMask = 32767, to: RenderingDevice.BarrierMask = 32767): void
        full_barrier(): void
        create_local_device(): RenderingDevice
        set_resource_name(id: RID, name: string): void
        draw_command_begin_label(name: string, color: Color): void
        draw_command_insert_label(name: string, color: Color): void
        draw_command_end_label(): void
        get_device_vendor_name(): string
        get_device_name(): string
        get_device_pipeline_cache_uuid(): string
        get_memory_usage(type: RenderingDevice.MemoryType): number /*i64*/
        get_driver_resource(resource: RenderingDevice.DriverResource, rid: RID, index: number /*i64*/): number /*i64*/
    }
    class ReparentDialog extends ConfirmationDialog {
        _cancel(): void
        readonly reparent: Signal
    }
    class ReplicationEditor extends VBoxContainer {
        _update_config(): void
        _update_value(property: NodePath, column: number /*i64*/, value: number /*i64*/): void
    }
    class Resource extends RefCounted {
        /* gdvirtual */ _get_rid(): RID
        /* gdvirtual */ _setup_local_to_scene(): void
        set_path(path: string): void
        take_over_path(path: string): void
        get_path(): string
        set_name(name: string): void
        get_name(): string
        get_rid(): RID
        set_local_to_scene(enable: boolean): void
        is_local_to_scene(): boolean
        get_local_scene(): Node
        setup_local_to_scene(): void
        emit_changed(): void
        duplicate(subresources: boolean = false): Resource
        resource_local_to_scene: boolean
        resource_path: string
        resource_name: string
        readonly changed: Signal
        readonly setup_local_to_scene_requested: Signal
    }
    class ResourceFormatImporterSaver extends ResourceFormatSaver {
    }
    namespace ResourceFormatLoader {
        enum CacheMode {
            CACHE_MODE_IGNORE = 0,
            CACHE_MODE_REUSE = 1,
            CACHE_MODE_REPLACE = 2,
        }
    }
    class ResourceFormatLoader extends RefCounted {
        /* gdvirtual */ _get_recognized_extensions(): PackedStringArray
        /* gdvirtual */ _recognize_path(path: string, type: StringName): boolean
        /* gdvirtual */ _handles_type(type: StringName): boolean
        /* gdvirtual */ _get_resource_type(path: string): string
        /* gdvirtual */ _get_resource_script_class(path: string): string
        /* gdvirtual */ _get_resource_uid(path: string): number /*i64*/
        /* gdvirtual */ _get_dependencies(path: string, add_types: boolean): PackedStringArray
        /* gdvirtual */ _rename_dependencies(path: string, renames: Dictionary): GodotError
        /* gdvirtual */ _exists(path: string): boolean
        /* gdvirtual */ _get_classes_used(path: string): PackedStringArray
        /* gdvirtual */ _load(path: string, original_path: string, use_sub_threads: boolean, cache_mode: number /*i64*/): void
    }
    class ResourceFormatSaver extends RefCounted {
        /* gdvirtual */ _save(resource: Resource, path: string, flags: number /*i64*/): GodotError
        /* gdvirtual */ _set_uid(path: string, uid: number /*i64*/): GodotError
        /* gdvirtual */ _recognize(resource: Resource): boolean
        /* gdvirtual */ _get_recognized_extensions(resource: Resource): PackedStringArray
        /* gdvirtual */ _recognize_path(resource: Resource, path: string): boolean
    }
    namespace ResourceImporter {
        enum ImportOrder {
            IMPORT_ORDER_DEFAULT = 0,
            IMPORT_ORDER_SCENE = 100,
        }
    }
    class ResourceImporter extends RefCounted {
    }
    class ResourceImporterBMFont extends ResourceImporter {
    }
    class ResourceImporterBitMap extends ResourceImporter {
    }
    class ResourceImporterCSVTranslation extends ResourceImporter {
    }
    class ResourceImporterDynamicFont extends ResourceImporter {
    }
    class ResourceImporterImage extends ResourceImporter {
    }
    class ResourceImporterImageFont extends ResourceImporter {
    }
    class ResourceImporterLayeredTexture extends ResourceImporter {
    }
    class ResourceImporterMP3 extends ResourceImporter {
    }
    class ResourceImporterOBJ extends ResourceImporter {
    }
    class ResourceImporterOggVorbis extends ResourceImporter {
        static load_from_buffer(buffer: PackedByteArray): AudioStreamOggVorbis
        static load_from_file(path: string): AudioStreamOggVorbis
    }
    class ResourceImporterScene extends ResourceImporter {
    }
    class ResourceImporterShaderFile extends ResourceImporter {
    }
    class ResourceImporterTexture extends ResourceImporter {
    }
    class ResourceImporterTextureAtlas extends ResourceImporter {
    }
    class ResourceImporterWAV extends ResourceImporter {
    }
    class ResourcePreloader extends Node {
        _set_resources(resources: Array): void
        _get_resources(): Array
        add_resource(name: StringName, resource: Resource): void
        remove_resource(name: StringName): void
        rename_resource(name: StringName, newname: StringName): void
        has_resource(name: StringName): boolean
        get_resource(name: StringName): Resource
        get_resource_list(): PackedStringArray
        resources: Array
    }
    class ResourcePreloaderEditor extends PanelContainer {
        _update_library(): void
        _remove_resource(to_remove: string): void
    }
    class ResourcePreloaderEditorPlugin extends EditorPlugin {
    }
    namespace RibbonTrailMesh {
        enum Shape {
            SHAPE_FLAT = 0,
            SHAPE_CROSS = 1,
        }
    }
    class RibbonTrailMesh extends PrimitiveMesh {
        set_size(size: number /*f64*/): void
        get_size(): number /*f64*/
        set_sections(sections: number /*i64*/): void
        get_sections(): number /*i64*/
        set_section_length(section_length: number /*f64*/): void
        get_section_length(): number /*f64*/
        set_section_segments(section_segments: number /*i64*/): void
        get_section_segments(): number /*i64*/
        set_curve(curve: Curve): void
        get_curve(): Curve
        set_shape(shape: RibbonTrailMesh.Shape): void
        get_shape(): RibbonTrailMesh.Shape
        shape: number /*i64*/
        size: number /*f64*/
        sections: number /*i64*/
        section_length: number /*f64*/
        section_segments: number /*i64*/
        curve: Curve
    }
    class RichTextEffect extends Resource {
        /* gdvirtual */ _process_custom_fx(char_fx: CharFXTransform): boolean
    }
    namespace RichTextLabel {
        enum ListType {
            LIST_NUMBERS = 0,
            LIST_LETTERS = 1,
            LIST_ROMAN = 2,
            LIST_DOTS = 3,
        }
        enum MenuItems {
            MENU_COPY = 0,
            MENU_SELECT_ALL = 1,
            MENU_MAX = 2,
        }
        enum ImageUpdateMask {
            UPDATE_TEXTURE = 1,
            UPDATE_SIZE = 2,
            UPDATE_COLOR = 4,
            UPDATE_ALIGNMENT = 8,
            UPDATE_REGION = 16,
            UPDATE_PAD = 32,
            UPDATE_TOOLTIP = 64,
            UPDATE_WIDTH_IN_PERCENT = 128,
        }
    }
    class RichTextLabel extends Control {
        get_parsed_text(): string
        add_text(text: string): void
        set_text(text: string): void
        add_image(image: Texture2D, width: number /*i64*/ = 0, height: number /*i64*/ = 0, color: Color = new Color(1, 1, 1, 1), inline_align: InlineAlignment = 5, region: Rect2 = <any> {} /*compound.type from 7([object Object])*/, key: any = <any> {} /*compound.type from nil*/, pad: boolean = false, tooltip: string = '', size_in_percent: boolean = false): void
        update_image(key: any, mask: RichTextLabel.ImageUpdateMask, image: Texture2D, width: number /*i64*/ = 0, height: number /*i64*/ = 0, color: Color = new Color(1, 1, 1, 1), inline_align: InlineAlignment = 5, region: Rect2 = <any> {} /*compound.type from 7([object Object])*/, pad: boolean = false, tooltip: string = '', size_in_percent: boolean = false): void
        newline(): void
        remove_paragraph(paragraph: number /*i64*/): boolean
        push_font(font: Font, font_size: number /*i64*/ = 0): void
        push_font_size(font_size: number /*i64*/): void
        push_normal(): void
        push_bold(): void
        push_bold_italics(): void
        push_italics(): void
        push_mono(): void
        push_color(color: Color): void
        push_outline_size(outline_size: number /*i64*/): void
        push_outline_color(color: Color): void
        push_paragraph(alignment: HorizontalAlignment, base_direction: Control.TextDirection = 0, language: string = '', st_parser: TextServer.StructuredTextParser = 0, justification_flags: TextServer.JustificationFlag = 163, tab_stops: PackedFloat32Array = <any> {} /*compound.type from 32([object Object])*/): void
        push_indent(level: number /*i64*/): void
        push_list(level: number /*i64*/, type: RichTextLabel.ListType, capitalize: boolean, bullet: string = '•'): void
        push_meta(data: any): void
        push_hint(description: string): void
        push_language(language: string): void
        push_underline(): void
        push_strikethrough(): void
        push_table(columns: number /*i64*/, inline_align: InlineAlignment = 0, align_to_row: number /*i64*/ = -1): void
        push_dropcap(string_: string, font: Font, size: number /*i64*/, dropcap_margins: Rect2 = <any> {} /*compound.type from 7([object Object])*/, color: Color = new Color(1, 1, 1, 1), outline_size: number /*i64*/ = 0, outline_color: Color = new Color(0, 0, 0, 0)): void
        set_table_column_expand(column: number /*i64*/, expand: boolean, ratio: number /*i64*/ = 1): void
        set_cell_row_background_color(odd_row_bg: Color, even_row_bg: Color): void
        set_cell_border_color(color: Color): void
        set_cell_size_override(min_size: Vector2, max_size: Vector2): void
        set_cell_padding(padding: Rect2): void
        push_cell(): void
        push_fgcolor(fgcolor: Color): void
        push_bgcolor(bgcolor: Color): void
        push_customfx(effect: RichTextEffect, env: Dictionary): void
        push_context(): void
        pop_context(): void
        pop(): void
        pop_all(): void
        clear(): void
        set_structured_text_bidi_override(parser: TextServer.StructuredTextParser): void
        get_structured_text_bidi_override(): TextServer.StructuredTextParser
        set_structured_text_bidi_override_options(args: Array): void
        get_structured_text_bidi_override_options(): Array
        set_text_direction(direction: Control.TextDirection): void
        get_text_direction(): Control.TextDirection
        set_language(language: string): void
        get_language(): string
        set_autowrap_mode(autowrap_mode: TextServer.AutowrapMode): void
        get_autowrap_mode(): TextServer.AutowrapMode
        set_meta_underline(enable: boolean): void
        is_meta_underlined(): boolean
        set_hint_underline(enable: boolean): void
        is_hint_underlined(): boolean
        set_scroll_active(active: boolean): void
        is_scroll_active(): boolean
        set_scroll_follow(follow: boolean): void
        is_scroll_following(): boolean
        get_v_scroll_bar(): VScrollBar
        scroll_to_line(line: number /*i64*/): void
        scroll_to_paragraph(paragraph: number /*i64*/): void
        scroll_to_selection(): void
        set_tab_size(spaces: number /*i64*/): void
        get_tab_size(): number /*i64*/
        set_fit_content(enabled: boolean): void
        is_fit_content_enabled(): boolean
        set_selection_enabled(enabled: boolean): void
        is_selection_enabled(): boolean
        set_context_menu_enabled(enabled: boolean): void
        is_context_menu_enabled(): boolean
        set_shortcut_keys_enabled(enabled: boolean): void
        is_shortcut_keys_enabled(): boolean
        set_deselect_on_focus_loss_enabled(enable: boolean): void
        is_deselect_on_focus_loss_enabled(): boolean
        set_drag_and_drop_selection_enabled(enable: boolean): void
        is_drag_and_drop_selection_enabled(): boolean
        get_selection_from(): number /*i64*/
        get_selection_to(): number /*i64*/
        select_all(): void
        get_selected_text(): string
        deselect(): void
        parse_bbcode(bbcode: string): void
        append_text(bbcode: string): void
        get_text(): string
        is_ready(): boolean
        set_threaded(threaded: boolean): void
        is_threaded(): boolean
        set_progress_bar_delay(delay_ms: number /*i64*/): void
        get_progress_bar_delay(): number /*i64*/
        set_visible_characters(amount: number /*i64*/): void
        get_visible_characters(): number /*i64*/
        get_visible_characters_behavior(): TextServer.VisibleCharactersBehavior
        set_visible_characters_behavior(behavior: TextServer.VisibleCharactersBehavior): void
        set_visible_ratio(ratio: number /*f64*/): void
        get_visible_ratio(): number /*f64*/
        get_character_line(character: number /*i64*/): number /*i64*/
        get_character_paragraph(character: number /*i64*/): number /*i64*/
        get_total_character_count(): number /*i64*/
        set_use_bbcode(enable: boolean): void
        is_using_bbcode(): boolean
        get_line_count(): number /*i64*/
        get_visible_line_count(): number /*i64*/
        get_paragraph_count(): number /*i64*/
        get_visible_paragraph_count(): number /*i64*/
        get_content_height(): number /*i64*/
        get_content_width(): number /*i64*/
        get_line_offset(line: number /*i64*/): number /*f64*/
        get_paragraph_offset(paragraph: number /*i64*/): number /*f64*/
        parse_expressions_for_values(expressions: PackedStringArray): Dictionary
        set_effects(effects: Array): void
        get_effects(): Array
        install_effect(effect: any): void
        get_menu(): PopupMenu
        is_menu_visible(): boolean
        menu_option(option: number /*i64*/): void
        _thread_end(): void
        bbcode_enabled: boolean
        text: string
        fit_content: boolean
        scroll_active: boolean
        scroll_following: boolean
        autowrap_mode: number /*i64*/
        tab_size: number /*i64*/
        context_menu_enabled: boolean
        shortcut_keys_enabled: boolean
        custom_effects: Array
        meta_underlined: boolean
        hint_underlined: boolean
        threaded: boolean
        progress_bar_delay: number /*i64*/
        selection_enabled: boolean
        deselect_on_focus_loss_enabled: boolean
        drag_and_drop_selection_enabled: boolean
        visible_characters: number /*i64*/
        visible_characters_behavior: number /*i64*/
        visible_ratio: number /*f64*/
        text_direction: number /*i64*/
        language: string
        structured_text_bidi_override: number /*i64*/
        structured_text_bidi_override_options: Array
        readonly meta_clicked: Signal
        readonly meta_hover_started: Signal
        readonly meta_hover_ended: Signal
        readonly finished: Signal
    }
    namespace RigidBody2D {
        enum FreezeMode {
            FREEZE_MODE_STATIC = 0,
            FREEZE_MODE_KINEMATIC = 1,
        }
        enum CenterOfMassMode {
            CENTER_OF_MASS_MODE_AUTO = 0,
            CENTER_OF_MASS_MODE_CUSTOM = 1,
        }
        enum DampMode {
            DAMP_MODE_COMBINE = 0,
            DAMP_MODE_REPLACE = 1,
        }
        enum CCDMode {
            CCD_MODE_DISABLED = 0,
            CCD_MODE_CAST_RAY = 1,
            CCD_MODE_CAST_SHAPE = 2,
        }
    }
    class RigidBody2D extends PhysicsBody2D {
        /* gdvirtual */ _integrate_forces(state: PhysicsDirectBodyState2D): void
        set_mass(mass: number /*f64*/): void
        get_mass(): number /*f64*/
        get_inertia(): number /*f64*/
        set_inertia(inertia: number /*f64*/): void
        set_center_of_mass_mode(mode: RigidBody2D.CenterOfMassMode): void
        get_center_of_mass_mode(): RigidBody2D.CenterOfMassMode
        set_center_of_mass(center_of_mass: Vector2): void
        get_center_of_mass(): Vector2
        set_physics_material_override(physics_material_override: PhysicsMaterial): void
        get_physics_material_override(): PhysicsMaterial
        set_gravity_scale(gravity_scale: number /*f64*/): void
        get_gravity_scale(): number /*f64*/
        set_linear_damp_mode(linear_damp_mode: RigidBody2D.DampMode): void
        get_linear_damp_mode(): RigidBody2D.DampMode
        set_angular_damp_mode(angular_damp_mode: RigidBody2D.DampMode): void
        get_angular_damp_mode(): RigidBody2D.DampMode
        set_linear_damp(linear_damp: number /*f64*/): void
        get_linear_damp(): number /*f64*/
        set_angular_damp(angular_damp: number /*f64*/): void
        get_angular_damp(): number /*f64*/
        set_linear_velocity(linear_velocity: Vector2): void
        get_linear_velocity(): Vector2
        set_angular_velocity(angular_velocity: number /*f64*/): void
        get_angular_velocity(): number /*f64*/
        set_max_contacts_reported(amount: number /*i64*/): void
        get_max_contacts_reported(): number /*i64*/
        get_contact_count(): number /*i64*/
        set_use_custom_integrator(enable: boolean): void
        is_using_custom_integrator(): boolean
        set_contact_monitor(enabled: boolean): void
        is_contact_monitor_enabled(): boolean
        set_continuous_collision_detection_mode(mode: RigidBody2D.CCDMode): void
        get_continuous_collision_detection_mode(): RigidBody2D.CCDMode
        set_axis_velocity(axis_velocity: Vector2): void
        apply_central_impulse(impulse: Vector2 = Vector2.ZERO): void
        apply_impulse(impulse: Vector2, position: Vector2 = Vector2.ZERO): void
        apply_torque_impulse(torque: number /*f64*/): void
        apply_central_force(force: Vector2): void
        apply_force(force: Vector2, position: Vector2 = Vector2.ZERO): void
        apply_torque(torque: number /*f64*/): void
        add_constant_central_force(force: Vector2): void
        add_constant_force(force: Vector2, position: Vector2 = Vector2.ZERO): void
        add_constant_torque(torque: number /*f64*/): void
        set_constant_force(force: Vector2): void
        get_constant_force(): Vector2
        set_constant_torque(torque: number /*f64*/): void
        get_constant_torque(): number /*f64*/
        set_sleeping(sleeping: boolean): void
        is_sleeping(): boolean
        set_can_sleep(able_to_sleep: boolean): void
        is_able_to_sleep(): boolean
        set_lock_rotation_enabled(lock_rotation: boolean): void
        is_lock_rotation_enabled(): boolean
        set_freeze_enabled(freeze_mode: boolean): void
        is_freeze_enabled(): boolean
        set_freeze_mode(freeze_mode: RigidBody2D.FreezeMode): void
        get_freeze_mode(): RigidBody2D.FreezeMode
        get_colliding_bodies(): Array
        mass: number /*f64*/
        physics_material_override: PhysicsMaterial
        gravity_scale: number /*f64*/
        center_of_mass_mode: number /*i64*/
        center_of_mass: Vector2
        inertia: number /*f64*/
        sleeping: boolean
        can_sleep: boolean
        lock_rotation: boolean
        freeze: boolean
        freeze_mode: number /*i64*/
        custom_integrator: boolean
        continuous_cd: number /*i64*/
        max_contacts_reported: number /*i64*/
        contact_monitor: boolean
        linear_velocity: Vector2
        linear_damp_mode: number /*i64*/
        linear_damp: number /*f64*/
        angular_velocity: number /*f64*/
        angular_damp_mode: number /*i64*/
        angular_damp: number /*f64*/
        constant_force: Vector2
        constant_torque: number /*f64*/
        readonly body_shape_entered: Signal
        readonly body_shape_exited: Signal
        readonly body_entered: Signal
        readonly body_exited: Signal
        readonly sleeping_state_changed: Signal
    }
    namespace RigidBody3D {
        enum FreezeMode {
            FREEZE_MODE_STATIC = 0,
            FREEZE_MODE_KINEMATIC = 1,
        }
        enum CenterOfMassMode {
            CENTER_OF_MASS_MODE_AUTO = 0,
            CENTER_OF_MASS_MODE_CUSTOM = 1,
        }
        enum DampMode {
            DAMP_MODE_COMBINE = 0,
            DAMP_MODE_REPLACE = 1,
        }
    }
    class RigidBody3D extends PhysicsBody3D {
        /* gdvirtual */ _integrate_forces(state: PhysicsDirectBodyState3D): void
        set_mass(mass: number /*f64*/): void
        get_mass(): number /*f64*/
        set_inertia(inertia: Vector3): void
        get_inertia(): Vector3
        set_center_of_mass_mode(mode: RigidBody3D.CenterOfMassMode): void
        get_center_of_mass_mode(): RigidBody3D.CenterOfMassMode
        set_center_of_mass(center_of_mass: Vector3): void
        get_center_of_mass(): Vector3
        set_physics_material_override(physics_material_override: PhysicsMaterial): void
        get_physics_material_override(): PhysicsMaterial
        set_linear_velocity(linear_velocity: Vector3): void
        get_linear_velocity(): Vector3
        set_angular_velocity(angular_velocity: Vector3): void
        get_angular_velocity(): Vector3
        get_inverse_inertia_tensor(): Basis
        set_gravity_scale(gravity_scale: number /*f64*/): void
        get_gravity_scale(): number /*f64*/
        set_linear_damp_mode(linear_damp_mode: RigidBody3D.DampMode): void
        get_linear_damp_mode(): RigidBody3D.DampMode
        set_angular_damp_mode(angular_damp_mode: RigidBody3D.DampMode): void
        get_angular_damp_mode(): RigidBody3D.DampMode
        set_linear_damp(linear_damp: number /*f64*/): void
        get_linear_damp(): number /*f64*/
        set_angular_damp(angular_damp: number /*f64*/): void
        get_angular_damp(): number /*f64*/
        set_max_contacts_reported(amount: number /*i64*/): void
        get_max_contacts_reported(): number /*i64*/
        get_contact_count(): number /*i64*/
        set_use_custom_integrator(enable: boolean): void
        is_using_custom_integrator(): boolean
        set_contact_monitor(enabled: boolean): void
        is_contact_monitor_enabled(): boolean
        set_use_continuous_collision_detection(enable: boolean): void
        is_using_continuous_collision_detection(): boolean
        set_axis_velocity(axis_velocity: Vector3): void
        apply_central_impulse(impulse: Vector3): void
        apply_impulse(impulse: Vector3, position: Vector3 = new Vector3(0, 0, 0)): void
        apply_torque_impulse(impulse: Vector3): void
        apply_central_force(force: Vector3): void
        apply_force(force: Vector3, position: Vector3 = new Vector3(0, 0, 0)): void
        apply_torque(torque: Vector3): void
        add_constant_central_force(force: Vector3): void
        add_constant_force(force: Vector3, position: Vector3 = new Vector3(0, 0, 0)): void
        add_constant_torque(torque: Vector3): void
        set_constant_force(force: Vector3): void
        get_constant_force(): Vector3
        set_constant_torque(torque: Vector3): void
        get_constant_torque(): Vector3
        set_sleeping(sleeping: boolean): void
        is_sleeping(): boolean
        set_can_sleep(able_to_sleep: boolean): void
        is_able_to_sleep(): boolean
        set_lock_rotation_enabled(lock_rotation: boolean): void
        is_lock_rotation_enabled(): boolean
        set_freeze_enabled(freeze_mode: boolean): void
        is_freeze_enabled(): boolean
        set_freeze_mode(freeze_mode: RigidBody3D.FreezeMode): void
        get_freeze_mode(): RigidBody3D.FreezeMode
        get_colliding_bodies(): Array
        mass: number /*f64*/
        physics_material_override: PhysicsMaterial
        gravity_scale: number /*f64*/
        center_of_mass_mode: number /*i64*/
        center_of_mass: Vector3
        inertia: Vector3
        sleeping: boolean
        can_sleep: boolean
        lock_rotation: boolean
        freeze: boolean
        freeze_mode: number /*i64*/
        custom_integrator: boolean
        continuous_cd: boolean
        max_contacts_reported: number /*i64*/
        contact_monitor: boolean
        linear_velocity: Vector3
        linear_damp_mode: number /*i64*/
        linear_damp: number /*f64*/
        angular_velocity: Vector3
        angular_damp_mode: number /*i64*/
        angular_damp: number /*f64*/
        constant_force: Vector3
        constant_torque: Vector3
        readonly body_shape_entered: Signal
        readonly body_shape_exited: Signal
        readonly body_entered: Signal
        readonly body_exited: Signal
        readonly sleeping_state_changed: Signal
    }
    class RootMotionView extends VisualInstance3D {
        set_animation_path(path: NodePath): void
        get_animation_path(): NodePath
        set_color(color: Color): void
        get_color(): Color
        set_cell_size(size: number /*f64*/): void
        get_cell_size(): number /*f64*/
        set_radius(size: number /*f64*/): void
        get_radius(): number /*f64*/
        set_zero_y(enable: boolean): void
        get_zero_y(): boolean
        animation_path: NodePath
        color: Color
        cell_size: number /*f64*/
        radius: number /*f64*/
        zero_y: boolean
    }
    class RsConsole extends RefCounted {
        process_input(p_text: string): void
        register_command(p_text: string, p_callable: Callable, p_help: string): number /*i64*/
        unregister_command(p_id: number /*i64*/): void
        find_objects(p_keyword: string): PackedStringArray
        readonly on_output: Signal
        readonly on_clear: Signal
    }
    class RsEditorPlugin extends EditorPlugin {
    }
    class RsList extends RefCounted {
        append(p_item: any): number /*i64*/
        index_of(p_item: any): number /*i64*/
        last_index_of(p_item: any): number /*i64*/
        remove_at(p_index: number /*i64*/): boolean
        get_value(p_index: number /*i64*/): any
        is_valid_index(p_index: number /*i64*/): boolean
        clear(): void
        grow_if_needed(p_extra_count: number /*i64*/): void
        reserve(p_size: number /*i64*/): void
    }
    class RsNativeBridge extends Object {
        start(): void
        destroy(): void
        update(delta: number /*f64*/): void
        alloc_damage_number(p_parent: Node, p_secs: number /*f64*/): Control
        get_position(): Vector3
        is_possessed(): boolean
        set_terrain(p_terrain: RsTerrain): void
        set_root(p_root: Node): void
        set_direction(_unnamed_arg0: Vector3): void
        get_direction(): Vector3
        set_is_moving(_unnamed_arg0: boolean): void
        get_is_moving(): boolean
        direction: Vector3
        is_moving: boolean
        readonly game_over: Signal
        readonly damage_emitted: Signal
        readonly info_updated: Signal
    }
    class RsOutputDevice extends RefCounted {
        log(...vargargs: any[]): void
    }
    class RsTerrain extends GeometryInstance3D {
        set_radius(value: number /*f64*/): void
        get_radius(): number /*f64*/
        set_view_position(value: Vector3): void
        get_view_position(): Vector3
        get_center_position(): Vector3
        set_shader(value: Shader): void
        get_shader(): Shader
        set_texture(value: Texture2D): void
        get_texture(): Texture2D
        _im_update(): void
        view_position: Vector3
        shader: Shader
        texture: Texture2D
        readonly frame_changed: Signal
    }
    class RsTerrainGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    class SceneCacheInterface extends RefCounted {
    }
    class SceneCreateDialog extends ConfirmationDialog {
    }
    class SceneExporterGLTFPlugin extends EditorPlugin {
    }
    class SceneImportSettings extends ConfirmationDialog {
    }
    class SceneImportSettingsData extends Object {
    }
    class SceneMultiplayer extends MultiplayerAPI {
        set_root_path(path: NodePath): void
        get_root_path(): NodePath
        clear(): void
        disconnect_peer(id: number /*i64*/): void
        get_authenticating_peers(): PackedInt32Array
        send_auth(id: number /*i64*/, data: PackedByteArray): GodotError
        complete_auth(id: number /*i64*/): GodotError
        set_auth_callback(callback: Callable): void
        get_auth_callback(): Callable
        set_auth_timeout(timeout: number /*f64*/): void
        get_auth_timeout(): number /*f64*/
        set_refuse_new_connections(refuse: boolean): void
        is_refusing_new_connections(): boolean
        set_allow_object_decoding(enable: boolean): void
        is_object_decoding_allowed(): boolean
        set_server_relay_enabled(enabled: boolean): void
        is_server_relay_enabled(): boolean
        send_bytes(bytes: PackedByteArray, id: number /*i64*/ = 0, mode: MultiplayerPeer.TransferMode = 2, channel: number /*i64*/ = 0): GodotError
        get_max_sync_packet_size(): number /*i64*/
        set_max_sync_packet_size(size: number /*i64*/): void
        get_max_delta_packet_size(): number /*i64*/
        set_max_delta_packet_size(size: number /*i64*/): void
        root_path: NodePath
        auth_callback: Callable
        auth_timeout: number /*f64*/
        allow_object_decoding: boolean
        refuse_new_connections: boolean
        server_relay: boolean
        max_sync_packet_size: number /*i64*/
        max_delta_packet_size: number /*i64*/
        readonly peer_authenticating: Signal
        readonly peer_authentication_failed: Signal
        readonly peer_packet: Signal
    }
    class SceneRPCInterface extends RefCounted {
    }
    namespace SceneReplicationConfig {
        enum ReplicationMode {
            REPLICATION_MODE_NEVER = 0,
            REPLICATION_MODE_ALWAYS = 1,
            REPLICATION_MODE_ON_CHANGE = 2,
        }
    }
    class SceneReplicationConfig extends Resource {
        get_properties(): Array
        add_property(path: NodePath, index: number /*i64*/ = -1): void
        has_property(path: NodePath): boolean
        remove_property(path: NodePath): void
        property_get_index(path: NodePath): number /*i64*/
        property_get_spawn(path: NodePath): boolean
        property_set_spawn(path: NodePath, enabled: boolean): void
        property_get_replication_mode(path: NodePath): SceneReplicationConfig.ReplicationMode
        property_set_replication_mode(path: NodePath, mode: SceneReplicationConfig.ReplicationMode): void
        property_get_sync(path: NodePath): boolean
        property_set_sync(path: NodePath, enabled: boolean): void
        property_get_watch(path: NodePath): boolean
        property_set_watch(path: NodePath, enabled: boolean): void
    }
    class SceneReplicationInterface extends RefCounted {
    }
    namespace SceneState {
        enum GenEditState {
            GEN_EDIT_STATE_DISABLED = 0,
            GEN_EDIT_STATE_INSTANCE = 1,
            GEN_EDIT_STATE_MAIN = 2,
            GEN_EDIT_STATE_MAIN_INHERITED = 3,
        }
    }
    class SceneState extends RefCounted {
        get_node_count(): number /*i64*/
        get_node_type(idx: number /*i64*/): StringName
        get_node_name(idx: number /*i64*/): StringName
        get_node_path(idx: number /*i64*/, for_parent: boolean = false): NodePath
        get_node_owner_path(idx: number /*i64*/): NodePath
        is_node_instance_placeholder(idx: number /*i64*/): boolean
        get_node_instance_placeholder(idx: number /*i64*/): string
        get_node_instance(idx: number /*i64*/): PackedScene
        get_node_groups(idx: number /*i64*/): PackedStringArray
        get_node_index(idx: number /*i64*/): number /*i64*/
        get_node_property_count(idx: number /*i64*/): number /*i64*/
        get_node_property_name(idx: number /*i64*/, prop_idx: number /*i64*/): StringName
        get_node_property_value(idx: number /*i64*/, prop_idx: number /*i64*/): any
        get_connection_count(): number /*i64*/
        get_connection_source(idx: number /*i64*/): NodePath
        get_connection_signal(idx: number /*i64*/): StringName
        get_connection_target(idx: number /*i64*/): NodePath
        get_connection_method(idx: number /*i64*/): StringName
        get_connection_flags(idx: number /*i64*/): number /*i64*/
        get_connection_binds(idx: number /*i64*/): Array
        get_connection_unbinds(idx: number /*i64*/): number /*i64*/
    }
    class SceneTileProxyObject extends Object {
        readonly changed: Signal
    }
    namespace SceneTree {
        enum GroupCallFlags {
            GROUP_CALL_DEFAULT = 0,
            GROUP_CALL_REVERSE = 1,
            GROUP_CALL_DEFERRED = 2,
            GROUP_CALL_UNIQUE = 4,
        }
    }
    class SceneTree extends MainLoop {
        get_root(): Window
        has_group(name: StringName): boolean
        is_auto_accept_quit(): boolean
        set_auto_accept_quit(enabled: boolean): void
        is_quit_on_go_back(): boolean
        set_quit_on_go_back(enabled: boolean): void
        set_debug_collisions_hint(enable: boolean): void
        is_debugging_collisions_hint(): boolean
        set_debug_paths_hint(enable: boolean): void
        is_debugging_paths_hint(): boolean
        set_debug_navigation_hint(enable: boolean): void
        is_debugging_navigation_hint(): boolean
        set_edited_scene_root(scene: Node): void
        get_edited_scene_root(): Node
        set_pause(enable: boolean): void
        is_paused(): boolean
        create_timer(time_sec: number /*f64*/, process_always: boolean = true, process_in_physics: boolean = false, ignore_time_scale: boolean = false): SceneTreeTimer
        create_tween(): Tween
        get_processed_tweens(): Array
        get_node_count(): number /*i64*/
        get_frame(): number /*i64*/
        quit(exit_code: number /*i64*/ = 0): void
        queue_delete(obj: Object): void
        call_group_flags(flags: number /*i64*/, group: StringName, method: StringName, ...vargargs: any[]): void
        notify_group_flags(call_flags: number /*i64*/, group: StringName, notification: number /*i64*/): void
        set_group_flags(call_flags: number /*i64*/, group: StringName, property: string, value: any): void
        call_group(group: StringName, method: StringName, ...vargargs: any[]): void
        notify_group(group: StringName, notification: number /*i64*/): void
        set_group(group: StringName, property: string, value: any): void
        get_nodes_in_group(group: StringName): Array
        get_first_node_in_group(group: StringName): Node
        set_current_scene(child_node: Node): void
        get_current_scene(): Node
        change_scene_to_file(path: string): GodotError
        change_scene_to_packed(packed_scene: PackedScene): GodotError
        reload_current_scene(): GodotError
        unload_current_scene(): void
        set_multiplayer(multiplayer: MultiplayerAPI, root_path: NodePath = <any> {} /*compound.type from 22([object Object])*/): void
        get_multiplayer(for_path: NodePath = <any> {} /*compound.type from 22([object Object])*/): MultiplayerAPI
        set_multiplayer_poll_enabled(enabled: boolean): void
        is_multiplayer_poll_enabled(): boolean
        auto_accept_quit: boolean
        quit_on_go_back: boolean
        debug_collisions_hint: boolean
        debug_paths_hint: boolean
        debug_navigation_hint: boolean
        paused: boolean
        edited_scene_root: Node
        current_scene: Node
        readonly root: Node
        multiplayer_poll: boolean
        readonly tree_changed: Signal
        readonly tree_process_mode_changed: Signal
        readonly node_added: Signal
        readonly node_removed: Signal
        readonly node_renamed: Signal
        readonly node_configuration_warning_changed: Signal
        readonly process_frame: Signal
        readonly physics_frame: Signal
    }
    class SceneTreeDialog extends ConfirmationDialog {
        _cancel(): void
        readonly selected: Signal
    }
    class SceneTreeDock extends VBoxContainer {
        _set_owners(_unnamed_arg0: Node, _unnamed_arg1: Array): void
        _update_script_button(): void
        instantiate(_unnamed_arg0: string): void
        get_tree_editor(): SceneTreeEditor
        replace_node(_unnamed_arg0: Node, _unnamed_arg1: Node, _unnamed_arg2: boolean, _unnamed_arg3: boolean): void
        readonly remote_tree_selected: Signal
        readonly add_node_used: Signal
        readonly node_created: Signal
    }
    class SceneTreeEditor extends Control {
        _update_tree(_unnamed_arg0: boolean = false): void
        _rename_node(_unnamed_arg0: Node, _unnamed_arg1: string): void
        _test_update_tree(): void
        update_tree(): void
        readonly node_selected: Signal
        readonly node_renamed: Signal
        readonly node_prerename: Signal
        readonly node_changed: Signal
        readonly nodes_dragged: Signal
        readonly nodes_rearranged: Signal
        readonly files_dropped: Signal
        readonly script_dropped: Signal
        readonly rmb_pressed: Signal
        readonly open: Signal
        readonly open_script: Signal
    }
    class SceneTreeTimer extends RefCounted {
        set_time_left(time: number /*f64*/): void
        get_time_left(): number /*f64*/
        time_left: number /*f64*/
        readonly timeout: Signal
    }
    class ScreenSelect extends Button {
        readonly request_open_in_screen: Signal
    }
    class Script extends Resource {
        can_instantiate(): boolean
        instance_has(base_object: Object): boolean
        has_source_code(): boolean
        get_source_code(): string
        set_source_code(source: string): void
        reload(keep_state: boolean = false): GodotError
        get_base_script(): Script
        get_instance_base_type(): StringName
        has_script_signal(signal_name: StringName): boolean
        get_script_property_list(): Array
        get_script_method_list(): Array
        get_script_signal_list(): Array
        get_script_constant_map(): Dictionary
        get_property_default_value(property: StringName): any
        is_tool(): boolean
        is_abstract(): boolean
        source_code: string
    }
    class ScriptCreateDialog extends ConfirmationDialog {
        config(inherits: string, path: string, built_in_enabled: boolean = true, load_enabled: boolean = true): void
        readonly script_created: Signal
    }
    class ScriptEditor extends PanelContainer {
        _close_docs_tab(): void
        _close_all_tabs(): void
        _close_other_tabs(): void
        _goto_script_line2(_unnamed_arg0: number /*i64*/): void
        _copy_script_path(): void
        _help_class_open(_unnamed_arg0: string): void
        _help_tab_goto(_unnamed_arg0: string, _unnamed_arg1: string): boolean
        _live_auto_reload_running_scripts(): void
        _update_members_overview(): void
        _update_recent_scripts(): void
        get_current_editor(): ScriptEditorBase
        get_open_script_editors(): Array
        register_syntax_highlighter(syntax_highlighter: EditorSyntaxHighlighter): void
        unregister_syntax_highlighter(syntax_highlighter: EditorSyntaxHighlighter): void
        goto_line(line_number: number /*i64*/): void
        get_current_script(): Script
        get_open_scripts(): Array
        open_script_create_dialog(base_name: string, base_path: string): void
        readonly editor_script_changed: Signal
        readonly script_close: Signal
    }
    class ScriptEditorBase extends VBoxContainer {
        get_base_editor(): Control
        add_syntax_highlighter(highlighter: EditorSyntaxHighlighter): void
        readonly name_changed: Signal
        readonly edited_script_changed: Signal
        readonly request_help: Signal
        readonly request_open_script_at_line: Signal
        readonly request_save_history: Signal
        readonly go_to_help: Signal
        readonly search_in_files_requested: Signal
        readonly replace_in_files_requested: Signal
        readonly go_to_method: Signal
    }
    class ScriptEditorDebugger extends MarginContainer {
        live_debug_create_node(_unnamed_arg0: NodePath, _unnamed_arg1: string, _unnamed_arg2: string): void
        live_debug_instantiate_node(_unnamed_arg0: NodePath, _unnamed_arg1: string, _unnamed_arg2: string): void
        live_debug_remove_node(_unnamed_arg0: NodePath): void
        live_debug_remove_and_keep_node(_unnamed_arg0: NodePath, _unnamed_arg1: number /*i64*/): void
        live_debug_restore_node(_unnamed_arg0: number /*i64*/, _unnamed_arg1: NodePath, _unnamed_arg2: number /*i64*/): void
        live_debug_duplicate_node(_unnamed_arg0: NodePath, _unnamed_arg1: string): void
        live_debug_reparent_node(_unnamed_arg0: NodePath, _unnamed_arg1: NodePath, _unnamed_arg2: string, _unnamed_arg3: number /*i64*/): void
        request_remote_object(id: number /*i64*/): void
        update_remote_object(id: number /*i64*/, property: string, value: any): void
        readonly started: Signal
        readonly stopped: Signal
        readonly stop_requested: Signal
        readonly stack_frame_selected: Signal
        readonly error_selected: Signal
        readonly breakpoint_selected: Signal
        readonly set_execution: Signal
        readonly clear_execution: Signal
        readonly breaked: Signal
        readonly remote_object_requested: Signal
        readonly remote_object_updated: Signal
        readonly remote_object_property_updated: Signal
        readonly remote_tree_updated: Signal
        readonly output: Signal
        readonly stack_dump: Signal
        readonly stack_frame_vars: Signal
        readonly stack_frame_var: Signal
        readonly debug_data: Signal
        readonly set_breakpoint: Signal
        readonly clear_breakpoints: Signal
        readonly errors_cleared: Signal
    }
    class ScriptEditorPlugin extends EditorPlugin {
    }
    class ScriptEditorQuickOpen extends ConfirmationDialog {
        readonly goto_line: Signal
    }
    class ScriptExtension extends Script {
        /* gdvirtual */ _editor_can_reload_from_file(): boolean
        /* gdvirtual */ _placeholder_erased(placeholder: number /*i64*/): void
        /* gdvirtual */ _can_instantiate(): boolean
        /* gdvirtual */ _get_base_script(): Script
        /* gdvirtual */ _get_global_name(): StringName
        /* gdvirtual */ _inherits_script(script: Script): boolean
        /* gdvirtual */ _get_instance_base_type(): StringName
        /* gdvirtual */ _instance_create(for_object: Object): number /*i64*/
        /* gdvirtual */ _placeholder_instance_create(for_object: Object): number /*i64*/
        /* gdvirtual */ _instance_has(object: Object): boolean
        /* gdvirtual */ _has_source_code(): boolean
        /* gdvirtual */ _get_source_code(): string
        /* gdvirtual */ _set_source_code(code: string): void
        /* gdvirtual */ _reload(keep_state: boolean): GodotError
        /* gdvirtual */ _get_documentation(): Array
        /* gdvirtual */ _get_class_icon_path(): string
        /* gdvirtual */ _has_method(method: StringName): boolean
        /* gdvirtual */ _has_static_method(method: StringName): boolean
        /* gdvirtual */ _get_method_info(method: StringName): Dictionary
        /* gdvirtual */ _is_tool(): boolean
        /* gdvirtual */ _is_valid(): boolean
        /* gdvirtual */ _is_abstract(): boolean
        /* gdvirtual */ _get_language(): ScriptLanguage
        /* gdvirtual */ _has_script_signal(signal: StringName): boolean
        /* gdvirtual */ _get_script_signal_list(): Array
        /* gdvirtual */ _has_property_default_value(property: StringName): boolean
        /* gdvirtual */ _get_property_default_value(property: StringName): void
        /* gdvirtual */ _update_exports(): void
        /* gdvirtual */ _get_script_method_list(): Array
        /* gdvirtual */ _get_script_property_list(): Array
        /* gdvirtual */ _get_member_line(member: StringName): number /*i64*/
        /* gdvirtual */ _get_constants(): Dictionary
        /* gdvirtual */ _get_members(): Array
        /* gdvirtual */ _is_placeholder_fallback_enabled(): boolean
        /* gdvirtual */ _get_rpc_config(): void
    }
    class ScriptLanguage extends Object {
    }
    namespace ScriptLanguageExtension {
        enum LookupResultType {
            LOOKUP_RESULT_SCRIPT_LOCATION = 0,
            LOOKUP_RESULT_CLASS = 1,
            LOOKUP_RESULT_CLASS_CONSTANT = 2,
            LOOKUP_RESULT_CLASS_PROPERTY = 3,
            LOOKUP_RESULT_CLASS_METHOD = 4,
            LOOKUP_RESULT_CLASS_SIGNAL = 5,
            LOOKUP_RESULT_CLASS_ENUM = 6,
            LOOKUP_RESULT_CLASS_TBD_GLOBALSCOPE = 7,
            LOOKUP_RESULT_CLASS_ANNOTATION = 8,
            LOOKUP_RESULT_MAX = 9,
        }
        enum CodeCompletionLocation {
            LOCATION_LOCAL = 0,
            LOCATION_PARENT_MASK = 256,
            LOCATION_OTHER_USER_CODE = 512,
            LOCATION_OTHER = 1024,
        }
        enum CodeCompletionKind {
            CODE_COMPLETION_KIND_CLASS = 0,
            CODE_COMPLETION_KIND_FUNCTION = 1,
            CODE_COMPLETION_KIND_SIGNAL = 2,
            CODE_COMPLETION_KIND_VARIABLE = 3,
            CODE_COMPLETION_KIND_MEMBER = 4,
            CODE_COMPLETION_KIND_ENUM = 5,
            CODE_COMPLETION_KIND_CONSTANT = 6,
            CODE_COMPLETION_KIND_NODE_PATH = 7,
            CODE_COMPLETION_KIND_FILE_PATH = 8,
            CODE_COMPLETION_KIND_PLAIN_TEXT = 9,
            CODE_COMPLETION_KIND_MAX = 10,
        }
    }
    class ScriptLanguageExtension extends ScriptLanguage {
        /* gdvirtual */ _get_name(): string
        /* gdvirtual */ _init(): void
        /* gdvirtual */ _get_type(): string
        /* gdvirtual */ _get_extension(): string
        /* gdvirtual */ _finish(): void
        /* gdvirtual */ _get_reserved_words(): PackedStringArray
        /* gdvirtual */ _is_control_flow_keyword(keyword: string): boolean
        /* gdvirtual */ _get_comment_delimiters(): PackedStringArray
        /* gdvirtual */ _get_doc_comment_delimiters(): PackedStringArray
        /* gdvirtual */ _get_string_delimiters(): PackedStringArray
        /* gdvirtual */ _make_template(template: string, class_name: string, base_class_name: string): Script
        /* gdvirtual */ _get_built_in_templates(object: StringName): Array
        /* gdvirtual */ _is_using_templates(): boolean
        /* gdvirtual */ _validate(script: string, path: string, validate_functions: boolean, validate_errors: boolean, validate_warnings: boolean, validate_safe_lines: boolean): Dictionary
        /* gdvirtual */ _validate_path(path: string): string
        /* gdvirtual */ _create_script(): Object
        /* gdvirtual */ _has_named_classes(): boolean
        /* gdvirtual */ _supports_builtin_mode(): boolean
        /* gdvirtual */ _supports_documentation(): boolean
        /* gdvirtual */ _can_inherit_from_file(): boolean
        /* gdvirtual */ _find_function(class_name: string, function_name: string): number /*i64*/
        /* gdvirtual */ _make_function(class_name: string, function_name: string, function_args: PackedStringArray): string
        /* gdvirtual */ _open_in_external_editor(script: Script, line: number /*i64*/, column: number /*i64*/): GodotError
        /* gdvirtual */ _overrides_external_editor(): boolean
        /* gdvirtual */ _complete_code(code: string, path: string, owner: Object): Dictionary
        /* gdvirtual */ _lookup_code(code: string, symbol: string, path: string, owner: Object): Dictionary
        /* gdvirtual */ _auto_indent_code(code: string, from_line: number /*i64*/, to_line: number /*i64*/): string
        /* gdvirtual */ _add_global_constant(name: StringName, value: any): void
        /* gdvirtual */ _add_named_global_constant(name: StringName, value: any): void
        /* gdvirtual */ _remove_named_global_constant(name: StringName): void
        /* gdvirtual */ _thread_enter(): void
        /* gdvirtual */ _thread_exit(): void
        /* gdvirtual */ _debug_get_error(): string
        /* gdvirtual */ _debug_get_stack_level_count(): number /*i64*/
        /* gdvirtual */ _debug_get_stack_level_line(level: number /*i64*/): number /*i64*/
        /* gdvirtual */ _debug_get_stack_level_function(level: number /*i64*/): string
        /* gdvirtual */ _debug_get_stack_level_locals(level: number /*i64*/, max_subitems: number /*i64*/, max_depth: number /*i64*/): Dictionary
        /* gdvirtual */ _debug_get_stack_level_members(level: number /*i64*/, max_subitems: number /*i64*/, max_depth: number /*i64*/): Dictionary
        /* gdvirtual */ _debug_get_stack_level_instance(level: number /*i64*/): number /*i64*/
        /* gdvirtual */ _debug_get_globals(max_subitems: number /*i64*/, max_depth: number /*i64*/): Dictionary
        /* gdvirtual */ _debug_parse_stack_level_expression(level: number /*i64*/, expression: string, max_subitems: number /*i64*/, max_depth: number /*i64*/): string
        /* gdvirtual */ _debug_get_current_stack_info(): Array
        /* gdvirtual */ _reload_all_scripts(): void
        /* gdvirtual */ _reload_tool_script(script: Script, soft_reload: boolean): void
        /* gdvirtual */ _get_recognized_extensions(): PackedStringArray
        /* gdvirtual */ _get_public_functions(): Array
        /* gdvirtual */ _get_public_constants(): Dictionary
        /* gdvirtual */ _get_public_annotations(): Array
        /* gdvirtual */ _profiling_start(): void
        /* gdvirtual */ _profiling_stop(): void
        /* gdvirtual */ _profiling_get_accumulated_data(info_array: number /*i64*/, info_max: number /*i64*/): number /*i64*/
        /* gdvirtual */ _profiling_get_frame_data(info_array: number /*i64*/, info_max: number /*i64*/): number /*i64*/
        /* gdvirtual */ _frame(): void
        /* gdvirtual */ _handles_global_class_type(type: string): boolean
        /* gdvirtual */ _get_global_class_name(path: string): Dictionary
    }
    class ScriptTextEditor extends ScriptEditorBase {
    }
    class ScrollBar extends Range {
        set_custom_step(step: number /*f64*/): void
        get_custom_step(): number /*f64*/
        custom_step: number /*f64*/
        readonly scrolling: Signal
    }
    namespace ScrollContainer {
        enum ScrollMode {
            SCROLL_MODE_DISABLED = 0,
            SCROLL_MODE_AUTO = 1,
            SCROLL_MODE_SHOW_ALWAYS = 2,
            SCROLL_MODE_SHOW_NEVER = 3,
        }
    }
    class ScrollContainer extends Container {
        _update_scrollbar_position(): void
        set_h_scroll(value: number /*i64*/): void
        get_h_scroll(): number /*i64*/
        set_v_scroll(value: number /*i64*/): void
        get_v_scroll(): number /*i64*/
        set_horizontal_custom_step(value: number /*f64*/): void
        get_horizontal_custom_step(): number /*f64*/
        set_vertical_custom_step(value: number /*f64*/): void
        get_vertical_custom_step(): number /*f64*/
        set_horizontal_scroll_mode(enable: ScrollContainer.ScrollMode): void
        get_horizontal_scroll_mode(): ScrollContainer.ScrollMode
        set_vertical_scroll_mode(enable: ScrollContainer.ScrollMode): void
        get_vertical_scroll_mode(): ScrollContainer.ScrollMode
        set_deadzone(deadzone: number /*i64*/): void
        get_deadzone(): number /*i64*/
        set_follow_focus(enabled: boolean): void
        is_following_focus(): boolean
        get_h_scroll_bar(): HScrollBar
        get_v_scroll_bar(): VScrollBar
        ensure_control_visible(control: Control): void
        follow_focus: boolean
        scroll_horizontal: number /*i64*/
        scroll_vertical: number /*i64*/
        scroll_horizontal_custom_step: number /*f64*/
        scroll_vertical_custom_step: number /*f64*/
        horizontal_scroll_mode: number /*i64*/
        vertical_scroll_mode: number /*i64*/
        scroll_deadzone: number /*i64*/
        readonly scroll_started: Signal
        readonly scroll_ended: Signal
    }
    class SectionedInspector extends HSplitContainer {
        update_category_list(): void
    }
    class SectionedInspectorFilter extends Object {
    }
    class SegmentShape2D extends Shape2D {
        set_a(a: Vector2): void
        get_a(): Vector2
        set_b(b: Vector2): void
        get_b(): Vector2
        a: Vector2
        b: Vector2
    }
    class Semaphore extends RefCounted {
        wait(): void
        try_wait(): boolean
        post(): void
    }
    class SeparationRayShape2D extends Shape2D {
        set_length(length: number /*f64*/): void
        get_length(): number /*f64*/
        set_slide_on_slope(active: boolean): void
        get_slide_on_slope(): boolean
        length: number /*f64*/
        slide_on_slope: boolean
    }
    class SeparationRayShape3D extends Shape3D {
        set_length(length: number /*f64*/): void
        get_length(): number /*f64*/
        set_slide_on_slope(active: boolean): void
        get_slide_on_slope(): boolean
        length: number /*f64*/
        slide_on_slope: boolean
    }
    class Separator extends Control {
    }
    namespace Shader {
        enum Mode {
            MODE_SPATIAL = 0,
            MODE_CANVAS_ITEM = 1,
            MODE_PARTICLES = 2,
            MODE_SKY = 3,
            MODE_FOG = 4,
        }
    }
    class Shader extends Resource {
        get_mode(): Shader.Mode
        set_code(code: string): void
        get_code(): string
        set_default_texture_parameter(name: StringName, texture: Texture2D, index: number /*i64*/ = 0): void
        get_default_texture_parameter(name: StringName, index: number /*i64*/ = 0): Texture2D
        get_shader_uniform_list(get_groups: boolean = false): Array
        code: string
    }
    class ShaderCreateDialog extends ConfirmationDialog {
        config(path: string, built_in_enabled: boolean, load_enabled: boolean, _unnamed_arg3: number /*i64*/ = 1, _unnamed_arg4: number /*i64*/ = 1): void
        readonly shader_created: Signal
        readonly shader_include_created: Signal
    }
    class ShaderEditorPlugin extends EditorPlugin {
    }
    class ShaderFileEditor extends PanelContainer {
    }
    class ShaderFileEditorPlugin extends EditorPlugin {
    }
    class ShaderGlobalsEditor extends VBoxContainer {
        _changed(): void
        readonly globals_changed: Signal
    }
    class ShaderGlobalsEditorInterface extends Object {
        _set_var(_unnamed_arg0: StringName, _unnamed_arg1: any, _unnamed_arg2: any): void
        _var_changed(): void
        readonly var_changed: Signal
    }
    class ShaderGlobalsOverride extends Node {
        _activate(): void
    }
    class ShaderInclude extends Resource {
        set_code(code: string): void
        get_code(): string
        code: string
    }
    class ShaderMaterial extends Material {
        set_shader(shader: Shader): void
        get_shader(): Shader
        set_shader_parameter(param: StringName, value: any): void
        get_shader_parameter(param: StringName): any
        shader: Shader
    }
    class Shape2D extends Resource {
        set_custom_solver_bias(bias: number /*f64*/): void
        get_custom_solver_bias(): number /*f64*/
        collide(local_xform: Transform2D, with_shape: Shape2D, shape_xform: Transform2D): boolean
        collide_with_motion(local_xform: Transform2D, local_motion: Vector2, with_shape: Shape2D, shape_xform: Transform2D, shape_motion: Vector2): boolean
        collide_and_get_contacts(local_xform: Transform2D, with_shape: Shape2D, shape_xform: Transform2D): PackedVector2Array
        collide_with_motion_and_get_contacts(local_xform: Transform2D, local_motion: Vector2, with_shape: Shape2D, shape_xform: Transform2D, shape_motion: Vector2): PackedVector2Array
        draw(canvas_item: RID, color: Color): void
        get_rect(): Rect2
        custom_solver_bias: number /*f64*/
    }
    class Shape3D extends Resource {
        set_custom_solver_bias(bias: number /*f64*/): void
        get_custom_solver_bias(): number /*f64*/
        set_margin(margin: number /*f64*/): void
        get_margin(): number /*f64*/
        get_debug_mesh(): ArrayMesh
        custom_solver_bias: number /*f64*/
        margin: number /*f64*/
    }
    class ShapeCast2D extends Node2D {
        set_enabled(enabled: boolean): void
        is_enabled(): boolean
        set_shape(shape: Shape2D): void
        get_shape(): Shape2D
        set_target_position(local_point: Vector2): void
        get_target_position(): Vector2
        set_margin(margin: number /*f64*/): void
        get_margin(): number /*f64*/
        set_max_results(max_results: number /*i64*/): void
        get_max_results(): number /*i64*/
        is_colliding(): boolean
        get_collision_count(): number /*i64*/
        force_shapecast_update(): void
        get_collider(index: number /*i64*/): Object
        get_collider_rid(index: number /*i64*/): RID
        get_collider_shape(index: number /*i64*/): number /*i64*/
        get_collision_point(index: number /*i64*/): Vector2
        get_collision_normal(index: number /*i64*/): Vector2
        get_closest_collision_safe_fraction(): number /*f64*/
        get_closest_collision_unsafe_fraction(): number /*f64*/
        add_exception_rid(rid: RID): void
        add_exception(node: CollisionObject2D): void
        remove_exception_rid(rid: RID): void
        remove_exception(node: CollisionObject2D): void
        clear_exceptions(): void
        set_collision_mask(mask: number /*i64*/): void
        get_collision_mask(): number /*i64*/
        set_collision_mask_value(layer_number: number /*i64*/, value: boolean): void
        get_collision_mask_value(layer_number: number /*i64*/): boolean
        set_exclude_parent_body(mask: boolean): void
        get_exclude_parent_body(): boolean
        set_collide_with_areas(enable: boolean): void
        is_collide_with_areas_enabled(): boolean
        set_collide_with_bodies(enable: boolean): void
        is_collide_with_bodies_enabled(): boolean
        _get_collision_result(): Array
        enabled: boolean
        shape: Shape2D
        exclude_parent: boolean
        target_position: Vector2
        margin: number /*f64*/
        max_results: number /*i64*/
        collision_mask: number /*i64*/
        readonly collision_result: Array
        collide_with_areas: boolean
        collide_with_bodies: boolean
    }
    class ShapeCast3D extends Node3D {
        resource_changed(resource: Resource): void
        set_enabled(enabled: boolean): void
        is_enabled(): boolean
        set_shape(shape: Shape3D): void
        get_shape(): Shape3D
        set_target_position(local_point: Vector3): void
        get_target_position(): Vector3
        set_margin(margin: number /*f64*/): void
        get_margin(): number /*f64*/
        set_max_results(max_results: number /*i64*/): void
        get_max_results(): number /*i64*/
        is_colliding(): boolean
        get_collision_count(): number /*i64*/
        force_shapecast_update(): void
        get_collider(index: number /*i64*/): Object
        get_collider_rid(index: number /*i64*/): RID
        get_collider_shape(index: number /*i64*/): number /*i64*/
        get_collision_point(index: number /*i64*/): Vector3
        get_collision_normal(index: number /*i64*/): Vector3
        get_closest_collision_safe_fraction(): number /*f64*/
        get_closest_collision_unsafe_fraction(): number /*f64*/
        add_exception_rid(rid: RID): void
        add_exception(node: CollisionObject3D): void
        remove_exception_rid(rid: RID): void
        remove_exception(node: CollisionObject3D): void
        clear_exceptions(): void
        set_collision_mask(mask: number /*i64*/): void
        get_collision_mask(): number /*i64*/
        set_collision_mask_value(layer_number: number /*i64*/, value: boolean): void
        get_collision_mask_value(layer_number: number /*i64*/): boolean
        set_exclude_parent_body(mask: boolean): void
        get_exclude_parent_body(): boolean
        set_collide_with_areas(enable: boolean): void
        is_collide_with_areas_enabled(): boolean
        set_collide_with_bodies(enable: boolean): void
        is_collide_with_bodies_enabled(): boolean
        _get_collision_result(): Array
        set_debug_shape_custom_color(debug_shape_custom_color: Color): void
        get_debug_shape_custom_color(): Color
        enabled: boolean
        shape: Shape3D
        exclude_parent: boolean
        target_position: Vector3
        margin: number /*f64*/
        max_results: number /*i64*/
        collision_mask: number /*i64*/
        readonly collision_result: Array
        collide_with_areas: boolean
        collide_with_bodies: boolean
        debug_shape_custom_color: Color
    }
    class ShapeCast3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    class Shortcut extends Resource {
        set_events(events: Array): void
        get_events(): Array
        has_valid_event(): boolean
        matches_event(event: InputEvent): boolean
        get_as_text(): string
        events: Array
    }
    class ShortcutBin extends Node {
    }
    class SizeFlagPresetPicker extends ControlEditorPresetPicker {
        readonly size_flags_selected: Signal
    }
    class Skeleton2D extends Node2D {
        _update_bone_setup(): void
        _update_transform(): void
        get_bone_count(): number /*i64*/
        get_bone(idx: number /*i64*/): Bone2D
        get_skeleton(): RID
        set_modification_stack(modification_stack: SkeletonModificationStack2D): void
        get_modification_stack(): SkeletonModificationStack2D
        execute_modifications(delta: number /*f64*/, execution_mode: number /*i64*/): void
        set_bone_local_pose_override(bone_idx: number /*i64*/, override_pose: Transform2D, strength: number /*f64*/, persistent: boolean): void
        get_bone_local_pose_override(bone_idx: number /*i64*/): Transform2D
        readonly bone_setup_changed: Signal
    }
    class Skeleton2DEditor extends Control {
    }
    class Skeleton2DEditorPlugin extends EditorPlugin {
    }
    class Skeleton3D extends Node3D {
        static readonly NOTIFICATION_UPDATE_SKELETON = 50
        add_bone(name: string): void
        find_bone(name: string): number /*i64*/
        get_bone_name(bone_idx: number /*i64*/): string
        set_bone_name(bone_idx: number /*i64*/, name: string): void
        get_bone_parent(bone_idx: number /*i64*/): number /*i64*/
        set_bone_parent(bone_idx: number /*i64*/, parent_idx: number /*i64*/): void
        get_bone_count(): number /*i64*/
        get_version(): number /*i64*/
        unparent_bone_and_rest(bone_idx: number /*i64*/): void
        get_bone_children(bone_idx: number /*i64*/): PackedInt32Array
        get_parentless_bones(): PackedInt32Array
        get_bone_rest(bone_idx: number /*i64*/): Transform3D
        set_bone_rest(bone_idx: number /*i64*/, rest: Transform3D): void
        get_bone_global_rest(bone_idx: number /*i64*/): Transform3D
        create_skin_from_rest_transforms(): Skin
        register_skin(skin: Skin): SkinReference
        localize_rests(): void
        clear_bones(): void
        get_bone_pose(bone_idx: number /*i64*/): Transform3D
        set_bone_pose_position(bone_idx: number /*i64*/, position: Vector3): void
        set_bone_pose_rotation(bone_idx: number /*i64*/, rotation: Quaternion): void
        set_bone_pose_scale(bone_idx: number /*i64*/, scale: Vector3): void
        get_bone_pose_position(bone_idx: number /*i64*/): Vector3
        get_bone_pose_rotation(bone_idx: number /*i64*/): Quaternion
        get_bone_pose_scale(bone_idx: number /*i64*/): Vector3
        reset_bone_pose(bone_idx: number /*i64*/): void
        reset_bone_poses(): void
        is_bone_enabled(bone_idx: number /*i64*/): boolean
        set_bone_enabled(bone_idx: number /*i64*/, enabled: boolean = true): void
        clear_bones_global_pose_override(): void
        set_bone_global_pose_override(bone_idx: number /*i64*/, pose: Transform3D, amount: number /*f64*/, persistent: boolean = false): void
        get_bone_global_pose_override(bone_idx: number /*i64*/): Transform3D
        get_bone_global_pose(bone_idx: number /*i64*/): Transform3D
        get_bone_global_pose_no_override(bone_idx: number /*i64*/): Transform3D
        force_update_all_bone_transforms(): void
        force_update_bone_child_transform(bone_idx: number /*i64*/): void
        set_motion_scale(motion_scale: number /*f64*/): void
        get_motion_scale(): number /*f64*/
        set_show_rest_only(enabled: boolean): void
        is_show_rest_only(): boolean
        set_animate_physical_bones(enabled: boolean): void
        get_animate_physical_bones(): boolean
        physical_bones_stop_simulation(): void
        physical_bones_start_simulation(bones: Array = <any> {} /*compound.type from 28([object Object])*/): void
        physical_bones_add_collision_exception(exception: RID): void
        physical_bones_remove_collision_exception(exception: RID): void
        motion_scale: number /*f64*/
        show_rest_only: boolean
        animate_physical_bones: boolean
        readonly pose_updated: Signal
        readonly bone_pose_changed: Signal
        readonly bone_enabled_changed: Signal
        readonly show_rest_only_changed: Signal
    }
    class Skeleton3DEditorPlugin extends EditorPlugin {
    }
    class Skeleton3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    class SkeletonIK3D extends Node {
        set_root_bone(root_bone: StringName): void
        get_root_bone(): StringName
        set_tip_bone(tip_bone: StringName): void
        get_tip_bone(): StringName
        set_interpolation(interpolation: number /*f64*/): void
        get_interpolation(): number /*f64*/
        set_target_transform(target: Transform3D): void
        get_target_transform(): Transform3D
        set_target_node(node: NodePath): void
        get_target_node(): NodePath
        set_override_tip_basis(override: boolean): void
        is_override_tip_basis(): boolean
        set_use_magnet(use: boolean): void
        is_using_magnet(): boolean
        set_magnet_position(local_position: Vector3): void
        get_magnet_position(): Vector3
        get_parent_skeleton(): Skeleton3D
        is_running(): boolean
        set_min_distance(min_distance: number /*f64*/): void
        get_min_distance(): number /*f64*/
        set_max_iterations(iterations: number /*i64*/): void
        get_max_iterations(): number /*i64*/
        start(one_time: boolean = false): void
        stop(): void
        root_bone: StringName
        tip_bone: StringName
        interpolation: number /*f64*/
        target: Transform3D
        override_tip_basis: boolean
        use_magnet: boolean
        magnet: Vector3
        target_node: NodePath
        min_distance: number /*f64*/
        max_iterations: number /*i64*/
    }
    class SkeletonIK3DEditorPlugin extends EditorPlugin {
    }
    class SkeletonModification2D extends Resource {
        /* gdvirtual */ _execute(delta: number /*f64*/): void
        /* gdvirtual */ _setup_modification(modification_stack: SkeletonModificationStack2D): void
        /* gdvirtual */ _draw_editor_gizmo(): void
        set_enabled(enabled: boolean): void
        get_enabled(): boolean
        get_modification_stack(): SkeletonModificationStack2D
        set_is_setup(is_setup: boolean): void
        get_is_setup(): boolean
        set_execution_mode(execution_mode: number /*i64*/): void
        get_execution_mode(): number /*i64*/
        clamp_angle(angle: number /*f64*/, min: number /*f64*/, max: number /*f64*/, invert: boolean): number /*f64*/
        set_editor_draw_gizmo(draw_gizmo: boolean): void
        get_editor_draw_gizmo(): boolean
        enabled: boolean
        execution_mode: number /*i64*/
    }
    class SkeletonModification2DCCDIK extends SkeletonModification2D {
        set_target_node(target_nodepath: NodePath): void
        get_target_node(): NodePath
        set_tip_node(tip_nodepath: NodePath): void
        get_tip_node(): NodePath
        set_ccdik_data_chain_length(length: number /*i64*/): void
        get_ccdik_data_chain_length(): number /*i64*/
        set_ccdik_joint_bone2d_node(joint_idx: number /*i64*/, bone2d_nodepath: NodePath): void
        get_ccdik_joint_bone2d_node(joint_idx: number /*i64*/): NodePath
        set_ccdik_joint_bone_index(joint_idx: number /*i64*/, bone_idx: number /*i64*/): void
        get_ccdik_joint_bone_index(joint_idx: number /*i64*/): number /*i64*/
        set_ccdik_joint_rotate_from_joint(joint_idx: number /*i64*/, rotate_from_joint: boolean): void
        get_ccdik_joint_rotate_from_joint(joint_idx: number /*i64*/): boolean
        set_ccdik_joint_enable_constraint(joint_idx: number /*i64*/, enable_constraint: boolean): void
        get_ccdik_joint_enable_constraint(joint_idx: number /*i64*/): boolean
        set_ccdik_joint_constraint_angle_min(joint_idx: number /*i64*/, angle_min: number /*f64*/): void
        get_ccdik_joint_constraint_angle_min(joint_idx: number /*i64*/): number /*f64*/
        set_ccdik_joint_constraint_angle_max(joint_idx: number /*i64*/, angle_max: number /*f64*/): void
        get_ccdik_joint_constraint_angle_max(joint_idx: number /*i64*/): number /*f64*/
        set_ccdik_joint_constraint_angle_invert(joint_idx: number /*i64*/, invert: boolean): void
        get_ccdik_joint_constraint_angle_invert(joint_idx: number /*i64*/): boolean
        target_nodepath: NodePath
        tip_nodepath: NodePath
        ccdik_data_chain_length: number /*i64*/
    }
    class SkeletonModification2DFABRIK extends SkeletonModification2D {
        set_target_node(target_nodepath: NodePath): void
        get_target_node(): NodePath
        set_fabrik_data_chain_length(length: number /*i64*/): void
        get_fabrik_data_chain_length(): number /*i64*/
        set_fabrik_joint_bone2d_node(joint_idx: number /*i64*/, bone2d_nodepath: NodePath): void
        get_fabrik_joint_bone2d_node(joint_idx: number /*i64*/): NodePath
        set_fabrik_joint_bone_index(joint_idx: number /*i64*/, bone_idx: number /*i64*/): void
        get_fabrik_joint_bone_index(joint_idx: number /*i64*/): number /*i64*/
        set_fabrik_joint_magnet_position(joint_idx: number /*i64*/, magnet_position: Vector2): void
        get_fabrik_joint_magnet_position(joint_idx: number /*i64*/): Vector2
        set_fabrik_joint_use_target_rotation(joint_idx: number /*i64*/, use_target_rotation: boolean): void
        get_fabrik_joint_use_target_rotation(joint_idx: number /*i64*/): boolean
        target_nodepath: NodePath
        fabrik_data_chain_length: number /*i64*/
    }
    class SkeletonModification2DJiggle extends SkeletonModification2D {
        set_target_node(target_nodepath: NodePath): void
        get_target_node(): NodePath
        set_jiggle_data_chain_length(length: number /*i64*/): void
        get_jiggle_data_chain_length(): number /*i64*/
        set_stiffness(stiffness: number /*f64*/): void
        get_stiffness(): number /*f64*/
        set_mass(mass: number /*f64*/): void
        get_mass(): number /*f64*/
        set_damping(damping: number /*f64*/): void
        get_damping(): number /*f64*/
        set_use_gravity(use_gravity: boolean): void
        get_use_gravity(): boolean
        set_gravity(gravity: Vector2): void
        get_gravity(): Vector2
        set_use_colliders(use_colliders: boolean): void
        get_use_colliders(): boolean
        set_collision_mask(collision_mask: number /*i64*/): void
        get_collision_mask(): number /*i64*/
        set_jiggle_joint_bone2d_node(joint_idx: number /*i64*/, bone2d_node: NodePath): void
        get_jiggle_joint_bone2d_node(joint_idx: number /*i64*/): NodePath
        set_jiggle_joint_bone_index(joint_idx: number /*i64*/, bone_idx: number /*i64*/): void
        get_jiggle_joint_bone_index(joint_idx: number /*i64*/): number /*i64*/
        set_jiggle_joint_override(joint_idx: number /*i64*/, override: boolean): void
        get_jiggle_joint_override(joint_idx: number /*i64*/): boolean
        set_jiggle_joint_stiffness(joint_idx: number /*i64*/, stiffness: number /*f64*/): void
        get_jiggle_joint_stiffness(joint_idx: number /*i64*/): number /*f64*/
        set_jiggle_joint_mass(joint_idx: number /*i64*/, mass: number /*f64*/): void
        get_jiggle_joint_mass(joint_idx: number /*i64*/): number /*f64*/
        set_jiggle_joint_damping(joint_idx: number /*i64*/, damping: number /*f64*/): void
        get_jiggle_joint_damping(joint_idx: number /*i64*/): number /*f64*/
        set_jiggle_joint_use_gravity(joint_idx: number /*i64*/, use_gravity: boolean): void
        get_jiggle_joint_use_gravity(joint_idx: number /*i64*/): boolean
        set_jiggle_joint_gravity(joint_idx: number /*i64*/, gravity: Vector2): void
        get_jiggle_joint_gravity(joint_idx: number /*i64*/): Vector2
        target_nodepath: NodePath
        jiggle_data_chain_length: number /*i64*/
        stiffness: number /*f64*/
        mass: number /*f64*/
        damping: number /*f64*/
        use_gravity: boolean
        gravity: Vector2
    }
    class SkeletonModification2DLookAt extends SkeletonModification2D {
        set_bone2d_node(bone2d_nodepath: NodePath): void
        get_bone2d_node(): NodePath
        set_bone_index(bone_idx: number /*i64*/): void
        get_bone_index(): number /*i64*/
        set_target_node(target_nodepath: NodePath): void
        get_target_node(): NodePath
        set_additional_rotation(rotation: number /*f64*/): void
        get_additional_rotation(): number /*f64*/
        set_enable_constraint(enable_constraint: boolean): void
        get_enable_constraint(): boolean
        set_constraint_angle_min(angle_min: number /*f64*/): void
        get_constraint_angle_min(): number /*f64*/
        set_constraint_angle_max(angle_max: number /*f64*/): void
        get_constraint_angle_max(): number /*f64*/
        set_constraint_angle_invert(invert: boolean): void
        get_constraint_angle_invert(): boolean
        bone_index: number /*i64*/
        bone2d_node: NodePath
        target_nodepath: NodePath
    }
    class SkeletonModification2DPhysicalBones extends SkeletonModification2D {
        set_physical_bone_chain_length(length: number /*i64*/): void
        get_physical_bone_chain_length(): number /*i64*/
        set_physical_bone_node(joint_idx: number /*i64*/, physicalbone2d_node: NodePath): void
        get_physical_bone_node(joint_idx: number /*i64*/): NodePath
        fetch_physical_bones(): void
        start_simulation(bones: Array = <any> {} /*compound.type from 28([object Object])*/): void
        stop_simulation(bones: Array = <any> {} /*compound.type from 28([object Object])*/): void
        physical_bone_chain_length: number /*i64*/
    }
    class SkeletonModification2DStackHolder extends SkeletonModification2D {
        set_held_modification_stack(held_modification_stack: SkeletonModificationStack2D): void
        get_held_modification_stack(): SkeletonModificationStack2D
    }
    class SkeletonModification2DTwoBoneIK extends SkeletonModification2D {
        set_target_node(target_nodepath: NodePath): void
        get_target_node(): NodePath
        set_target_minimum_distance(minimum_distance: number /*f64*/): void
        get_target_minimum_distance(): number /*f64*/
        set_target_maximum_distance(maximum_distance: number /*f64*/): void
        get_target_maximum_distance(): number /*f64*/
        set_flip_bend_direction(flip_direction: boolean): void
        get_flip_bend_direction(): boolean
        set_joint_one_bone2d_node(bone2d_node: NodePath): void
        get_joint_one_bone2d_node(): NodePath
        set_joint_one_bone_idx(bone_idx: number /*i64*/): void
        get_joint_one_bone_idx(): number /*i64*/
        set_joint_two_bone2d_node(bone2d_node: NodePath): void
        get_joint_two_bone2d_node(): NodePath
        set_joint_two_bone_idx(bone_idx: number /*i64*/): void
        get_joint_two_bone_idx(): number /*i64*/
        target_nodepath: NodePath
        target_minimum_distance: number /*f64*/
        target_maximum_distance: number /*f64*/
        flip_bend_direction: boolean
    }
    class SkeletonModificationStack2D extends Resource {
        setup(): void
        execute(delta: number /*f64*/, execution_mode: number /*i64*/): void
        enable_all_modifications(enabled: boolean): void
        get_modification(mod_idx: number /*i64*/): SkeletonModification2D
        add_modification(modification: SkeletonModification2D): void
        delete_modification(mod_idx: number /*i64*/): void
        set_modification(mod_idx: number /*i64*/, modification: SkeletonModification2D): void
        set_modification_count(count: number /*i64*/): void
        get_modification_count(): number /*i64*/
        get_is_setup(): boolean
        set_enabled(enabled: boolean): void
        get_enabled(): boolean
        set_strength(strength: number /*f64*/): void
        get_strength(): number /*f64*/
        get_skeleton(): Skeleton2D
        enabled: boolean
        strength: number /*f64*/
        modification_count: any /*Modifications,modifications/*/
    }
    namespace SkeletonProfile {
        enum TailDirection {
            TAIL_DIRECTION_AVERAGE_CHILDREN = 0,
            TAIL_DIRECTION_SPECIFIC_CHILD = 1,
            TAIL_DIRECTION_END = 2,
        }
    }
    class SkeletonProfile extends Resource {
        set_root_bone(bone_name: StringName): void
        get_root_bone(): StringName
        set_scale_base_bone(bone_name: StringName): void
        get_scale_base_bone(): StringName
        set_group_size(size: number /*i64*/): void
        get_group_size(): number /*i64*/
        get_group_name(group_idx: number /*i64*/): StringName
        set_group_name(group_idx: number /*i64*/, group_name: StringName): void
        get_texture(group_idx: number /*i64*/): Texture2D
        set_texture(group_idx: number /*i64*/, texture: Texture2D): void
        set_bone_size(size: number /*i64*/): void
        get_bone_size(): number /*i64*/
        find_bone(bone_name: StringName): number /*i64*/
        get_bone_name(bone_idx: number /*i64*/): StringName
        set_bone_name(bone_idx: number /*i64*/, bone_name: StringName): void
        get_bone_parent(bone_idx: number /*i64*/): StringName
        set_bone_parent(bone_idx: number /*i64*/, bone_parent: StringName): void
        get_tail_direction(bone_idx: number /*i64*/): SkeletonProfile.TailDirection
        set_tail_direction(bone_idx: number /*i64*/, tail_direction: SkeletonProfile.TailDirection): void
        get_bone_tail(bone_idx: number /*i64*/): StringName
        set_bone_tail(bone_idx: number /*i64*/, bone_tail: StringName): void
        get_reference_pose(bone_idx: number /*i64*/): Transform3D
        set_reference_pose(bone_idx: number /*i64*/, bone_name: Transform3D): void
        get_handle_offset(bone_idx: number /*i64*/): Vector2
        set_handle_offset(bone_idx: number /*i64*/, handle_offset: Vector2): void
        get_group(bone_idx: number /*i64*/): StringName
        set_group(bone_idx: number /*i64*/, group: StringName): void
        root_bone: StringName
        scale_base_bone: StringName
        group_size: any /*Groups,groups/*/
        bone_size: any /*Bones,bones/*/
        readonly profile_updated: Signal
    }
    class SkeletonProfileHumanoid extends SkeletonProfile {
    }
    class Skin extends Resource {
        set_bind_count(bind_count: number /*i64*/): void
        get_bind_count(): number /*i64*/
        add_bind(bone: number /*i64*/, pose: Transform3D): void
        add_named_bind(name: string, pose: Transform3D): void
        set_bind_pose(bind_index: number /*i64*/, pose: Transform3D): void
        get_bind_pose(bind_index: number /*i64*/): Transform3D
        set_bind_name(bind_index: number /*i64*/, name: StringName): void
        get_bind_name(bind_index: number /*i64*/): StringName
        set_bind_bone(bind_index: number /*i64*/, bone: number /*i64*/): void
        get_bind_bone(bind_index: number /*i64*/): number /*i64*/
        clear_binds(): void
    }
    class SkinReference extends RefCounted {
        get_skeleton(): RID
        get_skin(): Skin
    }
    namespace Sky {
        enum RadianceSize {
            RADIANCE_SIZE_32 = 0,
            RADIANCE_SIZE_64 = 1,
            RADIANCE_SIZE_128 = 2,
            RADIANCE_SIZE_256 = 3,
            RADIANCE_SIZE_512 = 4,
            RADIANCE_SIZE_1024 = 5,
            RADIANCE_SIZE_2048 = 6,
            RADIANCE_SIZE_MAX = 7,
        }
        enum ProcessMode {
            PROCESS_MODE_AUTOMATIC = 0,
            PROCESS_MODE_QUALITY = 1,
            PROCESS_MODE_INCREMENTAL = 2,
            PROCESS_MODE_REALTIME = 3,
        }
    }
    class Sky extends Resource {
        set_radiance_size(size: Sky.RadianceSize): void
        get_radiance_size(): Sky.RadianceSize
        set_process_mode(mode: Sky.ProcessMode): void
        get_process_mode(): Sky.ProcessMode
        set_material(material: Material): void
        get_material(): Material
        sky_material: ShaderMaterial | PanoramaSkyMaterial | ProceduralSkyMaterial | PhysicalSkyMaterial
        process_mode: number /*i64*/
        radiance_size: number /*i64*/
    }
    class Slider extends Range {
        set_ticks(count: number /*i64*/): void
        get_ticks(): number /*i64*/
        get_ticks_on_borders(): boolean
        set_ticks_on_borders(ticks_on_border: boolean): void
        set_editable(editable: boolean): void
        is_editable(): boolean
        set_scrollable(scrollable: boolean): void
        is_scrollable(): boolean
        editable: boolean
        scrollable: boolean
        tick_count: number /*i64*/
        ticks_on_borders: boolean
        readonly drag_started: Signal
        readonly drag_ended: Signal
    }
    namespace SliderJoint3D {
        enum Param {
            PARAM_LINEAR_LIMIT_UPPER = 0,
            PARAM_LINEAR_LIMIT_LOWER = 1,
            PARAM_LINEAR_LIMIT_SOFTNESS = 2,
            PARAM_LINEAR_LIMIT_RESTITUTION = 3,
            PARAM_LINEAR_LIMIT_DAMPING = 4,
            PARAM_LINEAR_MOTION_SOFTNESS = 5,
            PARAM_LINEAR_MOTION_RESTITUTION = 6,
            PARAM_LINEAR_MOTION_DAMPING = 7,
            PARAM_LINEAR_ORTHOGONAL_SOFTNESS = 8,
            PARAM_LINEAR_ORTHOGONAL_RESTITUTION = 9,
            PARAM_LINEAR_ORTHOGONAL_DAMPING = 10,
            PARAM_ANGULAR_LIMIT_UPPER = 11,
            PARAM_ANGULAR_LIMIT_LOWER = 12,
            PARAM_ANGULAR_LIMIT_SOFTNESS = 13,
            PARAM_ANGULAR_LIMIT_RESTITUTION = 14,
            PARAM_ANGULAR_LIMIT_DAMPING = 15,
            PARAM_ANGULAR_MOTION_SOFTNESS = 16,
            PARAM_ANGULAR_MOTION_RESTITUTION = 17,
            PARAM_ANGULAR_MOTION_DAMPING = 18,
            PARAM_ANGULAR_ORTHOGONAL_SOFTNESS = 19,
            PARAM_ANGULAR_ORTHOGONAL_RESTITUTION = 20,
            PARAM_ANGULAR_ORTHOGONAL_DAMPING = 21,
            PARAM_MAX = 22,
        }
    }
    class SliderJoint3D extends Joint3D {
        set_param(param: SliderJoint3D.Param, value: number /*f64*/): void
        get_param(param: SliderJoint3D.Param): number /*f64*/
    }
    class SnapDialog extends ConfirmationDialog {
    }
    namespace SoftBody3D {
        enum DisableMode {
            DISABLE_MODE_REMOVE = 0,
            DISABLE_MODE_KEEP_ACTIVE = 1,
        }
    }
    class SoftBody3D extends MeshInstance3D {
        get_physics_rid(): RID
        set_collision_mask(collision_mask: number /*i64*/): void
        get_collision_mask(): number /*i64*/
        set_collision_layer(collision_layer: number /*i64*/): void
        get_collision_layer(): number /*i64*/
        set_collision_mask_value(layer_number: number /*i64*/, value: boolean): void
        get_collision_mask_value(layer_number: number /*i64*/): boolean
        set_collision_layer_value(layer_number: number /*i64*/, value: boolean): void
        get_collision_layer_value(layer_number: number /*i64*/): boolean
        set_parent_collision_ignore(parent_collision_ignore: NodePath): void
        get_parent_collision_ignore(): NodePath
        set_disable_mode(mode: SoftBody3D.DisableMode): void
        get_disable_mode(): SoftBody3D.DisableMode
        get_collision_exceptions(): Array
        add_collision_exception_with(body: Node): void
        remove_collision_exception_with(body: Node): void
        set_simulation_precision(simulation_precision: number /*i64*/): void
        get_simulation_precision(): number /*i64*/
        set_total_mass(mass: number /*f64*/): void
        get_total_mass(): number /*f64*/
        set_linear_stiffness(linear_stiffness: number /*f64*/): void
        get_linear_stiffness(): number /*f64*/
        set_pressure_coefficient(pressure_coefficient: number /*f64*/): void
        get_pressure_coefficient(): number /*f64*/
        set_damping_coefficient(damping_coefficient: number /*f64*/): void
        get_damping_coefficient(): number /*f64*/
        set_drag_coefficient(drag_coefficient: number /*f64*/): void
        get_drag_coefficient(): number /*f64*/
        get_point_transform(point_index: number /*i64*/): Vector3
        set_point_pinned(point_index: number /*i64*/, pinned: boolean, attachment_path: NodePath = <any> {} /*compound.type from 22([object Object])*/): void
        is_point_pinned(point_index: number /*i64*/): boolean
        set_ray_pickable(ray_pickable: boolean): void
        is_ray_pickable(): boolean
        collision_layer: number /*i64*/
        collision_mask: number /*i64*/
        parent_collision_ignore: NodePath
        simulation_precision: number /*i64*/
        total_mass: number /*f64*/
        linear_stiffness: number /*f64*/
        pressure_coefficient: number /*f64*/
        damping_coefficient: number /*f64*/
        drag_coefficient: number /*f64*/
        ray_pickable: boolean
        disable_mode: number /*i64*/
    }
    class SoftBody3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    class SphereMesh extends PrimitiveMesh {
        set_radius(radius: number /*f64*/): void
        get_radius(): number /*f64*/
        set_height(height: number /*f64*/): void
        get_height(): number /*f64*/
        set_radial_segments(radial_segments: number /*i64*/): void
        get_radial_segments(): number /*i64*/
        set_rings(rings: number /*i64*/): void
        get_rings(): number /*i64*/
        set_is_hemisphere(is_hemisphere: boolean): void
        get_is_hemisphere(): boolean
        radius: number /*f64*/
        height: number /*f64*/
        radial_segments: number /*i64*/
        rings: number /*i64*/
        is_hemisphere: boolean
    }
    class SphereOccluder3D extends Occluder3D {
        set_radius(radius: number /*f64*/): void
        get_radius(): number /*f64*/
        radius: number /*f64*/
    }
    class SphereShape3D extends Shape3D {
        set_radius(radius: number /*f64*/): void
        get_radius(): number /*f64*/
        radius: number /*f64*/
    }
    class SpinBox extends Range {
        set_horizontal_alignment(alignment: HorizontalAlignment): void
        get_horizontal_alignment(): HorizontalAlignment
        set_suffix(suffix: string): void
        get_suffix(): string
        set_prefix(prefix: string): void
        get_prefix(): string
        set_editable(enabled: boolean): void
        set_custom_arrow_step(arrow_step: number /*f64*/): void
        get_custom_arrow_step(): number /*f64*/
        is_editable(): boolean
        set_update_on_text_changed(enabled: boolean): void
        get_update_on_text_changed(): boolean
        set_select_all_on_focus(enabled: boolean): void
        is_select_all_on_focus(): boolean
        apply(): void
        get_line_edit(): LineEdit
        alignment: number /*i64*/
        editable: boolean
        update_on_text_changed: boolean
        prefix: string
        suffix: string
        custom_arrow_step: number /*f64*/
        select_all_on_focus: boolean
    }
    namespace SplitContainer {
        enum DraggerVisibility {
            DRAGGER_VISIBLE = 0,
            DRAGGER_HIDDEN = 1,
            DRAGGER_HIDDEN_COLLAPSED = 2,
        }
    }
    class SplitContainer extends Container {
        set_split_offset(offset: number /*i64*/): void
        get_split_offset(): number /*i64*/
        clamp_split_offset(): void
        set_collapsed(collapsed: boolean): void
        is_collapsed(): boolean
        set_dragger_visibility(mode: SplitContainer.DraggerVisibility): void
        get_dragger_visibility(): SplitContainer.DraggerVisibility
        set_vertical(vertical: boolean): void
        is_vertical(): boolean
        split_offset: number /*i64*/
        collapsed: boolean
        dragger_visibility: number /*i64*/
        vertical: boolean
        readonly dragged: Signal
    }
    class SplitContainerDragger extends Control {
    }
    class SpotLight3D extends Light3D {
    }
    class SpringArm3D extends Node3D {
        get_hit_length(): number /*f64*/
        set_length(length: number /*f64*/): void
        get_length(): number /*f64*/
        set_shape(shape: Shape3D): void
        get_shape(): Shape3D
        add_excluded_object(RID: RID): void
        remove_excluded_object(RID: RID): boolean
        clear_excluded_objects(): void
        set_collision_mask(mask: number /*i64*/): void
        get_collision_mask(): number /*i64*/
        set_margin(margin: number /*f64*/): void
        get_margin(): number /*f64*/
        collision_mask: number /*i64*/
        shape: Shape3D
        spring_length: number /*f64*/
        margin: number /*f64*/
    }
    class SpringArm3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    class Sprite2D extends Node2D {
        set_texture(texture: Texture2D): void
        get_texture(): Texture2D
        set_centered(centered: boolean): void
        is_centered(): boolean
        set_offset(offset: Vector2): void
        get_offset(): Vector2
        set_flip_h(flip_h: boolean): void
        is_flipped_h(): boolean
        set_flip_v(flip_v: boolean): void
        is_flipped_v(): boolean
        set_region_enabled(enabled: boolean): void
        is_region_enabled(): boolean
        is_pixel_opaque(pos: Vector2): boolean
        set_region_rect(rect: Rect2): void
        get_region_rect(): Rect2
        set_region_filter_clip_enabled(enabled: boolean): void
        is_region_filter_clip_enabled(): boolean
        set_frame(frame: number /*i64*/): void
        get_frame(): number /*i64*/
        set_frame_coords(coords: Vector2i): void
        get_frame_coords(): Vector2i
        set_vframes(vframes: number /*i64*/): void
        get_vframes(): number /*i64*/
        set_hframes(hframes: number /*i64*/): void
        get_hframes(): number /*i64*/
        get_rect(): Rect2
        texture: Texture2D
        centered: boolean
        offset: Vector2
        flip_h: boolean
        flip_v: boolean
        hframes: number /*i64*/
        vframes: number /*i64*/
        frame: number /*i64*/
        frame_coords: Vector2i
        region_enabled: boolean
        region_rect: Rect2
        region_filter_clip_enabled: boolean
        readonly frame_changed: Signal
        readonly texture_changed: Signal
    }
    class Sprite2DEditor extends Control {
        _add_as_sibling_or_child(_unnamed_arg0: Node, _unnamed_arg1: Node): void
    }
    class Sprite2DEditorPlugin extends EditorPlugin {
    }
    class Sprite3D extends SpriteBase3D {
        set_texture(texture: Texture2D): void
        get_texture(): Texture2D
        set_region_enabled(enabled: boolean): void
        is_region_enabled(): boolean
        set_region_rect(rect: Rect2): void
        get_region_rect(): Rect2
        set_frame(frame: number /*i64*/): void
        get_frame(): number /*i64*/
        set_frame_coords(coords: Vector2i): void
        get_frame_coords(): Vector2i
        set_vframes(vframes: number /*i64*/): void
        get_vframes(): number /*i64*/
        set_hframes(hframes: number /*i64*/): void
        get_hframes(): number /*i64*/
        texture: Texture2D
        hframes: number /*i64*/
        vframes: number /*i64*/
        frame: number /*i64*/
        frame_coords: Vector2
        region_enabled: boolean
        region_rect: Rect2
        readonly frame_changed: Signal
        readonly texture_changed: Signal
    }
    namespace SpriteBase3D {
        enum DrawFlags {
            FLAG_TRANSPARENT = 0,
            FLAG_SHADED = 1,
            FLAG_DOUBLE_SIDED = 2,
            FLAG_DISABLE_DEPTH_TEST = 3,
            FLAG_FIXED_SIZE = 4,
            FLAG_MAX = 5,
        }
        enum AlphaCutMode {
            ALPHA_CUT_DISABLED = 0,
            ALPHA_CUT_DISCARD = 1,
            ALPHA_CUT_OPAQUE_PREPASS = 2,
            ALPHA_CUT_HASH = 3,
        }
    }
    class SpriteBase3D extends GeometryInstance3D {
        set_centered(centered: boolean): void
        is_centered(): boolean
        set_offset(offset: Vector2): void
        get_offset(): Vector2
        set_flip_h(flip_h: boolean): void
        is_flipped_h(): boolean
        set_flip_v(flip_v: boolean): void
        is_flipped_v(): boolean
        set_modulate(modulate: Color): void
        get_modulate(): Color
        set_render_priority(priority: number /*i64*/): void
        get_render_priority(): number /*i64*/
        set_pixel_size(pixel_size: number /*f64*/): void
        get_pixel_size(): number /*f64*/
        set_axis(axis: Vector3.Axis): void
        get_axis(): Vector3.Axis
        set_draw_flag(flag: SpriteBase3D.DrawFlags, enabled: boolean): void
        get_draw_flag(flag: SpriteBase3D.DrawFlags): boolean
        set_alpha_cut_mode(mode: SpriteBase3D.AlphaCutMode): void
        get_alpha_cut_mode(): SpriteBase3D.AlphaCutMode
        set_alpha_scissor_threshold(threshold: number /*f64*/): void
        get_alpha_scissor_threshold(): number /*f64*/
        set_alpha_hash_scale(threshold: number /*f64*/): void
        get_alpha_hash_scale(): number /*f64*/
        set_alpha_antialiasing(alpha_aa: BaseMaterial3D.AlphaAntiAliasing): void
        get_alpha_antialiasing(): BaseMaterial3D.AlphaAntiAliasing
        set_alpha_antialiasing_edge(edge: number /*f64*/): void
        get_alpha_antialiasing_edge(): number /*f64*/
        set_billboard_mode(mode: BaseMaterial3D.BillboardMode): void
        get_billboard_mode(): BaseMaterial3D.BillboardMode
        set_texture_filter(mode: BaseMaterial3D.TextureFilter): void
        get_texture_filter(): BaseMaterial3D.TextureFilter
        get_item_rect(): Rect2
        generate_triangle_mesh(): TriangleMesh
        centered: boolean
        offset: Vector2
        flip_h: boolean
        flip_v: boolean
        modulate: Color
        pixel_size: number /*f64*/
        axis: number /*i64*/
        billboard: number /*i64*/
        alpha_cut: number /*i64*/
        alpha_scissor_threshold: number /*f64*/
        alpha_hash_scale: number /*f64*/
        alpha_antialiasing_mode: number /*i64*/
        alpha_antialiasing_edge: number /*f64*/
        texture_filter: number /*i64*/
        render_priority: number /*i64*/
    }
    class SpriteBase3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    class SpriteFrames extends Resource {
        add_animation(anim: StringName): void
        has_animation(anim: StringName): boolean
        remove_animation(anim: StringName): void
        rename_animation(anim: StringName, newname: StringName): void
        get_animation_names(): PackedStringArray
        set_animation_speed(anim: StringName, fps: number /*f64*/): void
        get_animation_speed(anim: StringName): number /*f64*/
        set_animation_loop(anim: StringName, loop: boolean): void
        get_animation_loop(anim: StringName): boolean
        add_frame(anim: StringName, texture: Texture2D, duration: number /*f64*/ = 1, at_position: number /*i64*/ = -1): void
        set_frame(anim: StringName, idx: number /*i64*/, texture: Texture2D, duration: number /*f64*/ = 1): void
        remove_frame(anim: StringName, idx: number /*i64*/): void
        get_frame_count(anim: StringName): number /*i64*/
        get_frame_texture(anim: StringName, idx: number /*i64*/): Texture2D
        get_frame_duration(anim: StringName, idx: number /*i64*/): number /*f64*/
        clear(anim: StringName): void
        clear_all(): void
        _set_animations(animations: Array): void
        _get_animations(): Array
        animations: Array
    }
    class SpriteFramesEditor extends HSplitContainer {
        _update_library(skipsel: boolean = false): void
        _select_animation(name: string, update_node: boolean = true): void
    }
    class SpriteFramesEditorPlugin extends EditorPlugin {
    }
    class StandardMaterial3D extends BaseMaterial3D {
    }
    class StandardMaterial3DConversionPlugin extends EditorResourceConversionPlugin {
    }
    class StaticBody2D extends PhysicsBody2D {
        set_constant_linear_velocity(vel: Vector2): void
        set_constant_angular_velocity(vel: number /*f64*/): void
        get_constant_linear_velocity(): Vector2
        get_constant_angular_velocity(): number /*f64*/
        set_physics_material_override(physics_material_override: PhysicsMaterial): void
        get_physics_material_override(): PhysicsMaterial
        physics_material_override: PhysicsMaterial
        constant_linear_velocity: Vector2
        constant_angular_velocity: number /*f64*/
    }
    class StaticBody3D extends PhysicsBody3D {
        set_constant_linear_velocity(vel: Vector3): void
        set_constant_angular_velocity(vel: Vector3): void
        get_constant_linear_velocity(): Vector3
        get_constant_angular_velocity(): Vector3
        set_physics_material_override(physics_material_override: PhysicsMaterial): void
        get_physics_material_override(): PhysicsMaterial
        physics_material_override: PhysicsMaterial
        constant_linear_velocity: Vector3
        constant_angular_velocity: Vector3
    }
    class StreamPeer extends RefCounted {
        put_data(data: PackedByteArray): GodotError
        put_partial_data(data: PackedByteArray): Array
        get_data(bytes: number /*i64*/): Array
        get_partial_data(bytes: number /*i64*/): Array
        get_available_bytes(): number /*i64*/
        set_big_endian(enable: boolean): void
        is_big_endian_enabled(): boolean
        put_8(value: number /*i64*/): void
        put_u8(value: number /*i64*/): void
        put_16(value: number /*i64*/): void
        put_u16(value: number /*i64*/): void
        put_32(value: number /*i64*/): void
        put_u32(value: number /*i64*/): void
        put_64(value: number /*i64*/): void
        put_u64(value: number /*i64*/): void
        put_float(value: number /*f64*/): void
        put_double(value: number /*f64*/): void
        put_string(value: string): void
        put_utf8_string(value: string): void
        put_var(value: any, full_objects: boolean = false): void
        get_8(): number /*i64*/
        get_u8(): number /*i64*/
        get_16(): number /*i64*/
        get_u16(): number /*i64*/
        get_32(): number /*i64*/
        get_u32(): number /*i64*/
        get_64(): number /*i64*/
        get_u64(): number /*i64*/
        get_float(): number /*f64*/
        get_double(): number /*f64*/
        get_string(bytes: number /*i64*/ = -1): string
        get_utf8_string(bytes: number /*i64*/ = -1): string
        get_var(allow_objects: boolean = false): any
        big_endian: boolean
    }
    class StreamPeerBuffer extends StreamPeer {
        seek(position: number /*i64*/): void
        get_size(): number /*i64*/
        get_position(): number /*i64*/
        resize(size: number /*i64*/): void
        set_data_array(data: PackedByteArray): void
        get_data_array(): PackedByteArray
        clear(): void
        duplicate(): StreamPeerBuffer
        data_array: PackedByteArray
    }
    class StreamPeerExtension extends StreamPeer {
        /* gdvirtual */ _get_data(r_buffer: number /*i64*/, r_bytes: number /*i64*/, r_received: number /*i64*/): GodotError
        /* gdvirtual */ _get_partial_data(r_buffer: number /*i64*/, r_bytes: number /*i64*/, r_received: number /*i64*/): GodotError
        /* gdvirtual */ _put_data(p_data: number /*i64*/, p_bytes: number /*i64*/, r_sent: number /*i64*/): GodotError
        /* gdvirtual */ _put_partial_data(p_data: number /*i64*/, p_bytes: number /*i64*/, r_sent: number /*i64*/): GodotError
        /* gdvirtual */ _get_available_bytes(): number /*i64*/
    }
    class StreamPeerGZIP extends StreamPeer {
        start_compression(use_deflate: boolean = false, buffer_size: number /*i64*/ = 65535): GodotError
        start_decompression(use_deflate: boolean = false, buffer_size: number /*i64*/ = 65535): GodotError
        finish(): GodotError
        clear(): void
    }
    namespace StreamPeerTCP {
        enum Status {
            STATUS_NONE = 0,
            STATUS_CONNECTING = 1,
            STATUS_CONNECTED = 2,
            STATUS_ERROR = 3,
        }
    }
    class StreamPeerTCP extends StreamPeer {
        bind(port: number /*i64*/, host: string = '*'): GodotError
        connect_to_host(host: string, port: number /*i64*/): GodotError
        poll(): GodotError
        get_status(): StreamPeerTCP.Status
        get_connected_host(): string
        get_connected_port(): number /*i64*/
        get_local_port(): number /*i64*/
        disconnect_from_host(): void
        set_no_delay(enabled: boolean): void
    }
    namespace StreamPeerTLS {
        enum Status {
            STATUS_DISCONNECTED = 0,
            STATUS_HANDSHAKING = 1,
            STATUS_CONNECTED = 2,
            STATUS_ERROR = 3,
            STATUS_ERROR_HOSTNAME_MISMATCH = 4,
        }
    }
    class StreamPeerTLS extends StreamPeer {
        poll(): void
        accept_stream(stream: StreamPeer, server_options: TLSOptions): GodotError
        connect_to_stream(stream: StreamPeer, common_name: string, client_options: TLSOptions = <any> {} /*compound.type from nil*/): GodotError
        get_status(): StreamPeerTLS.Status
        get_stream(): StreamPeer
        disconnect_from_stream(): void
    }
    class StyleBox extends Resource {
        /* gdvirtual */ _draw(to_canvas_item: RID, rect: Rect2): void
        /* gdvirtual */ _get_draw_rect(rect: Rect2): Rect2
        /* gdvirtual */ _get_minimum_size(): Vector2
        /* gdvirtual */ _test_mask(point: Vector2, rect: Rect2): boolean
        get_minimum_size(): Vector2
        set_content_margin(margin: Side, offset: number /*f64*/): void
        set_content_margin_all(offset: number /*f64*/): void
        get_content_margin(margin: Side): number /*f64*/
        get_margin(margin: Side): number /*f64*/
        get_offset(): Vector2
        draw(canvas_item: RID, rect: Rect2): void
        get_current_item_drawn(): CanvasItem
        test_mask(point: Vector2, rect: Rect2): boolean
    }
    class StyleBoxEditorPlugin extends EditorPlugin {
    }
    class StyleBoxEmpty extends StyleBox {
    }
    class StyleBoxFlat extends StyleBox {
        set_bg_color(color: Color): void
        get_bg_color(): Color
        set_border_color(color: Color): void
        get_border_color(): Color
        set_border_width_all(width: number /*i64*/): void
        get_border_width_min(): number /*i64*/
        set_border_width(margin: Side, width: number /*i64*/): void
        get_border_width(margin: Side): number /*i64*/
        set_border_blend(blend: boolean): void
        get_border_blend(): boolean
        set_corner_radius_all(radius: number /*i64*/): void
        set_corner_radius(corner: Corner, radius: number /*i64*/): void
        get_corner_radius(corner: Corner): number /*i64*/
        set_expand_margin(margin: Side, size: number /*f64*/): void
        set_expand_margin_all(size: number /*f64*/): void
        get_expand_margin(margin: Side): number /*f64*/
        set_draw_center(draw_center: boolean): void
        is_draw_center_enabled(): boolean
        set_skew(skew: Vector2): void
        get_skew(): Vector2
        set_shadow_color(color: Color): void
        get_shadow_color(): Color
        set_shadow_size(size: number /*i64*/): void
        get_shadow_size(): number /*i64*/
        set_shadow_offset(offset: Vector2): void
        get_shadow_offset(): Vector2
        set_anti_aliased(anti_aliased: boolean): void
        is_anti_aliased(): boolean
        set_aa_size(size: number /*f64*/): void
        get_aa_size(): number /*f64*/
        set_corner_detail(detail: number /*i64*/): void
        get_corner_detail(): number /*i64*/
        bg_color: Color
        draw_center: boolean
        skew: Vector2
        border_color: Color
        border_blend: boolean
        corner_detail: number /*i64*/
        shadow_color: Color
        shadow_size: number /*i64*/
        shadow_offset: Vector2
        anti_aliasing: boolean
        anti_aliasing_size: number /*f64*/
    }
    class StyleBoxLine extends StyleBox {
        set_color(color: Color): void
        get_color(): Color
        set_thickness(thickness: number /*i64*/): void
        get_thickness(): number /*i64*/
        set_grow_begin(offset: number /*f64*/): void
        get_grow_begin(): number /*f64*/
        set_grow_end(offset: number /*f64*/): void
        get_grow_end(): number /*f64*/
        set_vertical(vertical: boolean): void
        is_vertical(): boolean
        color: Color
        grow_begin: number /*f64*/
        grow_end: number /*f64*/
        thickness: number /*i64*/
        vertical: boolean
    }
    namespace StyleBoxTexture {
        enum AxisStretchMode {
            AXIS_STRETCH_MODE_STRETCH = 0,
            AXIS_STRETCH_MODE_TILE = 1,
            AXIS_STRETCH_MODE_TILE_FIT = 2,
        }
    }
    class StyleBoxTexture extends StyleBox {
        set_texture(texture: Texture2D): void
        get_texture(): Texture2D
        set_texture_margin(margin: Side, size: number /*f64*/): void
        set_texture_margin_all(size: number /*f64*/): void
        get_texture_margin(margin: Side): number /*f64*/
        set_expand_margin(margin: Side, size: number /*f64*/): void
        set_expand_margin_all(size: number /*f64*/): void
        get_expand_margin(margin: Side): number /*f64*/
        set_region_rect(region: Rect2): void
        get_region_rect(): Rect2
        set_draw_center(enable: boolean): void
        is_draw_center_enabled(): boolean
        set_modulate(color: Color): void
        get_modulate(): Color
        set_h_axis_stretch_mode(mode: StyleBoxTexture.AxisStretchMode): void
        get_h_axis_stretch_mode(): StyleBoxTexture.AxisStretchMode
        set_v_axis_stretch_mode(mode: StyleBoxTexture.AxisStretchMode): void
        get_v_axis_stretch_mode(): StyleBoxTexture.AxisStretchMode
        texture: Texture2D
        axis_stretch_horizontal: number /*i64*/
        axis_stretch_vertical: number /*i64*/
        region_rect: Rect2
        modulate_color: Color
        draw_center: boolean
    }
    namespace SubViewport {
        enum ClearMode {
            CLEAR_MODE_ALWAYS = 0,
            CLEAR_MODE_NEVER = 1,
            CLEAR_MODE_ONCE = 2,
        }
        enum UpdateMode {
            UPDATE_DISABLED = 0,
            UPDATE_ONCE = 1,
            UPDATE_WHEN_VISIBLE = 2,
            UPDATE_WHEN_PARENT_VISIBLE = 3,
            UPDATE_ALWAYS = 4,
        }
    }
    class SubViewport extends Viewport {
        set_size(size: Vector2i): void
        get_size(): Vector2i
        set_size_2d_override(size: Vector2i): void
        get_size_2d_override(): Vector2i
        set_size_2d_override_stretch(enable: boolean): void
        is_size_2d_override_stretch_enabled(): boolean
        set_update_mode(mode: SubViewport.UpdateMode): void
        get_update_mode(): SubViewport.UpdateMode
        set_clear_mode(mode: SubViewport.ClearMode): void
        get_clear_mode(): SubViewport.ClearMode
        size: Vector2i
        size_2d_override: Vector2i
        size_2d_override_stretch: boolean
        render_target_clear_mode: number /*i64*/
        render_target_update_mode: number /*i64*/
    }
    class SubViewportContainer extends Container {
        /* gdvirtual */ _propagate_input_event(event: InputEvent): boolean
        set_stretch(enable: boolean): void
        is_stretch_enabled(): boolean
        set_stretch_shrink(amount: number /*i64*/): void
        get_stretch_shrink(): number /*i64*/
        stretch: boolean
        stretch_shrink: number /*i64*/
    }
    class SubViewportPreviewEditorPlugin extends EditorPlugin {
    }
    namespace SurfaceTool {
        enum CustomFormat {
            CUSTOM_RGBA8_UNORM = 0,
            CUSTOM_RGBA8_SNORM = 1,
            CUSTOM_RG_HALF = 2,
            CUSTOM_RGBA_HALF = 3,
            CUSTOM_R_FLOAT = 4,
            CUSTOM_RG_FLOAT = 5,
            CUSTOM_RGB_FLOAT = 6,
            CUSTOM_RGBA_FLOAT = 7,
            CUSTOM_MAX = 8,
        }
        enum SkinWeightCount {
            SKIN_4_WEIGHTS = 0,
            SKIN_8_WEIGHTS = 1,
        }
    }
    class SurfaceTool extends RefCounted {
        set_skin_weight_count(count: SurfaceTool.SkinWeightCount): void
        get_skin_weight_count(): SurfaceTool.SkinWeightCount
        set_custom_format(channel_index: number /*i64*/, format: SurfaceTool.CustomFormat): void
        get_custom_format(channel_index: number /*i64*/): SurfaceTool.CustomFormat
        begin(primitive: Mesh.PrimitiveType): void
        add_vertex(vertex: Vector3): void
        set_color(color: Color): void
        set_normal(normal: Vector3): void
        set_tangent(tangent: Plane): void
        set_uv(uv: Vector2): void
        set_uv2(uv2: Vector2): void
        set_bones(bones: PackedInt32Array): void
        set_weights(weights: PackedFloat32Array): void
        set_custom(channel_index: number /*i64*/, custom_color: Color): void
        set_smooth_group(index: number /*i64*/): void
        add_triangle_fan(vertices: PackedVector3Array, uvs: PackedVector2Array = <any> {} /*compound.type from 35([object Object])*/, colors: PackedColorArray = <any> {} /*compound.type from 37([object Object])*/, uv2s: PackedVector2Array = <any> {} /*compound.type from 35([object Object])*/, normals: PackedVector3Array = <any> {} /*compound.type from 36([object Object])*/, tangents: Array = <any> {} /*compound.type from 28([object Object])*/): void
        add_index(index: number /*i64*/): void
        index(): void
        deindex(): void
        generate_normals(flip: boolean = false): void
        generate_tangents(): void
        optimize_indices_for_cache(): void
        get_aabb(): AABB
        generate_lod(nd_threshold: number /*f64*/, target_index_count: number /*i64*/ = 3): PackedInt32Array
        set_material(material: Material): void
        get_primitive_type(): Mesh.PrimitiveType
        clear(): void
        create_from(existing: Mesh, surface: number /*i64*/): void
        create_from_blend_shape(existing: Mesh, surface: number /*i64*/, blend_shape: string): void
        append_from(existing: Mesh, surface: number /*i64*/, transform: Transform3D): void
        commit(existing: ArrayMesh = <any> {} /*compound.type from nil*/, flags: number /*i64*/ = 0): ArrayMesh
        commit_to_arrays(): Array
    }
    class SurfaceUpgradeDialog extends ConfirmationDialog {
    }
    class SurfaceUpgradeTool extends Object {
        readonly upgrade_finished: Signal
    }
    class SyntaxHighlighter extends Resource {
        /* gdvirtual */ _get_line_syntax_highlighting(line: number /*i64*/): Dictionary
        /* gdvirtual */ _clear_highlighting_cache(): void
        /* gdvirtual */ _update_cache(): void
        get_line_syntax_highlighting(line: number /*i64*/): Dictionary
        update_cache(): void
        clear_highlighting_cache(): void
        get_text_edit(): TextEdit
    }
    class SystemFont extends Font {
        set_antialiasing(antialiasing: TextServer.FontAntialiasing): void
        get_antialiasing(): TextServer.FontAntialiasing
        set_generate_mipmaps(generate_mipmaps: boolean): void
        get_generate_mipmaps(): boolean
        set_allow_system_fallback(allow_system_fallback: boolean): void
        is_allow_system_fallback(): boolean
        set_force_autohinter(force_autohinter: boolean): void
        is_force_autohinter(): boolean
        set_hinting(hinting: TextServer.Hinting): void
        get_hinting(): TextServer.Hinting
        set_subpixel_positioning(subpixel_positioning: TextServer.SubpixelPositioning): void
        get_subpixel_positioning(): TextServer.SubpixelPositioning
        set_multichannel_signed_distance_field(msdf: boolean): void
        is_multichannel_signed_distance_field(): boolean
        set_msdf_pixel_range(msdf_pixel_range: number /*i64*/): void
        get_msdf_pixel_range(): number /*i64*/
        set_msdf_size(msdf_size: number /*i64*/): void
        get_msdf_size(): number /*i64*/
        set_oversampling(oversampling: number /*f64*/): void
        get_oversampling(): number /*f64*/
        get_font_names(): PackedStringArray
        set_font_names(names: PackedStringArray): void
        get_font_italic(): boolean
        set_font_italic(italic: boolean): void
        set_font_weight(weight: number /*i64*/): void
        set_font_stretch(stretch: number /*i64*/): void
        font_names: PackedStringArray
        font_italic: boolean
        font_weight: number /*i64*/
        font_stretch: number /*i64*/
        antialiasing: number /*i64*/
        generate_mipmaps: boolean
        allow_system_fallback: boolean
        force_autohinter: boolean
        hinting: number /*i64*/
        subpixel_positioning: number /*i64*/
        multichannel_signed_distance_field: boolean
        msdf_pixel_range: number /*i64*/
        msdf_size: number /*i64*/
        oversampling: number /*f64*/
    }
    class TCPServer extends RefCounted {
        listen(port: number /*i64*/, bind_address: string = '*'): GodotError
        is_connection_available(): boolean
        is_listening(): boolean
        get_local_port(): number /*i64*/
        take_connection(): StreamPeerTCP
        stop(): void
    }
    class TLSOptions extends RefCounted {
        static client(trusted_chain: X509Certificate = <any> {} /*compound.type from nil*/, common_name_override: string = ''): TLSOptions
        static client_unsafe(trusted_chain: X509Certificate = <any> {} /*compound.type from nil*/): TLSOptions
        static server(key: CryptoKey, certificate: X509Certificate): TLSOptions
    }
    namespace TabBar {
        enum AlignmentMode {
            ALIGNMENT_LEFT = 0,
            ALIGNMENT_CENTER = 1,
            ALIGNMENT_RIGHT = 2,
            ALIGNMENT_MAX = 3,
        }
        enum CloseButtonDisplayPolicy {
            CLOSE_BUTTON_SHOW_NEVER = 0,
            CLOSE_BUTTON_SHOW_ACTIVE_ONLY = 1,
            CLOSE_BUTTON_SHOW_ALWAYS = 2,
            CLOSE_BUTTON_MAX = 3,
        }
    }
    class TabBar extends Control {
        set_tab_count(count: number /*i64*/): void
        get_tab_count(): number /*i64*/
        set_current_tab(tab_idx: number /*i64*/): void
        get_current_tab(): number /*i64*/
        get_previous_tab(): number /*i64*/
        select_previous_available(): boolean
        select_next_available(): boolean
        set_tab_title(tab_idx: number /*i64*/, title: string): void
        get_tab_title(tab_idx: number /*i64*/): string
        set_tab_text_direction(tab_idx: number /*i64*/, direction: Control.TextDirection): void
        get_tab_text_direction(tab_idx: number /*i64*/): Control.TextDirection
        set_tab_language(tab_idx: number /*i64*/, language: string): void
        get_tab_language(tab_idx: number /*i64*/): string
        set_tab_icon(tab_idx: number /*i64*/, icon: Texture2D): void
        get_tab_icon(tab_idx: number /*i64*/): Texture2D
        set_tab_icon_max_width(tab_idx: number /*i64*/, width: number /*i64*/): void
        get_tab_icon_max_width(tab_idx: number /*i64*/): number /*i64*/
        set_tab_button_icon(tab_idx: number /*i64*/, icon: Texture2D): void
        get_tab_button_icon(tab_idx: number /*i64*/): Texture2D
        set_tab_disabled(tab_idx: number /*i64*/, disabled: boolean): void
        is_tab_disabled(tab_idx: number /*i64*/): boolean
        set_tab_hidden(tab_idx: number /*i64*/, hidden: boolean): void
        is_tab_hidden(tab_idx: number /*i64*/): boolean
        set_tab_metadata(tab_idx: number /*i64*/, metadata: any): void
        get_tab_metadata(tab_idx: number /*i64*/): any
        remove_tab(tab_idx: number /*i64*/): void
        add_tab(title: string = '', icon: Texture2D = <any> {} /*compound.type from nil*/): void
        get_tab_idx_at_point(point: Vector2): number /*i64*/
        set_tab_alignment(alignment: TabBar.AlignmentMode): void
        get_tab_alignment(): TabBar.AlignmentMode
        set_clip_tabs(clip_tabs: boolean): void
        get_clip_tabs(): boolean
        get_tab_offset(): number /*i64*/
        get_offset_buttons_visible(): boolean
        ensure_tab_visible(idx: number /*i64*/): void
        get_tab_rect(tab_idx: number /*i64*/): Rect2
        move_tab(from: number /*i64*/, to: number /*i64*/): void
        set_tab_close_display_policy(policy: TabBar.CloseButtonDisplayPolicy): void
        get_tab_close_display_policy(): TabBar.CloseButtonDisplayPolicy
        set_max_tab_width(width: number /*i64*/): void
        get_max_tab_width(): number /*i64*/
        set_scrolling_enabled(enabled: boolean): void
        get_scrolling_enabled(): boolean
        set_drag_to_rearrange_enabled(enabled: boolean): void
        get_drag_to_rearrange_enabled(): boolean
        set_tabs_rearrange_group(group_id: number /*i64*/): void
        get_tabs_rearrange_group(): number /*i64*/
        set_scroll_to_selected(enabled: boolean): void
        get_scroll_to_selected(): boolean
        set_select_with_rmb(enabled: boolean): void
        get_select_with_rmb(): boolean
        clear_tabs(): void
        tab_count: any /*Tabs,tab_*/
        current_tab: number /*i64*/
        tab_alignment: number /*i64*/
        clip_tabs: boolean
        tab_close_display_policy: number /*i64*/
        max_tab_width: number /*i64*/
        scrolling_enabled: boolean
        drag_to_rearrange_enabled: boolean
        tabs_rearrange_group: number /*i64*/
        scroll_to_selected: boolean
        select_with_rmb: boolean
        readonly tab_selected: Signal
        readonly tab_changed: Signal
        readonly tab_clicked: Signal
        readonly tab_rmb_clicked: Signal
        readonly tab_close_pressed: Signal
        readonly tab_button_pressed: Signal
        readonly tab_hovered: Signal
        readonly active_tab_rearranged: Signal
    }
    class TabContainer extends Container {
        get_tab_count(): number /*i64*/
        set_current_tab(tab_idx: number /*i64*/): void
        get_current_tab(): number /*i64*/
        get_previous_tab(): number /*i64*/
        select_previous_available(): boolean
        select_next_available(): boolean
        get_current_tab_control(): Control
        get_tab_bar(): TabBar
        get_tab_control(tab_idx: number /*i64*/): Control
        set_tab_alignment(alignment: TabBar.AlignmentMode): void
        get_tab_alignment(): TabBar.AlignmentMode
        set_clip_tabs(clip_tabs: boolean): void
        get_clip_tabs(): boolean
        set_tabs_visible(visible: boolean): void
        are_tabs_visible(): boolean
        set_all_tabs_in_front(is_front: boolean): void
        is_all_tabs_in_front(): boolean
        set_tab_title(tab_idx: number /*i64*/, title: string): void
        get_tab_title(tab_idx: number /*i64*/): string
        set_tab_icon(tab_idx: number /*i64*/, icon: Texture2D): void
        get_tab_icon(tab_idx: number /*i64*/): Texture2D
        set_tab_disabled(tab_idx: number /*i64*/, disabled: boolean): void
        is_tab_disabled(tab_idx: number /*i64*/): boolean
        set_tab_hidden(tab_idx: number /*i64*/, hidden: boolean): void
        is_tab_hidden(tab_idx: number /*i64*/): boolean
        set_tab_metadata(tab_idx: number /*i64*/, metadata: any): void
        get_tab_metadata(tab_idx: number /*i64*/): any
        set_tab_button_icon(tab_idx: number /*i64*/, icon: Texture2D): void
        get_tab_button_icon(tab_idx: number /*i64*/): Texture2D
        get_tab_idx_at_point(point: Vector2): number /*i64*/
        get_tab_idx_from_control(control: Control): number /*i64*/
        set_popup(popup: Node): void
        get_popup(): Popup
        set_drag_to_rearrange_enabled(enabled: boolean): void
        get_drag_to_rearrange_enabled(): boolean
        set_tabs_rearrange_group(group_id: number /*i64*/): void
        get_tabs_rearrange_group(): number /*i64*/
        set_use_hidden_tabs_for_min_size(enabled: boolean): void
        get_use_hidden_tabs_for_min_size(): boolean
        set_tab_focus_mode(focus_mode: Control.FocusMode): void
        get_tab_focus_mode(): Control.FocusMode
        tab_alignment: number /*i64*/
        current_tab: number /*i64*/
        clip_tabs: boolean
        tabs_visible: boolean
        all_tabs_in_front: boolean
        drag_to_rearrange_enabled: boolean
        tabs_rearrange_group: number /*i64*/
        use_hidden_tabs_for_min_size: boolean
        tab_focus_mode: number /*i64*/
        readonly active_tab_rearranged: Signal
        readonly tab_changed: Signal
        readonly tab_clicked: Signal
        readonly tab_hovered: Signal
        readonly tab_selected: Signal
        readonly tab_button_pressed: Signal
        readonly pre_popup_pressed: Signal
    }
    namespace TextEdit {
        enum MenuItems {
            MENU_CUT = 0,
            MENU_COPY = 1,
            MENU_PASTE = 2,
            MENU_CLEAR = 3,
            MENU_SELECT_ALL = 4,
            MENU_UNDO = 5,
            MENU_REDO = 6,
            MENU_SUBMENU_TEXT_DIR = 7,
            MENU_DIR_INHERITED = 8,
            MENU_DIR_AUTO = 9,
            MENU_DIR_LTR = 10,
            MENU_DIR_RTL = 11,
            MENU_DISPLAY_UCC = 12,
            MENU_SUBMENU_INSERT_UCC = 13,
            MENU_INSERT_LRM = 14,
            MENU_INSERT_RLM = 15,
            MENU_INSERT_LRE = 16,
            MENU_INSERT_RLE = 17,
            MENU_INSERT_LRO = 18,
            MENU_INSERT_RLO = 19,
            MENU_INSERT_PDF = 20,
            MENU_INSERT_ALM = 21,
            MENU_INSERT_LRI = 22,
            MENU_INSERT_RLI = 23,
            MENU_INSERT_FSI = 24,
            MENU_INSERT_PDI = 25,
            MENU_INSERT_ZWJ = 26,
            MENU_INSERT_ZWNJ = 27,
            MENU_INSERT_WJ = 28,
            MENU_INSERT_SHY = 29,
            MENU_MAX = 30,
        }
        enum EditAction {
            ACTION_NONE = 0,
            ACTION_TYPING = 1,
            ACTION_BACKSPACE = 2,
            ACTION_DELETE = 3,
        }
        enum SearchFlags {
            SEARCH_MATCH_CASE = 1,
            SEARCH_WHOLE_WORDS = 2,
            SEARCH_BACKWARDS = 4,
        }
        enum CaretType {
            CARET_TYPE_LINE = 0,
            CARET_TYPE_BLOCK = 1,
        }
        enum SelectionMode {
            SELECTION_MODE_NONE = 0,
            SELECTION_MODE_SHIFT = 1,
            SELECTION_MODE_POINTER = 2,
            SELECTION_MODE_WORD = 3,
            SELECTION_MODE_LINE = 4,
        }
        enum LineWrappingMode {
            LINE_WRAPPING_NONE = 0,
            LINE_WRAPPING_BOUNDARY = 1,
        }
        enum GutterType {
            GUTTER_TYPE_STRING = 0,
            GUTTER_TYPE_ICON = 1,
            GUTTER_TYPE_CUSTOM = 2,
        }
    }
    class TextEdit extends Control {
        /* gdvirtual */ _handle_unicode_input(unicode_char: number /*i64*/, caret_index: number /*i64*/): void
        /* gdvirtual */ _backspace(caret_index: number /*i64*/): void
        /* gdvirtual */ _cut(caret_index: number /*i64*/): void
        /* gdvirtual */ _copy(caret_index: number /*i64*/): void
        /* gdvirtual */ _paste(caret_index: number /*i64*/): void
        /* gdvirtual */ _paste_primary_clipboard(caret_index: number /*i64*/): void
        _text_changed_emit(): void
        has_ime_text(): boolean
        set_editable(enabled: boolean): void
        is_editable(): boolean
        set_text_direction(direction: Control.TextDirection): void
        get_text_direction(): Control.TextDirection
        set_language(language: string): void
        get_language(): string
        set_structured_text_bidi_override(parser: TextServer.StructuredTextParser): void
        get_structured_text_bidi_override(): TextServer.StructuredTextParser
        set_structured_text_bidi_override_options(args: Array): void
        get_structured_text_bidi_override_options(): Array
        set_tab_size(size: number /*i64*/): void
        get_tab_size(): number /*i64*/
        set_overtype_mode_enabled(enabled: boolean): void
        is_overtype_mode_enabled(): boolean
        set_context_menu_enabled(enabled: boolean): void
        is_context_menu_enabled(): boolean
        set_shortcut_keys_enabled(enabled: boolean): void
        is_shortcut_keys_enabled(): boolean
        set_virtual_keyboard_enabled(enabled: boolean): void
        is_virtual_keyboard_enabled(): boolean
        set_middle_mouse_paste_enabled(enabled: boolean): void
        is_middle_mouse_paste_enabled(): boolean
        clear(): void
        set_text(text: string): void
        get_text(): string
        get_line_count(): number /*i64*/
        set_placeholder(text: string): void
        get_placeholder(): string
        set_line(line: number /*i64*/, new_text: string): void
        get_line(line: number /*i64*/): string
        get_line_width(line: number /*i64*/, wrap_index: number /*i64*/ = -1): number /*i64*/
        get_line_height(): number /*i64*/
        get_indent_level(line: number /*i64*/): number /*i64*/
        get_first_non_whitespace_column(line: number /*i64*/): number /*i64*/
        swap_lines(from_line: number /*i64*/, to_line: number /*i64*/): void
        insert_line_at(line: number /*i64*/, text: string): void
        insert_text_at_caret(text: string, caret_index: number /*i64*/ = -1): void
        remove_text(from_line: number /*i64*/, from_column: number /*i64*/, to_line: number /*i64*/, to_column: number /*i64*/): void
        get_last_unhidden_line(): number /*i64*/
        get_next_visible_line_offset_from(line: number /*i64*/, visible_amount: number /*i64*/): number /*i64*/
        get_next_visible_line_index_offset_from(line: number /*i64*/, wrap_index: number /*i64*/, visible_amount: number /*i64*/): Vector2i
        backspace(caret_index: number /*i64*/ = -1): void
        cut(caret_index: number /*i64*/ = -1): void
        copy(caret_index: number /*i64*/ = -1): void
        paste(caret_index: number /*i64*/ = -1): void
        paste_primary_clipboard(caret_index: number /*i64*/ = -1): void
        start_action(action: TextEdit.EditAction): void
        end_action(): void
        begin_complex_operation(): void
        end_complex_operation(): void
        has_undo(): boolean
        has_redo(): boolean
        undo(): void
        redo(): void
        clear_undo_history(): void
        tag_saved_version(): void
        get_version(): number /*i64*/
        get_saved_version(): number /*i64*/
        set_search_text(search_text: string): void
        set_search_flags(flags: number /*i64*/): void
        search(text: string, flags: number /*i64*/, from_line: number /*i64*/, from_colum: number /*i64*/): Vector2i
        set_tooltip_request_func(callback: Callable): void
        get_local_mouse_pos(): Vector2
        get_word_at_pos(position: Vector2): string
        get_line_column_at_pos(position: Vector2i, allow_out_of_bounds: boolean = true): Vector2i
        get_pos_at_line_column(line: number /*i64*/, column: number /*i64*/): Vector2i
        get_rect_at_line_column(line: number /*i64*/, column: number /*i64*/): Rect2i
        get_minimap_line_at_pos(position: Vector2i): number /*i64*/
        is_dragging_cursor(): boolean
        is_mouse_over_selection(edges: boolean, caret_index: number /*i64*/ = -1): boolean
        _emit_caret_changed(): void
        set_caret_type(type: TextEdit.CaretType): void
        get_caret_type(): TextEdit.CaretType
        set_caret_blink_enabled(enable: boolean): void
        is_caret_blink_enabled(): boolean
        set_caret_blink_interval(interval: number /*f64*/): void
        get_caret_blink_interval(): number /*f64*/
        set_draw_caret_when_editable_disabled(enable: boolean): void
        is_drawing_caret_when_editable_disabled(): boolean
        set_move_caret_on_right_click_enabled(enable: boolean): void
        is_move_caret_on_right_click_enabled(): boolean
        set_caret_mid_grapheme_enabled(enabled: boolean): void
        is_caret_mid_grapheme_enabled(): boolean
        set_multiple_carets_enabled(enabled: boolean): void
        is_multiple_carets_enabled(): boolean
        add_caret(line: number /*i64*/, col: number /*i64*/): number /*i64*/
        remove_caret(caret: number /*i64*/): void
        remove_secondary_carets(): void
        merge_overlapping_carets(): void
        get_caret_count(): number /*i64*/
        add_caret_at_carets(below: boolean): void
        get_caret_index_edit_order(): PackedInt32Array
        adjust_carets_after_edit(caret: number /*i64*/, from_line: number /*i64*/, from_col: number /*i64*/, to_line: number /*i64*/, to_col: number /*i64*/): void
        is_caret_visible(caret_index: number /*i64*/ = 0): boolean
        get_caret_draw_pos(caret_index: number /*i64*/ = 0): Vector2
        set_caret_line(line: number /*i64*/, adjust_viewport: boolean = true, can_be_hidden: boolean = true, wrap_index: number /*i64*/ = 0, caret_index: number /*i64*/ = 0): void
        get_caret_line(caret_index: number /*i64*/ = 0): number /*i64*/
        set_caret_column(column: number /*i64*/, adjust_viewport: boolean = true, caret_index: number /*i64*/ = 0): void
        get_caret_column(caret_index: number /*i64*/ = 0): number /*i64*/
        get_caret_wrap_index(caret_index: number /*i64*/ = 0): number /*i64*/
        get_word_under_caret(caret_index: number /*i64*/ = -1): string
        set_selecting_enabled(enable: boolean): void
        is_selecting_enabled(): boolean
        set_deselect_on_focus_loss_enabled(enable: boolean): void
        is_deselect_on_focus_loss_enabled(): boolean
        set_drag_and_drop_selection_enabled(enable: boolean): void
        is_drag_and_drop_selection_enabled(): boolean
        set_selection_mode(mode: TextEdit.SelectionMode, line: number /*i64*/ = -1, column: number /*i64*/ = -1, caret_index: number /*i64*/ = 0): void
        get_selection_mode(): TextEdit.SelectionMode
        select_all(): void
        select_word_under_caret(caret_index: number /*i64*/ = -1): void
        add_selection_for_next_occurrence(): void
        select(from_line: number /*i64*/, from_column: number /*i64*/, to_line: number /*i64*/, to_column: number /*i64*/, caret_index: number /*i64*/ = 0): void
        has_selection(caret_index: number /*i64*/ = -1): boolean
        get_selected_text(caret_index: number /*i64*/ = -1): string
        get_selection_line(caret_index: number /*i64*/ = 0): number /*i64*/
        get_selection_column(caret_index: number /*i64*/ = 0): number /*i64*/
        get_selection_from_line(caret_index: number /*i64*/ = 0): number /*i64*/
        get_selection_from_column(caret_index: number /*i64*/ = 0): number /*i64*/
        get_selection_to_line(caret_index: number /*i64*/ = 0): number /*i64*/
        get_selection_to_column(caret_index: number /*i64*/ = 0): number /*i64*/
        deselect(caret_index: number /*i64*/ = -1): void
        delete_selection(caret_index: number /*i64*/ = -1): void
        _update_wrap_at_column(force: boolean = false): void
        set_line_wrapping_mode(mode: TextEdit.LineWrappingMode): void
        get_line_wrapping_mode(): TextEdit.LineWrappingMode
        set_autowrap_mode(autowrap_mode: TextServer.AutowrapMode): void
        get_autowrap_mode(): TextServer.AutowrapMode
        is_line_wrapped(line: number /*i64*/): boolean
        get_line_wrap_count(line: number /*i64*/): number /*i64*/
        get_line_wrap_index_at_column(line: number /*i64*/, column: number /*i64*/): number /*i64*/
        get_line_wrapped_text(line: number /*i64*/): PackedStringArray
        set_smooth_scroll_enabled(enable: boolean): void
        is_smooth_scroll_enabled(): boolean
        get_v_scroll_bar(): VScrollBar
        get_h_scroll_bar(): HScrollBar
        set_v_scroll(value: number /*f64*/): void
        get_v_scroll(): number /*f64*/
        set_h_scroll(value: number /*i64*/): void
        get_h_scroll(): number /*i64*/
        set_scroll_past_end_of_file_enabled(enable: boolean): void
        is_scroll_past_end_of_file_enabled(): boolean
        set_v_scroll_speed(speed: number /*f64*/): void
        get_v_scroll_speed(): number /*f64*/
        set_fit_content_height_enabled(enabled: boolean): void
        is_fit_content_height_enabled(): boolean
        get_scroll_pos_for_line(line: number /*i64*/, wrap_index: number /*i64*/ = 0): number /*f64*/
        set_line_as_first_visible(line: number /*i64*/, wrap_index: number /*i64*/ = 0): void
        get_first_visible_line(): number /*i64*/
        set_line_as_center_visible(line: number /*i64*/, wrap_index: number /*i64*/ = 0): void
        set_line_as_last_visible(line: number /*i64*/, wrap_index: number /*i64*/ = 0): void
        get_last_full_visible_line(): number /*i64*/
        get_last_full_visible_line_wrap_index(): number /*i64*/
        get_visible_line_count(): number /*i64*/
        get_visible_line_count_in_range(from_line: number /*i64*/, to_line: number /*i64*/): number /*i64*/
        get_total_visible_line_count(): number /*i64*/
        adjust_viewport_to_caret(caret_index: number /*i64*/ = 0): void
        center_viewport_to_caret(caret_index: number /*i64*/ = 0): void
        set_draw_minimap(enabled: boolean): void
        is_drawing_minimap(): boolean
        set_minimap_width(width: number /*i64*/): void
        get_minimap_width(): number /*i64*/
        get_minimap_visible_lines(): number /*i64*/
        add_gutter(at: number /*i64*/ = -1): void
        remove_gutter(gutter: number /*i64*/): void
        get_gutter_count(): number /*i64*/
        set_gutter_name(gutter: number /*i64*/, name: string): void
        get_gutter_name(gutter: number /*i64*/): string
        set_gutter_type(gutter: number /*i64*/, type: TextEdit.GutterType): void
        get_gutter_type(gutter: number /*i64*/): TextEdit.GutterType
        set_gutter_width(gutter: number /*i64*/, width: number /*i64*/): void
        get_gutter_width(gutter: number /*i64*/): number /*i64*/
        set_gutter_draw(gutter: number /*i64*/, draw: boolean): void
        is_gutter_drawn(gutter: number /*i64*/): boolean
        set_gutter_clickable(gutter: number /*i64*/, clickable: boolean): void
        is_gutter_clickable(gutter: number /*i64*/): boolean
        set_gutter_overwritable(gutter: number /*i64*/, overwritable: boolean): void
        is_gutter_overwritable(gutter: number /*i64*/): boolean
        merge_gutters(from_line: number /*i64*/, to_line: number /*i64*/): void
        set_gutter_custom_draw(column: number /*i64*/, draw_callback: Callable): void
        get_total_gutter_width(): number /*i64*/
        set_line_gutter_metadata(line: number /*i64*/, gutter: number /*i64*/, metadata: any): void
        get_line_gutter_metadata(line: number /*i64*/, gutter: number /*i64*/): any
        set_line_gutter_text(line: number /*i64*/, gutter: number /*i64*/, text: string): void
        get_line_gutter_text(line: number /*i64*/, gutter: number /*i64*/): string
        set_line_gutter_icon(line: number /*i64*/, gutter: number /*i64*/, icon: Texture2D): void
        get_line_gutter_icon(line: number /*i64*/, gutter: number /*i64*/): Texture2D
        set_line_gutter_item_color(line: number /*i64*/, gutter: number /*i64*/, color: Color): void
        get_line_gutter_item_color(line: number /*i64*/, gutter: number /*i64*/): Color
        set_line_gutter_clickable(line: number /*i64*/, gutter: number /*i64*/, clickable: boolean): void
        is_line_gutter_clickable(line: number /*i64*/, gutter: number /*i64*/): boolean
        set_line_background_color(line: number /*i64*/, color: Color): void
        get_line_background_color(line: number /*i64*/): Color
        set_syntax_highlighter(syntax_highlighter: SyntaxHighlighter): void
        get_syntax_highlighter(): SyntaxHighlighter
        set_highlight_current_line(enabled: boolean): void
        is_highlight_current_line_enabled(): boolean
        set_highlight_all_occurrences(enabled: boolean): void
        is_highlight_all_occurrences_enabled(): boolean
        get_draw_control_chars(): boolean
        set_draw_control_chars(enabled: boolean): void
        set_draw_tabs(enabled: boolean): void
        is_drawing_tabs(): boolean
        set_draw_spaces(enabled: boolean): void
        is_drawing_spaces(): boolean
        get_menu(): PopupMenu
        is_menu_visible(): boolean
        menu_option(option: number /*i64*/): void
        text: string
        placeholder_text: string
        editable: boolean
        context_menu_enabled: boolean
        shortcut_keys_enabled: boolean
        selecting_enabled: boolean
        deselect_on_focus_loss_enabled: boolean
        drag_and_drop_selection_enabled: boolean
        virtual_keyboard_enabled: boolean
        middle_mouse_paste_enabled: boolean
        wrap_mode: number /*i64*/
        autowrap_mode: number /*i64*/
        scroll_smooth: boolean
        scroll_v_scroll_speed: number /*f64*/
        scroll_past_end_of_file: boolean
        scroll_vertical: number /*f64*/
        scroll_horizontal: number /*i64*/
        scroll_fit_content_height: boolean
        minimap_draw: boolean
        minimap_width: number /*i64*/
        caret_type: number /*i64*/
        caret_blink: boolean
        caret_blink_interval: number /*f64*/
        caret_draw_when_editable_disabled: boolean
        caret_move_on_right_click: boolean
        caret_mid_grapheme: boolean
        caret_multiple: boolean
        syntax_highlighter: SyntaxHighlighter
        highlight_all_occurrences: boolean
        highlight_current_line: boolean
        draw_control_chars: boolean
        draw_tabs: boolean
        draw_spaces: boolean
        text_direction: number /*i64*/
        language: string
        structured_text_bidi_override: number /*i64*/
        structured_text_bidi_override_options: Array
        readonly text_set: Signal
        readonly text_changed: Signal
        readonly lines_edited_from: Signal
        readonly caret_changed: Signal
        readonly gutter_clicked: Signal
        readonly gutter_added: Signal
        readonly gutter_removed: Signal
    }
    class TextLine extends RefCounted {
        clear(): void
        set_direction(direction: TextServer.Direction): void
        get_direction(): TextServer.Direction
        set_orientation(orientation: TextServer.Orientation): void
        get_orientation(): TextServer.Orientation
        set_preserve_invalid(enabled: boolean): void
        get_preserve_invalid(): boolean
        set_preserve_control(enabled: boolean): void
        get_preserve_control(): boolean
        set_bidi_override(override: Array): void
        add_string(text: string, font: Font, font_size: number /*i64*/, language: string = '', meta: any = <any> {} /*compound.type from nil*/): boolean
        add_object(key: any, size: Vector2, inline_align: InlineAlignment = 5, length: number /*i64*/ = 1, baseline: number /*f64*/ = 0): boolean
        resize_object(key: any, size: Vector2, inline_align: InlineAlignment = 5, baseline: number /*f64*/ = 0): boolean
        set_width(width: number /*f64*/): void
        get_width(): number /*f64*/
        set_horizontal_alignment(alignment: HorizontalAlignment): void
        get_horizontal_alignment(): HorizontalAlignment
        tab_align(tab_stops: PackedFloat32Array): void
        set_flags(flags: TextServer.JustificationFlag): void
        get_flags(): TextServer.JustificationFlag
        set_text_overrun_behavior(overrun_behavior: TextServer.OverrunBehavior): void
        get_text_overrun_behavior(): TextServer.OverrunBehavior
        get_objects(): Array
        get_object_rect(key: any): Rect2
        get_size(): Vector2
        get_rid(): RID
        get_line_ascent(): number /*f64*/
        get_line_descent(): number /*f64*/
        get_line_width(): number /*f64*/
        get_line_underline_position(): number /*f64*/
        get_line_underline_thickness(): number /*f64*/
        draw(canvas: RID, pos: Vector2, color: Color = new Color(1, 1, 1, 1)): void
        draw_outline(canvas: RID, pos: Vector2, outline_size: number /*i64*/ = 1, color: Color = new Color(1, 1, 1, 1)): void
        hit_test(coords: number /*f64*/): number /*i64*/
        direction: number /*i64*/
        orientation: number /*i64*/
        preserve_invalid: boolean
        preserve_control: boolean
        width: number /*f64*/
        alignment: number /*i64*/
        flags: number /*i64*/
        text_overrun_behavior: number /*i64*/
    }
    class TextMesh extends PrimitiveMesh {
        set_horizontal_alignment(alignment: HorizontalAlignment): void
        get_horizontal_alignment(): HorizontalAlignment
        set_vertical_alignment(alignment: VerticalAlignment): void
        get_vertical_alignment(): VerticalAlignment
        set_text(text: string): void
        get_text(): string
        set_font(font: Font): void
        get_font(): Font
        set_font_size(font_size: number /*i64*/): void
        get_font_size(): number /*i64*/
        set_line_spacing(line_spacing: number /*f64*/): void
        get_line_spacing(): number /*f64*/
        set_autowrap_mode(autowrap_mode: TextServer.AutowrapMode): void
        get_autowrap_mode(): TextServer.AutowrapMode
        set_justification_flags(justification_flags: TextServer.JustificationFlag): void
        get_justification_flags(): TextServer.JustificationFlag
        set_depth(depth: number /*f64*/): void
        get_depth(): number /*f64*/
        set_width(width: number /*f64*/): void
        get_width(): number /*f64*/
        set_pixel_size(pixel_size: number /*f64*/): void
        get_pixel_size(): number /*f64*/
        set_offset(offset: Vector2): void
        get_offset(): Vector2
        set_curve_step(curve_step: number /*f64*/): void
        get_curve_step(): number /*f64*/
        set_text_direction(direction: TextServer.Direction): void
        get_text_direction(): TextServer.Direction
        set_language(language: string): void
        get_language(): string
        set_structured_text_bidi_override(parser: TextServer.StructuredTextParser): void
        get_structured_text_bidi_override(): TextServer.StructuredTextParser
        set_structured_text_bidi_override_options(args: Array): void
        get_structured_text_bidi_override_options(): Array
        set_uppercase(enable: boolean): void
        is_uppercase(): boolean
        _font_changed(): void
        text: string
        font: Font
        font_size: number /*i64*/
        horizontal_alignment: number /*i64*/
        vertical_alignment: number /*i64*/
        uppercase: boolean
        line_spacing: number /*f64*/
        autowrap_mode: number /*i64*/
        justification_flags: number /*i64*/
        pixel_size: number /*f64*/
        curve_step: number /*f64*/
        depth: number /*f64*/
        width: number /*f64*/
        offset: Vector2
        text_direction: number /*i64*/
        language: string
        structured_text_bidi_override: number /*i64*/
        structured_text_bidi_override_options: Array
    }
    class TextParagraph extends RefCounted {
        clear(): void
        set_direction(direction: TextServer.Direction): void
        get_direction(): TextServer.Direction
        set_custom_punctuation(custom_punctuation: string): void
        get_custom_punctuation(): string
        set_orientation(orientation: TextServer.Orientation): void
        get_orientation(): TextServer.Orientation
        set_preserve_invalid(enabled: boolean): void
        get_preserve_invalid(): boolean
        set_preserve_control(enabled: boolean): void
        get_preserve_control(): boolean
        set_bidi_override(override: Array): void
        set_dropcap(text: string, font: Font, font_size: number /*i64*/, dropcap_margins: Rect2 = <any> {} /*compound.type from 7([object Object])*/, language: string = ''): boolean
        clear_dropcap(): void
        add_string(text: string, font: Font, font_size: number /*i64*/, language: string = '', meta: any = <any> {} /*compound.type from nil*/): boolean
        add_object(key: any, size: Vector2, inline_align: InlineAlignment = 5, length: number /*i64*/ = 1, baseline: number /*f64*/ = 0): boolean
        resize_object(key: any, size: Vector2, inline_align: InlineAlignment = 5, baseline: number /*f64*/ = 0): boolean
        set_alignment(alignment: HorizontalAlignment): void
        get_alignment(): HorizontalAlignment
        tab_align(tab_stops: PackedFloat32Array): void
        set_break_flags(flags: TextServer.LineBreakFlag): void
        get_break_flags(): TextServer.LineBreakFlag
        set_justification_flags(flags: TextServer.JustificationFlag): void
        get_justification_flags(): TextServer.JustificationFlag
        set_text_overrun_behavior(overrun_behavior: TextServer.OverrunBehavior): void
        get_text_overrun_behavior(): TextServer.OverrunBehavior
        set_width(width: number /*f64*/): void
        get_width(): number /*f64*/
        get_non_wrapped_size(): Vector2
        get_size(): Vector2
        get_rid(): RID
        get_line_rid(line: number /*i64*/): RID
        get_dropcap_rid(): RID
        get_line_count(): number /*i64*/
        set_max_lines_visible(max_lines_visible: number /*i64*/): void
        get_max_lines_visible(): number /*i64*/
        get_line_objects(line: number /*i64*/): Array
        get_line_object_rect(line: number /*i64*/, key: any): Rect2
        get_line_size(line: number /*i64*/): Vector2
        get_line_range(line: number /*i64*/): Vector2i
        get_line_ascent(line: number /*i64*/): number /*f64*/
        get_line_descent(line: number /*i64*/): number /*f64*/
        get_line_width(line: number /*i64*/): number /*f64*/
        get_line_underline_position(line: number /*i64*/): number /*f64*/
        get_line_underline_thickness(line: number /*i64*/): number /*f64*/
        get_dropcap_size(): Vector2
        get_dropcap_lines(): number /*i64*/
        draw(canvas: RID, pos: Vector2, color: Color = new Color(1, 1, 1, 1), dc_color: Color = new Color(1, 1, 1, 1)): void
        draw_outline(canvas: RID, pos: Vector2, outline_size: number /*i64*/ = 1, color: Color = new Color(1, 1, 1, 1), dc_color: Color = new Color(1, 1, 1, 1)): void
        draw_line(canvas: RID, pos: Vector2, line: number /*i64*/, color: Color = new Color(1, 1, 1, 1)): void
        draw_line_outline(canvas: RID, pos: Vector2, line: number /*i64*/, outline_size: number /*i64*/ = 1, color: Color = new Color(1, 1, 1, 1)): void
        draw_dropcap(canvas: RID, pos: Vector2, color: Color = new Color(1, 1, 1, 1)): void
        draw_dropcap_outline(canvas: RID, pos: Vector2, outline_size: number /*i64*/ = 1, color: Color = new Color(1, 1, 1, 1)): void
        hit_test(coords: Vector2): number /*i64*/
        direction: number /*i64*/
        custom_punctuation: string
        orientation: number /*i64*/
        preserve_invalid: boolean
        preserve_control: boolean
        alignment: number /*i64*/
        break_flags: number /*i64*/
        justification_flags: number /*i64*/
        text_overrun_behavior: number /*i64*/
        width: number /*f64*/
        max_lines_visible: number /*i64*/
    }
    namespace TextServer {
        enum FontAntialiasing {
            FONT_ANTIALIASING_NONE = 0,
            FONT_ANTIALIASING_GRAY = 1,
            FONT_ANTIALIASING_LCD = 2,
        }
        enum FontLCDSubpixelLayout {
            FONT_LCD_SUBPIXEL_LAYOUT_NONE = 0,
            FONT_LCD_SUBPIXEL_LAYOUT_HRGB = 1,
            FONT_LCD_SUBPIXEL_LAYOUT_HBGR = 2,
            FONT_LCD_SUBPIXEL_LAYOUT_VRGB = 3,
            FONT_LCD_SUBPIXEL_LAYOUT_VBGR = 4,
            FONT_LCD_SUBPIXEL_LAYOUT_MAX = 5,
        }
        enum Direction {
            DIRECTION_AUTO = 0,
            DIRECTION_LTR = 1,
            DIRECTION_RTL = 2,
            DIRECTION_INHERITED = 3,
        }
        enum Orientation {
            ORIENTATION_HORIZONTAL = 0,
            ORIENTATION_VERTICAL = 1,
        }
        enum JustificationFlag {
            JUSTIFICATION_NONE = 0,
            JUSTIFICATION_KASHIDA = 1,
            JUSTIFICATION_WORD_BOUND = 2,
            JUSTIFICATION_TRIM_EDGE_SPACES = 4,
            JUSTIFICATION_AFTER_LAST_TAB = 8,
            JUSTIFICATION_CONSTRAIN_ELLIPSIS = 16,
            JUSTIFICATION_SKIP_LAST_LINE = 32,
            JUSTIFICATION_SKIP_LAST_LINE_WITH_VISIBLE_CHARS = 64,
            JUSTIFICATION_DO_NOT_SKIP_SINGLE_LINE = 128,
        }
        enum AutowrapMode {
            AUTOWRAP_OFF = 0,
            AUTOWRAP_ARBITRARY = 1,
            AUTOWRAP_WORD = 2,
            AUTOWRAP_WORD_SMART = 3,
        }
        enum LineBreakFlag {
            BREAK_NONE = 0,
            BREAK_MANDATORY = 1,
            BREAK_WORD_BOUND = 2,
            BREAK_GRAPHEME_BOUND = 4,
            BREAK_ADAPTIVE = 8,
            BREAK_TRIM_EDGE_SPACES = 16,
        }
        enum VisibleCharactersBehavior {
            VC_CHARS_BEFORE_SHAPING = 0,
            VC_CHARS_AFTER_SHAPING = 1,
            VC_GLYPHS_AUTO = 2,
            VC_GLYPHS_LTR = 3,
            VC_GLYPHS_RTL = 4,
        }
        enum OverrunBehavior {
            OVERRUN_NO_TRIMMING = 0,
            OVERRUN_TRIM_CHAR = 1,
            OVERRUN_TRIM_WORD = 2,
            OVERRUN_TRIM_ELLIPSIS = 3,
            OVERRUN_TRIM_WORD_ELLIPSIS = 4,
        }
        enum TextOverrunFlag {
            OVERRUN_NO_TRIM = 0,
            OVERRUN_TRIM = 1,
            OVERRUN_TRIM_WORD_ONLY = 2,
            OVERRUN_ADD_ELLIPSIS = 4,
            OVERRUN_ENFORCE_ELLIPSIS = 8,
            OVERRUN_JUSTIFICATION_AWARE = 16,
        }
        enum GraphemeFlag {
            GRAPHEME_IS_VALID = 1,
            GRAPHEME_IS_RTL = 2,
            GRAPHEME_IS_VIRTUAL = 4,
            GRAPHEME_IS_SPACE = 8,
            GRAPHEME_IS_BREAK_HARD = 16,
            GRAPHEME_IS_BREAK_SOFT = 32,
            GRAPHEME_IS_TAB = 64,
            GRAPHEME_IS_ELONGATION = 128,
            GRAPHEME_IS_PUNCTUATION = 256,
            GRAPHEME_IS_UNDERSCORE = 512,
            GRAPHEME_IS_CONNECTED = 1024,
            GRAPHEME_IS_SAFE_TO_INSERT_TATWEEL = 2048,
            GRAPHEME_IS_EMBEDDED_OBJECT = 4096,
        }
        enum Hinting {
            HINTING_NONE = 0,
            HINTING_LIGHT = 1,
            HINTING_NORMAL = 2,
        }
        enum SubpixelPositioning {
            SUBPIXEL_POSITIONING_DISABLED = 0,
            SUBPIXEL_POSITIONING_AUTO = 1,
            SUBPIXEL_POSITIONING_ONE_HALF = 2,
            SUBPIXEL_POSITIONING_ONE_QUARTER = 3,
            SUBPIXEL_POSITIONING_ONE_HALF_MAX_SIZE = 20,
            SUBPIXEL_POSITIONING_ONE_QUARTER_MAX_SIZE = 16,
        }
        enum Feature {
            FEATURE_SIMPLE_LAYOUT = 1,
            FEATURE_BIDI_LAYOUT = 2,
            FEATURE_VERTICAL_LAYOUT = 4,
            FEATURE_SHAPING = 8,
            FEATURE_KASHIDA_JUSTIFICATION = 16,
            FEATURE_BREAK_ITERATORS = 32,
            FEATURE_FONT_BITMAP = 64,
            FEATURE_FONT_DYNAMIC = 128,
            FEATURE_FONT_MSDF = 256,
            FEATURE_FONT_SYSTEM = 512,
            FEATURE_FONT_VARIABLE = 1024,
            FEATURE_CONTEXT_SENSITIVE_CASE_CONVERSION = 2048,
            FEATURE_USE_SUPPORT_DATA = 4096,
            FEATURE_UNICODE_IDENTIFIERS = 8192,
            FEATURE_UNICODE_SECURITY = 16384,
        }
        enum ContourPointTag {
            CONTOUR_CURVE_TAG_ON = 1,
            CONTOUR_CURVE_TAG_OFF_CONIC = 0,
            CONTOUR_CURVE_TAG_OFF_CUBIC = 2,
        }
        enum SpacingType {
            SPACING_GLYPH = 0,
            SPACING_SPACE = 1,
            SPACING_TOP = 2,
            SPACING_BOTTOM = 3,
            SPACING_MAX = 4,
        }
        enum FontStyle {
            FONT_BOLD = 1,
            FONT_ITALIC = 2,
            FONT_FIXED_WIDTH = 4,
        }
        enum StructuredTextParser {
            STRUCTURED_TEXT_DEFAULT = 0,
            STRUCTURED_TEXT_URI = 1,
            STRUCTURED_TEXT_FILE = 2,
            STRUCTURED_TEXT_EMAIL = 3,
            STRUCTURED_TEXT_LIST = 4,
            STRUCTURED_TEXT_GDSCRIPT = 5,
            STRUCTURED_TEXT_CUSTOM = 6,
        }
        enum FixedSizeScaleMode {
            FIXED_SIZE_SCALE_DISABLE = 0,
            FIXED_SIZE_SCALE_INTEGER_ONLY = 1,
            FIXED_SIZE_SCALE_ENABLED = 2,
        }
    }
    class TextServer extends RefCounted {
        has_feature(feature: TextServer.Feature): boolean
        get_name(): string
        get_features(): number /*i64*/
        load_support_data(filename: string): boolean
        get_support_data_filename(): string
        get_support_data_info(): string
        save_support_data(filename: string): boolean
        is_locale_right_to_left(locale: string): boolean
        name_to_tag(name: string): number /*i64*/
        tag_to_name(tag: number /*i64*/): string
        has(rid: RID): boolean
        free_rid(rid: RID): void
        create_font(): RID
        create_font_linked_variation(font_rid: RID): RID
        font_set_data(font_rid: RID, data: PackedByteArray): void
        font_set_face_index(font_rid: RID, face_index: number /*i64*/): void
        font_get_face_index(font_rid: RID): number /*i64*/
        font_get_face_count(font_rid: RID): number /*i64*/
        font_set_style(font_rid: RID, style: TextServer.FontStyle): void
        font_get_style(font_rid: RID): TextServer.FontStyle
        font_set_name(font_rid: RID, name: string): void
        font_get_name(font_rid: RID): string
        font_get_ot_name_strings(font_rid: RID): Dictionary
        font_set_style_name(font_rid: RID, name: string): void
        font_get_style_name(font_rid: RID): string
        font_set_weight(font_rid: RID, weight: number /*i64*/): void
        font_get_weight(font_rid: RID): number /*i64*/
        font_set_stretch(font_rid: RID, weight: number /*i64*/): void
        font_get_stretch(font_rid: RID): number /*i64*/
        font_set_antialiasing(font_rid: RID, antialiasing: TextServer.FontAntialiasing): void
        font_get_antialiasing(font_rid: RID): TextServer.FontAntialiasing
        font_set_generate_mipmaps(font_rid: RID, generate_mipmaps: boolean): void
        font_get_generate_mipmaps(font_rid: RID): boolean
        font_set_multichannel_signed_distance_field(font_rid: RID, msdf: boolean): void
        font_is_multichannel_signed_distance_field(font_rid: RID): boolean
        font_set_msdf_pixel_range(font_rid: RID, msdf_pixel_range: number /*i64*/): void
        font_get_msdf_pixel_range(font_rid: RID): number /*i64*/
        font_set_msdf_size(font_rid: RID, msdf_size: number /*i64*/): void
        font_get_msdf_size(font_rid: RID): number /*i64*/
        font_set_fixed_size(font_rid: RID, fixed_size: number /*i64*/): void
        font_get_fixed_size(font_rid: RID): number /*i64*/
        font_set_fixed_size_scale_mode(font_rid: RID, fixed_size_scale_mode: TextServer.FixedSizeScaleMode): void
        font_get_fixed_size_scale_mode(font_rid: RID): TextServer.FixedSizeScaleMode
        font_set_allow_system_fallback(font_rid: RID, allow_system_fallback: boolean): void
        font_is_allow_system_fallback(font_rid: RID): boolean
        font_set_force_autohinter(font_rid: RID, force_autohinter: boolean): void
        font_is_force_autohinter(font_rid: RID): boolean
        font_set_hinting(font_rid: RID, hinting: TextServer.Hinting): void
        font_get_hinting(font_rid: RID): TextServer.Hinting
        font_set_subpixel_positioning(font_rid: RID, subpixel_positioning: TextServer.SubpixelPositioning): void
        font_get_subpixel_positioning(font_rid: RID): TextServer.SubpixelPositioning
        font_set_embolden(font_rid: RID, strength: number /*f64*/): void
        font_get_embolden(font_rid: RID): number /*f64*/
        font_set_spacing(font_rid: RID, spacing: TextServer.SpacingType, value: number /*i64*/): void
        font_get_spacing(font_rid: RID, spacing: TextServer.SpacingType): number /*i64*/
        font_set_transform(font_rid: RID, transform: Transform2D): void
        font_get_transform(font_rid: RID): Transform2D
        font_set_variation_coordinates(font_rid: RID, variation_coordinates: Dictionary): void
        font_get_variation_coordinates(font_rid: RID): Dictionary
        font_set_oversampling(font_rid: RID, oversampling: number /*f64*/): void
        font_get_oversampling(font_rid: RID): number /*f64*/
        font_get_size_cache_list(font_rid: RID): Array
        font_clear_size_cache(font_rid: RID): void
        font_remove_size_cache(font_rid: RID, size: Vector2i): void
        font_set_ascent(font_rid: RID, size: number /*i64*/, ascent: number /*f64*/): void
        font_get_ascent(font_rid: RID, size: number /*i64*/): number /*f64*/
        font_set_descent(font_rid: RID, size: number /*i64*/, descent: number /*f64*/): void
        font_get_descent(font_rid: RID, size: number /*i64*/): number /*f64*/
        font_set_underline_position(font_rid: RID, size: number /*i64*/, underline_position: number /*f64*/): void
        font_get_underline_position(font_rid: RID, size: number /*i64*/): number /*f64*/
        font_set_underline_thickness(font_rid: RID, size: number /*i64*/, underline_thickness: number /*f64*/): void
        font_get_underline_thickness(font_rid: RID, size: number /*i64*/): number /*f64*/
        font_set_scale(font_rid: RID, size: number /*i64*/, scale: number /*f64*/): void
        font_get_scale(font_rid: RID, size: number /*i64*/): number /*f64*/
        font_get_texture_count(font_rid: RID, size: Vector2i): number /*i64*/
        font_clear_textures(font_rid: RID, size: Vector2i): void
        font_remove_texture(font_rid: RID, size: Vector2i, texture_index: number /*i64*/): void
        font_set_texture_image(font_rid: RID, size: Vector2i, texture_index: number /*i64*/, image: Image): void
        font_get_texture_image(font_rid: RID, size: Vector2i, texture_index: number /*i64*/): Image
        font_set_texture_offsets(font_rid: RID, size: Vector2i, texture_index: number /*i64*/, offset: PackedInt32Array): void
        font_get_texture_offsets(font_rid: RID, size: Vector2i, texture_index: number /*i64*/): PackedInt32Array
        font_get_glyph_list(font_rid: RID, size: Vector2i): PackedInt32Array
        font_clear_glyphs(font_rid: RID, size: Vector2i): void
        font_remove_glyph(font_rid: RID, size: Vector2i, glyph: number /*i64*/): void
        font_get_glyph_advance(font_rid: RID, size: number /*i64*/, glyph: number /*i64*/): Vector2
        font_set_glyph_advance(font_rid: RID, size: number /*i64*/, glyph: number /*i64*/, advance: Vector2): void
        font_get_glyph_offset(font_rid: RID, size: Vector2i, glyph: number /*i64*/): Vector2
        font_set_glyph_offset(font_rid: RID, size: Vector2i, glyph: number /*i64*/, offset: Vector2): void
        font_get_glyph_size(font_rid: RID, size: Vector2i, glyph: number /*i64*/): Vector2
        font_set_glyph_size(font_rid: RID, size: Vector2i, glyph: number /*i64*/, gl_size: Vector2): void
        font_get_glyph_uv_rect(font_rid: RID, size: Vector2i, glyph: number /*i64*/): Rect2
        font_set_glyph_uv_rect(font_rid: RID, size: Vector2i, glyph: number /*i64*/, uv_rect: Rect2): void
        font_get_glyph_texture_idx(font_rid: RID, size: Vector2i, glyph: number /*i64*/): number /*i64*/
        font_set_glyph_texture_idx(font_rid: RID, size: Vector2i, glyph: number /*i64*/, texture_idx: number /*i64*/): void
        font_get_glyph_texture_rid(font_rid: RID, size: Vector2i, glyph: number /*i64*/): RID
        font_get_glyph_texture_size(font_rid: RID, size: Vector2i, glyph: number /*i64*/): Vector2
        font_get_glyph_contours(font: RID, size: number /*i64*/, index: number /*i64*/): Dictionary
        font_get_kerning_list(font_rid: RID, size: number /*i64*/): Array
        font_clear_kerning_map(font_rid: RID, size: number /*i64*/): void
        font_remove_kerning(font_rid: RID, size: number /*i64*/, glyph_pair: Vector2i): void
        font_set_kerning(font_rid: RID, size: number /*i64*/, glyph_pair: Vector2i, kerning: Vector2): void
        font_get_kerning(font_rid: RID, size: number /*i64*/, glyph_pair: Vector2i): Vector2
        font_get_glyph_index(font_rid: RID, size: number /*i64*/, char: number /*i64*/, variation_selector: number /*i64*/): number /*i64*/
        font_get_char_from_glyph_index(font_rid: RID, size: number /*i64*/, glyph_index: number /*i64*/): number /*i64*/
        font_has_char(font_rid: RID, char: number /*i64*/): boolean
        font_get_supported_chars(font_rid: RID): string
        font_render_range(font_rid: RID, size: Vector2i, start: number /*i64*/, end: number /*i64*/): void
        font_render_glyph(font_rid: RID, size: Vector2i, index: number /*i64*/): void
        font_draw_glyph(font_rid: RID, canvas: RID, size: number /*i64*/, pos: Vector2, index: number /*i64*/, color: Color = new Color(1, 1, 1, 1)): void
        font_draw_glyph_outline(font_rid: RID, canvas: RID, size: number /*i64*/, outline_size: number /*i64*/, pos: Vector2, index: number /*i64*/, color: Color = new Color(1, 1, 1, 1)): void
        font_is_language_supported(font_rid: RID, language: string): boolean
        font_set_language_support_override(font_rid: RID, language: string, supported: boolean): void
        font_get_language_support_override(font_rid: RID, language: string): boolean
        font_remove_language_support_override(font_rid: RID, language: string): void
        font_get_language_support_overrides(font_rid: RID): PackedStringArray
        font_is_script_supported(font_rid: RID, script: string): boolean
        font_set_script_support_override(font_rid: RID, script: string, supported: boolean): void
        font_get_script_support_override(font_rid: RID, script: string): boolean
        font_remove_script_support_override(font_rid: RID, script: string): void
        font_get_script_support_overrides(font_rid: RID): PackedStringArray
        font_set_opentype_feature_overrides(font_rid: RID, overrides: Dictionary): void
        font_get_opentype_feature_overrides(font_rid: RID): Dictionary
        font_supported_feature_list(font_rid: RID): Dictionary
        font_supported_variation_list(font_rid: RID): Dictionary
        font_get_global_oversampling(): number /*f64*/
        font_set_global_oversampling(oversampling: number /*f64*/): void
        get_hex_code_box_size(size: number /*i64*/, index: number /*i64*/): Vector2
        draw_hex_code_box(canvas: RID, size: number /*i64*/, pos: Vector2, index: number /*i64*/, color: Color): void
        create_shaped_text(direction: TextServer.Direction = 0, orientation: TextServer.Orientation = 0): RID
        shaped_text_clear(rid: RID): void
        shaped_text_set_direction(shaped: RID, direction: TextServer.Direction = 0): void
        shaped_text_get_direction(shaped: RID): TextServer.Direction
        shaped_text_get_inferred_direction(shaped: RID): TextServer.Direction
        shaped_text_set_bidi_override(shaped: RID, override: Array): void
        shaped_text_set_custom_punctuation(shaped: RID, punct: string): void
        shaped_text_get_custom_punctuation(shaped: RID): string
        shaped_text_set_orientation(shaped: RID, orientation: TextServer.Orientation = 0): void
        shaped_text_get_orientation(shaped: RID): TextServer.Orientation
        shaped_text_set_preserve_invalid(shaped: RID, enabled: boolean): void
        shaped_text_get_preserve_invalid(shaped: RID): boolean
        shaped_text_set_preserve_control(shaped: RID, enabled: boolean): void
        shaped_text_get_preserve_control(shaped: RID): boolean
        shaped_text_set_spacing(shaped: RID, spacing: TextServer.SpacingType, value: number /*i64*/): void
        shaped_text_get_spacing(shaped: RID, spacing: TextServer.SpacingType): number /*i64*/
        shaped_text_add_string(shaped: RID, text: string, fonts: Array, size: number /*i64*/, opentype_features: Dictionary = <any> {} /*compound.type from 27([object Object])*/, language: string = '', meta: any = <any> {} /*compound.type from nil*/): boolean
        shaped_text_add_object(shaped: RID, key: any, size: Vector2, inline_align: InlineAlignment = 5, length: number /*i64*/ = 1, baseline: number /*f64*/ = 0): boolean
        shaped_text_resize_object(shaped: RID, key: any, size: Vector2, inline_align: InlineAlignment = 5, baseline: number /*f64*/ = 0): boolean
        shaped_get_span_count(shaped: RID): number /*i64*/
        shaped_get_span_meta(shaped: RID, index: number /*i64*/): any
        shaped_set_span_update_font(shaped: RID, index: number /*i64*/, fonts: Array, size: number /*i64*/, opentype_features: Dictionary = <any> {} /*compound.type from 27([object Object])*/): void
        shaped_text_substr(shaped: RID, start: number /*i64*/, length: number /*i64*/): RID
        shaped_text_get_parent(shaped: RID): RID
        shaped_text_fit_to_width(shaped: RID, width: number /*f64*/, justification_flags: TextServer.JustificationFlag = 3): number /*f64*/
        shaped_text_tab_align(shaped: RID, tab_stops: PackedFloat32Array): number /*f64*/
        shaped_text_shape(shaped: RID): boolean
        shaped_text_is_ready(shaped: RID): boolean
        shaped_text_has_visible_chars(shaped: RID): boolean
        shaped_text_get_glyphs(shaped: RID): Array
        shaped_text_sort_logical(shaped: RID): Array
        shaped_text_get_glyph_count(shaped: RID): number /*i64*/
        shaped_text_get_range(shaped: RID): Vector2i
        shaped_text_get_line_breaks_adv(shaped: RID, width: PackedFloat32Array, start: number /*i64*/ = 0, once: boolean = true, break_flags: TextServer.LineBreakFlag = 3): PackedInt32Array
        shaped_text_get_line_breaks(shaped: RID, width: number /*f64*/, start: number /*i64*/ = 0, break_flags: TextServer.LineBreakFlag = 3): PackedInt32Array
        shaped_text_get_word_breaks(shaped: RID, grapheme_flags: TextServer.GraphemeFlag = 264): PackedInt32Array
        shaped_text_get_trim_pos(shaped: RID): number /*i64*/
        shaped_text_get_ellipsis_pos(shaped: RID): number /*i64*/
        shaped_text_get_ellipsis_glyphs(shaped: RID): Array
        shaped_text_get_ellipsis_glyph_count(shaped: RID): number /*i64*/
        shaped_text_overrun_trim_to_width(shaped: RID, width: number /*f64*/ = 0, overrun_trim_flags: TextServer.TextOverrunFlag = 0): void
        shaped_text_get_objects(shaped: RID): Array
        shaped_text_get_object_rect(shaped: RID, key: any): Rect2
        shaped_text_get_size(shaped: RID): Vector2
        shaped_text_get_ascent(shaped: RID): number /*f64*/
        shaped_text_get_descent(shaped: RID): number /*f64*/
        shaped_text_get_width(shaped: RID): number /*f64*/
        shaped_text_get_underline_position(shaped: RID): number /*f64*/
        shaped_text_get_underline_thickness(shaped: RID): number /*f64*/
        shaped_text_get_carets(shaped: RID, position: number /*i64*/): Dictionary
        shaped_text_get_selection(shaped: RID, start: number /*i64*/, end: number /*i64*/): PackedVector2Array
        shaped_text_hit_test_grapheme(shaped: RID, coords: number /*f64*/): number /*i64*/
        shaped_text_hit_test_position(shaped: RID, coords: number /*f64*/): number /*i64*/
        shaped_text_get_grapheme_bounds(shaped: RID, pos: number /*i64*/): Vector2
        shaped_text_next_grapheme_pos(shaped: RID, pos: number /*i64*/): number /*i64*/
        shaped_text_prev_grapheme_pos(shaped: RID, pos: number /*i64*/): number /*i64*/
        shaped_text_get_character_breaks(shaped: RID): PackedInt32Array
        shaped_text_next_character_pos(shaped: RID, pos: number /*i64*/): number /*i64*/
        shaped_text_prev_character_pos(shaped: RID, pos: number /*i64*/): number /*i64*/
        shaped_text_closest_character_pos(shaped: RID, pos: number /*i64*/): number /*i64*/
        shaped_text_draw(shaped: RID, canvas: RID, pos: Vector2, clip_l: number /*f64*/ = -1, clip_r: number /*f64*/ = -1, color: Color = new Color(1, 1, 1, 1)): void
        shaped_text_draw_outline(shaped: RID, canvas: RID, pos: Vector2, clip_l: number /*f64*/ = -1, clip_r: number /*f64*/ = -1, outline_size: number /*i64*/ = 1, color: Color = new Color(1, 1, 1, 1)): void
        shaped_text_get_dominant_direction_in_range(shaped: RID, start: number /*i64*/, end: number /*i64*/): TextServer.Direction
        format_number(number: string, language: string = ''): string
        parse_number(number: string, language: string = ''): string
        percent_sign(language: string = ''): string
        string_get_word_breaks(string_: string, language: string = '', chars_per_line: number /*i64*/ = 0): PackedInt32Array
        string_get_character_breaks(string_: string, language: string = ''): PackedInt32Array
        is_confusable(string_: string, dict: PackedStringArray): number /*i64*/
        spoof_check(string_: string): boolean
        strip_diacritics(string_: string): string
        is_valid_identifier(string_: string): boolean
        string_to_upper(string_: string, language: string = ''): string
        string_to_lower(string_: string, language: string = ''): string
        parse_structured_text(parser_type: TextServer.StructuredTextParser, args: Array, text: string): Array
    }
    class TextServerAdvanced extends TextServerExtension {
    }
    class TextServerDummy extends TextServerExtension {
    }
    class TextServerExtension extends TextServer {
        /* gdvirtual */ _has_feature(feature: TextServer.Feature): boolean
        /* gdvirtual */ _get_name(): string
        /* gdvirtual */ _get_features(): number /*i64*/
        /* gdvirtual */ _free_rid(rid: RID): void
        /* gdvirtual */ _has(rid: RID): boolean
        /* gdvirtual */ _load_support_data(filename: string): boolean
        /* gdvirtual */ _get_support_data_filename(): string
        /* gdvirtual */ _get_support_data_info(): string
        /* gdvirtual */ _save_support_data(filename: string): boolean
        /* gdvirtual */ _is_locale_right_to_left(locale: string): boolean
        /* gdvirtual */ _name_to_tag(name: string): number /*i64*/
        /* gdvirtual */ _tag_to_name(tag: number /*i64*/): string
        /* gdvirtual */ _create_font(): RID
        /* gdvirtual */ _create_font_linked_variation(font_rid: RID): RID
        /* gdvirtual */ _font_set_data(font_rid: RID, data: PackedByteArray): void
        /* gdvirtual */ _font_set_data_ptr(font_rid: RID, data_ptr: number /*i64*/, data_size: number /*i64*/): void
        /* gdvirtual */ _font_set_face_index(font_rid: RID, face_index: number /*i64*/): void
        /* gdvirtual */ _font_get_face_index(font_rid: RID): number /*i64*/
        /* gdvirtual */ _font_get_face_count(font_rid: RID): number /*i64*/
        /* gdvirtual */ _font_set_style(font_rid: RID, style: TextServer.FontStyle): void
        /* gdvirtual */ _font_get_style(font_rid: RID): TextServer.FontStyle
        /* gdvirtual */ _font_set_name(font_rid: RID, name: string): void
        /* gdvirtual */ _font_get_name(font_rid: RID): string
        /* gdvirtual */ _font_get_ot_name_strings(font_rid: RID): Dictionary
        /* gdvirtual */ _font_set_style_name(font_rid: RID, name_style: string): void
        /* gdvirtual */ _font_get_style_name(font_rid: RID): string
        /* gdvirtual */ _font_set_weight(font_rid: RID, weight: number /*i64*/): void
        /* gdvirtual */ _font_get_weight(font_rid: RID): number /*i64*/
        /* gdvirtual */ _font_set_stretch(font_rid: RID, stretch: number /*i64*/): void
        /* gdvirtual */ _font_get_stretch(font_rid: RID): number /*i64*/
        /* gdvirtual */ _font_set_antialiasing(font_rid: RID, antialiasing: TextServer.FontAntialiasing): void
        /* gdvirtual */ _font_get_antialiasing(font_rid: RID): TextServer.FontAntialiasing
        /* gdvirtual */ _font_set_generate_mipmaps(font_rid: RID, generate_mipmaps: boolean): void
        /* gdvirtual */ _font_get_generate_mipmaps(font_rid: RID): boolean
        /* gdvirtual */ _font_set_multichannel_signed_distance_field(font_rid: RID, msdf: boolean): void
        /* gdvirtual */ _font_is_multichannel_signed_distance_field(font_rid: RID): boolean
        /* gdvirtual */ _font_set_msdf_pixel_range(font_rid: RID, msdf_pixel_range: number /*i64*/): void
        /* gdvirtual */ _font_get_msdf_pixel_range(font_rid: RID): number /*i64*/
        /* gdvirtual */ _font_set_msdf_size(font_rid: RID, msdf_size: number /*i64*/): void
        /* gdvirtual */ _font_get_msdf_size(font_rid: RID): number /*i64*/
        /* gdvirtual */ _font_set_fixed_size(font_rid: RID, fixed_size: number /*i64*/): void
        /* gdvirtual */ _font_get_fixed_size(font_rid: RID): number /*i64*/
        /* gdvirtual */ _font_set_fixed_size_scale_mode(font_rid: RID, fixed_size_scale_mode: TextServer.FixedSizeScaleMode): void
        /* gdvirtual */ _font_get_fixed_size_scale_mode(font_rid: RID): TextServer.FixedSizeScaleMode
        /* gdvirtual */ _font_set_allow_system_fallback(font_rid: RID, allow_system_fallback: boolean): void
        /* gdvirtual */ _font_is_allow_system_fallback(font_rid: RID): boolean
        /* gdvirtual */ _font_set_force_autohinter(font_rid: RID, force_autohinter: boolean): void
        /* gdvirtual */ _font_is_force_autohinter(font_rid: RID): boolean
        /* gdvirtual */ _font_set_hinting(font_rid: RID, hinting: TextServer.Hinting): void
        /* gdvirtual */ _font_get_hinting(font_rid: RID): TextServer.Hinting
        /* gdvirtual */ _font_set_subpixel_positioning(font_rid: RID, subpixel_positioning: TextServer.SubpixelPositioning): void
        /* gdvirtual */ _font_get_subpixel_positioning(font_rid: RID): TextServer.SubpixelPositioning
        /* gdvirtual */ _font_set_embolden(font_rid: RID, strength: number /*f64*/): void
        /* gdvirtual */ _font_get_embolden(font_rid: RID): number /*f64*/
        /* gdvirtual */ _font_set_spacing(font_rid: RID, spacing: TextServer.SpacingType, value: number /*i64*/): void
        /* gdvirtual */ _font_get_spacing(font_rid: RID, spacing: TextServer.SpacingType): number /*i64*/
        /* gdvirtual */ _font_set_transform(font_rid: RID, transform: Transform2D): void
        /* gdvirtual */ _font_get_transform(font_rid: RID): Transform2D
        /* gdvirtual */ _font_set_variation_coordinates(font_rid: RID, variation_coordinates: Dictionary): void
        /* gdvirtual */ _font_get_variation_coordinates(font_rid: RID): Dictionary
        /* gdvirtual */ _font_set_oversampling(font_rid: RID, oversampling: number /*f64*/): void
        /* gdvirtual */ _font_get_oversampling(font_rid: RID): number /*f64*/
        /* gdvirtual */ _font_get_size_cache_list(font_rid: RID): Array
        /* gdvirtual */ _font_clear_size_cache(font_rid: RID): void
        /* gdvirtual */ _font_remove_size_cache(font_rid: RID, size: Vector2i): void
        /* gdvirtual */ _font_set_ascent(font_rid: RID, size: number /*i64*/, ascent: number /*f64*/): void
        /* gdvirtual */ _font_get_ascent(font_rid: RID, size: number /*i64*/): number /*f64*/
        /* gdvirtual */ _font_set_descent(font_rid: RID, size: number /*i64*/, descent: number /*f64*/): void
        /* gdvirtual */ _font_get_descent(font_rid: RID, size: number /*i64*/): number /*f64*/
        /* gdvirtual */ _font_set_underline_position(font_rid: RID, size: number /*i64*/, underline_position: number /*f64*/): void
        /* gdvirtual */ _font_get_underline_position(font_rid: RID, size: number /*i64*/): number /*f64*/
        /* gdvirtual */ _font_set_underline_thickness(font_rid: RID, size: number /*i64*/, underline_thickness: number /*f64*/): void
        /* gdvirtual */ _font_get_underline_thickness(font_rid: RID, size: number /*i64*/): number /*f64*/
        /* gdvirtual */ _font_set_scale(font_rid: RID, size: number /*i64*/, scale: number /*f64*/): void
        /* gdvirtual */ _font_get_scale(font_rid: RID, size: number /*i64*/): number /*f64*/
        /* gdvirtual */ _font_get_texture_count(font_rid: RID, size: Vector2i): number /*i64*/
        /* gdvirtual */ _font_clear_textures(font_rid: RID, size: Vector2i): void
        /* gdvirtual */ _font_remove_texture(font_rid: RID, size: Vector2i, texture_index: number /*i64*/): void
        /* gdvirtual */ _font_set_texture_image(font_rid: RID, size: Vector2i, texture_index: number /*i64*/, image: Image): void
        /* gdvirtual */ _font_get_texture_image(font_rid: RID, size: Vector2i, texture_index: number /*i64*/): Image
        /* gdvirtual */ _font_set_texture_offsets(font_rid: RID, size: Vector2i, texture_index: number /*i64*/, offset: PackedInt32Array): void
        /* gdvirtual */ _font_get_texture_offsets(font_rid: RID, size: Vector2i, texture_index: number /*i64*/): PackedInt32Array
        /* gdvirtual */ _font_get_glyph_list(font_rid: RID, size: Vector2i): PackedInt32Array
        /* gdvirtual */ _font_clear_glyphs(font_rid: RID, size: Vector2i): void
        /* gdvirtual */ _font_remove_glyph(font_rid: RID, size: Vector2i, glyph: number /*i64*/): void
        /* gdvirtual */ _font_get_glyph_advance(font_rid: RID, size: number /*i64*/, glyph: number /*i64*/): Vector2
        /* gdvirtual */ _font_set_glyph_advance(font_rid: RID, size: number /*i64*/, glyph: number /*i64*/, advance: Vector2): void
        /* gdvirtual */ _font_get_glyph_offset(font_rid: RID, size: Vector2i, glyph: number /*i64*/): Vector2
        /* gdvirtual */ _font_set_glyph_offset(font_rid: RID, size: Vector2i, glyph: number /*i64*/, offset: Vector2): void
        /* gdvirtual */ _font_get_glyph_size(font_rid: RID, size: Vector2i, glyph: number /*i64*/): Vector2
        /* gdvirtual */ _font_set_glyph_size(font_rid: RID, size: Vector2i, glyph: number /*i64*/, gl_size: Vector2): void
        /* gdvirtual */ _font_get_glyph_uv_rect(font_rid: RID, size: Vector2i, glyph: number /*i64*/): Rect2
        /* gdvirtual */ _font_set_glyph_uv_rect(font_rid: RID, size: Vector2i, glyph: number /*i64*/, uv_rect: Rect2): void
        /* gdvirtual */ _font_get_glyph_texture_idx(font_rid: RID, size: Vector2i, glyph: number /*i64*/): number /*i64*/
        /* gdvirtual */ _font_set_glyph_texture_idx(font_rid: RID, size: Vector2i, glyph: number /*i64*/, texture_idx: number /*i64*/): void
        /* gdvirtual */ _font_get_glyph_texture_rid(font_rid: RID, size: Vector2i, glyph: number /*i64*/): RID
        /* gdvirtual */ _font_get_glyph_texture_size(font_rid: RID, size: Vector2i, glyph: number /*i64*/): Vector2
        /* gdvirtual */ _font_get_glyph_contours(font_rid: RID, size: number /*i64*/, index: number /*i64*/): Dictionary
        /* gdvirtual */ _font_get_kerning_list(font_rid: RID, size: number /*i64*/): Array
        /* gdvirtual */ _font_clear_kerning_map(font_rid: RID, size: number /*i64*/): void
        /* gdvirtual */ _font_remove_kerning(font_rid: RID, size: number /*i64*/, glyph_pair: Vector2i): void
        /* gdvirtual */ _font_set_kerning(font_rid: RID, size: number /*i64*/, glyph_pair: Vector2i, kerning: Vector2): void
        /* gdvirtual */ _font_get_kerning(font_rid: RID, size: number /*i64*/, glyph_pair: Vector2i): Vector2
        /* gdvirtual */ _font_get_glyph_index(font_rid: RID, size: number /*i64*/, char: number /*i64*/, variation_selector: number /*i64*/): number /*i64*/
        /* gdvirtual */ _font_get_char_from_glyph_index(font_rid: RID, size: number /*i64*/, glyph_index: number /*i64*/): number /*i64*/
        /* gdvirtual */ _font_has_char(font_rid: RID, char: number /*i64*/): boolean
        /* gdvirtual */ _font_get_supported_chars(font_rid: RID): string
        /* gdvirtual */ _font_render_range(font_rid: RID, size: Vector2i, start: number /*i64*/, end: number /*i64*/): void
        /* gdvirtual */ _font_render_glyph(font_rid: RID, size: Vector2i, index: number /*i64*/): void
        /* gdvirtual */ _font_draw_glyph(font_rid: RID, canvas: RID, size: number /*i64*/, pos: Vector2, index: number /*i64*/, color: Color): void
        /* gdvirtual */ _font_draw_glyph_outline(font_rid: RID, canvas: RID, size: number /*i64*/, outline_size: number /*i64*/, pos: Vector2, index: number /*i64*/, color: Color): void
        /* gdvirtual */ _font_is_language_supported(font_rid: RID, language: string): boolean
        /* gdvirtual */ _font_set_language_support_override(font_rid: RID, language: string, supported: boolean): void
        /* gdvirtual */ _font_get_language_support_override(font_rid: RID, language: string): boolean
        /* gdvirtual */ _font_remove_language_support_override(font_rid: RID, language: string): void
        /* gdvirtual */ _font_get_language_support_overrides(font_rid: RID): PackedStringArray
        /* gdvirtual */ _font_is_script_supported(font_rid: RID, script: string): boolean
        /* gdvirtual */ _font_set_script_support_override(font_rid: RID, script: string, supported: boolean): void
        /* gdvirtual */ _font_get_script_support_override(font_rid: RID, script: string): boolean
        /* gdvirtual */ _font_remove_script_support_override(font_rid: RID, script: string): void
        /* gdvirtual */ _font_get_script_support_overrides(font_rid: RID): PackedStringArray
        /* gdvirtual */ _font_set_opentype_feature_overrides(font_rid: RID, overrides: Dictionary): void
        /* gdvirtual */ _font_get_opentype_feature_overrides(font_rid: RID): Dictionary
        /* gdvirtual */ _font_supported_feature_list(font_rid: RID): Dictionary
        /* gdvirtual */ _font_supported_variation_list(font_rid: RID): Dictionary
        /* gdvirtual */ _font_get_global_oversampling(): number /*f64*/
        /* gdvirtual */ _font_set_global_oversampling(oversampling: number /*f64*/): void
        /* gdvirtual */ _get_hex_code_box_size(size: number /*i64*/, index: number /*i64*/): Vector2
        /* gdvirtual */ _draw_hex_code_box(canvas: RID, size: number /*i64*/, pos: Vector2, index: number /*i64*/, color: Color): void
        /* gdvirtual */ _create_shaped_text(direction: TextServer.Direction, orientation: TextServer.Orientation): RID
        /* gdvirtual */ _shaped_text_clear(shaped: RID): void
        /* gdvirtual */ _shaped_text_set_direction(shaped: RID, direction: TextServer.Direction): void
        /* gdvirtual */ _shaped_text_get_direction(shaped: RID): TextServer.Direction
        /* gdvirtual */ _shaped_text_get_inferred_direction(shaped: RID): TextServer.Direction
        /* gdvirtual */ _shaped_text_set_bidi_override(shaped: RID, override: Array): void
        /* gdvirtual */ _shaped_text_set_custom_punctuation(shaped: RID, punct: string): void
        /* gdvirtual */ _shaped_text_get_custom_punctuation(shaped: RID): string
        /* gdvirtual */ _shaped_text_set_orientation(shaped: RID, orientation: TextServer.Orientation): void
        /* gdvirtual */ _shaped_text_get_orientation(shaped: RID): TextServer.Orientation
        /* gdvirtual */ _shaped_text_set_preserve_invalid(shaped: RID, enabled: boolean): void
        /* gdvirtual */ _shaped_text_get_preserve_invalid(shaped: RID): boolean
        /* gdvirtual */ _shaped_text_set_preserve_control(shaped: RID, enabled: boolean): void
        /* gdvirtual */ _shaped_text_get_preserve_control(shaped: RID): boolean
        /* gdvirtual */ _shaped_text_set_spacing(shaped: RID, spacing: TextServer.SpacingType, value: number /*i64*/): void
        /* gdvirtual */ _shaped_text_get_spacing(shaped: RID, spacing: TextServer.SpacingType): number /*i64*/
        /* gdvirtual */ _shaped_text_add_string(shaped: RID, text: string, fonts: Array, size: number /*i64*/, opentype_features: Dictionary, language: string, meta: any): boolean
        /* gdvirtual */ _shaped_text_add_object(shaped: RID, key: any, size: Vector2, inline_align: InlineAlignment, length: number /*i64*/, baseline: number /*f64*/): boolean
        /* gdvirtual */ _shaped_text_resize_object(shaped: RID, key: any, size: Vector2, inline_align: InlineAlignment, baseline: number /*f64*/): boolean
        /* gdvirtual */ _shaped_get_span_count(shaped: RID): number /*i64*/
        /* gdvirtual */ _shaped_get_span_meta(shaped: RID, index: number /*i64*/): void
        /* gdvirtual */ _shaped_set_span_update_font(shaped: RID, index: number /*i64*/, fonts: Array, size: number /*i64*/, opentype_features: Dictionary): void
        /* gdvirtual */ _shaped_text_substr(shaped: RID, start: number /*i64*/, length: number /*i64*/): RID
        /* gdvirtual */ _shaped_text_get_parent(shaped: RID): RID
        /* gdvirtual */ _shaped_text_fit_to_width(shaped: RID, width: number /*f64*/, justification_flags: TextServer.JustificationFlag): number /*f64*/
        /* gdvirtual */ _shaped_text_tab_align(shaped: RID, tab_stops: PackedFloat32Array): number /*f64*/
        /* gdvirtual */ _shaped_text_shape(shaped: RID): boolean
        /* gdvirtual */ _shaped_text_update_breaks(shaped: RID): boolean
        /* gdvirtual */ _shaped_text_update_justification_ops(shaped: RID): boolean
        /* gdvirtual */ _shaped_text_is_ready(shaped: RID): boolean
        /* gdvirtual */ _shaped_text_get_glyphs(shaped: RID): number /*i64*/
        /* gdvirtual */ _shaped_text_sort_logical(shaped: RID): number /*i64*/
        /* gdvirtual */ _shaped_text_get_glyph_count(shaped: RID): number /*i64*/
        /* gdvirtual */ _shaped_text_get_range(shaped: RID): Vector2i
        /* gdvirtual */ _shaped_text_get_line_breaks_adv(shaped: RID, width: PackedFloat32Array, start: number /*i64*/, once: boolean, break_flags: TextServer.LineBreakFlag): PackedInt32Array
        /* gdvirtual */ _shaped_text_get_line_breaks(shaped: RID, width: number /*f64*/, start: number /*i64*/, break_flags: TextServer.LineBreakFlag): PackedInt32Array
        /* gdvirtual */ _shaped_text_get_word_breaks(shaped: RID, grapheme_flags: TextServer.GraphemeFlag): PackedInt32Array
        /* gdvirtual */ _shaped_text_get_trim_pos(shaped: RID): number /*i64*/
        /* gdvirtual */ _shaped_text_get_ellipsis_pos(shaped: RID): number /*i64*/
        /* gdvirtual */ _shaped_text_get_ellipsis_glyph_count(shaped: RID): number /*i64*/
        /* gdvirtual */ _shaped_text_get_ellipsis_glyphs(shaped: RID): number /*i64*/
        /* gdvirtual */ _shaped_text_overrun_trim_to_width(shaped: RID, width: number /*f64*/, trim_flags: TextServer.TextOverrunFlag): void
        /* gdvirtual */ _shaped_text_get_objects(shaped: RID): Array
        /* gdvirtual */ _shaped_text_get_object_rect(shaped: RID, key: any): Rect2
        /* gdvirtual */ _shaped_text_get_size(shaped: RID): Vector2
        /* gdvirtual */ _shaped_text_get_ascent(shaped: RID): number /*f64*/
        /* gdvirtual */ _shaped_text_get_descent(shaped: RID): number /*f64*/
        /* gdvirtual */ _shaped_text_get_width(shaped: RID): number /*f64*/
        /* gdvirtual */ _shaped_text_get_underline_position(shaped: RID): number /*f64*/
        /* gdvirtual */ _shaped_text_get_underline_thickness(shaped: RID): number /*f64*/
        /* gdvirtual */ _shaped_text_get_dominant_direction_in_range(shaped: RID, start: number /*i64*/, end: number /*i64*/): number /*i64*/
        /* gdvirtual */ _shaped_text_get_carets(shaped: RID, position: number /*i64*/, caret: number /*i64*/): void
        /* gdvirtual */ _shaped_text_get_selection(shaped: RID, start: number /*i64*/, end: number /*i64*/): PackedVector2Array
        /* gdvirtual */ _shaped_text_hit_test_grapheme(shaped: RID, coord: number /*f64*/): number /*i64*/
        /* gdvirtual */ _shaped_text_hit_test_position(shaped: RID, coord: number /*f64*/): number /*i64*/
        /* gdvirtual */ _shaped_text_draw(shaped: RID, canvas: RID, pos: Vector2, clip_l: number /*f64*/, clip_r: number /*f64*/, color: Color): void
        /* gdvirtual */ _shaped_text_draw_outline(shaped: RID, canvas: RID, pos: Vector2, clip_l: number /*f64*/, clip_r: number /*f64*/, outline_size: number /*i64*/, color: Color): void
        /* gdvirtual */ _shaped_text_get_grapheme_bounds(shaped: RID, pos: number /*i64*/): Vector2
        /* gdvirtual */ _shaped_text_next_grapheme_pos(shaped: RID, pos: number /*i64*/): number /*i64*/
        /* gdvirtual */ _shaped_text_prev_grapheme_pos(shaped: RID, pos: number /*i64*/): number /*i64*/
        /* gdvirtual */ _shaped_text_get_character_breaks(shaped: RID): PackedInt32Array
        /* gdvirtual */ _shaped_text_next_character_pos(shaped: RID, pos: number /*i64*/): number /*i64*/
        /* gdvirtual */ _shaped_text_prev_character_pos(shaped: RID, pos: number /*i64*/): number /*i64*/
        /* gdvirtual */ _shaped_text_closest_character_pos(shaped: RID, pos: number /*i64*/): number /*i64*/
        /* gdvirtual */ _format_number(string_: string, language: string): string
        /* gdvirtual */ _parse_number(string_: string, language: string): string
        /* gdvirtual */ _percent_sign(language: string): string
        /* gdvirtual */ _strip_diacritics(string_: string): string
        /* gdvirtual */ _is_valid_identifier(string_: string): boolean
        /* gdvirtual */ _string_get_word_breaks(string_: string, language: string, chars_per_line: number /*i64*/): PackedInt32Array
        /* gdvirtual */ _string_get_character_breaks(string_: string, language: string): PackedInt32Array
        /* gdvirtual */ _is_confusable(string_: string, dict: PackedStringArray): number /*i64*/
        /* gdvirtual */ _spoof_check(string_: string): boolean
        /* gdvirtual */ _string_to_upper(string_: string, language: string): string
        /* gdvirtual */ _string_to_lower(string_: string, language: string): string
        /* gdvirtual */ _parse_structured_text(parser_type: TextServer.StructuredTextParser, args: Array, text: string): Array
        /* gdvirtual */ _cleanup(): void
    }
    class Texture extends Resource {
    }
    class Texture2D extends Texture {
        /* gdvirtual */ _get_width(): number /*i64*/
        /* gdvirtual */ _get_height(): number /*i64*/
        /* gdvirtual */ _is_pixel_opaque(x: number /*i64*/, y: number /*i64*/): boolean
        /* gdvirtual */ _has_alpha(): boolean
        /* gdvirtual */ _draw(to_canvas_item: RID, pos: Vector2, modulate: Color, transpose: boolean): void
        /* gdvirtual */ _draw_rect(to_canvas_item: RID, rect: Rect2, tile: boolean, modulate: Color, transpose: boolean): void
        /* gdvirtual */ _draw_rect_region(to_canvas_item: RID, rect: Rect2, src_rect: Rect2, modulate: Color, transpose: boolean, clip_uv: boolean): void
        get_width(): number /*i64*/
        get_height(): number /*i64*/
        get_size(): Vector2
        has_alpha(): boolean
        draw(canvas_item: RID, position: Vector2, modulate: Color = new Color(1, 1, 1, 1), transpose: boolean = false): void
        draw_rect(canvas_item: RID, rect: Rect2, tile: boolean, modulate: Color = new Color(1, 1, 1, 1), transpose: boolean = false): void
        draw_rect_region(canvas_item: RID, rect: Rect2, src_rect: Rect2, modulate: Color = new Color(1, 1, 1, 1), transpose: boolean = false, clip_uv: boolean = true): void
        get_image(): Image
        create_placeholder(): Resource
    }
    class Texture2DArray extends ImageTextureLayered {
        create_placeholder(): Resource
    }
    class Texture2DArrayRD extends TextureLayeredRD {
    }
    class Texture2DRD extends Texture2D {
        set_texture_rd_rid(texture_rd_rid: RID): void
        get_texture_rd_rid(): RID
        texture_rd_rid: RID
    }
    class Texture3D extends Texture {
        /* gdvirtual */ _get_format(): Image.Format
        /* gdvirtual */ _get_width(): number /*i64*/
        /* gdvirtual */ _get_height(): number /*i64*/
        /* gdvirtual */ _get_depth(): number /*i64*/
        /* gdvirtual */ _has_mipmaps(): boolean
        /* gdvirtual */ _get_data(): Array
        get_format(): Image.Format
        get_width(): number /*i64*/
        get_height(): number /*i64*/
        get_depth(): number /*i64*/
        has_mipmaps(): boolean
        get_data(): Array
        create_placeholder(): Resource
    }
    class Texture3DEditorPlugin extends EditorPlugin {
    }
    class Texture3DRD extends Texture3D {
        set_texture_rd_rid(texture_rd_rid: RID): void
        get_texture_rd_rid(): RID
        texture_rd_rid: RID
    }
    namespace TextureButton {
        enum StretchMode {
            STRETCH_SCALE = 0,
            STRETCH_TILE = 1,
            STRETCH_KEEP = 2,
            STRETCH_KEEP_CENTERED = 3,
            STRETCH_KEEP_ASPECT = 4,
            STRETCH_KEEP_ASPECT_CENTERED = 5,
            STRETCH_KEEP_ASPECT_COVERED = 6,
        }
    }
    class TextureButton extends BaseButton {
        set_texture_normal(texture: Texture2D): void
        set_texture_pressed(texture: Texture2D): void
        set_texture_hover(texture: Texture2D): void
        set_texture_disabled(texture: Texture2D): void
        set_texture_focused(texture: Texture2D): void
        set_click_mask(mask: BitMap): void
        set_ignore_texture_size(ignore: boolean): void
        set_stretch_mode(mode: TextureButton.StretchMode): void
        set_flip_h(enable: boolean): void
        is_flipped_h(): boolean
        set_flip_v(enable: boolean): void
        is_flipped_v(): boolean
        get_texture_normal(): Texture2D
        get_texture_pressed(): Texture2D
        get_texture_hover(): Texture2D
        get_texture_disabled(): Texture2D
        get_texture_focused(): Texture2D
        get_click_mask(): BitMap
        get_ignore_texture_size(): boolean
        get_stretch_mode(): TextureButton.StretchMode
        texture_normal: Texture2D
        texture_pressed: Texture2D
        texture_hover: Texture2D
        texture_disabled: Texture2D
        texture_focused: Texture2D
        texture_click_mask: BitMap
        ignore_texture_size: any /*bool*/
        stretch_mode: number /*i64*/
        flip_h: any /*bool*/
        flip_v: any /*bool*/
    }
    class TextureCubemapArrayRD extends TextureLayeredRD {
    }
    class TextureCubemapRD extends TextureLayeredRD {
    }
    class TextureEditorPlugin extends EditorPlugin {
    }
    namespace TextureLayered {
        enum LayeredType {
            LAYERED_TYPE_2D_ARRAY = 0,
            LAYERED_TYPE_CUBEMAP = 1,
            LAYERED_TYPE_CUBEMAP_ARRAY = 2,
        }
    }
    class TextureLayered extends Texture {
        /* gdvirtual */ _get_format(): Image.Format
        /* gdvirtual */ _get_layered_type(): number /*i64*/
        /* gdvirtual */ _get_width(): number /*i64*/
        /* gdvirtual */ _get_height(): number /*i64*/
        /* gdvirtual */ _get_layers(): number /*i64*/
        /* gdvirtual */ _has_mipmaps(): boolean
        /* gdvirtual */ _get_layer_data(layer_index: number /*i64*/): Image
        get_format(): Image.Format
        get_layered_type(): TextureLayered.LayeredType
        get_width(): number /*i64*/
        get_height(): number /*i64*/
        get_layers(): number /*i64*/
        has_mipmaps(): boolean
        get_layer_data(layer: number /*i64*/): Image
    }
    class TextureLayeredEditorPlugin extends EditorPlugin {
    }
    class TextureLayeredRD extends TextureLayered {
        set_texture_rd_rid(texture_rd_rid: RID): void
        get_texture_rd_rid(): RID
        texture_rd_rid: RID
    }
    namespace TextureProgressBar {
        enum FillMode {
            FILL_LEFT_TO_RIGHT = 0,
            FILL_RIGHT_TO_LEFT = 1,
            FILL_TOP_TO_BOTTOM = 2,
            FILL_BOTTOM_TO_TOP = 3,
            FILL_CLOCKWISE = 4,
            FILL_COUNTER_CLOCKWISE = 5,
            FILL_BILINEAR_LEFT_AND_RIGHT = 6,
            FILL_BILINEAR_TOP_AND_BOTTOM = 7,
            FILL_CLOCKWISE_AND_COUNTER_CLOCKWISE = 8,
        }
    }
    class TextureProgressBar extends Range {
        set_under_texture(tex: Texture2D): void
        get_under_texture(): Texture2D
        set_progress_texture(tex: Texture2D): void
        get_progress_texture(): Texture2D
        set_over_texture(tex: Texture2D): void
        get_over_texture(): Texture2D
        set_fill_mode(mode: number /*i64*/): void
        get_fill_mode(): number /*i64*/
        set_tint_under(tint: Color): void
        get_tint_under(): Color
        set_tint_progress(tint: Color): void
        get_tint_progress(): Color
        set_tint_over(tint: Color): void
        get_tint_over(): Color
        set_texture_progress_offset(offset: Vector2): void
        get_texture_progress_offset(): Vector2
        set_radial_initial_angle(mode: number /*f64*/): void
        get_radial_initial_angle(): number /*f64*/
        set_radial_center_offset(mode: Vector2): void
        get_radial_center_offset(): Vector2
        set_fill_degrees(mode: number /*f64*/): void
        get_fill_degrees(): number /*f64*/
        set_stretch_margin(margin: Side, value: number /*i64*/): void
        get_stretch_margin(margin: Side): number /*i64*/
        set_nine_patch_stretch(stretch: boolean): void
        get_nine_patch_stretch(): boolean
        fill_mode: number /*i64*/
        nine_patch_stretch: boolean
        texture_under: Texture2D
        texture_over: Texture2D
        texture_progress: Texture2D
        texture_progress_offset: Vector2
        tint_under: Color
        tint_over: Color
        tint_progress: Color
        radial_initial_angle: number /*f64*/
        radial_fill_degrees: number /*f64*/
        radial_center_offset: Vector2
    }
    namespace TextureRect {
        enum ExpandMode {
            EXPAND_KEEP_SIZE = 0,
            EXPAND_IGNORE_SIZE = 1,
            EXPAND_FIT_WIDTH = 2,
            EXPAND_FIT_WIDTH_PROPORTIONAL = 3,
            EXPAND_FIT_HEIGHT = 4,
            EXPAND_FIT_HEIGHT_PROPORTIONAL = 5,
        }
        enum StretchMode {
            STRETCH_SCALE = 0,
            STRETCH_TILE = 1,
            STRETCH_KEEP = 2,
            STRETCH_KEEP_CENTERED = 3,
            STRETCH_KEEP_ASPECT = 4,
            STRETCH_KEEP_ASPECT_CENTERED = 5,
            STRETCH_KEEP_ASPECT_COVERED = 6,
        }
    }
    class TextureRect extends Control {
        set_texture(texture: Texture2D): void
        get_texture(): Texture2D
        set_expand_mode(expand_mode: TextureRect.ExpandMode): void
        get_expand_mode(): TextureRect.ExpandMode
        set_flip_h(enable: boolean): void
        is_flipped_h(): boolean
        set_flip_v(enable: boolean): void
        is_flipped_v(): boolean
        set_stretch_mode(stretch_mode: TextureRect.StretchMode): void
        get_stretch_mode(): TextureRect.StretchMode
        texture: Texture2D
        expand_mode: number /*i64*/
        stretch_mode: number /*i64*/
        flip_h: boolean
        flip_v: boolean
    }
    class TextureRegionEditor extends AcceptDialog {
        _update_rect(): void
    }
    class TextureRegionEditorPlugin extends EditorPlugin {
    }
    namespace Theme {
        enum DataType {
            DATA_TYPE_COLOR = 0,
            DATA_TYPE_CONSTANT = 1,
            DATA_TYPE_FONT = 2,
            DATA_TYPE_FONT_SIZE = 3,
            DATA_TYPE_ICON = 4,
            DATA_TYPE_STYLEBOX = 5,
            DATA_TYPE_MAX = 6,
        }
    }
    class Theme extends Resource {
        set_icon(name: StringName, theme_type: StringName, texture: Texture2D): void
        get_icon(name: StringName, theme_type: StringName): Texture2D
        has_icon(name: StringName, theme_type: StringName): boolean
        rename_icon(old_name: StringName, name: StringName, theme_type: StringName): void
        clear_icon(name: StringName, theme_type: StringName): void
        get_icon_list(theme_type: string): PackedStringArray
        get_icon_type_list(): PackedStringArray
        set_stylebox(name: StringName, theme_type: StringName, texture: StyleBox): void
        get_stylebox(name: StringName, theme_type: StringName): StyleBox
        has_stylebox(name: StringName, theme_type: StringName): boolean
        rename_stylebox(old_name: StringName, name: StringName, theme_type: StringName): void
        clear_stylebox(name: StringName, theme_type: StringName): void
        get_stylebox_list(theme_type: string): PackedStringArray
        get_stylebox_type_list(): PackedStringArray
        set_font(name: StringName, theme_type: StringName, font: Font): void
        get_font(name: StringName, theme_type: StringName): Font
        has_font(name: StringName, theme_type: StringName): boolean
        rename_font(old_name: StringName, name: StringName, theme_type: StringName): void
        clear_font(name: StringName, theme_type: StringName): void
        get_font_list(theme_type: string): PackedStringArray
        get_font_type_list(): PackedStringArray
        set_font_size(name: StringName, theme_type: StringName, font_size: number /*i64*/): void
        get_font_size(name: StringName, theme_type: StringName): number /*i64*/
        has_font_size(name: StringName, theme_type: StringName): boolean
        rename_font_size(old_name: StringName, name: StringName, theme_type: StringName): void
        clear_font_size(name: StringName, theme_type: StringName): void
        get_font_size_list(theme_type: string): PackedStringArray
        get_font_size_type_list(): PackedStringArray
        set_color(name: StringName, theme_type: StringName, color: Color): void
        get_color(name: StringName, theme_type: StringName): Color
        has_color(name: StringName, theme_type: StringName): boolean
        rename_color(old_name: StringName, name: StringName, theme_type: StringName): void
        clear_color(name: StringName, theme_type: StringName): void
        get_color_list(theme_type: string): PackedStringArray
        get_color_type_list(): PackedStringArray
        set_constant(name: StringName, theme_type: StringName, constant: number /*i64*/): void
        get_constant(name: StringName, theme_type: StringName): number /*i64*/
        has_constant(name: StringName, theme_type: StringName): boolean
        rename_constant(old_name: StringName, name: StringName, theme_type: StringName): void
        clear_constant(name: StringName, theme_type: StringName): void
        get_constant_list(theme_type: string): PackedStringArray
        get_constant_type_list(): PackedStringArray
        set_default_base_scale(base_scale: number /*f64*/): void
        get_default_base_scale(): number /*f64*/
        has_default_base_scale(): boolean
        set_default_font(font: Font): void
        get_default_font(): Font
        has_default_font(): boolean
        set_default_font_size(font_size: number /*i64*/): void
        get_default_font_size(): number /*i64*/
        has_default_font_size(): boolean
        set_theme_item(data_type: Theme.DataType, name: StringName, theme_type: StringName, value: any): void
        get_theme_item(data_type: Theme.DataType, name: StringName, theme_type: StringName): any
        has_theme_item(data_type: Theme.DataType, name: StringName, theme_type: StringName): boolean
        rename_theme_item(data_type: Theme.DataType, old_name: StringName, name: StringName, theme_type: StringName): void
        clear_theme_item(data_type: Theme.DataType, name: StringName, theme_type: StringName): void
        get_theme_item_list(data_type: Theme.DataType, theme_type: string): PackedStringArray
        get_theme_item_type_list(data_type: Theme.DataType): PackedStringArray
        set_type_variation(theme_type: StringName, base_type: StringName): void
        is_type_variation(theme_type: StringName, base_type: StringName): boolean
        clear_type_variation(theme_type: StringName): void
        get_type_variation_base(theme_type: StringName): StringName
        get_type_variation_list(base_type: StringName): PackedStringArray
        add_type(theme_type: StringName): void
        remove_type(theme_type: StringName): void
        get_type_list(): PackedStringArray
        merge_with(other: Theme): void
        clear(): void
        default_base_scale: number /*f64*/
        default_font: Font
        default_font_size: number /*i64*/
    }
    class ThemeContext extends Object {
        readonly changed: Signal
    }
    class ThemeEditor extends VBoxContainer {
    }
    class ThemeEditorPlugin extends EditorPlugin {
    }
    class ThemeEditorPreview extends VBoxContainer {
        readonly control_picked: Signal
    }
    class ThemeItemEditorDialog extends AcceptDialog {
        _update_edit_types(): void
        _update_edit_item_tree(_unnamed_arg0: string): void
    }
    class ThemeItemImportTree extends VBoxContainer {
        readonly items_imported: Signal
    }
    class ThemeTypeDialog extends ConfirmationDialog {
        readonly type_selected: Signal
    }
    class ThemeTypeEditor extends MarginContainer {
        _update_type_items(): void
        _pin_leading_stylebox(_unnamed_arg0: string, _unnamed_arg1: StyleBox): void
        _unpin_leading_stylebox(): void
        _change_pinned_stylebox(): void
    }
    namespace Thread {
        enum Priority {
            PRIORITY_LOW = 0,
            PRIORITY_NORMAL = 1,
            PRIORITY_HIGH = 2,
        }
    }
    class Thread extends RefCounted {
        start(callable: Callable, priority: Thread.Priority = 1): GodotError
        get_id(): string
        is_started(): boolean
        is_alive(): boolean
        wait_to_finish(): any
        static set_thread_safety_checks_enabled(enabled: boolean): void
    }
    class TileAtlasView extends Control {
        readonly transform_changed: Signal
    }
    class TileData extends Object {
        set_flip_h(flip_h: boolean): void
        get_flip_h(): boolean
        set_flip_v(flip_v: boolean): void
        get_flip_v(): boolean
        set_transpose(transpose: boolean): void
        get_transpose(): boolean
        set_material(material: Material): void
        get_material(): Material
        set_texture_origin(texture_origin: Vector2i): void
        get_texture_origin(): Vector2i
        set_modulate(modulate: Color): void
        get_modulate(): Color
        set_z_index(z_index: number /*i64*/): void
        get_z_index(): number /*i64*/
        set_y_sort_origin(y_sort_origin: number /*i64*/): void
        get_y_sort_origin(): number /*i64*/
        set_occluder(layer_id: number /*i64*/, occluder_polygon: OccluderPolygon2D): void
        get_occluder(layer_id: number /*i64*/): OccluderPolygon2D
        set_constant_linear_velocity(layer_id: number /*i64*/, velocity: Vector2): void
        get_constant_linear_velocity(layer_id: number /*i64*/): Vector2
        set_constant_angular_velocity(layer_id: number /*i64*/, velocity: number /*f64*/): void
        get_constant_angular_velocity(layer_id: number /*i64*/): number /*f64*/
        set_collision_polygons_count(layer_id: number /*i64*/, polygons_count: number /*i64*/): void
        get_collision_polygons_count(layer_id: number /*i64*/): number /*i64*/
        add_collision_polygon(layer_id: number /*i64*/): void
        remove_collision_polygon(layer_id: number /*i64*/, polygon_index: number /*i64*/): void
        set_collision_polygon_points(layer_id: number /*i64*/, polygon_index: number /*i64*/, polygon: PackedVector2Array): void
        get_collision_polygon_points(layer_id: number /*i64*/, polygon_index: number /*i64*/): PackedVector2Array
        set_collision_polygon_one_way(layer_id: number /*i64*/, polygon_index: number /*i64*/, one_way: boolean): void
        is_collision_polygon_one_way(layer_id: number /*i64*/, polygon_index: number /*i64*/): boolean
        set_collision_polygon_one_way_margin(layer_id: number /*i64*/, polygon_index: number /*i64*/, one_way_margin: number /*f64*/): void
        get_collision_polygon_one_way_margin(layer_id: number /*i64*/, polygon_index: number /*i64*/): number /*f64*/
        set_terrain_set(terrain_set: number /*i64*/): void
        get_terrain_set(): number /*i64*/
        set_terrain(terrain: number /*i64*/): void
        get_terrain(): number /*i64*/
        set_terrain_peering_bit(peering_bit: TileSet.CellNeighbor, terrain: number /*i64*/): void
        get_terrain_peering_bit(peering_bit: TileSet.CellNeighbor): number /*i64*/
        set_navigation_polygon(layer_id: number /*i64*/, navigation_polygon: NavigationPolygon): void
        get_navigation_polygon(layer_id: number /*i64*/): NavigationPolygon
        set_probability(probability: number /*f64*/): void
        get_probability(): number /*f64*/
        set_custom_data(layer_name: string, value: any): void
        get_custom_data(layer_name: string): any
        set_custom_data_by_layer_id(layer_id: number /*i64*/, value: any): void
        get_custom_data_by_layer_id(layer_id: number /*i64*/): any
        flip_h: boolean
        flip_v: boolean
        transpose: boolean
        texture_origin: Vector2i
        modulate: Color
        material: CanvasItemMaterial | ShaderMaterial
        z_index: number /*i64*/
        y_sort_origin: number /*i64*/
        terrain_set: number /*i64*/
        terrain: number /*i64*/
        probability: number /*f64*/
        readonly changed: Signal
    }
    namespace TileMap {
        enum VisibilityMode {
            VISIBILITY_MODE_DEFAULT = 0,
            VISIBILITY_MODE_FORCE_HIDE = 2,
            VISIBILITY_MODE_FORCE_SHOW = 1,
        }
    }
    class TileMap extends Node2D {
        /* gdvirtual */ _use_tile_data_runtime_update(layer: number /*i64*/, coords: Vector2i): boolean
        /* gdvirtual */ _tile_data_runtime_update(layer: number /*i64*/, coords: Vector2i, tile_data: TileData): void
        set_navigation_map(layer: number /*i64*/, map: RID): void
        get_navigation_map(layer: number /*i64*/): RID
        force_update(layer: number /*i64*/ = -1): void
        set_tileset(tileset: TileSet): void
        get_tileset(): TileSet
        set_rendering_quadrant_size(size: number /*i64*/): void
        get_rendering_quadrant_size(): number /*i64*/
        get_layers_count(): number /*i64*/
        add_layer(to_position: number /*i64*/): void
        move_layer(layer: number /*i64*/, to_position: number /*i64*/): void
        remove_layer(layer: number /*i64*/): void
        set_layer_name(layer: number /*i64*/, name: string): void
        get_layer_name(layer: number /*i64*/): string
        set_layer_enabled(layer: number /*i64*/, enabled: boolean): void
        is_layer_enabled(layer: number /*i64*/): boolean
        set_layer_modulate(layer: number /*i64*/, modulate: Color): void
        get_layer_modulate(layer: number /*i64*/): Color
        set_layer_y_sort_enabled(layer: number /*i64*/, y_sort_enabled: boolean): void
        is_layer_y_sort_enabled(layer: number /*i64*/): boolean
        set_layer_y_sort_origin(layer: number /*i64*/, y_sort_origin: number /*i64*/): void
        get_layer_y_sort_origin(layer: number /*i64*/): number /*i64*/
        set_layer_z_index(layer: number /*i64*/, z_index: number /*i64*/): void
        get_layer_z_index(layer: number /*i64*/): number /*i64*/
        set_layer_navigation_enabled(layer: number /*i64*/, enabled: boolean): void
        is_layer_navigation_enabled(layer: number /*i64*/): boolean
        set_layer_navigation_map(layer: number /*i64*/, map: RID): void
        get_layer_navigation_map(layer: number /*i64*/): RID
        set_collision_animatable(enabled: boolean): void
        is_collision_animatable(): boolean
        set_collision_visibility_mode(collision_visibility_mode: TileMap.VisibilityMode): void
        get_collision_visibility_mode(): TileMap.VisibilityMode
        set_navigation_visibility_mode(navigation_visibility_mode: TileMap.VisibilityMode): void
        get_navigation_visibility_mode(): TileMap.VisibilityMode
        set_cell(layer: number /*i64*/, coords: Vector2i, source_id: number /*i64*/ = -1, atlas_coords: Vector2i = <any> {} /*compound.type from 6([object Object])*/, alternative_tile: number /*i64*/ = 0): void
        erase_cell(layer: number /*i64*/, coords: Vector2i): void
        get_cell_source_id(layer: number /*i64*/, coords: Vector2i, use_proxies: boolean = false): number /*i64*/
        get_cell_atlas_coords(layer: number /*i64*/, coords: Vector2i, use_proxies: boolean = false): Vector2i
        get_cell_alternative_tile(layer: number /*i64*/, coords: Vector2i, use_proxies: boolean = false): number /*i64*/
        get_cell_tile_data(layer: number /*i64*/, coords: Vector2i, use_proxies: boolean = false): TileData
        get_coords_for_body_rid(body: RID): Vector2i
        get_layer_for_body_rid(body: RID): number /*i64*/
        get_pattern(layer: number /*i64*/, coords_array: Array): TileMapPattern
        map_pattern(position_in_tilemap: Vector2i, coords_in_pattern: Vector2i, pattern: TileMapPattern): Vector2i
        set_pattern(layer: number /*i64*/, position: Vector2i, pattern: TileMapPattern): void
        set_cells_terrain_connect(layer: number /*i64*/, cells: Array, terrain_set: number /*i64*/, terrain: number /*i64*/, ignore_empty_terrains: boolean = true): void
        set_cells_terrain_path(layer: number /*i64*/, path: Array, terrain_set: number /*i64*/, terrain: number /*i64*/, ignore_empty_terrains: boolean = true): void
        fix_invalid_tiles(): void
        clear_layer(layer: number /*i64*/): void
        clear(): void
        update_internals(): void
        notify_runtime_tile_data_update(layer: number /*i64*/ = -1): void
        get_surrounding_cells(coords: Vector2i): Array
        get_used_cells(layer: number /*i64*/): Array
        get_used_cells_by_id(layer: number /*i64*/, source_id: number /*i64*/ = -1, atlas_coords: Vector2i = <any> {} /*compound.type from 6([object Object])*/, alternative_tile: number /*i64*/ = -1): Array
        get_used_rect(): Rect2i
        map_to_local(map_position: Vector2i): Vector2
        local_to_map(local_position: Vector2): Vector2i
        get_neighbor_cell(coords: Vector2i, neighbor: TileSet.CellNeighbor): Vector2i
        tile_set: TileSet
        rendering_quadrant_size: number /*i64*/
        collision_animatable: boolean
        collision_visibility_mode: number /*i64*/
        navigation_visibility_mode: number /*i64*/
        readonly changed: Signal
    }
    class TileMapEditor extends VBoxContainer {
    }
    class TileMapEditorPlugin extends EditorPlugin {
    }
    class TileMapEditorTerrainsPlugin extends Object {
    }
    class TileMapEditorTilesPlugin extends Object {
        _scene_thumbnail_done(_unnamed_arg0: string, _unnamed_arg1: Texture2D, _unnamed_arg2: Texture2D, _unnamed_arg3: any): void
        _set_tile_map_selection(selection: Array): void
        _get_tile_map_selection(): Array
    }
    class TileMapPattern extends Resource {
        set_cell(coords: Vector2i, source_id: number /*i64*/ = -1, atlas_coords: Vector2i = <any> {} /*compound.type from 6([object Object])*/, alternative_tile: number /*i64*/ = -1): void
        has_cell(coords: Vector2i): boolean
        remove_cell(coords: Vector2i, update_size: boolean): void
        get_cell_source_id(coords: Vector2i): number /*i64*/
        get_cell_atlas_coords(coords: Vector2i): Vector2i
        get_cell_alternative_tile(coords: Vector2i): number /*i64*/
        get_used_cells(): Array
        get_size(): Vector2i
        set_size(size: Vector2i): void
        is_empty(): boolean
    }
    class TileProxiesManagerDialog extends ConfirmationDialog {
        _update_lists(): void
        _unhandled_key_input(_unnamed_arg0: InputEvent): void
    }
    namespace TileSet {
        enum TileShape {
            TILE_SHAPE_SQUARE = 0,
            TILE_SHAPE_ISOMETRIC = 1,
            TILE_SHAPE_HALF_OFFSET_SQUARE = 2,
            TILE_SHAPE_HEXAGON = 3,
        }
        enum TileLayout {
            TILE_LAYOUT_STACKED = 0,
            TILE_LAYOUT_STACKED_OFFSET = 1,
            TILE_LAYOUT_STAIRS_RIGHT = 2,
            TILE_LAYOUT_STAIRS_DOWN = 3,
            TILE_LAYOUT_DIAMOND_RIGHT = 4,
            TILE_LAYOUT_DIAMOND_DOWN = 5,
        }
        enum TileOffsetAxis {
            TILE_OFFSET_AXIS_HORIZONTAL = 0,
            TILE_OFFSET_AXIS_VERTICAL = 1,
        }
        enum CellNeighbor {
            CELL_NEIGHBOR_RIGHT_SIDE = 0,
            CELL_NEIGHBOR_RIGHT_CORNER = 1,
            CELL_NEIGHBOR_BOTTOM_RIGHT_SIDE = 2,
            CELL_NEIGHBOR_BOTTOM_RIGHT_CORNER = 3,
            CELL_NEIGHBOR_BOTTOM_SIDE = 4,
            CELL_NEIGHBOR_BOTTOM_CORNER = 5,
            CELL_NEIGHBOR_BOTTOM_LEFT_SIDE = 6,
            CELL_NEIGHBOR_BOTTOM_LEFT_CORNER = 7,
            CELL_NEIGHBOR_LEFT_SIDE = 8,
            CELL_NEIGHBOR_LEFT_CORNER = 9,
            CELL_NEIGHBOR_TOP_LEFT_SIDE = 10,
            CELL_NEIGHBOR_TOP_LEFT_CORNER = 11,
            CELL_NEIGHBOR_TOP_SIDE = 12,
            CELL_NEIGHBOR_TOP_CORNER = 13,
            CELL_NEIGHBOR_TOP_RIGHT_SIDE = 14,
            CELL_NEIGHBOR_TOP_RIGHT_CORNER = 15,
        }
        enum TerrainMode {
            TERRAIN_MODE_MATCH_CORNERS_AND_SIDES = 0,
            TERRAIN_MODE_MATCH_CORNERS = 1,
            TERRAIN_MODE_MATCH_SIDES = 2,
        }
    }
    class TileSet extends Resource {
        get_next_source_id(): number /*i64*/
        add_source(source: TileSetSource, atlas_source_id_override: number /*i64*/ = -1): number /*i64*/
        remove_source(source_id: number /*i64*/): void
        set_source_id(source_id: number /*i64*/, new_source_id: number /*i64*/): void
        get_source_count(): number /*i64*/
        get_source_id(index: number /*i64*/): number /*i64*/
        has_source(source_id: number /*i64*/): boolean
        get_source(source_id: number /*i64*/): TileSetSource
        set_tile_shape(shape: TileSet.TileShape): void
        get_tile_shape(): TileSet.TileShape
        set_tile_layout(layout: TileSet.TileLayout): void
        get_tile_layout(): TileSet.TileLayout
        set_tile_offset_axis(alignment: TileSet.TileOffsetAxis): void
        get_tile_offset_axis(): TileSet.TileOffsetAxis
        set_tile_size(size: Vector2i): void
        get_tile_size(): Vector2i
        set_uv_clipping(uv_clipping: boolean): void
        is_uv_clipping(): boolean
        get_occlusion_layers_count(): number /*i64*/
        add_occlusion_layer(to_position: number /*i64*/ = -1): void
        move_occlusion_layer(layer_index: number /*i64*/, to_position: number /*i64*/): void
        remove_occlusion_layer(layer_index: number /*i64*/): void
        set_occlusion_layer_light_mask(layer_index: number /*i64*/, light_mask: number /*i64*/): void
        get_occlusion_layer_light_mask(layer_index: number /*i64*/): number /*i64*/
        set_occlusion_layer_sdf_collision(layer_index: number /*i64*/, sdf_collision: boolean): void
        get_occlusion_layer_sdf_collision(layer_index: number /*i64*/): boolean
        get_physics_layers_count(): number /*i64*/
        add_physics_layer(to_position: number /*i64*/ = -1): void
        move_physics_layer(layer_index: number /*i64*/, to_position: number /*i64*/): void
        remove_physics_layer(layer_index: number /*i64*/): void
        set_physics_layer_collision_layer(layer_index: number /*i64*/, layer: number /*i64*/): void
        get_physics_layer_collision_layer(layer_index: number /*i64*/): number /*i64*/
        set_physics_layer_collision_mask(layer_index: number /*i64*/, mask: number /*i64*/): void
        get_physics_layer_collision_mask(layer_index: number /*i64*/): number /*i64*/
        set_physics_layer_physics_material(layer_index: number /*i64*/, physics_material: PhysicsMaterial): void
        get_physics_layer_physics_material(layer_index: number /*i64*/): PhysicsMaterial
        get_terrain_sets_count(): number /*i64*/
        add_terrain_set(to_position: number /*i64*/ = -1): void
        move_terrain_set(terrain_set: number /*i64*/, to_position: number /*i64*/): void
        remove_terrain_set(terrain_set: number /*i64*/): void
        set_terrain_set_mode(terrain_set: number /*i64*/, mode: TileSet.TerrainMode): void
        get_terrain_set_mode(terrain_set: number /*i64*/): TileSet.TerrainMode
        get_terrains_count(terrain_set: number /*i64*/): number /*i64*/
        add_terrain(terrain_set: number /*i64*/, to_position: number /*i64*/ = -1): void
        move_terrain(terrain_set: number /*i64*/, terrain_index: number /*i64*/, to_position: number /*i64*/): void
        remove_terrain(terrain_set: number /*i64*/, terrain_index: number /*i64*/): void
        set_terrain_name(terrain_set: number /*i64*/, terrain_index: number /*i64*/, name: string): void
        get_terrain_name(terrain_set: number /*i64*/, terrain_index: number /*i64*/): string
        set_terrain_color(terrain_set: number /*i64*/, terrain_index: number /*i64*/, color: Color): void
        get_terrain_color(terrain_set: number /*i64*/, terrain_index: number /*i64*/): Color
        get_navigation_layers_count(): number /*i64*/
        add_navigation_layer(to_position: number /*i64*/ = -1): void
        move_navigation_layer(layer_index: number /*i64*/, to_position: number /*i64*/): void
        remove_navigation_layer(layer_index: number /*i64*/): void
        set_navigation_layer_layers(layer_index: number /*i64*/, layers: number /*i64*/): void
        get_navigation_layer_layers(layer_index: number /*i64*/): number /*i64*/
        set_navigation_layer_layer_value(layer_index: number /*i64*/, layer_number: number /*i64*/, value: boolean): void
        get_navigation_layer_layer_value(layer_index: number /*i64*/, layer_number: number /*i64*/): boolean
        get_custom_data_layers_count(): number /*i64*/
        add_custom_data_layer(to_position: number /*i64*/ = -1): void
        move_custom_data_layer(layer_index: number /*i64*/, to_position: number /*i64*/): void
        remove_custom_data_layer(layer_index: number /*i64*/): void
        get_custom_data_layer_by_name(layer_name: string): number /*i64*/
        set_custom_data_layer_name(layer_index: number /*i64*/, layer_name: string): void
        get_custom_data_layer_name(layer_index: number /*i64*/): string
        set_custom_data_layer_type(layer_index: number /*i64*/, layer_type: Variant.Type): void
        get_custom_data_layer_type(layer_index: number /*i64*/): Variant.Type
        set_source_level_tile_proxy(source_from: number /*i64*/, source_to: number /*i64*/): void
        get_source_level_tile_proxy(source_from: number /*i64*/): number /*i64*/
        has_source_level_tile_proxy(source_from: number /*i64*/): boolean
        remove_source_level_tile_proxy(source_from: number /*i64*/): void
        set_coords_level_tile_proxy(p_source_from: number /*i64*/, coords_from: Vector2i, source_to: number /*i64*/, coords_to: Vector2i): void
        get_coords_level_tile_proxy(source_from: number /*i64*/, coords_from: Vector2i): Array
        has_coords_level_tile_proxy(source_from: number /*i64*/, coords_from: Vector2i): boolean
        remove_coords_level_tile_proxy(source_from: number /*i64*/, coords_from: Vector2i): void
        set_alternative_level_tile_proxy(source_from: number /*i64*/, coords_from: Vector2i, alternative_from: number /*i64*/, source_to: number /*i64*/, coords_to: Vector2i, alternative_to: number /*i64*/): void
        get_alternative_level_tile_proxy(source_from: number /*i64*/, coords_from: Vector2i, alternative_from: number /*i64*/): Array
        has_alternative_level_tile_proxy(source_from: number /*i64*/, coords_from: Vector2i, alternative_from: number /*i64*/): boolean
        remove_alternative_level_tile_proxy(source_from: number /*i64*/, coords_from: Vector2i, alternative_from: number /*i64*/): void
        map_tile_proxy(source_from: number /*i64*/, coords_from: Vector2i, alternative_from: number /*i64*/): Array
        cleanup_invalid_tile_proxies(): void
        clear_tile_proxies(): void
        add_pattern(pattern: TileMapPattern, index: number /*i64*/ = -1): number /*i64*/
        get_pattern(index: number /*i64*/ = -1): TileMapPattern
        remove_pattern(index: number /*i64*/): void
        get_patterns_count(): number /*i64*/
        tile_shape: number /*i64*/
        tile_layout: number /*i64*/
        tile_offset_axis: number /*i64*/
        tile_size: Vector2i
        uv_clipping: boolean
    }
    namespace TileSetAtlasSource {
        enum TileAnimationMode {
            TILE_ANIMATION_MODE_DEFAULT = 0,
            TILE_ANIMATION_MODE_RANDOM_START_TIMES = 1,
            TILE_ANIMATION_MODE_MAX = 2,
        }
    }
    class TileSetAtlasSource extends TileSetSource {
        static readonly TRANSFORM_FLIP_H = 4096
        static readonly TRANSFORM_FLIP_V = 8192
        static readonly TRANSFORM_TRANSPOSE = 16384
        set_texture(texture: Texture2D): void
        get_texture(): Texture2D
        set_margins(margins: Vector2i): void
        get_margins(): Vector2i
        set_separation(separation: Vector2i): void
        get_separation(): Vector2i
        set_texture_region_size(texture_region_size: Vector2i): void
        get_texture_region_size(): Vector2i
        set_use_texture_padding(use_texture_padding: boolean): void
        get_use_texture_padding(): boolean
        create_tile(atlas_coords: Vector2i, size: Vector2i = <any> {} /*compound.type from 6([object Object])*/): void
        remove_tile(atlas_coords: Vector2i): void
        move_tile_in_atlas(atlas_coords: Vector2i, new_atlas_coords: Vector2i = <any> {} /*compound.type from 6([object Object])*/, new_size: Vector2i = <any> {} /*compound.type from 6([object Object])*/): void
        get_tile_size_in_atlas(atlas_coords: Vector2i): Vector2i
        has_room_for_tile(atlas_coords: Vector2i, size: Vector2i, animation_columns: number /*i64*/, animation_separation: Vector2i, frames_count: number /*i64*/, ignored_tile: Vector2i = <any> {} /*compound.type from 6([object Object])*/): boolean
        get_tiles_to_be_removed_on_change(texture: Texture2D, margins: Vector2i, separation: Vector2i, texture_region_size: Vector2i): PackedVector2Array
        get_tile_at_coords(atlas_coords: Vector2i): Vector2i
        has_tiles_outside_texture(): boolean
        clear_tiles_outside_texture(): void
        set_tile_animation_columns(atlas_coords: Vector2i, frame_columns: number /*i64*/): void
        get_tile_animation_columns(atlas_coords: Vector2i): number /*i64*/
        set_tile_animation_separation(atlas_coords: Vector2i, separation: Vector2i): void
        get_tile_animation_separation(atlas_coords: Vector2i): Vector2i
        set_tile_animation_speed(atlas_coords: Vector2i, speed: number /*f64*/): void
        get_tile_animation_speed(atlas_coords: Vector2i): number /*f64*/
        set_tile_animation_mode(atlas_coords: Vector2i, mode: TileSetAtlasSource.TileAnimationMode): void
        get_tile_animation_mode(atlas_coords: Vector2i): TileSetAtlasSource.TileAnimationMode
        set_tile_animation_frames_count(atlas_coords: Vector2i, frames_count: number /*i64*/): void
        get_tile_animation_frames_count(atlas_coords: Vector2i): number /*i64*/
        set_tile_animation_frame_duration(atlas_coords: Vector2i, frame_index: number /*i64*/, duration: number /*f64*/): void
        get_tile_animation_frame_duration(atlas_coords: Vector2i, frame_index: number /*i64*/): number /*f64*/
        get_tile_animation_total_duration(atlas_coords: Vector2i): number /*f64*/
        create_alternative_tile(atlas_coords: Vector2i, alternative_id_override: number /*i64*/ = -1): number /*i64*/
        remove_alternative_tile(atlas_coords: Vector2i, alternative_tile: number /*i64*/): void
        set_alternative_tile_id(atlas_coords: Vector2i, alternative_tile: number /*i64*/, new_id: number /*i64*/): void
        get_next_alternative_tile_id(atlas_coords: Vector2i): number /*i64*/
        get_tile_data(atlas_coords: Vector2i, alternative_tile: number /*i64*/): TileData
        get_atlas_grid_size(): Vector2i
        get_tile_texture_region(atlas_coords: Vector2i, frame: number /*i64*/ = 0): Rect2i
        _update_padded_texture(): void
        get_runtime_texture(): Texture2D
        get_runtime_tile_texture_region(atlas_coords: Vector2i, frame: number /*i64*/): Rect2i
        texture: Texture2D
        margins: Vector2i
        separation: Vector2i
        texture_region_size: Vector2i
        use_texture_padding: boolean
    }
    class TileSetAtlasSourceEditor extends HSplitContainer {
        _set_selection_from_array(_unnamed_arg0: Array): void
        _check_outside_tiles(): void
        readonly source_id_changed: Signal
    }
    class TileSetAtlasSourceProxyObject extends Object {
        readonly changed: Signal
    }
    class TileSetEditor extends Control {
    }
    class TileSetEditorPlugin extends EditorPlugin {
    }
    class TileSetScenesCollectionProxyObject extends Object {
        set_id(id: number /*i64*/): void
        get_id(): number /*i64*/
        id: number /*i64*/
        readonly changed: Signal
    }
    class TileSetScenesCollectionSource extends TileSetSource {
        get_scene_tiles_count(): number /*i64*/
        get_scene_tile_id(index: number /*i64*/): number /*i64*/
        has_scene_tile_id(id: number /*i64*/): boolean
        create_scene_tile(packed_scene: PackedScene, id_override: number /*i64*/ = -1): number /*i64*/
        set_scene_tile_id(id: number /*i64*/, new_id: number /*i64*/): void
        set_scene_tile_scene(id: number /*i64*/, packed_scene: PackedScene): void
        get_scene_tile_scene(id: number /*i64*/): PackedScene
        set_scene_tile_display_placeholder(id: number /*i64*/, display_placeholder: boolean): void
        get_scene_tile_display_placeholder(id: number /*i64*/): boolean
        remove_scene_tile(id: number /*i64*/): void
        get_next_scene_tile_id(): number /*i64*/
    }
    class TileSetScenesCollectionSourceEditor extends HBoxContainer {
        _scene_thumbnail_done(_unnamed_arg0: string, _unnamed_arg1: Texture2D, _unnamed_arg2: Texture2D, _unnamed_arg3: any): void
        readonly source_id_changed: Signal
    }
    class TileSetSource extends Resource {
        get_tiles_count(): number /*i64*/
        get_tile_id(index: number /*i64*/): Vector2i
        has_tile(atlas_coords: Vector2i): boolean
        get_alternative_tiles_count(atlas_coords: Vector2i): number /*i64*/
        get_alternative_tile_id(atlas_coords: Vector2i, index: number /*i64*/): number /*i64*/
        has_alternative_tile(atlas_coords: Vector2i, alternative_tile: number /*i64*/): boolean
    }
    class TileSourceInspectorPlugin extends EditorInspectorPlugin {
    }
    class TilesEditorUtils extends Object {
    }
    namespace Timer {
        enum TimerProcessCallback {
            TIMER_PROCESS_PHYSICS = 0,
            TIMER_PROCESS_IDLE = 1,
        }
    }
    class Timer extends Node {
        set_wait_time(time_sec: number /*f64*/): void
        get_wait_time(): number /*f64*/
        set_one_shot(enable: boolean): void
        is_one_shot(): boolean
        set_autostart(enable: boolean): void
        has_autostart(): boolean
        start(time_sec: number /*f64*/ = -1): void
        stop(): void
        set_paused(paused: boolean): void
        is_paused(): boolean
        is_stopped(): boolean
        get_time_left(): number /*f64*/
        set_timer_process_callback(callback: Timer.TimerProcessCallback): void
        get_timer_process_callback(): Timer.TimerProcessCallback
        process_callback: number /*i64*/
        wait_time: number /*f64*/
        one_shot: boolean
        autostart: boolean
        paused: boolean
        readonly time_left: number /*f64*/
        readonly timeout: Signal
    }
    class TorusMesh extends PrimitiveMesh {
        set_inner_radius(radius: number /*f64*/): void
        get_inner_radius(): number /*f64*/
        set_outer_radius(radius: number /*f64*/): void
        get_outer_radius(): number /*f64*/
        set_rings(rings: number /*i64*/): void
        get_rings(): number /*i64*/
        set_ring_segments(rings: number /*i64*/): void
        get_ring_segments(): number /*i64*/
        inner_radius: number /*f64*/
        outer_radius: number /*f64*/
        rings: number /*i64*/
        ring_segments: number /*i64*/
    }
    namespace TouchScreenButton {
        enum VisibilityMode {
            VISIBILITY_ALWAYS = 0,
            VISIBILITY_TOUCHSCREEN_ONLY = 1,
        }
    }
    class TouchScreenButton extends Node2D {
        set_texture_normal(texture: Texture2D): void
        get_texture_normal(): Texture2D
        set_texture_pressed(texture: Texture2D): void
        get_texture_pressed(): Texture2D
        set_bitmask(bitmask: BitMap): void
        get_bitmask(): BitMap
        set_shape(shape: Shape2D): void
        get_shape(): Shape2D
        set_shape_centered(bool: boolean): void
        is_shape_centered(): boolean
        set_shape_visible(bool: boolean): void
        is_shape_visible(): boolean
        set_action(action: string): void
        get_action(): string
        set_visibility_mode(mode: TouchScreenButton.VisibilityMode): void
        get_visibility_mode(): TouchScreenButton.VisibilityMode
        set_passby_press(enabled: boolean): void
        is_passby_press_enabled(): boolean
        is_pressed(): boolean
        texture_normal: Texture2D
        texture_pressed: Texture2D
        bitmask: BitMap
        shape: Shape2D
        shape_centered: boolean
        shape_visible: boolean
        passby_press: boolean
        action: StringName
        visibility_mode: number /*i64*/
        readonly pressed: Signal
        readonly released: Signal
    }
    class Translation extends Resource {
        /* gdvirtual */ _get_plural_message(src_message: StringName, src_plural_message: StringName, n: number /*i64*/, context: StringName): StringName
        /* gdvirtual */ _get_message(src_message: StringName, context: StringName): StringName
        set_locale(locale: string): void
        get_locale(): string
        add_message(src_message: StringName, xlated_message: StringName, context: StringName = ''): void
        add_plural_message(src_message: StringName, xlated_messages: PackedStringArray, context: StringName = ''): void
        get_message(src_message: StringName, context: StringName = ''): StringName
        get_plural_message(src_message: StringName, src_plural_message: StringName, n: number /*i64*/, context: StringName = ''): StringName
        erase_message(src_message: StringName, context: StringName = ''): void
        get_message_list(): PackedStringArray
        get_translated_message_list(): PackedStringArray
        get_message_count(): number /*i64*/
        _set_messages(messages: Dictionary): void
        _get_messages(): Dictionary
        messages: Dictionary
        locale: string
    }
    namespace Tree {
        enum SelectMode {
            SELECT_SINGLE = 0,
            SELECT_ROW = 1,
            SELECT_MULTI = 2,
        }
        enum DropModeFlags {
            DROP_MODE_DISABLED = 0,
            DROP_MODE_ON_ITEM = 1,
            DROP_MODE_INBETWEEN = 2,
        }
    }
    class Tree extends Control {
        clear(): void
        create_item(parent: TreeItem = <any> {} /*compound.type from nil*/, index: number /*i64*/ = -1): TreeItem
        get_root(): TreeItem
        set_column_custom_minimum_width(column: number /*i64*/, min_width: number /*i64*/): void
        set_column_expand(column: number /*i64*/, expand: boolean): void
        set_column_expand_ratio(column: number /*i64*/, ratio: number /*i64*/): void
        set_column_clip_content(column: number /*i64*/, enable: boolean): void
        is_column_expanding(column: number /*i64*/): boolean
        is_column_clipping_content(column: number /*i64*/): boolean
        get_column_expand_ratio(column: number /*i64*/): number /*i64*/
        get_column_width(column: number /*i64*/): number /*i64*/
        set_hide_root(enable: boolean): void
        is_root_hidden(): boolean
        get_next_selected(from: TreeItem): TreeItem
        get_selected(): TreeItem
        set_selected(item: TreeItem, column: number /*i64*/): void
        get_selected_column(): number /*i64*/
        get_pressed_button(): number /*i64*/
        set_select_mode(mode: Tree.SelectMode): void
        get_select_mode(): Tree.SelectMode
        deselect_all(): void
        set_columns(amount: number /*i64*/): void
        get_columns(): number /*i64*/
        get_edited(): TreeItem
        get_edited_column(): number /*i64*/
        edit_selected(force_edit: boolean = false): boolean
        get_custom_popup_rect(): Rect2
        get_item_area_rect(item: TreeItem, column: number /*i64*/ = -1, button_index: number /*i64*/ = -1): Rect2
        get_item_at_position(position: Vector2): TreeItem
        get_column_at_position(position: Vector2): number /*i64*/
        get_drop_section_at_position(position: Vector2): number /*i64*/
        get_button_id_at_position(position: Vector2): number /*i64*/
        ensure_cursor_is_visible(): void
        set_column_titles_visible(visible: boolean): void
        are_column_titles_visible(): boolean
        set_column_title(column: number /*i64*/, title: string): void
        get_column_title(column: number /*i64*/): string
        set_column_title_alignment(column: number /*i64*/, title_alignment: HorizontalAlignment): void
        get_column_title_alignment(column: number /*i64*/): HorizontalAlignment
        set_column_title_direction(column: number /*i64*/, direction: Control.TextDirection): void
        get_column_title_direction(column: number /*i64*/): Control.TextDirection
        set_column_title_language(column: number /*i64*/, language: string): void
        get_column_title_language(column: number /*i64*/): string
        get_scroll(): Vector2
        scroll_to_item(item: TreeItem, center_on_item: boolean = false): void
        set_h_scroll_enabled(h_scroll: boolean): void
        is_h_scroll_enabled(): boolean
        set_v_scroll_enabled(h_scroll: boolean): void
        is_v_scroll_enabled(): boolean
        set_hide_folding(hide: boolean): void
        is_folding_hidden(): boolean
        set_enable_recursive_folding(enable: boolean): void
        is_recursive_folding_enabled(): boolean
        set_drop_mode_flags(flags: number /*i64*/): void
        get_drop_mode_flags(): number /*i64*/
        set_allow_rmb_select(allow: boolean): void
        get_allow_rmb_select(): boolean
        set_allow_reselect(allow: boolean): void
        get_allow_reselect(): boolean
        set_allow_search(allow: boolean): void
        get_allow_search(): boolean
        columns: number /*i64*/
        column_titles_visible: boolean
        allow_reselect: boolean
        allow_rmb_select: boolean
        allow_search: boolean
        hide_folding: boolean
        enable_recursive_folding: boolean
        hide_root: boolean
        drop_mode_flags: number /*i64*/
        select_mode: number /*i64*/
        scroll_horizontal_enabled: boolean
        scroll_vertical_enabled: boolean
        readonly item_selected: Signal
        readonly cell_selected: Signal
        readonly multi_selected: Signal
        readonly item_mouse_selected: Signal
        readonly empty_clicked: Signal
        readonly item_edited: Signal
        readonly custom_item_clicked: Signal
        readonly item_icon_double_clicked: Signal
        readonly item_collapsed: Signal
        readonly check_propagated_to_item: Signal
        readonly button_clicked: Signal
        readonly custom_popup_edited: Signal
        readonly item_activated: Signal
        readonly column_title_clicked: Signal
        readonly nothing_selected: Signal
    }
    namespace TreeItem {
        enum TreeCellMode {
            CELL_MODE_STRING = 0,
            CELL_MODE_CHECK = 1,
            CELL_MODE_RANGE = 2,
            CELL_MODE_ICON = 3,
            CELL_MODE_CUSTOM = 4,
        }
    }
    class TreeItem extends Object {
        set_cell_mode(column: number /*i64*/, mode: TreeItem.TreeCellMode): void
        get_cell_mode(column: number /*i64*/): TreeItem.TreeCellMode
        set_edit_multiline(column: number /*i64*/, multiline: boolean): void
        is_edit_multiline(column: number /*i64*/): boolean
        set_checked(column: number /*i64*/, checked: boolean): void
        set_indeterminate(column: number /*i64*/, indeterminate: boolean): void
        is_checked(column: number /*i64*/): boolean
        is_indeterminate(column: number /*i64*/): boolean
        propagate_check(column: number /*i64*/, emit_signal: boolean = true): void
        set_text(column: number /*i64*/, text: string): void
        get_text(column: number /*i64*/): string
        set_text_direction(column: number /*i64*/, direction: Control.TextDirection): void
        get_text_direction(column: number /*i64*/): Control.TextDirection
        set_autowrap_mode(column: number /*i64*/, autowrap_mode: TextServer.AutowrapMode): void
        get_autowrap_mode(column: number /*i64*/): TextServer.AutowrapMode
        set_text_overrun_behavior(column: number /*i64*/, overrun_behavior: TextServer.OverrunBehavior): void
        get_text_overrun_behavior(column: number /*i64*/): TextServer.OverrunBehavior
        set_structured_text_bidi_override(column: number /*i64*/, parser: TextServer.StructuredTextParser): void
        get_structured_text_bidi_override(column: number /*i64*/): TextServer.StructuredTextParser
        set_structured_text_bidi_override_options(column: number /*i64*/, args: Array): void
        get_structured_text_bidi_override_options(column: number /*i64*/): Array
        set_language(column: number /*i64*/, language: string): void
        get_language(column: number /*i64*/): string
        set_suffix(column: number /*i64*/, text: string): void
        get_suffix(column: number /*i64*/): string
        set_icon(column: number /*i64*/, texture: Texture2D): void
        get_icon(column: number /*i64*/): Texture2D
        set_icon_region(column: number /*i64*/, region: Rect2): void
        get_icon_region(column: number /*i64*/): Rect2
        set_icon_max_width(column: number /*i64*/, width: number /*i64*/): void
        get_icon_max_width(column: number /*i64*/): number /*i64*/
        set_icon_modulate(column: number /*i64*/, modulate: Color): void
        get_icon_modulate(column: number /*i64*/): Color
        set_range(column: number /*i64*/, value: number /*f64*/): void
        get_range(column: number /*i64*/): number /*f64*/
        set_range_config(column: number /*i64*/, min: number /*f64*/, max: number /*f64*/, step: number /*f64*/, expr: boolean = false): void
        get_range_config(column: number /*i64*/): Dictionary
        set_metadata(column: number /*i64*/, meta: any): void
        get_metadata(column: number /*i64*/): any
        set_custom_draw(column: number /*i64*/, object: Object, callback: StringName): void
        set_collapsed(enable: boolean): void
        is_collapsed(): boolean
        set_collapsed_recursive(enable: boolean): void
        is_any_collapsed(only_visible: boolean = false): boolean
        set_visible(enable: boolean): void
        is_visible(): boolean
        uncollapse_tree(): void
        set_custom_minimum_height(height: number /*i64*/): void
        get_custom_minimum_height(): number /*i64*/
        set_selectable(column: number /*i64*/, selectable: boolean): void
        is_selectable(column: number /*i64*/): boolean
        is_selected(column: number /*i64*/): boolean
        select(column: number /*i64*/): void
        deselect(column: number /*i64*/): void
        set_editable(column: number /*i64*/, enabled: boolean): void
        is_editable(column: number /*i64*/): boolean
        set_custom_color(column: number /*i64*/, color: Color): void
        get_custom_color(column: number /*i64*/): Color
        clear_custom_color(column: number /*i64*/): void
        set_custom_font(column: number /*i64*/, font: Font): void
        get_custom_font(column: number /*i64*/): Font
        set_custom_font_size(column: number /*i64*/, font_size: number /*i64*/): void
        get_custom_font_size(column: number /*i64*/): number /*i64*/
        set_custom_bg_color(column: number /*i64*/, color: Color, just_outline: boolean = false): void
        clear_custom_bg_color(column: number /*i64*/): void
        get_custom_bg_color(column: number /*i64*/): Color
        set_custom_as_button(column: number /*i64*/, enable: boolean): void
        is_custom_set_as_button(column: number /*i64*/): boolean
        add_button(column: number /*i64*/, button: Texture2D, id: number /*i64*/ = -1, disabled: boolean = false, tooltip_text: string = ''): void
        get_button_count(column: number /*i64*/): number /*i64*/
        get_button_tooltip_text(column: number /*i64*/, button_index: number /*i64*/): string
        get_button_id(column: number /*i64*/, button_index: number /*i64*/): number /*i64*/
        get_button_by_id(column: number /*i64*/, id: number /*i64*/): number /*i64*/
        get_button(column: number /*i64*/, button_index: number /*i64*/): Texture2D
        set_button_tooltip_text(column: number /*i64*/, button_index: number /*i64*/, tooltip: string): void
        set_button(column: number /*i64*/, button_index: number /*i64*/, button: Texture2D): void
        erase_button(column: number /*i64*/, button_index: number /*i64*/): void
        set_button_disabled(column: number /*i64*/, button_index: number /*i64*/, disabled: boolean): void
        set_button_color(column: number /*i64*/, button_index: number /*i64*/, color: Color): void
        is_button_disabled(column: number /*i64*/, button_index: number /*i64*/): boolean
        set_tooltip_text(column: number /*i64*/, tooltip: string): void
        get_tooltip_text(column: number /*i64*/): string
        set_text_alignment(column: number /*i64*/, text_alignment: HorizontalAlignment): void
        get_text_alignment(column: number /*i64*/): HorizontalAlignment
        set_expand_right(column: number /*i64*/, enable: boolean): void
        get_expand_right(column: number /*i64*/): boolean
        set_disable_folding(disable: boolean): void
        is_folding_disabled(): boolean
        create_child(index: number /*i64*/ = -1): TreeItem
        add_child(child: TreeItem): void
        remove_child(child: TreeItem): void
        get_tree(): Tree
        get_next(): TreeItem
        get_prev(): TreeItem
        get_parent(): TreeItem
        get_first_child(): TreeItem
        get_next_in_tree(wrap: boolean = false): TreeItem
        get_prev_in_tree(wrap: boolean = false): TreeItem
        get_next_visible(wrap: boolean = false): TreeItem
        get_prev_visible(wrap: boolean = false): TreeItem
        get_child(index: number /*i64*/): TreeItem
        get_child_count(): number /*i64*/
        get_children(): Array
        get_index(): number /*i64*/
        move_before(item: TreeItem): void
        move_after(item: TreeItem): void
        call_recursive(method: StringName, ...vargargs: any[]): void
        collapsed: boolean
        visible: boolean
        disable_folding: boolean
        custom_minimum_height: number /*i64*/
    }
    class TriangleMesh extends RefCounted {
    }
    class TubeTrailMesh extends PrimitiveMesh {
        set_radius(radius: number /*f64*/): void
        get_radius(): number /*f64*/
        set_radial_steps(radial_steps: number /*i64*/): void
        get_radial_steps(): number /*i64*/
        set_sections(sections: number /*i64*/): void
        get_sections(): number /*i64*/
        set_section_length(section_length: number /*f64*/): void
        get_section_length(): number /*f64*/
        set_section_rings(section_rings: number /*i64*/): void
        get_section_rings(): number /*i64*/
        set_cap_top(cap_top: boolean): void
        is_cap_top(): boolean
        set_cap_bottom(cap_bottom: boolean): void
        is_cap_bottom(): boolean
        set_curve(curve: Curve): void
        get_curve(): Curve
        radius: number /*f64*/
        radial_steps: number /*i64*/
        sections: number /*i64*/
        section_length: number /*f64*/
        section_rings: number /*i64*/
        cap_top: boolean
        cap_bottom: boolean
        curve: Curve
    }
    namespace Tween {
        enum TweenProcessMode {
            TWEEN_PROCESS_PHYSICS = 0,
            TWEEN_PROCESS_IDLE = 1,
        }
        enum TweenPauseMode {
            TWEEN_PAUSE_BOUND = 0,
            TWEEN_PAUSE_STOP = 1,
            TWEEN_PAUSE_PROCESS = 2,
        }
        enum TransitionType {
            TRANS_LINEAR = 0,
            TRANS_SINE = 1,
            TRANS_QUINT = 2,
            TRANS_QUART = 3,
            TRANS_QUAD = 4,
            TRANS_EXPO = 5,
            TRANS_ELASTIC = 6,
            TRANS_CUBIC = 7,
            TRANS_CIRC = 8,
            TRANS_BOUNCE = 9,
            TRANS_BACK = 10,
            TRANS_SPRING = 11,
        }
        enum EaseType {
            EASE_IN = 0,
            EASE_OUT = 1,
            EASE_IN_OUT = 2,
            EASE_OUT_IN = 3,
        }
    }
    class Tween extends RefCounted {
        tween_property(object: Object, property: NodePath, final_val: any, duration: number /*f64*/): PropertyTweener
        tween_interval(time: number /*f64*/): IntervalTweener
        tween_callback(callback: Callable): CallbackTweener
        tween_method(method: Callable, from: any, to: any, duration: number /*f64*/): MethodTweener
        custom_step(delta: number /*f64*/): boolean
        stop(): void
        pause(): void
        play(): void
        kill(): void
        get_total_elapsed_time(): number /*f64*/
        is_running(): boolean
        is_valid(): boolean
        bind_node(node: Node): Tween
        set_process_mode(mode: Tween.TweenProcessMode): Tween
        set_pause_mode(mode: Tween.TweenPauseMode): Tween
        set_parallel(parallel: boolean = true): Tween
        set_loops(loops: number /*i64*/ = 0): Tween
        get_loops_left(): number /*i64*/
        set_speed_scale(speed: number /*f64*/): Tween
        set_trans(trans: Tween.TransitionType): Tween
        set_ease(ease: Tween.EaseType): Tween
        parallel(): Tween
        chain(): Tween
        static interpolate_value(initial_value: any, delta_value: any, elapsed_time: number /*f64*/, duration: number /*f64*/, trans_type: Tween.TransitionType, ease_type: Tween.EaseType): any
        readonly step_finished: Signal
        readonly loop_finished: Signal
        readonly finished: Signal
    }
    class Tweener extends RefCounted {
        readonly finished: Signal
    }
    class UDPServer extends RefCounted {
        listen(port: number /*i64*/, bind_address: string = '*'): GodotError
        poll(): GodotError
        is_connection_available(): boolean
        get_local_port(): number /*i64*/
        is_listening(): boolean
        take_connection(): PacketPeerUDP
        stop(): void
        set_max_pending_connections(max_pending_connections: number /*i64*/): void
        get_max_pending_connections(): number /*i64*/
        max_pending_connections: number /*i64*/
    }
    namespace UPNP {
        enum UPNPResult {
            UPNP_RESULT_SUCCESS = 0,
            UPNP_RESULT_NOT_AUTHORIZED = 1,
            UPNP_RESULT_PORT_MAPPING_NOT_FOUND = 2,
            UPNP_RESULT_INCONSISTENT_PARAMETERS = 3,
            UPNP_RESULT_NO_SUCH_ENTRY_IN_ARRAY = 4,
            UPNP_RESULT_ACTION_FAILED = 5,
            UPNP_RESULT_SRC_IP_WILDCARD_NOT_PERMITTED = 6,
            UPNP_RESULT_EXT_PORT_WILDCARD_NOT_PERMITTED = 7,
            UPNP_RESULT_INT_PORT_WILDCARD_NOT_PERMITTED = 8,
            UPNP_RESULT_REMOTE_HOST_MUST_BE_WILDCARD = 9,
            UPNP_RESULT_EXT_PORT_MUST_BE_WILDCARD = 10,
            UPNP_RESULT_NO_PORT_MAPS_AVAILABLE = 11,
            UPNP_RESULT_CONFLICT_WITH_OTHER_MECHANISM = 12,
            UPNP_RESULT_CONFLICT_WITH_OTHER_MAPPING = 13,
            UPNP_RESULT_SAME_PORT_VALUES_REQUIRED = 14,
            UPNP_RESULT_ONLY_PERMANENT_LEASE_SUPPORTED = 15,
            UPNP_RESULT_INVALID_GATEWAY = 16,
            UPNP_RESULT_INVALID_PORT = 17,
            UPNP_RESULT_INVALID_PROTOCOL = 18,
            UPNP_RESULT_INVALID_DURATION = 19,
            UPNP_RESULT_INVALID_ARGS = 20,
            UPNP_RESULT_INVALID_RESPONSE = 21,
            UPNP_RESULT_INVALID_PARAM = 22,
            UPNP_RESULT_HTTP_ERROR = 23,
            UPNP_RESULT_SOCKET_ERROR = 24,
            UPNP_RESULT_MEM_ALLOC_ERROR = 25,
            UPNP_RESULT_NO_GATEWAY = 26,
            UPNP_RESULT_NO_DEVICES = 27,
            UPNP_RESULT_UNKNOWN_ERROR = 28,
        }
    }
    class UPNP extends RefCounted {
        get_device_count(): number /*i64*/
        get_device(index: number /*i64*/): UPNPDevice
        add_device(device: UPNPDevice): void
        set_device(index: number /*i64*/, device: UPNPDevice): void
        remove_device(index: number /*i64*/): void
        clear_devices(): void
        get_gateway(): UPNPDevice
        discover(timeout: number /*i64*/ = 2000, ttl: number /*i64*/ = 2, device_filter: string = 'InternetGatewayDevice'): number /*i64*/
        query_external_address(): string
        add_port_mapping(port: number /*i64*/, port_internal: number /*i64*/ = 0, desc: string = '', proto: string = 'UDP', duration: number /*i64*/ = 0): number /*i64*/
        delete_port_mapping(port: number /*i64*/, proto: string = 'UDP'): number /*i64*/
        set_discover_multicast_if(m_if: string): void
        get_discover_multicast_if(): string
        set_discover_local_port(port: number /*i64*/): void
        get_discover_local_port(): number /*i64*/
        set_discover_ipv6(ipv6: boolean): void
        is_discover_ipv6(): boolean
        discover_multicast_if: string
        discover_local_port: number /*i64*/
        discover_ipv6: boolean
    }
    namespace UPNPDevice {
        enum IGDStatus {
            IGD_STATUS_OK = 0,
            IGD_STATUS_HTTP_ERROR = 1,
            IGD_STATUS_HTTP_EMPTY = 2,
            IGD_STATUS_NO_URLS = 3,
            IGD_STATUS_NO_IGD = 4,
            IGD_STATUS_DISCONNECTED = 5,
            IGD_STATUS_UNKNOWN_DEVICE = 6,
            IGD_STATUS_INVALID_CONTROL = 7,
            IGD_STATUS_MALLOC_ERROR = 8,
            IGD_STATUS_UNKNOWN_ERROR = 9,
        }
    }
    class UPNPDevice extends RefCounted {
        is_valid_gateway(): boolean
        query_external_address(): string
        add_port_mapping(port: number /*i64*/, port_internal: number /*i64*/ = 0, desc: string = '', proto: string = 'UDP', duration: number /*i64*/ = 0): number /*i64*/
        delete_port_mapping(port: number /*i64*/, proto: string = 'UDP'): number /*i64*/
        set_description_url(url: string): void
        get_description_url(): string
        set_service_type(type: string): void
        get_service_type(): string
        set_igd_control_url(url: string): void
        get_igd_control_url(): string
        set_igd_service_type(type: string): void
        get_igd_service_type(): string
        set_igd_our_addr(addr: string): void
        get_igd_our_addr(): string
        set_igd_status(status: UPNPDevice.IGDStatus): void
        get_igd_status(): UPNPDevice.IGDStatus
        description_url: string
        service_type: string
        igd_control_url: string
        igd_service_type: string
        igd_our_addr: string
        igd_status: number /*i64*/
    }
    namespace UndoRedo {
        enum MergeMode {
            MERGE_DISABLE = 0,
            MERGE_ENDS = 1,
            MERGE_ALL = 2,
        }
    }
    class UndoRedo extends Object {
        create_action(name: string, merge_mode: UndoRedo.MergeMode = 0, backward_undo_ops: boolean = false): void
        commit_action(execute: boolean = true): void
        is_committing_action(): boolean
        add_do_method(callable: Callable): void
        add_undo_method(callable: Callable): void
        add_do_property(object: Object, property: StringName, value: any): void
        add_undo_property(object: Object, property: StringName, value: any): void
        add_do_reference(object: Object): void
        add_undo_reference(object: Object): void
        start_force_keep_in_merge_ends(): void
        end_force_keep_in_merge_ends(): void
        get_history_count(): number /*i64*/
        get_current_action(): number /*i64*/
        get_action_name(id: number /*i64*/): string
        clear_history(increase_version: boolean = true): void
        get_current_action_name(): string
        has_undo(): boolean
        has_redo(): boolean
        get_version(): number /*i64*/
        redo(): boolean
        undo(): boolean
        readonly version_changed: Signal
    }
    class VBoxContainer extends BoxContainer {
    }
    class VFlowContainer extends FlowContainer {
    }
    class VScrollBar extends ScrollBar {
    }
    class VSeparator extends Separator {
    }
    class VSlider extends Slider {
    }
    class VSplitContainer extends SplitContainer {
    }
    class VehicleBody3D extends RigidBody3D {
        set_engine_force(engine_force: number /*f64*/): void
        get_engine_force(): number /*f64*/
        set_brake(brake: number /*f64*/): void
        get_brake(): number /*f64*/
        set_steering(steering: number /*f64*/): void
        get_steering(): number /*f64*/
        engine_force: number /*f64*/
        brake: number /*f64*/
        steering: number /*f64*/
    }
    class VehicleWheel3D extends Node3D {
        set_radius(length: number /*f64*/): void
        get_radius(): number /*f64*/
        set_suspension_rest_length(length: number /*f64*/): void
        get_suspension_rest_length(): number /*f64*/
        set_suspension_travel(length: number /*f64*/): void
        get_suspension_travel(): number /*f64*/
        set_suspension_stiffness(length: number /*f64*/): void
        get_suspension_stiffness(): number /*f64*/
        set_suspension_max_force(length: number /*f64*/): void
        get_suspension_max_force(): number /*f64*/
        set_damping_compression(length: number /*f64*/): void
        get_damping_compression(): number /*f64*/
        set_damping_relaxation(length: number /*f64*/): void
        get_damping_relaxation(): number /*f64*/
        set_use_as_traction(enable: boolean): void
        is_used_as_traction(): boolean
        set_use_as_steering(enable: boolean): void
        is_used_as_steering(): boolean
        set_friction_slip(length: number /*f64*/): void
        get_friction_slip(): number /*f64*/
        is_in_contact(): boolean
        get_contact_body(): Node3D
        set_roll_influence(roll_influence: number /*f64*/): void
        get_roll_influence(): number /*f64*/
        get_skidinfo(): number /*f64*/
        get_rpm(): number /*f64*/
        set_engine_force(engine_force: number /*f64*/): void
        get_engine_force(): number /*f64*/
        set_brake(brake: number /*f64*/): void
        get_brake(): number /*f64*/
        set_steering(steering: number /*f64*/): void
        get_steering(): number /*f64*/
        engine_force: number /*f64*/
        brake: number /*f64*/
        steering: number /*f64*/
        use_as_traction: boolean
        use_as_steering: boolean
        wheel_roll_influence: number /*f64*/
        wheel_radius: number /*f64*/
        wheel_rest_length: number /*f64*/
        wheel_friction_slip: number /*f64*/
        suspension_travel: number /*f64*/
        suspension_stiffness: number /*f64*/
        suspension_max_force: number /*f64*/
        damping_compression: number /*f64*/
        damping_relaxation: number /*f64*/
    }
    class VehicleWheel3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    class VersionControlEditorPlugin extends EditorPlugin {
    }
    class VideoStream extends Resource {
        /* gdvirtual */ _instantiate_playback(): VideoStreamPlayback
        set_file(file: string): void
        get_file(): string
        file: string
    }
    class VideoStreamPlayback extends Resource {
        /* gdvirtual */ _stop(): void
        /* gdvirtual */ _play(): void
        /* gdvirtual */ _is_playing(): boolean
        /* gdvirtual */ _set_paused(paused: boolean): void
        /* gdvirtual */ _is_paused(): boolean
        /* gdvirtual */ _get_length(): number /*f64*/
        /* gdvirtual */ _get_playback_position(): number /*f64*/
        /* gdvirtual */ _seek(time: number /*f64*/): void
        /* gdvirtual */ _set_audio_track(idx: number /*i64*/): void
        /* gdvirtual */ _get_texture(): Texture2D
        /* gdvirtual */ _update(delta: number /*f64*/): void
        /* gdvirtual */ _get_channels(): number /*i64*/
        /* gdvirtual */ _get_mix_rate(): number /*i64*/
        mix_audio(num_frames: number /*i64*/, buffer: PackedFloat32Array = <any> {} /*compound.type from 32([object Object])*/, offset: number /*i64*/ = 0): number /*i64*/
    }
    class VideoStreamPlayer extends Control {
        set_stream(stream: VideoStream): void
        get_stream(): VideoStream
        play(): void
        stop(): void
        is_playing(): boolean
        set_paused(paused: boolean): void
        is_paused(): boolean
        set_loop(loop: boolean): void
        has_loop(): boolean
        set_volume(volume: number /*f64*/): void
        get_volume(): number /*f64*/
        set_volume_db(db: number /*f64*/): void
        get_volume_db(): number /*f64*/
        set_audio_track(track: number /*i64*/): void
        get_audio_track(): number /*i64*/
        get_stream_name(): string
        get_stream_length(): number /*f64*/
        set_stream_position(position: number /*f64*/): void
        get_stream_position(): number /*f64*/
        set_autoplay(enabled: boolean): void
        has_autoplay(): boolean
        set_expand(enable: boolean): void
        has_expand(): boolean
        set_buffering_msec(msec: number /*i64*/): void
        get_buffering_msec(): number /*i64*/
        set_bus(bus: StringName): void
        get_bus(): StringName
        get_video_texture(): Texture2D
        audio_track: number /*i64*/
        stream: VideoStream
        volume_db: number /*f64*/
        volume: number /*f64*/
        autoplay: boolean
        paused: boolean
        expand: boolean
        loop: boolean
        buffering_msec: number /*i64*/
        stream_position: number /*f64*/
        bus: StringName
        readonly finished: Signal
    }
    class VideoStreamTheora extends VideoStream {
    }
    class ViewPanner extends RefCounted {
    }
    namespace Viewport {
        enum PositionalShadowAtlasQuadrantSubdiv {
            SHADOW_ATLAS_QUADRANT_SUBDIV_DISABLED = 0,
            SHADOW_ATLAS_QUADRANT_SUBDIV_1 = 1,
            SHADOW_ATLAS_QUADRANT_SUBDIV_4 = 2,
            SHADOW_ATLAS_QUADRANT_SUBDIV_16 = 3,
            SHADOW_ATLAS_QUADRANT_SUBDIV_64 = 4,
            SHADOW_ATLAS_QUADRANT_SUBDIV_256 = 5,
            SHADOW_ATLAS_QUADRANT_SUBDIV_1024 = 6,
            SHADOW_ATLAS_QUADRANT_SUBDIV_MAX = 7,
        }
        enum Scaling3DMode {
            SCALING_3D_MODE_BILINEAR = 0,
            SCALING_3D_MODE_FSR = 1,
            SCALING_3D_MODE_FSR2 = 2,
            SCALING_3D_MODE_MAX = 3,
        }
        enum MSAA {
            MSAA_DISABLED = 0,
            MSAA_2X = 1,
            MSAA_4X = 2,
            MSAA_8X = 3,
            MSAA_MAX = 4,
        }
        enum ScreenSpaceAA {
            SCREEN_SPACE_AA_DISABLED = 0,
            SCREEN_SPACE_AA_FXAA = 1,
            SCREEN_SPACE_AA_MAX = 2,
        }
        enum RenderInfo {
            RENDER_INFO_OBJECTS_IN_FRAME = 0,
            RENDER_INFO_PRIMITIVES_IN_FRAME = 1,
            RENDER_INFO_DRAW_CALLS_IN_FRAME = 2,
            RENDER_INFO_MAX = 3,
        }
        enum RenderInfoType {
            RENDER_INFO_TYPE_VISIBLE = 0,
            RENDER_INFO_TYPE_SHADOW = 1,
            RENDER_INFO_TYPE_MAX = 2,
        }
        enum DebugDraw {
            DEBUG_DRAW_DISABLED = 0,
            DEBUG_DRAW_UNSHADED = 1,
            DEBUG_DRAW_LIGHTING = 2,
            DEBUG_DRAW_OVERDRAW = 3,
            DEBUG_DRAW_WIREFRAME = 4,
            DEBUG_DRAW_NORMAL_BUFFER = 5,
            DEBUG_DRAW_VOXEL_GI_ALBEDO = 6,
            DEBUG_DRAW_VOXEL_GI_LIGHTING = 7,
            DEBUG_DRAW_VOXEL_GI_EMISSION = 8,
            DEBUG_DRAW_SHADOW_ATLAS = 9,
            DEBUG_DRAW_DIRECTIONAL_SHADOW_ATLAS = 10,
            DEBUG_DRAW_SCENE_LUMINANCE = 11,
            DEBUG_DRAW_SSAO = 12,
            DEBUG_DRAW_SSIL = 13,
            DEBUG_DRAW_PSSM_SPLITS = 14,
            DEBUG_DRAW_DECAL_ATLAS = 15,
            DEBUG_DRAW_SDFGI = 16,
            DEBUG_DRAW_SDFGI_PROBES = 17,
            DEBUG_DRAW_GI_BUFFER = 18,
            DEBUG_DRAW_DISABLE_LOD = 19,
            DEBUG_DRAW_CLUSTER_OMNI_LIGHTS = 20,
            DEBUG_DRAW_CLUSTER_SPOT_LIGHTS = 21,
            DEBUG_DRAW_CLUSTER_DECALS = 22,
            DEBUG_DRAW_CLUSTER_REFLECTION_PROBES = 23,
            DEBUG_DRAW_OCCLUDERS = 24,
            DEBUG_DRAW_MOTION_VECTORS = 25,
            DEBUG_DRAW_INTERNAL_BUFFER = 26,
        }
        enum DefaultCanvasItemTextureFilter {
            DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_NEAREST = 0,
            DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_LINEAR = 1,
            DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_LINEAR_WITH_MIPMAPS = 2,
            DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_NEAREST_WITH_MIPMAPS = 3,
            DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_MAX = 4,
        }
        enum DefaultCanvasItemTextureRepeat {
            DEFAULT_CANVAS_ITEM_TEXTURE_REPEAT_DISABLED = 0,
            DEFAULT_CANVAS_ITEM_TEXTURE_REPEAT_ENABLED = 1,
            DEFAULT_CANVAS_ITEM_TEXTURE_REPEAT_MIRROR = 2,
            DEFAULT_CANVAS_ITEM_TEXTURE_REPEAT_MAX = 3,
        }
        enum SDFOversize {
            SDF_OVERSIZE_100_PERCENT = 0,
            SDF_OVERSIZE_120_PERCENT = 1,
            SDF_OVERSIZE_150_PERCENT = 2,
            SDF_OVERSIZE_200_PERCENT = 3,
            SDF_OVERSIZE_MAX = 4,
        }
        enum SDFScale {
            SDF_SCALE_100_PERCENT = 0,
            SDF_SCALE_50_PERCENT = 1,
            SDF_SCALE_25_PERCENT = 2,
            SDF_SCALE_MAX = 3,
        }
        enum VRSMode {
            VRS_DISABLED = 0,
            VRS_TEXTURE = 1,
            VRS_XR = 2,
            VRS_MAX = 3,
        }
    }
    class Viewport extends Node {
        set_world_2d(world_2d: World2D): void
        get_world_2d(): World2D
        find_world_2d(): World2D
        set_canvas_transform(xform: Transform2D): void
        get_canvas_transform(): Transform2D
        set_global_canvas_transform(xform: Transform2D): void
        get_global_canvas_transform(): Transform2D
        get_final_transform(): Transform2D
        get_screen_transform(): Transform2D
        get_visible_rect(): Rect2
        set_transparent_background(enable: boolean): void
        has_transparent_background(): boolean
        set_use_hdr_2d(enable: boolean): void
        is_using_hdr_2d(): boolean
        set_msaa_2d(msaa: Viewport.MSAA): void
        get_msaa_2d(): Viewport.MSAA
        set_msaa_3d(msaa: Viewport.MSAA): void
        get_msaa_3d(): Viewport.MSAA
        set_screen_space_aa(screen_space_aa: Viewport.ScreenSpaceAA): void
        get_screen_space_aa(): Viewport.ScreenSpaceAA
        set_use_taa(enable: boolean): void
        is_using_taa(): boolean
        set_use_debanding(enable: boolean): void
        is_using_debanding(): boolean
        set_use_occlusion_culling(enable: boolean): void
        is_using_occlusion_culling(): boolean
        set_debug_draw(debug_draw: Viewport.DebugDraw): void
        get_debug_draw(): Viewport.DebugDraw
        get_render_info(type: Viewport.RenderInfoType, info: Viewport.RenderInfo): number /*i64*/
        get_texture(): ViewportTexture
        set_physics_object_picking(enable: boolean): void
        get_physics_object_picking(): boolean
        set_physics_object_picking_sort(enable: boolean): void
        get_physics_object_picking_sort(): boolean
        get_viewport_rid(): RID
        push_text_input(text: string): void
        push_input(event: InputEvent, in_local_coords: boolean = false): void
        push_unhandled_input(event: InputEvent, in_local_coords: boolean = false): void
        get_camera_2d(): Camera2D
        set_as_audio_listener_2d(enable: boolean): void
        is_audio_listener_2d(): boolean
        get_mouse_position(): Vector2
        warp_mouse(position: Vector2): void
        update_mouse_cursor_state(): void
        gui_get_drag_data(): any
        gui_is_dragging(): boolean
        gui_is_drag_successful(): boolean
        gui_release_focus(): void
        gui_get_focus_owner(): Control
        set_disable_input(disable: boolean): void
        is_input_disabled(): boolean
        _gui_remove_focus_for_window(_unnamed_arg0: Node): void
        _post_gui_grab_click_focus(): void
        set_positional_shadow_atlas_size(size: number /*i64*/): void
        get_positional_shadow_atlas_size(): number /*i64*/
        set_positional_shadow_atlas_16_bits(enable: boolean): void
        get_positional_shadow_atlas_16_bits(): boolean
        set_snap_controls_to_pixels(enabled: boolean): void
        is_snap_controls_to_pixels_enabled(): boolean
        set_snap_2d_transforms_to_pixel(enabled: boolean): void
        is_snap_2d_transforms_to_pixel_enabled(): boolean
        set_snap_2d_vertices_to_pixel(enabled: boolean): void
        is_snap_2d_vertices_to_pixel_enabled(): boolean
        set_positional_shadow_atlas_quadrant_subdiv(quadrant: number /*i64*/, subdiv: Viewport.PositionalShadowAtlasQuadrantSubdiv): void
        get_positional_shadow_atlas_quadrant_subdiv(quadrant: number /*i64*/): Viewport.PositionalShadowAtlasQuadrantSubdiv
        set_input_as_handled(): void
        is_input_handled(): boolean
        set_handle_input_locally(enable: boolean): void
        is_handling_input_locally(): boolean
        set_default_canvas_item_texture_filter(mode: Viewport.DefaultCanvasItemTextureFilter): void
        get_default_canvas_item_texture_filter(): Viewport.DefaultCanvasItemTextureFilter
        set_embedding_subwindows(enable: boolean): void
        is_embedding_subwindows(): boolean
        get_embedded_subwindows(): Array
        set_canvas_cull_mask(mask: number /*i64*/): void
        get_canvas_cull_mask(): number /*i64*/
        set_canvas_cull_mask_bit(layer: number /*i64*/, enable: boolean): void
        get_canvas_cull_mask_bit(layer: number /*i64*/): boolean
        set_default_canvas_item_texture_repeat(mode: Viewport.DefaultCanvasItemTextureRepeat): void
        get_default_canvas_item_texture_repeat(): Viewport.DefaultCanvasItemTextureRepeat
        set_sdf_oversize(oversize: Viewport.SDFOversize): void
        get_sdf_oversize(): Viewport.SDFOversize
        set_sdf_scale(scale: Viewport.SDFScale): void
        get_sdf_scale(): Viewport.SDFScale
        set_mesh_lod_threshold(pixels: number /*f64*/): void
        get_mesh_lod_threshold(): number /*f64*/
        _process_picking(): void
        set_world_3d(world_3d: World3D): void
        get_world_3d(): World3D
        find_world_3d(): World3D
        set_use_own_world_3d(enable: boolean): void
        is_using_own_world_3d(): boolean
        get_camera_3d(): Camera3D
        set_as_audio_listener_3d(enable: boolean): void
        is_audio_listener_3d(): boolean
        set_disable_3d(disable: boolean): void
        is_3d_disabled(): boolean
        set_use_xr(use: boolean): void
        is_using_xr(): boolean
        set_scaling_3d_mode(scaling_3d_mode: Viewport.Scaling3DMode): void
        get_scaling_3d_mode(): Viewport.Scaling3DMode
        set_scaling_3d_scale(scale: number /*f64*/): void
        get_scaling_3d_scale(): number /*f64*/
        set_fsr_sharpness(fsr_sharpness: number /*f64*/): void
        get_fsr_sharpness(): number /*f64*/
        set_texture_mipmap_bias(texture_mipmap_bias: number /*f64*/): void
        get_texture_mipmap_bias(): number /*f64*/
        set_vrs_mode(mode: Viewport.VRSMode): void
        get_vrs_mode(): Viewport.VRSMode
        set_vrs_texture(texture: Texture2D): void
        get_vrs_texture(): Texture2D
        disable_3d: boolean
        use_xr: boolean
        own_world_3d: boolean
        world_3d: World3D
        world_2d: World2D
        transparent_bg: boolean
        handle_input_locally: boolean
        snap_2d_transforms_to_pixel: boolean
        snap_2d_vertices_to_pixel: boolean
        msaa_2d: number /*i64*/
        msaa_3d: number /*i64*/
        screen_space_aa: number /*i64*/
        use_taa: boolean
        use_debanding: boolean
        use_occlusion_culling: boolean
        mesh_lod_threshold: number /*f64*/
        debug_draw: number /*i64*/
        use_hdr_2d: boolean
        scaling_3d_mode: number /*i64*/
        scaling_3d_scale: number /*f64*/
        texture_mipmap_bias: number /*f64*/
        fsr_sharpness: number /*f64*/
        vrs_mode: number /*i64*/
        vrs_texture: Texture2D
        canvas_item_default_texture_filter: number /*i64*/
        canvas_item_default_texture_repeat: number /*i64*/
        audio_listener_enable_2d: boolean
        audio_listener_enable_3d: boolean
        physics_object_picking: boolean
        physics_object_picking_sort: boolean
        gui_disable_input: boolean
        gui_snap_controls_to_pixels: boolean
        gui_embed_subwindows: boolean
        sdf_oversize: number /*i64*/
        sdf_scale: number /*i64*/
        positional_shadow_atlas_size: number /*i64*/
        positional_shadow_atlas_16_bits: boolean
        canvas_transform: Transform2D
        global_canvas_transform: Transform2D
        canvas_cull_mask: number /*i64*/
        readonly size_changed: Signal
        readonly gui_focus_changed: Signal
    }
    class ViewportNavigationControl extends Control {
    }
    class ViewportRotationControl extends Control {
    }
    class ViewportTexture extends Texture2D {
        set_viewport_path_in_scene(path: NodePath): void
        get_viewport_path_in_scene(): NodePath
        viewport_path: NodePath
    }
    namespace VisibleOnScreenEnabler2D {
        enum EnableMode {
            ENABLE_MODE_INHERIT = 0,
            ENABLE_MODE_ALWAYS = 1,
            ENABLE_MODE_WHEN_PAUSED = 2,
        }
    }
    class VisibleOnScreenEnabler2D extends VisibleOnScreenNotifier2D {
        set_enable_mode(mode: VisibleOnScreenEnabler2D.EnableMode): void
        get_enable_mode(): VisibleOnScreenEnabler2D.EnableMode
        set_enable_node_path(path: NodePath): void
        get_enable_node_path(): NodePath
        enable_mode: number /*i64*/
        enable_node_path: NodePath
    }
    namespace VisibleOnScreenEnabler3D {
        enum EnableMode {
            ENABLE_MODE_INHERIT = 0,
            ENABLE_MODE_ALWAYS = 1,
            ENABLE_MODE_WHEN_PAUSED = 2,
        }
    }
    class VisibleOnScreenEnabler3D extends VisibleOnScreenNotifier3D {
        set_enable_mode(mode: VisibleOnScreenEnabler3D.EnableMode): void
        get_enable_mode(): VisibleOnScreenEnabler3D.EnableMode
        set_enable_node_path(path: NodePath): void
        get_enable_node_path(): NodePath
        enable_mode: number /*i64*/
        enable_node_path: NodePath
    }
    class VisibleOnScreenNotifier2D extends Node2D {
        set_rect(rect: Rect2): void
        get_rect(): Rect2
        is_on_screen(): boolean
        rect: Rect2
        readonly screen_entered: Signal
        readonly screen_exited: Signal
    }
    class VisibleOnScreenNotifier3D extends VisualInstance3D {
        set_aabb(rect: AABB): void
        is_on_screen(): boolean
        aabb: AABB
        readonly screen_entered: Signal
        readonly screen_exited: Signal
    }
    class VisibleOnScreenNotifier3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    class VisualInstance3D extends Node3D {
        /* gdvirtual */ _get_aabb(): AABB
        set_base(base: RID): void
        get_base(): RID
        get_instance(): RID
        set_layer_mask(mask: number /*i64*/): void
        get_layer_mask(): number /*i64*/
        set_layer_mask_value(layer_number: number /*i64*/, value: boolean): void
        get_layer_mask_value(layer_number: number /*i64*/): boolean
        set_sorting_offset(offset: number /*f64*/): void
        get_sorting_offset(): number /*f64*/
        set_sorting_use_aabb_center(enabled: boolean): void
        is_sorting_use_aabb_center(): boolean
        get_aabb(): AABB
        layers: number /*i64*/
        sorting_offset: number /*f64*/
        sorting_use_aabb_center: boolean
    }
    namespace VisualShader {
        enum Type {
            TYPE_VERTEX = 0,
            TYPE_FRAGMENT = 1,
            TYPE_LIGHT = 2,
            TYPE_START = 3,
            TYPE_PROCESS = 4,
            TYPE_COLLIDE = 5,
            TYPE_START_CUSTOM = 6,
            TYPE_PROCESS_CUSTOM = 7,
            TYPE_SKY = 8,
            TYPE_FOG = 9,
            TYPE_MAX = 10,
        }
        enum VaryingMode {
            VARYING_MODE_VERTEX_TO_FRAG_LIGHT = 0,
            VARYING_MODE_FRAG_TO_LIGHT = 1,
            VARYING_MODE_MAX = 2,
        }
        enum VaryingType {
            VARYING_TYPE_FLOAT = 0,
            VARYING_TYPE_INT = 1,
            VARYING_TYPE_UINT = 2,
            VARYING_TYPE_VECTOR_2D = 3,
            VARYING_TYPE_VECTOR_3D = 4,
            VARYING_TYPE_VECTOR_4D = 5,
            VARYING_TYPE_BOOLEAN = 6,
            VARYING_TYPE_TRANSFORM = 7,
            VARYING_TYPE_MAX = 8,
        }
    }
    class VisualShader extends Shader {
        static readonly NODE_ID_INVALID = -1
        static readonly NODE_ID_OUTPUT = 0
        set_mode(mode: Shader.Mode): void
        add_node(type: VisualShader.Type, node: VisualShaderNode, position: Vector2, id: number /*i64*/): void
        get_node(type: VisualShader.Type, id: number /*i64*/): VisualShaderNode
        set_node_position(type: VisualShader.Type, id: number /*i64*/, position: Vector2): void
        get_node_position(type: VisualShader.Type, id: number /*i64*/): Vector2
        get_node_list(type: VisualShader.Type): PackedInt32Array
        get_valid_node_id(type: VisualShader.Type): number /*i64*/
        remove_node(type: VisualShader.Type, id: number /*i64*/): void
        replace_node(type: VisualShader.Type, id: number /*i64*/, new_class: StringName): void
        is_node_connection(type: VisualShader.Type, from_node: number /*i64*/, from_port: number /*i64*/, to_node: number /*i64*/, to_port: number /*i64*/): boolean
        can_connect_nodes(type: VisualShader.Type, from_node: number /*i64*/, from_port: number /*i64*/, to_node: number /*i64*/, to_port: number /*i64*/): boolean
        connect_nodes(type: VisualShader.Type, from_node: number /*i64*/, from_port: number /*i64*/, to_node: number /*i64*/, to_port: number /*i64*/): GodotError
        disconnect_nodes(type: VisualShader.Type, from_node: number /*i64*/, from_port: number /*i64*/, to_node: number /*i64*/, to_port: number /*i64*/): void
        connect_nodes_forced(type: VisualShader.Type, from_node: number /*i64*/, from_port: number /*i64*/, to_node: number /*i64*/, to_port: number /*i64*/): void
        get_node_connections(type: VisualShader.Type): Array
        set_graph_offset(offset: Vector2): void
        get_graph_offset(): Vector2
        add_varying(name: string, mode: VisualShader.VaryingMode, type: VisualShader.VaryingType): void
        remove_varying(name: string): void
        has_varying(name: string): boolean
        _update_shader(): void
        graph_offset: Vector2
    }
    class VisualShaderConversionPlugin extends EditorResourceConversionPlugin {
    }
    namespace VisualShaderNode {
        enum PortType {
            PORT_TYPE_SCALAR = 0,
            PORT_TYPE_SCALAR_INT = 1,
            PORT_TYPE_SCALAR_UINT = 2,
            PORT_TYPE_VECTOR_2D = 3,
            PORT_TYPE_VECTOR_3D = 4,
            PORT_TYPE_VECTOR_4D = 5,
            PORT_TYPE_BOOLEAN = 6,
            PORT_TYPE_TRANSFORM = 7,
            PORT_TYPE_SAMPLER = 8,
            PORT_TYPE_MAX = 9,
        }
    }
    class VisualShaderNode extends Resource {
        get_default_input_port(type: VisualShaderNode.PortType): number /*i64*/
        set_output_port_for_preview(port: number /*i64*/): void
        get_output_port_for_preview(): number /*i64*/
        _set_output_port_expanded(port: number /*i64*/, _unnamed_arg1: boolean): void
        _is_output_port_expanded(_unnamed_arg0: number /*i64*/): boolean
        _set_output_ports_expanded(values: Array): void
        _get_output_ports_expanded(): Array
        set_input_port_default_value(port: number /*i64*/, value: any, prev_value: any = <any> {} /*compound.type from nil*/): void
        get_input_port_default_value(port: number /*i64*/): any
        remove_input_port_default_value(port: number /*i64*/): void
        clear_default_input_values(): void
        set_default_input_values(values: Array): void
        get_default_input_values(): Array
        output_port_for_preview: number /*i64*/
        default_input_values: Array
        expanded_output_ports: Array
    }
    namespace VisualShaderNodeBillboard {
        enum BillboardType {
            BILLBOARD_TYPE_DISABLED = 0,
            BILLBOARD_TYPE_ENABLED = 1,
            BILLBOARD_TYPE_FIXED_Y = 2,
            BILLBOARD_TYPE_PARTICLES = 3,
            BILLBOARD_TYPE_MAX = 4,
        }
    }
    class VisualShaderNodeBillboard extends VisualShaderNode {
        set_billboard_type(billboard_type: VisualShaderNodeBillboard.BillboardType): void
        get_billboard_type(): VisualShaderNodeBillboard.BillboardType
        set_keep_scale_enabled(enabled: boolean): void
        is_keep_scale_enabled(): boolean
        billboard_type: number /*i64*/
        keep_scale: boolean
    }
    class VisualShaderNodeBooleanConstant extends VisualShaderNodeConstant {
        set_constant(constant: boolean): void
        get_constant(): boolean
        constant: boolean
    }
    class VisualShaderNodeBooleanParameter extends VisualShaderNodeParameter {
        set_default_value_enabled(enabled: boolean): void
        is_default_value_enabled(): boolean
        set_default_value(value: boolean): void
        get_default_value(): boolean
        default_value_enabled: boolean
        default_value: boolean
    }
    namespace VisualShaderNodeClamp {
        enum OpType {
            OP_TYPE_FLOAT = 0,
            OP_TYPE_INT = 1,
            OP_TYPE_UINT = 2,
            OP_TYPE_VECTOR_2D = 3,
            OP_TYPE_VECTOR_3D = 4,
            OP_TYPE_VECTOR_4D = 5,
            OP_TYPE_MAX = 6,
        }
    }
    class VisualShaderNodeClamp extends VisualShaderNode {
        set_op_type(op_type: VisualShaderNodeClamp.OpType): void
        get_op_type(): VisualShaderNodeClamp.OpType
        op_type: number /*i64*/
    }
    class VisualShaderNodeColorConstant extends VisualShaderNodeConstant {
        set_constant(constant: Color): void
        get_constant(): Color
        constant: Color
    }
    namespace VisualShaderNodeColorFunc {
        enum Function {
            FUNC_GRAYSCALE = 0,
            FUNC_HSV2RGB = 1,
            FUNC_RGB2HSV = 2,
            FUNC_SEPIA = 3,
            FUNC_MAX = 4,
        }
    }
    class VisualShaderNodeColorFunc extends VisualShaderNode {
        set_function(func: VisualShaderNodeColorFunc.Function): void
        get_function(): VisualShaderNodeColorFunc.Function
        function: number /*i64*/
    }
    namespace VisualShaderNodeColorOp {
        enum Operator {
            OP_SCREEN = 0,
            OP_DIFFERENCE = 1,
            OP_DARKEN = 2,
            OP_LIGHTEN = 3,
            OP_OVERLAY = 4,
            OP_DODGE = 5,
            OP_BURN = 6,
            OP_SOFT_LIGHT = 7,
            OP_HARD_LIGHT = 8,
            OP_MAX = 9,
        }
    }
    class VisualShaderNodeColorOp extends VisualShaderNode {
        set_operator(op: VisualShaderNodeColorOp.Operator): void
        get_operator(): VisualShaderNodeColorOp.Operator
        operator: number /*i64*/
    }
    class VisualShaderNodeColorParameter extends VisualShaderNodeParameter {
        set_default_value_enabled(enabled: boolean): void
        is_default_value_enabled(): boolean
        set_default_value(value: Color): void
        get_default_value(): Color
        default_value_enabled: boolean
        default_value: Color
    }
    class VisualShaderNodeComment extends VisualShaderNodeResizableBase {
        set_title(title: string): void
        get_title(): string
        set_description(description: string): void
        get_description(): string
        title: string
        description: string
    }
    namespace VisualShaderNodeCompare {
        enum ComparisonType {
            CTYPE_SCALAR = 0,
            CTYPE_SCALAR_INT = 1,
            CTYPE_SCALAR_UINT = 2,
            CTYPE_VECTOR_2D = 3,
            CTYPE_VECTOR_3D = 4,
            CTYPE_VECTOR_4D = 5,
            CTYPE_BOOLEAN = 6,
            CTYPE_TRANSFORM = 7,
            CTYPE_MAX = 8,
        }
        enum Function {
            FUNC_EQUAL = 0,
            FUNC_NOT_EQUAL = 1,
            FUNC_GREATER_THAN = 2,
            FUNC_GREATER_THAN_EQUAL = 3,
            FUNC_LESS_THAN = 4,
            FUNC_LESS_THAN_EQUAL = 5,
            FUNC_MAX = 6,
        }
        enum Condition {
            COND_ALL = 0,
            COND_ANY = 1,
            COND_MAX = 2,
        }
    }
    class VisualShaderNodeCompare extends VisualShaderNode {
        set_comparison_type(type: VisualShaderNodeCompare.ComparisonType): void
        get_comparison_type(): VisualShaderNodeCompare.ComparisonType
        set_function(func: VisualShaderNodeCompare.Function): void
        get_function(): VisualShaderNodeCompare.Function
        set_condition(condition: VisualShaderNodeCompare.Condition): void
        get_condition(): VisualShaderNodeCompare.Condition
        type: number /*i64*/
        function: number /*i64*/
        condition: number /*i64*/
    }
    class VisualShaderNodeConstant extends VisualShaderNode {
    }
    namespace VisualShaderNodeCubemap {
        enum Source {
            SOURCE_TEXTURE = 0,
            SOURCE_PORT = 1,
            SOURCE_MAX = 2,
        }
        enum TextureType {
            TYPE_DATA = 0,
            TYPE_COLOR = 1,
            TYPE_NORMAL_MAP = 2,
            TYPE_MAX = 3,
        }
    }
    class VisualShaderNodeCubemap extends VisualShaderNode {
        set_source(value: VisualShaderNodeCubemap.Source): void
        get_source(): VisualShaderNodeCubemap.Source
        set_cube_map(value: Cubemap): void
        get_cube_map(): Cubemap
        set_texture_type(value: VisualShaderNodeCubemap.TextureType): void
        get_texture_type(): VisualShaderNodeCubemap.TextureType
        source: number /*i64*/
        cube_map: Cubemap
        texture_type: number /*i64*/
    }
    class VisualShaderNodeCubemapParameter extends VisualShaderNodeTextureParameter {
    }
    class VisualShaderNodeCurveTexture extends VisualShaderNodeResizableBase {
        set_texture(texture: CurveTexture): void
        get_texture(): CurveTexture
        texture: CurveTexture
    }
    class VisualShaderNodeCurveXYZTexture extends VisualShaderNodeResizableBase {
        set_texture(texture: CurveXYZTexture): void
        get_texture(): CurveXYZTexture
        texture: CurveXYZTexture
    }
    class VisualShaderNodeCustom extends VisualShaderNode {
        /* gdvirtual */ _get_name(): string
        /* gdvirtual */ _get_description(): string
        /* gdvirtual */ _get_category(): string
        /* gdvirtual */ _get_return_icon_type(): VisualShaderNode.PortType
        /* gdvirtual */ _get_input_port_count(): number /*i64*/
        /* gdvirtual */ _get_input_port_type(port: number /*i64*/): VisualShaderNode.PortType
        /* gdvirtual */ _get_input_port_name(port: number /*i64*/): string
        /* gdvirtual */ _get_input_port_default_value(port: number /*i64*/): void
        /* gdvirtual */ _get_default_input_port(type: VisualShaderNode.PortType): number /*i64*/
        /* gdvirtual */ _get_output_port_count(): number /*i64*/
        /* gdvirtual */ _get_output_port_type(port: number /*i64*/): VisualShaderNode.PortType
        /* gdvirtual */ _get_output_port_name(port: number /*i64*/): string
        /* gdvirtual */ _get_property_count(): number /*i64*/
        /* gdvirtual */ _get_property_name(index: number /*i64*/): string
        /* gdvirtual */ _get_property_default_index(index: number /*i64*/): number /*i64*/
        /* gdvirtual */ _get_property_options(index: number /*i64*/): PackedStringArray
        /* gdvirtual */ _get_code(input_vars: Array, output_vars: Array, mode: Shader.Mode, type: VisualShader.Type): string
        /* gdvirtual */ _get_func_code(mode: Shader.Mode, type: VisualShader.Type): string
        /* gdvirtual */ _get_global_code(mode: Shader.Mode): string
        /* gdvirtual */ _is_highend(): boolean
        /* gdvirtual */ _is_available(mode: Shader.Mode, type: VisualShader.Type): boolean
        _set_initialized(enabled: boolean): void
        _is_initialized(): boolean
        _set_input_port_default_value(port: number /*i64*/, value: any): void
        _set_option_index(option: number /*i64*/, value: number /*i64*/): void
        _set_properties(properties: string): void
        _get_properties(): string
        get_option_index(option: number /*i64*/): number /*i64*/
        initialized: boolean
        properties: string
    }
    namespace VisualShaderNodeDerivativeFunc {
        enum OpType {
            OP_TYPE_SCALAR = 0,
            OP_TYPE_VECTOR_2D = 1,
            OP_TYPE_VECTOR_3D = 2,
            OP_TYPE_VECTOR_4D = 3,
            OP_TYPE_MAX = 4,
        }
        enum Function {
            FUNC_SUM = 0,
            FUNC_X = 1,
            FUNC_Y = 2,
            FUNC_MAX = 3,
        }
        enum Precision {
            PRECISION_NONE = 0,
            PRECISION_COARSE = 1,
            PRECISION_FINE = 2,
            PRECISION_MAX = 3,
        }
    }
    class VisualShaderNodeDerivativeFunc extends VisualShaderNode {
        set_op_type(type: VisualShaderNodeDerivativeFunc.OpType): void
        get_op_type(): VisualShaderNodeDerivativeFunc.OpType
        set_function(func: VisualShaderNodeDerivativeFunc.Function): void
        get_function(): VisualShaderNodeDerivativeFunc.Function
        set_precision(precision: VisualShaderNodeDerivativeFunc.Precision): void
        get_precision(): VisualShaderNodeDerivativeFunc.Precision
        op_type: number /*i64*/
        function: number /*i64*/
        precision: number /*i64*/
    }
    class VisualShaderNodeDeterminant extends VisualShaderNode {
    }
    class VisualShaderNodeDistanceFade extends VisualShaderNode {
    }
    class VisualShaderNodeDotProduct extends VisualShaderNode {
    }
    class VisualShaderNodeExpression extends VisualShaderNodeGroupBase {
        set_expression(expression: string): void
        get_expression(): string
        expression: string
    }
    class VisualShaderNodeFaceForward extends VisualShaderNodeVectorBase {
    }
    class VisualShaderNodeFloatConstant extends VisualShaderNodeConstant {
        set_constant(constant: number /*f64*/): void
        get_constant(): number /*f64*/
        constant: number /*f64*/
    }
    namespace VisualShaderNodeFloatFunc {
        enum Function {
            FUNC_SIN = 0,
            FUNC_COS = 1,
            FUNC_TAN = 2,
            FUNC_ASIN = 3,
            FUNC_ACOS = 4,
            FUNC_ATAN = 5,
            FUNC_SINH = 6,
            FUNC_COSH = 7,
            FUNC_TANH = 8,
            FUNC_LOG = 9,
            FUNC_EXP = 10,
            FUNC_SQRT = 11,
            FUNC_ABS = 12,
            FUNC_SIGN = 13,
            FUNC_FLOOR = 14,
            FUNC_ROUND = 15,
            FUNC_CEIL = 16,
            FUNC_FRACT = 17,
            FUNC_SATURATE = 18,
            FUNC_NEGATE = 19,
            FUNC_ACOSH = 20,
            FUNC_ASINH = 21,
            FUNC_ATANH = 22,
            FUNC_DEGREES = 23,
            FUNC_EXP2 = 24,
            FUNC_INVERSE_SQRT = 25,
            FUNC_LOG2 = 26,
            FUNC_RADIANS = 27,
            FUNC_RECIPROCAL = 28,
            FUNC_ROUNDEVEN = 29,
            FUNC_TRUNC = 30,
            FUNC_ONEMINUS = 31,
            FUNC_MAX = 32,
        }
    }
    class VisualShaderNodeFloatFunc extends VisualShaderNode {
        set_function(func: VisualShaderNodeFloatFunc.Function): void
        get_function(): VisualShaderNodeFloatFunc.Function
        function: number /*i64*/
    }
    namespace VisualShaderNodeFloatOp {
        enum Operator {
            OP_ADD = 0,
            OP_SUB = 1,
            OP_MUL = 2,
            OP_DIV = 3,
            OP_MOD = 4,
            OP_POW = 5,
            OP_MAX = 6,
            OP_MIN = 7,
            OP_ATAN2 = 8,
            OP_STEP = 9,
            OP_ENUM_SIZE = 10,
        }
    }
    class VisualShaderNodeFloatOp extends VisualShaderNode {
        set_operator(op: VisualShaderNodeFloatOp.Operator): void
        get_operator(): VisualShaderNodeFloatOp.Operator
        operator: number /*i64*/
    }
    namespace VisualShaderNodeFloatParameter {
        enum Hint {
            HINT_NONE = 0,
            HINT_RANGE = 1,
            HINT_RANGE_STEP = 2,
            HINT_MAX = 3,
        }
    }
    class VisualShaderNodeFloatParameter extends VisualShaderNodeParameter {
        set_hint(hint: VisualShaderNodeFloatParameter.Hint): void
        get_hint(): VisualShaderNodeFloatParameter.Hint
        set_min(value: number /*f64*/): void
        get_min(): number /*f64*/
        set_max(value: number /*f64*/): void
        get_max(): number /*f64*/
        set_step(value: number /*f64*/): void
        get_step(): number /*f64*/
        set_default_value_enabled(enabled: boolean): void
        is_default_value_enabled(): boolean
        set_default_value(value: number /*f64*/): void
        get_default_value(): number /*f64*/
        hint: number /*i64*/
        min: number /*f64*/
        max: number /*f64*/
        step: number /*f64*/
        default_value_enabled: boolean
        default_value: number /*f64*/
    }
    class VisualShaderNodeFresnel extends VisualShaderNode {
    }
    class VisualShaderNodeGlobalExpression extends VisualShaderNodeExpression {
    }
    class VisualShaderNodeGroupBase extends VisualShaderNodeResizableBase {
        set_inputs(inputs: string): void
        get_inputs(): string
        set_outputs(outputs: string): void
        get_outputs(): string
        is_valid_port_name(name: string): boolean
        add_input_port(id: number /*i64*/, type: number /*i64*/, name: string): void
        remove_input_port(id: number /*i64*/): void
        get_input_port_count(): number /*i64*/
        has_input_port(id: number /*i64*/): boolean
        clear_input_ports(): void
        add_output_port(id: number /*i64*/, type: number /*i64*/, name: string): void
        remove_output_port(id: number /*i64*/): void
        get_output_port_count(): number /*i64*/
        has_output_port(id: number /*i64*/): boolean
        clear_output_ports(): void
        set_input_port_name(id: number /*i64*/, name: string): void
        set_input_port_type(id: number /*i64*/, type: number /*i64*/): void
        set_output_port_name(id: number /*i64*/, name: string): void
        set_output_port_type(id: number /*i64*/, type: number /*i64*/): void
        get_free_input_port_id(): number /*i64*/
        get_free_output_port_id(): number /*i64*/
    }
    class VisualShaderNodeIf extends VisualShaderNode {
    }
    class VisualShaderNodeInput extends VisualShaderNode {
        set_input_name(name: string): void
        get_input_name(): string
        get_input_real_name(): string
        input_name: StringName
        readonly input_type_changed: Signal
    }
    class VisualShaderNodeIntConstant extends VisualShaderNodeConstant {
        set_constant(constant: number /*i64*/): void
        get_constant(): number /*i64*/
        constant: number /*i64*/
    }
    namespace VisualShaderNodeIntFunc {
        enum Function {
            FUNC_ABS = 0,
            FUNC_NEGATE = 1,
            FUNC_SIGN = 2,
            FUNC_BITWISE_NOT = 3,
            FUNC_MAX = 4,
        }
    }
    class VisualShaderNodeIntFunc extends VisualShaderNode {
        set_function(func: VisualShaderNodeIntFunc.Function): void
        get_function(): VisualShaderNodeIntFunc.Function
        function: number /*i64*/
    }
}
