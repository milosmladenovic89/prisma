/*
  Warnings:

  - The primary key for the `coils3` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `programID` on the `coils3` table. All the data in the column will be lost.
  - You are about to alter the column `number` on the `coils3` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.
  - Added the required column `id` to the `Coils3` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Coils3_number_key` ON `coils3`;

-- AlterTable
ALTER TABLE `coils3` DROP PRIMARY KEY,
    DROP COLUMN `programID`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `number` JSON NOT NULL,
    ADD PRIMARY KEY (`id`);
