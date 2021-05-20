/*
  Warnings:

  - Added the required column `score` to the `videos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `videos` ADD COLUMN `score` DOUBLE NOT NULL;
