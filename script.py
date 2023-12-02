import os
import openai
from werkzeug.datastructures import FileStorages
import random

from dotenv import load_dotenv
load_dotenv()
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "")
assert OPENAI_API_KEY, "OPENAI_API_KEY environment variable is missing from .env"
openai.api_key = OPENAI_API_KEY

# Atomic operation is marking a question and getting specific feedback