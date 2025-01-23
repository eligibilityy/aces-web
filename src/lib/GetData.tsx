"use server";

import { Commit } from "./types";

export async function GetData() {
    const res = await fetch(`https://api.github.com/orgs/DLSLACES/repos`);
    if (!res.ok) {
        throw new Error("failed to fetch data");
    }

    return res.json();
}

export async function FetchCommits(repoId: string): Promise<Commit[]> {
    try {
        const responseRepo = await fetch(
            `https://api.github.com/repositories/${repoId}`,
        );
        const repoDetails = await responseRepo.json();

        const responsecommits = await fetch(
            `https://api.github.com/repos/${repoDetails.full_name}/commits?per_page=20`,
        );
        const commits = await responsecommits.json();
        return commits;
    } catch (error) {
        console.error("Error Fetching Commits", error);
        throw error;
    }
}
