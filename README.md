# Getting Started with PennyPilot (Develop Branch)

Welcome to the **PennyPilot** repo! This `develop` branch is the active working branch where all new features are created, tested, and reviewed before merging into production (`main`).

If you’re a contributor, follow these steps to set up your environment and start working on your own feature branch.

---

## Step 1: Fork the Repository

1. Go to the main repo: [https://github.com/PennyPilot-Tech-Residency-37/pennypilot](https://github.com/PennyPilot-Tech-Residency-37/pennypilot)
2. Click the **Fork** button in the top-right corner
3. Choose your personal GitHub account as the destination

---

## Step 2: Clone Your Fork

In your terminal:

```bash
git clone https://github.com/your-username/pennypilot.git
cd pennypilot
git remote add upstream https://github.com/YourOrgOrUser/pennypilot.git
```

## Step 3: Create Your Feature Branch (From Develop)
Always branch off from the develop branch when working on a new feature.

```
git checkout develop
git pull upstream develop
git checkout -b feature/your-feature-name
```

## Step 4: Install Dependencies
Make sure you're in the root directory of the project, then run:
```
npm install
```
This will install all necessary packages in package.json.

If you're using yarn instead:
```
yarn install
```
## Step 5: Stay Updated with the develop Branch
To make sure your branch always has the latest changes:
```
git checkout develop
git pull upstream develop
git checkout feature/your-feature-name
git merge develop
```
Resolve any merge conflicts if they occur.

## Step 6: Run the App Locally
Once everything is installed, run:
```
npm run dev
```
PennyPilot is designed and operated with security woven into every layer of the SDLC.

| Layer | Key Measures |
|-------|--------------|
| **Identity & Access** | • AWS IAM with Role-Based Access Control (RBAC) and mandatory MFA<br>• Least-privilege policies for CI/CD, build, and runtime roles |
| **Secrets Management** | • AWS Secrets Manager for DB credentials, Plaid keys, and signing keys<br>• .env files only for non-production local testing |
| **Network Edge** | • AWS WAF, ALB security policies, and VPC security groups<br>• Infrastructure-as-Code (Terraform) enforces port/IP whitelists |
| **App Security** | • OWASP ZAP automated in the pipeline<br>• Regular guided pentesting with Metasploit<br>• Dependency and container image scans on every push |
| **Data Protection** | • TLS 1.3 for all external traffic<br>• PostgreSQL & S3 encrypted at rest with AWS KMS-managed keys |
| **Monitoring & Response** | • Centralized logging to OpenSearch (ELK) and Azure Sentinel SIEM<br>• Alerting mapped to MITRE ATT&CK techniques |
| **Threat Modeling** | • STRIDE analysis performed each sprint; findings tracked in Jira<br>• MITRE ATT&CK used to validate detection coverage |

These controls align with the OWASP Top 10 and CIS Controls v8, giving the team continuous visibility and rapid response while keeping developer velocity high.

## Authors

- Jaycob Hoffman
- Alex Alarcon
- Jennifer Coppick
- Kevin Jones
