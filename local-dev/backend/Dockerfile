FROM openjdk:8u181-jdk-slim-stretch

WORKDIR /app

COPY local-dev/backend/application.properties application.properties
COPY backend/src src
COPY backend/gradle gradle
COPY backend/gradlew gradlew
COPY backend/build.gradle build.gradle

CMD ./gradlew bootRun
