FROM gradle:8.3-jdk-17

COPY ./ *


VOLUME /tmp

ARG JAR_FILE=isap\out\artifacts\isap_jar

ADD ${JAR_FILE} isap.jar

EXPOSE 8080

RUN gradle clean package

CMD ["java", "-jar", "isap.jar"]
