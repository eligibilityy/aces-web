"use server";

import { Commit, Repository, Language } from "./types";

// Base headers with authentication
const HEADERS = {
  Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  Accept: "application/vnd.github.v3+json",
};

export async function GetData(): Promise<Repository[]> {
  const res = await fetch(`https://api.github.com/users/eligibilityy/repos`, {
    headers: HEADERS,
  });

  if (!res.ok) {
    console.error("Failed to fetch data", res.status, res.statusText);
    throw new Error("Failed to fetch data");
  }

  const repos = await res.json();

  // Fetch languages for each repository and add it to the response
  const repositoriesWithLanguages = await Promise.all(
    repos.map(async (repo: any) => {
      const languages = await fetchRepoLanguages(repo.owner.login, repo.name);
      return {
        id: repo.id,
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        owner: {
          avatar_url: repo.owner.avatar_url,
          login: repo.owner.login,
        },
        fork: repo.fork,
        languages,
      } as Repository;
    })
  );

  return repositoriesWithLanguages;
}

export async function FetchCommits(repoId: string): Promise<Commit[]> {
  try {
    const responseRepo = await fetch(
      `https://api.github.com/repositories/${repoId}`,
      { headers: HEADERS }
    );

    const repoDetails = await responseRepo.json();

    if (repoDetails.fork) {
      console.log("This repository is a fork.");
    } else {
      console.log("This repository is not a fork.");
    }

    const responseCommits = await fetch(
      `https://api.github.com/repos/${repoDetails.full_name}/commits?per_page=20`,
      { headers: HEADERS }
    );

    const commits = await responseCommits.json();
    return commits;
  } catch (error) {
    console.error("Error Fetching Commits", error);
    throw error;
  }
}

// Fetch languages used in a repository
export async function fetchRepoLanguages(owner: string, repo: string): Promise<Language[]> {
  try {
    const url = `https://api.github.com/repos/${owner}/${repo}/languages`;

    const res = await fetch(url, { headers: HEADERS });

    if (!res.ok) {
      console.error("Failed to fetch languages", res.status, res.statusText);
      throw new Error("Failed to fetch languages");
    }

    const data = await res.json();

    // Convert response to Language[]
    const languages: Language[] = Object.entries(data).map(([name, lines_of_code]) => ({
      name,
      lines_of_code: lines_of_code as number,
    }));

    return languages;
  } catch (error) {
    console.error("Error Fetching Languages", error);
    throw error;
  }
}
