include .env

.PHONY: up

up: 
	docker-compose up

.PHONY: api

api: 
	docker-compose up api

.PHONY: down

down: 
	docker-compose down

.PHONY: logs

logs: 
	docker-compose logs -f