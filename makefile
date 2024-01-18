shell:
	python manage.py shell

showmigrations:
	python manage.py showmigrations

migrations:
	python manage.py makemigrations

migrate:
	python manage.py migrate

rollback:
	python manage.py migrate <app_name> <migration_name>

.PHONY: migrate rollback
