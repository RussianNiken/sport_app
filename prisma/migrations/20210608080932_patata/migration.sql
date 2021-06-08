/*
  Warnings:

  - Added the required column `exercisesName` to the `videos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `videos` ADD COLUMN `exercisesName` VARCHAR(191) NOT NULL,
    MODIFY `date` DATETIME(3) NOT NULL DEFAULT NOW(),
    MODIFY `month` INTEGER NOT NULL DEFAULT MONTH(NOW()),
    MODIFY `day` INTEGER NOT NULL DEFAULT DAY(NOW()),
    MODIFY `year` INTEGER NOT NULL DEFAULT YEAR(NOW());

-- CreateTable
CREATE TABLE `exercises` (
    `name` VARCHAR(191) NOT NULL,
    `description` TEXT,

    PRIMARY KEY (`name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `videos` ADD FOREIGN KEY (`exercisesName`) REFERENCES `exercises`(`name`) ON DELETE CASCADE ON UPDATE CASCADE;
