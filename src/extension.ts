import * as vscode from "vscode";
import { getWebviewContent } from "./webviewContent";

export function activate(context: vscode.ExtensionContext) {
  const commandId = "extension.showChatPanel";
  context.subscriptions.push(
    vscode.commands.registerCommand(commandId, () => {
      const panel = vscode.window.createWebviewPanel(
        "chatPanel",
        "Git Command Generator",
        vscode.ViewColumn.One,
        {
          enableScripts: true,
        }
      );

      panel.webview.html = getWebviewContent();

      panel.webview.onDidReceiveMessage(
        (message) => {
          switch (message.command) {
            case "insertCommand":
              const terminal =
                vscode.window.activeTerminal || vscode.window.createTerminal();
              terminal.show();
              terminal.sendText(message.text);
              break;
          }
        },
        undefined,
        context.subscriptions
      );
    })
  );
}

export function deactivate() {}
