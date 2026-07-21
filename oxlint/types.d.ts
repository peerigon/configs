declare module "picomatch" {
  type Matcher = (test: string) => boolean;

  function picomatch(
    glob: string | string[],
    options?: Record<string, unknown>,
  ): Matcher;

  export default picomatch;
}
