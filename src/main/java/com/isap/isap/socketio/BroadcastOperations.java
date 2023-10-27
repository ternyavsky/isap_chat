package com.isap.isap.socketio;

import com.corundumstudio.socketio.BroadcastAckCallback;
import com.corundumstudio.socketio.ClientOperations;
import com.corundumstudio.socketio.SocketIOClient;
import com.corundumstudio.socketio.protocol.Packet;

import java.util.Collection;
import java.util.function.Predicate;
//Этот код определяет интерфейс BroadcastOperations, который расширяет интерфейс ClientOperations.
// Интерфейс имеет несколько методов, которые позволяют отправлять сообщения на сервер и получать ответы от сервера.
// Конкретно, методы позволяют отправлять пакеты, события и другие типы данных на сервер и получать ответы от сервера.
// Каждый метод принимает различные параметры и типы возвращаемых значений, в зависимости от того,
// какой тип данных передается и какие данные должны быть получены в ответ

public interface BroadcastOperations extends ClientOperations {

        Collection<SocketIOClient> getClients();

        <T> void send(Packet packet, BroadcastAckCallback<T> ackCallback);

        void sendEvent(String name, SocketIOClient excludedClient, Object... data);

        void sendEvent(String name, Predicate<SocketIOClient> excludePredicate, Object... data);

        <T> void sendEvent(String name, Object data, BroadcastAckCallback<T> ackCallback);

        <T> void sendEvent(String name, Object data, SocketIOClient excludedClient, BroadcastAckCallback<T> ackCallback);

        <T> void sendEvent(String name, Object data, Predicate<SocketIOClient> excludePredicate, BroadcastAckCallback<T> ackCallback);

    }

