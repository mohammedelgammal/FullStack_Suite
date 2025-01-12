ARG python_version=3.13.1

FROM python:${python_version}-alpine

WORKDIR /myapp

COPY ./requirements.txt .

RUN pip install -r requirements.txt

COPY . .

EXPOSE 8000

CMD [ "python", "manage.py", "runserver", "0.0.0.0:8000" ]