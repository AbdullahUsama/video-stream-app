# 🎥 Video-Stream App

A cloud-native, microservices-based video streaming platform built for scalability, real-time monitoring, and secure access.

## Overview
The **Video-Stream App** is a cloud-based video streaming application that leverages a modern microservices architecture to ensure efficient media delivery, secure user access, and real-time observability. It’s designed for performance and scalability, capable of handling high traffic with low latency.

## Architecture
The application follows a microservices-based architecture composed of the following key components:

- **Authentication Service:** Powered by [Clerk.com](https://clerk.com) with JWT-based authorization.
- **Video Streaming Service:** Handles video content delivery with efficient buffering and adaptive bitrate.
- **Storage Service:** Manages media assets using scalable cloud storage (e.g., AWS S3 or GCP Cloud Storage).
- **Controller Service:** Validates requests and coordinates communication between services.
- **Monitoring & Logging Services:** Real-time event tracking and performance logging using Firebase Firestore.

## Security
- Integrated **Clerk.com** for user authentication.
- Implemented **JWT-based access control** to protect media endpoints and restrict unauthorized access.

## Performance
- **Load Testing:** Achieved a p99 latency of **30.33 ms** under simulated peak traffic conditions using distributed load testing tools.
- **Monitoring:** Real-time logging and metrics captured in Firebase Firestore for analytics and alerting.

## Tech Stack
- **Backend:** Node.js / Express / NEXT.js
- **Authentication:** Clerk.com, JWT
- **Database & Storage:** Firebase Firestore, Cloud Storage
- **Cloud & Deployment:** Docker, Google Cloud Platform (GCP)
- **Monitoring:** Firebase Firestore
- **Testing:** Postman

### Prerequisites
- Node.js
- Docker (optional for containerized deployment)
- Firebase account
- Clerk.com account


