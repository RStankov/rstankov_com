type IPaths =
  | '/'
  | '/about'
  | '/appearances'
  | 'https://blog.rstankov.com'
  | 'https://github.com/rstankov'
  | 'https://mastodon.social/@rstankov'
  | 'https://producthunt.com/@rstankov'
  | 'https://rstankov.com'
  | 'https://twitter.com/rstankov'
  | 'https://www.howtographql.com'
  | 'https://www.howtographql.com/graphql-ruby/0-introduction/'
  | 'https://www.linkedin.com/in/radoslavstankov/'
  | `http://${string}`
  | `https://${string}`;

export default IPaths;
