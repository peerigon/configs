export type Message = {
  text: string;
};

export const createMessage = (text: string): Message => ({ text });
