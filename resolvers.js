import fetch from "node-fetch";

const API_URL = "https://codeflix-api.vercel.app/";

const resolvers = {
  Query: {
    async movies() {
      const response = await fetch(`${API_URL}/movies`);
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      return response.json();
    },
    async movie(_, { id }) {
      const response = await fetch(`${API_URL}/movies/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch movie");
      }

      return response.json();
    },
    async featuredMovies() {
      const response = await fetch(`${API_URL}/featured`);
      if (!response.ok) {
        throw new Error("Failed to fetch featured movies");
      }

      return response.json();
    },
    async featuredMovie(_, { id }) {
      const response = await fetch(`${API_URL}/featured/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch featured movies");
      }

      return response.json();
    },
    async moviesByGenre(_, { genre, limit }) {
      let url = new URL(`${API_URL}/movies`);
      url.searchParams.append("genre", genre);
      if (limit) {
        url.searchParams.append("_limit", limit);
      }

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch movies by genre");
      }

      return response.json();
    },
  },
};

export default resolvers;
