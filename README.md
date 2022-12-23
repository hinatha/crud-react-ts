# 1. Project overview

## (1)App Features

This app is able to use below function.

User story

- You can add todo.
- You can see todos.
- You can delete todo.
- You can edit todo.

## (2)Project Structure

```bash
.
├── .gitignore
├── README.md
├── package-lock.json
├── package.json
├── public
│   └── index.html
├── src
│   ├── App.tsx
│   ├── clients
│   │   ├── RepositoryFactory.ts
│   │   └── TodoClient
│   │       ├── index.ts
│   │       ├── mock.ts
│   │       └── types.ts
│   ├── components
│   │   ├── AsyncTodos.tsx
│   │   ├── ErrorFallback.tsx
│   │   └── TodoItem.tsx
│   ├── css
│   │   └── TodoItem.css
│   ├── hooks
│   │   └── useTodoList.ts
│   ├── index.tsx
│   ├── providers
│   │   └── TodosProvider.tsx
│   ├── router
│   │   └── RouterConfig.tsx
│   ├── types
│   │   └── index.ts
│   └── views
│       ├── AddTodo.tsx
│       ├── App.tsx
│       └── EditTodo.tsx
├── tsconfig.json
└── yarn.lock

11 directories, 24 files
```

# 2. Usage

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn mock`

Runs the app in the mock mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
