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

![Screen Shot 2021-12-15 at 4 22 58 PM](https://user-images.githubusercontent.com/91752553/146267052-d70ac8d5-a147-4ae2-b645-c78c1d415e7f.png)


- Resource Index

![Screen Shot 2021-12-09 at 4 28 13 PM](https://user-images.githubusercontent.com/91752553/145478458-306fbb2c-2855-423c-8c77-c1a6b2f3ff54.png)

- Resource Show

![Screen Shot 2021-12-09 at 4 28 22 PM](https://user-images.githubusercontent.com/91752553/145478501-eb8f218e-a481-4eaf-b881-ceca777e78d8.png)

- Mobile Resource Index

![Screen Shot 2021-12-09 at 4 23 28 PM](https://user-images.githubusercontent.com/91752553/145490116-d66c95f3-525e-44dd-b37c-e6899d41fa34.png)

#### Component Tree

![Screen Shot 2021-12-09 at 4 29 41 PM](https://user-images.githubusercontent.com/91752553/145478616-c5ed7dff-c368-472b-a5ff-a9e4ea436963.png)


#### Component Architecture

``` structure

src
|__ assets/
      |__ images
|__ Css/
      |__ component-css
          |__ Layout.css
          |__ MainContainer.css
          |__ FlipBook.css
          |__ Quote.css
          |__ InfoCards.css
          |__ DisplayTome.css
          |__ Benefits.css
          |__ BookModel.css
          |__ TomeDetail.css
          |__ EditForm.css
          |__ CreateFrom.css
          |__ Hamburger.css
       |__ screens-css
          |__ Home.css
          |__ TomeLibrary.css
          |__ TomeDetail.css
          |__ EditTome.css
          |__ CreateTome.css
          |__ Register.css
          |__ SignIn.css
|__ components/
      |__ Layout.jsx
      |__ MainContainer.jsx
      |__ FlipBook.jsx
      |__ Quote.jsx
      |__ InfoCards.jsx
      |__ DisplayTome.jsx
      |__ Benefits.jsx
      |__ BookModel.jsx
      |__ TomeDetail.jsx
      |__ EditForm.jsx
      |__ CreateFrom.jsx
      |__ Hamburger.jsx
|__ services/
      |__ apiConfig.jsx
|__ screens/
      |__ Home.jsx
      |__ TomeLibrary.jsx
      |__ TomeDetail.jsx
      |__ EditTome.jsx
      |__ CreateTome.jsx
      |__ Register.jsx
      |__ SignIn.jsx

```

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add User Auth.      |    H     |     4 hrs      |      4 hrs    |     4 hrs   |
| Create CRUD Actions |    H     |     3 hrs      |      6 hrs    |     6 hrs   |
| Create Forms        |    H     |     8 hrs      |      1 hr     |     1 hr    |
| Create Layout       |    M     |     3 hrs      |      1 hr     |     1 hr    |
| Book Model          |    H     |     2 hrs      |      1 hr     |     1 hr    |
| Tome Detail         |    H     |     3 hrs      |      2 hrs    |     2 hrs   |
| Flip Book           |    L     |     3 hrs      |      3 hrs    |     3 hrs   |
| Quote               |    L     |     2 hrs      |      1 hr     |     1 hr    |
| Info Cards          |    L     |     4 hrs      |      2 hrs    |     2 hrs   |
| Display Tome        |    L     |     3 hrs      |      3 hrs    |     3 hrs   |
| Benefits            |    L     |     2 hrs      |      1 hr     |     1 hr    |
| Media Query         |    M     |     3 hrs      |      3 hrs    |     3 hrs   |
| Styling             |    M     |     8 hrs      |      10 hrs   |     10 hrs  |
| TOTAL               |          |     54 hrs     |      38 hrs   |     38 hrs  |


<br>

### Server (Back End)

#### ERD Model

![Screen Shot 2021-12-09 at 1 59 12 PM](https://user-images.githubusercontent.com/91752553/146266311-861ccb54-0860-4f45-881a-16a70ef6db9d.png)

<br>

***

## Post-MVP

- Add Likes Table.
- Add Comments Table.
- Create user select for App theme options.
- Customizable Tome Options.
- Add User Page with Tome Library Creation (allow users to collect works as parts of Tomes and produce multiple Tomes).
- Create Follower Feed & Explore Feed. 
- Store Rich Text, IMG, & MP4 data. 
- Create Contest Section.

***

## Code Showcase

```
render json: @posts, include: {user: {only: [:username, :id]}}
```
Rending associations from backend to front end by associating the username to a post. 

## Code Issues & Resolutions

- Problem: Rending associations of user to post. Resolution (see above): Creating association on back-end. 
- Problem: Utliizing Codepen resources. Resolution: Installing SCSS/SASS stylesheets into Client. 

## Credits
- Amit Sheen, Turning pages with CSS, https://codepen.io/amit_sheen/pen/WNweryv
- Dhanish, CSS Only Flipping Book, https://codepen.io/dhanishgajjar/pen/bjaYYo
- Thea, George Orwell #CodepenChallenge, https://codepen.io/HighFlyer/pen/LaXrgV
