package main

import (
	"auth/handlers/chats"
	"auth/handlers/users"
	"auth/models"

	"github.com/gin-gonic/gin"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

func main() {
	db, err := gorm.Open(sqlite.Open("test.db"), &gorm.Config{})
	if err != nil {
		panic(err)
	}
	db.AutoMigrate(&models.User{}, &models.Chat{}, &models.Message{})

	println("log after create")

	router := gin.Default()
	router.POST("/registration", users.CreateUser)
	router.POST("/login", users.Login)
	router.POST("/chat", chats.CreateChat)
	router.GET("/user/:id", users.GetUser)

	router.Run("localhost:8000")
}
