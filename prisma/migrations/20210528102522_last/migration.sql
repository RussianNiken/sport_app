/*
  Warnings:

  - You are about to alter the column `video` on the `videos` table. The data in that column could be lost. The data in that column will be cast from `LongBlob` to `Text`.

*/
-- AlterTable
ALTER TABLE `videos` MODIFY `data` TEXT,
    MODIFY `video` TEXT NOT NULL,
    MODIFY `date` DATETIME(3) NOT NULL DEFAULT NOW(),
    MODIFY `month` INTEGER NOT NULL DEFAULT MONTH(NOW()),
    MODIFY `day` INTEGER NOT NULL DEFAULT DAY(NOW()),
    MODIFY `year` INTEGER NOT NULL DEFAULT YEAR(NOW());
