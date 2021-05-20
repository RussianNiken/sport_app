/*
  Warnings:

  - Added the required column `month` to the `videos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `week` to the `videos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `day` to the `videos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `videos` ADD COLUMN `month` INTEGER NOT NULL,
    ADD COLUMN `week` INTEGER NOT NULL,
    ADD COLUMN `day` INTEGER NOT NULL;
