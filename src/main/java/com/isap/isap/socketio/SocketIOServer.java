package com.isap.isap.socketio;

import com.corundumstudio.socketio.Configuration;
import com.corundumstudio.socketio.SocketIOChannelInitializer;
import com.corundumstudio.socketio.SocketIONamespace;
import com.corundumstudio.socketio.listener.*;
import com.corundumstudio.socketio.namespace.Namespace;
import com.corundumstudio.socketio.namespace.NamespacesHub;
import io.netty.channel.EventLoopGroup;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Collection;

public class SocketIOServer implements ClientListeners {
   //метод отвечает за обработку событий, таких как подключение или отключение клиента и всю работу сервака
   private static final Logger log = LoggerFactory.getLogger(SocketIOServer.class);

private final Configuration configCopy;
 private Configuration configuration;

 private final NamespacesHub namespacesHub;
 private final SocketIONamespace mainNamespace;

 private SocketIOChannelInitializer pipelineFactory = new SocketIOChannelInitializer();

 private EventLoopGroup bossGroup;
 private EventLoopGroup workerGroup;






 public SocketIOServer(Configuration configuration) {
  this.configuration = configuration;
  Configuration configCopy = new Configuration();
  this.configCopy = configCopy;
  namespacesHub = new NamespacesHub(configCopy);
  mainNamespace = addNamespace(Namespace.DEFAULT_NAME);
 }
 //устанавливаем новый объект pipelineFactory
 // в качестве фабрики для создания экземпляров класса SocketIOChannelInitializer.
 public void setPipelineFactory(SocketIOChannelInitializer pipelineFactory) {
  this.pipelineFactory = pipelineFactory;
 }




//Подключить всех клиентов к пространству имен по умолчанию
 public Collection <SocketIONamespace> getAllNamespaces() {
  return namespacesHub.getAllNamespaces();
 }









 public SocketIONamespace addNamespace(String name) {
  return namespacesHub.create(name);
 }

 public SocketIONamespace getNamespace(String name) {
  return namespacesHub.get(name);
 }

 public void removeNamespace(String name) {
  namespacesHub.remove(name);
 }
 public Configuration getConfiguration() {
  return configuration;
 }










    @Override
    public void addMultiTypeEventListener(String eventName, MultiTypeEventListener listener, Class<?>... eventClass) {

    }

    @Override
    public <T> void addEventListener(String eventName, Class<T> eventClass, DataListener<T> listener) {

    }

    @Override
    public void addEventInterceptor(EventInterceptor eventInterceptor) {

    }

    @Override
    public void addDisconnectListener(DisconnectListener listener) {

    }

    @Override
    public void addConnectListener(ConnectListener listener) {

    }

    @Override
    public void addPingListener(PingListener listener) {

    }

    @Override
    public void addPongListener(PongListener listener) {

    }

    @Override
    public void addListeners(Object listeners) {

    }

    @Override
    public <L> void addListeners(Iterable<L> listeners) {

    }

    @Override
    public void addListeners(Object listeners, Class<?> listenersClass) {

    }

    @Override
    public void removeAllListeners(String eventName) {

    }
}



