/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `avatar` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `created_time` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `github` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updated_time` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Article` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Article` DROP FOREIGN KEY `Article_categoryId_fkey`;

-- AlterTable
ALTER TABLE `User` DROP PRIMARY KEY,
    DROP COLUMN `avatar`,
    DROP COLUMN `created_time`,
    DROP COLUMN `github`,
    DROP COLUMN `id`,
    DROP COLUMN `password`,
    DROP COLUMN `updated_time`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `emailVerified` DATETIME(3) NULL,
    ADD COLUMN `hashedPassword` VARCHAR(191) NULL,
    ADD COLUMN `image` VARCHAR(191) NULL,
    ADD COLUMN `name` VARCHAR(191) NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- DropTable
DROP TABLE `Article`;

-- DropTable
DROP TABLE `Category`;

-- CreateIndex
CREATE UNIQUE INDEX `User_email_key` ON `User`(`email`);
