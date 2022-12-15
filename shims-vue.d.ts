/*该文件是为了解决 
Cannot find module './App.vue' or its corresponding type declarations.
报错的问题 
*/

declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare type Recordable<T = any> = Record<string, T>;
