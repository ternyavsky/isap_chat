package com.isap.isap.controller;



import com.isap.isap.controller.model.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessageType;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {


    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

    //метод получает данные для чата, а потом отправляет сообщение в частную тему чата
    @MessageMapping("/message") //общий чат
    @SendTo("/chatroom/public")
    private Message receivePublicMessage(@Payload Message message){
        return message;
    }

    //метод для отправки конкретному пользователю сообщения
    @MessageMapping("/private-message")
    public Message receivePrivateMessage(@Payload Message message){
        //автоматически принимает префиксы с configureMessageBroker
        //принимаем три параметра имя получателя, URL, само сообщение
        simpMessagingTemplate.convertAndSendToUser(message.getReceiverName(), "/private", message);



        return message;
    }

}
