/*
  Warnings:

  - You are about to drop the column `time` on the `coils` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `coils` DROP COLUMN `time`,
    ADD COLUMN `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
