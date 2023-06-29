'use client';

import dayjs from 'dayjs';
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import ContentLayout from '@/components/ContentLayout';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), {
  ssr: false,
}) as any;

function CreateArticlePage() {
  const inputTitleRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputTitleRef.current) {
      inputTitleRef.current.value = dayjs().format('YYYY-MM-DD');
    }
  }, []);

  const [article, setArticle] = useState<string>('');

  return (
    <ContentLayout title="发布文章" contentClass="flex flex-col">
      <div className="flex items-center gap-3 mb-5 shrink-0">
        <input
          type="text"
          placeholder="输入文章标题"
          className="flex-1 px-3 py-2 border rounded-md"
          ref={inputTitleRef}
        />
        <button className="px-5 py-2 text-red-500 border border-red-500 rounded-md shrink-0">
          保存草稿
        </button>
        <button className="px-5 py-2 bg-red-500 hover:bg-red-500/50 rounded-md text-white shrink-0">
          发布文章
        </button>
      </div>
      <article className="grow">
        <MDEditor
          value={article}
          onChange={setArticle}
          height="100%"
          visibleDragbar={false}
        />
      </article>
    </ContentLayout>
  );
}

export default CreateArticlePage;
