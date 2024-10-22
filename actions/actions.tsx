"use server";
import axios from "axios";

export async function generateQuestions() {
  const response = await axios.get(
    `https://vanna-flask-staging-tcsdo.ondigitalocean.app/api/v0/generate_questions`
  );
  console.log(response.data);
  return response.data;
}

export async function generateSQL(question: string) {
  const response = await axios.get(
    `https://vanna-flask-staging-tcsdo.ondigitalocean.app/api/v0/generate_sql`,
    {
      params: { question },
    }
  );
  console.log(response.data);
  return response.data;
}

export async function runSQL(sql: string) {
  const response = await axios.post(
    `https://vanna-flask-staging-tcsdo.ondigitalocean.app/api/v0/run_sql`,
    { sql }, // Encapsulate the SQL string in an object
    {
      headers: {
        "Content-Type": "application/json", // This line is technically optional as Axios sets it automatically for objects
      },
    }
  );

  console.log("run", response.data);

  return response.data;
}
