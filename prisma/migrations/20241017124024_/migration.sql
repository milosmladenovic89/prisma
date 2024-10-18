/*
  Warnings:

  - Changed the type of `thick` on the `coils3` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `width` on the `coils3` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE `coils3` DROP COLUMN `thick`,
    ADD COLUMN `thick` JSON NOT NULL,
    DROP COLUMN `width`,
    ADD COLUMN `width` JSON NOT NULL;
