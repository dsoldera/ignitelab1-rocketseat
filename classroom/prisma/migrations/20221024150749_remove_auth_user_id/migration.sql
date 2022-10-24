/*
  Warnings:

  - You are about to drop the column `authUserId` on the `Student` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Student_authUserId_key";

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "authUserId";
