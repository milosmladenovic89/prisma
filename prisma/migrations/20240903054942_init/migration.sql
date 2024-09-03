/*
  Warnings:

  - You are about to drop the `coils` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `coils`;

-- CreateTable
CREATE TABLE `Coils2` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `number` VARCHAR(191) NOT NULL,
    `order` VARCHAR(191) NOT NULL,
    `width` INTEGER NOT NULL,
    `thick` INTEGER NOT NULL,
    `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Coils2_number_key`(`number`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
