# API Documentation

## Gate

### Gate List (`GET` `/gates`)

- Query Parameters
	- None

### Create Gate (`POST` `/gate`)

- Parameters:
	- `gate`: `STRING`
	- `open`: `TIMESTAMP`
	- `close`: `TIMESTAMP`

### Gate Details (`GET` `/gate/:id`)

- Path Parameters:
	- `:id`: `STRING (Nama Gate)` 

### Delete Gate (`DELETE` `/gate/:id`)

- Path Parameters:
	- `:id`: `STRING (Nama Gate)` 

### Update Gate (`PUT` `/gate`)

- Parameters:
	- `gate`: `STRING`
	- `open`: `TIMESTAMP`
	- `close`: `TIMESTAMP` 
	
	
## Group

### Group List (`GET` `/grups`)

- Query Parameters
	- None

### Create Group (`POST` `/grup`)

- Parameters:
	- `group`: `STRING`
	- `gate`: `STRING`

### Group Details (`GET` `/grup/:id`)

- Path Parameters:
	- `:id`: `STRING (Nama Group)`

### Delete Group (`DELETE` `/grup/:id`)

- Path Parameters:
	- `:id`: `STRING (Nama Group)`

### Update Group (`PUT` `/grup`)

- Parameters:
	- `group`: `STRING`
	- `gate`: `STRING`


## User

### User List (`GET` `/users`)

- Query Parameters
	- None

### Create User (`POST` `/auser`)

- Parameters:
	- `nrp`: `STRING`
	- `password`: `STRING`
	- `group`: `STRING (Nama Group)`

### User Details (`GET` `/users/:id`)

- Path Parameters:
	- `:nrp`: `STRING`

### Delete User (`DELETE` `/user/:id`)

- Path Parameters:
	- `:id`: `STRING`

### Set User Group (`PUT` `/user`)

- Parameters:
	- `nrp`: `STRING`
	- `group`: `STRING (Nama Group)`


## Login

### Login (`POST` `/login`)

- Parameters:
	- `nrp`: `STRING`
	- `password`: `STRING`
	- `gate`: `STRING (Nama Gate)`

