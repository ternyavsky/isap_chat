package exceptions

func UniqueException() map[string]any {
	var result = map[string]any{
		"text": "Пользователь с таким ником уже существует",
	}
	return result
}
