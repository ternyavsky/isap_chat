package exceptions

func UniqueException(instance string) map[string]any {
	var result = make(map[string]any)
	switch instance {
	case "User":
		result["text"] = "Пользователь с таким ником уже существует!"
	case "Chat":
		result["text"] = "Чат с таким названием уже существует!"
	}
	return result
}

func RecordNotFound(instance string) map[string]any {
	var result = make(map[string]any)
	switch instance {
	case "User":
		result["text"] = "Пользователь с таким id не найден"

	case "Chat":
		result["text"] = "Чат с таким id не найден"

	case "Message":
		result["text"] = "Сообщение с таким id не найдено"
	}
	return result
}
