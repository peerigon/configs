// Should be an error: Channel is only used as a type
// oxlint-disable-next-line typescript/consistent-type-imports
import { Channel } from "./type-imports/channel.ts";
// Types and values from the same module can be imported in one statement
import { type Message, createMessage } from "./type-imports/message.ts";
// Imports that only contain types should use a top-level `import type`
import type { Recipient } from "./type-imports/recipient.ts";
// Should be an error: with verbatimModuleSyntax this compiles to a side-effect import
// oxlint-disable-next-line typescript/no-import-type-side-effects
import { type Sender } from "./type-imports/sender.ts";

export const send = (sender: Sender, recipient: Recipient, channel: Channel): Message =>
  createMessage(`${sender.name} → ${recipient.name} via ${channel.name}`);

// import() type annotations are allowed since they are always erased
export type MessageModule = typeof import("./type-imports/message.ts");
