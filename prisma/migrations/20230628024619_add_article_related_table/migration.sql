-- CreateTable
CREATE TABLE "t_article" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "category_id" INTEGER,
    "article_cover" VARCHAR(1024),
    "article_title" VARCHAR(50) NOT NULL,
    "article_content" TEXT NOT NULL,
    "is_top" BOOLEAN NOT NULL DEFAULT false,
    "is_featured" BOOLEAN NOT NULL DEFAULT false,
    "is_delete" BOOLEAN NOT NULL DEFAULT false,
    "status" INTEGER NOT NULL DEFAULT 1,
    "type" INTEGER NOT NULL DEFAULT 1,
    "password" VARCHAR(255),
    "original_url" VARCHAR(255),
    "create_time" TIMESTAMP(6) NOT NULL,
    "update_time" TIMESTAMP(6),

    CONSTRAINT "t_article_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_article_tag" (
    "id" SERIAL NOT NULL,
    "article_id" INTEGER NOT NULL,
    "tag_id" INTEGER NOT NULL,

    CONSTRAINT "t_article_tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_category" (
    "id" SERIAL NOT NULL,
    "category_name" VARCHAR(20) NOT NULL,
    "create_time" TIMESTAMP(6) NOT NULL,
    "update_time" TIMESTAMP(6),

    CONSTRAINT "t_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_tag" (
    "id" SERIAL NOT NULL,
    "tag_name" VARCHAR(20) NOT NULL,
    "create_time" TIMESTAMP(6) NOT NULL,
    "update_time" TIMESTAMP(6),

    CONSTRAINT "t_tag_pkey" PRIMARY KEY ("id")
);
