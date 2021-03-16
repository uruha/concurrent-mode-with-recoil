# React, Concurrent mode with Recoil

## Inspiration
- [React - Concurrent UI Patterns](https://reactjs.org/docs/concurrent-mode-patterns.html)
- [Recoil - Asynchronous Data Queries](https://recoiljs.org/docs/guides/asynchronous-data-queries/)

We considered whether Recoil's data fetch implementation could be combined with React's concurrent mode (Render-as-You-Fetch).

## Data fetch and Rendering timing flow
1. External Api: Get external api
2. Adapter: Make the return value of the external API consistent with the value you want to use in the application (use Recoil's selector)
3. Fetcher: Combine adapters as one resource (as Redux's combineReducer method)
4. Initialize Fetcher: Start getting resources before rendering
5. `<Component />` under `<Suspense />` read resources: Read the acquired resource
