import React, { useState } from 'react';
import useFetchRepos from '../../hooks/useFetchRepos';
import RepoCard from '../molecules/RepoCard';
import FilterButtons from '../molecules/FilterButtons';
import { List, Button } from 'antd';
import { Repo } from '../../services/api';

const RepoList: React.FC = () => {
  const { filteredRepos, languages, filterByLanguage } = useFetchRepos();
  const [selectedRepo, setSelectedRepo] = useState<Repo | null>(null);

  return (
    <div style={{ padding: '20px' }}>
      {selectedRepo ? (
        <div>
          <Button onClick={() => setSelectedRepo(null)}>Back</Button>
          <RepoCard repo={selectedRepo} onClick={() => setSelectedRepo(null)} />
        </div>
      ) : (
        <div>
          <FilterButtons languages={languages} filterByLanguage={filterByLanguage} />
          <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={filteredRepos}
            renderItem={(repo) => (
              <List.Item>
                <RepoCard repo={repo} onClick={() => setSelectedRepo(repo)} />
              </List.Item>
            )}
          />
        </div>
      )}
    </div>
  );
};

export default RepoList;
