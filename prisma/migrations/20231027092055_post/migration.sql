-- CreateTable
CREATE TABLE `Post` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `create_time` DATETIME(3) NOT NULL,
    `update_time` DATETIME(3) NOT NULL,
    `user_name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `favorite` INTEGER NOT NULL,

    UNIQUE INDEX `Post_title_key`(`title`),
    UNIQUE INDEX `Post_user_name_key`(`user_name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
