# Project Setup with Docker and Dev Environment

This README provides detailed instructions to set up and run a React application using Docker for both development and production environments.

---

## **1. Prerequisites**

Ensure the following tools are installed:

- [Docker Desktop](https://www.docker.com/products/docker-desktop) (or Docker Engine on Linux)
- [Podman](https://podman.io/) for Windows

---

## **2. Folder Structure**

The project folder structure is as follows:

```
project-root/
├── src/
│   ├── App.js
│   ├── index.js
│   ├── ...
├── public/
│   ├── index.html
├── DockerfileProd
├── DockerfileDev
├── docker-compose.dev.yml
├── docker-compose.prod.yml
├── package.json
├── README.md
```

---

## **3. Development Setup**

### **3.1 Dockerfile for Development**

- **Path:** `DockerfileDev`

### **3.2 Development Docker Compose**

- **Path:** `docker-compose.dev.yml`

### **3.3 Start Development Environment**

In development mode, you can make live changes to the source code, and they will automatically reflect in the running application without needing to rebuild the container.

1. Start the application:

1. Start the application:
   ```bash
   docker-compose -f docker-compose.dev.yml up --build
   ```
2. Visit [http://localhost:3000](http://localhost:3000).

---

## **4. Production Setup**

### **4.1 Dockerfile for Production**

- **Path:** `DockerfileProd`

### **4.2 Production Docker Compose**

- **Path:** `docker-compose.prod.yml`

### **4.3 Start Production Environment**

1. Build and run the container:
   ```bash
   docker-compose -f docker-compose.prod.yml up --build
   ```
2. Visit [http://localhost](http://localhost).

---

## **5. Environment Variables**

### **5.1 Define Environment Variables**

- **Path:** `.env`

### **5.2 Inject Environment Variables**

Use the following in `docker-compose`:

- **Path:** `docker-compose.dev.yml` or `docker-compose.prod.yml`

---

## **6. Stop Containers**

Stop containers for development or production:

```bash
docker-compose -f docker-compose.dev.yml down
# or
docker-compose -f docker-compose.prod.yml down
```

---

## **7. Debugging Tips**

- Use Docker logs:
  ```bash
  docker-compose logs -f
  ```

---

## **8. Cleanup**

To remove containers, images, and volumes:

```bash
docker-compose -f docker-compose.dev.yml down --volumes
```

---

## **9. Setting Up Podman on Windows**

### **9.1 Install Podman**

1. Download and install Podman for Windows from [Podman.io](https://podman.io/getting-started/installation).
2. Configure Podman to use the WSL2 backend for compatibility with Docker commands.

### **9.2 Enable Docker Compatibility**

1. Install the `podman-docker` package:
   ```bash
   podman system migrate
   ```
2. Test compatibility by running Docker commands through Podman:
   ```bash
   podman-compose --help
   ```

### **9.3 Run Docker Compose with Podman**

To use `docker-compose` with Podman:

1. Ensure `podman-compose` is installed:
   ```bash
   pip install podman-compose
   ```

2. Run the development environment:
   ```bash
   podman-compose -f docker-compose.dev.yml up --build
   ```

3. Stop the environment:
   ```bash
   podman-compose -f docker-compose.dev.yml down
   ```

### **9.4 Notes**

- Ensure that your project mounts and ports are accessible via WSL2.
- Replace any `docker` references in scripts or commands with `podman` if necessary.

---
