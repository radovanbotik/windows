/*
  Warnings:

  - The primary key for the `Email` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Email` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `authorId` column on the `Email` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "Email" DROP CONSTRAINT "Email_authorId_fkey";

-- AlterTable
ALTER TABLE "Email" DROP CONSTRAINT "Email_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "authorId",
ADD COLUMN     "authorId" INTEGER,
ADD CONSTRAINT "Email_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Email" ADD CONSTRAINT "Email_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
