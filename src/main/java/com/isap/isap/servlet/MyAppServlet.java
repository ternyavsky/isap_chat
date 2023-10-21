package com.isap.isap.servlet;


import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
//класс для реализации сервлета и обработки запросов
@WebServlet("/engine.io/")
public class MyAppServlet extends HttpServlet {
    private final EngineIoServer mEngineIoServer = new EngineIoServer();


    @Override
    protected void service(HttpServletRequest request, HttpServletResponse response) throws IOException {
        mEngineIoServer.handleRequest(request, response);
    }
    //настройка сервлета перед обработкой запросов
    @Override
    public void init() throws ServletException {
        super.init(); //инициализация сервлета
        mEngineIoServer.setHandler(new MyAppSocketListener());
    }

    @Override
    public void destroy() {
        super.destroy(); //уничтожение сервлета
        mEngineIoServer.removeHandler(new MyAppSocketListener());
    }
}



