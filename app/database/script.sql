CREATE DATABASE IF NOT EXISTS `task_list` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;

USE `task_list` ;

-- -----------------------------------------------------
-- Table `task_list`.`task`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `task_list`.`task` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT, 
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;
