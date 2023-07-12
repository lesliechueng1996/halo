import { CubeTransparentIcon } from '@heroicons/react/24/outline';
import ArticleFilterLabelGroup from './ArticleFilterLabelGroup';
import CardWithTitle from './CardWithTitle';
import Card from './Card';
import ArticleListPagination from './ArticleListPagination';

const labels = [
  {
    id: '1',
    text: 'Java',
    count: 4,
  },
  {
    id: '2',
    text: 'Docker',
    count: 1,
  },
  {
    id: '3',
    text: 'MySQL',
    count: 2,
  },
  {
    id: '4',
    text: 'RabbitMQ',
    count: 1,
  },
  {
    id: '5',
    text: 'C++',
    count: 2,
  },
  {
    id: '6',
    text: 'Aurora',
    count: 1,
  },
  {
    id: '7',
    text: 'Netty',
    count: 1,
  },
  {
    id: '8',
    text: '推广',
    count: 1,
  },
  {
    id: '9',
    text: '算法',
    count: 3,
  },
];

const content =
  '1.docker概述1.1 基本介绍 Docker 是一个开源的应用容器引擎，基于Go 语言 并遵从 Apache2.0 协议开源。 Docker可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的Linux 机器上，也可以实现虚拟化。容器是完全使balabalabalabalabalabala';
const articles = [
  {
    id: '1',
    label: 'DOCKER',
    labelComment: '#Docker',
    title: 'docker入门',
    content: content,
    avatarName: '花未眠',
    time: '七月 28, 2022',
    horizontal: true,
  },
  {
    id: '2',
    label: 'DOCKER',
    labelComment: '#Docker',
    title: 'docker入门',
    content: content,
    avatarName: '花未眠',
    time: '七月 28, 2022',
    horizontal: true,
  },
  {
    id: '3',
    label: 'DOCKER',
    labelComment: '#Docker',
    title: 'docker入门',
    content: content,
    avatarName: '花未眠',
    time: '七月 28, 2022',
    horizontal: true,
  },
  {
    id: '4',
    label: 'DOCKER',
    labelComment: '#Docker',
    title: 'docker入门',
    content: content,
    avatarName: '花未眠',
    time: '七月 28, 2022',
    horizontal: true,
  },
  {
    id: '5',
    label: 'DOCKER',
    labelComment: '#Docker',
    title: 'docker入门',
    content: content,
    avatarName: '花未眠',
    time: '七月 28, 2022',
    horizontal: true,
  },
];

function ArticleList() {
  return (
    <section className="bg-background">
      <div className="mb-10">
        <div className="text-label text-3xl font-bold flex items-center gap-3 mb-1">
          <CubeTransparentIcon className="w-8 h-8" />
          <h1>文章列表</h1>
        </div>
        <div className="gradient-bg h-2 w-24 rounded-sm" />
      </div>

      <ArticleFilterLabelGroup labels={labels} className="mb-10" />

      <div className="w-full flex flex-col items-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {articles.map((article) => (
            <div
              key={article.id}
              className="w-full h-96 rounded-2xl overflow-hidden"
            >
              <Card {...article} />
            </div>
          ))}
        </div>
        <ArticleListPagination total={5} />
      </div>
    </section>
  );
}

export default ArticleList;
