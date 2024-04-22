/*
  Warnings:

  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `email` on table `User` required. This step will fail if there are existing NULL values in that column.

*/


-- AlterTable
ALTER TABLE `User` ADD COLUMN `password` VARCHAR(191) NOT NULL,
    MODIFY `email` VARCHAR(191) NOT NULL;

-- Заполнение таблицы User
INSERT INTO `User` (`id`, `name`, `gender`, `phone`, `email`, `year`, `mounth`, `day`, `labaratory_id`, User.`password`, `role`)
VALUES ('5cdb7194-38ed-4cc5-b899-23a3917b079d', 'CrossoWar', 'MALE', '123456789', 'user1@example.com', 1990, 5, 20, 1, 'asdjaoifh', 'USER'),
       ('034e23c8-cafd-4e0a-a07a-4097e5afdbe8', 'Alexi', 'FEMALE', '987654321', 'user2@example.com', 1985, 8, 15, 2, 'asdjaoifh', 'USER'),
       ('41430f13-6a7a-4069-a884-9edf4e19ba13', 'Nezox', 'MALE', '555555555', 'user3@example.com', 2000, 2, 8, 3, 'asdjaoifh', 'USER');

-- Заполнение таблицы Metrics
INSERT INTO `Metrics` (`type`, `value`, `created_at`, `user_id`)
VALUES ('biologicalAgeWithTests', 30.5, '2024-02-06 12:00:00', '5cdb7194-38ed-4cc5-b899-23a3917b079d'),
       ('commonScrining', 95.2, '2024-02-06 12:15:00', '034e23c8-cafd-4e0a-a07a-4097e5afdbe8'),
       ('heart', 120.0, '2024-02-06 13:30:00', '41430f13-6a7a-4069-a884-9edf4e19ba13');

-- Заполнение таблицы Quiz
INSERT INTO `Quiz` (`user_id`, `question`, `answer`, `answer_date`)
VALUES ('5cdb7194-38ed-4cc5-b899-23a3917b079d', 'Weight', 70, '2024-02-06 14:00:00'),
       ('034e23c8-cafd-4e0a-a07a-4097e5afdbe8', 'Height', 165, '2024-02-06 14:30:00'),
       ('41430f13-6a7a-4069-a884-9edf4e19ba13', 'WaistCircumference', 80, '2024-02-06 15:00:00');

-- Заполнение таблицы TestResults (20)
INSERT INTO `TestResults` (`id`, `user_id`, `type`, `value`, `unit`, `TestYear`, `TestMounth`, `TestDay`)
VALUES ('result1', '5cdb7194-38ed-4cc5-b899-23a3917b079d', 'GLUCOSE_IN_BLOOD', 5.2, 'GRAM_PER_LITER', 2024, 1, 5),
       ('result2', '034e23c8-cafd-4e0a-a07a-4097e5afdbe8', 'TOTAL_CHOLESTEROL', 200.5, 'GRAM_PER_LITER', 2024, 2, 10),
       ('result3', '41430f13-6a7a-4069-a884-9edf4e19ba13', 'CREATININE_IN_BLOOD', 0.8, 'GRAM_PER_LITER', 2024, 3, 15);

