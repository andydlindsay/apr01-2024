# W05D05 - Mid-term Project Kickoff

### The Why?
* reinforce everything you've learned
* practice working as a team

### Pick a Project

### User Stories
* describe what a user can do
* As a _____, I can ______, because _______

As a logged in user, I can see a list of available maps, because I'm interested in things in my area
As a logged in user, I can add many points to a map, because I want to share things in my area
As a non-logged in user, I cannot edit points on a map, because it doesn't belong to me

planning/user-stories.md

### Nouns
* become tables
* ERD
* lowest fidelity possible

planning/erd.png
planning/erd-stretch.png

### Routes
* BREAD
* RESTful routes

Browse  GET   /users
Read    GET   /users/:id
Edit    POST  /users/:id
Add     POST  /users
Delete  POST  /users/:id/delete

planning/routes.md
planning/routes-stretch.md

### MVP
* Minimum Viable Product
* @KV Minimum Viable Demo (MVD)
* if you're not gonna show it, don't build it

### Wireframes/Mockups
* steal your designs

### User Registration and Login
* don't do it

```js
// http://localhost:8080/login/5
app.get('/login/:id', (req, res) => {
  // plaintext cookies
  res.cookie('userId', req.params.id);

  // encrypted cookies
  req.session.userId = req.params.id;

  // redirect the user
  res.redirect('/home');
});
```

### Tech Choices
* Frontend - HTML, CSS, JS, jQuery, SCSS, bootstrap, tailwind
* Backend - Express, Node, Postgres

Create the SCSS version in styles (layout.scss)
Add a link tag to the HTML for the CSS version (layout.css)
Middleware will find layout.scss and turn it into layout.css
Put it into the public directory

### SPA vs multipage (MPA)
* these are not mutually exclusive

### Splitting up the work
* vertical => each person gets a piece of FE, BE, and DB
* horizontal => each person works on only the FE, BE, or DB
* pair programming

### Communication
* midterm-scrum
















