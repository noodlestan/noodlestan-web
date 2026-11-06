/**
 * Resolves a `{@link …}` target expression to its rendered text and docs
 * href; consumers build it from their own meta service and route helpers.
 */
export type DocsResolveLink = (target: string) => { text: string; href: string } | undefined;
