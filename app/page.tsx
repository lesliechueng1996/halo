import AppBanner from '@/components/AppBanner';
import ArticleList from '@/components/ArticleList';
import LabelPanel from '@/components/LabelPanel';
import LatestComment from '@/components/LatestComment';
import MySelf from '@/components/MySelf';
import NoticePanel from '@/components/NoticePanel';
import RecommendBanner from '@/components/RecommendBanner';
import WebInfor from '@/components/WebInfor';

export default function Home() {
  return (
    <main className="space-y-10 pb-10 pt-10">
      <AppBanner />
      <RecommendBanner />
      <div className="bg-background p-5 rounded-2xl flex items-start gap-5">
        <ArticleList />
        <div className="hidden lg:flex flex-col space-y-10">
          <MySelf className="pt-20" />
          <LatestComment />
          <LabelPanel />
          <NoticePanel />
          <WebInfor />
        </div>
      </div>
    </main>
  );
}
