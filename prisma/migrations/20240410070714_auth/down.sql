-- AlterTable
ALTER TABLE `City` MODIFY `id` int NOT NULL;

-- AlterTable
ALTER TABLE `Country` MODIFY `id` int NOT NULL;

-- AlterTable
ALTER TABLE `Labaratory` MODIFY `id` int NOT NULL;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `password`,
    MODIFY `email` varchar(191) NULL;

-- CreateIndex
CREATE INDEX `City_country_id_fkey` ON `City`(`country_id` ASC);

-- CreateIndex
CREATE INDEX `Labaratory_city_id_fkey` ON `Labaratory`(`city_id` ASC);

-- CreateIndex
CREATE INDEX `Metrics_user_id_fkey` ON `Metrics`(`user_id` ASC);

-- CreateIndex
CREATE INDEX `Quiz_user_id_fkey` ON `Quiz`(`user_id` ASC);

-- CreateIndex
CREATE INDEX `TestResults_user_id_fkey` ON `TestResults`(`user_id` ASC);

-- CreateIndex
CREATE INDEX `User_labaratory_id_fkey` ON `User`(`labaratory_id` ASC);

