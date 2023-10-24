package chats

import (
	bindstruct "auth/bind_struct"
	query "auth/query/chat"
	"strconv"

	"github.com/gin-gonic/gin"
)

func CreateChat(c *gin.Context) {
	var chat bindstruct.ChatCreate
	c.BindJSON(&chat)
	instance, err := query.CreateChat(chat.Chat, chat.Users)
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

func GetChat(c *gin.Context) {
	id := c.Param("id")
	intId, _ := strconv.Atoi(id)
	instance, err := query.GetChat(uint16(intId))
	if err != nil {
		c.IndentedJSON(400, gin.H{
			"status": 400,
			"error":  err,
		})
		return
	}
	c.IndentedJSON(200, gin.H{
		"status": 200,
		"chat":   instance,
	})
}
