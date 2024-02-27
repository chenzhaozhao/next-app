/*
  Warnings:

  - You are about to drop the column `user_name` on the `Post` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Post_user_name_key` ON `Post`;

-- AlterTable
ALTER TABLE `Post` DROP COLUMN `user_name`,
    MODIFY `favorite` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_id_fkey` FOREIGN KEY (`id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
