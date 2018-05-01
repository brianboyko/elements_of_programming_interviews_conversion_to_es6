import LinkedList from '../../ch4/linkedLists'

describe('LinkedList', () => {
  describe('constructor', () => {
    it('constructs a linked list', () => {
      expect(new LinkedList().constructor.name).toBe("LinkedList")
    });
  });
});
