-- Create Users Table
CREATE TABLE IF NOT EXISTS `Users` (
    `user_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `username` VARCHAR(50) NOT NULL UNIQUE,
    `email` VARCHAR(100) NOT NULL UNIQUE,
    `password_hashed` VARCHAR(255) NOT NULL,
    `role` VARCHAR(50) NOT NULL,
    `active_status` TINYINT(1) NOT NULL DEFAULT 1,
    `added_date` DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;


CREATE TABLE IF NOT EXISTS `user_privileges` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT NOT NULL,
    `privilege` VARCHAR(255) NOT NULL,
    FOREIGN KEY (`user_id`) REFERENCES `Users`(`user_id`) ON DELETE CASCADE
) ENGINE=InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Insert default admin user
INSERT INTO `Users` (`username`, `email`, `password_hashed`, `role`)
VALUES 
    ('admin', 'admin@admin.com', '$2b$10$DX9eZK099SgsYXIWOyYDTef4Z/7emhCt9MsMVxyqUyDIlIZ1oRkE6', 'superadmin')
ON DUPLICATE KEY UPDATE 
    `password_hashed` = VALUES(`password_hashed`), 
    `role` = VALUES(`role`);

-- Create News Table
CREATE TABLE IF NOT EXISTS `News` (
    `news_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `news_title` VARCHAR(255) NOT NULL,
    `news_detail` TEXT NOT NULL,
    `news_description` TEXT,
    `news_link` VARCHAR(255),
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Create NewsImages Table
CREATE TABLE IF NOT EXISTS `NewsImages` (
    `image_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `news_id` INT NOT NULL,
    `image_link` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (`news_id`) REFERENCES `News`(`news_id`) ON DELETE CASCADE
) ENGINE=InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Create Health Tips Table
CREATE TABLE IF NOT EXISTS `Health_Tips` (
    `health_tip_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `health_tip_title` VARCHAR(255) NOT NULL,
    `health_tip_detail` VARCHAR(255),
    `health_tip_description` TEXT NOT NULL,
    `health_tip_link` VARCHAR(255),
    `health_tip_video_link` VARCHAR(255),
    `health_tip_image` VARCHAR(255),
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Create Vacancy Table
CREATE TABLE IF NOT EXISTS `Vacancy` (
    `vacancy_id` VARCHAR(36) NOT NULL PRIMARY KEY,
    `job_title` VARCHAR(255) NOT NULL,
    `job_description` TEXT NOT NULL,
    `job_requirements` TEXT NOT NULL,
    `qualifications` TEXT NOT NULL, 
    `job_grade` VARCHAR(50),        
    `terms` TEXT,                   
    `salary` VARCHAR(100),          
    `address` VARCHAR(255),         
    `deadline` DATE NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Create Applicant Table
CREATE TABLE IF NOT EXISTS `Applicant` ( 
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    `first_name` VARCHAR(50) NOT NULL, 
    `last_name` VARCHAR(50) NOT NULL, 
    `email_address` VARCHAR(100) NOT NULL, 
    `phone_number` VARCHAR(20),
    `position_applied_for` VARCHAR(100), 
    `additional_information` TEXT NOT NULL, 
    `cv_file_path` VARCHAR(255) NOT NULL, 
    `other_testimonials` VARCHAR(255) NOT NULL, 
    `Status` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Create the video_embeds Table
CREATE TABLE IF NOT EXISTS `video_embeds` (
    `video_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(255) NOT NULL,         
    `video_link` VARCHAR(255) NOT NULL,   
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP 
) ENGINE=InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Insert default video link
INSERT INTO `video_embeds` (`title`, `video_link`)
VALUES 
    ('test', 'https://www.youtube.com/watch?v=T8VqfQACMbM&t=511s')
ON DUPLICATE KEY UPDATE 
    `video_link` = VALUES(`video_link`);

-- Create contact Table
CREATE TABLE IF NOT EXISTS `contact` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `subject` VARCHAR(255) NOT NULL,
    `message` TEXT NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Create cpd_trainings Table
CREATE TABLE IF NOT EXISTS `cpd_trainings` (
    `training_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `course_name` VARCHAR(255) NOT NULL UNIQUE,
    `course_level` VARCHAR(255) NOT NULL,
    `pri_test` VARCHAR(255) NOT NULL,
    `pri_test_duration` VARCHAR(255) NOT NULL,
    `post_test` VARCHAR(255) NOT NULL,
    `post_test_duration` VARCHAR(255) NOT NULL,
    `minimum_score` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Create training schedule Table
CREATE TABLE IF NOT EXISTS `training_schedule` (
    `schedule_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `training_id` INT NOT NULL,
    `course_name` VARCHAR(255) NOT NULL,
    `registration_start_date` DATE NOT NULL,
    `registration_end_date` DATE NOT NULL,
    `registration_status` BOOLEAN DEFAULT FALSE,
    `course_start_date` DATE NOT NULL,
    `course_end_date` DATE NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    FOREIGN KEY (training_id) REFERENCES cpd_trainings(training_id),
    FOREIGN KEY (course_name) REFERENCES cpd_trainings(course_name)
) ENGINE=InnoDB;

-- Create cpd_news Table
CREATE TABLE IF NOT EXISTS `cpd_news` (
    `news_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `news_title` VARCHAR(255) NOT NULL,
    `news_description` TEXT,
    `expiry_date` DATE,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Create trainees Table
CREATE TABLE IF NOT EXISTS `trainees` (
    `trainee_id` VARCHAR(36) NOT NULL PRIMARY KEY,
    `email` VARCHAR(255) NOT NULL UNIQUE,
    `password` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Create trainees_info Table
CREATE TABLE IF NOT EXISTS `trainees_info` (
    `id` VARCHAR(36) NOT NULL PRIMARY KEY,
    `trainee_id` VARCHAR(36) NOT NULL,
    `first_name` VARCHAR(255) NOT NULL,
    `middle_name` VARCHAR(255),
    `last_name` VARCHAR(255) NOT NULL,
    `sex` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NOT NULL,
    `profession` VARCHAR(255),
    `account_number` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,    
    FOREIGN KEY (trainee_id) REFERENCES trainees(trainee_id)
) ENGINE=InnoDB;

-- Create courses Table
CREATE TABLE IF NOT EXISTS `courses` (
    `course_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `trainee_id` VARCHAR(36) NOT NULL,
    `schedule_id` INT NOT NULL,
    `course_name` VARCHAR(255) NOT NULL,
    `pri_score` VARCHAR(255),
    `post_score` VARCHAR(255),
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (trainee_id) REFERENCES trainees(trainee_id),
    FOREIGN KEY (course_name) REFERENCES cpd_trainings(course_name),
    FOREIGN KEY (schedule_id) REFERENCES training_schedule(schedule_id)
) ENGINE=InnoDB;

-- Create trainees_status Table
CREATE TABLE IF NOT EXISTS `trainees_status` (
    `status_id` VARCHAR(36) NOT NULL PRIMARY KEY,
    `trainee_id` VARCHAR(36) NOT NULL,
    `course_name` VARCHAR(255) NOT NULL,
    `registration` VARCHAR(255) NOT NULL,
    `pri_test` VARCHAR(255) ,
    `post_test` VARCHAR(255) ,
    `certificate` VARCHAR(255) ,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (trainee_id) REFERENCES trainees(trainee_id),
    FOREIGN KEY (course_name) REFERENCES cpd_trainings(course_name)
) ENGINE=InnoDB;
CREATE TABLE IF NOT EXISTS `contacts` (
   `id` INT AUTO_INCREMENT PRIMARY KEY,
   `name` VARCHAR(100) NOT NULL,
   `email` VARCHAR(100) NOT NULL,
   `subject` VARCHAR(255),
   `message` TEXT NOT NULL,
   `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;