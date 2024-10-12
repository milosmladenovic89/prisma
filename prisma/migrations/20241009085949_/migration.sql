/*
  Warnings:

  - The primary key for the `coils3` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `coils3` table. All the data in the column will be lost.
  - Added the required column `programID` to the `Coils3` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `coils3` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `programID` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`programID`);
