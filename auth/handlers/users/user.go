package users

import (
	db "auth/models"
	query "auth/query/create"
	"fmt"

	"github.com/gin-gonic/gin"
)

func CreateUser(c *gin.Context) {
	var user db.User
	c.BindJSON(&user)
	instance, err := query.CreateUser(user.Username, user.Password)
	if err != nil {
		c.IndentedJSON(401, gin.H{
			"status": 401,
			"error":  err,
		})
		return
	}
	fmt.Println(user.Username)
	c.IndentedJSON(201, gin.H{
		"status":  201,
		"created": instance,
	})
}
