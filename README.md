# Job Listings React

## Another [Frontend Mentor](https://www.frontendmentor.io/home) challenge implemented in [React](https://reactjs.org/)

This is my second Frontend Mentor challenge implemented using React.
The [Job Listings](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt) challenge is listed at intermediate level.

### Motivation

As usual, simply for educational purposes.

### Tools

React, NodeJS, HTML, CSS, GH-Pages

### Lessons

- This challenge turned out to be fairly simple. The only hiccup presented itself when batching multiple setState's, as the filter state wasn't yet set when filtering the listing state. I fixed it by nesting the listing state update inside of the filter's. I do not know if this is how it should be done, but it is functional and React isn't complaining.

- I did much better this time with component planning, both for the responsive layout and props, foregoing the useContext hook that provides easy state access. There were several levels of prop drilling for state handlers, but I assume that is unavoidable.

- I am not entirely clear on the intended funcionality of the filtering mechanism, as Frontend Mentor doesn't describe functionality in it's challenge documentation, unless I've simply missed that in each challenge. I briefly considered adding a 'potential filters' component to the page, but figured if that was inended it would've been shown in the design images. At any rate, it now functions as one would deduce from examining the 'active states in the challenge materials (presumably).
