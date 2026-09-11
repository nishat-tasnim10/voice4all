# A Simple React CRUD App

A small React frontend for user management, backed by the [node-express-api](../node-express-api). Users register, log in, view their profile, browse the user list, and add or delete users, with the session kept in an httpOnly JWT cookie.

### Features

- Login with cookie-based session (JWT stored in an httpOnly cookie, not accessible to JS)
- Register a new user
- View and update the logged-in user's profile
- Browse the full list of users
- Delete a user, with a confirmation modal before the request fires
- Route protection: `/profile` and `/users` require a session, `/login` redirects away if already logged in
- Toast notifications for success/error feedback (`react-hot-toast`)

### Tech stack

| Concern       | Package                         |
| ------------- | ------------------------------- |
| UI framework  | React 19                        |
| Build tool    | Vite                            |
| Routing       | React Router 7                  |
| HTTP client   | axios (`withCredentials: true`) |
| UI components | react-bootstrap + Bootstrap 5   |
| Notifications | react-hot-toast                 |

### Project structure

```
src/
  App.jsx                        route table
  Layout.jsx                     shared container + <Outlet /> wrapper
  main.jsx                       entry point
  components/
    NavBar.jsx                   top nav, shows Login or Logout based on auth state
    DeleteConfirmationModal.jsx  confirm-before-delete modal used on the Users page
  contexts/
    AuthContext.jsx              holds `user`, loads /users/profile on mount, exposes login/logout
  pages/
    Login.jsx                    login form
    Profile.jsx                  view/update the current user
    Users.jsx                    list users, trigger delete
    AddUsers.jsx                 registration form
  utils/
    axiosInstance.js             axios instance pointed at VITE_API_BASE_URL
    PrivateRoute.jsx             redirects to /login when there is no session
    PublicRoute.jsx              redirects /login to /profile when already authenticated
```

### How auth state works

`AuthProvider` (in `App` via `AuthContext.jsx`) calls `GET /users/profile` once on mount to check for an existing session cookie. While that request is in flight, `loading` is `true` and no children render. If it resolves, `user` is set and protected routes become reachable; if it fails, the app redirects to `/login`. `login()` and `logout()` call the corresponding API endpoints and update `user` accordingly — the JWT itself lives only in the httpOnly cookie set by the backend.

### How to run this project

- Clone the repository
- Go to the project directory
- Create a `.env` file
- Copy everything from the `.env.example` file
- Assign values
- Run `npm i` and then `npm run dev`
- To run this project in production mode, first build the project using `npm run build`, and then use `npm run preview` to run

The dev server runs on `http://localhost:5173` by default; make sure the backend's `ALLOWED_ORIGIN` matches it for the credentialed requests to work.

### Environment variables

| Variable            | Description                                                                                                                     |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `VITE_API_BASE_URL` | Base URL of the backend API, e.g. `http://localhost:4000/api`. Used as `axios`'s `baseURL`, so every request is relative to it. |

`.env` is gitignored; only `.env.example` is committed.

### Linting

```bash
npm run lint
```
