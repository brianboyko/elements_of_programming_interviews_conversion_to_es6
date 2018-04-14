class LLNode {
  constructor(public data: any, public next: LLNode | null = null) {}
}

export class LinkedList {
  public head: LLNode;
  public tail: LLNode;
  constructor(data: any = null) {
    this.head = new LLNode(data);
    this.tail = this.head;
  }
  append = (data: any) => {
    const node = new LLNode(data);
    if (!this.tail) {
      this.tail = node;
    } else {
      this.tail.next = node;
    }
    return this;
  };
  searchList = (query: any): LLNode => {
    let cursor: LLNode = this.head;
    while (cursor.data !== query && cursor.next) {
      cursor = cursor.next;
    }
    return cursor;
  };
  insertAfter = (node: LLNode, newNode: LLNode) => {
    newNode.next = node.next;
    node.next = newNode;
    if (node.next === null) {
      this.tail = node;
    }
    return this;
  };
  deleteNodeAfter = (node: LLNode) => {
    if (node.next) {
      node.next = node.next.next;
    }
    return this;
  };
  toArray = (): any[] => {
    const out = [];
    let cursor: LLNode = this.head;
    while (cursor.next) {
      out.push(cursor.data);
      cursor = cursor.next;
    }
    return out;
  };
  isCyclical = (): boolean => {
    let rabbit = this.head && this.head.next;
    let turtle = this.head;
    let count: number = 0;
    while (rabbit && rabbit.next && turtle && turtle.next) {
      rabbit = rabbit.next;
      if (count % 2 === 0) {
        turtle = turtle.next;
      }
      if (rabbit === turtle) {
        // comparing pointers
        return true;
      }
      count += 1;
    }
    return false;
  };
}
