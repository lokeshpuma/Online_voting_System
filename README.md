# Online Voting System (Poll Genie)

This repository contains:

- a Java Spring MVC backend (`src/main`) for local/Tomcat deployment
- a static frontend demo (`docs/`) for GitHub Pages deployment

## GitHub Pages frontend

The frontend in `docs/` is deployable on GitHub Pages and showcases a static UI demo.

- Demo login forms are client-side only
- Demo votes are stored in browser `localStorage`
- No server/database features run on GitHub Pages

When the `main` branch is updated, GitHub Actions deploys `docs/` using `.github/workflows/deploy-pages.yml`.

## Backend (Tomcat) run instructions

### Prerequisites

- Java 20
- Maven
- Tomcat 10
- MySQL

### Steps

1. Create a database:
   - `CREATE DATABASE onlinevotingsystem;`
2. Configure datasource values in `src/main/webapp/WEB-INF/dispatcher-servlet.xml`
3. Build:
   - `mvn clean package`
4. Deploy `target/Online-Voting-System.war` to Tomcat
5. Open:
   - `http://localhost:8080/Online-Voting-System/`

## Features

### Admin

- Register voters
- Create/manage polls
- Add poll candidates
- Announce results

### Voter

- Login and vote in active polls
- View announced results

## License

MIT (see `LICENSE`)
