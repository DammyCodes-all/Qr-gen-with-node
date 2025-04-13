# QR Code Generator Web Application

A web-based QR code generator built with Node.js, Express, and EJS templating engine. This application allows users to generate QR codes from any valid URL or text input.

## 🚀 Features

- Generate QR codes from URLs
- Real-time QR code preview
- Responsive design
- User-friendly interface
- Download generated QR codes
- Error handling for invalid inputs

## 🛠️ Technologies Used

- **Backend:**
  - Node.js
  - Express.js
  - qr-image (for QR generation)
  
- **Frontend:**
  - EJS (Embedded JavaScript templating)
  - CSS3
  - HTML5

## 📋 Prerequisites

- Node.js (v14.0.0 or higher)
- npm (Node Package Manager)

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/DammyCodes-all/Qr-gen-with-node.git
```

2. Navigate to the project directory:
```bash
cd Qr-gen-with-node
```

3. Install dependencies:
```bash
npm install
```

4. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## 💻 Usage

1. Open your web browser and visit `http://localhost:3000`
2. Enter the URL or text in the input field
3. Click "Generate QR Code"
4. The QR code will appear below the form
5. Scan the QR code with any QR code reader to test

## 📁 Project Structure

```
qr-gen-with-node/
├── public/
│   ├── style.css
│   └── qr-code.png
├── views/
│   └── index.ejs
├── index.js
├── package.json
└── README.md
```

## ⚙️ Configuration

The application uses the following default configuration:
- Port: 3000 (can be modified in index.js)
- QR Code format: PNG
- QR Code size: 300x300 pixels

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

- GitHub: [@DammyCodes-all](https://github.com/DammyCodes-all)

## 🙏 Acknowledgments

- [qr-image](https://github.com/alexeyten/qr-image) - QR code generation library
- Express.js team for the excellent web framework
- Node.js community for their continuous support

## 📞 Support

For support, email [dammycodesall@gmail.com] or create an issue in this repository.
