
# React/Typescript To Do App

## To install dependencies

```
npm install
```

## To run the app

```
npm run dev
```

## To run the unit tests

```
npm run test
```

## To run the e2e tests

```
npm run e2e
```

## Features
- Create ToDo assigned to user: title, description, user  	
- ToDos have a status (backlog, inProgress, completed), and can drag+drop between columns to update status

## User Stories
- User view a ToDos interface with columns for each status ['backlog, 'in-progress', 'completed']
- User can add a ToDo to the backlog
- User can drag-and-drop between columns to change the status

## APIs 
- `/getTodos`
- `/getUsers`
- `/create`
- `/update`

## Technical Requirements / Boilerplate
- Latest version of React + Vite builder
- Eslint - AirBnb
- Prettier
- Typescript 
- Unit Testing (Vitest, React Testing Library)
- MSW (Mock Service Worker)
- E2E Testing (playwright)

## Implementation Steps
1. Layout /UI 
2. Data Flow In App
3. Quick Unit Test
4. API (mocking)
5. E2E test

## Still to do
- Fix form styling
- Clear form after submit
- Check for 404 in service worker mocking
- On Success | Fail, show a notification
