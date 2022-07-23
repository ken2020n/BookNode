# BookNode

Welcome to BookNode!

## Introduction

This application was created during my time as a student at [Code Chrysalis](https://www.codechrysalis.io/).

## API Reference

### User

- POST `/register`
  - To create a new user
- POST `/login`
  - To verify the password and get user information
- GET `/user/:id`
  - To get specific user by user ID
- PATCH `/user`
  - To update the user information
- DELETE `/user`
  - To delete user

### Book

- POST `/book/create`
  - To create a new book for doing the tasks
- GET `/books/:userId`
  - To get all books by specific user
- GET `/book/:id`
  - To get specific book by book ID
- PATCH `/book/update`
  - To update the book information
- DELETE `/book/delete/:id`
  - To delete book by book ID

### Task

- POST `/task/create`
  - To create a new task with begin page & begin time for specific book
- GET `/task/:bookId`
  - To get all tasks by specific book ID
- GET `/task/:id`
  - To get specific task by task ID
- PATCH `/task/update`
  - To update the task  with end page & end time(finish the task)
- DELETE `/task/delete/:id`
  - To delete task by task ID
