# TaskTrackerBackEnd
To set up this repo, you have to set up Posgresql firts on your device

# you may need to install these dependencies 
  npm i --save express
  npm i pg
  npm i nodemon 
  npm i cors

# set up your database (Postgressql)

You may create a new database by the name of tracker of keep on default database "postgres"
in my case i kept the defult one, if you would like to change the database then ensure to modify the code at db.js folder

connect to your server in postgres then creat new table by the name of tasks
  \c tracker
  CREATE TABLE tasks (id SERIAL PRIMARY KEY, task VARCHAR(255), day VARCHAR(255), reminder BOOLEAN);
  ![image](https://user-images.githubusercontent.com/86645986/231710307-ff33c57d-9a59-431f-885c-e9d64c79cccd.png)


# Ensure the Pool object intilization at db.js is correct
  const pool = new Pool({
  
    host: "localhost",
    user: "postgres",      //you may change the user if you have different username
    port: "5432",          //you may change the port based on your database setup
    password: "02589",     //you may change the password based on your database setup
    databases: "postgres", //you may change the database based on your database setup

  })

![image](https://user-images.githubusercontent.com/86645986/231710482-5cf92093-12c6-49ff-a23c-5d0c8e68ec03.png)


# Run ther server by running the below command
  npm run devStart  
  
# Test the connection at postman buy running below lines
  GET localhost:3000/api/v1/tasks/
  POST localhost:3000/api/v1/tasks/
  DELETE localhost:3000/api/v1/tasks/:id  //insert an id from what you get on get request
  PUT localhost:3000/api/v1/tasks/:id     //insert an id from what you get on get request
  
  ![image](https://user-images.githubusercontent.com/86645986/231710719-40cb3114-9926-4a5e-9120-4bcec8d0f91f.png)


# If all alright you may download the front repository and run it in you
  https://github.com/ObeidSalem/NGTrainingProjects
