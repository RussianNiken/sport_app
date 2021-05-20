-- CreateTable
CREATE TABLE `videos` (
    `user_id` INTEGER NOT NULL,
    `video_id` INTEGER NOT NULL AUTO_INCREMENT,
    `data` TEXT NOT NULL,
    `video` LONGBLOB NOT NULL,
    `processed` BOOLEAN NOT NULL,
    `date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`video_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
