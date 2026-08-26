declare module '*.graphql' {
  const content: string;
  export default content;
}

declare module '*.css';

declare type ObjectConstructor = {
  keys<T>(o: T): (keyof T)[];
};
