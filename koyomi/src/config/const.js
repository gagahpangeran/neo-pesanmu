const { REACT_APP_GRAPHQL: GRAPHQL, REACT_APP_SENTRY: SENTRY } = process.env;

console.log(SENTRY, GRAPHQL);

export { GRAPHQL, SENTRY };
