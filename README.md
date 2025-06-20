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

![image](https://github.com/user-attachments/assets/4f6010b0-de55-4511-8c03-abd40dfeb89e)

==============================
🚀 Node.js App Running in Docker
📦 Environment: Development
🌐 Port: 3000
🧑‍💻 Made by Rahul Joshi
🔗 github.com/Rahuljoshi07
==============================
\`\`\`


## 📁 Project Structure
\`\`\`
node-docker-app/
├── Dockerfile
├── index.js
├── package.json
└── README.md
\`\`\`


## 📚 Learnings

- How Docker handles different runtimes
- Optimizing Docker layers using package.json first
- Port binding, environment variables, and `.dockerignore`

---

## 🙋‍♂️ Author

**Rahul Joshi**  
📧 Rahuljoshisg@gmail.com  
🌐 [github.com/Rahuljoshi07](https://github.com/Rahuljoshi07)

---

## 📜 License

This project is intended for personal learning and demonstration purposes only.  
Feel free to explore and experiment, but please do not use it for commercial purposes.


