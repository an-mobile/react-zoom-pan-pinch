import { BoundsType, LibrarySetup, PositionType, VelocityType, AnimationType, ReactZoomPanPinchProps, ReactZoomPanPinchState, ReactZoomPanPinchRef } from "../models";
type StartCoordsType = {
    x: number;
    y: number;
} | null;
export declare class ZoomPanPinch {
    props: ReactZoomPanPinchProps;
    mounted: boolean;
    transformState: ReactZoomPanPinchState;
    setup: LibrarySetup;
    observer?: any;
    onChangeCallbacks: Set<(ctx: ReactZoomPanPinchRef) => void>;
    onInitCallbacks: Set<(ctx: ReactZoomPanPinchRef) => void>;
    wrapperComponent: HTMLDivElement | null;
    contentComponent: HTMLDivElement | null;
    isInitialized: boolean;
    bounds: BoundsType | null;
    previousWheelEvent: WheelEvent | null;
    wheelStopEventTimer: ReturnType<typeof setTimeout> | null;
    wheelAnimationTimer: ReturnType<typeof setTimeout> | null;
    isPanning: boolean;
    startCoords: StartCoordsType;
    lastTouch: number | null;
    distance: null | number;
    lastDistance: null | number;
    pinchStartDistance: null | number;
    pinchStartScale: null | number;
    pinchMidpoint: null | PositionType;
    doubleClickStopEventTimer: ReturnType<typeof setTimeout> | null;
    velocity: VelocityType | null;
    velocityTime: number | null;
    lastMousePosition: PositionType | null;
    animate: boolean;
    animation: AnimationType | null;
    maxBounds: BoundsType | null;
    pressedKeys: {
        [key: string]: boolean;
    };
    constructor(props: ReactZoomPanPinchProps);
    mount: () => void;
    unmount: () => void;
    update: (newProps: ReactZoomPanPinchProps) => void;
    initializeWindowEvents: () => void;
    cleanupWindowEvents: () => void;
    handleInitializeWrapperEvents: (wrapper: HTMLDivElement) => void;
    handleInitialize: (contentComponent: HTMLDivElement) => void;
    onWheelZoom: (event: WheelEvent) => void;
    onPanningStart: (event: MouseEvent) => void;
    onPanning: (event: MouseEvent) => void;
    onPanningStop: (event: MouseEvent | TouchEvent) => void;
    onPinchStart: (event: TouchEvent) => void;
    onPinch: (event: TouchEvent) => void;
    onPinchStop: (event: TouchEvent) => void;
    onTouchPanningStart: (event: TouchEvent) => void;
    onTouchPanning: (event: TouchEvent) => void;
    onTouchPanningStop: (event: TouchEvent) => void;
    onDoubleClick: (event: MouseEvent | TouchEvent) => void;
    clearPanning: (event: MouseEvent) => void;
    setKeyPressed: (e: KeyboardEvent) => void;
    setKeyUnPressed: (e: KeyboardEvent) => void;
    isPressingKeys: (keys: string[]) => boolean;
    setTransformState: (scale: number, positionX: number, positionY: number) => void;
    setCenter: () => void;
    handleTransformStyles: (x: number, y: number, scale: number) => string;
    applyTransformation: () => void;
    getContext: () => ReactZoomPanPinchRef;
    /**
     * Hooks
     */
    onChange: (callback: (ref: ReactZoomPanPinchRef) => void) => () => void;
    onInit: (callback: (ref: ReactZoomPanPinchRef) => void) => () => void;
    /**
     * Initialization
     */
    init: (wrapperComponent: HTMLDivElement, contentComponent: HTMLDivElement) => void;
}
export {};
