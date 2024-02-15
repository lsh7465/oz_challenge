// 제네릭 클래스 (큐 방식으로 동작하는 클래스)
// 큐: 선형 자료구조, FIFO (먼저 들오는 순서대로 처리)

class GenericQueue<T> {
  private items: T[] = [];

  //enqueue 메서드 (큐를 데이터에 추가)
  enqueue(item: T): void {
    this.items.push(item);
  }
  //dequeue 메서드 (큐의 맨처음 데이터를 꺼냄)
  dequeue(): T | undefined {
    //비어있을때 undefined 반환되기 때문에 union타입 사용
    return this.items.shift();
  }
  //peek 메서드 (큐의 맨처음 데이터를 확인)
  peek(): T | undefined {
    return this.items[0];
  }
  //size 메서드 (현재 큐의 사이즈반환)
  size(): number {
    return this.items.length;
  }
}

//인스턴스 생성
const stringQ = new GenericQueue<string>();

stringQ.enqueue("Hello"); // Hello 추가
console.log(stringQ.peek()); // 데이터 확인 후 출력, Hello
stringQ.dequeue(); //Hello 삭제
stringQ.enqueue("Typescript"); //Typescript 추가
console.log(stringQ.size()); //사이즈 출력, 1
console.log(stringQ.peek()); //Typescript 읽어옴, Typescript

const numberQ = new GenericQueue<number>();

numberQ.enqueue(10);
numberQ.enqueue(20);
