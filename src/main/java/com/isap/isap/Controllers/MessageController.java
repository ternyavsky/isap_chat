package com.isap.isap.Controllers;


import com.isap.isap.dto.MessageDto;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class MessageController {





        // Обрабатывает сообщения из /app/chat
        @MessageMapping("/chat")
        // Отправляет возвращаемое значение этого метода в /topic/messages.
        @SendTo("/topic/messages")
        public MessageDto getMessages(MessageDto dto){

            return dto;

        }

    }

