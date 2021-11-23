const baseUrl = "http://localhost:5000";

export async function getHighlighted(id) {
  try {
    const response = await fetch(`${baseUrl}/projects/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getAllProjects() {
  try {
    const response = await fetch(`${baseUrl}/projects`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
