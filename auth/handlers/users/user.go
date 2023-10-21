package users

import (
	"auth/models"
	query "auth/query/user"
	"strconv"

	"github.com/gin-gonic/gin"
)

func Login(c *gin.Context) {
	var user models.User
	c.BindJSON(&user)
	instance, err := query.Login(user.Username, user.Password)
	if err != nil {
		c.IndentedJSON(401, gin.H{
			"status": 401,
			"error":  "Неверный логин или пароль",
		})
		return
	}
	c.IndentedJSON(200, gin.H{
		"status": 200,
		"user":   instance,
	})
}

func CreateUser(c *gin.Context) {
	var user models.User
	c.BindJSON(&user)
	instance, err := query.CreateUser(user.Username, user.Password)
	if err != nil {
		c.IndentedJSON(400, gin.H{
			"status": 400,
			"error":  err,
		})
		return
	}
	c.IndentedJSON(201, gin.H{
		"status":  201,
		"created": instance,
	})
}

func GetUser(c *gin.Context) {
	id := c.Param("id")
	intId, _ := strconv.Atoi(id)
	instance, err := query.GetUser(uint16(intId))
	if err != nil {
		c.IndentedJSON(400, gin.H{
			"status": 400,
			"error":  err,
		})
		return
	}
	c.IndentedJSON(200, gin.H{
		"status": 200,
		"user":   instance,
	})

}
