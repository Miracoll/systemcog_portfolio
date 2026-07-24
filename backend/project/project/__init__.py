"""Project package initialization.

Runs before Django loads the database backend. When the MySQL engine is
selected (DB_ENGINE=mysql), register PyMySQL as the MySQLdb driver so
`django.db.backends.mysql` works without the C-based mysqlclient.
"""
import os
from pathlib import Path

from dotenv import load_dotenv

# settings.py loads this too, but __init__ runs first, so the DB_ENGINE
# guard below needs the .env values available here as well.
load_dotenv(Path(__file__).resolve().parent.parent / ".env")

if os.environ.get("DB_ENGINE") == "mysql":
    import pymysql

    pymysql.install_as_MySQLdb()
