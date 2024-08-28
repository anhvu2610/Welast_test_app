import { useState, useEffect } from 'react';
import { fetchRepos, Repo } from '../services/api';
import _ from 'lodash';

const useFetchRepos = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [filteredRepos, setFilteredRepos] = useState<Repo[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);

  useEffect(() => {
    const getRepos = async () => {
      const data = await fetchRepos();
      const sortedRepos = _.orderBy(data, ['created_at'], ['desc']);
      setRepos(sortedRepos);
      setFilteredRepos(sortedRepos);

      const uniqueLanguages = _.uniq(
        data.map((repo) => repo.language).filter(Boolean)
      );
      setLanguages(uniqueLanguages as string[]);
    };

    getRepos();
  }, []);

  const filterByLanguage = (language: string | null) => {
    if (language) {
      setFilteredRepos(repos.filter((repo) => repo.language === language));
    } else {
      setFilteredRepos(repos);
    }
  };

  return { repos, filteredRepos, languages, filterByLanguage };
};

export default useFetchRepos;
