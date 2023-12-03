import json
from flask import Flask, request, render_template
import os
import openai

from dotenv import load_dotenv
load_dotenv()
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "")
assert OPENAI_API_KEY, "OPENAI_API_KEY environment variable is missing from .env"
openai.api_key = OPENAI_API_KEY

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/mark_answer', methods=['POST'])
def mark_answer():
    # question = request.form['question']
    question = "( x^2 - 4x + 3 = 0 \)"
    # correct_answer = request.form['correct_answer']
    correct_answer = """Certainly! Here's the step-by-step solution for the quadratic equation \( x^2 - 4x + 3 = 0 \):

1. **Start with the Quadratic Equation:**
   \[ x^2 - 4x + 3 = 0 \]

2. **Factorize the Quadratic:**
   Look for two numbers that multiply to 3 (the constant term) and add up to -4 (the coefficient of x). The numbers that work here are -1 and -3.
   \[ x^2 - 4x + 3 = (x - 1)(x - 3) \]

3. **Set Each Factor Equal to Zero:**
   \[ x - 1 = 0 \]
   \[ x - 3 = 0 \]

4. **Solve for x in Each Equation:**
   For \( x - 1 = 0 \):
   \[ x = 1 \]

   For \( x - 3 = 0 \):
   \[ x = 3 \]

So, the solutions for the equation \( x^2 - 4x + 3 = 0 \) are \( x = 1 \) and \( x = 3 \)."""
    student_answer = request.form['student_answer']
    lines_of_working = mark_answer(question,correct_answer,student_answer)
    print(lines_of_working)
    return lines_of_working

if __name__ == '__main__':
    app.run(debug=True)

def mark_answer(question,correct_answer,student_answer):
    # Either the student is correct, or the student is incorrect
    # If the student is correct, write a brief congratulary messagae
    # If the student is incorrect:
    # 1. write specific feedback about where they went wrong
    # 2. for each line of working, write a very brief comment about what they did right
    # 3. If it is wrong, write a brief comment about what they did wrong
    tools = [
        {
            "type": "function",
            "function": {
                "name": "mark_answer",
            "description": "Marks the student's answer to a question, providing feedback on the answer and the student's working.",
            "parameters": {
                "type": "object",
                "properties": {
                    "lines_of_working": {
                        "type": "array",
                        "description": "An array of strings representing the student's working for the question.",
                        "items": {
                            "type": "object",
                            "properties": {
                                "line": {
                                    "type": "string",
                                    "description": "A line of working. It is reformatted in LaTeX. It is copied from the student's answer."
                                },
                                "comment": {
                                    "type": "string",
                                    "description": "A comment about the line of working."
                                }
                            },
                            "required": ["line", "comment"]
                        }
                    },
                },
                "required": ["lines_of_working"]
            }}
        }
    ]

    prompt = f"""
    QUESTION: ```{question}```
    CORRECT ANSWER: ```{correct_answer}```
    STUDENT ANSWER: ```{student_answer}```

    GOAL: Provide feedback on the student's answer and working.
    """

    messages = [
        {"role": "user", "content": prompt},
    ]

    response = openai.ChatCompletion.create(
        model= "gpt-4-1106-preview",
        messages=messages,
        tools=tools,
        tool_choice={
            "type" : "function",
            "function" : {
                "name": "mark_answer",
            }
        }
    )

    try:
        text_string = response.choices[0].message.tool_choice.function.arguments
        text_data = json.loads(text_string)
        lines_of_working = text_data.get('lines_of_working', '')
        return lines_of_working
    except Exception as e:
        print(response.choices[0].message.tool_choice.function.arguments)
        print(e)
        return ""