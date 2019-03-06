# How to Run this App
  * Clone repository.
  * Run `npm install` or `yarn install`.
  * Run `npm run dev` or `yarn run dev`.
  * Run `npm test` or `yarn test`.
  * Serve `index.html` using `live-server` or similar.

# Objectives
  * Learn to use Redux Thunk.

# Requirements
We need `node` & `npm`, as well as packages `live-server` and `eslint` installed _globally_. VSCode's `eslint` extension is recommended. Command line commands are run inside the project folder. This guide uses npm but should work the same using yarn.

# Steps

## Necessary enppoints
  * We need working enpoints on mockable.io or similar:
  * GET /quotes endpoint, serving quotes:
    ```javascript
      [
        {
          "id": "7b3f21c5-ff79-4982-b3b7-397ac4a7344b",
          "author": "Dr. Seuss",
          "text": "Don't cry because it's over, smile because it happened."
        },
        {
          "id": "48ec2a41-1c67-49f4-ba14-a49907ef02ce",
          "author": "Frank Zappa",
          "text": "So many books, so little time."
        },
        {
          "id": "ee0315da-f2af-40d4-8990-7097e28a08c4",
          "author": "Oscar Wilde",
          "text": "Be yourself; everyone else is already taken."
        }
      ]
    ```
  * POST /quotes endpoint, expecting this request body:
    ```javascript
      {
        "author": "Gabriel",
        "text": "Postman first."
      }
    ```
  * and returning the newly created quote:
    ```javascript
      {
          "id": "86332fbe-2d02-4a16-afb0-9b7f0a67d324",
          "author": "Gabriel",
          "text": "Postman first."
      }
    ```
  * DELETE /quotes/{id}, expecting an id param of the quote to be deleted
  * and returning an object containing the id of the deleted quote:
    ```javascript
      {
          "id": "{{id}}",
      }
    ```

## Steps
  * Students should test the endpoints on Postman.
  * Walk students through the structure of the project.
  * Walk students through `App.jsx` to see how `redux-thunk` is plugged in.
  * Show students the action types related to the spinner inside .
  * Have students build a reducer for `spinner` slice of state.
  * Have students include the new reducer in the redux store.
  * Ask students to fix the `Spinner` component (needs CSS and connecting to the store).
  * Get to work on the async action creators.