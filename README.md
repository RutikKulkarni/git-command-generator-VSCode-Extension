# Git Command Generator VSCode Extension

This project is a Visual Studio Code (VSCode) extension that helps generate Git commands using Natural Language Processing (NLP) techniques. It includes a webview panel with a chat interface where users can ask questions and receive Git command suggestions.

## Features

- Interactive chat interface to ask questions.
- Conversion of user queries into Git commands using NLP.
- Ability to insert generated Git commands into the VSCode integrated terminal.

## Technologies Used

- React.js for the webview panel.
- TypeScript for type safety and VSCode API usage.
- Webpack for bundling the extension.
- OpenAI API (or alternative) for NLP-based Git command generation.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/RutikKulkarni/git-command-generator-VSCode-Extension.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Open Visual Studio Code.
2. Press `F5` to start debugging the extension.
3. In the new VSCode window, open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac).
4. Search for and execute the command to activate your extension (e.g., "Show Git Command Generator Panel").
5. Use the chat interface to ask questions about Git commands.
6. Click on the "Insert Command" button below each generated Git command to insert it into the integrated terminal.

