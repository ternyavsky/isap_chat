package com.isap.isap.servlet;

public class MyAppSocketListener {

    server.on("connection", new Emitter.Listener() {
        @Override
        public void call(Object... args) {
            EngineIoSocket socket = (EngineIoSocket) args[0];
            // Do something with socket
        }
    });

}
