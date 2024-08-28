import React from 'react';
import { Card } from 'antd';
import { Repo } from '../../services/api';

interface RepoCardProps {
  repo: Repo;
  onClick: () => void;
}

const RepoCard: React.FC<RepoCardProps> = ({ repo, onClick }) => (
  <Card title={repo.name} onClick={onClick}>
    <p>{repo.description}</p>
    <p>Language: {repo.language}</p>
    <p>Forks: {repo.forks_count}</p>
  </Card>
);

export default RepoCard;
