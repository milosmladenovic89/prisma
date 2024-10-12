/*
  Warnings:

  - A unique constraint covering the columns `[number]` on the table `Coils3` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `number` to the `Coils3` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order` to the `Coils3` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thick` to the `Coils3` table without a default value. This is not possible if the table is not empty.
  - Added the required column `width` to the `Coils3` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `coils3` ADD COLUMN `number` VARCHAR(191) NOT NULL,
    ADD COLUMN `order` VARCHAR(191) NOT NULL,
    ADD COLUMN `thick` INTEGER NOT NULL,
    ADD COLUMN `width` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Coils3_number_key` ON `Coils3`(`number`);
