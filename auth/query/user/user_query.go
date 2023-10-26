package query

import (
	"auth/exceptions"
	"auth/models"
	"errors"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

func CreateUser(username string, password string) (result any, exception map[string]any) {
	db, _ := gorm.Open(sqlite.Open("test.db"), &gorm.Config{})

	user := models.User{Username: username, Password: password}
	if err := db.Create(&user).Error; err != nil {
		if db.Where(models.User{Username: user.Username}).Take(&models.User{}).Error == nil {
			exception = exceptions.UniqueException("User")
			return nil, exception
		}
	}
	return user, nil
}

func Login(username string, password string) (result models.User, exception map[string]any) {
	db, _ := gorm.Open(sqlite.Open("test.db"), &gorm.Config{})
	var user models.User
	if err := db.First(&user, "username = ? and password = ?", username, password).Error; err != nil && errors.Is(err, gorm.ErrRecordNotFound) {
		exception = exceptions.RecordNotFound("User")
		return models.User{}, exception
	}
	return user, nil
}

func GetUser(id uint16) (result any, exception map[string]any) {
	db, _ := gorm.Open(sqlite.Open("test.db"))
	var user models.User
	if err := db.Model(&models.User{}).Preload("Chats").First(&user, id).Error; err != nil && errors.Is(err, gorm.ErrRecordNotFound) {
		exception = exceptions.RecordNotFound("User")
		return nil, exception
	}
	return user, nil
}

func GetAllUsers() []models.User {
	db, _ := gorm.Open(sqlite.Open("test.db"))
	var users []models.User
	db.Model(&models.User{}).Preload("Chats").Find(&users)
	return users
}
