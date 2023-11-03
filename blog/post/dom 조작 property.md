1. **innerHTML**: 요소의 내부 HTML 콘텐츠를 가져오거나 설정합니다.
   - `element.innerHTML`: 해당 요소의 내부 HTML을 가져옵니다.
   - `element.innerHTML = '새로운 HTML 내용';`: 해당 요소의 내부 HTML을 변경합니다.

2. **innerText**: 요소의 내부 텍스트 콘텐츠를 가져오거나 설정합니다.
   - `element.innerText`: 해당 요소의 내부 텍스트를 가져옵니다.
   - `element.innerText = '새로운 텍스트 내용';`: 해당 요소의 내부 텍스트를 변경합니다.

3. **style**: 요소의 스타일을 설정하고 변경합니다.
   - `element.style.propertyName`: 특정 CSS 속성의 값을 가져옵니다. 예를 들어, `element.style.color`는 요소의 글꼴 색상을 가져옵니다.
   - `element.style.propertyName = 'value';`: 특정 CSS 속성의 값을 변경합니다. 예를 들어, `element.style.backgroundColor = 'red';`은 요소의 배경색을 빨간색으로 설정합니다.

4. **classList**: 요소의 클래스 목록을 관리하며 클래스를 추가, 제거, 토글합니다.
   - `element.classList.add('class-name');`: 클래스를 추가합니다.
   - `element.classList.remove('class-name');`: 클래스를 제거합니다.
   - `element.classList.toggle('class-name');`: 클래스를 추가 또는 제거합니다.

5. **scrollTop**: 요소의 스크롤 위치를 설정하거나 가져옵니다.
   - `element.scrollTop`: 요소의 현재 스크롤 위치를 가져옵니다.
   - `element.scrollTop = value;`: 요소의 스크롤 위치를 변경합니다.

6. **parentElement**: 부모 요소에 접근합니다.
   - `element.parentElement`: 요소의 부모 요소에 접근합니다.

7. **children**: 자식 요소 목록에 접근합니다.
   - `element.children`: 요소의 자식 요소 목록을 가져옵니다.

8. **nextSibling** 및 **previousSibling**: 형제 요소에 접근합니다.
   - `element.nextSibling`: 다음 형제 요소에 접근합니다.
   - `element.previousSibling`: 이전 형제 요소에 접근합니다.

이러한 프로퍼티들은 DOM을 조작하고 웹 페이지를 동적으로 변경하는 데 사용됩니다. 각각의 프로퍼티는 특정 작업을 수행하는 데 도움을 줍니다.