/* 
5.
상속 관계에 있는 Animal 과 Cat 클래스를 작성해보세요. Animal 은 sex 필드를, Cat 은 이에 더하여 breed 필드를 가지며, 사용방법과 메소드의 호출내용은 아래와 같습니다.
const myAnimal = new Animal('수컷');
myAnimal.describe(); // 성별: 수컷

const myCat = new Cat('암컷', '페르시안');
myCat.describe(); // 페르시안 (암컷)
*/

class Animal {
    constructor(sex){
        this.sex=sex;
    }

    describe() {
        console.log(`성별: ${this.sex}`);
    }
}

class Cat extends Animal {
    constructor(sex, breed){
        super(sex);
        this.breed=breed;
    }
    describe() {
        console.log(`${this.breed}, (${this.sex})`);
    }
}

const myAnimal = new Animal('수컷');
myAnimal.describe(); // 성별: 수컷

const myCat = new Cat('암컷', '페르시안');
myCat.describe(); // 페르시안 (암컷)