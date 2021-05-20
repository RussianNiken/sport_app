/*
  Warnings:

  - You are about to drop the column `week` on the `videos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `videos` DROP COLUMN `week`,
    ADD COLUMN `year` INTEGER NOT NULL DEFAULT YEAR(NOW()),
    MODIFY `date` DATETIME(3) NOT NULL DEFAULT NOW(),
    MODIFY `month` INTEGER NOT NULL DEFAULT MONTH(NOW()),
    MODIFY `day` INTEGER NOT NULL DEFAULT DAY(NOW());
