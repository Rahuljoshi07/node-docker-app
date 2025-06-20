cat > README.md <<EOF
# 🚀 Node.js App in Docker

This is a simple, lightweight Node.js web server running inside a Docker container. Built as part of my #100DaysOfDevOps challenge.

## 🛠 Features

- 🐳 Dockerized Node.js server
- 📦 Custom environment variables
- 🔁 Auto-port mapping
- ✍️ Personalized output (with emoji & GitHub link)
- 💡 Easily deployable anywhere

## 💻 Usage

### 1. Build Docker Image

\`\`\`bash
docker build -t node-docker-app .
\`\`\`

### 2. Run the Container

\`\`\`bash
docker run -p 3000:3000 node-docker-app
\`\`\`

Then visit [http://localhost:3000](http://localhost:3000)

## 📸 Output Preview

\`\`\`
==============================
🚀 Node.js App Running in Docker
📦 Environment: Development
🌐 Port: 3000
🧑‍💻 Made by Rahul Joshi
🔗 github.com/Rahuljoshi07
==============================
\`\`\`

## 📁 Project Structure

