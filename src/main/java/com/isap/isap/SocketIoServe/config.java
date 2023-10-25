package com.isap.isap.SocketIoServe;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

//sockjsон используем, для того, что он позволяет использовать планы резервного копирования на случай, если клиент не сможет подключиться через WebSocket.
@Configuration
@EnableWebSocketMessageBroker
public class config implements WebSocketMessageBrokerConfigurer{


//данные отправляются без буферезации
  private boolean tcpNoDelay = true;
  //системный размер буфера
  private int tcpSendBufferSize=-1;
  //системный размер буфера для передачи данных через сокеты
  private int tcpReceiveBufferSize=-1;
  // сокет будет отправлять "ping-пойнты" через определенные промежутки времени,
  // чтобы убедиться, что другой конец все еще работает.
  private boolean tcpKeepAlive=true;
  // управляет временем, которое сокет будет ждать ответа перед закрытием соединения
  private int soLinger = -1;
  // определяет максимальное количество одновременных соединений, которые сервер может обрабатывать
  private int acceptBackLog = -1;
  //определяет минимальный размер буфера, который используется для записи данных на стороне сервера
  private int writeBufferWaterWarkLow = -1;
  //определяет максимальный размер буфера, который используется для записи данных на стороне сервера
  private int writeBufferWaterWarkHigh = -1;































  @Override

    public void configureMessageBroker(MessageBrokerRegistry registry){
      // Устанавливаем префикс для конечной точки, от которой клиент прослушивает наши сообщения
    registry.enableSimpleBroker("/topic");

      // Установите префикс для конечных точек, на которые клиент будет отправлять сообщения
    registry.setApplicationDestinationPrefixes("/app");

  }
  @Override
  public void registerStompEndpoints(StompEndpointRegistry registry) {


// Регистрирует конечную точку, где будет происходить соединение
      registry.addEndpoint("/stomp")

// Разрешаем источнику http://localhost:63343 отправлять нам сообщения. (Базовый URL-адрес клиента)
              .setAllowedOrigins("http://localhost:63343")

// Включаем резервные параметры SockJS
              .withSockJS();

  }



}
