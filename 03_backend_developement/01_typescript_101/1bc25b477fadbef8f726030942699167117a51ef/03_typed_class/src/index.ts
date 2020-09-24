class Bird {
  age: number;

  constructor(age: number) {
    this.age = age;
  }

  sing(): void {
    console.log("Cui cui");
  }

  fly(seconds: number): void {
    if (this.age <= 1) {
      console.log(`The bird is too young to fly`);
    } else if (1 < this.age && this.age <= 3) {
      const meter = 1;
      console.log(`The bird flew ${meter*seconds} "meters in ${seconds} seconds`);
    } else if (this.age > 3) {
      const meter = 2;
      console.log(`The bird flew ${meter*seconds} "meters in ${seconds} seconds`);
    }
  }
}

// Leave the line below for tests to work properly.
export { Bird };
