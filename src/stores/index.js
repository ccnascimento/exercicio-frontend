import { makeAutoObservable } from "mobx";
import { getAllProjects, getHighlighted } from "../services/project";

class Store {
  projects = [];
  highlighted = {};
  isLoading = false;
  error = "";
  skills = [
    { id: 1, name: "Python & Django", level: "Expert", progress: 95 },
    { id: 2, name: "Javascript & jQuery", level: "Expert", progress: 95 },
    { id: 3, name: "HTML5, CSS3, SASS & LESS", level: "Expert", progress: 95 },
    { id: 4, name: "Ruby on Rails", level: "Pro", progress: 85 },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  async fetchProjects() {
    try {
      this.setIsLoading(true);
      const projects = await getAllProjects();
      this.setProjects(projects);
      this.setIsLoading(false);
    } catch (error) {
      this.setError(error);
      this.setIsLoading(false);
    }
  }

  async fetchHighLighted(id) {
    try {
      this.setIsLoading(true);
      const highlighted = await getHighlighted(id);
      this.setHighLighted(highlighted);
    } catch (error) {
      this.setError(error);
      this.setIsLoading(false);
    }
  }

  setError(error) {
    this.error = error;
  }

  setIsLoading(value) {
    this.isLoading = value;
  }

  setProjects(projects) {
    this.projects = projects;
  }

  setHighLighted(highlighted) {
    this.highlighted = highlighted;
  }
}

export default Store;
