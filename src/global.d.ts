/// <reference types="webpack/module" />

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}