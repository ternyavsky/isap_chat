package main

import (
	"auth/handlers/chats"
	"auth/handlers/users"
	"auth/middlewares"
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
	router.Use(middlewares.JwtMiddleware().MiddlewareFunc())
	{
		router.GET("/", users.GetAllUsers)
	}
	router.GET("/refresh_token", middlewares.JwtMiddleware().RefreshHandler)
	router.POST("/login", middlewares.JwtMiddleware().LoginHandler)
	router.POST("/user", users.CreateUser)
	router.GET("/user/:id", users.GetUser)
	router.POST("/chat", chats.CreateChat)
	router.GET("/chat/:id", chats.GetChat)

	router.Run("localhost:8000")
}
