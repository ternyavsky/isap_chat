package main

import (
	"auth/handlers/users"
	models "auth/models"

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

	// query.CreateUser("Dim", "diman123")
	println("log after create")

	router := gin.Default()
	router.POST("/registration", users.CreateUser)

	router.Run("localhost:8000")
}
