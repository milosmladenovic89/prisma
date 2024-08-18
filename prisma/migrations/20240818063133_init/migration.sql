-- CreateTable
CREATE TABLE `Coils` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `time` DATETIME(3) NOT NULL,
    `number` VARCHAR(191) NOT NULL,
    `order` VARCHAR(191) NOT NULL,
    `width` INTEGER NOT NULL,
    `thick` INTEGER NOT NULL,

    UNIQUE INDEX `Coils_number_key`(`number`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
