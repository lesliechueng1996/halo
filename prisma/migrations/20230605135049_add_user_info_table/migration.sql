-- CreateTable
CREATE TABLE "t_user_info" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(50),
    "nickname" VARCHAR(50) NOT NULL,
    "avatar" VARCHAR(1024) NOT NULL DEFAULT '',
    "intro" VARCHAR(255),
    "website" VARCHAR(255),
    "is_subscribe" BOOLEAN,
    "is_disable" BOOLEAN NOT NULL DEFAULT false,
    "create_time" TIMESTAMP(6) NOT NULL,
    "update_time" TIMESTAMP(6),

    CONSTRAINT "t_user_info_pkey" PRIMARY KEY ("id")
);
