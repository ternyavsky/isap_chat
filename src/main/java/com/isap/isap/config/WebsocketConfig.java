package com.isap.isap.config;


import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

//конфигурация веб сокета
@Configuration
@EnableWebSocketMessageBroker
public class WebsocketConfig implements WebSocketMessageBrokerConfigurer {

    //регистрации конечных точек для обмена сообщениями через протокол Stomp
    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        //отправная точка всех подключений к веб-сайту
        registry.addEndpoint("/ws").setAllowedOriginPatterns("*").withSockJS();



    }


    //настройки брокера сообщений
    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {
        //префикс, который будет отправлять данные на сервер
        registry.setApplicationDestinationPrefixes("/app");
        registry.enableSimpleBroker("chatroom", "user");// url 1-чата 2-пользователя
        registry.setUserDestinationPrefix("/user");




    }
}
