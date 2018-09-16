FROM openjdk:8u181-jdk-slim-stretch

WORKDIR /app

COPY src /app/src
COPY gradlew /app/gradlew
