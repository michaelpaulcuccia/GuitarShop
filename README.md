# next_system

## DESCRIPTION

This project showcases an assortment of bass and electric guitars which can be viewed collectively, under their respective categories, and individually with a more detailed view.

All information about bass and electric guitars, except for images, is stored in MongoDB. Image data is returned as a string that maps to the actual images located in the '/public' directory.

User data is not stored, and user 'authentication' is handled solely through HTML validation. I chose to forgo a backend authentication strategy to concentrate on frontend development. User login is managed using React Context and Windows Session to maintain login status and cart items. Upon logout, the session data is cleared.

Viewing the cart depends on whether or not a user is logged in, and if a user is logged in, the cart must contain at least one item. Items in the cart can be deleted.

## DESIGN AND ASSETS

This project was designed "free hand". While I did find some inspiration from other websites, there was no design pattern or template that I followed. Images were copied from several online music stores, and icons are from React-Icons.

## GOALS

I wanted to showcase my skills as a frontend developer while displaying my abilities to work on some backend/server features such as a Database and APIs.

## WISHLIST

One of the biggest challenges was the balance between doing too much, and doing too little. Some of the things I would like to do if I had more time would be:

- Set up third-party Authentication.
- Store user data in the database.
- Select a design system or template to maintain a consistent theme.

## INSTALLATION

- Node.js version >= v18.17.0 is required
