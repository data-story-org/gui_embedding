# React app using data-story as component

## Overview

![image info](./screenshots/embedded_data_story_overview.png)

## Test example

```sh
git clone https://github.com/data-story-org/gui_embedding.git && cd gui_embedding/react_typescript_app
yarn
yarn start
```

## Base usage in react app

1. Add data-story-org/gui to project dependencies

```json
{
  "dependencies": {
    ...,
    "@data-story-org/gui": "^0.0.22"
    ...,
  }
}
```

2. Disable React.StrictMode in app render-er

```typescript
// So instead of that
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// Use this
ReactDOM.render(<App />, document.getElementById("root"));
```

3. Import styles

```typescript
import "@data-story-org/gui/lib/styles/app.css";
```

4. Import and use DataStory component

```typescript
import { DataStory } from "@data-story-org/gui";

const someComponent = () => {
  return <DataStory />;
};
```
