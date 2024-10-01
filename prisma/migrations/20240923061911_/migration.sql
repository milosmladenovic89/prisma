/*
  Warnings:

  - You are about to drop the column `number` on the `coils3` table. All the data in the column will be lost.
  - You are about to drop the column `order` on the `coils3` table. All the data in the column will be lost.
  - You are about to drop the column `thick` on the `coils3` table. All the data in the column will be lost.
  - You are about to drop the column `width` on the `coils3` table. All the data in the column will be lost.
  - Added the required column `numberCoils` to the `Coils3` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Coils3` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Coils3_number_key` ON `coils3`;

-- AlterTable
ALTER TABLE `coils3` DROP COLUMN `number`,
    DROP COLUMN `order`,
    DROP COLUMN `thick`,
    DROP COLUMN `width`,
    ADD COLUMN `numberCoils` INTEGER NOT NULL,
    ADD COLUMN `status` BOOLEAN NOT NULL;
