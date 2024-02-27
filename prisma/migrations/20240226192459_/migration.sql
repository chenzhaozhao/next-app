/*
  Warnings:

  - You are about to drop the `_ProductToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_ProductToUser` DROP FOREIGN KEY `_ProductToUser_A_fkey`;

-- DropForeignKey
ALTER TABLE `_ProductToUser` DROP FOREIGN KEY `_ProductToUser_B_fkey`;

-- DropIndex
DROP INDEX `Product_userId_fkey` ON `Product`;

-- AlterTable
ALTER TABLE `Product` ADD COLUMN `users` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `_ProductToUser`;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
