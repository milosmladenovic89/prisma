/*
  Warnings:

  - You are about to alter the column `order` on the `coils3` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.

*/
-- AlterTable
ALTER TABLE `coils3` MODIFY `order` JSON NOT NULL;
