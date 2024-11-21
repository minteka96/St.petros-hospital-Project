-- Create Users Table
CREATE TABLE IF NOT EXISTS `Users` (
    `user_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `username` VARCHAR(50) NOT NULL UNIQUE,
    `email` VARCHAR(100) NOT NULL UNIQUE,
    `password_hashed` VARCHAR(255) NOT NULL,
    `role` VARCHAR(50) NOT NULL,
    `active_status` TINYINT(1) NOT NULL DEFAULT 1,
    `added_date` DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Insert default admin user
INSERT INTO `Users` (`username`, `email`, `password_hashed`)
VALUES 
    ('admin', 'admin@admin.com', '$2b$10$DX9eZK099SgsYXIWOyYDTef4Z/7emhCt9MsMVxyqUyDIlIZ1oRkE6') 
ON DUPLICATE KEY UPDATE 
    `username` = VALUES(`username`), 
    `email` = VALUES(`email`);

-- Create News Table
CREATE TABLE IF NOT EXISTS `News` (
    `news_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `news_title` VARCHAR(255) NOT NULL,
    `news_detail` TEXT NOT NULL,
    `news_description` TEXT,
    `news_link` VARCHAR(255),
    `news_image_link` VARCHAR(255),
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Create Health Tips Table
CREATE TABLE IF NOT EXISTS `Health_Tips` (
    `health_tip_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `health_tip_title` VARCHAR(255) NOT NULL,
    `health_tip_description` TEXT NOT NULL,
    `image_link` VARCHAR(255),
    -- `video_link` VARCHAR(255),
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;


CREATE TABLE IF NOT EXISTS `Vacancy` (
    `vacancy_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `job_title` VARCHAR(255) NOT NULL,
    `job_description` TEXT NOT NULL,
    `job_requirements` TEXT NOT NULL,
    `qualifications` TEXT NOT NULL, 
    `job_grade` VARCHAR(50),        
    `terms` TEXT,                   
    `salary` VARCHAR(100),          
    `address` VARCHAR(255),         
    `application_link` VARCHAR(255),
    `deadline` DATE NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `Applicant` ( 
    `id` INT AUTO_INCREMENT PRIMARY KEY, 
    `first_name` VARCHAR(50) NOT NULL, 
    `last_name` VARCHAR(50) NOT NULL, 
    `email_address` VARCHAR(100) NOT NULL, 
    `position_applied_for` VARCHAR(100), 
    `additional_information` TEXT NOT NULL, 
    `cv_file_path` VARCHAR(255) NOT NULL, 
    `other_testimonials` VARCHAR(255) NOT NULL, 
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP 
) ENGINE=InnoDB;


-- Create the video_embeds table
CREATE TABLE IF NOT EXISTS `video_embeds` (
    `video_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(255) NOT NULL,         
    `description` TEXT,                    
    `video_link` VARCHAR(255) NOT NULL,   
    `thumbnail_link` VARCHAR(255),      
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP 
) ENGINE=InnoDB;