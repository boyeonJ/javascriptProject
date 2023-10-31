

1. **`removeEventListener()`**: 이 메서드는 이전에 `addEventListener()`를 사용하여 연결한 이벤트 리스너를 제거합니다. 아래의 예제는 버튼 클릭 시 이벤트 리스너를 추가하고 제거하는 방법을 보여줍니다.

```javascript
function handleClick() {
  console.log('Button clicked');
}

const button = document.getElementById('myButton');
button.addEventListener('click', handleClick);

// 이후에 리스너 제거
button.removeEventListener('click', handleClick);
```

2. **`querySelectorAll()`**: 이 메서드는 특정 셀렉터와 일치하는 모든 요소를 가져옵니다. 아래의 예제는 CSS 클래스가 "item"인 모든 요소를 선택합니다.

```javascript
const items = document.querySelectorAll('.item');
```

3. **`querySelector()`**: 이 메서드는 특정 셀렉터와 일치하는 첫 번째 요소를 가져옵니다. 아래의 예제는 `id`가 "myElement"인 요소를 선택합니다.

```javascript
const element = document.querySelector('#myElement');
```

4. **`getElementById()`**: 이 메서드는 `id` 속성을 사용하여 특정 요소를 가져옵니다. 아래의 예제는 `id`가 "myElement"인 요소를 선택합니다.

```javascript
const element = document.getElementById('myElement');
```

5. **`getElementsByClassName()`**: 이 메서드는 CSS 클래스 이름과 일치하는 모든 요소를 가져옵니다. 아래의 예제는 클래스가 "myClass"인 모든 요소를 선택합니다.

```javascript
const elements = document.getElementsByClassName('myClass');
```

6. **`getElementsByName()`**: 이 메서드는 `name` 속성과 일치하는 모든 요소를 가져옵니다. 주로 폼 요소에서 사용됩니다.

7. **`getElementsByTagName()`**: 이 메서드는 HTML 태그 이름과 일치하는 모든 요소를 가져옵니다. 아래의 예제는 모든 `div` 요소를 선택합니다.

```javascript
const divs = document.getElementsByTagName('div');
```

8. **`hasFocus()`**: 이 메서드는 요소가 포커스를 가지고 있는지 여부를 확인합니다. 주로 입력 요소나 버튼의 상태를 확인할 때 사용됩니다.

9. **`addEventListener()`**: 이 함수는 요소에 이벤트 리스너를 추가합니다. 이미 `removeEventListener()` 예제를 제공했으므로 중복되지 않도록 다른 예시를 드리겠습니다.

```javascript
const button = document.getElementById('myButton');
button.addEventListener('click', function() {
  console.log('Button clicked');
});
```

10. **`createElement()`, `appendChild()`, `removeChild()`, `setAttribute()`, `removeAttribute()`**: 이러한 메서드와 함수는 DOM을 조작하는 데 사용됩니다. 아래의 예제는 새로운 `<div>` 요소를 생성하고 부모 요소에 추가하며, 속성을 추가 및 제거하는 방법을 보여줍니다.

```javascript
// 새로운 div 요소 생성
const newDiv = document.createElement('div');

// 부모 요소에 추가
const parentElement = document.getElementById('parent');
parentElement.appendChild(newDiv);

// 속성 추가
newDiv.setAttribute('class', 'new-class');

// 속성 제거
newDiv.removeAttribute('class');
```
