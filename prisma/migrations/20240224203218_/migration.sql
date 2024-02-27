/*
  Warnings:

  - You are about to drop the column `phone` on the `User` table. All the data in the column will be lost.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `phone`,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `emailVerified` DATETIME(3) NULL,
    MODIFY `name` VARCHAR(191) NOT NULL;
