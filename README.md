<p align="center">
  <img src="https://i.imgur.com/ud3EWNh.jpg" alt="Ashu's DisPlayer Logo" width="200" height="200" style="border-radius: 50%;">
</p>

<h1 align="center">🎵 Ashu's DisPlayer</h1>

<p align="center">
  <b>A powerful Discord music bot built with Discord.js, TypeScript, and Lavalink</b>
</p>

<p align="center">
  <a href="https://github.com/ashutoshpatraa/ashus-displayer/stargazers">
    <img src="https://img.shields.io/github/stars/ashutoshpatraa/ashus-displayer?style=for-the-badge&logo=github&color=yellow" alt="Stars">
  </a>
  <a href="https://github.com/ashutoshpatraa/ashus-displayer/network/members">
    <img src="https://img.shields.io/github/forks/ashutoshpatraa/ashus-displayer?style=for-the-badge&logo=github&color=blue" alt="Forks">
  </a>
  <a href="https://github.com/ashutoshpatraa/ashus-displayer/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/ashutoshpatraa/ashus-displayer?style=for-the-badge&color=green" alt="License">
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Discord.js-v14-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord.js">
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Bun-Runtime-F9F1E1?style=for-the-badge&logo=bun&logoColor=black" alt="Bun">
  <img src="https://img.shields.io/badge/Lavalink-Client-FF6B6B?style=for-the-badge" alt="Lavalink">
</p>

---

## ✨ Features

🎶 **Music Playback**
- Play music from YouTube, Spotify, SoundCloud, Apple Music, Deezer, JioSaavn & more
- High-quality audio streaming powered by Lavalink
- Support for playlists and albums

🎛️ **Advanced Controls**
- Queue management (add, remove, move, shuffle, clear)
- Loop modes (track, queue, off)
- Volume control & audio filters
- Seek, skip, pause, resume functionality
- Autoplay feature for continuous music

📝 **Additional Features**
- Lyrics fetching
- Now playing display with progress bar
- Fair play mode for balanced queue distribution
- Multi-language support (30+ languages)
- Slash commands & prefix commands

🛠️ **Developer Friendly**
- Written in TypeScript for type safety
- PostgreSQL & SQLite database support
- Docker deployment ready
- Comprehensive configuration options

---

## 🎵 Music Commands

| Command | Description |
|---------|-------------|
| `/play` | Play a song or playlist |
| `/pause` | Pause the current track |
| `/resume` | Resume playback |
| `/skip` | Skip to the next track |
| `/stop` | Stop playback and clear queue |
| `/queue` | View the current queue |
| `/nowplaying` | Show currently playing song |
| `/volume` | Adjust the volume |
| `/loop` | Set loop mode (track/queue/off) |
| `/shuffle` | Shuffle the queue |
| `/seek` | Seek to a specific position |
| `/lyrics` | Get lyrics for current song |
| `/autoplay` | Toggle autoplay mode |
| `/fairplay` | Toggle fair play mode |
| `/grab` | Save current song to DMs |

---

## 🚀 Installation

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js v18+
- [Lavalink Server](https://github.com/lavalink-devs/Lavalink)
- PostgreSQL or SQLite (optional)
- Discord Bot Token

### Quick Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/ashutoshpatraa/ashus-displayer.git
   cd ashus-displayer
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Configure environment**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your configuration:
   ```env
   TOKEN=your_discord_bot_token
   CLIENT_ID=your_client_id
   PREFIX=!
   OWNER_IDS=["your_discord_id"]
   DEFAULT_LANGUAGE=EnglishUS
   ```

4. **Setup Lavalink**
   - Configure `Lavalink/application.yml`
   - Or use the provided Docker setup

5. **Build and start**
   ```bash
   bun run build
   bun run start
   ```

---

## 🐳 Docker Deployment

### Using Docker Compose

```bash
# Start everything (bot + Lavalink + Postgres)
docker compose --profile all up -d

# Start only Lavalink
docker compose --profile lavalink up -d

# Start only Postgres
docker compose --profile postgres up -d
```

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `TOKEN` | Discord bot token | Required |
| `CLIENT_ID` | Discord client ID | Required |
| `PREFIX` | Command prefix | `!` |
| `DEFAULT_LANGUAGE` | Bot language | `EnglishUS` |
| `OWNER_IDS` | Bot owner IDs (JSON array) | `[]` |
| `BOT_STATUS` | Bot status (online/idle/dnd) | `online` |
| `BOT_ACTIVITY` | Bot activity text | `Lavamusic` |
| `DATABASE_URL` | PostgreSQL connection URL | Optional |
| `LAVALINK_NODES` | Lavalink nodes config (JSON) | Required |

---

## 🌍 Supported Languages

Ashu's DisPlayer supports **30+ languages** including:

🇺🇸 English (US) • 🇬🇧 English (UK) • 🇪🇸 Spanish • 🇫🇷 French • 🇩🇪 German • 🇮🇹 Italian • 🇵🇹 Portuguese • 🇧🇷 Brazilian Portuguese • 🇷🇺 Russian • 🇨🇳 Chinese (Simplified) • 🇹🇼 Chinese (Traditional) • 🇯🇵 Japanese • 🇰🇷 Korean • 🇮🇳 Hindi • 🇹🇷 Turkish • 🇳🇱 Dutch • 🇵🇱 Polish • 🇸🇪 Swedish • 🇳🇴 Norwegian • 🇩🇰 Danish • 🇫🇮 Finnish • 🇬🇷 Greek • 🇨🇿 Czech • 🇭🇺 Hungarian • 🇷🇴 Romanian • 🇧🇬 Bulgarian • 🇺🇦 Ukrainian • 🇻🇳 Vietnamese • 🇹🇭 Thai • 🇮🇩 Indonesian

---

## 📁 Project Structure

```
ashus-displayer/
├── src/
│   ├── commands/       # Bot commands
│   │   ├── music/      # Music commands
│   │   ├── playlist/   # Playlist commands
│   │   ├── filters/    # Audio filter commands
│   │   ├── config/     # Configuration commands
│   │   ├── info/       # Information commands
│   │   └── dev/        # Developer commands
│   ├── events/         # Discord event handlers
│   ├── structures/     # Core structures
│   ├── database/       # Database models
│   ├── utils/          # Utility functions
│   └── types/          # TypeScript types
├── locales/            # Language files
├── Lavalink/           # Lavalink configuration
├── drizzle/            # Database migrations
└── scripts/            # Build scripts
```

---

## 🛠️ Development

```bash
# Run in development mode (with hot reload)
bun run dev

# Build for production
bun run build

# Run linting
bun run lint

# Format code
bun run format

# Generate database migrations
bun run db:generate

# Run database migrations
bun run db:push
```

---

## 🎨 Supported Music Sources

<p align="center">
  <img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="YouTube">
  <img src="https://img.shields.io/badge/Spotify-1DB954?style=for-the-badge&logo=spotify&logoColor=white" alt="Spotify">
  <img src="https://img.shields.io/badge/SoundCloud-FF5500?style=for-the-badge&logo=soundcloud&logoColor=white" alt="SoundCloud">
  <img src="https://img.shields.io/badge/Apple%20Music-FA243C?style=for-the-badge&logo=apple-music&logoColor=white" alt="Apple Music">
  <img src="https://img.shields.io/badge/Deezer-FEAA2D?style=for-the-badge&logo=deezer&logoColor=black" alt="Deezer">
</p>

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

This project is licensed under a custom license. See the [LICENSE](LICENSE) file for details.

**Summary:**
- ✅ Free for private, non-commercial, non-public Discord servers
- ✅ Personal modifications (if not redistributed)
- ⚠️ Paid license required for public bots or commercial use

---

## 👤 Author

**Ashutosh Patra** - [@ashutoshpatraa](https://github.com/ashutoshpatraa)

---

## 💖 Support

If you find this project helpful, please consider giving it a ⭐ star!

<p align="center">
  <a href="https://github.com/ashutoshpatraa/ashus-displayer">
    <img src="https://img.shields.io/badge/⭐_Star_This_Repo-171515?style=for-the-badge&logo=github&logoColor=white" alt="Star">
  </a>
</p>

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/ashutoshpatraa">Ashutosh Patra</a>
</p>
