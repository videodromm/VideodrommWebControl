/// <reference path="./bridge.d.ts" />

declare module VideodrommWebControl {
    export interface App {
    }
    export interface AppFunc extends Function {
        prototype: App;
        new (): App;
        main(): void;
    }
    var App: AppFunc;
}