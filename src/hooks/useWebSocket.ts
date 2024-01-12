import { useEffect, useState } from "react";

const READY_STATE = 1;
const SOCKET_URL = "wss://payments.pre-bnvo.com/ws/";

export const useWebSocket = (identifier?: string) => {
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState<Record<string, string> | null>(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    if (!identifier) {
      setIsPending(true);

      return;
    }
    const ws = new WebSocket(SOCKET_URL + identifier);

    ws.onerror = () => {
      setIsError(true);
      setIsPending(false);
    };

    ws.onopen = () => {
      console.log("ws connected");
      setIsPending(false);
    };

    ws.onmessage = (event: MessageEvent<any>) => {
      setMessage(JSON.parse(event.data));
    };

    return () => {
      if (ws?.readyState === READY_STATE) {
        ws.close();
      }
    };
  }, [identifier]);

  return { message, isError, isPending };
};
