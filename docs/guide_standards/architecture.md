---
outline: deep
---

## Table of Contents
1. [Introduction](#Introduction)
2. [Application Layers](#application-layers)
3. [System Architecture Diagram](#system-architecture-diagram)  
4. [Non-Functional Considerations](#non-functional-considerations)  
5. [Tools & Development Environment](#tools-&-development-environment)
6. [Future Enhancements](#future-enhancements)

## Introduction

This document provides a high-level overview of the technologies, frameworks, and third-party services used to build and operate EverThrive an Independa Company. It is intended for developers, architects, and stakeholders who need to understand the system components and integrations.

## Application Layers
### Frontend

- Mobile: React Native (iOS & Android)

- Web (if applicable): Vue

- UI Components: TailwindCSS

- Testing: Appium (mobile), Playwright (web)

### Backend

- Framework: Node JS

- API Type: REST (with some WebSocket endpoints for real-time features)

- Authentication: Firebase Authentication (OAuth2, email/password, social logins)

- Database: PostgreSQL (primary), Redis (caching & sessions)

### Integrations

- Firebase – Authentication, push notifications, real-time database (optional usage)

- Twilio – SMS and voice call notifications for caregivers and seniors

- Cloudinary – Media storage & optimization (images, documents, video)

- Google Calendar API – Event synchronization

- Device Integrations: iHealth Pulse Oximeter and Scale

### Infrastructure

- Cloud Provider: AWS (EC2, RDS, S3, CloudFront)

- CI/CD: GitHub Actions (build, test, deploy pipeline)

- Containerization: Docker + Docker Compose (local)

## System Architecture Diagram

```javascript
[ Mobile App ] <----> [ API Gateway / Node REST ]
       |                         |
       |                         +--> [ PostgreSQL DB ]
       |                         +--> [ Redis Cache ]
       |
       +--> [ Firebase (Auth, Push) ]
       +--> [ Twilio (SMS/Voice) ]
       +--> [ Cloudinary (Media) ]
       +--> [ Google Calendar API ]

```

## Non-Functional Considerations

- Scalability: Kubernetes-based microservices allow horizontal scaling.

- Security: HTTPS/TLS enforced, JWT for API requests, role-based access control.

- Accessibility: WCAG 2.1 AA compliance for senior usability.

- Performance: Response times under 300ms for 90% of requests (target).

## Tools & Development Environment

- Version Control: Git + GitHub

- Project Management: Jira / Linear (depending on team setup)

- Communication: Slack + Zoom

- Monitoring: Sentry (error tracking), Datadog (APM & logs)

## Future Enhancements

- Integration with telehealth providers

- AI-based reminders & predictive health alerts

- Voice assistant support (Alexa, Google Home)

<!-- - Orchestration: Kubernetes (staging & production) -->

<!-- ## More

Check out the documentation for the [full list of runtime APIs](https://vitepress.dev/reference/runtime-api#usedata). -->