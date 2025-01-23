export type Owner = {
  avatar_url: string;
  login: string;
};

export type Language = {
  name: string;
  lines_of_code: number; // Optional: tracks the lines of code written in this language
};

export type Repository = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  owner: Owner;
  fork: boolean;
  languages: Language[]; // Added languages array
};

export type Commit = {
  sha: string;
  commit: {
    author: {
      name: string;
    };
    message: string;
  };
};
