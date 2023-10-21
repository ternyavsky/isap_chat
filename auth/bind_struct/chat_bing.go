package bindstruct


type ChatCreate struct {
	Chat  string   `json:"title"`
	Users []string `json:"username"`
}
