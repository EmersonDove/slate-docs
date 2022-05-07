# Security

This page covers Blankly's security policies, protection, and compliance measures to ensure the security of your data and algorithms, this includes DDoS protection, pending SOC2 Type 2 Compliance, Data encryption, and infrastructure isolation.

## DDoS Protection

## Infrastructure

The Blankly Cloud and deployment platform primarily uses Google Cloud Platform and utilizes Google Kubernetes Engine (GKE) to actively manage, isolate, and secure code.

### Data Encryption

Blankly encrypts data at rest (when on disk) with 256 bit Advanced Encryption Standard (AES-256). While data is uploaded and transfered, Vercel uses HTTPS/TLS 1.3.

### Code Isolation

All code is isolated into separate docker containers and encapsulated into their own namespace in isolation.

### Code Analysis & Audit Scans

Blankly regularly conducts code reviews and static analysis checks. We also run penetration testing.
