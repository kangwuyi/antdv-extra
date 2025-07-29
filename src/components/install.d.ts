import type { Component, Plugin } from 'vue';
export declare const withInstall: <T extends Component>(comp: T, name: string) => T & Plugin;
