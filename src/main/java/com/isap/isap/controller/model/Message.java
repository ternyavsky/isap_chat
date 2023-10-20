package com.isap.isap.controller.model;


import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Message {

    private String senderName;
    private String receiverName;
    private String message; //содержимое сообщения
    private String date;
    private Status status;




}
