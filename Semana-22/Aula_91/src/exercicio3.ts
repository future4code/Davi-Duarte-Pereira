export class Queue {
  public nodes: LinkedList = new LinkedList();
	// considera-se o gabarito do item A para essa Lista Ligada!

  isEmpty(): boolean {
    return this.nodes.start === undefined;
  }

  enqueue(value: number): void {
    this.nodes.appendToTail(value);
  }

  dequeue(): void {
    if (this.nodes.start) {
			const nodeToDequeue = this.nodes.start;
      this.nodes.start = this.nodes.start.getNext();
			return nodeToDequeue
    }
  }

  print(): void {
    this.nodes.print();
  }
}