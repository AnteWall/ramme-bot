import {
  getCommandFromText,
  COMMANDS
} from './commandParser';

describe('commandParser', () => {
  describe('#getCommandFromText', () => {
    it('should give first word back as command', () => {
      expect(getCommandFromText("join a fellow buddy")).toEqual(COMMANDS.JOIN);
      expect(getCommandFromText("entry something else")).toEqual(COMMANDS.ENTRY);
    })

    it('should return null if no command is found', () => {
      expect(getCommandFromText("werirdcommands something else")).toEqual(null);
    })
  })
})