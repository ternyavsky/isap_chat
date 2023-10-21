package com.isap.isap.servlet;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class EngineIoServer {
    //обработка входящего HTTP-соединения и отправка соответствующего ответа
    public void handleRequest(HttpServletRequest request, HttpServletResponse response) {
    }
    //установка входящего запроса

    public void setHandler(MyAppSocketListener myAppSocketListener) {
    }
   //удаление входящего запроса
    public void removeHandler(MyAppSocketListener myAppSocketListener) {
    }
}
