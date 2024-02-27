-- DropIndex
DROP INDEX `User_phone_key` ON `User`;

-- AlterTable
ALTER TABLE `User` MODIFY `phone` VARCHAR(191) NULL;
