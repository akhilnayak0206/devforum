# DevForum

This is a website for developers to share post, find other developers or ask questions from developers.  
This is a **MERN** project hosted with the help of **heroku**.  
The Back End is made using **NodeJS & ExpressJS** using **MongoDB** as database.  
The Front End is made using **ReactJS & Redux** for state management.

## Quick Start

```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install

# Run both Backend & Frontend from root
npm run dev
```

## Packages Installed

### These are the list of packages used in Back End

- express
- express-validator
- mongoose
- bcryptjs
- config
- jsonwebtoken
- gravatar
- request

**Express** is used with NodeJS to divert users to different parts of the web applications based on the request made.  
**Mongoose** represents a much cleaner interface for querying MongoDB.  
**Express-validator** is used to validate inputs.  
**BcryptJS** is used to encrypt password.  
**Config** is a set of default parameters, and extend them for different deployment environment.  
**jsonwebtoken** is used to create web token for access to database.  
**Gravatar** is used to get their profile pics from gravatar.  
**Request** is used to make https calls. It is used in this project to get repositories of user from OAuth GitHub API.

**Note:** _body-parser is not used since it is provided by express._

### These are the list of packages used in Front End

- react
- react-router-dom
- redux
- react-redux
- redux-thunk
- redux-devtools-extension
- axios
- moment
- react-moment
- uuid

**React** is a JavaScript library for building user interfaces.  
**react-router-dom** is used for routing.  
**redux** is used for state management.  
**react-redux** subscribes to the Redux store, checks to see if the data your component wants has changed, and re-renders your component.  
**redux-thunk** is used to write action creators that return a function instead of an action.  
**redux-devtools-extension** is used to copy the text to the clipboard.  
**axios** is used to make request like post, get, put, delete, etc.  
**moment** is used for parsing and validating dates.  
**react-moment** is used to format dates.  
**uuid** is used to generate random RFC4122 id.

**Note:** _redux-devtools-extension is turned on even in the hosted site. If you want you can turn it off by removing the composeWithDevTools in store.js inside client/src._

## Project Info

### Author

> Akhil Nayak

### License

> This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License.

### Special Thanks

Thanks Brad Traversy for helping me with NodeJS, ExpressJS, MongoDB and Mongoose.  
Thanks Safar Safarov from Unsplash for background image on Landing page.

#### If you have any suggestion or doubt do let me know

#### ThankYou.Peace
