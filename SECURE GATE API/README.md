# API Documentation

## Gate

### Gate List (`GET` `/gates`)

- Query Parameters
	- None

### Create Gate (`POST` `/gates`)

- Parameters:
	- `gate`: `STRING`
	- `open`: `TIMESTAMP`
	- `close`: `TIMESTAMP`

### Gate Details (`GET` `/gates/:id`)

- Path Parameters:
	- `:id`: `STRING (Nama Gate)` 

### Delete Gate (`DELETE` `/gates/:id`)

- Path Parameters:
	- `:id`: `INTEGER`

### Update Gate (`PUT` `/gates`)

- Parameters:
	- `gate`: `STRING`
	- `open`: `TIMESTAMP`
	- `close`: `TIMESTAMP` 
	
	
## Group

### Group List (`GET` `/grups`)

- Query Parameters
	- None

### Create Group (`POST` `/grups`)

- Parameters:
	- `group`: `STRING`
	- `gate`: `STRING`

### Group Details (`GET` `/grups/:id`)

- Path Parameters:
	- `:id`: `STRING (Nama Group)`

### Delete Group (`DELETE` `/grups/:id`)

- Path Parameters:
	- `:id`: `INTEGER`

### Update Group (`PUT` `/grups`)

- Parameters:
	- `:id`: `INTEGER`
	- `gate`: `STRING`


## User

### User List (`GET` `/users`)

- Query Parameters
	- None

### Create User (`POST` `/users`)

- Parameters:
	- `nrp`: `STRING`
	- `password`: `STRING`
	- `group`: `STRING (Nama Group)`

### User Details (`GET` `/users/:id`)

- Path Parameters:
	- `:nrp`: `STRING`

### Delete User (`DELETE` `/users/:id`)

- Path Parameters:
	- `:id`: `INTEGER`

### Set User Group (`PUT` `/users`)

- Parameters:
	- `nrp`: `STRING`
	- `group`: `STRING (Nama Group)`


## Login

### Login (`POST` `/login`)

- Parameters:
	- `nrp`: `STRING`
	- `password`: `STRING`
	- `gate`: `STRING (Nama Gate)`

