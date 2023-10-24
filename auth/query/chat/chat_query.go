package query

import (
	"auth/exceptions"
	"auth/models"
	"errors"
	"fmt"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

func CreateChat(title string, users []string) (result any, exception map[string]any) {
	db, _ := gorm.Open(sqlite.Open("test.db"), &gorm.Config{})

	chat := models.Chat{Title: title}
	for _, username := range users {
		var user models.User
		db.Where("username = ?", username).First(&user)
		chat.Users = append(chat.Users, user)
	}
	if err := db.Create(&chat).Error; err != nil {
		if db.Where(models.Chat{Title: chat.Title}).Take(&models.Chat{}).Error == nil {
			exception = exceptions.UniqueException("Chat")
			return nil, exception
		}
	}
	return chat, nil
}

func GetChat(id uint16) (result any, exception map[string]any) {
	db, _ := gorm.Open(sqlite.Open("test.db"))

	var chat models.Chat

	if err := db.Model(&models.Chat{}).Preload("Users").First(&chat, id).Error; err != nil && errors.Is(err, gorm.ErrRecordNotFound) {
		exception = exceptions.RecordNotFound("Chat")
		return nil, exception
	}
	fmt.Println(chat.Users)
	return chat, nil

}
