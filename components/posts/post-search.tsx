'use client';
import { FC, useState } from 'react';
import { Input } from '../ui/input';
import useQueryParams from '@/hooks/useQueryParams';

interface PostSearchProps {
  search: string;
}

const PostSearch: FC<PostSearchProps> = ({ search }) => {
  const [inputValue, setInputValue] = useState(search);
  const query = useQueryParams({ isDirectPush: true, isReplace: true });
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const onPressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      query.set('search', inputValue);
    }
  };
  return (
    <Input
      placeholder="검색어를 입력하세요"
      className="mb-2"
      value={inputValue}
      onChange={handleSearch}
      onKeyDown={onPressEnter}
    />
  );
};

export default PostSearch;
