-- CreateTable
CREATE TABLE `City`
(
    `id`         INTEGER      NOT NULL,
    `name`       VARCHAR(191) NOT NULL,
    `country_id` INTEGER      NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Country`
(
    `id`   INTEGER      NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Labaratory`
(
    `id`                INTEGER      NOT NULL,
    `constructedYear`   INTEGER      NOT NULL,
    `constructedMounth` INTEGER      NOT NULL,
    `constructedDay`    INTEGER      NOT NULL,
    `city_id`           INTEGER      NOT NULL,
    `name`              VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Metrics`
(
    `id`         INTEGER                                                                                                                                                                                                                        NOT NULL AUTO_INCREMENT,
    `type`       ENUM ('biologicalAgeWithTests', 'biologicalAgeWithoutTests', 'agingRateCoefficient', 'organism', 'commonScrining', 'liver', 'genitourinary', 'heart', 'blood', 'harmonics', 'digestion', 'immunity', 'nervous', 'respiratory') NOT NULL,
    `value`      DOUBLE                                                                                                                                                                                                                         NOT NULL,
    `created_at` DATETIME(3)                                                                                                                                                                                                                    NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `user_id`    VARCHAR(191)                                                                                                                                                                                                                   NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Quiz`
(
    `id`          INTEGER                                                             NOT NULL AUTO_INCREMENT,
    `user_id`     VARCHAR(191)                                                        NOT NULL,
    `question`    ENUM ('Weight', 'Height', 'WaistCircumference', 'HipCircumference') NOT NULL,
    `answer`      INTEGER                                                             NOT NULL,
    `answer_date` DATETIME(3)                                                         NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TestResults`
(
    `id`         VARCHAR(191) NOT NULL,
    `user_id`    VARCHAR(191) NOT NULL,
    `type`       ENUM ('ESR_VENOUS_BLOOD', 'OSTEOCALCIN', 'ALT_ALANINE_AMINOTRANSFERASE', 'ALBUMEN', 'PANCREATIC_AMYLASE', 'ASL_O_ANTISTREPTOLYSIN_O', 'AST_ASPARTATE_AMINOTRANSFERASE', 'GAMMA_GLUTAMYLTRANSPEPTIDASE', 'GLUCOSE_IN_BLOOD', 'HOMOCYSTEINE', 'IRON', 'TOTAL_CALCIUM', 'CREATINEKINASE_COMMON', 'LIPASE', 'MAGNESIUM', 'URIC_ACID_IN_SERUM', 'UREA_IN_BLOOD', 'TOTAL_PROTEIN_IN_BLOOD', 'TOTAL_BILIRUBIN', 'FERRITIN', 'ALKALINE_PHOSPHATASE', 'INORGANIC_PHOSPHORUS', 'CHOLINESTERASE', 'CALCIUM_IN_URINE', 'CREATININE_IN_URINE', 'TOTAL_PROTEIN_IN_LIQUOR', 'PYRILINKS_D', 'NT_PROBNP', 'BONE_MATRIX_FORMING_MARKER_P1NP', 'TOTAL_IMMUNOGLOBULINS_A_IN_SERUM', 'TOTAL_IMMUNOGLOBULINS_G_IN_SERUM', 'TOTAL_IMMUNOGLOBULINS_M_IN_SERUM', 'ALPHA_FETOPROTEIN_AFP', 'TOTAL_IMMUNOGLOBULINS_E_IN_SERUM', 'SEXHORMONE_BINDING_GLOBULIN', 'INSULINLIKE_GROWTH_FACTOR', 'LEPTIN', 'DEHYDROEPIANDROSTERONESULFATE', 'TRIIODOTHYRONINE_TOTAL', 'TYROXIN_GENERAL', 'FOLLICLESTIMULATING_HORMONE', 'T3_Triiodothyronine_Reverse', 'T4_THYROXINE_FREE', 'T3_TRIIODOTHYRONINE_FREE', 'ANTIBODIES_TO_GLIADIN_IGA', 'ANTIBODIES_TO_GLIADIN_IGG', 'ANGIOTENSIN_CONVERTING_ENZYME_SERUM', 'ANTI_CHLAMYDIA_TR_IGG_IGG_ANTIBODIES_TO_CHLAMYDIA_TRACHOMATIS', 'ANTI_TG_ANTITHYROGLOBULIN_ANTIBODIES', 'ANTI_TPO_ANTIBODIES_TO_MICROSOMAL_THYROID_PEROXIDASE', 'ANTIBODIES_TO_THYROID_STIMULATING_HORMONE_RECEPTORS_AT_RTSH', 'GLYCATED_HEMOGLOBIN_A1C', 'CALCITONIN', 'PSA_TOTAL_PROSTATE_SPECIFIC_ANTIGEN_TOTAL', 'PARATHYROID_HORMONE_PARATHYROID_HORMONE', 'PROTHROMBIN_TIME_ACCORDING_TO_QUICK_INR', 'RHEUMATOID_FACTOR_RF', 'C_REACTIVE_PROTEIN', 'GLOMERULAR_FILTRATION_RATE_BLOOD', 'TSH_THYROID_STIMULATING_HORMONE', 'THYROGLOBULIN', 'TRIGLYCERIDES', 'TROPONIN_I', 'FIBRINOGEN', 'TOTAL_CHOLESTEROL', 'HDL_CHOLESTEROL_HIGH_DENSITY_LIPOPROTEIN_CHOLESTEROL', 'LDL_CHOLESTEROL_LOW_DENSITY_LIPOPROTEIN_CHOLESTEROL', 'GASTRIN_17', 'PEPSINOGEN_I', 'PEPSYNOGEN_II', 'ANTIBODIES_TO_CYCLIC_CITRULLINATED_PEPTIDE_ACCP', 'DIRECT_BILIRUBIN', 'CREATININE_IN_BLOOD', 'MICROALBUMIN_IN_A_SINGLE_URINE_SAMPLE', 'MYOGLOBIN', 'UREA', 'NA_IN_BLOOD', 'K_IN_BLOOD', 'CL_IN_BLOOD', 'PSA_FREE_PROSTATE_SPECIFIC_ANTIGEN_FREE', 'APOLIPOPROTEINA1', 'APOLIPOPROTEINB', 'LEUKOCYTES', 'ERYTHROCYTES', 'HEMOGLOBIN', 'HEMATOCRIT', 'MCV', 'MCH', 'MCHC', 'THROMBOCYTES', 'RDW_SD', 'RDW_CV', 'PDW', 'MPV', 'P_LCR', 'NEUTROPHILS', 'LYMPHOCYTES', 'MONOCYTES', 'EOSINOPHILS', 'BASOPHILS', 'COE') NOT NULL,
    `value`      DOUBLE NOT NULL,
    `unit`       ENUM ('MILIMOL_PER_LITER', 'MICROMOL_PER_LITER', 'PERCENT', 'GRAM_PER_LITER', 'PIKAGRAM_PER_MILILITER', 'MG_PER_LITER', 'MG_PER_MILILITER', 'UNITS', 'MILIMETR_PER_HOUR', 'NANAGRAM_PER_MILILITER', 'NANAGRAM_PER_LITER', 'UNIT_PER_LITER', 'UNIT_PER_MILILITER', 'MILIMOL_PER_DAY', 'MG_PER_DAY', 'NANOMOL', 'NANOMOL_PER_LITER', 'MICROGRAM_PER_DECELITER', 'MICROGRAM_PER_LITER', 'MNO', 'MICROUNIT_PER_MILILITER', 'PIKAMOL_PER_LITER', 'MILIUNIT_PER_MILILITER', 'PIKAGRAM_PER_LITER', 'FEMTOLITER', 'PIKAGRAM', 'GIGAUNITS_PER_LITER', 'TERAUNITS_PER_LITER', 'V_POLE_ZRENII', 'GRAM_PER_DECELITRE', 'MEGAUNITS_PER_MICROLITER', 'KILOUNITS_PER_MICROLITER') NOT NULL,
    `TestYear`   INTEGER NOT NULL,
    `TestMounth` INTEGER NOT NULL,
    `TestDay`    INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User`
(
    `id`            VARCHAR(191)            NOT NULL,
    `name`          VARCHAR(191)            NOT NULL,
    `gender`        ENUM ('MALE', 'FEMALE') NOT NULL,
    `phone`         VARCHAR(191)            NULL,
    `email`         VARCHAR(191)            NULL,
    `year`          INTEGER                 NOT NULL,
    `mounth`        INTEGER                 NOT NULL,
    `day`           INTEGER                 NOT NULL,
    `labaratory_id` INTEGER                 NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `City`
    ADD CONSTRAINT `City_country_id_fkey` FOREIGN KEY (`country_id`) REFERENCES `Country` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Labaratory`
    ADD CONSTRAINT `Labaratory_city_id_fkey` FOREIGN KEY (`city_id`) REFERENCES `City` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Metrics`
    ADD CONSTRAINT `Metrics_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Quiz`
    ADD CONSTRAINT `Quiz_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TestResults`
    ADD CONSTRAINT `TestResults_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User`
    ADD CONSTRAINT `User_labaratory_id_fkey` FOREIGN KEY (`labaratory_id`) REFERENCES `Labaratory` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- Заполнение таблицы Country
INSERT INTO `Country` (`id`, `name`)
VALUES (1, 'Belarus'),
       (2, 'Russia'),
       (3, 'Kazakhstan');

-- Заполнение таблицы City
INSERT INTO `City` (`id`, `name`, `country_id`)
VALUES (1, 'Minsk', 1),
       (2, 'Brest', 1),
       (4, 'Saint-Petersburg', 2),
       (5, 'Astana', 3),
       (3, 'Moscow', 2);

-- Заполнение таблицы Labaratory
INSERT INTO `Labaratory` (`id`, `constructedYear`, `constructedMounth`, `constructedDay`, `city_id`, `name`)
VALUES (1, 2020, 1, 15, 1, 'Lab1'),
       (2, 2018, 3, 22, 2, 'Lab2'),
       (4, 2021, 7, 19, 4, 'Lab2'),
       (5, 2021, 8, 23, 5, 'Lab2'),
       (3, 2019, 5, 10, 3, 'Lab3');

-- Заполнение таблицы User
INSERT INTO `User` (`id`, `name`, `gender`, `phone`, `email`, `year`, `mounth`, `day`, `labaratory_id`)
VALUES ('5cdb7194-38ed-4cc5-b899-23a3917b079d', 'CrossoWar', 'MALE', '123456789', 'user1@example.com', 1990, 5, 20, 1),
       ('034e23c8-cafd-4e0a-a07a-4097e5afdbe8', 'Alexi', 'FEMALE', '987654321', 'user2@example.com', 1985, 8, 15, 2),
       ('41430f13-6a7a-4069-a884-9edf4e19ba13', 'Nezox', 'MALE', '555555555', 'user3@example.com', 2000, 2, 8, 3);

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


CREATE PROCEDURE GetMetricsByUserAndType(IN userId VARCHAR(191),
                                         IN metricType ENUM ('biologicalAgeWithTests', 'biologicalAgeWithoutTests', 'agingRateCoefficient', 'organism', 'commonScrining', 'liver', 'genitourinary', 'heart', 'blood', 'harmonics', 'digestion', 'immunity', 'nervous', 'respiratory'))
BEGIN
    SELECT *
    FROM Metrics
    WHERE user_id = userId
      AND type = metricType;
END;


CREATE PROCEDURE GetQuizResultsByUser(IN userId VARCHAR(191))
BEGIN
    SELECT *
    FROM Quiz
    WHERE user_id = userId;
END;


CREATE PROCEDURE GetTestResultsByUserAndType(IN userId VARCHAR(191),
                                             IN testType ENUM ('ESR_VENOUS_BLOOD', 'OSTEOCALCIN', 'ALT_ALANINE_AMINOTRANSFERASE', 'ALBUMEN', 'PANCREATIC_AMYLASE', 'ASL_O_ANTISTREPTOLYSIN_O', 'AST_ASPARTATE_AMINOTRANSFERASE', 'GAMMA_GLUTAMYLTRANSPEPTIDASE', 'GLUCOSE_IN_BLOOD', 'HOMOCYSTEINE', 'IRON', 'TOTAL_CALCIUM', 'CREATINEKINASE_COMMON', 'LIPASE', 'MAGNESIUM', 'URIC_ACID_IN_SERUM', 'UREA_IN_BLOOD', 'TOTAL_PROTEIN_IN_BLOOD', 'TOTAL_BILIRUBIN', 'FERRITIN', 'ALKALINE_PHOSPHATASE', 'INORGANIC_PHOSPHORUS', 'CHOLINESTERASE', 'CALCIUM_IN_URINE', 'CREATININE_IN_URINE', 'TOTAL_PROTEIN_IN_LIQUOR', 'PYRILINKS_D', 'NT_PROBNP', 'BONE_MATRIX_FORMING_MARKER_P1NP', 'TOTAL_IMMUNOGLOBULINS_A_IN_SERUM', 'TOTAL_IMMUNOGLOBULINS_G_IN_SERUM', 'TOTAL_IMMUNOGLOBULINS_M_IN_SERUM', 'ALPHA_FETOPROTEIN_AFP', 'TOTAL_IMMUNOGLOBULINS_E_IN_SERUM', 'SEXHORMONE_BINDING_GLOBULIN', 'INSULINLIKE_GROWTH_FACTOR', 'LEPTIN', 'DEHYDROEPIANDROSTERONESULFATE', 'TRIIODOTHYRONINE_TOTAL', 'TYROXIN_GENERAL', 'FOLLICLESTIMULATING_HORMONE', 'T3_Triiodothyronine_Reverse', 'T4_THYROXINE_FREE', 'T3_TRIIODOTHYRONINE_FREE', 'ANTIBODIES_TO_GLIADIN_IGA', 'ANTIBODIES_TO_GLIADIN_IGG', 'ANGIOTENSIN_CONVERTING_ENZYME_SERUM', 'ANTI_CHLAMYDIA_TR_IGG_IGG_ANTIBODIES_TO_CHLAMYDIA_TRACHOMATIS', 'ANTI_TG_ANTITHYROGLOBULIN_ANTIBODIES', 'ANTI_TPO_ANTIBODIES_TO_MICROSOMAL_THYROID_PEROXIDASE', 'ANTIBODIES_TO_THYROID_STIMULATING_HORMONE_RECEPTORS_AT_RTSH', 'GLYCATED_HEMOGLOBIN_A1C', 'CALCITONIN', 'PSA_TOTAL_PROSTATE_SPECIFIC_ANTIGEN_TOTAL', 'PARATHYROID_HORMONE_PARATHYROID_HORMONE', 'PROTHROMBIN_TIME_ACCORDING_TO_QUICK_INR', 'RHEUMATOID_FACTOR_RF', 'C_REACTIVE_PROTEIN', 'GLOMERULAR_FILTRATION_RATE_BLOOD', 'TSH_THYROID_STIMULATING_HORMONE', 'THYROGLOBULIN', 'TRIGLYCERIDES', 'TROPONIN_I', 'FIBRINOGEN', 'TOTAL_CHOLESTEROL', 'HDL_CHOLESTEROL_HIGH_DENSITY_LIPOPROTEIN_CHOLESTEROL', 'LDL_CHOLESTEROL_LOW_DENSITY_LIPOPROTEIN_CHOLESTEROL', 'GASTRIN_17', 'PEPSINOGEN_I', 'PEPSYNOGEN_II', 'ANTIBODIES_TO_CYCLIC_CITRULLINATED_PEPTIDE_ACCP', 'DIRECT_BILIRUBIN', 'CREATININE_IN_BLOOD', 'MICROALBUMIN_IN_A_SINGLE_URINE_SAMPLE', 'MYOGLOBIN', 'UREA', 'NA_IN_BLOOD', 'K_IN_BLOOD', 'CL_IN_BLOOD', 'PSA_FREE_PROSTATE_SPECIFIC_ANTIGEN_FREE', 'APOLIPOPROTEINA1', 'APOLIPOPROTEINB', 'LEUKOCYTES', 'ERYTHROCYTES', 'HEMOGLOBIN', 'HEMATOCRIT', 'MCV', 'MCH', 'MCHC', 'THROMBOCYTES', 'RDW_SD', 'RDW_CV', 'PDW', 'MPV', 'P_LCR', 'NEUTROPHILS', 'LYMPHOCYTES', 'MONOCYTES', 'EOSINOPHILS', 'BASOPHILS', 'COE'))
BEGIN
    SELECT *
    FROM TestResults
    WHERE user_id = userId
      AND type = testType;
END;


-- Это представление будет содержать информацию о пользователях и их метриках.

CREATE VIEW UserMetricsView AS
SELECT U.id         AS user_id,
       U.name       AS user_name,
       U.gender,
       M.type       AS metric_type,
       M.value      AS metric_value,
       M.created_at AS metric_created_at
FROM User U
         JOIN Metrics M ON U.id = M.user_id;

-- Это представление будет содержать информацию о пользователях и их ответах в опросах.

CREATE VIEW UserQuizView AS
SELECT U.id   AS user_id,
       U.name AS user_name,
       Q.question,
       Q.answer,
       Q.answer_date
FROM User U
         JOIN Quiz Q ON U.id = Q.user_id;

-- Это представление будет содержать информацию о пользователях и их результатам тестов.

CREATE VIEW UserTestResultsView AS
SELECT U.id          AS user_id,
       U.name        AS user_name,
       TR.type       AS test_type,
       TR.value      AS test_value,
       TR.unit       AS test_unit,
       TR.TestYear   AS test_year,
       TR.TestMounth AS test_month,
       TR.TestDay    AS test_day
FROM User U
         JOIN TestResults TR ON U.id = TR.user_id;


-- Функции

-- Возвращает возраст пользователя

CREATE FUNCTION GetUserAge(userId VARCHAR(191))
    RETURNS INTEGER
    DETERMINISTIC
BEGIN
    DECLARE birthdate DATE;
    SELECT DATE_FORMAT(CONCAT(year, '-', mounth, '-', day), '%Y-%m-%d')
    INTO birthdate
    FROM User
    WHERE id = userId;

    RETURN YEAR(CURDATE()) - YEAR(birthdate) - (DATE_FORMAT(CURDATE(), '%m%d') < DATE_FORMAT(birthdate, '%m%d'));
END;


-- Возвращает пол пользователя.

-- Возвращает пол пользователя.
CREATE FUNCTION GetUserGender(userId VARCHAR(191))
    RETURNS ENUM ('MALE', 'FEMALE')
    DETERMINISTIC
BEGIN
    DECLARE userGender ENUM ('MALE', 'FEMALE');
    SELECT gender
    INTO userGender
    FROM User
    WHERE id = userId;

    RETURN userGender;
END;

-- Проверяет, является ли пользователь взрослым (старше 18 лет).
CREATE FUNCTION IsUserAdult(userId VARCHAR(191))
    RETURNS BOOLEAN
    DETERMINISTIC
BEGIN
    DECLARE userAge INTEGER;
    SET userAge = GetUserAge(userId);

    RETURN userAge >= 18;
END;



-- Триггеры

-- Будет проверять возраст пользователя и не допускать значения меньше 14 лет (30)

CREATE TRIGGER CheckUserAge
    BEFORE INSERT
    ON `User`
    FOR EACH ROW
BEGIN
    DECLARE userBirthdate DATE;
    SET userBirthdate = STR_TO_DATE(CONCAT(NEW.year, '-', NEW.mounth, '-', NEW.day), '%Y-%m-%d');

    IF TIMESTAMPDIFF(YEAR, userBirthdate, CURDATE()) < 14 THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'User age must be at least 14 years old.';
    END IF;
END;

-- Города и страны должны быть с большой и содержать только латинские буквы

CREATE TRIGGER CheckCityCountryName
    BEFORE INSERT
    ON `City`
    FOR EACH ROW
BEGIN
    IF NOT (NEW.name REGEXP '^[A-Za-z][A-Za-z ]*$') THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'City name must start with a capital letter and contain only English letters.';
    END IF;
END;

CREATE TRIGGER CheckCountryName
    BEFORE INSERT
    ON `Country`
    FOR EACH ROW
BEGIN
    IF NOT (NEW.name REGEXP '^[A-Za-z][A-Za-z ]*$') THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Country name must start with a capital letter and contain only English letters.';
    END IF;
END;

CREATE PROCEDURE InsertUser(
    IN p_id VARCHAR(191),
    IN p_name VARCHAR(191),
    IN p_gender ENUM('MALE', 'FEMALE'),
    IN p_phone VARCHAR(191),
    IN p_email VARCHAR(191),
    IN p_year INTEGER,
    IN p_month INTEGER,
    IN p_day INTEGER,
    IN p_laboratory_id INTEGER
)
BEGIN
    DECLARE new_id VARCHAR(191);

    INSERT INTO `User` (
        `id`,`name`, `gender`, `phone`, `email`, `year`, `mounth`, `day`, `labaratory_id`
    ) VALUES (
                     p_id,p_name, p_gender, p_phone, p_email, p_year, p_month, p_day, p_laboratory_id
             );

    SET new_id = LAST_INSERT_ID();

    SELECT new_id AS new_user_id;
END;

CREATE FUNCTION GetUsersByIds(userIds TEXT)
    RETURNS JSON
    READS SQL DATA
BEGIN
    DECLARE user_data JSON;

    IF JSON_LENGTH(userIds) = 0 THEN
        SELECT JSON_ARRAYAGG(JSON_OBJECT('id', id, 'name', name, 'gender', gender, 'phone', phone, 'email', email, 'year', year, 'mounth', mounth, 'day', day, 'labaratory_id', labaratory_id))
        INTO user_data
        FROM User;
    ELSE
        SELECT JSON_ARRAYAGG(JSON_OBJECT('id', id, 'name', name, 'gender', gender, 'phone', phone, 'email', email, 'year', year, 'mounth', mounth, 'day', day, 'labaratory_id', labaratory_id))
        INTO user_data
        FROM User AS u
        WHERE CONVERT(u.id USING utf8mb4) IN (
            SELECT CONVERT(id USING utf8mb4)
            FROM JSON_TABLE(userIds, '$[*]' COLUMNS (id VARCHAR(191) PATH '$')) AS ids
        );
    END IF;

    RETURN user_data;
END;

CREATE FUNCTION getLabInfoById(labId INT)
    RETURNS JSON
    READS SQL DATA
BEGIN
    DECLARE labInfo JSON;

    SELECT
        JSON_OBJECT(
                'lab_id', Labaratory.id,
                'lab_name', Labaratory.name,
                'constructedYear', Labaratory.constructedYear,
                'constructedMounth', Labaratory.constructedMounth,
                'constructedDay', Labaratory.constructedDay,
                'city_name', City.name,
                'country_name', Country.name
        )
    INTO labInfo
    FROM Labaratory
             JOIN City ON Labaratory.city_id = City.id
             JOIN Country ON City.country_id = Country.id
    WHERE Labaratory.id = labId;

    RETURN labInfo;
END;



