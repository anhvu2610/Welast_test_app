export interface Repo {
    id: number;
    name: string;
    description: string;
    language: string;
    forks_count: number;
    created_at: string;
    pushed_at: string;
  }
  
  export const fetchRepos = async (): Promise<Repo[]> => {
    const response = await fetch("http://localhost:3000/repos");
    const data = await response.json();
    console.log('data', data)
    return data;
  };
  