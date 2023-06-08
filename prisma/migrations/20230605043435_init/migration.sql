-- CreateTable
CREATE TABLE "t_user_auth" (
    "id" SERIAL NOT NULL,
    "user_info_id" INTEGER NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "login_type" INTEGER NOT NULL,
    "ip_address" VARCHAR(50),
    "ip_source" VARCHAR(50),
    "last_login_time" TIMESTAMP(6),
    "create_time" TIMESTAMP(6) NOT NULL,
    "update_time" TIMESTAMP(6),

    CONSTRAINT "t_user_auth_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "username" ON "t_user_auth"("username");
