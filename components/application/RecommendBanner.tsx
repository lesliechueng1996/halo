import { FireIcon } from '@heroicons/react/24/solid';
import CardWithTitle from './CardWithTitle';

const content1 =
  '1.什么是索引索引（在 MySQL 中也叫“键key”）是存储引擎快速找到记录的一种数据结构，通俗来说类似书本的目录，这个比方虽然被用的最多但是也是最恰如其当的，在查询书本中的某个知识点不借助目录的情况下，往往都找的够呛，那么索引相较于数据库的重要性也可见一斑。 2.索引的有哪些种类？ 索引的种类这里只罗列出InnoDB支持的索引：主键索引(PRIMARY)，普通索引(INDEX)，唯一索引(UNIQUE)，组合索引，总体划分为两类，主键索引也被称为聚簇索引（clustered index），其余都称呼为非主键索引也被称为二级索引（secondary index）。 3.InnoDB的不同的索引组织结构是怎样的呢？ 众所周知在InnoDB引用的是B+树索引模型，这里对B+树结构暂时不做过多阐述，很多文章都有描述，在第二问中我们对索引的种类划分为两大类主键索引和非主键索引，那么问题就在于比较两种索引的区别了，我们这里建立一张学生表，其中包含字段id设置主键索引、name设置普通索引、age(无处理)，并向数据库中插入4条数据：（&quot;小赵&quot;, 10）（&quot;小王&quot;, 11）（';
const content2 =
  'RabbitMQ 实战教程1.MQ引言 1.1 什么是MQ MQ(Message Quene) : 翻译为 消息队列,通过典型的 生产者和消费者模型,生产者不断向消息队列中生产消息，消费者不断的从队列中获取消息。因为消息的生产和消费都是异步的，而且只关心消息的发送和接收，没有业务逻辑的侵入,轻松的实现系统间解耦。别名为 消息中间件 通过利用高效可靠的消息传递机制进行平台无关的数据交流，并基于数据通信来进行分布式系统的集成。 1.2 MQ有哪些 当今市面上有';

export default function RecommendBanner() {
  return (
    <section className="w-full flex flex-col gap-10 lg:flex-row lg:gap-5 lg:h-96">
      <div className="gradient-bg rounded-2xl p-1.5">
        <div className="bg-background rounded-2xl px-10 py-20 lg:px-8 lg:pt-40 lg:pb-[5.5rem]">
          <div className="gradient-text inline-flex text-4xl gap-5 mb-3 lg:flex-col lg:gap-0">
            <span>EDITOR&apos;S</span>
            <span>SELECTION</span>
          </div>
          <div className="text-label flex gap-2 text-2xl font-bold items-center">
            <FireIcon className="w-8 h-8" />
            <span>推荐文章</span>
          </div>
        </div>
      </div>

      <div className="w-full h-96 lg:h-[24rem]">
        <CardWithTitle
          tip="推荐"
          icon="fire"
          label="MYSQL"
          labelComment="#MySQL"
          title="MySQL 覆盖索引"
          content={content1}
          avatarName="花未眠"
          time="七月 28, 2022"
          horizontal
        />
      </div>

      <div className="w-full h-96 lg:h-[24rem]">
        <CardWithTitle
          tip="推荐"
          icon="fire"
          label="RABBITMQ"
          labelComment="#RabbitMQ"
          title="RibbitMQ教程"
          content={content2}
          avatarName="花未眠"
          time="七月 28, 2022"
          horizontal
        />
      </div>
    </section>
  );
}
