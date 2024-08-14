![alt text](https://www.pabau.com/wp-content/uploads/elementor/thumbs/download-pq3fsnaitgyylurbfryzighm46y9be58loymts4eok.png "Pabau CRM Logo")

Pabau Kosovo L.L.C - Tasklist for internship April 2024
====

In this repo you can find a project that is split between Backend, and Frontend folder; 

Our backend is using Expressjs, and a MySQL database;

Our frontend is using Nextjs. 

This repo uses a docker-compose.yml file to launch the project in your local environment that means you must have Docker installed
and running before attempting the start the local environment for work; [Download Docker Here](https://www.docker.com/products/docker-desktop/)

## Instructions to start the local environment

* Establish a GitHub account
* Make sure your Git name is: Name Surname
* Make sure your Git email is the same one that you have applied with for the internship
* Clone the repo dev-tasklist
* Ensure that you have Docker running
* Open a bash terminal and go to the cloned repo dev-tasklist, now, you can start your local environment using this command:

```docker-compose up --build```

This command will launch the services for: mysql, backend, frontend, and phpmyadmin. 

Your backend that powers your API calls is located at port 5000, and can be used inside of your frontend app with http://host.docker.internal:5000 base url.

Once you have confirmed your services are up and running, you can visit localhost:3000 to view your frontend, and this is where the task begins.

## Task requirements

  
    Task 1: (read)
    Create a component that will list all of bookings as separate links - showing like: 
    A Booking on [date] starting at [start_time]
    These links, if clicked, they should lead to another page example: /booking/[id]: and inside this page you will display the information:
    This Booking is with [doctor_name] For [service] and it ends on [end_time], You will also leave a Back button, allowing you to go back to the homepage.

    Task 2: (write)
    Create a page that will allow the user to use a form to make a POST request to the endpoint /api/bookings; 
    You can derive the required input forms from your backend folder where your endpoint is expecting the parameters to 
    successfully insert a row into the bookings table. 

    If booking is inserted successfully then redirect back to the main page where all bookings are listed from Task 1.
    If booking is not inserted due to errors, display all relevant errors in human readable format.

    TypeScript strictness is set to false, but if you complete tasks fully type safe you will get maximum points for task completion.

    Any UI and/or Design implementations will be counted as bonus points for your frontend skills.

## Task completion

Please make a seperate repo of your own with the completed task, deliver it as instructed by the recruiter.

## Warning

Because we are using Docker to start our services, any new/update on the frontend app will require you to restart the services; 

You can restart it by running this command on root of dev-tasklist repo: 

```docker-compose down -v```

And then restarting them with the command: 

```docker-compose up --build```

If your laptop cannot handle Docker and/or if you do not have a working laptop at the moment, you have the option to take this interview task directly in our offices in Prishtina with one of our laptops. Please discuss the option with the recruiter to arrange it accordingly.