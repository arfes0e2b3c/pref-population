import { FC } from 'react';
import { header, headerTitle } from './styles/header.css';

export const Header: FC = () => {
  return (
    <header className={header}>
      <h1 className={headerTitle}>人口統計サイト</h1>
    </header>
  );
};
