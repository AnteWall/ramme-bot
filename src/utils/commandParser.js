export const COMMANDS = {
  JOIN: 'command/join',
  ENTRY: 'command/entry'
}

export const getCommandFromText = (text) => {
  const command = text.match(/(\w+)*/);
  switch (command[0]) {
    case "join":
      return COMMANDS.JOIN;
    case "entry":
      return COMMANDS.ENTRY;
  }
  return null;
}