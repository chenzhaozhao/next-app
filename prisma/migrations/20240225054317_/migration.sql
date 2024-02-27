/*
  Warnings:

  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `emailVerified` on the `User` table. All the data in the column will be lost.
  - Added the required column `phone` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `email`,
    DROP COLUMN `emailVerified`,
    ADD COLUMN `phone` VARCHAR(191) NOT NULL,
    MODIFY `name` VARCHAR(191) NULL;
