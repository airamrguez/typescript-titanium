/*
   Typescript Titanium - info-text
   Typescipt-Titanium may be freely distributed under the MIT license.
   This source code was auto-generated (Sat Sep 26 2015 13:54:58 GMT-0400 (EDT)}}).
   More information at https://github.com/alvivi/typescript-titanium.
 */
interface IAlloyControllerUI {
    create (apiName : string, opts : any) : void;
}
interface IAlloyController {
    UI : IAlloyControllerUI;
    addClass (proxy : any, classes : any[], opts? : any) : void;
    addListener (proxy : any, type : string, callback : (...args : any[]) => any) : void;
    createStyle (opts : any) : void;
    destroy () : void;
    getListener (proxy? : any, type? : string) : void;
    getTopLevelViews () : void;
    getView (id? : string) : void;
    getViews () : void;
    removeClass (proxy : any, classes : any[], opts? : any) : void;
    removeListener (proxy? : any, type? : string, callback? : (...args : any[]) => any) : void;
    resetClass (proxy : any, classes? : any[], opts? : any) : void;
    updateViews (args : any) : void;
}
interface IAlloyCollections {
    instance (name : string) : void;
}
interface IAlloyModels {
    instance (name : string) : void;
}
interface IAlloy {
    Controller : IAlloyController;
    Collections : IAlloyCollections;
    Models : IAlloyModels;
    CFG : any;
    Globals : any;
    isHandheld : boolean;
    isTablet : boolean;
    createCollection (name : string, args? : any) : void;
    createController (name : string, args? : any) : void;
    createModel (name : string, args? : any) : void;
    createWidget (id : string, name? : string, args? : any) : void;
}
interface IAlloyStyleDict {
    apiName : string;
    classes : any[];
    id : string;
}
interface ITrackedEventListener {
    handler : (...args : any[]) => any;
    id : string;
    type : string;
    view : any;
}
interface IWidget {
    createCollection (name : string, args? : any) : void;
    createController (name : string, args? : any) : void;
    createModel (name : string, args? : any) : void;
    createWidget (id : string, name? : string, args? : any) : void;
}
declare var Alloy : IAlloy;
declare var AlloyStyleDict : IAlloyStyleDict;
declare var TrackedEventListener : ITrackedEventListener;
declare var Widget : IWidget;

