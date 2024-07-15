import * as React from "react";

type Message = {
  text: string;
  user: "user" | "bot";
};

export const App = () => {
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [input, setInput] = React.useState("");

  const handleSend = async () => {
    const userMessage: Message = { text: input, user: "user" };
    setMessages([...messages, userMessage]);

    const response = await fetch("API_ENDPOINT", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: input }),
    });
    const data = await response.json();

    const botMessage: Message = { text: data.command, user: "bot" };
    setMessages([...messages, userMessage, botMessage]);
    setInput("");
  };

  React.useEffect(() => {
    window.addEventListener("message", (event) => {
      const message = event.data;
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: message.text, user: "bot" },
      ]);
    });
  }, []);

  return (
    <div>
      <div id="chat">
        {messages.map((msg, index) => (
          <div key={index} className={msg.user}>
            {msg.text}
            {msg.user === "bot" && (
              <button
                onClick={() =>
                  window.vscode.postMessage({
                    command: "insertCommand",
                    text: msg.text,
                  })
                }
              >
                Insert Command
              </button>
            )}
          </div>
        ))}
      </div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};
