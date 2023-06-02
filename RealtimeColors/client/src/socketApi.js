import io from "socket.io-client";

let socket;

export const init = () => {
  console.log("Sunucuya bağlanılıyor...");

  socket = io("http://localhost:3001", {
    transports: ["websocket"],
  });

  socket.on("connect", () =>
    console.log("Sunucuya bağlantı başarıyla gerçekleşti.")
  );
};

// backende mesaj gönderiliyor

export const send = (color) => {
  socket.emit("newColor", color); // backenddeysen clienta, clienttaysan backende veri aktarımını sağlar. emit
};

export const subscribe = (cb) => {
  socket.on("receive", (color) => {
    console.log(color);
    cb(color);
  });
};
