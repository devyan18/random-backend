# Random Backend
  
  Random is an `api-rest` based on `rest architecture` on the http request side and on the business logic side using `layered architecture`.
  
  The server has the following modules:
  
  * [x] Users
  * [x] Persons
  * [x] Roles
  * [x] Permissions
  * [x] Careers
  * [x] Subjects
  * [x] Periods
  * [ ] Assistances
   
  They are organized as follows:
  
  ![data mapping](https://i.ibb.co/nCSk1Nt/random-entities.png)

  > In order to allow users to log in with the most common services, the `user` module has been separated from the `person` data, so that each new user instance will also have its own `person` instance.
  
  > On the `roles` and `permissions` side, each user will have a `role` and each role will have a set of `permissions` that will determine the actions that this user can do.
  
  > Although each `role` has its own `permissions`, it will also be possible to assign `permissions` directly to users separately, in order to be able to cover special needs in specific cases with certain `users` that require it.
  
  
  > For the part of the careers we have to take into account that there are several grades taking place in the same academic year, therefore we must take into account the periods that each one occupies with each beginning and end, and the periods represent the phases of each year, for example, four-month periods, trimesters, etc. On the other hand, each course has its own assigned subjects which are associated to a specific course and a specific period.
  
  > In the case of the subjects, each one will have one or more teachers who will be in charge of the subject, these teachers will also be users, who must have the minimum permissions corresponding to the role of teachers.
  
