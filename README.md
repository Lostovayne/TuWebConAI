# Ask Website - AI-Powered Documentation Chat

A modern web application that enables intelligent conversations with your website content and documentation using advanced AI models. Built with Next.js 15 and TypeScript.

## 🚀 Features

- **AI-Powered Chat Interface**: Seamless interaction with your website content
- **RAG Implementation**: Using Upstash Vector Database for efficient document retrieval
- **Real-time Processing**: Fast and responsive chat experience
- **Dark/Light Mode**: Automatic theme switching based on system preferences
- **Responsive Design**: Built with Tailwind CSS for optimal viewing on all devices

## 🛠 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Runtime**: [Bun](https://bun.sh/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **AI Integration**: 
  - [@upstash/rag-chat](https://github.com/upstash/rag-chat)
  - Various AI models support
- **Fonts**: Geist Sans & Geist Mono

## 📋 Prerequisites

- Bun >= 1.0.0
- Node.js >= 18.x
- A modern web browser

## 🚀 Getting Started

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd ask-website
```

2. **Install dependencies**
```bash
bun install
```

3. **Environment Setup**

Create a `.env` file in the root directory:
```env
# Add your environment variables here
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
AI_MODEL_API_KEY=
```

4. **Development**
```bash
bun run dev
```

5. **Build for production**
```bash
bun run build
```

6. **Start production server**
```bash
bun run start
```

## 🏗 Project Structure

```
ask-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx    # Root layout with Geist fonts
│   │   └── globals.css   # Global styles and Tailwind
│   ├── components/       # React components
│   └── lib/             # Utility functions and helpers
├── public/              # Static assets
└── ...config files
```

## ⚙️ Configuration

The project includes several configuration files:

- `next.config.ts`: Next.js configuration
- `tailwind.config.ts`: Tailwind CSS customization
- `tsconfig.json`: TypeScript configuration
- `postcss.config.mjs`: PostCSS plugins
- `eslint.config.mjs`: ESLint rules

## 🎨 Styling

The project uses Tailwind CSS with custom configuration:

- Custom color schemes for dark/light modes
- Geist typography system
- Responsive design utilities

## 🔒 Security

- Environment variables for sensitive data
- Type-safe API routes
- Secure data handling

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Your Name - *Initial work*

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Upstash for the RAG implementation
- Vercel for Geist font family

---

Built with ❤️ using Next.js and AI
