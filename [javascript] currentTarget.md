`e.currentTarget`를 사용하여 이벤트 대상의 클래스를 가져온 다음 다양한 방법으로 활용할 수 있습니다. 아래는 `e.currentTarget.classList`를 사용하는 몇 가지 예시입니다.

1. 클래스 추가 및 제거:
```javascript
const element = e.currentTarget;
element.classList.add('newClass'); // 'newClass' 클래스를 추가합니다.
element.classList.remove('oldClass'); // 'oldClass' 클래스를 제거합니다.
```

2. 클래스 토글:
```javascript
const element = e.currentTarget;
element.classList.toggle('active'); // 'active' 클래스를 토글합니다.
```

3. 클래스 존재 확인:
```javascript
const element = e.currentTarget;
const hasClass = element.classList.contains('someClass'); // 'someClass' 클래스가 존재하는지 확인합니다.
if (hasClass) {
    // 'someClass' 클래스가 존재할 때 수행할 작업
}
```

4. 클래스 대체:
```javascript
const element = e.currentTarget;
element.classList.replace('oldClass', 'newClass'); // 'oldClass'를 'newClass'로 대체합니다.
```

5. 클래스 리스트 확인:
```javascript
const element = e.currentTarget;
const classesList = Array.from(element.classList); // 클래스 리스트를 배열로 변환합니다.
console.log(classesList);
```

6. 클래스 이름 가져오기:
```javascript
const element = e.currentTarget;
const className = element.classList[0]; // 첫 번째 클래스 이름을 가져옵니다.
```

---

### 실전 예시

아래의 클래스 이름을 가진(2개의 클래스 이름을 가진) 버튼이 있습니다.
```html
<button class="btn decrease">decrease</button>
```

아래의 js 코드에서 e.currentTarget.classList를 통해 클래스 이름을 가져오면 이미지 처럼 2개의 클래스 이름이 담긴 [DOMTokenList에](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList) 담겨 옵니다.

> DOMTokenList는 유사배열 객체입니다. [글 참고](https://velog.io/@shleecloud/DOMTokenList)

```js
const btns = document.querySelectorAll('.btn');

btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        const name = e.currentTarget.classList;
        console.log(name);
    })
})
```
![](https://velog.velcdn.com/images/boyeon_jeong/post/7358f946-ade1-4a1c-9d68-8a2058faf2fe/image.png)
