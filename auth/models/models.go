package db

type User struct {
	Base
	Username string `gorm:"unique" json:"username"`
	Password string `json:"password"`
	ImgURL   string `json:"img_url"`
	Chats    []Chat `gorm:"many2many:user_chats;" json:"chats"`
}

type Message struct {
	Base
	Text     string `json:"text"`
	AuthorID uint16
	Author   User `json:"author"`
	ChatId   uint16
	Chat     Chat `json:"chat"`
}

type Chat struct {
	Base
	Users []User `gorm:"many2many:chat_members;" json:"chat_members"`
	Title string `json:"title"`
}
