## Cost Calculator Micro Service

Cost calculator web application for an e-commerce site.  Users input their zip code and basic budget information and recieve a monthly payment calculated on the user inputs.  This was legacy code that I inherited in order to redesign and implement a new backend architechture and database management system. I implemented and compared one relational (PostgreSQL) and non-realtional (MongoDB) DBMS in order to scale the application to be able to handle a throughput of over 1000RPS.  This application has been containerized using [Docker](http://www.docker.com) and deployed via [Amazon Web Services](http://www.aws.com).  

### Prerequisites

This application has been containerized using [Docker Compose](https://docs.docker.com/compose/).  Simply install Docker onto your local machine.  After cloning this repository onto your machine, open the project in your favorite text editor and navigate to the root directory.  Execute the following commands into the terminal.    


```
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
