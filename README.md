## Cost Calculator Micro Service

Cost calculator web application for an e-commerce site.  Users input their zip code and basic budget information and recieve a monthly payment calculated on their inputs.  This was legacy code that I inherited in order to redesign and implement a new backend architechture and database management system. I implemented and compared one relational (PostgreSQL) and non-realtional (MongoDB) DBMS in order to scale the application to handle more than 50 million records with a throughput of over 1000RPS.  This application has been containerized using [Docker](http://www.docker.com) and deployed via [Amazon Web Services](http://www.aws.com).  

### Prerequisites

This applications code is currently set up to connect with a remote database on AWS.  Due to the nature of this assignment, this app is set up to use both postgreSQL and MongoDB DBMS.  There are also separate seeding files for each DBMS.   

This application has been containerized using [Docker Compose](https://docs.docker.com/compose/).  Simply install Docker onto your local machine.  After cloning this repository, open the project in your favorite text editor and navigate to the root directory.  Execute the following commands in the terminal.    


### Installing

Login to your Docker Hub account with the credentials you created when installing Docker.
```
docker login
```

From the project root directory, the Docker images and containers must also be rebuilt since a new database URI is being implemented in the base code.
```
docker-compose up --build
```

Allow the applicaton time to build, you can follow the output in the terminal to track the build's progress.  Once the process has successfully completed, Navigate to http://localhost:80 to see a development version of the app.  

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo


## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [React](http://www.dropwizard.io/1.0.2/docs/) - The framework used
* [Docker](https://maven.apache.org/) - Image and container creation for deployment
* [Redis](https://rometools.github.io/rome/) - Used as in-memory cache


## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Christopher Kwiatkowski** - *Initial work* - [LinkedIn](https://www.linkedin.com/in/christopher-kwiatkowski/)
* **Justin Hubbell** - *Backend Artichect* - [LinedIn](https://www.linkedin.com/in/justin-hubbell/)

See also the list of [contributors](https://github.com/SDC-ghrden03) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thanks to the Hack Reactor Team for being my army of rubber ducks

