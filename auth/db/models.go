package db

type User struct {
	Base
	Username string `json:"username"`
	Password string `json:"password"`
	ImgURL   string `json:"img_url"`
	Chats    []Chat `gorm:"many2many:chat_members;"`
}

type Message struct {
	Base
	Text     string `json:"text"`
	AuthorID uint16
	Author   User
	ChatId   uint16
	Chat     Chat
}

type Chat struct {
	Base
	Title string `json:"title"`
}
