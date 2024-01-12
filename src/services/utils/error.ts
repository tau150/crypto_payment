export const getMetamaskErrorMessage = (message: string) => {
  // this has to be improved
  const parsedMessage = message.toLowerCase();

  if (parsedMessage.includes("insufficient funds")) {
    return "Fondos insuficientes, chequea el monto y la red que tienes seteada en Metamask";
  }

  if (parsedMessage.includes("invalid address")) {
    return "Dirección inválida, verifique la dirección y que es una red soportada por Metamask";
  }

  return "Ooops, hubo un error";
};
