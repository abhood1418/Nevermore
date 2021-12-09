# Nevermore
An App for writers to meet, share, compete, and inspire one another as well as host collections of their own creations.

# Table of Contents

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

**Nevermore** is an App for writers to meet, share, compete, and inspire one another as well as host collections of their own creations. It was developed with the intention of giving writers a dedicated and safe place to hone their craft and receieve constructive feedback. 


<br>

## MVP

The **Nevermore** MVP includes: 

#Server (Back End)
- Build a Ruby on Rails server, exposing RESTful JSON endpoints.
- Build database with at least 2 tables:
  - With at least 1 association between both tables. 
- Utilize Rails to define models for interacting with the database.
- Implement working generic controller actions for Full CRUD (index, show, create, update, delete) between non-User tables.

#Client (Front End)
- Have a working, interactive React app.
- Have at least 8 separate, rendered components in an organized and understandable React file structure.
- Utilize functional or class React components appropriately.
- Utilize state and props in your components efficiently.
- Use only React for DOM Manipulation.
- Consume data from created Ruby on Rails API, and render that data in components.
- Utilize React Router, for client-side routing.
- Demonstrate Full CRUD actions ( index, show, create, update, and delete ) on the front end.

#Styling (Front End)
- Be styled with CSS (or SCSS, if you'd prefer).
- Use Flexbox or Grid in your layout design.
- Implement 2 media queries for responsive design on 3 screen sizes (including desktop).

<br>

### Goals

- Establish a fully working Ruby on Rails Back End for MVP functionality.
- Establish a link between React front end with back end to display data.
- Create an alluring and fun UI/UX for users.
- Polish the app for availability on multiple screens.
- Create a User Authentication and Verification process.

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Used for client side Front End rendering.  |
|   React Router   | For seemless transitions between pages.    |
|   Unannounced    |               Unannounced                  |
|   Unannounced    |               Unannounced                  |
|   Unannounced    |               Unannounced                  |

<br>

### Client (Front End)

#### Wireframes

- Desktop Landing

![Screen Shot 2021-12-09 at 2 37 23 PM](https://user-images.githubusercontent.com/91752553/145464103-d3ec9648-d157-4e78-98d5-c2c4f6d1ab46.png)

- Resource Index

![Screen Shot 2021-12-09 at 2 39 20 PM](https://user-images.githubusercontent.com/91752553/145464337-0aa90d16-c121-4bd4-81c8-8a8e517073e9.png)

- Resource Show

![Screen Shot 2021-12-09 at 2 39 47 PM](https://user-images.githubusercontent.com/91752553/145464426-b3ae0179-b1e5-4061-a645-b74e6070e1d9.png)

- Mobile Resource Index

![Screen Shot 2021-12-09 at 2 40 35 PM](https://user-images.githubusercontent.com/91752553/145464542-67934cff-db07-4495-a590-7b8f41a9b887.png)


#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. Include a link to your component tree

![Screen Shot 2021-12-09 at 2 41 38 PM](https://user-images.githubusercontent.com/91752553/145464638-709a9098-3187-4991-a9a8-17e5e14d07b5.png)

#### Component Architecture

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
|__ services/

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

![Screen Shot 2021-12-09 at 2 33 53 PM](https://user-images.githubusercontent.com/91752553/145463647-202bbdea-e747-45fd-b69c-da830bd539f8.png)

<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
