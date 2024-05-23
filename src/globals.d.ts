export { };

declare global {
  interface CustomJwtSessionClaims {
    name?: string | undefined;
  }
}
