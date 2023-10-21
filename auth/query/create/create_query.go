package query

import (
	"auth/exceptions"
	models "auth/models"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

func CreateUser(username string, password string) (result any, exception map[string]any) {
	db, _ := gorm.Open(sqlite.Open("test.db"), &gorm.Config{})

	user := models.User{Username: username, Password: password}
	if err := db.Create(&user).Error; err != nil {
		if db.Where(models.User{Username: user.Username}).Take(&models.User{}).Error == nil {
			exception = exceptions.UniqueException()
			return nil, exception
		}
	}
	return user, nil
}

func CreateChat() {

}

func CreateMessage() {

}
