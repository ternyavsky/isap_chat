package users

import (
	"auth/models"
	query "auth/query/user"
	"strconv"

	"github.com/gin-gonic/gin"
)

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

func UpdateUser(c *gin.Context) {

}

func GetAllUsers(c *gin.Context) {
	users := query.GetAllUsers()
	c.IndentedJSON(200, gin.H{
		"status": 200,
		"users":  users,
	})
}
