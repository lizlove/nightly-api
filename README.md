# Nightly API
[nightlyreview.org](http://www.nightlyreview.org/)

The API Reference below describes each available resource in the Nightly API. Learn about parameters, errors, and how to format your requests.

## API Overview

| HTTP Method | Endpoint             | Function                 | Body         |
| ----------- |:--------------------:| ------------------------:| ------------:|
| POST        | `/v1/login`          | login, set cookie        | email, pass  |
| DELETE      | `/v1/logout`         | destroys session         |              |
| POST        | `/v1/password/forgot`| send pass reset email    | email        |
| POST        | `/v1/password/reset` | reset password           | email        |
| POST        | `/v1/signup`         | create user object       | user object  |
| GET         | `/v1/:uid/reviews`   | returns all user reviews |              |
| GET         | `/v1/:uid/review/:id`| returns a single review  |              |
| POST        | `/v1/:uid/review`    | creates a review object  | review object|
| PUT         | `/v1/:uid/review/:id`| updates a review object  | review object|
| GET         | `/v1/user/:uid`      | returns user object      |              |
| PUT         | `/v1/user/:uid`      | updates a user object    | user object  |


## About Nightly

Nightly is a tool for drafting personal inventories and sharing them with an accountability partner. Check it out at:
[nightlyreview.org](http://www.nightlyreview.org/)

The original Nightly app was a built in Ruby on Rails. An archival version can be viewed [on Heroku.](http://protected-shelf-7462.herokuapp.com/)

## Thanks

Nightly API was built and is maintained by [Elizabeth Lovero](http://www.elizabethlovero.com/) and [Hannah Nordgren](http://hereshannahs.info/) with motivational support from [Lenny](https://www.instagram.com/lillenlen/).
