-- AlterTable
ALTER TABLE `videos` MODIFY `video` LONGTEXT NOT NULL,
    MODIFY `date` DATETIME(3) NOT NULL DEFAULT NOW(),
    MODIFY `month` INTEGER NOT NULL DEFAULT MONTH(NOW()),
    MODIFY `day` INTEGER NOT NULL DEFAULT DAY(NOW()),
    MODIFY `year` INTEGER NOT NULL DEFAULT YEAR(NOW());
